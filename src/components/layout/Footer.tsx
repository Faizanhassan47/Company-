import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import './Footer.css';

const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/work' },
  { label: 'Workflow', to: '/workflow' },
  { label: 'Agency Partners', to: '/agency-partners' },
  { label: 'Contact', to: '/contact' }
] as const;

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <TekmoraLogo height={26} />
            <p>Software built around how your business actually works.</p>
          </div>

          <div className="footer-contact">
            <a href="mailto:info@tekmorasolution.com" className="footer-contact-link">
              info@tekmorasolution.com
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/tekmora-solution"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {NAV.map(item => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-bottom">
          <p>© {year} Tekmora Solutions</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
