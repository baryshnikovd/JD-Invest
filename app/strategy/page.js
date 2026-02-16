'use client';

import ScrollReveal from '../components/ScrollReveal';

const pillars = [
  {
    label: 'Technology',
    mandate: 'Productivity transformation and scalable innovation',
    instruments: 'LP commitments, co-investments, direct/SPVs',
    focus:
      'Defensible advantage, strong unit economics, governance, and durable demand',
  },
  {
    label: 'Energy & Infrastructure',
    mandate:
      'Reliable, scalable systems supporting economic growth and digital infrastructure',
    instruments: 'Equity and asset-linked opportunities (selective)',
    focus:
      'Quality assets, resilient cash-flow characteristics where applicable, prudent structuring',
  },
  {
    label: 'Critical Materials',
    mandate:
      'Strategic inputs essential to electrification and advanced manufacturing',
    instruments: 'Equity and structured exposures (selective)',
    focus:
      'Cost-curve positioning, operator quality, disciplined jurisdiction and execution risk management',
  },
  {
    label: 'Commodities & Supply Chains',
    mandate: 'Essential flow assets embedded in commodity ecosystems',
    instruments: 'Selective investments across logistics, storage, processing',
    focus:
      'Real-economy relevance, risk controls, and clear underwriting assumptions',
  },
  {
    label: 'Agriculture & Food Systems',
    mandate:
      'Long-duration exposure to non-discretionary demand and productivity gains',
    instruments: 'Selective investments across assets and enabling infrastructure',
    focus: 'Efficiency, resilience, and durable demand fundamentals',
  },
];

export default function Strategy() {
  return (
    <>
      {/* ── Intro ──────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <ScrollReveal className="container">
          <div className="fade-in" style={{ maxWidth: '780px' }}>
            <span className="label">Strategy</span>
            <h1>Investment Strategy</h1>
            <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: '1.8', marginTop: 'var(--space-lg)' }}>
              JD Invest LLC builds focused exposures designed to participate in
              innovation upside while remaining anchored in essential, real-economy
              inputs. We invest with a long-term horizon and a preference for
              high-quality opportunities with robust risk structuring.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Framework Split ────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Strategy Framework</span>
            <h2>Two Engines</h2>
          </div>
          <div className="grid-2 stagger">
            <div className="card fade-in">
              <span className="label">Innovation</span>
              <h3>Growth Engine</h3>
              <ul className="strategy-list">
                <li>Venture funds (LP commitments)</li>
                <li>Co-investments and selective direct investments (often via SPVs)</li>
              </ul>
            </div>
            <div className="card fade-in">
              <span className="label">Essentials</span>
              <h3>Foundation & Resilience</h3>
              <ul className="strategy-list">
                <li>Energy and enabling infrastructure</li>
                <li>Critical materials and strategic inputs</li>
                <li>Supply-chain assets tied to commodity flows</li>
                <li>Agriculture and food systems</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Pillars ────────────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <hr className="divider fade-in" />
          <div className="fade-in">
            <span className="label">Detail</span>
            <h2>Investment Pillars</h2>
          </div>
          <div className="pillars stagger">
            {pillars.map((p) => (
              <div key={p.label} className="pillar-row fade-in">
                <div className="pillar-header">
                  <span className="label">{p.label}</span>
                </div>
                <div className="pillar-body">
                  <div className="pillar-field">
                    <span className="pillar-key">Mandate</span>
                    <p>{p.mandate}</p>
                  </div>
                  <div className="pillar-field">
                    <span className="pillar-key">Instruments</span>
                    <p>{p.instruments}</p>
                  </div>
                  <div className="pillar-field">
                    <span className="pillar-key">Focus</span>
                    <p>{p.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Disclaimer ─────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <hr className="divider" />
          <p style={{ fontSize: 'var(--small)', color: 'var(--slate-dim)', maxWidth: '680px' }}>
            This website is provided for informational purposes only and is not an
            offer to sell or a solicitation of an offer to buy any securities or
            investment products.
          </p>
        </div>
      </section>

      <style jsx>{`
        .strategy-list {
          list-style: none;
          padding: 0;
          margin-top: var(--space-sm);
        }

        .strategy-list li {
          position: relative;
          padding-left: 1rem;
          color: var(--slate);
          font-size: var(--small);
          margin-bottom: var(--space-xs);
          line-height: 1.6;
        }

        .strategy-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--champagne);
          opacity: 0.6;
        }

        .pillars {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .pillar-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: var(--space-xl);
          padding: var(--space-lg) 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .pillar-row:last-child {
          border-bottom: none;
        }

        .pillar-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .pillar-field {
          display: flex;
          gap: var(--space-sm);
          align-items: baseline;
        }

        .pillar-key {
          flex-shrink: 0;
          width: 100px;
          font-size: var(--small);
          font-weight: 500;
          color: var(--off-white);
          opacity: 0.7;
        }

        .pillar-field p {
          margin: 0;
          font-size: var(--small);
          color: var(--slate);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .pillar-row {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }

          .pillar-field {
            flex-direction: column;
            gap: 2px;
          }

          .pillar-key {
            width: auto;
          }
        }
      `}</style>
    </>
  );
}
