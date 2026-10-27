# Dr. Mohini Mutha (Medicora) — AI Agent Instructions & Guidelines

Welcome to the Dr. Mohini Mutha clinical practice website repository (`Medicora`). All AI agents working in this repository must follow the conventions and quality standards established here.

For the comprehensive, detailed 10-section development handbook, refer to the project workspace skill:
👉 **[Website Development Skill](file:///.agents/skills/website-development/SKILL.md)**

---

## Quick Reference & Non-Negotiable Rules

### 1. Technology & Architecture
- **Framework**: Next.js 16 (App Router), React 19, Vanilla CSS (CSS variables). No Tailwind CSS.
- **Route Count**: Exactly **35 routes** (1 Home + 34 subpages; `/contact` added 27 Oct 2026 for audit AUD-18, client-approved). Never add, delete, rename, or redirect routes without explicit instruction.
- **Pages**: Defined in `src/app/**/page.jsx` with static/dynamic metadata; views live in `src/views/**`.
- **Central Data**: `src/data/websiteContent.js` holds `siteConfig`, `navigationLinks`, consultation steps, and verified doctor information.

### 2. Design System & Brand Tokens
All styles must strictly use tokens from `src/index.css`:
- **Primary Brand Maroon**: `#641703` (`--color-primary`, `--brand-maroon`). Hover: `#4D1102`.
- **Accent Powder Blue**: `#CFE1E5` (`--color-accent-mint`).
- **Accent Sand / Gold**: `#DFD5C6` (`--color-accent-sand`).
- **Neutrals / Text**: `#1A1A1A` (`--text-main`), `#5C5C5C` (`--text-muted`).
- **Surfaces**: Light mode page `#F7F6F4` (`--bg-page`); Dark mode maroon pinned to `--brand-maroon`.
- **Typography**: `Parkinsans` (headings) and `Geist` (body).
- **Cards in Grids**: Must be flex columns with `margin-top: auto` on bottom actions so all action links align horizontally across rows.
- **Card Link Labels**: All discovery cards in rows must use the uniform label **"Discover more"**.
- **No Icon + Number**: A card displays either an icon or a step number, never both.
- **No 3D Tilt on Text**: Avoid 3D tilt effects on text containers to prevent rendering blur.

### 3. Medical Integrity & Content Grounding
- **Source of Truth**: `source-docs/Dr Mohini Muttha - Website Content.pdf` (pages 106–172 "Whole Website Content").
- **Strictly Complementary**: Homeopathy must always be framed as complementary, whole-person care; never claim it replaces emergency or conventional medical care.
- **Verified Facts Only**: 14+ years experience (since 2012), 12,000+ patient consultations, BHMS (2012 MUHS Nashik), MD in Homeopathy (2016 MUHS Chandwad), PGDPC (no year/institution), ONGC Consultant Homoeopathic Physician since 2018 (8 years).
- **Sensitive Data**: Never publish medical registration numbers, certificate PRNs, or maiden names.
- **Zero Hallucination**: Never invent patient names, testimonials, case studies, statistics, pricing, or guarantees.

### 4. Quality Assurance Commands
Before concluding any task, run the appropriate verification checks:
- **Lint**: `npx oxlint` (must pass with 0 errors).
- **Site & Route Audit**: `node scripts/verify-site.cjs` (crawls all 34 routes for HTTP 200, `<title>`, and internal link integrity).
- **Search Index Regeneration**: When page headings or content change:
  ```bash
  npm run build && node scripts/build-search-index.cjs && npm run build
  ```
- **Visual QA**: `node scripts/qa-frames.cjs <route-slug> <desktop|mobile>` (e.g. `node scripts/qa-frames.cjs home desktop`).
- **Feature QA**: `node scripts/qa-phase6.cjs` (verifies search, 34-page explorer, and theme toggle).
