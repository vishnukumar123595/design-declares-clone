import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* Column 1 */}
        <div className="footer-column">
          <h1 className="footer-brand">Design Declares</h1>
        </div>

        {/* Column 2 */}
        <div className="footer-column footer-center-links">
          <a href="#contact">Contact</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="/privacypolicy">Privacy Policy</a>
        </div>

        {/* Column 3 */}
        <div className="footer-column footer-newsletter">
          <p className="newsletter-heading">Sign up to the D! Newsletter</p>
          <input type="email" placeholder="Email" id="newsletter-email" required />
          <div className="newsletter-subscribe">
            <label htmlFor="consent">
              <input type="checkbox" id="consent" required />
              I agree to receive email updates
            </label>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <p className="policy-link" onClick={() =>
            window.open(
              '/privacypolicy',
              '_blank',
              'noopener,noreferrer'
            )
          }>View our policy.</p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <p className="footer-note">
          This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. Learn more about our carbon footprint.
        </p>
        <p className="footer-powered">Empowered by Driftime®</p>
      </div>
    </footer>
  );
};

export default Footer;
