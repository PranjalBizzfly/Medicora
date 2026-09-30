'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, LayoutGrid } from 'lucide-react';
import searchIndex from '../data/searchIndex.json';
import ExplorePages from './ExplorePages';

const MAX_RESULTS = 8;

// Quick links shown before typing (existing pages only).
const START_HERE = [
  { title: 'Home', path: '/' },
  { title: 'About Me', path: '/about-me' },
  { title: 'Mental, Emotional & Psychosomatic Wellness', path: '/expertise/mental-emotional-psychosomatic-wellness' },
  { title: 'Consultation Process', path: '/my-approach/consultation-process' },
  { title: 'Book a Consultation', path: '/book-a-consultation' },
];

function score(page, terms) {
  const title = page.title.toLowerCase();
  const description = page.description.toLowerCase();
  const headings = page.headings.join(' ').toLowerCase();
  let total = 0;
  for (const term of terms) {
    const inTitle = title.includes(term);
    const inDescription = description.includes(term);
    const inHeadings = headings.includes(term);
    if (!inTitle && !inDescription && !inHeadings) return 0; // every word must match
    total += (inTitle ? 6 : 0) + (inHeadings ? 3 : 0) + (inDescription ? 2 : 0);
  }
  return total;
}

const matchingHeading = (page, terms) =>
  page.headings.find((h) => terms.every((t) => h.toLowerCase().includes(t)));

/** Header search button that opens a centred search dialog. */
export default function SiteSearch({ onNavigate }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [exploreOpen, setExploreOpen] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const listId = useId();

  const terms = useMemo(
    () => query.toLowerCase().split(/\s+/).map((t) => t.trim()).filter((t) => t.length > 1),
    [query]
  );

  const items = useMemo(() => {
    if (!terms.length) return START_HERE.map((p) => ({ ...p, text: '' }));
    return searchIndex
      .map((page) => ({ page, s: score(page, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, MAX_RESULTS)
      .map(({ page }) => ({ title: page.title, path: page.path, group: page.group, text: matchingHeading(page, terms) || page.description }));
  }, [terms]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = (restoreFocus = true) => {
    setOpen(false);
    setQuery('');
    setActive(0);
    if (restoreFocus) buttonRef.current?.focus();
  };

  const go = (path) => {
    close(false);
    onNavigate?.();
    router.push(path);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && items[active]) {
      e.preventDefault();
      go(items[active].path);
    }
  };

  const openExplore = () => {
    close(false);
    setExploreOpen(true);
  };

  return (
    <div className="site-search">
      <button
        ref={buttonRef}
        type="button"
        className="header-icon-btn"
        aria-label="Search the website"
        title="Search"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Search size={18} aria-hidden="true" />
      </button>

      {open && (
        <div className="search-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Search the website" onKeyDown={onKeyDown}>
            <div className="search-field">
              <Search size={18} aria-hidden="true" className="search-field-icon" />
              <input
                ref={inputRef}
                type="search"
                role="combobox"
                aria-label="Search the website"
                aria-expanded="true"
                aria-controls={listId}
                aria-activedescendant={items[active] ? `${listId}-${active}` : undefined}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="Search care areas, approach, resources…"
                autoComplete="off"
              />
              <button type="button" className="search-esc" onClick={() => close()} aria-label="Close search">Esc</button>
            </div>

            <div className="search-body">
              <p className="search-section-label">{terms.length ? 'Results' : 'Start here'}</p>

              {terms.length > 0 && items.length === 0 ? (
                <p className="search-empty">No pages match “{query.trim()}”. Try another word, or explore all pages.</p>
              ) : (
                <ul id={listId} role="listbox" className="search-list">
                  {items.map((item, idx) => (
                    <li key={item.path} id={`${listId}-${idx}`} role="option" aria-selected={idx === active}>
                      <Link
                        href={item.path}
                        tabIndex={-1}
                        className={`search-item ${idx === active ? 'is-active' : ''}`}
                        onMouseEnter={() => setActive(idx)}
                        onClick={(e) => {
                          e.preventDefault();
                          go(item.path);
                        }}
                      >
                        <span className="search-item-main">
                          <span className="search-item-title">{item.title}</span>
                          {item.text && <span className="search-item-text">{item.group} · {item.text}</span>}
                        </span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <p className="search-hint">Type to search every page on the site. Use ↑ ↓ to move, Enter to open.</p>
            </div>

            <button type="button" className="search-explore" onClick={openExplore}>
              <LayoutGrid size={17} aria-hidden="true" />
              <span className="search-explore-label">Explore all pages</span>
              <span className="search-explore-count">{searchIndex.length} pages</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <ExplorePages
        hideTrigger
        open={exploreOpen}
        onOpenChange={setExploreOpen}
        onNavigate={onNavigate}
        returnFocusTo={buttonRef}
      />
    </div>
  );
}
