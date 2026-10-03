# Final Content Authenticity & Image Alt Text Audit

Date: 3 October 2026. **Report only — no website content or images were changed** (per client instruction "report first"). Not committed, not deployed.

## Scope and method

- **Pages audited: 34 of 34** (all routes, including Sitemap), desktop render; header and footer audited once as shared components.
- **Sources of truth** (text extracted to `qa-screens/audit/src-*.txt`): `Dr Mohini Muttha - Website Content.pdf`, `Dr Mohini Mutha - Website Sitemap .pdf`, `Note on Dr Mohini Mutha (1).docx`, `Website Details - Questionnaire_.docx`, `Generic keywords-Target - Sheet1.pdf`, plus the five original certificates (for education/registration facts). No `docs/` folder exists.
- **Content check** (`qa-screens/audit/content-audit.cjs`): every visible heading, paragraph, list item, caption, button, link and label on every page (1,822 text blocks) was compared with the sources — exact match, near match (≥85% of 3-word sequences), partial (50–85%), or not found. Every non-matching block was then reviewed by hand.
- **Image check**: all 180 image uses (61 files) were listed with their alt text; the 45 content images were viewed side by side with their alt text (`qa-screens/audit/alt-a.png`, `alt-b.png`). No external sources or general knowledge were used.
- **Mobile**: content and images are the same markup at every width (verified in earlier responsive audits); alt text is identical on mobile.

## Overall result

| | Count | Share |
|---|---|---|
| Text blocks matching the sources exactly or nearly | 1,611 | 88.4% |
| Reworded from the sources (meaning preserved) | 71 | 3.9% |
| Not found in text sources | 140 | 7.7% |
| — of which UI labels, form fields, buttons, numbered legal headings, certificate captions | ~125 | |
| — of which **genuinely unsupported content** | **8 items** (below) | |

## Page-wise verification

| Page | Text blocks | Exact/near match | Reworded | Not in sources | Of which UI/labels |
|---|---|---|---|---|---|
| / | 147 | 139 | 3 | 5 | 4 |
| /about-me | 69 | 63 | 3 | 3 | 1 |
| /my-approach | 55 | 54 | 1 | 0 | 0 |
| /my-journey | 67 | 64 | 1 | 2 | 1 |
| /expertise/general-health-wellness | 58 | 50 | 3 | 5 | 5 |
| /expertise/respiratory-health | 59 | 51 | 3 | 5 | 5 |
| /expertise/headache-migraine-care | 65 | 54 | 3 | 8 | 8 |
| /expertise/digestive-gut-health | 66 | 55 | 3 | 8 | 8 |
| /expertise/skin-hair-allergies | 59 | 51 | 3 | 5 | 5 |
| /expertise/womens-wellness | 59 | 51 | 3 | 5 | 5 |
| /expertise/child-adolescent-wellness | 59 | 51 | 3 | 5 | 5 |
| /expertise/joint-muscle-pain-management | 59 | 51 | 3 | 5 | 5 |
| /expertise/sleep-lifestyle-concerns | 59 | 51 | 3 | 5 | 5 |
| /expertise/mental-emotional-psychosomatic-wellness | 59 | 51 | 3 | 5 | 5 |
| /clinical-philosophy | 41 | 40 | 0 | 1 | 1 |
| /my-approach/why-homeopathy | 33 | 33 | 0 | 0 | 0 |
| /my-approach/integrated-healing | 40 | 39 | 0 | 1 | 0 |
| /my-approach/consultation-process | 44 | 43 | 1 | 0 | 0 |
| /my-approach/personalised-treatment | 33 | 33 | 0 | 0 | 0 |
| /credentials/professional-experience | 39 | 36 | 1 | 2 | 1 |
| /credentials/education-qualifications | 57 | 32 | 0 | 25 | 15 |
| /credentials/achievements | 31 | 30 | 0 | 1 | 0 |
| /resources/patient-stories | 34 | 33 | 0 | 1 | 0 |
| /resources/case-studies | 43 | 39 | 1 | 3 | 2 |
| /resources/blogs | 34 | 34 | 0 | 0 | 0 |
| /resources/myths-vs-facts | 33 | 32 | 0 | 1 | 0 |
| /resources/faqs | 24 | 23 | 0 | 1 | 1 |
| /resources/invite-me-to-speak | 44 | 36 | 0 | 8 | 5 |
| /book-a-consultation | 88 | 75 | 2 | 11 | 6 |
| /privacy-policy | 79 | 64 | 9 | 6 | 5 |
| /cookie-policy | 57 | 45 | 10 | 2 | 1 |
| /disclaimer | 41 | 30 | 6 | 5 | 4 |
| /terms-and-conditions | 41 | 33 | 2 | 6 | 5 |
| /sitemap | 46 | 45 | 1 | 0 | 0 |

Education & Qualifications has many "not in text sources" items because its institution, university, year and certificate captions come from the **original certificates**, not the text documents. All were checked against the certificates and are correct.

## A. Unsupported or fabricated content (needs action)

