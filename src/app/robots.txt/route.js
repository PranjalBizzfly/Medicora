import { SITE_URL, isIndexable } from '../../lib/seo';

export const dynamic = 'force-dynamic';

// Staging/preview: block all crawlers. Production (SITE_INDEXABLE=true): allow,
// and point to the XML sitemap on the production domain.
export function GET() {
  const body = isIndexable()
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
