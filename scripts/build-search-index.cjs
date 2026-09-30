// Builds src/data/searchIndex.json from the prerendered pages in .next.
// Uses only text already on each page (title, meta description, h1–h3),
// so search never introduces new content.
// Usage: npm run build && node scripts/build-search-index.cjs && npm run build
const fs = require('fs');
const path = require('path');

const appDir = path.join('.next', 'server', 'app');
const routes = fs.readdirSync('src/app', { recursive: true })
  .filter((f) => f.endsWith('page.jsx'))
  .map((f) => '/' + f.split('\\').join('/').replace('page.jsx', '').replace(/\/$/, ''))
  .sort();

const decode = (s) => s
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

const groupOf = (r) => {
  if (r === '/') return 'Home';
  if (r.startsWith('/expertise')) return 'Expertise';
  if (r.startsWith('/my-approach/')) return 'My Approach';
  if (r.startsWith('/credentials')) return 'Credentials';
  if (r.startsWith('/resources')) return 'Resources';
  if (r === '/book-a-consultation') return 'Connect';
  if (['/privacy-policy', '/terms-and-conditions', '/disclaimer', '/cookie-policy', '/sitemap'].includes(r)) return 'Legal';
  return 'About Us';
};

const index = routes.map((r) => {
  const file = path.join(appDir, r === '/' ? 'index.html' : r.slice(1) + '.html');
  const html = fs.readFileSync(file, 'utf8');
  const main = html.split('<main')[1] || html;
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '').replace(/\s*\|\s*Dr\. Mohini Mutha$/, '');
  const description = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const headings = [...main.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/g)]
    .map((m) => decode(m[1]))
    .filter((h, i, all) => h && all.indexOf(h) === i)
    .slice(0, 24);
  return { path: r, group: groupOf(r), title: r === '/' ? 'Home' : title, description, headings };
});

fs.writeFileSync(path.join('src', 'data', 'searchIndex.json'), JSON.stringify(index, null, 1) + '\n');
console.log(`indexed ${index.length} pages, ${index.reduce((n, p) => n + p.headings.length, 0)} headings`);
