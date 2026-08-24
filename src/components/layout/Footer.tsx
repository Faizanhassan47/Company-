import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="footer-title font-display">Tekmora</span>
              <span className="footer-dot"></span>
            </div>
            <div className="footer-sub-brand font-mono">
              <span>Tekmora.</span>
            </div>
            <p className="footer-tagline">
              Software, built to a better standard. Founder-led engineering for organizations with real operational challenges.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <div className="footer-col-title font-mono">INDEX</div>
            <ul className="footer-links-list font-mono">
              <li><a href="#work">01 // Selected Work</a></li>
              <li><a href="#services">02 // What We Build</a></li>
              <li><a href="#principles">03 // Why Tekmora</a></li>
              <li><a href="#process">04 // Process</a></li>
              <li><a href="#capabilities">05 // Capabilities</a></li>
              <li><a href="#founder">06 // Founder & Team</a></li>
              <li><a href="#contact">07 // Contact</a></li>
            </ul>
          </div>

          {/* Direct Capabilities */}
          <div className="footer-tech-col">
            <div className="footer-col-title font-mono">DISCIPLINES</div>
            <ul className="footer-links-list font-mono">
              <li><span>Custom Web Platforms (React / Next)</span></li>
              <li><span>Offline-First Mobile Apps (React Native)</span></li>
              <li><span>Enterprise ERP & Portals</span></li>
              <li><span>SAP Business One Integrations</span></li>
              <li><span>Warehouse & GRN Automation</span></li>
              <li><span>Financial & Accounting Ledgers</span></li>
            </ul>
          </div>

          {/* Connect & Location */}
          <div className="footer-contact-col">
            <div className="footer-col-title font-mono">CONNECT</div>
            <div className="footer-contact-info font-mono">
              <a href="mailto:contact@tekmora.com" className="footer-email">
                contact@tekmora.com
              </a>
              <div className="footer-loc">
                <span>Lahore, Pakistan</span>
                <span className="loc-sub text-dim">Operating Worldwide (Remote)</span>
              </div>
              <div className="footer-status text-green">
                <span className="status-dot"></span>
                <span>SYSTEMS CALIBRATED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="footer-bottom-bar font-mono">
          <div className="copyright-text">
            © {new Date().getFullYear()} TEKMORA (Tekmora). ALL RIGHTS RESERVED.
          </div>

          <div className="footer-extra-meta">
            <span>NO UNPROVEN CLAIMS // REAL CODE</span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>CALIBRATE TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
