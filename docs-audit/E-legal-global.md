# Group E — Legal & Global (audit)

Source = `Dr Mohini Muttha - Website Content.pdf` ("Whole Website Content") unless noted. `npx oxlint` on all touched files: 0 warnings / 0 errors.

## Shared change
- New `src/views/legal/LegalDocument.jsx` renders Privacy, Terms, Disclaimer and Cookie pages with the Phase 2 layout (Hero, sticky "On this page" TOC, numbered sections, contact card). Content lives as data in each page file.
- Placeholders filled: `[Insert Email Address]` → siteConfig.email, `[Insert Contact Number]` → siteConfig.phone, `[Insert Website URL]` → drmohinimutha.com, `[Month, Year]` → "September 2026" (all four legal pages show "Last updated: September 2026").
- `legal.css`: added `.lg-doc-intro`, `.lg-doc-subheading`, `.lg-doc-footnotes`, `.lg-contact-cta`, `.lg-sitemap-cta` (brand tokens only).

## Privacy Policy — /privacy-policy (pp.159–162, Page 30)
- FOUND: 13 sections. IMPLEMENTED: all of them, word for word. Section 1 is the hero ("Privacy Policy" / "Your privacy matters to us") plus the intro paragraph. Sections 2–13 are the 12 TOC items, with every bullet included. Section 7 keeps both sub-headings ("How we protect your information" / "How long we keep information"). The CTA label "Privacy enquiries" comes from the source.
- REMOVED (Phase 1 wording not in the source): "responsibly and confidentially"; "telephone / WhatsApp"; "device parameters, technical log"; "kept strictly confidential… medical ethics"; "classified as sensitive"; the in-person consultation wording; the clinic address line in the contact card; and other paraphrases.
- Small fix: the source bullet `other "website features"` is rendered without the stray quotes.

