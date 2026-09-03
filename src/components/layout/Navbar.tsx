import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import './Navbar.css';

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { t } = useTranslation();


  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#090909');
    }
  }, []);

  // Handle scroll state and progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      if (currentScroll > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t('nav.about', 'About'), to: '/about' },
    { label: t('nav.services', 'Services'), to: '/services' },
    { label: t('nav.work', 'Work'), to: '/work' },
    { label: t('nav.industries', 'Industries'), to: '/industries' },
    { label: t('nav.insights', 'Insights'), to: '/insights' },
    { label: t('nav.start_project', 'Contact'), to: '/contact' }
  ];

  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      >
        {/* Real-time Scroll Progress Bar */}
        <div
          className="header-scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <div className="container header-container">
          {/* Brand Logo with Official tk Mark + Wordmark */}
          <Link to="/" className="brand-lockup" aria-label="Tekmora Home">
            <TekmoraLogo height={28} />
          </Link>

          {/* Desktop Pill Navigation Links */}
          <nav className="desktop-nav-pill-dock" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`nav-pill-item ${isActive ? 'nav-pill--active' : ''}`}
                >
                  <span className="nav-pill-text">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Header Actions: Quick Search, Theme Toggle, Start Project CTA */}
          <div className="header-actions">
            {/* Quick Search Button */}
            {onOpenSearch && (
              <button
                type="button"
                className="header-search-btn"
                onClick={onOpenSearch}
                aria-label="Search systems, services, and technical notes (Cmd+K)"
                title="Search (Cmd+K / Ctrl+K)"
              >
                <Search size={14} className="search-btn-icon" />
                <span className="search-btn-text">Search</span>
              </button>
            )}

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="header-primary-cta"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="cta-icon" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Clean Mobile Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <TekmoraLogo height={28} />
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                to={link.to}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-link-num font-mono">0{idx + 1}</span>
                <span className="mobile-link-title">{link.label}</span>
                <ArrowUpRight size={20} className="mobile-link-arrow" />
              </Link>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <div className="mobile-meta font-mono">
              <div>GLOBAL // WORKING WORLDWIDE</div>
              <div className="text-orange">WE BUILD THE SYSTEMS BUSINESSES RUN ON.</div>
            </div>
            <Link
              to="/contact"
              className="btn btn-orange w-full font-mono mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project ↗
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
