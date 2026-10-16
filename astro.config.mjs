// @ts-check
import { defineConfig } from 'astro/config';

// Production URL, used for canonical URLs, Open Graph tags and the sitemap.
const site = process.env.SITE_URL ?? 'https://techwdr.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});
