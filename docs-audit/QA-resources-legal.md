# QA — resources-legal

Scripts: `scripts/qa-resources-legal.cjs`, `scripts/qa-rl-anchor.cjs` → `qa-screens/resources-legal/`.

| Page | Issue | Fix | File |
|---|---|---|---|
| (lint) | oxlint only-export-components: `defaultTiles` exported from a component file | Moved to `src/views/resources/actionTiles.js`; updated imports in ActionTilesCTA, MythsVsFactsPage, credentials/AchievementsPage, credentials/EducationQualificationsPage | resources/actionTiles.js (+ importers) |
| FAQs (desktop) | Sticky category nav `top` ignored the 40px top bar, so the card top slid under the header when scrolling | `top: calc(var(--nav-height) + var(--topbar-height) + 1.5rem)` | styles/resources.css `.rs-faq-nav` |
| Myths vs Facts | Myth panel was a 3-column flex row (label, title, text), squeezing title/text into narrow columns (4-5 words per line on mobile); label icon stacked above the word | Myth/Fact panels now stack (column flex); label is an inline icon+text row; myth text styled like the fact text | styles/resources.css `.rs-myth/.rs-fact/.rs-mf-label` |
| Legal pages (≤1100px) | Anchor scroll-margin still included the top bar, which is hidden at ≤1100px → ~110px gap above the heading after a jump | `scroll-margin-top: calc(var(--nav-height) + 1.25rem)` at ≤1100px | styles/legal.css |
| Sitemap (desktop) | "Main pages" card was half width and followed by a wide card → empty right half | Made it `wide` (links flow 2 × 2) | legal/SitemapPage.jsx |

Verified OK: Blogs filter pills + "Explore articles" (filters, aria-pressed, scroll), "Read article" → "Full article coming soon" status; FAQ tabs (mouse + Enter), accordions (Enter/Space toggle, aria-expanded); speaking form (all fields labelled, 4 required fields block empty submit, mailto built with subject/body, success state); legal TOC anchors land 193px from top, below the 124px header; sitemap 34 links all 200; no horizontal scroll at 375.

Not changed / notes: legal TOC on mobile is a long 12-item list before the text (could collapse into `<details>`); speak form relies on native browser validation bubbles (no inline error styling); a single filtered blog card sits left in the 3-column grid (acceptable).
Shared components: none needing a fix. Optional: in Header.css `@media (max-width:1100px) { :root { --topbar-height: 0px; } }` would make every `nav+topbar` offset correct on mobile site-wide.
