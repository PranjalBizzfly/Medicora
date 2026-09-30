# Audit — Group A (Home + About)

Sources: **WC** = `Dr Mohini Muttha - Website Content.pdf` ("Whole Website Content", pp.106–112 for Pages 1–5; Blogs p.~134; Case Studies p.~133; expertise hero taglines pp.112–131; Disclaimer "Emergency situations" p.~169). **SB** = `Dr Mohini Mutha - Website Sitemap .pdf` pp.13–18. **Verified facts** = AGENT_BRIEF.

Files changed: `src/views/HomePage.jsx`, `src/views/AboutMePage.jsx`, `src/views/MyJourneyPage.jsx`, `src/views/MyApproachPage.jsx`, `src/views/ClinicalPhilosophyPage.jsx`, `src/components/HeroSlider.jsx` (new, client), `src/components/StatsStrip.jsx`, `src/styles/home.css`, `src/styles/about.css`, `src/app/{page,about-me/page,my-journey/page,my-approach/page,clinical-philosophy/page}.jsx`. `npx oxlint` clean.

## Home (`/`)
**Source found:** WC Page 1 (Sections 1–7); SB Page 1 (areas grid, patient stories, resources, final CTA).
**Implemented:**
- S1 2-slide hero via `HeroSlider` (auto-advance 7s, pauses on hover/focus-within, no auto-advance under `prefers-reduced-motion`, dot buttons with aria-labels, inactive slide `aria-hidden` + `inert`, only slide 1 is `h1`). Secondary CTAs: "Meet Dr. Mohini" (source S3 button) / "Explore her expertise" (SB secondary CTA).
- S2 three feature cards (01 text uses verified clinic "Dr. Mutha's Homeopathic Clinic in Kopar Khairne, Navi Mumbai"). All links → `/book-a-consultation`.
- S3 "A Word About Dr. Mutha" — source text verbatim; side card lists verified facts (MD, PGDPC, ONGC since 2018, clinic, Trivana) + areas of interest (SB "Introducing Dr. Mohini" checklist).
- Stats strip (About Me source captions).
- S4 all six service cards + bullets, linked: Online Anxiety Care & Mental/Emotional → mental-emotional-psychosomatic-wellness; General → general-health-wellness; Psychological Counselling & Integrated Anxiety Care → /my-approach/integrated-healing; Sleep → sleep-lifestyle-concerns.
- SB Areas of Expertise grid (10) with WC hero taglines.
- S5 "Four steps towards better well-being" (Book/Consult/Understand/Personalise) + "See the full consultation process →".
- S6 differentiator: source heading/two paragraphs + 3 source cards only.
- Patient stories: only the genuine Testimonial 01 quote, labelled "Patient experience", + "Read the full experience" → case studies.
- Resources: 3 WC Blogs "latest insights" titles/descriptions + FAQs / Myths vs Facts / Blogs links.
- S7 both contact options (Trivana Wellness "USA • UAE • Online"; "Begin with Dr. Mohini").
- SB final CTA "Your health deserves a personal approach." (custom panel, no invented subtitle).
**Removed:** hero headline "Personalised Care for Better Mind & Body Wellness" + reworded subtitle/note (replaced by the source slides); "wherever you are in India, the UAE, or the USA" / "appointment window that works comfortably with your schedule" rewrites; Bach flower sentence and "lifestyle factors" rewording in About paragraph; invented cards "Patient-First Listening", "Institutional Experience", "Community Outreach & Camps" and the expanded wording of the other 3; invented "Holistic Care for Mind & Body Well-being" expertise subtitle and "Key Focus" badges; `patientTestimonials` preview cards (non-genuine); `blogArticles` data-driven summaries; generic CTABanner subtitle; the 5-step ConsultationProcess (replaced by Home's own 4 steps, linked to the full process).
**Duplicates:** 4-step (Home) vs 5-step (Consultation Process page) — kept separate per instructions, linked.

## About Me (`/about-me`)
**Source found:** WC Page 2 (7 sections); verified education facts; SB Page 2.
**Implemented:** hero (source heading/subtitle, "Learn more about Dr. Mohini" → /my-journey); S2 stats with eyebrow/heading/paragraph and exact captions (ONGC note included); S3 "Who I am" + verified credentials line (BHMS/MD institutions, "completed in 2012/2016", PGDPC without institution/year) linking to Education & Qualifications; S4 values panel (heading "Listen carefully. Understand deeply. Care personally.") + narrative "Good healthcare begins with care and understanding" (3 source paragraphs); S5 5-item timeline (2012 / MD / Counselling / 2018 / Today) verbatim; S6 "More than qualifications" + camps paragraph with `medical-camp-1.jpg`; S7 final CTA (CTABanner).
**Removed:** "Meet Dr. Mohini Mutha" H1; third "Her Story" paragraph (PGDPC motivation, "dual training"); expanded value texts; three invented community cards ("Health Awareness Drives", "Ongoing Commitment", etc.).
**Typo fixes:** "I'm a Homeopathic Physician… She completed" → "Dr. Mohini Mutha is a Homeopathic Physician… She completed" (third person). Source "*" after "Good healthcare begins with care and understanding" dropped.
**Not implemented:** CTA tagline "Personalised • Thoughtful • Doctor-led" (shared CTABanner has no slot; badge used for source eyebrow).

## My Journey (`/my-journey`)
**Source found:** WC Page 3 (11 sections).
**Implemented:** all 11 sections verbatim: hero + "14+ years · 12,000+ patients · 3 countries" side card; Sections 2–6 as numbered chapter timeline (Beginning 2012, Education, Years of experience with emphasised line, Turning point, ONGC 2018) with links to Education / Professional Experience; S7 "Beyond the clinic" with all three camp photos + link to Achievements; S8 Today; S9 four learnings; S10 "A note from me" signed "Dr. Mohini Mutha"; S11 final CTA with "Trivana Wellness · Doctor-led · Personalised · Online" as badge.
**Removed:** invented timeline (2016 MD entry text, "constitutional remedies", "Integrating Bach Flower Remedies" entry, "Founded Trivana Wellness & International Online Practice", ordering PGDPC after 2018), invented turning-point paragraphs ("wasn't a detour from homeopathy…"), invented pull quote, "8 Years Institutional Practice" milestone, expanded learning descriptions, invented section subtitles.
**Not used:** SB timeline "Contract Medical Officer" / "Worked alongside experienced doctors" (superseded / not in canonical copy).

## My Approach (`/my-approach`)
**Source found:** WC Page 4 (3 sections); SB p.17.
**Implemented:** hero with SB heading "Every patient is different. So should their care be." + subtitle "Care that starts with understanding"; 3 overview cards verbatim with "Discover more" (→ consultation-process, clinical-philosophy, personalised-treatment); SB six-item list under "Listen. Understand. Personalise." (SB Home S4 heading); Disclaimer "Emergency situations" wording as safety note (SB "Avoid unsupported claims"); 3-item stats with source captions; locked 5-step ConsultationProcess; contact section with 3 source tiles (Message me → mailto, Book a consultation, Explore your options → /my-approach/integrated-healing).
**Removed:** invented pillar texts (Bach flower/breathing), four invented "What Happens When You Consult" steps, invented "Medical Responsibility Statement" + quote, generic CTABanner.
**Note:** source tile set here is Message me / Book / Explore your options (no "Chat with me"), so WhatsApp tile not added.

## Clinical Philosophy (`/clinical-philosophy`)
**Source found:** WC Page 5 (6 sections); SB pp.17–18.
**Implemented:** hero verbatim with "Understanding • Individualised • Whole-Person" side card; S2 three paragraphs verbatim; SB equation (Physical health + Emotional wellbeing + Lifestyle + Individual context → A more complete understanding of the patient) under SB heading "Health is more than a set of symptoms"; S3 three principles verbatim; S4 three supports verbatim + closing sentence + link to Integrated Healing; S5 experience paragraph + 3 stats; S6 final CTA.
**Removed:** old H1 (moved to equation panel), expanded principle/support texts (digestive problems, relationship stress, hydration, "safe, non-judgmental space"), invented section subtitle, 3-term equation labels.

## StatsStrip (shared)
Captions changed to About Me source; notes only where source has one; added optional `eyebrow` and `items` props (3-item variant `.stats-grid-3` in about.css). Other callers (Achievements, Professional Experience) still render the default 4 stats with their own titles.

## Open questions for Dr. Mohini
1. Home feature card 01 "View clinic details" — is there a clinic address/map page? Currently links to Book a Consultation.
2. Home S7 option 1 says "USA · UAE · Online" for Trivana Wellness while elsewhere patients are "India, UAE & USA" — confirm.
3. Which pages should "Psychological Counselling" and "Online Anxiety Care" service cards link to (no dedicated pages exist)?
4. Year of PGDPC completion (timeline currently undated, placed between MD and 2018 per source order).
5. Permission/consent to show the camp patient in `medical-camp-2.jpg`.
6. Full text of the Testimonial 01 ("Read the full experience") and consent to publish it.
