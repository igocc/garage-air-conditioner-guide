# Garage Air Conditioner Guide

An independent, interactive GARVEE U.S. content prototype for people deciding how to cool, heat, dehumidify, ventilate, or protect a garage.

The page deliberately starts with the garage and its use case rather than a product grid. It includes:

- Six full decision journeys for a humid gym, daily office, wood shop, protected storage, rental or HOA constraints, and cold-climate use
- A transparent screening tool for equipment path, cooling-load range, exact GARVEE SKU candidates, and no-fit results
- Side-by-side system tradeoffs for mini-splits, portable ACs, window ACs, evaporative coolers, and building-first fixes
- Nine official GARVEE product snapshots with rating-basis, voltage, page-claim, installation, and evidence caveats
- Climate, envelope, air-quality, installation, total-scope, maintenance, warranty, and safety guidance
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

The advisor is a screening aid, not a Manual J calculation. It starts from public room-AC guidance, then applies broad modifiers for ceiling height, enclosure, climate, sun, and door use. Its SKU output is a product shortlist with explicit stop conditions, not a performance guarantee. The intentionally wide result must be checked against the exact equipment manual, building conditions, local rules, and a qualified load calculation when cost or risk is significant.

The attached VOC deck informed hypotheses and question framing. It did not include a reproducible table of raw Reddit URLs, Amazon review exports, or Semrush metrics, so the implementation does not treat its claims as verified data. See [RESEARCH.md](RESEARCH.md) for the technical evidence trail and [PRODUCT_RESEARCH.md](PRODUCT_RESEARCH.md) for the official-product snapshot, contradictions, and scenario matrix.

## Generated images

Seven page-region images were generated for this project and exported as WebP for delivery. The uncompressed source outputs remain in the Codex generation workspace. Exact prompts are recorded in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).

Product-card photographs are snapshots from the linked official GARVEE product pages, captured on 2026-09-21. They are not generated images and should be refreshed if this prototype becomes a maintained production page.
