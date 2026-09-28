import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Layout */}
        <motion.div
          className="footer-main-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Column 1: Brand & Positioning */}
          <motion.div className="footer-main-brand" variants={fadeInUp}>
            <div className="footer-logo-wrap">
              <TekmoraLogo height={32} />
            </div>
            <p className="footer-about-text">
              Tekmora is an independent software engineering studio. We design, develop, and scale web applications, mobile platforms, and custom operational systems.
            </p>
            <div className="footer-operating-mode font-mono">
              <span className="mode-dot" />
              <span>GLOBAL ENGINEERING // WORKING WORLDWIDE</span>
            </div>
          </motion.div>

          {/* Column 2: Navigation Directory */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">COMPANY</div>
            <ul className="footer-nav-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/work">Selected Work</Link></li>
              <li><Link to="/services">Services & Stack</Link></li>
              <li><Link to="/contact">Start a Project</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Specialized Capabilities */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">SERVICES</div>
            <ul className="footer-nav-links">
              <li><Link to="/services/custom-software-development">Custom Software</Link></li>
              <li><Link to="/services/web-application-development">Web Applications</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile Applications</Link></li>
              <li><Link to="/services/saas-engineering-modernization">SaaS Engineering</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact & Social */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">CONNECT</div>
            <ul className="footer-nav-links">
              <li>
                <a href="mailto:hello@tekmorasolution.com" className="footer-connect-link">
                  <Mail size={15} className="text-orange" />
                  <span>hello@tekmorasolution.com</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/tekmora" target="_blank" rel="noopener noreferrer" className="footer-connect-link">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li className="footer-legal-row font-mono">
                <Link to="/privacy">Privacy</Link>
                <span className="sep">•</span>
                <Link to="/terms">Terms</Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom-row font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <div className="footer-copyright">
            © {new Date().getFullYear()} TEKMORA SOLUTION. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-tagline">
            SOFTWARE ENGINEERED FOR REAL BUSINESSES.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
