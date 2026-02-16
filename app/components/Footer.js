'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="footer__logo-link">
              <Image
                src="/logo.svg"
                alt="JD Invest"
                width={220}
                height={72}
                style={{ objectFit: 'contain', height: '44px', width: 'auto' }}
              />
            </Link>
            <p className="footer__tagline">
              Global private investment firm headquartered in Dubai.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <span className="footer__col-title">Company</span>
              <Link href="/about">About</Link>
              <Link href="/strategy">Strategy</Link>
              <Link href="/approach">Approach</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Legal</span>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Disclaimers</Link>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>© {year} JD Invest LLC. All rights reserved.</p>
          <p>Dubai, UAE</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: var(--space-2xl) var(--content-padding) var(--space-xl);
          border-top: 1px solid var(--glass-border);
          background: rgba(7, 26, 43, 0.25);
        }

        .footer__inner {
          max-width: var(--max-width);
        }

        .footer__top {
          display: flex;
          justify-content: space-between;
          gap: var(--space-2xl);
          flex-wrap: wrap;
        }

        .footer__brand {
          max-width: 320px;
        }

        .footer__logo {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--off-white);
          display: block;
          margin-bottom: var(--space-sm);
        }

        .footer__tagline {
          font-size: var(--small);
          color: var(--slate-dim);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .footer__links {
          display: flex;
          gap: var(--space-2xl);
        }

        .footer__col {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .footer__col-title {
          font-size: var(--label);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--champagne);
          margin-bottom: var(--space-xs);
        }

        .footer__col :global(a) {
          font-size: var(--small);
          color: var(--slate-dim);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer__col :global(a:hover) {
          color: var(--off-white);
        }

        .footer__divider {
          height: 1px;
          background: var(--glass-border);
          margin: var(--space-xl) 0 var(--space-lg);
        }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .footer__bottom p {
          font-size: var(--label);
          color: var(--slate-dim);
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer__top {
            flex-direction: column;
            gap: var(--space-xl);
          }

          .footer__links {
            flex-direction: column;
            gap: var(--space-xl);
          }
        }
      `}</style>
    </footer>
  );
}
