# QA — about-header group

Routes: /about-me, /my-journey, /my-approach, /clinical-philosophy (1440 + 375), plus global header/footer interaction tests.
Scripts: `scripts/qa-about-header.cjs` (interactions), `scripts/qa-about-header-montage.cjs` (mobile contact sheets). Screens: `qa-screens/about-header/`.

## Page fixes (all in `src/styles/about.css`)

| Page | Issue | Fix |
|---|---|---|
| about-me (desktop) | Timeline year column broke words mid-word ("Psychologic / al Counselling") because of `overflow-wrap: anywhere` in a 150px column | `.ab-timeline-card` column 150px → 180px (160px at ≤1024); `.ab-timeline-year` now `overflow-wrap: break-word; hyphens: auto; line-height: 1.25` |
| my-journey (desktop) | Chapter badges ("THE BEGINNING") wrapped to two lines in the 150px column | Same column widening |
| my-journey (hero card) | "12,000+" overflowed the 4.5rem number column, so labels were misaligned | `.ab-milestones strong` min-width 4.5rem → 5.75rem |
| my-journey (community photos) | Portrait image's intrinsic 1:2 height set the row height, so the grid was uneven with an empty area | `.ab-photo-portrait` is `position: relative; min-height: 100%` and its img is `position: absolute; inset: 0`, so it fills the two 2:1 tiles. On mobile the portrait is `aspect-ratio: 4/5` (max-height 420px). |
| my-journey (mobile) | A chapter link that wrapped ("Education & Qualifications") put its arrow at the far right edge | `.ab-timeline-card .link-arrow { display: inline }` with an inline svg |
| my-approach (desktop + mobile) | Card title sat directly on the paragraph, and "Discover more" had no gap and did not line up between cards | `.ab-card-title` margin-bottom 0.55rem; `.card-link.ab-card .link-arrow { margin-top: auto; padding-top: 1rem; align-self: flex-start }` |
| clinical-philosophy | No page-level defects | — |

No JSX changes were needed.

## Shared-component notes (coordinator)
- StatsStrip `.stats-strip-head` (components.css): the heading is an h3, smaller than the other section h2s, and the subtitle sits tight under it (seen on about-me and clinical-philosophy). Suggest `.stats-strip-head h3 { font-size: clamp(1.5rem, 2.4vw, 2rem); margin-bottom: .75rem }`, and `.stats-strip-head { margin-bottom: 2.5rem }`.
- ConsultationProcess step cards (my-approach): the step captions are bold maroon, which looks heavy next to the muted body text used elsewhere. Optional change: use `color: var(--text-muted); font-weight: 400`.

## Header / footer findings

Passed: hover dropdowns open. All menus, including the 640px Expertise mega menu, stay inside the viewport at 1440 (311–951) and 1280 (232–872). There is no horizontal scroll. Enter toggles aria-expanded. Dropdown links show a 2px maroon focus ring. The sticky header gets `is-scrolled` with its shadow. On sub-pages the active section is highlighted (why-homeopathy → "My Approach"). Mobile: the hamburger opens the drawer, submenus expand, and the close button and Escape both close it. The body is scroll-locked, there is no horizontal scroll with the drawer open (scrollWidth 375), and the CTA is visible (y 623–671 of 760; with a submenu expanded the drawer scrolls and the CTA stays reachable).

Bugs (Header.jsx / Header.css — not edited):
1. **Escape does not close a desktop dropdown while focus is inside it**, because `.nav-item:focus-within .dropdown-menu` keeps it visible. **Clicking a menu button and then hovering another menu leaves two menus open and overlapping** (screenshot `click_then_hover_other.png`).
   Fix (CSS): remove `.nav-item:focus-within .dropdown-menu` from the open selector, so menus are driven only by `.is-open`.
   Fix (JSX) to keep keyboard access:
   - on `<li>` add `onFocus={() => item.children && setOpenDropdown(item.label)}` and `onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null); }}`
   - in the Escape handler, return focus to the trigger: `if (openDropdown) document.querySelector('.nav-item.is-open > .nav-link')?.focus();` before `setOpenDropdown(null)`.
   - `onMouseEnter` already sets the label, so hovering another item replaces the open menu.
2. **The mobile drawer has no focus trap and does not manage focus.** Focus stays on the hamburger behind the drawer, Tab moves into page content behind the modal (`aria-modal="true"` is set), and closing drops focus to `<body>`.
   Fix: use a `drawerRef` and a `toggleRef`. When the drawer opens, focus the close button. Add a keydown handler on `.mobile-drawer` that wraps Tab and Shift+Tab between the first and last focusable elements. When it closes, call `toggleRef.current?.focus()`.
3. **On /my-approach, "About Us" is highlighted rather than "My Approach"** (the path is in the About children). This follows the data, but it can confuse users. Optional: in `isSectionActive`, also match `pathname.startsWith(child.path + '/')`, or leave as is.
4. **Footer tap targets:** all footer links are under 24px tall at 375 (WCAG 2.5.8). Fix in Footer.css: `.footer-link, .footer-bottom a { display: inline-block; padding-block: 4px; }`, or set `min-height: 24px`.