## Terms and Conditions — /terms-and-conditions (pp.162–164, Page 31)
- IMPLEMENTED: the hero ("Home → Terms and Conditions" breadcrumb, "Our terms and conditions" heading, source paragraph). The 5 left-nav sections are in source order, with every "Label: text" item word for word. Also included: the closing acknowledgement sentence, "Last updated: September 2026", and the "Important:" note as a footnote.
- REMOVED: invented wording, specifically "classical homeopathy, psychological counselling"; "Online and in-person"; "permanent cure"; "severe chest pain, shortness of breath, acute hemorrhage"; "scrape, republish… logos… express prior written consent"; "so that the slot may be offered to other patients"; and the clinic address.
- NOT PUBLISHED (the client's own editorial notes): the "Structure match" table; the note "I changed 'Property rights' → 'Patient responsibilities'…"; the note "One thing I would add before publishing: a dedicated Privacy Policy page… DPDP…". The "Recommended small footer note" label is also not published; its content ("Last updated") is used.

## Disclaimer — /disclaimer (pp.164–166, Page 32)
- IMPLEMENTED: 10 sections. Section 1 is the hero (badge "Disclaimer", title "Important information about this website", source paragraph as subtitle). Sections 2–10 are the TOC. Section 10 is "Questions?" with the sub-heading "Need clarification?" and the CTA "Contact Dr. Mohini Mutha". All text is verbatim.
- REMOVED: all earlier non-source copy on the page (replaced in full).

## Cookie Policy — /cookie-policy (pp.166–168, Page 33)
- IMPLEMENTED: 10 sections. Section 1 is the hero ("Understanding how cookies work" plus the source sentence). Sections 2–10 are the TOC. The 4 cookie types are sub-headings, and all bullets are included. Section 10 has "We're here to help" and the CTA "Contact us".
- REMOVED: all earlier non-source copy (replaced in full).

## Sitemap — /sitemap (pp.168–172, Page 34)
- IMPLEMENTED: the hero (badge "Sitemap", source headline and subline). The 7 groups follow the source order and grouping: Main pages, Areas of Care, Understanding Care, About Dr. Mohini (this includes Patient Stories and Case Studies, as in the source), Resources, Connect (Invite Me To Speak, Contact, Book a Consultation), and Legal & Privacy. Each item has its source description and source link label ("Visit Home", "Explore About", "Explore", "Invite Me", "Contact Us", "Book Consultation", "View Privacy Policy"…).
- DEVIATIONS:
  - **Contact** links to `/book-a-consultation`, because there is no /contact route and none was created.
  - **Terms and Conditions** is missing from the source's Legal & Privacy list. It was added so the route is reachable, using the Terms hero sentence as its description and "View Terms and Conditions" as a UI label.
  - The page does not link to itself (/sitemap). All other 33 routes and "/" resolve.
- REMOVED: the numbered "1.–34." names; "Exact 34-Page Structure" and "Complete 34-Page Website Directory"; group descriptions and "N pages" counts; and invented item descriptions ("DPDP compliance", "PCOS/PCOD", "sweet-pill", "Interactive 4-step scheduling", "10 content pillars", "Clinical journey since 2012 and 8 years at ONGC", etc.).

## Footer (Content PDF p.2; Sitemap brief p.30)
- Kept: the Phase 2 design, phone, email, "Navi Mumbai & Pune, India", the 4 social links, and the link columns.
- Bio is now the About Me hero sentence (p.~108): "With 14+ years of clinical experience and 12,000+ patients consulted, Dr. Mohini Mutha combines homeopathy, counselling and a personalised understanding of every patient."
- Subtitle is now "Homeopathy · Counselling · Mind-Body Care" (Home hero tagline). It replaced "MD in Homeopathy · PGDPC Counselling".
- The disclaimer strip is now the Disclaimer Section 1 wording verbatim, plus the Section 6 sentence and a link to /disclaimer. Removed the added "only", the "Medical Notice &" prefix and the paraphrased emergency sentence.
- The bottom links now follow the brief list: Contact (mailto, since no route exists), Book a Consultation, Privacy Policy, Terms & Conditions, Disclaimer, Cookie Policy, Sitemap.
- REMOVED: "Online Consultations: India · UAE · USA" (invented line) and "Practices at Dr. Mutha's Homeopathic Clinic & Trivana Wellness." Column link labels were renamed to the source page names ("My Journey", "Blogs", "FAQs", "Education & Qualifications", "Achievements", "Joint, Muscle & Pain Management", "Mental, Emotional & Psychosomatic Wellness").

## Navigation descriptions (websiteContent.js `navigationLinks` desc only)
- Checked against the PDF. 20 were already source text. These 7 were replaced with page hero or sitemap lines:
  - My Journey: "From studying medicine to understanding the person behind it"
  - Clinical Philosophy: "Good care begins with understanding the person behind the symptoms"
  - Mental, Emotional & Psychosomatic: "Support for emotional concerns that may affect how you feel and function"
  - Consultation Process: "A simple, thoughtful approach to your care"
  - Personalised Treatment: the Sitemap description
  - Education & Qualifications: "Qualifications that support thoughtful patient care"
  - Patient Stories: "Real experiences from people I have cared for"
- Labels and paths were not changed.

## Metadata
- Privacy, Terms, Disclaimer, Cookie and Sitemap descriptions now use source sentences.
- Root layout: the title default is "Dr. Mohini Mutha | Homeopathy · Counselling · Mind-Body Care", and the description is the About Me hero sentence. Removed "in-person in Navi Mumbai / (India, UAE, USA)".

## Review notes / open questions for Dr. Mohini
1. Source editorial note (Privacy p.162): the policy should be reviewed against the actual booking, analytics, payment, hosting and communication tools, and the applicable privacy laws (e.g. India's DPDP Act). This note is not published.
2. The Privacy, Terms and Cookie pages name "Trivana Wellness" as the data controller and contact, while the Disclaimer names Dr. Mohini Mutha. Please confirm the legal entity name.
3. Terms refers to "any applicable consultation, payment or cancellation policy". No such policy exists on the site. Please confirm whether one is needed.
4. Is a dedicated Contact page wanted? The sitemap "Contact" item currently goes to /book-a-consultation.
5. Confirm "Last updated: September 2026".
6. The Cookie Policy mentions consent options, but no cookie banner is implemented. Please confirm the analytics and marketing tools.
