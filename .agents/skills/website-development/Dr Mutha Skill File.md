---
name: website-development
description: >-
  Comprehensive guide and instructions for developing, modifying, auditing, and maintaining the Dr. Mohini Mutha (Medicora) medical clinic website. Covers project architecture, Next.js 16 App Router (34 routes), brand design tokens, source-of-truth content rules, accessibility, SEO, forms, and visual QA workflows.
---

# Dr. Mohini Mutha (Medicora) — Website Development Skill

This skill defines the authoritative guidelines, standards, and working procedures for developing and maintaining the Dr. Mohini Mutha clinical practice website (Medicora). All coding agents working in this repository must adhere to the rules, tokens, and verification processes documented below.

---

## 1. Project Overview

### Brand Identity & Purpose
- **Brand Name**: Medicora / Dr. Mohini Mutha (`drmohinimutha.com`).
- **Practitioner**: Dr. Mohini Mutha, MD (Homeopathy) · PGDPC.
- **Core Clinical Profile**: Homeopathic Physician with 14+ years of clinical practice (since 2012), 12,000+ patient consultations across India, UAE, and USA.
- **Clinic Location**: Dr. Mutha's Homeopathic Clinic, Kopar Khairne, Navi Mumbai & Pune, India.
- **Institutional Healthcare Trust**: Consultant Homoeopathic Physician with ONGC since 2018 (~8 years).
- **Digital Practice**: Founder of *Trivana Wellness* (digital practice combining homeopathy, psychological counselling, yoga, and meditation into an integrated care plan). **Note**: The website brand is Medicora / Dr. Mohini Mutha; never rename the site to Trivana.
- **Medical Positioning**: Homeopathy provides compassionate, individualised, whole-person care for chronic and lifestyle concerns. Homeopathy is strictly complementary; it does not replace conventional medicine or emergency intervention.

### Technology Stack
- **Framework**: Next.js 16 (16.3.7) with React 19 (19.2.8) using the App Router.
- **Language**: JavaScript (ES modules, JSX), configured with path alias `@/*` -> `./src/*` in `jsconfig.json`.
- **Styling**: Vanilla CSS using CSS Custom Properties (tokens in `src/index.css` and scoped stylesheets in `src/styles/`). No Tailwind CSS.
- **Icons**: Lucide React (`lucide-react`).
- **Typography**: `Parkinsans` (headings) and `Geist` (body), loaded via `next/font/local` in `src/app/layout.jsx`.
- **Code Quality & Linting**: Oxlint (`oxlint`, `.oxlintrc.json`).
- **Testing & Visual QA**: Playwright (`playwright` with Chromium) for route verification, responsive frame capture, and feature testing.

### Directory Structure & Sources of Truth
- `src/app/`: Next.js App Router definitions (exactly 34 routes, each with `page.jsx` defining metadata and rendering a view).
- `src/views/`: View-level components for each section (`home`, `about`, `expertise`, `approach`, `credentials`, `resources`, `legal`).
- `src/components/`: Shared UI components (`Header.jsx`, `Footer.jsx`, `Hero.jsx`, `SectionHeader.jsx`, `CTABanner.jsx`, `ConsultationProcess.jsx`, `TestimonialCard.jsx`, `FAQAccordion.jsx`, `BrandMark.jsx`, `StatsStrip.jsx`, `SiteSearch.jsx`, `ExplorePages.jsx`, `ScrollButtons.jsx`, `ThemeToggle.jsx`).
- `src/data/websiteContent.js`: Central content source of truth, `siteConfig`, `navigationLinks`, consultation steps, credibility pillars, and contact info.
- `src/data/searchIndex.json`: Prerendered site search index covering all 34 pages.
- `src/lib/`: Form validation (`validation.js`) and delivery normalization (`deliver.js`).
- `source-docs/`: Approved source documents (canonical copy: `Dr Mohini Muttha - Website Content.pdf` pp. 106–172 "Whole Website Content"; architecture brief: `Dr Mohini Mutha - Website Sitemap .pdf`).
- `docs-audit/`: Project audit records and briefs (`AGENT_BRIEF.md`, `QA_BRIEF.md`, `CONTENT_AUDIT.md`, `REPEATED_ISSUES_AUDIT_REPORT.md`, `PHASE6_REPORT.md`).

