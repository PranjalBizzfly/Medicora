'use client';

import { useEffect } from 'react';

// Official page names that contain lowercase words. titlecase.css capitalises every
// word of UI text, which would show "Book A Consultation" / "Myths Vs Facts"; text
// that is exactly one of these names is marked so it renders as written.
// (All other official page names are already in Title Case, so they need nothing.)
const NAMES = new Set(['Book a Consultation', 'Myths vs Facts']);
const ATTR = 'data-keep-case';

function mark(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const el = node.parentElement;
    if (!el || el.hasAttribute(ATTR) || !NAMES.has(node.textContent.trim())) continue;
    // Labels deliberately styled in capitals (badges, eyebrows) keep their style.
    if (getComputedStyle(el).textTransform === 'uppercase') continue;
    el.setAttribute(ATTR, '');
  }
}

export default function PageNameCase() {
  useEffect(() => {
    mark(document.body);
    // Menus, the booking popup and search results render later.
    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; mark(document.body); });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
