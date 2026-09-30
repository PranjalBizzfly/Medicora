// Crawls a running build (default http://localhost:3000) and checks every
// App Router route, internal link, brand asset and font. Usage:
//   npm run build && npm run start   then   node scripts/verify-site.cjs [baseUrl]
const fs = require('fs');

const base = process.argv[2] || 'http://localhost:3000';

(async () => {
  const routes = fs.readdirSync('src/app', { recursive: true })
    .filter((f) => f.endsWith('page.jsx'))
    .map((f) => '/' + f.split('\\').join('/').replace('page.jsx', '').replace(/\/$/, ''));

  const links = new Set();
  const bad = [];
  let home = '';

  for (const r of routes) {
    const res = await fetch(base + r);
    const html = await res.text();
    if (r === '/') home = html;
    if (res.status !== 200) bad.push(`${r} -> ${res.status}`);
    if (!/<title>[^<]+/.test(html)) bad.push(`${r} -> missing <title>`);
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) links.add(m[1]);
  }

  const pageLinks = [...links].filter((l) => !/\.[a-z0-9]+$/i.test(l) && !l.startsWith('/_next'));
  const broken = pageLinks.filter((l) => !routes.includes(l.replace(/\/$/, '') || '/'));

  const assets = [
    '/brand/logo-secondary.png',
    '/brand/logo-icon.png',
    '/_next/image?url=%2Fbrand%2Flogo-secondary.png&w=384&q=75',
  ];
  for (const a of assets) {
    const s = (await fetch(base + a)).status;
    if (s !== 200) bad.push(`${a} -> ${s}`);
  }

  const fontFiles = [...home.matchAll(/\/_next\/static\/media\/[^"')]+\.(woff2|ttf)/g)].length;
  const notFound = await fetch(base + '/does-not-exist');
  const notFoundShowsHome = (await notFound.text()).includes('A thoughtful approach to your health and wellbeing');

  console.log({
    routes: routes.length,
    internalLinks: pageLinks.length,
    broken,
    bad,
    fontFiles,
    notFoundStatus: notFound.status,
    notFoundShowsHome,
  });
  process.exit(broken.length || bad.length ? 1 : 0);
})();