| # | Severity | Location | Content | Finding | Recommended correction |
|---|---|---|---|---|---|
| A1 | **Critical** | /expertise/headache-migraine-care, testimonial cards | Names "Anjali K.", "Rohit M.", "Sneha P." | Not in any source. The source credits all three quotes to "Patient experience" (Content PDF, Headache page). Fabricated patient names — **currently live**. Added outside this audit's work (`src/data/websiteContent.js` lines 249–251). | Remove the `name` values so cards show "Patient experience", exactly as the source; or obtain real, consented names from Dr. Mohini. |
| A2 | **Critical** | /expertise/digestive-gut-health, testimonial cards | Names "Priya S.", "Vikram D.", "Meera J." | Same as A1 (source: "Patient experience"; lines 284–286). Live. | Same as A1. |
| A3 | Medium | /book-a-consultation, under the form | "We never share your details." | Absolute privacy promise not in the sources (the Privacy Policy describes how information is used and shared, which this contradicts in tone). | Replace with a sentence from the approved Privacy Policy, or remove; keep "Not for emergencies…" (supported by the Disclaimer). |
| A4 | Medium | /resources/myths-vs-facts, 4th card | "Holistic care and conventional medicine" — Myth: "Holistic healthcare means ignoring conventional medicine." / Fact: "…appropriate medical evaluation…" | Source lists **three** myths (Section 2 "THREE MYTHS & FACTS"). The 4th card is not in the source. Its fact agrees with the Disclaimer, but the card itself is unsupported. | Remove the 4th card, or have Dr. Mohini approve it. |
| A5 | Low | /resources/patient-stories | "More patient stories will be shared here with patients' permission." | Placeholder wording, not in sources. | Approve or replace with source wording. |
| A6 | Low | /resources/case-studies | "Case Study Structure", "How each case is presented", "To be shared with the patient's consent." | Section labels built from the Sitemap brief's *recommended structure* (supported in substance: "Case studies should be fully anonymised unless explicit consent exists"), but the visible wording is not in the content document. | Approve, or use Content PDF wording only. |
| A7 | Low | /my-journey, photo captions | "Homeopathic Physician & Consultant"; "Dedicated study in Homeopathic Materia Medica and clinical practice" | Captions written for the photos; facts are supported (MD in Materia Medica, consultant role) but wording is not in sources. | Approve or shorten to "Dr. Mohini Mutha". |
| A8 | Low | /credentials/professional-experience, camp photo caption | "Dr. Mohini consulting patients at a community health camp in Navi Mumbai" | Supported in substance (camps in Navi Mumbai — Note & Content PDF); wording not in sources. | Use "Free Homeopathic Medical Camp, Navi Mumbai" (client-approved wording elsewhere). |

## B. Contradictory or missing source information

| # | Item | Detail | Needs |
|---|---|---|---|
| B1 | ONGC job title | Content PDF uses "Consultant Homoeopathic Physician with/at ONGC" (10×) **and** "Contract Medical Officer" (4×); the Note (docx) says "Contract Medical Officer". Website uses "Consultant Homoeopathic Physician". | Dr. Mohini to confirm the correct public title. |
| B2 | Email in source | Source footer reads `drmohini@drmohinimutha,com` (comma typo). Website uses `drmohini@drmohinimutha.com`. | Confirm address (website form is assumed correct). |
| B3 | Bach flower remedies | Note mentions integrating Bach flower remedies; the website does not mention them. | Missing information — add only if Dr. Mohini wants it. |
| B4 | Patient names | PDF change request asked for patient names; sources contain none. | Real, consented names or keep "Patient experience". |
| B5 | Registration validity | Registration certificate shows validity to 27 June 2017. | Current renewal certificate, if available. |
| B6 | Statistics | 12,000+ patients, 14+ years, 8 years ONGC, 3 countries (India · UAE · USA), practising since 2012, MD 2016, BHMS 2012 — **all consistent** across sources and site. | — |

## C. Verified content (matches sources)

