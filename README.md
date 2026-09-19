# Garage Air Conditioner Guide

An independent, interactive GARVEE U.S. content prototype for people deciding how to cool, heat, dehumidify, ventilate, or protect a garage.

The page deliberately starts with the garage and its use case rather than a product grid. It includes:

- Four scenario lenses for comfort, storage protection, work, and air quality
- A transparent screening tool for equipment path and cooling-load range
- Side-by-side system tradeoffs for mini-splits, portable ACs, window ACs, evaporative coolers, and building-first fixes
- Climate, installation, maintenance, and safety guidance
- Category-level GARVEE links that do not depend on a short-lived SKU claim
- A source disclosure separating authoritative technical evidence from Reddit and Amazon voice-of-customer research

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm test
npm run build
```

## Deployment

Pushes to `main` deploy `dist/` to GitHub Pages through `.github/workflows/deploy.yml`.

Public URL: <https://igocc.github.io/garage-air-conditioner-guide/>

## Evidence boundary

The advisor is a screening aid, not a Manual J calculation and not a product selector. It starts from public room-AC guidance, then applies broad modifiers for ceiling height, enclosure, climate, sun, and door use. The intentionally wide result must be checked against the exact equipment manual, building conditions, local rules, and a qualified load calculation when cost or risk is significant.

The attached VOC deck informed hypotheses and question framing. It did not include a reproducible table of raw Reddit URLs, Amazon review exports, or Semrush metrics, so the implementation does not treat its claims as verified data. See [RESEARCH.md](RESEARCH.md) for the evidence trail.

## Generated images

Six page-region images were generated for this project and exported as WebP for delivery. The uncompressed source outputs remain in the Codex generation workspace. Exact prompts are recorded in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).