---

## 2. Design And UI/UX

### Brand Palette & Design Tokens
All styling must strictly use the design tokens declared in `src/index.css`:
- **Primary Brand Maroon**: `#641703` (`--color-primary`, `--brand-maroon`). Hover: `#4D1102` (`--color-primary-hover`). Light tint: `#F6ECE8` (`--color-primary-soft`).
- **Accent Powder Blue**: `#CFE1E5` (`--color-accent-mint`). Soft: `#E6EFF2` (`--color-accent-mint-soft`).
- **Accent Sand / Gold**: `#DFD5C6` (`--color-accent-sand`). Soft: `#F2EDE6` (`--color-accent-sand-soft`).
- **Neutrals / Charcoal**: `#1A1A1A` (`--text-main`, `--color-secondary`), `#5C5C5C` (`--text-muted`), `#8C8C8C` (`--text-light`).
- **Surfaces**: Light mode page `#F7F6F4` (`--bg-page`), surface `#FFFFFF` (`--bg-surface`), subtle `#F2EDE6` (`--bg-subtle`).
- **Dark Mode**: Dark sections and dark theme pin maroon surfaces to `--brand-maroon` `#641703`. Never introduce unapproved bright colors.

### Layout, Spacing & Container Hierarchy
- **Container Max-Width**: Standard container is `1240px` (`--max-width`); narrow reading container is `920px` (`--max-width-narrow`).
- **Section Spacing**: Generous, balanced spacing (`padding: 5rem 0` desktop, `3.5rem 0` tablet, `2.5rem 0` mobile). Avoid massive blank voids or cramped blocks.
- **Grids**: Standardized CSS grids (`.grid-2`, `.grid-3`, `.grid-4`) with consistent gap tokens (`gap: 1.5rem` to `2rem`).

### Cards & Grid Consistency Rules
1. **Action Alignment**: All cards inside `.grid-2/3/4` must be flex columns (`display: flex; flex-direction: column`) with `margin-top: auto` on the closing link/button. This guarantees action links sit on the exact same horizontal baseline across the row.
2. **Standard Link Text**: All card discovery links must read **"Discover more"**. Do not mix varying phrases like "Learn more", "Explore your care", "Connect with Dr. Mohini", or "Read the story" in card rows.
3. **No Number + Icon Together**: A card must display either a numbered step (`01`) or an icon, never both in the same card.
4. **No 3D Tilt on Text**: Never apply 3D transforms (`rotateX`, `rotateY`, `perspective`) to cards containing text. This prevents subpixel rendering blur on Windows and Chromium browsers.
5. **Paragraph Justification**: Wide multi-line prose paragraphs in main content containers should be justified for crisp editorial alignment. Narrow card text must remain left-aligned to prevent awkward word gaps.

### Responsive Breakpoints
- **Desktop (1024px–1440px)**: Full multi-column grids, desktop navigation bar with mega menu, search button, and theme toggle.
- **Tablet (768px–1023px)**: 2-column card grids, compact section spacing, mobile-responsive tables.
- **Mobile (360px–767px)**: Single-column flow, hamburger drawer navigation, wrapped buttons (`.btn`), full-bleed horizontal padding (`1rem`–`1.25rem`), zero horizontal scrolling (`.site-main { overflow-x: clip }`).

### Theme System (Light & Dark)
- Controlled via `src/components/ThemeToggle.jsx` and `src/styles/theme.css`.
- Sets `data-theme="dark"` or `data-theme="light"` on `<html>`.
- Defaults to user device preference (`prefers-color-scheme`) and persists choice in `localStorage`.
- Solid maroon brand sections stay pinned to `--brand-maroon` across both themes.

---

## 3. Content Quality & Medical Ethics

### Voice, Tone & Language
- Use clear, empathetic, human-sounding British/Indian English.
- Avoid robotic corporate jargon, hyperbole, and buzzwords.
- Emphasize deep listening, root-cause inquiry, gentle support, and individual care.

