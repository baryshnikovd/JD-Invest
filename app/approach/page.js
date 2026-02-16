'use client';

import ScrollReveal from '../components/ScrollReveal';

const underwriting = [
  {
    title: 'Quality',
    desc: 'Team, market structure, competitive advantage',
  },
  {
    title: 'Economics',
    desc: 'Unit economics, margin durability, downside case',
  },
  {
    title: 'Structure',
    desc: 'Governance, alignment, liquidity, and risk controls',
  },
  {
    title: 'Resilience',
    desc: 'Scenario analysis across macro regimes and cycles',
  },
];

const portfolio = [
  'Diversified across time horizons and risk profiles',
  'Balanced between innovation optionality and essential real-asset exposure',
  'Position sizing guided by conviction, downside protection, and liquidity planning',
];

const governance = [
  'Clear investment documentation and decision discipline',
  'Structured vehicles where appropriate (including SPVs)',
  'Ongoing monitoring and periodic re-underwriting based on new information',
];

export default function Approach() {
  return (
    <>
      {/* ── Intro ──────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <ScrollReveal className="container">
          <div className="fade-in" style={{ maxWidth: '780px' }}>
            <span className="label">Approach</span>
            <h1>Approach</h1>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Underwriting ───────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="fade-in">
            <span className="label">Framework</span>
            <h2>Underwriting</h2>
            <p style={{ marginBottom: 'var(--space-xl)' }}>
              JD Invest LLC evaluates opportunities through a consistent framework:
            </p>
          </div>

          <div className="uw-grid stagger">
            {underwriting.map((item) => (
              <div key={item.title} className="uw-pill fade-in">
                <div className="uw-pill__marker" />
                <div>
                  <h3 className="uw-pill__title">{item.title}</h3>
                  <p className="uw-pill__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </section>

      {/* ── Portfolio Construction ──────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Construction</span>
            <h2>Portfolio Construction</h2>
          </div>
          <div className="bullet-list fade-in">
            {portfolio.map((item, i) => (
              <div key={i} className="bullet-item">
                <span className="bullet-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Governance ─────────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Governance</span>
            <h2>Governance & Execution</h2>
          </div>
          <div className="bullet-list fade-in">
            {governance.map((item, i) => (
              <div key={i} className="bullet-item">
                <span className="bullet-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <style jsx>{`
        .uw-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-lg);
        }

        .uw-pill {
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
          padding: var(--space-lg);
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          transition: all var(--transition-med);
        }

        .uw-pill:hover {
          border-color: rgba(200, 179, 138, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .uw-pill__marker {
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--champagne);
          margin-top: 6px;
          opacity: 0.7;
        }

        .uw-pill__title {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--off-white);
          margin-bottom: 4px;
        }

        .uw-pill__desc {
          font-size: var(--small);
          color: var(--slate);
          margin: 0;
          line-height: 1.5;
        }

        .bullet-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          max-width: 680px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
        }

        .bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--champagne);
          margin-top: 0.55rem;
          opacity: 0.7;
        }

        .bullet-item p {
          margin: 0;
          color: var(--slate);
        }

        @media (max-width: 768px) {
          .uw-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
