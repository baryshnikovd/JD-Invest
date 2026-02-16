'use client';

import ScrollReveal from '../components/ScrollReveal';

const philosophy = [
  'Innovation that increases productivity',
  'Essential systems and constrained inputs that support real economic activity',
  'Disciplined structures and governance aligned with long-term ownership',
];

export default function About() {
  return (
    <>
      {/* ── About ──────────────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="fade-in" style={{ maxWidth: '780px' }}>
            <span className="label">About</span>
            <h1>About JD Invest LLC</h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: '1.8',
              marginTop: 'var(--space-lg)',
            }}>
              JD Invest LLC is a global private investment firm headquartered in
              Dubai. We deploy long-duration capital across technology and essential
              real assets with a disciplined, research-driven approach. Our objective
              is durable, risk-adjusted compounding through cycles.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Philosophy ─────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Philosophy</span>
            <h2>Investment Philosophy</h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              We focus on areas with enduring relevance:
            </p>
          </div>
          <div className="philosophy-list fade-in">
            {philosophy.map((item, i) => (
              <div key={i} className="phil-item">
                <span className="phil-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Location ───────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="location-line fade-in">
            <span className="loc-marker">◆</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span>Meydan Grandstand, 6th floor</span>
              <span>Meydan Road, Nad Al Sheba</span>
              <span>Dubai, U.A.E.</span>
            </div>
            <span className="loc-sep">·</span>
            <span>Global Scope</span>
          </div>
        </ScrollReveal>
      </section>

      <style jsx>{`
        .philosophy-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 680px;
        }

        .phil-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
        }

        .phil-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--champagne);
          margin-top: 0.55rem;
          opacity: 0.7;
        }

        .phil-item p {
          margin: 0;
          color: var(--slate);
        }

        .location-line {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: var(--small);
          color: var(--slate-dim);
          letter-spacing: 0.04em;
        }

        .loc-marker {
          color: var(--champagne);
          font-size: 0.6rem;
          opacity: 0.6;
        }

        .loc-sep {
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}
