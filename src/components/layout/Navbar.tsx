import React, { useEffect, useReducer, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useReducer((_: boolean, next: boolean) => next, false);
  const [scrolled, setScrolled] = useState(false);
  const [pktTime, setPktTime] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('tekmora-theme') === 'light' ? 'light' : 'dark';
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('tekmora-theme', theme);
  }, [theme]);

  // Live Pakistan Standard Time (PKT - UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setPktTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    // Route changes can also come from browser history, so this remains an intentional synchronization.
    // oxlint-disable-next-line react(set-state-in-effect)
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', href: '/case-study' },
    { label: 'Services', href: '/#services' },
    { label: 'Why Tekmora', href: '/#principles' },
    { label: 'Process', href: '/#process' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Founder', href: '/#founder' },
    { label: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-lockup" aria-label="Tekmora Home">
            <div className="brand-mark-wrapper">
              <span className="brand-title">Tekmora</span>
              <span className="brand-calibration-point"></span>
            </div>
            <span className="brand-sub-wordmark"></span>
          </Link>

          {/* Timezone and Calibration Status (Desktop) */}
          <div className="header-meta-status font-mono">
            <span className="live-pulse-dot"></span>
            <span className="status-label">PKT</span>
            <span className="status-clock">{pktTime || '13:00:00'}</span>
            <span className="status-divider">/</span>
            <span className="status-location">LAHORE, PK</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-mono"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
              >
                <span className="nav-link-text">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span className="theme-toggle-label font-mono">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
            </button>
            <a
              href="#contact"
              className="btn btn-sm btn-outline-cta font-mono"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                } else if (location.pathname === '/') {
                  e.preventDefault();
                  handleNavClick('/#contact');
                }
              }}
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="cta-icon" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Clean Mobile Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <div className="brand-mark-wrapper">
              <span className="brand-title">Tekmora</span>
              <span className="brand-calibration-point"></span>
            </div>
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
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-item"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <span className="mobile-link-num font-mono">0{idx + 1}</span>
                <span className="mobile-link-title">{link.label}</span>
                <ArrowUpRight size={20} className="mobile-link-arrow" />
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <div className="mobile-meta font-mono">
              <div>PAKISTAN — WORKING WORLDWIDE</div>
              <div className="text-orange">SOFTWARE, BUILT TO A BETTER STANDARD.</div>
            </div>
            <a
              href="#contact"
              className="btn btn-orange w-full font-mono mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  handleNavClick('/#contact');
                }
              }}
            >
              Start a project ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
