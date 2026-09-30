// Captures a route as consecutive viewport-sized frames for visual review.
// Usage: node scripts/qa-frames.cjs <route> <desktop|mobile> [baseUrl]
process.env.PLAYWRIGHT_BROWSERS_PATH = process.env.PLAYWRIGHT_BROWSERS_PATH || '0';
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Route is given without a leading slash; "home" means the root page.
const arg = process.argv[2] || 'home';
const route = arg === 'home' ? '/' : '/' + arg.replace(/^\/+/, '');
const mode = process.argv[3] || 'desktop';
const base = process.argv[4] || 'http://localhost:3123';
const vp = mode === 'mobile' ? { width: 375, height: 760 } : { width: 1440, height: 900 };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: vp, reducedMotion: 'reduce' });
  await page.goto(base + route, { waitUntil: 'networkidle' });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const dir = path.join('qa-screens', 'frames');
  fs.mkdirSync(dir, { recursive: true });
  const slug = (route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_')) + '_' + mode;
  let i = 0;
  for (let y = 0; y < height; y += vp.height) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(150);
    const file = path.join(dir, `${slug}_${String(i).padStart(2, '0')}.png`);
    await page.screenshot({ path: file });
    console.log(file);
    i += 1;
  }
  await browser.close();
})();
