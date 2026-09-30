// QA: credentials + booking form interactions. Injects local CSS so edits can be previewed.
process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const base = 'http://localhost:3123';
const out = path.join('qa-screens', 'credentials-booking');
fs.mkdirSync(out, { recursive: true });
const css = ['src/styles/credentials.css', 'src/styles/approach.css'].map((f) => fs.readFileSync(f, 'utf8')).join('\n');

(async () => {
  const browser = await chromium.launch();
  for (const mode of ['desktop', 'mobile']) {
    const vp = mode === 'mobile' ? { width: 375, height: 760 } : { width: 1440, height: 900 };
    const page = await browser.newPage({ viewport: vp, reducedMotion: 'reduce' });
    const shot = async (name, el) => {
      const f = path.join(out, `${mode}_${name}.png`);
      if (el) await el.screenshot({ path: f }); else await page.screenshot({ path: f });
      console.log(f);
    };
    // Gallery
    await page.goto(base + '/credentials/achievements', { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: css });
    await page.waitForTimeout(300);
    await shot('gallery', await page.$('.cr-gallery'));

    // Booking
    await page.goto(base + '/book-a-consultation', { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: css });
    const card = await page.$('.cr-form-card');
    await card.scrollIntoViewIfNeeded();
    await shot('step1', card);
    await page.keyboard.press('Tab');
    await page.focus('.cr-option >> nth=1');
    await page.keyboard.press('Space');
    await shot('step1-focus', card);
    await page.click('text=Next: Select Date/Time');
    await page.focus('#bf-date');
    await shot('step2', await page.$('.cr-form-card'));
    await page.fill('#bf-date', '2026-10-15');
    await page.click('text=Next: Share Details');
    await shot('step3-empty', await page.$('.cr-form-card'));
    const nextBtn = page.locator('button:has-text("Next: Confirm Appointment")');
    console.log('next disabled:', await nextBtn.isDisabled());
    await nextBtn.click({ force: true }).catch(() => {});
    await page.waitForTimeout(200);
    await shot('step3-afterclick', await page.$('.cr-form-card'));
    await page.fill('#bf-name', 'Test Patient');
    await page.fill('#bf-phone', '+91 90000 00000');
    await page.fill('#bf-email', 'not-an-email');
    await nextBtn.click().catch(() => {});
    await page.waitForTimeout(200);
    await shot('step3-bademail', await page.$('.cr-form-card'));
    if (!(await page.$('#bf-email'))) {
      console.log('BUG: invalid email advanced to step 4');
      await page.click('text=Back');
    }
    await page.fill('#bf-email', 'test@example.com');
    await page.click('button:has-text("Next: Confirm Appointment")');
    await shot('step4', await page.$('.cr-form-card'));
    await page.click('button[type=submit]');
    await page.waitForTimeout(200);
    await shot('success', await page.$('.cr-form-card'));
    await page.click('text=Back to form');
    await shot('reset', await page.$('.cr-form-card'));
    const labels = await page.evaluate(() => [...document.querySelectorAll('input,select,textarea')].map((e) => e.id + ':' + (e.labels ? e.labels.length : 0)));
    console.log(labels.join(' '));
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    console.log(mode, 'scrollWidth', sw);
    await page.close();
  }
  await browser.close();
})();
