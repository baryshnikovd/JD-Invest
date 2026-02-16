export const metadata = {
  title: 'Privacy Policy — JD Invest LLC',
  description: 'JD Invest LLC privacy policy describing how we collect and use information.',
};

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose" style={{ maxWidth: '800px' }}>
        <span className="label">Legal</span>
        <h1>Privacy Policy</h1>

        <h2>Overview</h2>
        <p>
          JD Invest LLC respects your privacy. This policy describes how we collect
          and use information submitted through this website.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            Information you provide via the contact form (such as name, email,
            organization, and message content)
          </li>
          <li>
            Basic technical data that may be collected automatically by standard
            website services (such as IP address, browser type, and pages visited)
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <p>We use submitted information solely to:</p>
        <ul>
          <li>Respond to inquiries and communicate with you</li>
          <li>Maintain website security and prevent abuse</li>
          <li>Improve website performance and functionality</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          JD Invest LLC does not sell personal information. We may share information
          with service providers that support website operations (e.g., hosting or
          security) only as necessary and subject to appropriate safeguards.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain inquiry information only as long as reasonably necessary for
          communication, recordkeeping, and compliance purposes.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of personal
          information you have submitted, subject to applicable legal and compliance
          obligations.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related requests, contact:{' '}
          <a href="mailto:privacy@jdinvest.com">privacy@jdinvest.com</a>
        </p>
      </div>
    </section>
  );
}
