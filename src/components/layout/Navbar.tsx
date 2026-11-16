import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import { MagneticButton } from '../ui/MagneticButton';
import './Navbar.css';
import publicRoutes from '../../config/publicRoutes.json';

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenSearch?: () => void;
}

const WORK_DROPDOWN = [
  { label: 'Projects', to: '/work', note: 'Case studies and selected work' },
  { label: 'Workflow', to: '/workflow', note: 'How engagements run' }
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      setScrolled(currentScroll > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkOpen(false);
  }, [location.pathname]);

  const navLabels: Record<string, string> = {
    home: t('nav.home', 'Home'),
    services: t('nav.services', 'Services'),
    work: t('nav.work', 'Work'),
    about: t('nav.about', 'About'),
    contact: t('nav.contact', 'Contact')
  };
  const navLinks = publicRoutes
    .filter(route => route.nav)
    .map(route => ({ id: route.id, label: navLabels[route.id] || route.id, to: route.path }));

  const workActive = location.pathname === '/work' || location.pathname.startsWith('/work/') || location.pathname === '/workflow';

  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      >
        <div
          className="header-scroll-progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <div className="container header-container">
          <Link to="/" className="brand-lockup" aria-label="Tekmora Home">
            <TekmoraLogo height={28} />
          </Link>

          <nav className="desktop-nav-pill-dock" aria-label="Primary Navigation">
            {navLinks.map(link => {
              if (link.id === 'work') {
                return (
                  <div
                    key={link.id}
                    className={`nav-dropdown ${workOpen ? 'is-open' : ''} ${workActive ? 'nav-pill--active' : ''}`}
                    onMouseEnter={() => setWorkOpen(true)}
                    onMouseLeave={() => setWorkOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-pill-item nav-dropdown-trigger ${workActive ? 'nav-pill--active' : ''}`}
                      aria-expanded={workOpen}
                      aria-haspopup="true"
                      onClick={() => setWorkOpen(open => !open)}
                    >
                      <span className="nav-pill-text">{link.label}</span>
                      <ChevronDown size={14} className="nav-dropdown-caret" aria-hidden="true" />
                    </button>
                    <div className="nav-dropdown-panel" role="menu">
                      {WORK_DROPDOWN.map(item => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`nav-dropdown-link ${location.pathname === item.to || (item.to === '/work' && location.pathname.startsWith('/work/')) ? 'is-active' : ''}`}
                          role="menuitem"
                        >
                          <strong>{item.label}</strong>
                          <span>{item.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to);

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

          <div className="header-actions">
            <MagneticButton>
              <Link
                to="/contact"
                className="header-primary-cta"
                onClick={e => {
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
              >
                <span>Start a Project</span>
                <ArrowRight size={14} className="cta-icon" />
              </Link>
            </MagneticButton>

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

      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <TekmoraLogo height={28} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link, idx) => {
              if (link.id === 'work') {
                return (
                  <div key={link.id} className="mobile-nav-group">
                    <div className="mobile-nav-item mobile-nav-group-label">
                      <span className="mobile-link-num font-mono">0{idx + 1}</span>
                      <span className="mobile-link-title">{link.label}</span>
                    </div>
                    {WORK_DROPDOWN.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="mobile-nav-item mobile-nav-subitem"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="mobile-link-title">{item.label}</span>
                        <ArrowUpRight size={20} className="mobile-link-arrow" />
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
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
              );
            })}
          </div>

          <div className="mobile-nav-footer">
            <div className="mobile-meta font-mono">
              <div>SOFTWARE DEVELOPMENT</div>
              <div className="text-orange">SOFTWARE BUILT AROUND YOUR BUSINESS.</div>
            </div>
            <Link
              to="/contact"
              className="btn btn-orange w-full font-mono mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project ↗
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