### Strict Medical Truth & Verified Facts
Use ONLY verified facts established in the project source documents:
- **Clinical Practice**: Practising homeopathic medicine since 2012; 14+ years; 12,000+ patient consultations; patients across India, UAE, and USA.
- **Education & Degrees**:
  - **BHMS**: Bachelor of Homoeopathic Medicine & Surgery, Motiwala Homoeopathic Medical College & Hospital, Nashik; Maharashtra University of Health Sciences (MUHS), Nashik. Completed in 2012.
  - **MD in Homoeopathy**: Materia Medica, SNJB's Bhamashah Shri V. D. Mehata, Chandwad; MUHS, Nashik. Completed in 2016.
  - **PGDPC**: Post Graduate Diploma in Psychological Counselling. (No institution, no year—never invent these).
- **Registration**: Registered with Maharashtra Council of Homoeopathy, Mumbai (registered 28 June 2012). **NEVER publish registration numbers, certificate PRNs, or maiden names**.
- **ONGC Role**: Consultant Homoeopathic Physician with ONGC since 2018 (8 years). Do not use "Contract Medical Officer".
- **Clinic Address**: Dr. Mutha's Homeopathic Clinic, Kopar Khairne, Navi Mumbai & Pune, India.
- **Contact Details**: Phone `+91 942 397 2150`, Email `drmohini@drmohinimutha.com`, Website `drmohinimutha.com`.

### Medical Integrity & Anti-Hallucination Guidelines
1. **Complementary Care**: Homeopathy must always be framed as complementary. Never state or imply that it cures terminal illnesses, replaces allopathic emergency medicine, or eliminates the need for emergency care.
2. **Emergency Situations**: For acute emergencies, chest pain, high fever, or severe trauma, always instruct patients to seek immediate emergency medical attention.
3. **No Invented Testimonials or Case Studies**: The only genuine patient quote is the panic/anxiety gratitude quote. Other short quotes in source copy are labelled strictly "Patient experience" without inventing names, ages, or locations. Where testimonials or case studies are awaiting consent, render respectful "structure-ready" states (e.g., "Patient stories will be shared here with patient consent").
4. **No Invented Pricing or Guarantees**: Never invent consultation fees, package prices, success rates, or treatment guarantees.

---

## 4. Page And Routing Rules

### 34-Page Locked Architecture
The site has exactly 34 routes. Never add, remove, or rename routes without explicit client authorization:
1. **Home**: `/`
2. **About Us (4)**:
   - `/about-me`
   - `/my-journey`
   - `/my-approach`
   - `/clinical-philosophy`
3. **Expertise (10)**:
   - `/expertise/general-health-wellness`
   - `/expertise/respiratory-health`
   - `/expertise/headache-migraine-care`
   - `/expertise/digestive-gut-health`
   - `/expertise/skin-hair-allergies`
   - `/expertise/womens-wellness`
   - `/expertise/child-adolescent-wellness`
   - `/expertise/joint-muscle-pain-management`
   - `/expertise/sleep-lifestyle-concerns`
   - `/expertise/mental-emotional-psychosomatic-wellness`
4. **My Approach Subpages (4)**:
   - `/my-approach/why-homeopathy`
   - `/my-approach/integrated-healing`
   - `/my-approach/consultation-process`
   - `/my-approach/personalised-treatment`
5. **Credentials (3)**:
   - `/credentials/professional-experience`
   - `/credentials/education-qualifications`
   - `/credentials/achievements`
6. **Resources (6)**:
   - `/resources/patient-stories`
   - `/resources/case-studies`
   - `/resources/blogs`
   - `/resources/invite-me-to-speak`
   - `/resources/faqs`
   - `/resources/myths-vs-facts`
7. **Consultation / Booking (1)**:
   - `/book-a-consultation`
8. **Legal & Navigation (5)**:
   - `/privacy-policy`
   - `/terms-and-conditions`
   - `/disclaimer`
   - `/cookie-policy`
   - `/sitemap`

