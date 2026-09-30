# B-expertise — Audit (10 expertise pages)

## Scope / files changed
- `src/components/ExpertiseTemplate.jsx` — rewritten; now takes `id` (+ optional `badge`) and reads all content from `expertiseSpecialties`.
- `src/styles/expertise.css` — removed rules for deleted sections (understanding, detail cards, safety grid); added care-area cards, concerns list, FAQ link, consultation-process link, CTA action tiles. Brand tokens only, no inline styles.
- `src/views/expertise/*.jsx` (10) — now thin wrappers: `<ExpertiseTemplate id="…" />`.
- `src/data/websiteContent.js` — only the `expertiseSpecialties` export (plus private helpers `EXPERTISE_FAQ`, `standardTiles`, `REL` directly above it). ids / paths / icons / `isKeyDifferentiator` kept; `shortDesc` still used by HomePage.
- `src/app/expertise/*/page.jsx` (10) — metadata description = source hero tagline + Sitemap-page one-liner.

## Section order (all pages)
Hero → Three care areas (with source link labels) → Concerns you can discuss → Our approach (3 items) → Patient experience (Headache, Digestive only) → When to seek professional help → FAQs (verbatim, link to /resources/faqs) → Related care & resources → Consultation process link → Final CTA with the page's action tiles.

