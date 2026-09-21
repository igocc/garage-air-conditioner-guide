declare global {
  interface Window {
    __GARAGE_OFFLINE_ASSETS__?: Readonly<Record<string, string>>
  }
}

export function asset(name: string) {
  return window.__GARAGE_OFFLINE_ASSETS__?.[name]
    ?? `${import.meta.env.BASE_URL}assets/${name}`
}
