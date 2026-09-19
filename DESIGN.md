# Design contract

## Product intent

This is a content-led commerce guide, not a campaign landing page. The experience should feel like a trustworthy hardware retailer explaining a difficult purchase before presenting category links.

## Audience and hierarchy

Primary audience: U.S. garage owners comparing cooling paths for a gym, office, workshop, vehicle bay, or storage space.

Reading order:

1. Name the job and the dominant problem.
2. Explain why garages behave differently from bedrooms.
3. Build a personalized starting plan.
4. Compare system failure modes.
5. Check climate, installation, maintenance, and safety.
6. Move to a stable category page when a path is credible.

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

- Spatial composition: 6/10
- Motion intensity: 4/10
- Visual density: 5/10

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
- Passing lint, unit tests, and production build
