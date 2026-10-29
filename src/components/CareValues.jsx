'use client';

import React, { useEffect, useRef, useState } from 'react';

/*
 * C.A.R.E. values (About Me). Wording is exact from
 * "Dr. Mohini Mission, vision values.pdf" — pass it in, do not edit it here.
 * Hover / focus a card to highlight its letter and tagline phrase; when idle,
 * the highlight moves through the four values (off for reduced motion).
 */
export default function CareValues({ values, taglineLead, phrases }) {
  const [active, setActive] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  // Only cycle while the section is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (interacting || !visible) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % values.length), 3200);
    return () => window.clearTimeout(id);
  }, [active, interacting, visible, values.length]);

  // Soft light that follows the pointer inside a card.
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const pick = (i) => { setActive(i); setInteracting(true); };
  const release = () => setInteracting(false);

  return (
    <div className="care-interactive" ref={rootRef}>
      <p className="care-word-mark" aria-hidden="true">
        {values.map((v, i) => (
          <React.Fragment key={v.letter}>
            {i > 0 && <span className="care-dot">.</span>}
            <span className={`care-mark-letter ${i === active ? 'is-active' : ''}`}>{v.letter}</span>
          </React.Fragment>
        ))}
        <span className="care-dot">.</span>
      </p>

      <p className="care-tagline">
        {taglineLead}{' '}
        {phrases.map((ph, i) => (
          <React.Fragment key={ph}>
            <span className={`care-phrase ${i === active ? 'is-active' : ''}`}>{ph}</span>
            {i < phrases.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))}
      </p>

      <ul className="care-grid" onMouseLeave={release}>
        {values.map((v, i) => (
          <li
            key={v.letter}
            className={`care-card ${i === active ? 'is-active' : ''}`}
            tabIndex={0}
            onMouseEnter={() => pick(i)}
            onMouseMove={onMove}
            onFocus={() => pick(i)}
            onBlur={release}
          >
            <span className="care-letter" aria-hidden="true">{v.letter}</span>
            <h3 className="care-word"><span className="bk-sr">{v.letter} — </span>{v.word}</h3>
            <p className="care-text">{v.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
