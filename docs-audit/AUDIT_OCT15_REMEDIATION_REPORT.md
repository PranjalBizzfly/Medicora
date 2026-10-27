# Remediation Report: Website Audit Report (15 October 2026)

Date: 27 October 2026. Source: *Dr_Mohini_Mutha_Website_Audit_Report_Oct.docx.pdf* (Meghana Muppalla). Not committed, not deployed.
34 existing routes unchanged; one route added (`/contact`, AUD-18, client-approved 27 Oct). No content was invented: every new line of copy is reused verbatim from the Content PDF or from existing approved site copy, and noted in the code.

## 1. Completed and tested

| ID | Area | Root cause | Fix | Tested |
|---|---|---|---|---|
| AUD-01 | Header "Book a Consultation" clipped | Full menu + search + theme + button needs ~1280px; the drawer only took over below 1100px | Menu drawer below 1280px; tighter menu spacing 1280–1440px (`responsive.css`) | Scan of header at every 20px from 320 to 1400 and every 100px to 1920: button never leaves the screen (previously clipped at 1120–1260 and 1380–1400) |
| AUD-02 | Hero slides inconsistent | Slide 1 had no description, slide 2 no eyebrow, slide 3 no description | All three now: eyebrow, heading, description, two CTAs. Added text is reused: slide 1 description = About Me hero (Content PDF p.13); slide 2 eyebrow = "Online Anxiety Care" (Home services); slide 3 description = Integrated Healing hero | Screenshots |
| AUD-03 | Hero feature row wraps | Free-flowing wrap | Deliberate grid: 5 in a row on desktop, 3 / 2 / 1 per row as screens narrow | 1440 and 390px screenshots |
| AUD-04, 05 | "A Word About Dr. Mutha" misaligned / unbalanced | Columns vertically centred; tall single-column credentials list | Columns top-aligned; credentials in two columns | 1440 and 390px screenshots |
| AUD-07 | About Me "Who I Am" | Quote and card stacked under the portrait | Quote moved to the right column above the BHMS panel (as recommended) | Screenshots |
| AUD-08 | "More Than Qualifications" heading on 3 lines | Narrow heading measure | Wider measure: two lines on desktop, normal wrap on mobile | Screenshots |
| AUD-10 | Clinical Philosophy terms lack context | Three bare words | Three equal cards, each with one line verbatim from the Content PDF | 1440 and 390px screenshots |
| AUD-11 | General Health "Concerns" spacing | Auto-fill grid left uneven gaps | Evenly spaced pills (all 10 expertise pages) | Screenshots |
| AUD-12 | FAQ text invisible when opened | **Root cause:** the scroll-in animation marked items with a class; clicking an FAQ made React redraw the class list, wiping that mark, so the item went back to opacity 0 | Reveal state now stored in a `data-revealed` attribute React never touches (fixes the same risk site-wide); FAQ list animates as one block | With animations on, light and dark: items stay at opacity 1 in closed / hover / open / focus; contrast ≥ 12.6:1 (question) and ≥ 6.7:1 (answer) |
| AUD-13 | Joint/Muscle: two CTAs open the same pop-up | Both linked to /book-a-consultation, intercepted by the booking pop-up | "View Consultation Options" now opens the full Book a Consultation page (options, process); the "Book a Consultation" tile opens the booking form | Click-tested |
| AUD-14 | No WhatsApp shortcut | — | Fixed bottom-right button, part of the scroll-button stack (cannot overlap them), accessible label, opens wa.me/919423972150 — the same number already used by the site's "Chat with me" links and listed in the Content PDF footer. On phones the scroll-to-bottom button is hidden to reduce floating controls | Screenshots desktop and mobile |
| AUD-15 | "See also" left-aligned | Inherited left/justified text | Centred under the centred chips | Screenshot |
| AUD-16 | CTA icon placement inconsistent | Three tile components with different layouts | One layout for all closing CTA tiles: icon left, title and text beside it | Screenshots on Expertise, Why Homeopathy, Case Studies, desktop and mobile |
| AUD-20 | Footer "Read the full Disclaimer" hover invisible | Global link hover colour (maroon) on the maroon footer | Light powder-blue hover/focus colour plus visible focus outline | Code + contrast |
| AUD-21 | Case-study 5 steps misaligned | Justified text in narrow cards; titles of different heights | Steps share rows (number / title / text), left-aligned text, 5 → 2 → 1 columns | 1440 and 390px screenshots |
| AUD-09 | "Message Me" | Tiles opened the visitor's email app | New on-site form (name, email, optional phone, message, privacy consent) at `/contact#message`, posting to `/api/contact` with server-side validation. All "Message Me" tiles (My Approach, Expertise, Resources, Credentials pages) and the footer "Contact" link now go there. Uses the same delivery as bookings, so on Vercel it shows "Your message wasn't sent" until delivery credentials are added (see AUD-22) | Local: empty submit shows 4 field errors and focuses the first; valid message shows "Thank you, your message has been sent"; simulated failure shows the error and no success; desktop and phone screenshots |
| AUD-18 | Contact page | — | New page `/contact`: phone, WhatsApp, email, location, clinic (all from the Content PDF footer / siteConfig), emergency notice (verbatim from the Disclaimer), message form. Added to the XML sitemap, Explore panel, on-site Sitemap (its existing "Contact" entry now points here) and search index. AGENTS.md route count updated to 35 | Routes 35, 0 broken links; SEO check 35 pages, 0 problems; feature tests 18/18 (Explore now expects 35) |
| §6 | Cookie Policy content visibility | — | Rechecked: 9 sections, 416 words, all visible in light and dark | Automated check |