### Routing Implementation Conventions
- **App Router Pattern**: Each route lives in `src/app/<route-path>/page.jsx`. The page file exports Next.js `metadata` and renders a dedicated view component from `src/views/`.
- **Locked Consultation Process**: The 5-step consultation process rendered by `ConsultationProcess.jsx` is locked:
  - `01 Listen` — Understand your concerns.
  - `02 Assess` — Explore health history and relevant factors.
  - `03 Understand` — Look at physical, emotional and lifestyle context.
  - `04 Personalise` — Develop an individualised care approach.
  - `05 Follow Up` — Review progress and adapt as appropriate.
- **CTA Action Tiles**: In CTA banners and approach templates, the 3 action tiles link to:
  - *Message me* -> `mailto:drmohini@drmohinimutha.com`
  - *Chat with me* -> `https://wa.me/919423972150`
  - *Book a consultation* -> `/book-a-consultation`
- **Internal Links**: Always use Next.js `Link` with trailing-slash-free paths. Ensure every internal link resolves to one of the 34 routes.

---

## 5. Images And Accessibility

### Approved Image Assets
- **Doctor Camp Photos**: Three verified photos from Dr. Mohini's free homeopathic medical camp in Navi Mumbai:
  - `/images/camp/medical-camp-1.jpg` (1280×640, landscape)
  - `/images/camp/medical-camp-2.jpg` (640×1280, portrait)
  - `/images/camp/medical-camp-3.jpg` (1280×640, landscape)
- **Brand Visuals**: Monogram and logo assets in `BrandMark.jsx`, `/brand/logo-secondary.png`, `/brand/logo-icon.png`.
- **Certificates**: Rendered via `EducationQualificationsPage.jsx` with sensitive numbers and maiden names masked.
- **Strict Prohibition**: No stock photos, no unapproved external CDNs, no placeholder images.

### Image Best Practices
- Always use `next/image` with proper `width`, `height`, or `fill` with `sizes`.
- Alt text must be factual and contextual (e.g., `alt="Dr. Mohini Mutha consulting a patient at a free homeopathic medical camp in Navi Mumbai"`). Purely decorative graphics must have `alt=""`.

