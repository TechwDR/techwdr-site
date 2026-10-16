# techwdr-site

Source for https://techwdr.com, the personal site of David Rice (TechwDR).

## Build

Static Astro site. Node 22.12 or later (see `.nvmrc`; Netlify reads `NODE_VERSION` from `netlify.toml`).

```sh
npm ci
npm run build   # output in dist/
```

No forms, no analytics, no third-party scripts or fonts. The pages ship as plain HTML and CSS with no client JavaScript.

## Add a YouTube Short (Videos page)
Add one line at the top of the `shorts` array in `src/data/videos.ts` (newest first):
```ts
{ id: 'VIDEO_ID', title: 'Title from YouTube', date: '2026-10-15T19:19:20-07:00', description: 'One sentence.' },
```
- `id` is the part after `youtube.com/shorts/`.
- Get the real title from `https://www.youtube.com/oembed?url=https://youtube.com/shorts/VIDEO_ID&format=json` and the upload date from the Short's page (`uploadDate`). Don't guess the date.
- Bump the `/videos/` lastmod in `src/pages/sitemap.xml.ts`, then run `npm run build`.
No CSP change is needed: thumbnails come from i.ytimg.com and the player from youtube-nocookie.com, both already allowed.

## Licenses

- Code: based on ST AI Agency by StrivioThemes, MIT © 2026 StrivioThemes (see `LICENSE`). Copied once from commit 04927b4; upstream is not tracked.
- Site content, photos and copy: © 2026 David Rice (TechwDR). All rights reserved. Not covered by the MIT license.
- Fonts: Inter Tight (The Inter Project Authors, via Fontsource) and JetBrains Mono (The JetBrains Mono Project Authors) are licensed under the SIL Open Font License 1.1. The theme's Outfit font (The Outfit Project Authors, SIL OFL 1.1) is still listed as a dependency but is not used.
- Icons: LinkedIn, X and YouTube marks from Simple Icons (CC0). Trademarks belong to their owners.
