import { readFile, readdir, writeFile } from 'node:fs/promises'
import { extname } from 'node:path'

const outputDir = new URL('../dist-offline/', import.meta.url)
const assetsDir = new URL('assets/', outputDir)
const htmlPath = new URL('index.html', outputDir)

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

async function toDataUrl(path, mimeType) {
  const file = await readFile(path)
  return `data:${mimeType};base64,${file.toString('base64')}`
}

let html = await readFile(htmlPath, 'utf8')
const scriptMatch = html.match(/<script type="module"[^>]*src="\.\/assets\/([^"]+\.js)"><\/script>/)
const styleMatch = html.match(/<link rel="stylesheet"[^>]*href="\.\/assets\/([^"]+\.css)"[^>]*>/)

if (!scriptMatch || !styleMatch) {
  throw new Error('Could not locate the Vite JavaScript and stylesheet entries.')
}

const javascript = await readFile(new URL(`assets/${scriptMatch[1]}`, outputDir), 'utf8')
let stylesheet = await readFile(new URL(`assets/${styleMatch[1]}`, outputDir), 'utf8')

const assetNames = await readdir(assetsDir)
const imageNames = assetNames.filter((name) => mimeTypes[extname(name)]?.startsWith('image/'))
const imageEntries = await Promise.all(imageNames.map(async (name) => [
  name,
  await toDataUrl(new URL(`assets/${name}`, outputDir), mimeTypes[extname(name)]),
]))
const imageManifest = Object.fromEntries(imageEntries)

const cssAssetMatches = [...stylesheet.matchAll(/url\((?:"|')?([^"')]+)(?:"|')?\)/g)]
for (const [, reference] of cssAssetMatches) {
  if (reference.startsWith('data:')) continue
  const fileName = reference.replace(/^\.\//, '').replace(/^assets\//, '')
  const mimeType = mimeTypes[extname(fileName)]
  if (!mimeType) continue
  const dataUrl = await toDataUrl(new URL(`assets/${fileName}`, outputDir), mimeType)
  stylesheet = stylesheet.replaceAll(reference, dataUrl)
}

const favicon = await toDataUrl(new URL('favicon.svg', outputDir), 'image/svg+xml')
const manifestScript = `window.__GARAGE_OFFLINE_ASSETS__=Object.freeze(${JSON.stringify(imageManifest)});`

html = html
  .replace(/<link\s+[\s\S]*?rel="preload"[\s\S]*?fetchpriority="high"[\s\S]*?\/>/, '')
  .replace(/<link rel="icon"[^>]*>/, () => `<link rel="icon" href="${favicon}" type="image/svg+xml" />`)
  .replace(styleMatch[0], () => `<style>${stylesheet.replaceAll('</style', '<\\/style')}</style>`)
  .replace(scriptMatch[0], '')
  .replace('</body>', () => `<script>${manifestScript}</script><script>${javascript.replaceAll('</script', '<\\/script')}</script></body>`)

await writeFile(new URL('garage-air-conditioner-guide-offline.html', outputDir), html)
await writeFile(new URL('OFFLINE-README.txt', outputDir), [
  'GARVEE Garage Air Conditioner Guide - Offline Edition',
  '',
  'Open garage-air-conditioner-guide-offline.html in a modern browser.',
  'The guide, images, fonts, planner, filters, and interactive modules work without a network connection.',
  'Links to GARVEE product pages and external research sources require internet access.',
  'The installation-service module is a non-submitting concept demonstration.',
  '',
  'Generated from the repository with: npm run build:offline',
].join('\n'))

console.log('Created dist-offline/garage-air-conditioner-guide-offline.html')
