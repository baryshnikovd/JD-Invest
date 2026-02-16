'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Intro ──────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <ScrollReveal className="container">
          <div className="fade-in" style={{ maxWidth: '600px' }}>
            <span className="label">Contact</span>
            <h1>Contact</h1>
            <p style={{ marginTop: 'var(--space-md)' }}>
              For partnership opportunities, manager introductions, and
              institutional inquiries.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Contact Info ───────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <ScrollReveal className="container">
          <div className="contact-info fade-in">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:partners@jdinvest.com" className="info-value">
                partners@jdinvest.com
              </a>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value-text">Dubai, UAE</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Form ───────────────────────────────── */}
      <section className="section">
        <ScrollReveal className="container">
          <div className="contact-form-wrapper glass fade-in">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank you for your inquiry.</h3>
                <p>We will review your message and respond promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="form-input"
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic" className="form-select" required>
                      <option value="">Select a topic</option>
                      <option value="strategy">Strategy</option>
                      <option value="manager">Manager Introduction</option>
                      <option value="direct">Direct Opportunity</option>
                      <option value="media">Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <div className="form-consent">
                  <p>
                    By submitting this form, you agree to the{' '}
                    <a href="/privacy">Privacy Policy</a> and{' '}
                    <a href="/terms">Terms</a>.
                  </p>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>

      <style jsx>{`
        .contact-info {
          display: flex;
          gap: var(--space-2xl);
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: var(--label);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--champagne);
        }

        .info-value {
          font-size: var(--body);
          color: var(--off-white);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .info-value:hover {
          color: var(--champagne);
        }

        .info-value-text {
          font-size: var(--body);
          color: var(--slate);
        }

        .contact-form-wrapper {
          max-width: 720px;
          padding: var(--space-2xl);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }

        .form-consent {
          margin-top: var(--space-sm);
        }

        .form-consent p {
          font-size: var(--small);
          color: var(--slate-dim);
          margin: 0;
        }

        .form-consent a {
          color: var(--champagne);
          text-decoration: underline;
          text-decoration-color: rgba(200, 179, 138, 0.3);
          text-underline-offset: 2px;
        }

        .form-consent a:hover {
          text-decoration-color: var(--champagne);
        }

        .success-message {
          text-align: center;
          padding: var(--space-2xl) 0;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--champagne);
          color: var(--champagne);
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-lg);
        }

        .success-message h3 {
          font-family: var(--font-heading);
          color: var(--off-white);
          margin-bottom: var(--space-sm);
        }

        .success-message p {
          color: var(--slate);
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrapper {
            padding: var(--space-lg);
          }
        }
      `}</style>
    </>
  );
}
