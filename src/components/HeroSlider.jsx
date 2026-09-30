'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const INTERVAL_MS = 7000;

/**
 * Full-width photo hero slider (source: "Page 1 – HOME", Section 1 – sliding banner, 2 slides).
 * - Auto-advances, pauses on hover / keyboard focus, and never auto-advances
 *   when the user prefers reduced motion.
 * - Arrows and dots are real buttons with aria-labels; inactive slides are hidden from AT.
 */
export default function HeroSlider({ slides }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef(null);
  const count = slides.length;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = () => setActive((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return undefined;
    const id = window.setTimeout(next, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, count, next]);

  const handleBlur = (event) => {
    if (!rootRef.current?.contains(event.relatedTarget)) setPaused(false);
  };

  return (
    <div
      ref={rootRef}
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
    >
      {slides.map((slide, idx) => {
        const isActive = idx === active;
        const Heading = idx === 0 ? 'h1' : 'h2';
        return (
          <div
            key={slide.title}
            className={`hero-slide ${isActive ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${count}`}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
          >
            <Image
              src={slide.image}
              alt={slide.alt || ''}
              fill
              priority={idx === 0}
              quality={85}
              sizes="100vw"
              className="hero-slide-img"
              style={{ objectFit: 'cover', objectPosition: slide.position || 'center' }}
            />
            <div className="hero-slide-overlay" aria-hidden="true" />
            <div className="container hero-slide-content">
              {slide.eyebrow && <span className="hero-pill">{slide.eyebrow}</span>}
              <Heading className="home-hero-title">{slide.title}</Heading>
              {slide.subtitle && <p className="home-hero-subtitle">{slide.subtitle}</p>}
              <div className="hero-actions">
                <Link href="/book-a-consultation" className="btn btn-primary btn-lg hero-btn-primary">
                  <Calendar size={18} aria-hidden="true" />
                  <span>Book a Consultation</span>
                </Link>
                {slide.secondary && (
                  <Link href={slide.secondary.href} className="btn btn-lg hero-btn-outline">
                    <span>{slide.secondary.label}</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {count > 1 && (
        <>
          <button type="button" className="hero-arrow hero-arrow-prev" aria-label="Previous slide" onClick={prev}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" className="hero-arrow hero-arrow-next" aria-label="Next slide" onClick={next}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
          <div className="hero-slider-dots">
            {slides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                className={`hero-slider-dot ${idx === active ? 'is-active' : ''}`}
                aria-label={`Show slide ${idx + 1} of ${count}`}
                aria-current={idx === active ? 'true' : undefined}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
