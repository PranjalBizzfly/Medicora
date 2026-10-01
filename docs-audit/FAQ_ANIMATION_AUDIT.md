# FAQ Accordion Animation Audit

Date: 1 October 2026. No video was attached to the request; the behaviour was reproduced in a browser with a frame-by-frame trace (`qa-screens/ref/faqanim.cjs`).

## Bug found

Switching from one question to another:
- The open answer was **removed from the page instantly** (first frame) — no closing animation.
- The new answer **took its full height immediately but at opacity 0**, leaving a blank gap for ~100 ms before fading in.
- Content below the FAQ **jumped twice**.

Trace before the fix (height/opacity of answers 1–3 after clicking question 2):

```
12ms   unmounted  73px/0.00  unmounted
61ms   unmounted  73px/0.57  unmounted
111ms  unmounted  73px/0.85  unmounted
```

## Root cause

`src/components/FAQAccordion.jsx` rendered the answer only while open (`{isOpen && …}`), so a closing answer was unmounted with nothing to animate, and the opening one appeared at full height. A separate keyframe fade (`motion.css`, `.faq-item.is-open [class*='answer']`) also ran on top of the component's own `fadeIn`, so two animations competed.

## Fix

- Answers stay mounted; closed ones are hidden from assistive tech and keyboard focus (`aria-hidden`, `inert`) and have `role="region"` linked to their button.
- Height animates with a grid-rows transition (`0fr → 1fr`, 320 ms) plus opacity (240 ms) on a new `.faq-panel` wrapper (`components.css`). Opening and closing are both smooth and the content below moves gradually.
- The duplicate keyframe rules were removed from `motion.css`.
- Reduced motion: the site-wide reduced-motion rule shortens transitions to near-instant.
- Design, content, one-open-at-a-time behaviour and the default open first question are unchanged.

Trace after the fix:

```
1ms    73px/1.00  0px/0.00   0px/0.00
51ms   31px/0.69  41px/0.31  0px/0.00
101ms  11px/0.29  61px/0.71  0px/0.00
251ms  0px/0.00   72px/1.00  0px/0.00
```

## Coverage

`FAQAccordion` is the only FAQ implementation; it is used on the FAQs page and on every Expertise page, so the fix applies to all FAQ sections.

## Verification

- `qa-screens/ref/faqcheck.cjs`: every FAQ on the FAQs page and two Expertise pages, at 1440 / 768 / 390px and with reduced motion: each answer fully visible when open, only one open at a time, collapses fully, closed panels hidden from assistive tech — all OK.
- Responsive audit (all pages, 10 widths), page check (68 views, 0 issues), feature tests 18/18, lint (no new warnings), production build: pass.
