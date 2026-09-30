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
  '.site-main .page-intro-inner > *',
  '.site-main [class^="tv-"][class$="-card"]',
  '.site-main .tv-card',
  '.site-main .tv-glass-card',
  '.site-main .tv-photo-card',
  '.site-main .tv-split > *',
  '.site-main .tv-founder-grid > *',
  '.site-main .tv-text-block',
  '.site-main .home-about > *',
  '.site-main .home-service-card',
  '.site-main .home-glass-card',
  '.site-main .home-people-card',
  '.site-main .home-blog-card',
  '.site-main .home-contact-card',
  '.site-main .home-step',
  '.site-main .home-checklist li',
  '.site-main .home-highlights li',
  '.site-main .home-quote',
  '.site-main .home-final-cta',
  '.site-main .lg-doc-section',
].join(',');

// Two-column layouts slide in from their own side; photos zoom in.
const LEFT = '.tv-split > :first-child, .tv-founder-grid > :first-child, .home-about > :first-child';
const RIGHT = '.tv-split > :last-child, .tv-founder-grid > :last-child, .home-about > :last-child';
const ZOOM = '.tv-photo, .tv-photo-card, .home-people-card, .home-blog-card, .home-final-cta';

// Counts figures such as "12,000+" or "14+ Yrs" up from zero once visible.
function countUp(el) {
  const text = el.textContent;
  const match = text.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return;
  const [, before, digits, after] = match;
  const target = Number(digits.replace(/,/g, ''));
  if (!target || target > 100000) return;
  const useCommas = digits.includes(',');
  const start = performance.now();
  const duration = 1400;
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const value = Math.round(target * (1 - Math.pow(1 - t, 3)));
    el.textContent = before + (useCommas ? value.toLocaleString('en-IN') : value) + after;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = text;
  };
  requestAnimationFrame(tick);
}

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
      let variant = el.getAttribute('data-reveal') || '';
      if (!variant && el.matches(LEFT)) variant = 'left';
      else if (!variant && el.matches(RIGHT)) variant = 'right';
      else if (!variant && el.matches(ZOOM)) variant = 'zoom';
      el.setAttribute('data-reveal', variant);
    });

    const counters = [...document.querySelectorAll('.site-main .stat-number, .site-main .home-about-stat strong')];
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterObserver.observe(el));

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

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
