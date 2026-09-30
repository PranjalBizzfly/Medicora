# Phase 4 — Visual QA & Production Readiness Report

Date: 30 September 2026 · Method: real Chromium (Playwright, installed inside the project) screenshots of all 34 routes at 1440px and 375px, automated layout checks, scripted interaction tests, manual review of frames. Per-group detail: `QA-about-header.md`, `QA-expertise-approach.md`, `QA-credentials-booking.md`, `QA-resources-legal.md`.

## Final verification (current build)
| Check | Result |
|---|---|
| Production build | Pass (34 pages static) |
| Lint | Pass, 0 warnings |
| Routes / internal links | 34/34, 0 broken |
| Automated visual checks (68 page-views: 34 routes × desktop+mobile) | 0 issues — no horizontal scroll, no broken images, one h1 per page, all buttons/links/fields labelled, no console errors |
| Architecture | 34 pages, URLs unchanged, brand = Medicora / Dr. Mohini Mutha |

## Issues found and fixed
**Global**
- Mobile: header "Book a Consultation" button was not hidden → every page 137px wider than the screen (horizontal scroll site-wide). Fixed.
- Brand monogram invisible on pages without the shared hero (Home hero panel, avatar, blog cards, CTA panels) — style was scoped to Hero.css. Made global.
- Nav labels "About Us" / "My Approach" wrapping to two lines at 1440px. Fixed.
- Long buttons overflowing on small phones → wrap on ≤480px.
- Top-bar height still counted in sticky/anchor offsets on mobile where the top bar is hidden. Fixed via token.
- Header dropdowns: two menus could be open at once; Escape didn't close a menu with focus inside. Fixed; focus returns to the menu button.
- Mobile drawer: focus now moves into the drawer, Tab is trapped inside, focus returns to the menu button on close.
- FAQ accordion: visible keyboard focus ring added.
- Footer links: tap targets enlarged for touch.
- Consultation-process steps: source line now reads as body text (was heavy maroon bold).
- Stats strip heading sized consistently with other section headings.

**Page-level** (detail in group reports)
- Approach pages: CTA tiles were white-on-transparent over the powder-blue panel (unreadable). Restyled.
- Expertise pages: consultation-process link card layout, CTA tile width, related-links spacing.
- About/Journey/Approach: timeline year column splitting words, stat alignment, uneven photo grid, card spacing.
- Booking form: email/phone format validation with inline errors, focus management between steps, no past dates, Enter no longer submits early, readable success date, clean reset.
- Achievements: oversized photo gallery (≈1000px tall) → balanced grid.
- FAQs: sticky category nav sliding under the header. Myths vs Facts: cramped side-by-side panels → stacked. Legal: anchor offset gap on mobile. Sitemap: empty half-row.

## Known, not changed (recommendations)
- Legal "On this page" list is long on mobile (could collapse).
- Speaking enquiry form relies on browser validation bubbles.
- On /my-approach the "About Us" menu is highlighted (page belongs to About Us in the approved navigation).
- Booking and speaking forms have no backend yet (booking shows a confirmation; speaking opens a pre-filled email) — needs Dr. Mohini's decision on where submissions go.
- Content gaps from Prompt 3 remain (testimonials, case studies, blog articles, hours, PGDPC year) — see `CONTENT_AUDIT.md`.

## Re-running QA
```
npm run build && npm run start -- -p 3123
node scripts/visual-qa.cjs http://localhost:3123      # all routes, both widths
node scripts/qa-frames.cjs expertise/respiratory-health mobile   # frame-by-frame
node scripts/verify-site.cjs http://localhost:3123    # routes & links
```
