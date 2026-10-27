'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919423972150';

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
        {/* AUD-14: same number as the site's existing "Chat with me" links. */}
        <a
          href={WHATSAPP_URL}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dr. Mohini on WhatsApp (opens in a new tab)"
          title="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.45A11.33 11.33 0 0 0 12.05.73C5.8.73.72 5.8.72 12.06c0 2 .52 3.95 1.52 5.67L.63 23.27l5.69-1.49a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.33-5.08 11.34-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
          </svg>
        </a>
      </div>
    </>
  );
}
