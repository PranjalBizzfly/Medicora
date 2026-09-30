# Prompt 3 — Content Integration Brief (shared by all agents)

Project: Dr. Mohini Mutha website (Next.js 16 App Router, JSX) in `C:\Projects\Medicora`.
Work ONLY inside that folder. Do NOT commit. Do NOT run `npm run build`/`npm run dev` (other agents run in parallel). You MAY run `npx oxlint <files>`.

## Source documents (the ONLY content sources)
All in `C:\Projects\Medicora\source-docs\` (moved out of public/; do not link to them from the site):
1. `Dr Mohini Muttha - Website Content.pdf` (172 pp). **Canonical copy = the "Whole Website Content" section, pages 106–172** ("Page 1 – HOME" … "Page 34 – Sitemap"). Pages 1–105 are earlier drafts of the same pages; use them only where they add a detail the final section lacks. The drafts "About Me – 2", "About Me – 3" and "My Journey – 2" are SUPERSEDED — they contain conflicting facts (2014/2019/2021/2023 dates, "Contract Medical Officer", "MD in 2012", "relief actually lasts") — do NOT use their facts or claims.
2. `Dr Mohini Mutha - Website Sitemap .pdf` — brief: page list, per-page content direction, expertise "potential topics" lists, 5-step consultation process, blog content pillars, speaking audiences, FAQ example questions (no answers), myths example, internal-linking examples, tone rules.
3. `Generic keywords-Target - Sheet1.pdf` — SEO keywords (use only where they naturally fit existing source sentences; never add claims or pages).
4. `About Dr. Mohini/Website Details - Questionnaire_.docx` and `About Dr. Mohini/Note on Dr Mohini Mutha (1).docx` — same text as sitemap PDF pp.40–43.
5. Certificates (`Profile Summary/Degrees & Certifciate/*.pdf`) — verified below.
6. Photos: 3 real photos of Dr. Mohini's free homeopathic medical camp, now at `/images/camp/medical-camp-1.jpg` (1280×640, landscape, camp tent with patients), `/images/camp/medical-camp-2.jpg` (640×1280, portrait, Dr. Mohini consulting a patient at a "Happy Navratri" free homeopathic camp), `/images/camp/medical-camp-3.jpg` (1280×640, landscape). Use with `next/image` where they fit (community / camps / achievements / journey "beyond the clinic"). Alt text: describe the camp factually. No other photos exist — use the existing BrandMark visual elsewhere. No stock images.

Reading PDFs: use the Read tool on the PDF path (no `pages` param — returns full text).

## Verified facts (use exactly; nothing beyond this)
- Homeopathic Physician; clinical practice since 2012; 14+ years; 12,000+ patients consulted; patients from India, UAE, USA (3 countries).
- BHMS — Bachelor of Homoeopathic Medicine & Surgery: Motiwala Homoeopathic Medical College & Hospital, Nashik; Maharashtra University of Health Sciences (MUHS), Nashik; final exam Nov/Dec 2010; degree conferred at convocation 26 April 2012. (Content doc says "completed in 2012" — keep that wording.)
- MD in Homoeopathy (Homoeopathic Materia Medica): SNJB's Bhamashah Shri V. D. Mehata, Dev-Vijay (Pune) Post Graduate Institute of Homoeopathy & Research Centre, Chandwad; MUHS, Nashik; exam Summer 2016; convocation 20 December 2016. ("completed in 2016")
- Registered with the Maharashtra Council of Homoeopathy, Mumbai (date of registration 28 June 2012). Do NOT publish certificate/registration/PRN numbers or the maiden name on the certificates.
- PGDPC — Post Graduate Diploma in Psychological Counselling. NO institution, NO year (no certificate supplied). Never add a year.
- Consultant Homoeopathic Physician with ONGC since 2018 (~8 years, 2018–2026). Use this designation, not "Contract Medical Officer".
- Founder, Trivana Wellness — digital practice combining homeopathy, counselling, yoga and meditation into one care plan. No founding year.
- Practises at Dr. Mutha's Homeopathic Clinic, Kopar Khairne, Navi Mumbai. Footer location per source: "Navi Mumbai & Pune, India".
- Conducted and participated in free homeopathic medical camps in Navi Mumbai (health awareness, emotional wellbeing).
- Integrates classical homeopathy with Bach flower remedies (Note/brief). Yoga & meditation as supportive mind-body practices.
- Areas of interest: anxiety, stress-related concerns, emotional wellbeing, psychosomatic concerns.
- Contact: import `siteConfig` from `src/data/websiteContent.js` (phone +91 942 397 2150, email drmohini@drmohinimutha.com, website drmohinimutha.com, socials).
- Consultation process (LOCKED, from sitemap brief): 01 Listen — Understand your concerns. / 02 Assess — Explore health history and relevant factors. / 03 Understand — Look at physical, emotional and lifestyle context. / 04 Personalise — Develop an individualised care approach. / 05 Follow Up — Review progress and adapt as appropriate. Rendered by the shared `ConsultationProcess` component (already updated). Do not change it.

## Strict content rules
- Use ONLY source text. Preserve wording, headings, lists and qualifiers. Organise and present it; do not summarise away details and do not write new marketing copy. Tiny connective UI labels (e.g., button text already in source like "Book a consultation →", section eyebrow labels taken from source headings) are fine.
- REMOVE any existing page content that is NOT supported by the sources (Phase 1 invented copy: e.g. invented symptom lists, "everyday impact" paragraphs, invented FAQs/answers, invented blog article bodies, invented case-study details, extra myths, invented speaking topics, invented statistics, invented dates). If a section would become empty, either drop it or keep a clean "structure-ready" state (e.g. "Patient stories will be shared here with patients' permission.") — never fill with invented text.
- Testimonials: the ONLY genuine patient message is the panic/anxiety gratitude quote (Case Studies "Testimonial 01"). The short "Patient experience" quotes that appear on expertise/approach/credentials pages ARE in the approved content document — you may show them on the page where the source places them, labelled exactly "Patient experience", no names/locations/"verified". Patient Stories source has only "[Patient testimonial to be added]" placeholders → do NOT render placeholder text; show structure-ready state + the genuine quote.
- Minor source typos/pronoun slips may be corrected (e.g. About Me "I'm a Homeopathic Physician… She completed" → consistent third person); list them in your audit.
- Keep all 34 routes/URLs; no new pages; keep all existing Link hrefs pointing to existing routes (see `src/app/**/page.jsx`). Internal links should follow the source's internal-linking strategy.
- Homeopathy is complementary care; never imply it replaces conventional/emergency care. The Disclaimer's source "Emergency situations" wording may be reused as a short safety note where the brief asks for a "When to seek professional help" section.
- Update each page's `metadata` (title/description) in its `src/app/<route>/page.jsx` using source wording (and a source-fitting keyword where natural).

## Design rules (keep Phase 2 system)
- Read first: `src/index.css`, `src/styles/components.css`, and the stylesheet for your pages. Keep brand tokens only (maroon #641703 `--color-primary`, powder blue `--color-accent-mint` #CFE1E5, sand `--color-accent-sand`, charcoal, white; dark sections use `--bg-dark` = maroon). No other colours.
- Shared components: Hero, SectionHeader, CTABanner, ConsultationProcess, TestimonialCard, FAQAccordion, BrandMark, StatsStrip. Do not edit shared components unless your task says so.
- Visual reference (layout ideas ONLY, no content): trivanawellness.com — hero slider with dual CTAs, clean white cards with icon + heading + "Know more" link, numbered vertical steps, testimonial cards/slider, repeated "Book a consultation" CTAs, three action tiles in CTAs (source pages use "Message me / Chat with me / Book a consultation" tiles — implement these as three linked tiles: Message me → mailto siteConfig.email, Chat with me → tel/WhatsApp-style link using siteConfig.phone (`https://wa.me/919423972150`), Book a consultation → /book-a-consultation).
- Responsive to 360px, no inline styles (aim zero), accessible markup.

## Audit output (required)
Write `docs-audit/<your-group>.md` with, for every page you own: SOURCE CONTENT FOUND (doc + page numbers) → IMPLEMENTED / NOT IMPLEMENTED (why) → REMOVED unsupported content → DUPLICATES handled → open questions for Dr. Mohini.
