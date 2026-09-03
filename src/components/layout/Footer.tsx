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
        {/* Top Direct Action Banner */}
        <motion.div 
          className="footer-action-banner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="action-banner-left">
            <div className="action-kicker font-mono">
              <span className="live-status-dot" />
              <span>DIRECT TECHNICAL CONSULTATION</span>
            </div>
            <h2 className="action-banner-title font-display">
              HAVE A COMPLEX WORKFLOW<br />
              <span className="italic-accent">THAT NEEDS BUILDING?</span>
            </h2>
          </div>

          <div className="action-banner-right font-mono">
            <Link to="/contact" className="btn btn-primary footer-cta-btn">
              <span>Start a Project Inquiry</span>
              <ArrowUpRight size={16} />
            </Link>
            <a href="mailto:inquiry@tekmora.com" className="footer-direct-email">
              <Mail size={14} className="text-orange" />
              <span>inquiry@tekmora.com</span>
            </a>
          </div>
        </motion.div>

        {/* Main Footer Layout */}
        <motion.div 
          className="footer-main-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Column 1: Brand & Positioning */}
          <motion.div className="footer-main-brand" variants={fadeInUp}>
            <div className="footer-logo-wrap">
              <TekmoraLogo height={32} />
            </div>
            <p className="footer-about-text">
              Tekmora is an independent software engineering studio. We build bespoke web platforms, offline-first mobile applications, and internal database systems for real business operations.
            </p>
            <div className="footer-operating-mode font-mono">
              <span className="mode-dot" />
              <span>GLOBAL ENGINEERING // WORKING WORLDWIDE</span>
            </div>
          </motion.div>

          {/* Column 2: Navigation Directory */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">DIRECTORY</div>
            <ul className="footer-nav-links font-mono">
              <li><Link to="/services">Services & Disciplines</Link></li>
              <li><Link to="/industries">Industries Served</Link></li>
              <li><Link to="/#process">Delivery Process</Link></li>
              <li><Link to="/about">About the Studio</Link></li>
              <li><Link to="/contact">Start a Project</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Specialized Capabilities */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">DISCIPLINES</div>
            <ul className="footer-nav-links font-mono">
              <li><Link to="/services/web-application-development">Web Platforms & SaaS</Link></li>
              <li><Link to="/services/mobile-app-development">Offline-First Mobile</Link></li>
              <li><Link to="/services/sap-business-one-integration">SAP Business One Sync</Link></li>
              <li><Link to="/services/warehouse-management-systems">Warehouse Systems (WMS)</Link></li>
              <li><Link to="/services/enterprise-software-development">Custom APIs & Microservices</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Standards & Legal */}
          <motion.div className="footer-nav-group" variants={fadeInUp}>
            <div className="footer-group-header font-mono">STANDARDS</div>
            <ul className="footer-nav-links font-mono">
              <li><span className="spec-tag">TypeScript 5.x Strict</span></li>
              <li><span className="spec-tag">100% Client IP Ownership</span></li>
              <li><span className="spec-tag">ACID Database Integrity</span></li>
              <li className="footer-legal-row">
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="footer-copyright">
            © {new Date().getFullYear()} TEKMORA. ALL RIGHTS RESERVED.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
