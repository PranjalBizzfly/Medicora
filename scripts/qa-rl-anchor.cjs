process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
const { chromium } = require('playwright');
(async () => {
  const br = await chromium.launch();
  for (const vp of [{ width: 1440, height: 900 }, { width: 375, height: 760 }]) {
    const p = await br.newPage({ viewport: vp });
    for (const route of ['privacy-policy', 'cookie-policy']) {
      await p.goto('http://localhost:3123/' + route, { waitUntil: 'networkidle' });
      for (const n of [1, 5, 9]) {
        const l = p.locator('.lg-toc-link').nth(n); if (!(await l.count())) continue;
        await l.click(); await p.waitForTimeout(2000);
        const r = await p.evaluate(() => { const el = document.querySelector(location.hash + ' h2').getBoundingClientRect(); return [location.hash, Math.round(el.top), Math.round(scrollY), document.documentElement.scrollHeight - innerHeight, getComputedStyle(document.querySelector(location.hash)).scrollMarginTop, getComputedStyle(document.documentElement).scrollBehavior]; });
        console.log(vp.width, route, n, JSON.stringify(r));
      }
    }
    await p.screenshot({ path: 'qa-screens/resources-legal/anchor-' + vp.width + '.png' });
  }
  await br.close();
})();
