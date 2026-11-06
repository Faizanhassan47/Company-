import React from 'react';
import { Link } from 'react-router-dom';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-main-brand">
            <TekmoraLogo height={28} />
            <p className="footer-about-text">
              Software engineering for startups and businesses. We design, build and support products that teams rely on.
            </p>
          </div>

          <div className="footer-nav-group">
            <div className="footer-group-header">Company</div>
            <ul className="footer-nav-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <div className="footer-group-header">Services</div>
            <ul className="footer-nav-links">
              <li><Link to="/services/custom-software-development">Custom Software</Link></li>
              <li><Link to="/services/web-application-development">Web Applications</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile Apps</Link></li>
              <li><Link to="/services/saas-engineering-modernization">SaaS Development</Link></li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <div className="footer-group-header">Connect</div>
            <ul className="footer-nav-links">
              <li><a href="mailto:info@tekmorasolution.com">info@tekmorasolution.com</a></li>
              <li><a href="https://linkedin.com/company/tekmora" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">© {new Date().getFullYear()} Tekmora Solution. All rights reserved.</div>
          <div className="footer-legal-row">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
