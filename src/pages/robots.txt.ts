import type { APIRoute } from 'astro';

// Everyone may crawl. Search and AI crawlers are also listed explicitly so the intent is clear.
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

export const GET: APIRoute = ({ site }) => {
  const named = bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n');
  return new Response(`User-agent: *\nAllow: /\n\n${named}\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