## Sources used (all pages)
| Section | Source |
|---|---|
| Hero title + tagline, care areas + link labels, approach heading/intro/items, CTA heading/intro/tiles | Content PDF "Whole Website Content" Pages 6–15, pp.124–135 |
| Patient experience quotes | Content PDF pp.126 (Headache), 127 (Digestive); identical in drafts pp.42–72. No other expertise page has quotes. |
| Concerns you can discuss | Sitemap brief pp.18–22 ("Focus / Potential topics / Potential areas") — listed as-is, no explanations |
| Hero side-card intro, metadata | Content PDF Sitemap page p.169 ("Areas of Care" one-liners) |
| When to seek professional help | Content PDF Disclaimer p.165 "Emergency situations" (3 sentences verbatim) + first sentence pair of "Homeopathy and complementary care"; link to /disclaimer |
| FAQs | Content PDF FAQ page pp.153–155, verbatim Q+A, 3 per page |
| Related links | Sitemap brief p.31 internal-linking examples (Mental → sleep, counselling approach, blogs, consultation; Women's → blogs, consultation); existing routes only |

## Per page
| Page | Care-area link labels | Concerns (brief) | Patient experience | FAQs used | CTA tiles |
|---|---|---|---|---|---|
| General Health & Wellness | Discover more ×3 | Overall wellbeing, Preventive health awareness, Lifestyle, Individualised wellness | — | same approach / what to discuss / ask before booking | Message me · Chat with me · Book a consultation |
| Respiratory Health | Discover more ×3 | Recurring respiratory concerns, Allergic tendencies, Sinus-related concerns, Seasonal respiratory issues | — | same / discuss / ask | standard |
| Headache & Migraine Care | Explore care · Discover more · Learn more | Headaches, Migraine patterns, Triggers, Lifestyle factors, Patient assessment | 3 source quotes | same / discuss / first consultation | standard |
| Digestive & Gut Health | Discover more · Explore care · Discover more | Acidity, Indigestion, Bloating, Constipation, IBS-related concerns | 3 source quotes | same / discuss / first | standard |
| Skin, Hair & Allergies | Learn more · Discover more · Discover more | Acne, Eczema, Allergic skin concerns, Hair fall, Recurring skin issues | — | same / discuss / ask | standard |
| Women's Wellness | Learn more · Discover more · Discover more | Menstrual health, Hormonal concerns, PCOS/PCOD, Women's overall wellness | — | same / discuss / first | Book a consultation · Meet Dr. Mohini (/about-me) · Chat with me |
| Child & Adolescent Wellness | Explore care · Discover more · Discover more | Common childhood concerns, Allergies, Respiratory concerns, Digestive concerns, Adolescent wellbeing | — | same / discuss / ask | standard (source texts "Discuss your concerns with me." / "Discuss your child's wellbeing.") |
| Joint, Muscle & Pain Management | Discover more ×3 | Joint discomfort, Stiffness, Back pain, Muscle discomfort, Mobility-related concerns | — | same / discuss / first | Button "View consultation options" + See your options · Explore your care options · Book an appointment |
| Sleep & Lifestyle Concerns | Discover more ×3 | Sleep difficulties, Stress, Lifestyle patterns, Work-life pressures, Wellness routines | — | discuss / yoga & meditation / same | standard |
| Mental, Emotional & Psychosomatic | Discover more · Learn more · Discover more | Stress, Anxiety, Emotional wellbeing, Psychosomatic concerns, Mind-body connection, Counselling support | — | online anxiety / counselling / homeopathy + counselling | Explore your care options (/my-approach/integrated-healing) · Chat with me · Book a consultation |

Tile targets: Message me → `mailto:siteConfig.email`; Chat with me → `https://wa.me/919423972150`; Book → `/book-a-consultation`.

## REMOVED (unsupported Phase 1 content)
- All `understandingText` paragraphs (e.g. Mental page "fight-or-flight", "digestive spasms, chest heaviness…").
- All `commonSymptoms` lists (e.g. "Physical panic sensations…", "nervous diarrhea…").
- All `everydayImpactText` paragraphs and the hard-coded "When symptoms persist, they can gradually interfere…" paragraph.
- Invented `whenToSeekHelp` bullet lists and the invented "Emergency notice: … chest pain, shortness of breath or high fever…" box (replaced by Disclaimer wording).
- All invented per-page FAQs (both in views and in `expertiseSpecialties`), e.g. "Are homeopathic sleep remedies habit-forming?", "Is homeopathy safe and palatable for young children?", "…without unwanted medicinal interactions", Bach-flower FAQ.
- Invented testimonials: "I appreciated having space to discuss both my physical and emotional concerns." and the template's fallback quotes on pages without source quotes. The panic/anxiety gratitude quote was removed from the Mental page (source places it on Case Studies, not here).
- Invented hard-coded approach steps ("No rushed appointments", "one-size-fits-all prescription") → replaced by each page's own source approach items.
- Invented copy in hero side card ("Every case begins with careful listening…", "Online & in-person care") and "Patient-Centred Insight" box.
- Embellished care-area texts / shortDesc in `expertiseSpecialties` (e.g. "sweet-pill homeopathic care", "sleep latency", "PCOS/PCOD" inserted into care areas, "environmental triggers") → restored to source wording.
- Generic CTABanner copy ("Start a Conversation About Your {title}") → page's own source CTA.

## Duplicates handled
- Single source of truth: page content lives only in `expertiseSpecialties`; views no longer duplicate it.
- Women's source CTA lists four tiles with "Book a consultation" twice → rendered three unique tiles (Book a consultation / Meet Dr. Mohini / Chat with me).
- Emergency safety text is shared across all 10 pages (same Disclaimer source).

## Minor corrections
- General Health care area 1: stray ". ." at end of sentence removed.
- Source "personalized" spelling kept as written in General approach intro and Digestive quote.

## Implementation choices to confirm
- Source "Discover more / Learn more / Explore care" links have no target. Where the text clearly points to another area they link there (e.g. Lifestyle concerns/factors → /expertise/sleep-lifestyle-concerns, Emotional wellbeing → Mental page, Allergic concerns → Respiratory, Healthy routines/Mind-body → /my-approach/integrated-healing); otherwise they jump to the on-page "Concerns you can discuss" or "Our approach" section.
- Mental page: the brief's "Important" note is a vendor instruction, not publishable copy, so it's met by the Disclaimer text ("For urgent mental health concerns or an immediate risk of harm…", shown highlighted on this page, and "…not intended to suggest that homeopathy should replace medically necessary conventional care.") instead of new wording.
- Brief template sections "Understanding the concern", "Common symptoms" and "How it can affect everyday life" have no approved copy → not rendered (only the brief's topic list appears as "Concerns you can discuss").
- Hero side card uses verified facts only (Homeopathic Physician, 14+ years; BHMS, MD (Homoeopathy), PGDPC).

## Open questions for Dr. Mohini
1. Do you want copy for "Understanding the concern", "Common symptoms" and "Everyday life" on each expertise page? The brief asks for these sections but the content document has none.
2. Where should each "Discover more / Learn more" care-area link go (a blog, a resource, or nowhere)?
3. Women's CTA: the source repeats "Book a consultation". Is the three-tile version OK?
4. Joint CTA: where should "See your options" and "View consultation options" link? Right now they go to /my-approach/personalised-treatment and /book-a-consultation.
5. Can you share Patient experience quotes for the other 8 pages, or should those pages go without them?
6. Should any page get 4–6 FAQs of its own, as the brief suggests? Right now each page shows 3 general FAQs copied word for word from the FAQ page.

## Checks
- `npx oxlint` on template, views, app/expertise and websiteContent.js: 0 warnings, 0 errors.
- `expertiseSpecialties` module import verified (10 entries); HomePage fields (`id`, `path`, `icon`, `title`, `shortDesc`, `isKeyDifferentiator`) intact.
