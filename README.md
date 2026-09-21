# Garage Air Conditioner Guide

An independent, interactive GARVEE U.S. content prototype for people deciding how to cool, heat, dehumidify, ventilate, or protect a garage.

The page deliberately starts with the garage and its use case rather than a product grid. It includes:

- Eight full decision journeys for a humid gym, daily office, gaming or music room, wood shop, auto detailing, protected storage, rental or HOA constraints, and cold-climate use
- Four interactive video storyboards with full scripts, captions, visual beats, and honest AI-image disclosure
- A transparent screening tool for equipment path, cooling-load range, exact GARVEE SKU candidates, combustion-appliance stop conditions, and no-fit results
- A filterable 18-item pain-point atlas covering smoke, condensate, electrical capacity, special openings, acoustics, serviceability, zoning, smart controls, corrosion, accessibility, and outage behavior
- An eight-mode operating playbook that follows arrival, pre-conditioning, long occupancy, process work, moisture recovery, unattended protection, smoke events, and winter defrost
- Four decision gates covering safe garage use, non-AC environmental loads, exact-site installability, and interaction with batteries, EV charging, and heat-pump water heaters
- A deck-derived VOC module with explicit methodology limits, activity clusters, mini-split barriers, and the eight-step portable-to-mini-split education path
- Side-by-side system tradeoffs for mini-splits, portable ACs, window ACs, evaporative coolers, and building-first fixes
- A complete upgrade ladder plus dehumidifier and heat-pump-water-heater side paths
- Nine official GARVEE product snapshots with rating-basis, voltage, page-claim, installation, and evidence caveats
- System-specific completion kits for mini-split, portable, and window paths, with explicit in-box, site-required, conditional, upgrade, and third-party-material labels
- A persistent My Garage Plan drawer that combines scenario, diagnosis, load band, product candidates, accessories, installation tasks, stop conditions, quote preparation, and ownership checks
- A clearly labeled installation-coordination concept with simulated ZIP states, a non-submitting site brief, professional scope flow, and separate product-versus-workmanship responsibility
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

The attached VOC deck informed hypotheses and question framing. It did not include a reproducible table of raw Reddit URLs or Amazon review exports, so deck-reported rates are labeled and are not presented as independently verified data. See [PPT_COVERAGE_AUDIT.md](PPT_COVERAGE_AUDIT.md) for the slide-by-slide audit, [VIDEO_CONTENT.md](VIDEO_CONTENT.md) for the production-ready storyboards, [INTERNET_PAIN_POINT_RESEARCH.md](INTERNET_PAIN_POINT_RESEARCH.md) for the first pain-point research pass, [COMPREHENSIVE_CONTENT_GAP_RESEARCH.md](COMPREHENSIVE_CONTENT_GAP_RESEARCH.md) for the decision-changing edge-condition audit, [RESEARCH.md](RESEARCH.md) for the technical evidence trail, [PRODUCT_RESEARCH.md](PRODUCT_RESEARCH.md) for the official-product snapshot, and [GARVEE_SERVICE_ACCESSORY_FACTS.md](GARVEE_SERVICE_ACCESSORY_FACTS.md) for the current public installation-service and accessory boundary.

## Generated images

Ten page-region images are used in the current experience. Generated delivery assets are optimized as WebP or JPEG according to their role. The uncompressed source outputs remain in the Codex generation workspace. Exact prompts are recorded in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).

Product-card photographs are snapshots from the linked official GARVEE product pages, captured on 2026-09-21. They are not generated images and should be refreshed if this prototype becomes a maintained production page.
