const { chromium } = require('playwright');
const BASE = 'http://localhost:' + process.argv[2];
const W = Number(process.argv[3] || 1440);
const pages = ['/', '/about-me', '/my-journey', '/my-approach', '/my-approach/why-homeopathy', '/my-approach/integrated-healing',
  '/my-approach/consultation-process', '/my-approach/personalised-treatment', '/clinical-philosophy',
  '/expertise/mental-emotional-psychosomatic-wellness', '/expertise/general-health-wellness', '/expertise/headache-migraine-care',
  '/expertise/digestive-gut-health', '/expertise/womens-wellness', '/expertise/skin-hair-allergies', '/expertise/child-adolescent-wellness',
  '/expertise/sleep-lifestyle-concerns', '/expertise/joint-muscle-pain-management', '/expertise/respiratory-health',
  '/credentials/professional-experience', '/credentials/education-qualifications', '/credentials/achievements',
  '/resources/patient-stories', '/resources/case-studies', '/resources/blogs', '/resources/invite-me-to-speak', '/resources/faqs',
  '/resources/myths-vs-facts', '/book-a-consultation', '/privacy-policy', '/terms-and-conditions', '/disclaimer', '/cookie-policy', '/sitemap'];
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: W, height: 900 } })).newPage();
  const groups = {};
  for (const p of pages) {
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-revealed')));
    await page.waitForTimeout(900);
    const rows = await page.evaluate(() => {
      const out = [];
      const sig = (e) => (e.className && typeof e.className === 'string' ? e.className.split(' ')[0] : e.tagName.toLowerCase());
      // Containers whose children are 2+ cards laid out side by side in one row.
      for (const grid of document.querySelectorAll('.site-main *')) {
        const kids = [...grid.children].filter((k) => k.getBoundingClientRect().width > 120 && k.getBoundingClientRect().height > 60);
        if (kids.length < 2) continue;
        const rs = kids.map((k) => k.getBoundingClientRect());
        // group by row top
        const byTop = {};
        rs.forEach((r, i) => { const t = Math.round(r.top / 4); (byTop[t] = byTop[t] || []).push(kids[i]); });
        for (const row of Object.values(byTop)) {
          if (row.length < 2) continue;
          // the card itself may be a wrapper (li); use its first meaningful descendant card
          const cards = row.map((c) => (c.children.length === 1 && c.firstElementChild.getBoundingClientRect().height > 60 ? c.firstElementChild : c));
          const cls = sig(cards[0]);
          if (!cards.every((c) => sig(c) === cls)) continue;
          const issues = [];
          // 1. Trailing links / arrows: same distance from the card bottom? (catches CTAs floating at different heights)
          const linkOff = cards.map((c) => { const l = [...c.querySelectorAll('a, .link-arrow, [class*="link"]')].pop(); if (!l || l === c) return null; return Math.round(c.getBoundingClientRect().bottom - l.getBoundingClientRect().bottom); });
          if (linkOff.every((v) => v !== null) && Math.max(...linkOff) - Math.min(...linkOff) > 8) issues.push('bottom links at different heights ' + linkOff.join('/'));
          // 2. Inline arrow icons next to titles: arrow x-offset from card right edge varies a lot
          const arrowOff = cards.map((c) => { const h = c.querySelector('h3, h4, [class*="title"]'); const s = h && h.querySelector('svg'); return s ? Math.round(c.getBoundingClientRect().right - s.getBoundingClientRect().right) : null; });
          if (arrowOff.every((v) => v !== null) && Math.max(...arrowOff) - Math.min(...arrowOff) > 24) issues.push('title arrows at different x ' + arrowOff.join('/'));
          // 3. Description start: first paragraph top relative to card top
          const pOff = cards.map((c) => { const q = c.querySelector('p, [class*="text"], [class*="desc"]'); return q ? Math.round(q.getBoundingClientRect().top - c.getBoundingClientRect().top) : null; });
          if (pOff.every((v) => v !== null) && Math.max(...pOff) - Math.min(...pOff) > 10) issues.push('descriptions start at different heights ' + pOff.join('/'));
          if (issues.length) out.push({ cls, sample: (cards[0].querySelector('h3,h4,strong,[class*="title"]') || cards[0]).textContent.trim().slice(0, 40), issues });
        }
      }
      return out;
    });
    for (const r of rows) for (const i of r.issues) {
      const k = r.cls + ' :: ' + i.replace(/[\d/-]+$/, '').trim();
      (groups[k] = groups[k] || { pages: new Set(), eg: r.sample + ' -> ' + i }).pages.add(p);
    }
  }
  await browser.close();
  for (const [k, v] of Object.entries(groups)) console.log(k, '\n   pages:', [...v.pages].slice(0, 6).join(' '), v.pages.size > 6 ? `(+${v.pages.size - 6} more)` : '', '\n   e.g.:', v.eg);
  console.log('groups:', Object.keys(groups).length);
})();