## 2. SEO and performance

| Check | Result |
|---|---|
| Titles, meta descriptions | All 34 pages have unique titles and descriptions |
| H1 / heading order | One H1 per page. 21 pages jumped H1 → H3 (card grids after the intro): the intro label is now an H2 (same pill look). Result: 0 heading-order issues |
| Canonical URLs | All 34 point to the production domain `https://drmohinimutha.com/...` — not the staging URL |
| robots.txt | **Added** (`/robots.txt`). Staging: `Disallow: /`. Production: allows crawling and lists the sitemap, once `SITE_INDEXABLE=true` is set |
| Robots meta | **Added** `noindex, nofollow` on staging builds, removed automatically when `SITE_INDEXABLE=true` |
| XML sitemap | **Added** `/sitemap.xml` with the 34 canonical production URLs |
| Image alt text / formats | All images WebP with alt text (prior audit `FINAL_CONTENT_AND_ALT_TEXT_AUDIT.md`); rechecked: 0 images without alt |
| Internal links | 34 routes, 0 broken links |
| Structured data | Not added — no approved schema content supplied (do not invent review/medical markup) |

**Mobile Lighthouse (local production build, same machine, simulated slow 4G):**

| | Before | After (median of 3) |
|---|---|---|
| Performance | 77 | 81 |
| LCP | 5.9 s | 5.0 s |
| Speed Index | 2.4 s | 2.1 s |
| TBT | 120 ms | 50 ms |
| CLS | 0 | 0 |

Changes: slides 2–3 of the hero no longer download with slide 1 (they were competing for bandwidth); slide 1 served at quality 60 (it sits under a dark overlay); no zoom transition on slide 1. A real (unthrottled) trace paints the hero photo at 0.25 s. The remaining simulated delay is Lighthouse's model of render-blocking CSS; inlining CSS was tried and gave no gain, so it was reverted. The audit's figures (80 / 4.7 s) were from PageSpeed on the live staging site; re-run PageSpeed after deployment for a like-for-like comparison.

## 3. Requires client approval or credentials (not done — nothing invented)

| ID | Item | What is needed |
|---|---|---|
| AUD-22 / §6 | **Booking and Invite Me forms fail on the live site** | Root cause confirmed: Vercel has no delivery configured (no `RESEND_API_KEY` / `BOOKING_EMAIL_FROM` / `BOOKING_EMAIL_TO`, no `BOOKING_WEBHOOK_URL`), and Vercel cannot store files, so nothing accepts the request and the form correctly shows "Your Booking Wasn't Sent". Need: the recipient email and either a Resend API key + verified sender, or a webhook URL (e.g. Google Sheets/Zapier). Add them in Vercel → Settings → Environment Variables; no code change needed. |
| AUD-06 / AUD-18 | Full clinic address (Book a Consultation, Contact page) | The approved full address of Dr. Mutha's Homeopathic Clinic, Kopar Khairne. Only "Kopar Khairne, Navi Mumbai" exists in the documents. |
| AUD-19 | Helpline numbers | Decision whether to include; if yes, the verified official numbers per location. The site already states it is not for emergencies (booking form, Disclaimer). |
| AUD-17 | Real case study | An approved, consented, anonymised case. The page already states case studies will be shared with consent; no illustrative case was invented. |
| Launch | Production SEO | On the production deployment set `SITE_INDEXABLE=true`; point drmohinimutha.com to this deployment (it currently serves a different site); then verify HTTPS/redirects, submit the sitemap in Google Search Console. |

## 4. Verification run (27 October 2026)

- Production build: pass. Lint: 0 errors (remaining warnings are pre-existing in `BookingForm.jsx` / `BookingModal.jsx`).
- Routes and links (`verify-site.cjs`): 34 routes, 0 broken.
- Feature tests (`qa-phase6.cjs`): 18/18 pass. Visual QA: 68 page-views, 0 issues. Motion QA: all pages pass.
- Responsive audit: 34 pages × 10 widths (320–1920) with animations on: no horizontal overflow, overlap or cut-off text. Remaining notes: hero slider dots (24px tall) and booking calendar days at 320–360px (29–34px wide) are below a 36px target but above the WCAG 24px minimum.
- Forms (local): empty booking and Invite submissions rejected with field errors; a valid booking shows "Thank you"; a failed delivery shows "Your Booking Wasn't Sent" — no false success. Test record removed.
- Search index regenerated (34 pages, 447 headings).

Test scripts: `qa-screens/aud/` (header scan, FAQ contrast, section screenshots, SEO, forms, cookie, LCP trace).

## 5. Update (27 October 2026): front-end form delivery

At the client's request, all server and webhook delivery was removed (`src/app/api/book`, `api/speaking`, `api/contact`, `src/lib/deliver.js`, the `postJSON` helper). The booking, Invite Me and Contact forms now validate in the browser and open **WhatsApp (+91 942 397 2150) with the details filled in**; the visitor presses Send there. The confirmation screen says "One last step: send your request" with "Open WhatsApp" and "Send by email" (pre-filled email to drmohini@drmohinimutha.com) — it never claims the request was received.

Consequences: AUD-22 no longer needs credentials; nothing reaches the clinic unless the visitor sends the WhatsApp/email message. Booked time slots are no longer checked against other bookings (the clinic confirms the time when replying).

Tested: empty forms show field errors; valid booking, invitation and message each open WhatsApp with name, details and (booking) date/time; email fallback link is pre-filled; no server requests are made. Routes 35, 0 broken links; feature tests 18/18; visual QA 70 page-views, 0 issues; lint 0 errors; build passes.
