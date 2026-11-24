import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
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

const SERVICES_DROPDOWN = [
  { label: 'Custom Software Development', to: '/services/custom-software-development' },
  { label: 'Web Development', to: '/services/web-application-development' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'SaaS Development', to: '/services/saas-engineering-modernization' },
  { label: 'WordPress Development', to: '/services/wordpress-development' },
  { label: 'Shopify Development', to: '/services/shopify-development' },
  { label: 'Integrations & Software Engineering', to: '/services/performance-scaling-cloud-devops' },
  { label: 'ERP & Operations Software', to: '/services/erp-operations-software' },
  { label: 'Warehouse Management Software', to: '/services/warehouse-management-systems' },
  { label: 'Business Dashboards & Internal Tools', to: '/services/internal-tools-dashboards' }
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const workDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation();
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, 'change', latest => {
    setScrolled(latest > 30);
  });

  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileWorkOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileWorkOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!servicesOpen && !workOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const insideServices = servicesDropdownRef.current?.contains(target);
      const insideWork = workDropdownRef.current?.contains(target);

      if (!insideServices) setServicesOpen(false);
      if (!insideWork) setWorkOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setWorkOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen, workOpen]);

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
  const servicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');

  return (
    <>
      <motion.header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.9 }}
      >
        <motion.div
          className="header-scroll-progress"
          style={{ scaleX: smoothProgress, transformOrigin: '0% 50%' }}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuemin={0}
          aria-valuemax={100}
        />

        <div className="container header-container">
          <Link to="/" className="brand-lockup" aria-label="Tekmora Home">
            <TekmoraLogo height={28} />
          </Link>

          <nav className="desktop-nav-pill-dock" aria-label="Primary Navigation">
            {navLinks.map(link => {
              if (link.id === 'services') {
                return (
                  <div
                    key={link.id}
                    ref={servicesDropdownRef}
                    className={`nav-dropdown ${servicesOpen ? 'is-open' : ''} ${servicesActive ? 'nav-pill--active' : ''}`}
                  >
                    <button
                      type="button"
                      className={`nav-pill-item nav-dropdown-trigger ${servicesActive ? 'nav-pill--active' : ''}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => {
                        setServicesOpen(open => !open);
                        setWorkOpen(false);
                      }}
                    >
                      <span className="nav-pill-text">{link.label}</span>
                      <ChevronDown size={14} className="nav-dropdown-caret" aria-hidden="true" />
                    </button>
                    <div className="nav-dropdown-panel nav-dropdown-panel--services" role="menu">
                      <Link
                        to="/services"
                        className={`nav-dropdown-link nav-dropdown-link--overview ${location.pathname === '/services' ? 'is-active' : ''}`}
                        role="menuitem"
                      >
                        <strong>All services</strong>
                        <span>Overview of what we build</span>
                      </Link>
                      <div className="nav-dropdown-divider" aria-hidden="true" />
                      {SERVICES_DROPDOWN.map(item => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`nav-dropdown-link nav-dropdown-link--compact ${location.pathname === item.to ? 'is-active' : ''}`}
                          role="menuitem"
                        >
                          <strong>{item.label}</strong>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (link.id === 'work') {
                return (
                  <div
                    key={link.id}
                    ref={workDropdownRef}
                    className={`nav-dropdown ${workOpen ? 'is-open' : ''} ${workActive ? 'nav-pill--active' : ''}`}
                  >
                    <button
                      type="button"
                      className={`nav-pill-item nav-dropdown-trigger ${workActive ? 'nav-pill--active' : ''}`}
                      aria-expanded={workOpen}
                      aria-haspopup="true"
                      onClick={() => {
                        setWorkOpen(open => !open);
                        setServicesOpen(false);
                      }}
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
              if (link.id === 'services') {
                return (
                  <div key={link.id} className={`mobile-nav-group ${mobileServicesOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="mobile-nav-item mobile-nav-accordion"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => {
                        setMobileServicesOpen(open => !open);
                        setMobileWorkOpen(false);
                      }}
                    >
                      <span className="mobile-link-num font-mono">0{idx + 1}</span>
                      <span className="mobile-link-title">{link.label}</span>
                      <ChevronDown size={20} className="mobile-link-caret" aria-hidden="true" />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mobile-nav-submenu">
                        <Link
                          to="/services"
                          className="mobile-nav-item mobile-nav-subitem"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="mobile-link-title">All services</span>
                          <ArrowUpRight size={16} className="mobile-link-arrow" />
                        </Link>
                        {SERVICES_DROPDOWN.map(item => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="mobile-nav-item mobile-nav-subitem"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mobile-link-title">{item.label}</span>
                            <ArrowUpRight size={16} className="mobile-link-arrow" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.id === 'work') {
                return (
                  <div key={link.id} className={`mobile-nav-group ${mobileWorkOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="mobile-nav-item mobile-nav-accordion"
                      aria-expanded={mobileWorkOpen}
                      onClick={() => {
                        setMobileWorkOpen(open => !open);
                        setMobileServicesOpen(false);
                      }}
                    >
                      <span className="mobile-link-num font-mono">0{idx + 1}</span>
                      <span className="mobile-link-title">{link.label}</span>
                      <ChevronDown size={20} className="mobile-link-caret" aria-hidden="true" />
                    </button>
                    {mobileWorkOpen && (
                      <div className="mobile-nav-submenu">
                        {WORK_DROPDOWN.map(item => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="mobile-nav-item mobile-nav-subitem"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="mobile-link-title">{item.label}</span>
                            <ArrowUpRight size={16} className="mobile-link-arrow" />
                          </Link>
                        ))}
                      </div>
                    )}
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
