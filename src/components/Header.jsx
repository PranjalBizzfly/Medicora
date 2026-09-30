'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ChevronDown, Menu, X, Calendar } from 'lucide-react';
import { siteConfig, navigationLinks } from '../data/websiteContent';
import { SocialLinks } from './SocialIcons';
import ThemeToggle from './ThemeToggle';
import SiteSearch from './SiteSearch';
import './Header.css';

function BrandLogo() {
  return (
    <span className="brand-logo-crop">
      <Image
        src="/brand/logo-header.webp"
        alt="Dr. Mohini Mutha logo"
        width={1702}
        height={445}
        priority
        className="brand-logo-img brand-logo-img-light"
      />
      <Image
        src="/brand/logo-footer-white.webp"
        alt=""
        aria-hidden="true"
        width={1702}
        height={445}
        className="brand-logo-img brand-logo-img-dark"
      />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        // Return focus to the menu button that owned the open dropdown.
        document.querySelector('.nav-item.is-open > .nav-link')?.focus();
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Mobile drawer: move focus in, trap Tab inside, restore focus on close.
  useEffect(() => {
    if (mobileMenuOpen) {
      wasOpen.current = true;
      const drawer = drawerRef.current;
      drawer?.querySelector('button')?.focus();
      const trap = (e) => {
        if (e.key !== 'Tab' || !drawer) return;
        const items = drawer.querySelectorAll('a[href], button:not([disabled])');
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      };
      document.addEventListener('keydown', trap);
      return () => document.removeEventListener('keydown', trap);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      toggleRef.current?.focus();
    }
    return undefined;
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isSectionActive = (item) =>
    item.children?.some((child) => pathname === child.path);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Top contact bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-items">
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="topbar-item">
              <Phone size={14} />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="topbar-item">
              <Mail size={14} />
              <span className="email-text">{siteConfig.email}</span>
            </a>
            <span className="topbar-item">
              <MapPin size={14} />
              <span>{siteConfig.clinicLocation}</span>
            </span>
          </div>
          <div className="topbar-items">
            <span className="topbar-note">In-person & online consultations · India · UAE · USA</span>
            <SocialLinks className="topbar-social" size={14} />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="container">
          <Link href="/" className="navbar-brand" aria-label="Dr. Mohini Mutha, Home">
            <BrandLogo />
          </Link>

          <ul className="nav-menu">
            {navigationLinks.map((item) => (
              <li
                key={item.label}
                className={`nav-item ${openDropdown === item.label ? 'is-open' : ''}`}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
                onFocus={() => item.children && setOpenDropdown(item.label)}
                onBlur={(e) => {
                  if (item.children && !e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
                }}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={`nav-link ${isSectionActive(item) ? 'active' : ''}`}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="nav-chevron" />
                    </button>
                    <div className={`dropdown-menu ${item.isMega ? 'dropdown-mega' : ''}`}>
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`dropdown-link ${pathname === subItem.path ? 'active' : ''}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="dropdown-link-title">{subItem.label}</span>
                          {subItem.desc && <span className="dropdown-link-desc">{subItem.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="header-tools">
              <SiteSearch />
              <span className="header-tool-theme"><ThemeToggle /></span>
            </div>
            <Link href="/book-a-consultation" className="btn btn-primary btn-sm navbar-cta">
              <Calendar size={15} />
              <span>Book a Consultation</span>
            </Link>
            <button
              type="button"
              ref={toggleRef}
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-drawer-backdrop" onClick={closeMobileMenu} />
          <div ref={drawerRef} className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-drawer-header">
              <BrandLogo />
              <span className="mobile-drawer-theme"><ThemeToggle /></span>
              <button type="button" className="mobile-toggle" onClick={closeMobileMenu} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className="mobile-nav-list">
              {navigationLinks.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className={`mobile-nav-btn ${isSectionActive(item) ? 'active' : ''}`}
                        aria-expanded={expandedMobileItem === item.label}
                        onClick={() =>
                          setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`mobile-chevron ${expandedMobileItem === item.label ? 'is-open' : ''}`}
                        />
                      </button>
                      {expandedMobileItem === item.label && (
                        <div className="mobile-subnav">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              className={pathname === subItem.path ? 'active' : ''}
                              onClick={closeMobileMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`mobile-nav-btn ${pathname === item.path ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <Link href="/book-a-consultation" className="btn btn-primary btn-block" onClick={closeMobileMenu}>
                <Calendar size={16} />
                <span>Book a Consultation</span>
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="mobile-contact">
                <Phone size={14} /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="mobile-contact email-text">
                <Mail size={14} /> {siteConfig.email}
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
