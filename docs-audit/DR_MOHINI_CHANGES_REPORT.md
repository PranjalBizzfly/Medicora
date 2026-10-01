# Dr. Mohini M. Changes — Implementation Report

Source: `Dr. Mohini M. Changes.pdf` (8 pages). Date: 1 October 2026. Not committed, not deployed.
34 pages, URLs and section structure unchanged. No `docs/` folder exists in the project.

## Completed

| PDF page | Instruction | Where | Change |
|---|---|---|---|
| 1 | Use same alignment | Home, "Ways to consult" strip | All three "Book a Consultation" links now sit on the same line (`home.css`). |
| 1 | Start with capital letters | Home, "Areas of interest" | Updated to "Areas of Interest: Anxiety, Stress-Related Concerns, Emotional Wellbeing and Psychosomatic Concerns" (`HomePage.jsx`). |
| 1 | (stats note) | Stats strip, all pages | ONGC note removed earlier (`StatsStrip.jsx`). |
| 1 | Make it same format | Home, service cards | All point chips now one per line in every card (`home.css`). |
| 2 | Remove this content | Home, "Our difference" | Subtitle "With 14+ years of clinical experience…" removed. |
| 2, 4 | Hover makes content blur | Site-wide | 3D tilt removed from all cards with text (it rendered text blurry); text cards now only lift on hover. Tilt kept only on text-free photos (`InteractiveEffects.jsx`). Verified: hovered card has a flat 2D transform. |
| 3, 4 | Use same alignment | Home, "Begin with a conversation" | Both card buttons now on the same line (`home.css`). |
| 4 | 1. Remove captions / 2. Use "Free Homeopathic Medical Camp, Navi Mumbai" | About Me, camp photos | Per-photo captions removed; one heading "Free Homeopathic Medical Camp, Navi Mumbai" placed above the photos. |
| 5 | Remove this | My Journey, banner card (14+ / 12,000+ / 3) | Removed. |
| 5 | Text justify, all over | Site-wide body paragraphs | Paragraphs justified; centred blocks keep a centred last line. Narrow card text left unjustified (justifying it left large word gaps). (`inner.css`) |
| 5 | Only one: number or icon | Consultation Process steps | Numbers 01–05 removed, icons kept (`ConsultationProcess.jsx`). |
| 6 | Remove this | Clinical Philosophy, "Health is more than a set of symptoms" box | Removed (photo above it kept). |
| 6 | Remove this | Clinical Philosophy, stats 14+ Years / 12,000+ / 3 Countries | Stat boxes removed; the section's heading and text kept. |
| 7 | Use image provided in folder | General Health & Wellness, Areas of Care card | Tried Dr. Mohini's photoshoot image; reverted to the previous image at client request. |
| 7 | Only one: number or icon | Expertise pages, approach cards (01/02/03 + icon) | Numbers removed, icons kept (all 10 expertise pages). |
| 7 | Remove extra spaces | CTA tiles (Message Me / Chat With Me / Book a Consultation) | Icon now sits beside the left-aligned title; gap removed (all three tile styles). |
| 8 | Use same text | Expertise care-area links | "Explore care" / "Learn more" → "Discover more" everywhere (30 links). |

## Unresolved — needs client input

- **Page 7, "Add names of patients"**: the testimonial cards show "Patient Experience". No patient names exist in the source documents, so none were added (names must not be invented). Please supply approved names (or initials) and consent.
- **Page 7, image**: only the General Health card was changed as marked. Other expertise pages still use stock images showing a different doctor; please confirm whether those should also use Dr. Mohini's photos (there are 8 photoshoot images for 10 pages, so some would repeat).

## Checks

- Production build passes; lint shows no new issues (existing `BookingForm.jsx` warnings unchanged); project is JavaScript, so no separate type-check.
- Responsive audit: 33 linked pages + home at 375 / 768 / 1440px — no horizontal scroll, overlap or cut-off text.
- Feature tests 18/18 pass. Each corrected section was checked by screenshot.
