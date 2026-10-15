# techwdr-site

Source for https://www.techwdr.com, the personal site of David Rice (TechwDR).

## Build

Static Astro site. Node 22.12 or later (see `.nvmrc`; Netlify reads `NODE_VERSION` from `netlify.toml`).

```sh
npm ci
npm run build   # output in dist/
```

No forms, no analytics, no third-party scripts or fonts. The pages ship as plain HTML and CSS with no client JavaScript.

## Licenses

- Code: based on ST AI Agency by StrivioThemes, MIT © 2026 StrivioThemes (see `LICENSE`). Copied once from commit 04927b4; upstream is not tracked.
- Site content, photos and copy: © 2026 David Rice (TechwDR). All rights reserved. Not covered by the MIT license.
- Fonts: Inter Tight (The Inter Project Authors, via Fontsource) and JetBrains Mono (The JetBrains Mono Project Authors) are licensed under the SIL Open Font License 1.1. The theme's Outfit font (The Outfit Project Authors, SIL OFL 1.1) is still listed as a dependency but is not used.
- Icons: LinkedIn, X and YouTube marks from Simple Icons (CC0). Trademarks belong to their owners.
