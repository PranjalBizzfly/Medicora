# Repeated Issues Audit

Date: 1 October 2026. Not committed, not deployed. 34 pages, URLs and section structure unchanged.
References: `Dr. Mohini M. Changes.pdf`, `docs-audit/DR_MOHINI_CHANGES_REPORT.md`. (No `docs/` folder exists.)

## Method

`qa-screens/ref/repeat-audit.cjs` loads every page and checks each issue type from the PDF automatically:
misaligned card actions, inconsistent link wording in a card row, number + icon in the same card, repeated identical captions, mixed list formats in sibling cards, lowercase text after a bold label, 3D transforms on text, icon-to-text gaps in tiles, and wide multi-line paragraphs that are not justified.
Run at 1440px (desktop), 768px (tablet) and 390px (mobile). Final result: **no issues at any width** (except the open patient-name item below).

## Issues, root causes and fixes

| Issue | Root cause | Affected locations | Fix |
|---|---|---|---|
| Number + icon in one card | Shared card templates rendered a `0N` label beside the icon | Why Homeopathy, Integrated Healing, Consultation Process, Personalised Treatment (shared `ApproachTemplate`); Book a Consultation (2 card groups); Professional Experience; plus earlier: Consultation Process steps, all 10 Expertise approach cards | Number labels removed from the templates; icons kept. Cards with numbers only (no icon) were left as they are. |
| Card actions not aligned | Cards in `.grid-2/3/4` did not push their closing link to the bottom | Blogs, Patient Stories, Invite Me to Speak, and any card grid site-wide | One shared rule in `inner.css`: grid cards are flex columns and the last link/button gets `margin-top: auto`. |
| Different link wording in the same row | Per-card copy (`Learn more`, `Explore your care`, `Connect with Dr. Mohini`, `Read the story`, `Book your slot`, …) | Why Homeopathy, Consultation Process, Achievements, Education & Qualifications, Patient Stories, Book a Consultation, all Expertise care areas | All card links use **"Discover more"** (24 card links + 30 expertise links). Buttons with distinct actions (e.g. "Book a Consultation") are unchanged. |
| Unjustified paragraphs | Justify rule excluded anything inside a "grid" container, which also caught wide prose | Home contact cards, About Me founder text, certificate note, case-study placeholders | Wide prose in those containers re-included; narrow card text still unjustified (avoids word gaps). Audit: 0 wide multi-line paragraphs unjustified. |
| Hover blur | 3D tilt on text cards | Site-wide (fixed in the previous round at the root, `InteractiveEffects.jsx`) | Re-verified: no 3D transform on any element with text, on any page. |
| Lowercase after a bold label | Content text | Home "Areas of interest" (fixed earlier) | Re-verified: no other occurrences. |
| Icon far from tile title | Tiles inherited centred text in CTA panels | All three CTA tile styles (fixed earlier) | Re-verified: no gaps on any page. |
| Mixed chip formats / repeated photo captions | Layout / content | Home services, About camp photos (fixed earlier) | Re-verified: none remaining. |

## Remaining (needs client input)

- **Patient names**: testimonial cards on Headache & Migraine Care, Why Homeopathy and Professional Experience show "Patient experience", and Invite Me to Speak shows "Event feedback", 3 times each. No names exist in the source documents and names must not be invented. Please supply approved names/initials with consent.

## Checks

- Repeated-issue audit: clean at 1440 / 768 / 390px.
- Responsive audit (375 / 768 / 1440px, all pages): no horizontal scroll, overlap or cut-off text.
- Feature tests: 18/18. Lint: no new warnings (existing `BookingForm.jsx` warnings unchanged). Type-check: JavaScript project, nothing separate to run. Production build: passes.
- Screenshots reviewed for Why Homeopathy, Professional Experience, Book a Consultation, Blogs and Achievements card groups.
