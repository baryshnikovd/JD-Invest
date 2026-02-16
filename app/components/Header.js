'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/strategy', label: 'Strategy' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link href="/" className="header__logo">
          <Image
            src="/logo.svg"
            alt="JD Invest"
            width={240}
            height={80}
            priority
            className="header__logo-img"
          />
        </Link>

        {/* Backdrop for mobile */}
        <div 
          className={`mobile-backdrop ${mobileOpen ? 'open' : ''}`} 
          onClick={() => setMobileOpen(false)}
        />

        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__link ${pathname === link.href ? 'header__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary header__cta">
            Contact
          </Link>
        </nav>

        <button
          className="header__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ zIndex: 1002 }} // Ensure above sidebar
        >
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          background: rgba(11, 15, 23, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--glass-border);
          transition: all var(--transition-med);
        }

        .header--scrolled {
          height: 64px;
          background: rgba(11, 15, 23, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 var(--content-padding);
        }

        .header__logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: opacity var(--transition-fast);
          z-index: 1002; /* Above sidebar */
        }

        .header__logo:hover {
          opacity: 0.85;
        }

        :global(.header__logo-img) {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: height var(--transition-med);
        }

        .header--scrolled :global(.header__logo-img) {
          height: 40px;
        }

        .header__nav {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
        }

        .header__link {
          font-size: var(--small);
          font-weight: 400;
          color: var(--slate);
          text-decoration: none;
          letter-spacing: 0.02em;
          position: relative;
          transition: color var(--transition-fast);
        }

        .header__link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--champagne);
          transition: width var(--transition-fast);
        }

        .header__link:hover,
        .header__link--active {
          color: var(--off-white);
        }

        .header__link--active::after,
        .header__link:hover::after {
          width: 100%;
        }

        .header__cta {
          padding: 0.55rem 1.4rem;
          font-size: 0.75rem;
          margin-left: var(--space-sm);
        }

        .header__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--off-white);
          transition: all var(--transition-fast);
          transform-origin: center;
        }

        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(4px, 5px);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -5px);
        }

        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-med);
          z-index: 1000; /* Behind sidebar */
        }
        
        .mobile-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          .header__hamburger {
            display: flex;
          }

          .header__nav {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 80%;
            max-width: 320px;
            height: 100dvh;
            flex-direction: column;
            justify-content: center;
            padding: var(--space-2xl);
            gap: var(--space-xl);
            background: rgba(7, 26, 43, 0.98);
            border-left: 1px solid var(--glass-border);
            box-shadow: -10px 0 40px rgba(0,0,0,0.5);
            transform: translateX(100%);
            transition: transform var(--transition-med);
            z-index: 1001;
            overflow-y: auto;
          }

          .header__nav--open {
            transform: translateX(0);
          }

          .header__link {
            font-size: 1.25rem;
            font-family: var(--font-heading);
          }

          .header__cta {
            margin-left: 0;
            margin-top: var(--space-sm);
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}
