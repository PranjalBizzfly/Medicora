# Audit — Group C: My Approach pages + Book a Consultation

Sources: Website Content PDF ("Whole Website Content") pp.137–142, 156–157; Privacy Policy section (the "Please note" sentence); Disclaimer section 5 "Emergency situations"; Sitemap brief pp.22 and 29–30.

Shared structure: the four approach pages now use `src/views/approach/ApproachTemplate.jsx` (hero → three cards with a "Learn/Discover more" link → approach split with three points and three "Patient experience" quotes → final CTA). The final CTA is the source's three action tiles (`src/views/approach/ActionTiles.jsx`: Explore → internal route, Chat with me → wa.me/919423972150, Message me → mailto siteConfig.email, Book → /book-a-consultation). The shared CTABanner is not used on these pages because it carried invented copy ("Book an Online Consultation", "Online consultations for India · UAE · USA") and has no tiles.

## Why Homeopathy (Page 16, pp.137–138; brief p.22)
- IMPLEMENTED word-for-word: hero title and tagline; the three core areas (Individualised care, A deeper conversation, Personalised support) with Learn more / Discover more links; "Understanding the homeopathic approach" plus Individuality/Your story/Conversations matter; 3 Patient experience quotes; final CTA "Explore whether homeopathy is right for you" with 3 tiles (Explore your options / Chat with me / Book a consultation). The brief heading "Understanding the role of homeopathy in personalised care" is used as the heading for the cards.
- REMOVED: "Developed over two centuries ago, it evaluates the total symptom complex…"; "constitutional sensitivities", "No two care plans are identical"; "emotional patterns, sleep rhythms… case-taking… before choosing a remedy"; "generic protocol…condition name"; "Homeopathy honors these variations"; "onset story, emotional triggers… finding the right remedy"; "without clinical judgment or hurry"; the hero sentence "evidence-conscious, individualised homeopathy in modern personalised healthcare"; the vendor-note subtitle "Content explained in an educational… manner"; the panel heading "Patient Experiences with Homeopathy".
- Source typo: the source says "Explore Your options … what to expect.." (double period). Fixed to one period, sentence case.

## Integrated Healing (Page 17, pp.138–140; brief p.22)
- IMPLEMENTED: hero; three care areas (Homeopathic care, Psychological counselling, Mind-body practices); "A more connected approach to wellbeing" plus Understand/Connect/Personalise; 3 quotes; CTA "Care that brings everything together" with its tiles. The brief's equation "Looking at the person, not just the symptom" is shown as four chips joined by "+": Homeopathy + Psychological counselling perspective + Lifestyle awareness + Patient communication. There are links (not copies) to /clinical-philosophy and to Home ("Integrated Anxiety Care").
- NOT IMPLEMENTED: the vendor note "not claiming that one modality replaces another" is an instruction, not copy, so it is not rendered. The page copy follows it.
- REMOVED (invented): "constitutional portrait"; "confidential space to unpack… chronic stress triggers… thought patterns"; "Gentle breathing exercises, **Bach flower emotional remedies**, restorative routines… nervous system balance"; "Physical distress triggers emotional strain… digestive unrest, or poor sleep"; "sleep patterns" and "ongoing feedback" additions; the hero addition "classical homeopathy"; the heading "Three Connected Elements…"; the "Patient Perspectives" heading.

## Consultation Process (Page 18, pp.140–141; brief p.22)
- IMPLEMENTED: hero; the three steps (Book your consultation / Talk openly / Understand the next step, with the source link labels "Explore your care" and "Discover more"); the shared locked `ConsultationProcess` 5-step component titled "What to expect during your consultation"; "What to expect from your consultation" with Before/During/After exactly as in the source; 3 quotes; CTA "Ready to take the next step in your care?" with its tiles.
- REMOVED: the invented Before/During/After checklists ("Note down primary symptoms", "Have previous prescriptions handy", "Comprehensive case-taking", "Mind-body & stress review", "Individualised remedies plan", "dosage recommendations", "Lifestyle & breathing routines", "Scheduled follow-up assessment", "timeline of symptoms… diagnostic reports"); the subtitle "Our 5-step consultation flow…"; "Feedback shared by patients…"; the "Session Breakdown" section framing.
- DUPLICATES: Before/During/After now appears once, as the source's three points.

## Personalised Treatment (Page 19, pp.141–142; brief p.22)
- IMPLEMENTED: hero; brief heading "Your health story is unique. Your care should be too." over the three steps (Understand your needs / Create your approach / Review as you progress); "Care that is personal to you" plus Listen/Consider/Adapt; 3 quotes; CTA "Your care should feel personal" with tiles (Explore your care options / Connect with Dr. Mohini → WhatsApp link / Book a consultation).
- The brief's explanation sentence is covered by the source paragraph "No two people experience health… broader context for your care."
- REMOVED: none were found beyond the old layout, which used the same approach. Any Phase 1 wording was replaced with the source text.

## Book a Consultation (Page 29, pp.156–157; brief pp.29–30 incl. Get in Touch)
- IMPLEMENTED: hero with the badge "Ready to take the next step?" (brief), title "Book a Consultation", and subtitle "Start with a conversation about your wellbeing". The three steps are Choose your time → #booking-form, Share your concerns → #consultation-experience, and Meet Dr. Mohini → consultation-process. The "Online Consultation" description is in the source. The Get in Touch items are the clinic name plus "Kopar Khairne, Navi Mumbai", phone, email and social links. The Privacy Policy "Please note: Avoid sharing sensitive health information…" appears next to the form. The page also has "What your consultation can cover" (3 areas), "A consultation centred around you" (Before/During/After) and a final CTA with 3 tiles (Book your consultation / Have a question → mailto / Explore the process).
- Booking form (`BookingForm.jsx`, still `'use client'`, same 4-step logic): the step labels now follow the brief (Choose Consultation → Select Date/Time → Share Details → Confirm Appointment). The health-area options are the 11 source areas. The online format text is the source sentence and the clinic option is the source address only. The Step 4 notice is now the Disclaimer's "Emergency situations" wording.
- REMOVED (invented): "clinic coordinator will contact you…" (appeared twice); "Simple 4-Step Booking"/"Select your preferred mode…"; "In-Person by Appointment"; "Private video & audio consultations… Flexible International Slots"; the "Preparing for Your Consultation" tips (lab tests, scans, "quiet private space"); the time-slot hours (10–1, 2–5, 5:30–8:30), which are now just Morning/Afternoon/Evening because hours were not supplied; "Other / Multiple Concerns" and the altered area names; the placeholder sample name, phone and email; step sub-texts; the "Important Notice…does not guarantee a particular health outcome"; the "Book Another Consultation" and "Appointment Request Received" copy; the "in-person consultation" claim from the metadata.
- NOT IMPLEMENTED: consultation hours and a Google Map, because the details are not supplied.

## Metadata
All five `page.jsx` descriptions were rewritten from the source hero lines, using the keywords "homeopathic doctor" and "homeopathy consultation" where they fit.

## Open questions for Dr. Mohini
1. What are the consultation hours, and what are the time-slot options for the form?
2. What is the full clinic street address, and should a Google Map embed be added?
3. Are in-person clinic consultations bookable through this form? The page source only describes an online consultation.
4. What happens after the form is submitted? There is no backend or email, and the confirmation screen only repeats the details back. Please confirm the confirmation wording and the process.
5. Is the WhatsApp number the same as the phone number (+91 942 397 2150)?
6. Where should the "Learn more / Discover more" links under the cards go? The current targets were chosen by us, not specified in the source.
