import type { APIRoute } from 'astro';

// Update lastmod when page content changes.
const pages = [
  { path: '/', lastmod: '2026-10-16' },
  { path: '/videos/', lastmod: '2026-10-15' },
  { path: '/privacy/', lastmod: '2026-10-15' },
];

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p.path, site).href}</loc><lastmod>${p.lastmod}</lastmod></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
