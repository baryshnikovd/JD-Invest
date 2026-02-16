'use client';

import Link from 'next/link';
import HeroBackground from './components/HeroBackground';
import ScrollReveal from './components/ScrollReveal';

const focusAreas = [
  {
    label: 'Technology',
    title: 'Technology',
    description:
      'Venture fund commitments and selective direct investments in high-quality companies.',
  },
  {
    label: 'Energy',
    title: 'Energy & Infrastructure',
    description:
      'Investments linked to reliable, scalable power systems and enabling infrastructure.',
  },
  {
    label: 'Materials',
    title: 'Critical Materials',
    description:
      'Exposure to strategic minerals and industrial inputs with durable demand.',
  },
  {
    label: 'Supply Chains',
    title: 'Commodities & Supply Chains',
    description:
      'Selective investments in essential flow assets across logistics, storage, and processing.',
  },
  {
    label: 'Agriculture',
    title: 'Agriculture & Food Systems',
    description:
      'Long-term exposure to non-discretionary demand and productivity improvement.',
  },
];

const approachPoints = [
  'Disciplined underwriting with downside-first analysis and clear governance',
  'Long-term orientation across cycles and time horizons',
  'Selective partnerships with high-quality managers, founders, and operators',
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="hero">
        <HeroBackground />
        <div className="container hero__content">
          <span className="label">Private Investment Firm</span>
          <h1>JD Invest LLC</h1>
          <p className="hero__subtitle">
            A global private investment firm headquartered in Dubai.
          </p>
          <p className="hero__body">
            We deploy long-duration capital across technology and essential real assets
            to build durable, risk-adjusted compounding through cycles.
          </p>
          <div className="hero__actions">
            <Link href="/strategy" className="btn btn-primary">
              View Strategy
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>

        <style jsx>{`
          .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: var(--space-section) var(--content-padding);
            overflow: hidden;
          }

          .hero__content {
            position: relative;
            z-index: 1;
            max-width: 780px;
          }

          .hero h1 {
            margin-bottom: var(--space-md);
          }

          .hero__subtitle {
            font-size: clamp(1.1rem, 1.8vw, 1.35rem);
            color: var(--slate);
            margin-bottom: var(--space-sm);
          }

          .hero__body {
            font-size: var(--body);
            color: var(--slate-dim);
            max-width: 600px;
            margin-bottom: var(--space-xl);
          }

          .hero__actions {
            display: flex;
            gap: var(--space-sm);
            flex-wrap: wrap;
          }
        `}</style>
      </section>

      {/* ── Overview ──────────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="fade-in">
            <hr className="divider" />
            <div style={{ maxWidth: '780px' }}>
              <span className="label">Overview</span>
              <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: '1.8' }}>
                JD Invest LLC invests at the intersection of innovation and essential economic
                systems. Our focus spans technology-led productivity gains and the foundational
                inputs that support modern economies: energy, critical materials, supply chains,
                and food systems.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Focus Areas ──────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="fade-in">
            <span className="label">Focus Areas</span>
            <h2>Investment Themes</h2>
          </div>
          <div className="grid-5 stagger">
            {focusAreas.map((area) => (
              <div key={area.title} className="card fade-in">
                <span className="label">{area.label}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Our Approach ─────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Our Approach</span>
            <h2>How We Invest</h2>
          </div>
          <div className="approach-list fade-in">
            {approachPoints.map((point, i) => (
              <div key={i} className="approach-item">
                <span className="approach-marker" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <style jsx>{`
          .approach-list {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
            max-width: 700px;
          }

          .approach-item {
            display: flex;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .approach-marker {
            flex-shrink: 0;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--champagne);
            margin-top: 0.55rem;
            opacity: 0.7;
          }

          .approach-item p {
            margin: 0;
            color: var(--slate);
          }
        `}</style>
      </section>

      {/* ── Contact CTA ──────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="cta-strip glass fade-in">
            <div className="cta-strip__content">
              <span className="label">Get in Touch</span>
              <h2 style={{ marginBottom: 'var(--space-sm)' }}>
                Partnership Opportunities
              </h2>
              <p>
                For partnership opportunities, manager introductions, and institutional inquiries.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </div>
        </ScrollReveal>

        <style jsx>{`
          .cta-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-xl);
            padding: var(--space-2xl);
            flex-wrap: wrap;
          }

          .cta-strip__content {
            max-width: 560px;
          }

          .cta-strip__content p {
            margin-bottom: 0;
          }
        `}</style>
      </section>
    </>
  );
}
