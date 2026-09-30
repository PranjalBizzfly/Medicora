# Medicora — Prompt 3 Content Audit

Date: 30 September 2026 · Scope: all 34 pages · Detailed page-level audits: `A-home-about.md`, `B-expertise.md`, `C-approach-booking.md`, `D-credentials-resources.md`, `E-legal-global.md`.

## 1. Source documents → where the content went

| Document | Content found | Target pages | Status |
|---|---|---|---|
| Website Content.pdf pp.106–172 "Whole Website Content" (canonical) | Final copy for Pages 1–34 | All 34 pages | Implemented |
| Website Content.pdf pp.1–105 (drafts) | Earlier versions of the same pages; Home/About/Journey/expertise duplicates | Used only for details missing from the final section | Implemented where not superseded |
| Website Content.pdf "About Me – 2/3", "My Journey – 2" | Alternative drafts with conflicting facts (2014/2019/2021/2023 dates, "Contract Medical Officer", "MD in 2012", "relief actually lasts") | — | **Not implemented** — superseded and conflicting |
| Website Sitemap.pdf pp.2–3 | 34-page architecture | Navigation, Sitemap | Implemented (architecture unchanged) |
| Website Sitemap.pdf pp.7–38 (brief) | Positioning, tone, expertise topic lists, 5-step consultation process, credential rules, blog pillars, speaking audiences, myths example, internal-linking examples, Book/Get-in-touch direction | Home, About, Journey, Approach, Philosophy, 10 expertise pages, Approach pages, Credentials, Resources, Booking | Implemented |
| Website Sitemap.pdf pp.40–45 (Questionnaire, Note, Competition) | 12,000+ patients, ONGC 2018–2026 as Consultant Homoeopathic Physician, camps, areas treated, Trivana Wellness, clinic location | About, Journey, Credentials, Booking form options | Implemented; competitor URLs not used |
| Questionnaire.docx / Note.docx | Same text as sitemap pp.40–43 | as above | Implemented (duplicate source) |
| Keywords sheet (25 keywords) | Anxiety-focused SEO terms | Page metadata and existing source sentences only (e.g. "homeopathic physician for anxiety", "integrated anxiety care", "anxiety myths and facts", "book anxiety consultation online") | Partially — keywords with no supporting source content (e.g. "anxiety test online free", "GAD-7 test", "treatment cost", "packages") **not used**: no source content, no new pages |
| Certificates (BHMS, MD, registration, passing certificates) | Institutions, university, years | Education & Qualifications, About Me credential line | Implemented (no certificate/PRN numbers published) |
| Camp photos (3) | Free homeopathic medical camp, Navi Mumbai | Achievements gallery, My Journey, About Me | Implemented |
| Brand book / logo files | Brand identity, colours, fonts | Global design | Implemented in Phase 2 |

## 2. Page status

| # | Page | Source | Status |
|---|---|---|---|
| 1 | Home | Content p.108–112 + brief p.13–15 | Implemented (2-slide hero, 6 services, 4-step "Our approach", differentiator, contact options) |
| 2–5 | About Me, My Journey, My Approach, Clinical Philosophy | Content p.113–122 + brief p.15–18 | Implemented |
| 6–15 | 10 expertise pages | Content p.124–135 + brief p.18–22 | Implemented; brief sections without approved copy ("Understanding the concern", "Common symptoms", "Everyday life") left out |
| 16–19 | Why Homeopathy, Integrated Healing, Consultation Process, Personalised Treatment | Content p.137–142 + brief p.22–24 | Implemented; 5-step process locked |
| 20–22 | Professional Experience, Education, Achievements | Content p.143–146 + brief p.24–25 + certificates | Implemented |
| 23–28 | Patient Stories, Case Studies, Blogs, Invite Me To Speak, FAQs, Myths vs Facts | Content p.148–156 + brief p.26–29 | Implemented; placeholders rendered as "to be shared with consent" states |
| 29 | Book a Consultation | Content p.156–157 + brief p.29–30 | Implemented |
| 30–34 | Privacy, Terms, Disclaimer, Cookie, Sitemap | Content p.159–172 | Implemented verbatim; placeholders filled; editorial notes withheld |

Page count after integration: **34 pages, 34 URLs, no additions, deletions or renames.**

## 3. Removed (unsupported Phase 1 content)
Invented expertise symptom lists, "everyday impact" paragraphs, per-page FAQs and emergency boxes; invented testimonials; 3 invented case studies with clinical outcomes; blog article bodies, dates and a 4th article; extra myths; invented FAQ answers; invented speaking topics; invented journey timeline entries (Bach flower 2021, Trivana founding year, PGDPC 2019); invented differentiator cards; invented legal wording; invented booking copy (coordinator call-backs, time slots, in-person claims).

## 4. Validation
- [x] All project documents, PDFs and DOCX inspected (no ZIP files exist in the project)
- [x] Existing content files and assets inspected
- [x] Every source section mapped to a page
- [x] No unsupported claims, credentials, testimonials, case studies or statistics added
- [x] 34 pages / 34 URLs preserved; build passes; 34/34 internal links resolve
- [x] Phase 2 design system and brand identity intact
- [x] trivanawellness.com used for layout reference only; no content copied
- [x] Private source documents removed from the public site (`source-docs/`, git-ignored)

## 5. Open questions for Dr. Mohini (consolidated)
1. Genuine, consented patient testimonials and anonymised case studies (placeholders currently).
2. Full text and consent for the panic/anxiety testimonial; consent for the patient visible in the camp photos; camp dates/locations.
3. PGDPC institution and year; names of reputed clinics/doctors worked with; any recognitions, speaking engagements, associations.
4. Full blog articles; context/permission for the 3 "Event feedback" quotes.
5. Consultation hours, full clinic address / map, whether clinic visits can be booked online, and where form submissions should go.
6. Legal entity name for policies (Trivana Wellness vs Dr. Mohini Mutha); legal review of policies against actual tools and DPDP Act; cookie banner; consultation/payment/cancellation policy.
7. "USA · UAE · Online" (Trivana block) vs "India, UAE & USA"; WhatsApp number; dedicated Contact page (sitemap "Contact" currently links to booking).
8. Approved copy for expertise "Understanding the concern / Common symptoms / Everyday life" sections, and per-page FAQs.
9. Home shows the source 4-step "Our approach" (Book/Consult/Understand/Personalise); the locked 5-step process appears on Consultation Process, My Approach and elsewhere — confirm.
