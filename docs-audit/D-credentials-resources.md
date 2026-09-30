# Audit — Group D: Credentials & Resources

Sources: Website Content PDF ("Whole Website Content") pp.143–156; Sitemap brief pp.24–29; AGENT_BRIEF verified facts.

Shared change: new `src/views/resources/ActionTilesCTA.jsx`. It is the final CTA with three linked tiles (Message me → mailto, Chat with me → wa.me, Book a consultation → /book-a-consultation), and each page passes in its tile texts from the source. It replaces `CTABanner` on all 9 pages. New CSS was appended to `resources.css` (`rs-tiles`, `rs-pending`, `rs-structure`, `rs-link-button`, ...) and `credentials.css` (`cr-timeline-years`, `cr-registration`, `cr-credential-meta`, `cr-gallery`). No existing classes were deleted.

Data (`src/data/websiteContent.js`):
- `patientTestimonials` now holds only the genuine Testimonial 01.
- `caseStudiesList` is now `[]`.
- New exports: `caseStudyStructure`, `blogCategories`.
- `blogArticles` holds the 3 source cards (id/title/category/categoryId/summary; no date/readTime/content).
- `mythsAndFactsList` holds 3 source myths plus the brief example.
- `generalFaqs` holds the 15 source Q&As with `intro`.
- HomePage still works with the same field names, but it now shows 1 testimonial card.

## Professional Experience (p.143–144; brief p.24)
- IMPLEMENTED: the hero, all 3 experience areas with "Discover more" links, the "Experience that continues to shape my care" section with its 3 stats, 3 "Patient experience" quotes, a factual timeline (2012 clinical practice → 2018 ONGC → independent practice: the Clinic plus Trivana Wellness), and the final CTA with tiles.
- NOT IMPLEMENTED: the brief's "Experience with reputed clinics/doctors" timeline item. No names or dates exist in the sources.
- REMOVED: the invented specialty list in the Clinical Practice card ("respiratory, migraines, digestive…"), "contributing healthcare expertise within a structured corporate medical environment", "empathetic, whole-person approach", and the StatsStrip copy that was not on this page.

## Education & Qualifications (p.144–145; brief p.24)
- IMPLEMENTED: the 3 qualification cards with verified institution, university and year:
  - BHMS: Motiwala, MUHS, 2012.
  - MD: SNJB's … Chandwad, MUHS, 2016.
  - PGDPC: no institution or year.
- Also implemented: the registration line (Maharashtra Council of Homoeopathy, Mumbai, 2012; no numbers), the 3 "Learning that continues beyond qualification" items, and the final CTA.
- Typo fixed: "Beyond Qualification" → "beyond qualification".
- REMOVED: any Phase 1 elaboration beyond the source.

## Achievements (p.145–146; brief p.25)
- IMPLEMENTED: the 3 key milestones, the 3 milestones, and a camp photo gallery (3 photos, `next/image`, factual alt text and captions) under the source's "Community outreach" line. Also the final CTA.
- Punctuation fixed: "More than numbers meaningful milestones" → "More than numbers, meaningful milestones".
- NOT IMPLEMENTED: speaking engagements, certifications, recognitions and associations. None are verified.
- REMOVED: invented Phase 1 achievement copy.

## Patient Stories (p.148–149; brief p.25)
- IMPLEMENTED: the 3 themes, "What patients have to say", the genuine quote only, a structure-ready state ("More patient stories will be shared here with patients' permission." with Challenge → Consultation Experience → Patient Perspective), the 3 principles, and the final CTA.
- NOT RENDERED: the source's 3 "[Patient testimonial to be added]" and "Patient name · Location" placeholders.
- REMOVED: 3 invented testimonials (headaches, digestive, fatigue) and their invented category/condition labels.