### Accessibility (WCAG 2.1 AA)
- **Color Contrast**: Verify all body text and UI controls maintain a minimum 4.5:1 contrast ratio against backgrounds (e.g. crisp white or soft cream text on maroon `#641703`; charcoal on light backgrounds).
- **Semantic Structure**: Use exactly one `<h1>` per page, sequential heading hierarchy (`<h2>`, `<h3>`), and HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- **Keyboard Navigation**: All interactive elements (navbar dropdowns, search modal, explore overlay, accordions, theme toggle, buttons) must be focusable with clear focus outlines (`:focus-visible`).
- **Screen Reader Support**: Use proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-describedby`, `aria-live`) for dynamic menus, forms, and accordions.

---

## 6. Animations And Interactions

### Motion Principles
- Motion must be subtle, smooth, and purposeful (`150ms`–`300ms` cubic-bezier easing).
- Never introduce excessive layout shifts (CLS must be 0), flashing elements, or blank frames during load.
- No scroll hijacking or scroll-blocking animations.

### Header & Navigation Tools
- **Site Search (`SiteSearch.jsx`)**: Centered modal with `Esc` chip, quick links, instant filtering across all 34 pages using `src/data/searchIndex.json`, keyboard navigation (`Up`/`Down`/`Enter`), and focus trap.
- **Explore All Pages (`ExplorePages.jsx`)**: Full-screen overview categorized into 6 groups with page counts, quick filter, collapse/expand all, and active page markers.
- **Scroll Buttons (`ScrollButtons.jsx`)**: Floating bottom-right buttons that scroll smoothly to top or bottom and auto-hide at document extremities.

### Reduced Motion Support
- Strictly respect user preferences via `@media (prefers-reduced-motion: reduce)`.
- When active, animations and transitions must collapse to instantaneous execution (`transition-duration: 0.01ms !important`).

---

## 7. Forms, SEO, And Technical Quality

### Form Architecture & Security
- Forms (`BookingForm.jsx`, `SpeakingForm.jsx`) use controlled state managed via `FormFields.jsx`.
- Validation is centralized in `src/lib/validation.js` (validates required fields, email formatting, phone numbers, consultation modes, and future dates).
- Submission is dispatched via `postJSON` in `src/lib/deliver.js`.
- **Security & Privacy**: Never log sensitive patient health information to client console. Never expose private credentials, email tokens, or API secrets.

### SEO & Structured Data
- Every page exports a unique Next.js `metadata` object in `src/app/<route>/page.jsx`:
  - `title`: Descriptive page title appended with `| Dr. Mohini Mutha`.
  - `description`: Accurate, 140–160 character summary drawn from approved source copy.
  - Open Graph and Twitter metadata matching canonical page details.
- **Search Index Synchronization**: If page titles, meta descriptions, or headings are updated, rebuild the search index:
  ```bash
  npm run build && node scripts/build-search-index.cjs && npm run build
  ```

---

## 8. Coding And Change Management

### File Modification Discipline
- Always inspect the existing component, its styles, and related audit files before making edits.
- Keep changes minimal, scoped, and strictly focused on the requested task.
- Avoid introducing unnecessary third-party packages or complex dependencies.
- Maintain existing code comments, docstrings, and export signatures.

### Component Ownership & Shared Primitives
- **Coordinator-Owned Primitives**: `Header.jsx`, `Footer.jsx`, `Hero.jsx`, `SectionHeader.jsx`, `CTABanner.jsx`, `ConsultationProcess.jsx`, `TestimonialCard.jsx`, `FAQAccordion.jsx`, `StatsStrip.jsx`, `BrandMark.jsx`, `src/index.css`, `src/styles/components.css`.
- If modifying shared components, ensure no regression occurs across other pages relying on them.

---

## 9. Quality Assurance & Verification

### Available QA Scripts & Commands
Before finalizing any website task, run the relevant verification scripts:

1. **Lint Verification**:
   ```bash
   npx oxlint
   ```
   Must complete with **0 errors**. (Known non-breaking warnings in `BookingForm.jsx` and `FormFields.jsx` are tracked).

2. **Route, Title & Asset Verification**:
   ```bash
   node scripts/verify-site.cjs [baseUrl]
   ```
   Crawls all 34 App Router routes to confirm:
   - HTTP 200 on all 34 routes.
   - Non-empty `<title>` tags on all pages.
   - 0 broken internal links.
   - Valid brand asset loading.

3. **Visual Frame QA (Playwright)**:
   ```bash
   node scripts/qa-frames.cjs <route-slug> <desktop|mobile> [baseUrl]
   ```
   Captures consecutive viewport screenshots under `qa-screens/frames/` (e.g. `node scripts/qa-frames.cjs home desktop`). Note: Use `home` for root; never include leading slashes.

4. **Interactive Feature QA (Playwright)**:
   ```bash
   node scripts/qa-phase6.cjs [baseUrl]
   ```
   Validates search modal, 34-page explorer, theme toggle, and dark mode rendering.

5. **Search Index Build**:
   ```bash
   node scripts/build-search-index.cjs
   ```
   Indexes all 34 routes and updates `src/data/searchIndex.json`.

---

## 10. Working Procedure For Future Tasks

Follow this 6-step procedure for every future website task:

1. **Understand & Inspect**: Review the prompt and inspect relevant views (`src/views/`), app routes (`src/app/`), stylesheets (`src/styles/`), and data files (`src/data/`).
2. **Consult Source of Truth**: Verify any content, medical claims, or credentials against `source-docs/` and `src/data/websiteContent.js`.
3. **Plan Minimal Diffs**: Identify the precise files and components requiring modification. Check for impact on shared components.
4. **Implement Cleanly**: Maintain brand tokens, responsive rules, accessibility standards, and clean syntax without inline styles.
5. **Run Verification**: Run `npx oxlint` and test affected pages locally or via verification scripts.
6. **Summarize Transparently**: Clearly report what was changed, files modified, checks performed, and any open client questions.
