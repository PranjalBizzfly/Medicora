'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

/** Reading progress line and scroll to top / bottom buttons. */
export default function ScrollButtons() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setAtTop(window.scrollY < 200);
      setAtBottom(window.scrollY > max - 200);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollTo = (top) => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ '--progress': progress }} aria-hidden="true" />
      <div className="scroll-buttons">
        <button
          type="button"
          className={`scroll-btn ${atTop ? 'is-hidden' : ''}`}
          aria-label="Scroll to top"
          title="Scroll to top"
          tabIndex={atTop ? -1 : 0}
          onClick={() => scrollTo(0)}
        >
          <ChevronUp size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`scroll-btn ${atBottom ? 'is-hidden' : ''}`}
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
          tabIndex={atBottom ? -1 : 0}
          onClick={() => scrollTo(document.documentElement.scrollHeight)}
        >
          <ChevronDown size={20} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