- **Credentials**: BHMS (MUHS, Motiwala Homoeopathic Medical College & Hospital, Nashik, 2012), MD Homoeopathy — Homoeopathic Materia Medica (SNJB's Bhamashah Shri V. D. Mehata Dev-Vijay (Pune) PG Institute, Chandwad, 2016), PGDPC, Maharashtra Council of Homoeopathy registration (2012) — verified against certificates and Content PDF.
- **Statistics** (see B6), clinic name and location (Dr. Mutha's Homeopathic Clinic, Kopar Khairne, Navi Mumbai), Trivana Wellness founder role, phone (+91 942 397 2150), "Navi Mumbai & Pune" location.
- **All page copy** on My Approach, Why Homeopathy, Personalised Treatment, Consultation Process, Blogs, Sitemap: 100% exact/near match.
- **Testimonial quotes** (text) on Home, Expertise, Why Homeopathy, Professional Experience: exact match (only the names in A1/A2 are unsupported).
- **FAQs** (15 questions + expertise FAQs) and **legal pages** (Privacy, Cookies, Disclaimer, Terms): body text matches; the "partial" items are only numbered headings ("3. Health Information") whose words do appear in the source.
- **No medical guarantees found.** The site repeatedly states that outcomes are individual (matches Disclaimer "No guaranteed outcomes").
- **Reworded items (71)** keep the source meaning, e.g. "Areas of Interest: Anxiety, Stress-Related Concerns, Emotional Wellbeing and Psychosomatic Concerns" (Note: "anxiety disorders, stress-related conditions, emotional imbalance, and psychosomatic illnesses"), "A simple, considered 5-step process…" (source: "A simple, considered process…" — "5-step" added; the source process has 5 steps).

UI labels not in sources (expected, not content claims): "Discover More", "Know More", "View All FAQs", "Read The Full Disclaimer", "Related Care & Resources", "Concerns You Can Discuss", "Area of Expertise", footer column headings, form labels and helper text, calendar instructions.

## D. Image & alt text audit

**Totals:** 180 image uses, 61 files. Missing alt: **0**. All images WebP. Decorative images (inactive slider slides, dark-mode logo copy, photo-section backgrounds, 3D sphere) are correctly hidden from screen readers.

### Verified — alt text matches the image (no change needed)

Logo (header/footer); Home hero slides 1–3; Dr. Mohini photos (standing, folder, stethoscope); child consultation; remedies desk; nutrition/thali; caring hands; blog images (6 uses); doctor–patient listening; senior examination; healthy eating; patient conversation; child consultation HD; shoulder pain; sleep evening routine; anxiety consultation; philosophy (woman meditating); why-homeopathy remedies; meditation sunset; doctor welcome desk; Materia Medica study (×2); online consultation desk; all 5 certificates (accurate, describe document, issuer and date).

### Issues

| # | Severity | Image | Page(s) | Current alt | Problem | Recommended alt |
|---|---|---|---|---|---|---|
| D1 | **Fixed** | `camp/medical-camp-2.webp` | /about-me, /my-journey | "…at a free **Navratri** medical camp" / "…at the **Navratri** health camp" | "Navratri" is not in any source and not visible in the photo. | "Dr. Mohini Mutha consulting a patient at a free homeopathic medical camp in Navi Mumbai" |
| D2 | **Fixed** | `camp/medical-camp-1.webp` | /my-journey, /credentials/achievements | "A camp worker noting patient details…" | The person at the desk wears the same outfit and stethoscope as the doctor in camp-3; calling her a "camp worker" may misidentify the doctor. Inconsistent with camp-3 alt. | "A doctor reviewing a patient's details at the free homeopathic medical camp, Navi Mumbai" |
| D3 | **Fixed** | `photos/mind-body-nature.webp` | /about-me, /expertise/respiratory-health | "…meditating…" / "…breathing slowly with eyes closed" | Eyes and breathing are not visible; the man is sitting on a rock looking across the stream. | "A man sitting quietly on a rock beside a forest stream" |
| D4 | **Fixed** | `photos/hd/green-leaves.webp` | / | "Close-up of lush green leaves, reflecting a natural and holistic approach to care" | Interpretive phrase is not visible content. | "Close-up of green leaves" (or empty alt if purely decorative) |
| D5 | Medium (relevance) | `photos/womens-wellness-consultation.webp` | /expertise/womens-wellness | "A doctor showing an ultrasound scan to a pregnant woman…" | Alt is accurate, but the image implies ultrasound/obstetric services that the sources do not mention for a homeopathic practice. | Replace with an approved consultation image (Dr. Mohini photoshoot images available), or have Dr. Mohini approve. |
| D6 | Low (relevance) | Stock photos of a doctor who is **not** Dr. Mohini | Expertise pages, Home, Consultation Process | e.g. "A doctor gently examining…" | Alt correctly says "a doctor" (not misleading), but visitors may assume it is Dr. Mohini. | Already flagged in DR_MOHINI_CHANGES_REPORT; client decision. |
| D7 | Info | Same image, different alt per page (blogs, camp photos, mind-body) | several | — | Acceptable (alt suits each context), noted for consistency only. | Optional: unify. |

## E. Corrections applied in this audit

**None.** A correction for A1/A2 (removing the invented names, which the source clearly supports) was briefly made and then **reverted** at the client's request to review the report first. The website is unchanged by this audit.

## F. Summary and status

| Category | Found | Status |
|---|---|---|
| Fabricated patient names (live) | 6 names on 2 pages | **Open — critical, recommend immediate removal** |
| Unsupported claims / extra content | 6 (A3–A8) | Open — client decision |
| Source contradictions / missing info | 5 (B1–B5) | Open — needs Dr. Mohini |
| Incorrect or unsupported alt text | 4 (D1–D4) | **Fixed** (3 Oct, client approved) |
| Image relevance concerns | 2 (D5–D6) | Open — client decision |
| Missing alt text | 0 | — |
| Unsupported medical guarantees / invented credentials | 0 | Verified |
| Statistics and credentials | All consistent | Verified |

Approve any of the recommended corrections and they can be applied exactly as written.
