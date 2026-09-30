// Motion QA: with animations ON, scroll every page and confirm no revealed
// element is left hidden, and the hero is visible without scrolling.
process.env.PLAYWRIGHT_BROWSERS_PATH = process.env.PLAYWRIGHT_BROWSERS_PATH || '0';
const fs = require('fs');
const { chromium } = require('playwright');

const base = process.argv[2] || 'http://localhost:3123';
const routes = fs.readdirSync('src/app', { recursive: true })
  .filter((f) => f.endsWith('page.jsx'))
  .map((f) => '/' + f.split('\\').join('/').replace('page.jsx', '').replace(/\/$/, ''))
  .sort();

(async () => {
  const browser = await chromium.launch();
  const failures = [];
  for (const width of [1440, 375]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'no-preference' });
    for (const r of routes) {
      await page.goto(base + r, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1200); // hero entrance finishes
      const heroHidden = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return !h1 || Number(getComputedStyle(h1).opacity) < 0.99;
      });
      await page.evaluate(async () => {
        for (let y = 0; y <= document.body.scrollHeight; y += 300) {
          window.scrollTo(0, y);
          await new Promise((res) => setTimeout(res, 60));
        }
      });
      await page.waitForTimeout(1800);
      const stuck = await page.evaluate(() => {
        const all = [...document.querySelectorAll('[data-reveal]')];
        return {
          total: all.length,
          stuck: all.filter((el) => !el.classList.contains('is-revealed') || Number(getComputedStyle(el).opacity) < 0.99).length,
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        };
      });
      if (heroHidden || stuck.stuck || stuck.overflow) failures.push({ width, r, heroHidden, ...stuck });
    }
    await page.close();
  }
  await browser.close();
  console.log(failures.length ? failures : 'motion OK: all pages, both widths — hero visible, every reveal completed, no overflow');
})();
