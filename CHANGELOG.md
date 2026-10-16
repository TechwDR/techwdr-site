# Changelog

## 2026-10-15
- Add Videos page (/videos/) for the YouTube Shorts series Tech Takes @TechwDR: hand-written click-to-load facade (i.ytimg.com WebP thumbnail + play button, youtube-nocookie iframe on click via /js/yt-facade.js, plain link to the Short without JS), 9:16 layout, VideoObject JSON-LD per Short, data in src/data/videos.ts. Header Videos link, sitemap and llms.txt entries. CSP: img-src adds https://i.ytimg.com, new frame-src https://www.youtube-nocookie.com; script-src unchanged.
- Display X handle case corrected from `@Techwdr` to `@TechwDR` (src/config/site.ts: social handle and twitter:site/creator). URL stays https://x.com/Techwdr. Raster images not edited.
