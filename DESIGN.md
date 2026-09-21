# Design contract

## Product intent

This is a content-led commerce guide, not a campaign landing page. The experience should feel like a trustworthy hardware retailer explaining a difficult purchase before presenting category links.

## Audience and hierarchy

Primary audience: U.S. garage owners comparing cooling paths for a gym, office, workshop, vehicle bay, or storage space.

Reading order:

1. Imagine the garage as a usable part of daily life.
2. Follow one of eight scenario narratives and expose hidden problems.
3. Follow eight operating modes and four decision gates that change the plan over time.
4. Diagnose the envelope, heat-rejection path, electrical route, air quality, and load band.
5. Choose a system and complete it with the right site materials and professional tasks.
6. Compare verified product candidates and the installed decision.
7. Prepare a transparent installation scope without implying live service coverage.
8. Carry the result into maintenance, safety, warranty, and second-season ownership.

## Visual system

- Brand navy: `#074174`
- Deep navy: `#05345D`
- Action orange: `#ED7623`
- Ink: `#16212B`
- Backgrounds: white, cool gray, pale blue
- Display and body: Source Sans 3 Variable
- Technical labels: Source Code Pro Variable
- Card radius: 20 px
- Control radius: 12 px
- Button radius: 10 px
- Spacing is section-led, with denser interactive controls inside the advisor

The orange accent is reserved for progress, primary actions, and a few high-value signals. Images use navy and orange only as subtle environmental echoes, not as artificial product branding.

## Design dials

- Spatial composition: 8/10
- Motion intensity: 5/10
- Visual density: 6/10

Layouts alternate between full-width media, split editorial sections, comparison rails, form/result columns, and compact information grids. Motion is limited to reading progress, section reveals, and state changes. Reduced-motion preferences disable nonessential movement.

## Image strategy

Generated visuals are editorial context images, not product photography. They must never imply that a depicted unit is an exact GARVEE SKU or that an installation shown is universally compliant.

## Acceptance criteria

- Responsive at 375 px, 768 px, and 1440 px widths
- Keyboard-operable interactive controls with visible focus
- Useful alt text for informative images and empty alt text for the decorative hero
- Light and dark color schemes, plus reduced-motion handling
- No invented keyword-volume, review-count, efficiency, capacity, price, or installation claims
- Stable category CTAs and a visible evidence boundary
- Installation coordination is labeled as a concept demo and never presents simulated ZIP states as live coverage
- Passing lint, unit tests, and production build
