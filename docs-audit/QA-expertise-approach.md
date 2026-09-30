# QA — expertise-approach

Reviewed: Mental, Women's, Joint, Headache and General Health at desktop 1440 and mobile 375. The other expertise pages share ExpertiseTemplate. My-approach pages reviewed: why-homeopathy, integrated-healing, consultation-process and personalised-treatment, at both widths.

| Page | Issue | Fix | File |
|---|---|---|---|
| All 4 approach subpages (and anything else that uses ActionTiles) | The final CTA tiles were styled white-on-translucent for a maroon panel. The panel is now powder blue, so the tile text and icons were almost invisible. | Restyled `.ap-tile` as white cards with maroon icon circles, muted body text, a maroon border and shadow on hover and focus, a focus-visible outline and an arrow nudge. Widened `.ap-cta .cta-panel-content` to 880px. | src/styles/approach.css |
| All 10 expertise pages | The "Consultation process" link card was laid out as a column with the icon and arrow centred. `.card-link` in index.css forces `flex-direction: column; height: 100%`. | Set `.expertise-process-link` to `flex-direction: row; height: auto; text-align: left`. | src/styles/expertise.css |
| All 10 expertise pages | On desktop the CTA tiles were squeezed by `.cta-panel-content` (760px), so "Book a consultation" wrapped onto 2 lines. | Added the `expertise-cta-content` class (max-width 880px). Tiles now get a hover shadow and a focus-visible outline. | ExpertiseTemplate.jsx, expertise.css |
| All 10 expertise pages | The "Related care & resources" heading sat about 6px above its links. | Changed its margin-bottom from 0.4rem to 1rem. | src/styles/expertise.css |
| integrated-healing (mobile) | The stacked "equation" chips had different widths, and "Psychological counselling perspective" wrapped inside a pill with the + pushed far left. | At ≤640px the chips stretch to full width, centred, with `--radius-lg`. | src/styles/approach.css |

Checked and OK: hero readability, breadcrumbs, the variant sections (the Mental emergency note and the Headache testimonials), no horizontal scroll (scrollWidth 1440), and the FAQ accordion opening and closing with Enter and Space (aria-expanded toggles).

## Shared-component issues (coordinator)
1. **FAQAccordion**: no visible focus ring on `.faq-question` during keyboard navigation. Fix in components.css: `.faq-question:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; border-radius: var(--radius-md); }`
2. **ConsultationProcess** (the step cards on consultation-process): step descriptions show in bold maroon, unlike the muted body text on every other card. Suggest setting the step description selector to `color: var(--text-muted); font-weight: 400;`.
