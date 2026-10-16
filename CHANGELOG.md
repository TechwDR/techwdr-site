# Changelog

## 2026-10-16
- Repo security baseline (RS1 A): added .github/CODEOWNERS (@DRDEVTW), .github/dependabot.yml (npm + GitHub Actions, weekly, grouped) and SECURITY.md (private vulnerability reporting or privacy@techwdr.com). .gitignore now covers .env.* (except .env.example), *.pem and *.key. The CI workflow is committed separately by David.
- Latest writing: added the live LinkedIn post Every Connector Is a Door (2026-10-16) as the first card. Copy from Signal's brief (/home/box/bench/signal/2026-10-16-techwdr-site-update-brief.md); links only to David's post. Home sitemap lastmod 2026-10-16.

## 2026-10-15
- Privacy page and llms.txt: removed the absolute no-tracking/no-cookies claims and disclosed the /videos/ YouTube path (i.ytimg.com thumbnails; youtube-nocookie.com player only after Play, under YouTube's privacy policy). README now notes the one first-party script, /js/yt-facade.js (Shield PR #4 conditions).
- Add Videos page (/videos/) for the YouTube Shorts series Tech Takes @TechwDR: hand-written click-to-load facade (i.ytimg.com WebP thumbnail + play button, youtube-nocookie iframe on click via /js/yt-facade.js, plain link to the Short without JS), 9:16 layout, VideoObject JSON-LD per Short, data in src/data/videos.ts. Header Videos link, sitemap and llms.txt entries. CSP: img-src adds https://i.ytimg.com, new frame-src https://www.youtube-nocookie.com; script-src unchanged.
- Display X handle case corrected from `@Techwdr` to `@TechwDR` (src/config/site.ts: social handle and twitter:site/creator). URL stays https://x.com/Techwdr. Raster images not edited.
