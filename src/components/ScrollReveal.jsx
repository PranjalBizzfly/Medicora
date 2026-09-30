'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Elements that reveal on scroll across all pages. Hero content is excluded:
// it has its own CSS entrance so it is never hidden waiting for JavaScript.
const SELECTOR = [
  '[data-reveal]',
  '.site-main .section-header',
  '.site-main .card',
  '.site-main .stat-box',
  '.site-main .faq-item',
  '.site-main .cta-panel',
  '.site-main figure',
  '.site-main .quick-info-col',
  '.site-main .medical-disclaimer-box',
].join(',');

const EXCLUDE = '.page-hero, .home-hero, .header-wrapper, .mobile-drawer';
const STAGGER_MS = 70;
const MAX_STAGGER = 5;

/**
 * Adds a consistent reveal-on-scroll to page content.
 * Progressive enhancement: content is fully visible until this runs, and
 * nothing animates when the visitor prefers reduced motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const root = document.documentElement;
    const elements = [...document.querySelectorAll(SELECTOR)].filter(
      (el) => !el.closest(EXCLUDE) && !el.classList.contains('is-revealed')
    );

    elements.forEach((el) => {
      // Stagger siblings that share a parent (card grids, lists).
      const siblings = el.parentElement
        ? [...el.parentElement.children].filter((c) => elements.includes(c))
        : [];
      const index = Math.min(Math.max(siblings.indexOf(el), 0), MAX_STAGGER);
      el.style.setProperty('--reveal-delay', `${index * STAGGER_MS}ms`);
      el.setAttribute('data-reveal', el.getAttribute('data-reveal') || '');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-revealed');
            observer.unobserve(el);
            // Drop the stagger once revealed so hover effects respond instantly.
            window.setTimeout(() => el.style.removeProperty('--reveal-delay'), 1400);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    root.classList.add('motion-ready');

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