## Case Studies (p.149–150; brief p.25)
- IMPLEMENTED: the 3 stages, "Real cases, thoughtfully presented", Testimonial 01 (genuine), and Testimonials 02/03 as their source title and description plus "To be shared with the patient's consent." Also the 3 perspective items, and the brief's 5-part structure (Patient Profile → … → Follow-up/Outcome) as an explanatory list. The step descriptions reuse source sentences from this page. The final CTA carries the source "not to promise a particular outcome" line.
- REMOVED: all 3 invented case studies (anxiety/headache/digestive profiles, assessments, care approaches, outcomes).
- DUPLICATE: the "Patient experiences are individual…" text appears only in the CTA.

## Blogs (p.150–151; brief p.26)
- IMPLEMENTED: the hero (with the "Health & Wellness" eyebrow), 3 categories ("Explore articles" filters the list), and 3 article cards with title and one-liner. "Read article" shows a "Full article coming soon" state. Also the brief's 10 content pillars, and the CTA (Explore all blogs / Ask a question / Book a consultation).
- REMOVED: invented article bodies, dates ("September 2026"), read times, the 4th article ("Looking at the Person…"), and the reader panel.

## Invite Me To Speak (p.152–153; brief p.26)
- IMPLEMENTED: the 3 speaking areas, Talks/Workshops/Conversations, the brief's 7 audiences (exact wording), 3 "Event feedback" quotes, and the enquiry form (kept). The form now opens a pre-filled mailto to `siteConfig.email` instead of a fake "our team will review" success. Also the CTA tiles (Send an invitation / Discuss your topic / Get in touch) and the brief's CTA "Invite Dr. Mohini to Speak".
- REMOVED:
  - Invented topic texts: "immune resilience", "burnout prevention", "debunking myths".
  - Invented audience names: "Mental Health & Psychosomatic Panels", "Colleges".
  - The "institutional healthcare experience at ONGC … connects effectively" claim.
  - The placeholder phone number "+91 98765 43210".

## FAQs (p.153–155; brief p.27)
- IMPLEMENTED: exactly 15 source Q&As in General Questions / Service Details / Procedures, with each category's intro. The left-side category nav and accordion behaviour are kept. Hero uses the source text.
- NOT ADDED: the brief's example questions without answers (consultation length, previous reports, follow-up).
- REMOVED: invented or expanded answers:
  - The ONGC sentence in Q1.
  - "video and audio".
  - "strictly individualised… constitutional portrait".
  - "phone or WhatsApp" and "in-person".
  - "previous medical reports, prescriptions, timeline".
  - "Absolutely".
- Other changes: the category "Procedures & Appointments" was renamed to the source's "Procedures", and the "Ask a question" section was replaced by the CTA tiles.
- DUPLICATE: the CTA heading reuses Procedures Q05 wording.

## Myths vs Facts (p.155–156; brief p.27)
- IMPLEMENTED: the 3 source myths with their titles and exact myth/fact text, plus the brief's example myth. That myth's card title is a short connective label ("Holistic care and conventional medicine"). Also the Better information section with its 3 items, and the CTA.
- REMOVED: the "instant universal cures" myth, and invented fact expansions ("palpitations, muscle tension…", "psychosomatic and chronic conditions", "triggers, emotional state").

## Metadata
All 9 `page.jsx` descriptions were rewritten from source hero wording and verified facts. Titles are unchanged.

## Open questions for Dr. Mohini
1. Names and years of the "reputed clinics/doctors" worked with before independent practice (brief timeline item)?
2. PGDPC institution and year? A certificate is needed before publishing.
3. Any verified speaking engagements, certifications, recognitions or professional associations to list under Achievements?
4. Consented patient stories and anonymised case studies (for Testimonials 02/03 and the case structure)?
5. Full text for the 3 blog articles?
6. The context and dates for the 3 "Event feedback" quotes, and permission to publish them?
7. Dates and locations of the medical camps, to make the photo captions more specific?
8. Should a form backend replace the mailto speaking enquiry?

Lint: `npx oxlint` gives 0 errors and 1 warning (react only-export-components on `ActionTilesCTA.jsx`, which also exports `defaultTiles`; this only affects fast refresh).
