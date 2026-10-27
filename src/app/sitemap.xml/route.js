import { ROUTES, SITE_URL } from '../../lib/seo';

// XML sitemap of the 34 canonical production URLs.
export function GET() {
  const urls = ROUTES.map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '' : r}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
