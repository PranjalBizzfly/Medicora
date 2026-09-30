# QA — credentials-booking

Routes: /credentials/professional-experience, /credentials/education-qualifications, /credentials/achievements, /book-a-consultation (1440 + 375).
Interaction script: `scripts/qa-credentials-booking.cjs` (injects local credentials.css + approach.css so the CSS changes can be previewed before a rebuild). Screens: `qa-screens/credentials-booking/`.

| Page | Issue | Fix | File |
|---|---|---|---|
| Achievements | Camp gallery was about 1000px tall on desktop. The portrait photo's natural height drove the row heights, so the landscape photos were stretched to about 780x440 each. | Capped the gallery at `max-width:1040px`, centred it and set landscape images to `aspect-ratio:16/10; object-fit:cover`. The portrait image now uses `contain:size; flex:1 1 auto` so it fills the height of the two stacked photos instead of setting it (`object-position:center 65%`). | src/styles/credentials.css |
| Achievements (mobile) | The portrait photo was about 580px tall at 375px wide. | Set `aspect-ratio:4/5` at ≤760px. Captions also get `line-height:1.5`. | src/styles/credentials.css |
| Booking step 1 | The option tiles vertically centred their content (default button layout), so the two tiles' titles sat at different heights. Selected and focused tiles looked the same. | `.cr-option` now uses a top-aligned flex column. Added a radio indicator (`.cr-option::after`, filled when `.is-selected`). | src/styles/credentials.css |
| Booking step 1 | Icons were read out by screen readers. | Added `aria-hidden` to the icons and stepper dots. | src/components/BookingForm.jsx |
| Booking step 2 | Past dates could be picked. On iOS an empty date input collapses. | `min` is set to today (computed on the client; step 2 is never server-rendered). Date inputs and selects get `min-height:3rem`, `appearance:none` and left-aligned values. | BookingForm.jsx, credentials.css |
| Booking step 3 | "Next" was silently disabled while required fields were empty: no message, and keyboard users couldn't find out why. There was no email or phone format check: `not-an-email` went through to step 4 (confirmed in the live build). | Next is always enabled. Clicking it validates name, phone (at least 7 digits) and email (format), shows an error under each problem field (`.cr-field-error`, `aria-invalid`, `aria-describedby`) and moves focus to the first invalid field. Errors clear as the user types. The `*` is now `aria-hidden` and `aria-required` is set. Added `inputMode` and autocomplete on Country/City. | BookingForm.jsx, credentials.css (`.cr-input.is-invalid`, `.cr-field-error`) |
| Booking, all steps | Focus stayed on a button that had disappeared after each step change. | Focus moves to the new step's `h3` (`tabIndex=-1`, no outline), and also on the success screen. | BookingForm.jsx |
| Booking step 4 | An empty Location showed a blank value. | Shows "Not specified", the wording already used elsewhere in the form. | BookingForm.jsx |
| Booking success | The date showed as raw ISO (`2026-10-15`). "Back to form" kept the old data. | Date is formatted as `15 Oct 2026`. "Back to form" now fully resets data, errors and format. Pressing Enter in a field before step 4 no longer submits (`step !== 4` guard, `noValidate`). | BookingForm.jsx |
| Professional Experience | No issues. Hero, stat cards, testimonials, timeline and CTA are fine at both sizes. | — | — |
| Education & Qualifications | No issues. Card footers are bottom-aligned on purpose, and the registration panel is fine. | — | — |
| Book a Consultation (page shell) | No issues. The aside cards, note and "What your consultation can cover" are fine. No horizontal scroll (scrollWidth 1440 and 375). | — | — |

Verified: all inputs have associated labels (`htmlFor`/`id`), focus rings are visible on the tiles and inputs, and oxlint is clean.

Shared components: no bugs found in coordinator-owned files for these routes.
