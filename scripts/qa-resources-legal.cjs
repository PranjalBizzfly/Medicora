process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
const { chromium } = require('playwright');
const B = 'http://localhost:3123';
const D = 'qa-screens/resources-legal/';
(async () => {
  const br = await chromium.launch();
  for (const [mode, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 375, height: 760 }]]) {
    const p = await br.newPage({ viewport: vp, reducedMotion: 'reduce' });
    const log = (...a) => console.log(mode, ...a);
    // Blogs
    await p.goto(B + '/resources/blogs', { waitUntil: 'networkidle' });
    await p.click('.rs-pills button:has-text("Sleep")');
    log('blogs sleep cards', await p.locator('.rs-blog-card').count());
    await p.click('.rs-blog-card >> text=Read article');
    await p.locator('.rs-pending').first().scrollIntoViewIfNeeded();
    await p.screenshot({ path: D + `blogs-pending-${mode}.png` });
    await p.goto(B + '/resources/blogs', { waitUntil: 'networkidle' });
    await p.click('text=Explore articles >> nth=2'); await p.waitForTimeout(800);
    log('explore->pressed', await p.locator('.rs-pills [aria-pressed=true]').innerText(), 'cards', await p.locator('.rs-blog-card').count());
    await p.screenshot({ path: D + `blogs-explore-${mode}.png` });
    // FAQ
    await p.goto(B + '/resources/faqs', { waitUntil: 'networkidle' });
    await p.click('.rs-faq-tab:has-text("Procedures")');
    log('faq head', await p.locator('.rs-faq-head h2').innerText());
    const btns = p.locator('.rs-faq-layout button[aria-expanded]');
    log('accordion buttons', await btns.count(), 'expanded states', await btns.evaluateAll(b => b.map(x => x.getAttribute('aria-expanded'))));
    await btns.nth(1).focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
    log('after Enter', await btns.evaluateAll(b => b.map(x => x.getAttribute('aria-expanded'))));
    await p.keyboard.press('Space'); await p.waitForTimeout(300);
    log('after Space', await btns.evaluateAll(b => b.map(x => x.getAttribute('aria-expanded'))));
    await p.screenshot({ path: D + `faq-kbd-${mode}.png` });
    await p.focus('.rs-faq-tab >> nth=1'); await p.keyboard.press('Enter');
    log('tab kbd head', await p.locator('.rs-faq-head h2').innerText());
    await p.evaluate(() => window.scrollTo(0, 900)); await p.waitForTimeout(200);
    await p.screenshot({ path: D + `faq-scrolled-${mode}.png` });
    // Speak form
    await p.goto(B + '/resources/invite-me-to-speak', { waitUntil: 'networkidle' });
    const labels = await p.$$eval('.rs-form input, .rs-form select, .rs-form textarea', els => els.map(e => e.id + ':' + (e.labels && e.labels.length) + ':' + e.required));
    log('fields', labels.join(' '));
    await p.click('.rs-form [type=submit]');
    log('invalid after empty submit', await p.$$eval('.rs-form :invalid', e => e.map(x => x.id).join(',')));
    await p.locator('#speaker-form').scrollIntoViewIfNeeded();
    await p.screenshot({ path: D + `speak-invalid-${mode}.png` });
    let nav = null; p.on('request', r => { if (r.url().startsWith('mailto')) nav = r.url(); });
    await p.evaluate(() => { window.__href = null; });
    await p.fill('#speaker-name', 'Test'); await p.fill('#speaker-organization', 'Org'); await p.fill('#speaker-email', 'a@b.co');
    const ph = await p.$('#speaker-phone'); if (ph) await ph.fill('9999999999');
    const ta = await p.$('.rs-form textarea'); if (ta) await ta.fill('Hello');
    log('invalid now', await p.$$eval('.rs-form :invalid', e => e.map(x => x.id).join(',')));
    await p.click('.rs-form [type=submit]').catch(e => log('submit err', e.message));
    await p.waitForTimeout(500);
    log('success shown', await p.locator('.rs-success').count(), 'mailto', nav);
    await p.locator('#speaker-form').scrollIntoViewIfNeeded();
    await p.screenshot({ path: D + `speak-success-${mode}.png` });
    // Legal anchors
    await p.goto(B + '/privacy-policy', { waitUntil: 'networkidle' });
    await p.click('.lg-toc-link >> nth=5'); await p.waitForTimeout(600);
    const r = await p.evaluate(() => { const h = location.hash; const el = document.querySelector(h + ' h2').getBoundingClientRect(); const hd = document.querySelector('header'); return { h, top: el.top, header: hd && hd.getBoundingClientRect().bottom }; });
    log('anchor', JSON.stringify(r));
    await p.screenshot({ path: D + `legal-anchor-${mode}.png` });
    // Sitemap
    await p.goto(B + '/sitemap', { waitUntil: 'networkidle' });
    const hrefs = await p.$$eval('.lg-sitemap-link', a => a.map(x => x.getAttribute('href')));
    const bad = [];
    for (const h of [...new Set(hrefs)]) { if (!h.startsWith('/')) continue; const res = await p.request.get(B + h); if (res.status() !== 200) bad.push(h + ' ' + res.status()); }
    log('sitemap links', hrefs.length, 'bad', bad.join(', ') || 'none');
    log('hscroll', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));
    await p.close();
  }
  await br.close();
})();
