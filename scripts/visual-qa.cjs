// Visual QA: screenshots every route at desktop + mobile and reports layout issues.
// Usage: npm run build && npm run start -- -p 3123 ; then
//   set PLAYWRIGHT_BROWSERS_PATH=0 && node scripts/visual-qa.cjs [baseUrl] [routeFilter]
process.env.PLAYWRIGHT_BROWSERS_PATH = process.env.PLAYWRIGHT_BROWSERS_PATH || '0';
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const base = process.argv[2] || 'http://localhost:3123';
const filter = process.argv[3] || '';
const outDir = path.join('qa-screens');
fs.mkdirSync(outDir, { recursive: true });

const routes = fs.readdirSync('src/app', { recursive: true })
  .filter((f) => f.endsWith('page.jsx'))
  .map((f) => '/' + f.split('\\').join('/').replace('page.jsx', '').replace(/\/$/, ''))
  .filter((r) => r.includes(filter))
  .sort();

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 800 },
];

(async () => {
  const browser = await chromium.launch();
  const report = [];
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    for (const r of routes) {
      consoleErrors.length = 0;
      await page.goto(base + r, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        // Scroll through to trigger lazy images.
        for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((res) => setTimeout(res, 40)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(250);
      const issues = await page.evaluate(() => {
        const out = [];
        const docW = document.documentElement.clientWidth;
        const overflowing = document.documentElement.scrollWidth > docW + 1;
        if (overflowing) out.push(`horizontal overflow ${document.documentElement.scrollWidth}px > ${docW}px`);
        if (overflowing) document.querySelectorAll('body *').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > docW + 2 && getComputedStyle(el).position !== 'fixed') {
            const cls = (el.className && el.className.baseVal === undefined ? el.className : '') || el.tagName;
            if (!out.some((o) => o.includes(cls))) out.push(`overflows viewport: <${el.tagName.toLowerCase()} class="${cls}"> right=${Math.round(r.right)}`);
          }
        });
        document.querySelectorAll('img').forEach((img) => { if (img.complete && img.naturalWidth === 0) out.push(`broken image ${img.getAttribute('src')}`); if (!img.hasAttribute('alt')) out.push(`img missing alt ${img.getAttribute('src')}`); });
        const h1 = document.querySelectorAll('h1').length;
        if (h1 !== 1) out.push(`h1 count = ${h1}`);
        document.querySelectorAll('a, button').forEach((el) => {
          const name = (el.getAttribute('aria-label') || el.textContent || '').trim();
          if (!name) out.push(`unlabelled ${el.tagName.toLowerCase()} ${el.getAttribute('href') || ''}`);
        });
        document.querySelectorAll('input, select, textarea').forEach((el) => {
          if (el.type === 'hidden') return;
          const labelled = el.id && document.querySelector(`label[for="${el.id}"]`) || el.getAttribute('aria-label') || el.closest('label');
          if (!labelled) out.push(`form field without label: ${el.name || el.id || el.type}`);
        });
        return out.slice(0, 25);
      });
      if (consoleErrors.length) issues.push(...consoleErrors.map((e) => 'console: ' + e.slice(0, 160)));
      const file = path.join(outDir, `${vp.name}${r === '/' ? '_home' : r.replace(/\//g, '_')}.png`);
      await page.screenshot({ path: file, fullPage: true });
      report.push({ viewport: vp.name, route: r, issues });
    }
    await ctx.close();
  }
  await browser.close();
  const withIssues = report.filter((x) => x.issues.length);
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`checked ${report.length} page-views, ${withIssues.length} with issues`);
  for (const x of withIssues) console.log(`\n[${x.viewport}] ${x.route}\n  - ${x.issues.join('\n  - ')}`);
})();
