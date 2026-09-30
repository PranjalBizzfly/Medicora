// QA (about-header group): interactive header/footer checks.
process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
const { chromium } = require('playwright');
const fs = require('fs');
const B = 'http://localhost:3123';
const D = 'qa-screens/about-header';
fs.mkdirSync(D, { recursive: true });
const vis = (p, i) => p.evaluate((i) => {
  const m = document.querySelectorAll('.nav-item')[i]?.querySelector('.dropdown-menu');
  if (!m) return null; const cs = getComputedStyle(m); const r = m.getBoundingClientRect();
  return { vis: cs.visibility, op: cs.opacity, left: Math.round(r.left), right: Math.round(r.right), bottom: Math.round(r.bottom), vw: innerWidth };
}, i);
const clipTop = (w, h) => ({ x: 0, y: 0, width: w, height: h });
(async () => {
  const b = await chromium.launch();
  const log = (...a) => console.log(...a);
  for (const w of [1440, 1280]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    await p.goto(B + '/my-approach', { waitUntil: 'networkidle' });
    const n = await p.locator('.nav-item').count();
    for (let i = 0; i < n; i++) {
      const it = p.locator('.nav-item').nth(i);
      if (!(await it.locator('.dropdown-menu').count())) continue;
      await it.hover(); await p.waitForTimeout(300);
      log(w, 'hover item', i, JSON.stringify(await vis(p, i)));
      if (w !== 1100 && (i === 1 || i === 2 || i === n - 1)) await p.screenshot({ path: `${D}/hover_${w}_${i}.png` });
    }
    log(w, 'scrollWidth', await p.evaluate(() => document.documentElement.scrollWidth));
    await p.close();
  }
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(B + '/my-approach', { waitUntil: 'networkidle' });
  await p.mouse.move(700, 600);
  const btn = p.locator('.nav-item button.nav-link').first();
  await btn.focus(); await p.waitForTimeout(250);
  log('focused btn, before enter', JSON.stringify(await vis(p, 1)), await btn.getAttribute('aria-expanded'));
  await p.keyboard.press('Enter'); await p.waitForTimeout(250);
  log('after enter', JSON.stringify(await vis(p, 1)), await btn.getAttribute('aria-expanded'));
  await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.waitForTimeout(250);
  log('after 2 tabs focus:', await p.evaluate(() => document.activeElement.textContent.trim().slice(0, 40)), JSON.stringify(await vis(p, 1)));
  await p.screenshot({ path: `${D}/kbd_tab_in_menu.png` });
  log('focus style on dropdown link', await p.evaluate(() => { const s = getComputedStyle(document.activeElement); return s.outlineStyle + ' ' + s.outlineWidth + ' ' + s.outlineColor + ' | bs:' + s.boxShadow; }));
  await p.keyboard.press('Escape'); await p.waitForTimeout(250);
  log('after escape', JSON.stringify(await vis(p, 1)), 'active:', await p.evaluate(() => document.activeElement.className));
  await p.screenshot({ path: `${D}/kbd_after_escape.png` });
  for (let k = 0; k < 4; k++) await p.keyboard.press('Tab');
  await p.waitForTimeout(250);
  log('after tabbing out: active', await p.evaluate(() => document.activeElement.textContent.trim().slice(0, 30)), 'about', JSON.stringify(await vis(p, 1)), 'expertise', JSON.stringify(await vis(p, 2)));
  await p.goto(B + '/my-approach', { waitUntil: 'networkidle' });
  await btn.click(); await p.waitForTimeout(250);
  log('after click (hover+click)', JSON.stringify(await vis(p, 1)), await btn.getAttribute('aria-expanded'));
  await p.mouse.move(700, 700); await p.waitForTimeout(300);
  log('after click then mouse away', JSON.stringify(await vis(p, 1)));
  await p.locator('.nav-item').nth(3).hover(); await p.waitForTimeout(300);
  log('hover other menu after click: about', JSON.stringify(await vis(p, 1)), 'approach', JSON.stringify(await vis(p, 3)));
  await p.screenshot({ path: `${D}/click_then_hover_other.png` });
  await p.goto(B + '/my-journey', { waitUntil: 'networkidle' });
  await p.mouse.move(700, 700);
  const sh0 = await p.evaluate(() => getComputedStyle(document.querySelector('.header-wrapper')).boxShadow);
  await p.evaluate(() => scrollTo(0, 900)); await p.waitForTimeout(500);
  const sh1 = await p.evaluate(() => [getComputedStyle(document.querySelector('.header-wrapper')).boxShadow, document.querySelector('.header-wrapper').getBoundingClientRect().top, document.querySelector('.header-wrapper').className]);
  log('shadow top', sh0, '| scrolled', JSON.stringify(sh1));
  await p.screenshot({ path: `${D}/sticky_scrolled.png`, clip: clipTop(1440, 260) });
  await p.goto(B + '/my-approach/why-homeopathy', { waitUntil: 'networkidle' });
  log('active on why-homeopathy', await p.evaluate(() => [...document.querySelectorAll('.nav-link.active')].map((e) => e.textContent.trim())));
  await p.screenshot({ path: `${D}/active_why-homeopathy.png`, clip: clipTop(1440, 130) });
  await p.goto(B + '/my-approach', { waitUntil: 'networkidle' });
  log('active on /my-approach', await p.evaluate(() => [...document.querySelectorAll('.nav-link.active')].map((e) => e.textContent.trim())));
  await p.close();

  const m = await b.newPage({ viewport: { width: 375, height: 760 }, hasTouch: true, isMobile: true });
  await m.goto(B + '/about-me', { waitUntil: 'networkidle' });
  await m.locator('.navbar .mobile-toggle').click(); await m.waitForTimeout(400);
  await m.screenshot({ path: `${D}/m_drawer_open.png` });
  log('mobile drawer', JSON.stringify(await m.evaluate(() => {
    const d = document.querySelector('.mobile-drawer'); const r = d.getBoundingClientRect();
    const cta = document.querySelector('.mobile-drawer-footer .btn'); const cr = cta?.getBoundingClientRect();
    return { drawer: [r.left, r.right, r.top, r.bottom], sw: document.documentElement.scrollWidth, cta: cr && [Math.round(cr.top), Math.round(cr.bottom)], vh: innerHeight, bodyOverflow: document.body.style.overflow, focus: document.activeElement.className };
  })));
  await m.locator('.mobile-nav-btn').filter({ hasText: 'Expertise' }).click(); await m.waitForTimeout(400);
  await m.screenshot({ path: `${D}/m_submenu_expertise.png` });
  log('after expand', JSON.stringify(await m.evaluate(() => { const l = document.querySelector('.mobile-nav-list'); const d = document.querySelector('.mobile-drawer'); const cta = document.querySelector('.mobile-drawer-footer .btn').getBoundingClientRect(); return { listScroll: [l.scrollHeight, l.clientHeight, getComputedStyle(l).overflowY], drawerScroll: [d.scrollHeight, d.clientHeight, getComputedStyle(d).overflowY], cta: [Math.round(cta.top), Math.round(cta.bottom)], sw: document.documentElement.scrollWidth }; })));
  await m.locator('.mobile-nav-btn').filter({ hasText: 'About' }).click(); await m.waitForTimeout(300);
  await m.screenshot({ path: `${D}/m_submenu_about_active.png` });
  await m.locator('.mobile-drawer-header .mobile-toggle').click(); await m.waitForTimeout(300);
  log('after close btn: drawer count', await m.locator('.mobile-drawer').count(), 'overflow', await m.evaluate(() => document.body.style.overflow), 'focus', await m.evaluate(() => document.activeElement.tagName + '.' + document.activeElement.className));
  await m.locator('.navbar .mobile-toggle').click(); await m.waitForTimeout(300);
  await m.keyboard.press('Escape'); await m.waitForTimeout(300);
  log('after Escape: drawer count', await m.locator('.mobile-drawer').count());
  await m.locator('.navbar .mobile-toggle').click(); await m.waitForTimeout(300);
  for (let k = 0; k < 40; k++) await m.keyboard.press('Tab');
  log('after 40 tabs focus inside drawer?', await m.evaluate(() => !!document.activeElement.closest('.mobile-drawer')), await m.evaluate(() => document.activeElement.outerHTML.slice(0, 80)));
  await m.close();
  const f = await b.newPage({ viewport: { width: 375, height: 760 } });
  await f.goto(B + '/about-me', { waitUntil: 'networkidle' });
  log('mobile sw', await f.evaluate(() => document.documentElement.scrollWidth));
  log('footer links with tap height <24px', await f.evaluate(() => [...document.querySelectorAll('footer a')].filter((a) => a.getBoundingClientRect().height < 24).map((a) => a.textContent.trim()).join(' | ')));
  await b.close();
})();
