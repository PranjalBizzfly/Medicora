// Phase 6 QA: search, explore-all-pages overlay, theme toggle + dark mode.
process.env.PLAYWRIGHT_BROWSERS_PATH = process.env.PLAYWRIGHT_BROWSERS_PATH || '0';
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const base = process.argv[2] || 'http://localhost:3123';
const out = path.join('qa-screens', 'phase6');
fs.mkdirSync(out, { recursive: true });
const log = [];
const check = (name, ok, detail = '') => log.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' â€” ' + detail : ''}`);

(async () => {
  const browser = await chromium.launch();

  // ---------- Desktop ----------
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await page.goto(base + '/', { waitUntil: 'networkidle' });

  // Search
  await page.getByRole('button', { name: 'Search the website' }).first().click();
  const input = page.getByRole('combobox');
  check('search opens and focuses the field', await input.evaluate((el) => el === document.activeElement));
  await input.fill('anxiety');
  await page.waitForTimeout(150);
  const results = await page.locator('.search-item').count();
  check('search "anxiety" returns results', results > 0, `${results} results`);
  await page.screenshot({ path: path.join(out, 'desktop-search.png') });
  await input.fill('zzzqqq');
  check('search no-match message', await page.getByText(/No pages match/).isVisible());
  await input.fill('sleep');
  await page.locator('.search-item').first().click();
  await page.waitForURL(/sleep/);
  check('search result navigates', page.url().includes('sleep'), page.url());
  check('search panel closes after navigating', (await page.locator('.search-dialog').count()) === 0);
  await page.getByRole('button', { name: 'Search the website' }).first().click();
  await page.keyboard.press('Escape');
  check('Escape closes search', (await page.locator('.search-dialog').count()) === 0);

  // Explore
  await page.getByRole('button', { name: 'Search the website' }).first().click();
  await page.getByRole('button', { name: 'Explore all pages' }).click();
  check('search panel closes when explore opens', (await page.locator('.search-dialog').count()) === 0);
  const exploreLinks = await page.locator('.explore-link').count();
  check('explore lists all 34 pages', exploreLinks === 34, `${exploreLinks} links`);
  await page.screenshot({ path: path.join(out, 'desktop-explore.png') });
  await page.keyboard.press('Escape');
  check('Escape closes explore', (await page.locator('.explore-dialog').count()) === 0);

  // Theme
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Switch to dark theme' }).filter({ visible: true }).first().click();
  check('toggle sets dark theme', (await page.evaluate(() => document.documentElement.dataset.theme)) === 'dark');
  await page.reload({ waitUntil: 'networkidle' });
  check('dark theme persists after reload', (await page.evaluate(() => document.documentElement.dataset.theme)) === 'dark');
  for (const r of ['/', '/expertise/mental-emotional-psychosomatic-wellness', '/resources/faqs', '/book-a-consultation', '/privacy-policy']) {
    await page.goto(base + r, { waitUntil: 'networkidle' });
    const name = r === '/' ? 'home' : r.slice(1).replace(/\//g, '_');
    await page.screenshot({ path: path.join(out, `dark-${name}.png`) });
  }
  await page.getByRole('button', { name: 'Switch to light theme' }).filter({ visible: true }).first().click();
  check('toggle back to light', (await page.evaluate(() => document.documentElement.dataset.theme)) === 'light');
  await page.close();

  // Device preference default (no saved choice)
  const ctxDark = await browser.newContext({ colorScheme: 'dark' });
  const p2 = await ctxDark.newPage();
  await p2.goto(base + '/', { waitUntil: 'networkidle' });
  check('follows device dark preference by default', (await p2.evaluate(() => document.documentElement.dataset.theme)) === 'dark');
  await ctxDark.close();

  // Scroll buttons
  const p3 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p3.goto(base + '/', { waitUntil: 'networkidle' });
  await p3.getByRole('button', { name: 'Scroll to bottom' }).click();
  await p3.waitForTimeout(1500);
  check('scroll-to-bottom reaches the footer', await p3.evaluate(() => window.scrollY + innerHeight >= document.documentElement.scrollHeight - 5));
  await p3.getByRole('button', { name: 'Scroll to top' }).click();
  await p3.waitForTimeout(1500);
  check('scroll-to-top returns to top', await p3.evaluate(() => window.scrollY < 5));
  await p3.close();

  // ---------- Mobile ----------
  const m = await browser.newPage({ viewport: { width: 375, height: 760 }, reducedMotion: 'reduce' });
  await m.goto(base + '/', { waitUntil: 'networkidle' });
  check('mobile: no horizontal scroll with header tools', await m.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
  await m.getByRole('button', { name: 'Search the website' }).first().click();
  await m.getByRole('combobox').fill('women');
  await m.waitForTimeout(150);
  const panel = await m.locator('.search-dialog').boundingBox();
  check('mobile: search panel inside viewport', panel && panel.x >= 0 && panel.x + panel.width <= 375, JSON.stringify(panel));
  await m.screenshot({ path: path.join(out, 'mobile-search.png') });
  await m.keyboard.press('Escape');
  await m.getByRole('button', { name: 'Search the website' }).first().click();
  await m.getByRole('button', { name: 'Explore all pages' }).click();
  check('mobile: explore opens from search', (await m.locator('.explore-link').count()) === 34);
  await m.screenshot({ path: path.join(out, 'mobile-explore.png') });
  await m.close();

  await browser.close();
  console.log(log.join('\n'));
})();




