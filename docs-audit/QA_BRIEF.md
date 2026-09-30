# Phase 4 — Visual QA brief (shared by QA agents)

Project: `C:\Projects\Medicora` (Next.js 16). Work ONLY inside this folder. Do NOT commit. Do NOT run `npm run build`, `npm run dev` or `npm run start` — a production server of the current build is already running at http://localhost:3123 and must not be disturbed. Your CSS/JSX edits will NOT be visible there until the coordinator rebuilds; that's expected — reason carefully from the screenshots and the code.

## Tools
- Screenshots (Playwright Chromium is installed inside the project; env var is set by the scripts):
  `node scripts/qa-frames.cjs <route-without-leading-slash> desktop` and `... mobile` → frames in `qa-screens/frames/` (view them with the Read tool). Use `home` for the root.
  IMPORTANT: never pass an argument that starts with `/` or looks like a Windows path — the sandbox rejects it. Use e.g. `expertise/respiratory-health`.
- For interactions (mobile drawer, dropdown hover, accordions, form steps, focus rings) write a small script in `scripts/qa-<yourgroup>.cjs` using `require('playwright')` (set `process.env.PLAYWRIGHT_BROWSERS_PATH='0'` at the top), base URL http://localhost:3123, save screenshots under `qa-screens/<yourgroup>/`.
- `npx oxlint <files>` for lint.

## What to check on every page (desktop 1440 and mobile 375)
Hero (height, readability, breadcrumb, CTA), header/nav, section spacing (no huge empty gaps, no cramped blocks), alignment to the container grid, card consistency (radius/border/shadow), images (crop, aspect, alt), typography hierarchy (Parkinsans headings, Geist body; no giant/tiny outliers; mobile scaling), buttons & links (consistent styles, no wrapping into ugly 1-word lines, no overflow), CTA sections, forms (labels, focus rings, errors), footer, empty/placeholder states looking intentional, contrast (text on maroon/powder blue readable), no horizontal scroll.

## Rules
- Refine, don't redesign. Keep the Phase 2 design system and brand palette only: maroon `#641703` (--color-primary), powder blue `#CFE1E5` (--color-accent-mint), sand `#DFD5C6` (--color-accent-sand), charcoal `#1A1A1A`, white + existing tokens in `src/index.css`. No new colours or fonts.
- Do NOT change content wording (Prompt 3 content is source-approved), routes, or page count (34). Brand is Medicora / Dr. Mohini Mutha — never rename to Trivana (Trivana Wellness is only her digital practice, mentioned where the source says so).
- Only edit the files your task lists. Shared components (Header, Footer, Hero, CTABanner, SectionHeader, TestimonialCard, FAQAccordion, ConsultationProcess, StatsStrip, BrandMark, HeroSlider) and `src/index.css` / `src/styles/components.css` are coordinator-owned: if you find a bug there, DESCRIBE the exact fix (selector + declarations) in your report instead of editing.
- Global fixes already applied by the coordinator (in the next build): `.brand-mark` is now defined globally (monogram masks were invisible on pages without the shared Hero), nav labels no longer wrap, mobile header CTA hidden, `.btn` wraps on ≤480px, `.site-main { overflow-x: clip }`.
- Write findings + fixes to `docs-audit/QA-<yourgroup>.md` (page → issue → fix → file).
