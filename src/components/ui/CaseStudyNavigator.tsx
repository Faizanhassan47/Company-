import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Check, ArrowUpRight } from 'lucide-react';
import './CaseStudyNavigator.css';

interface CaseStudyNavigatorProps {
  title: string;
  tagline: string;
}

export const CaseStudyNavigator: React.FC<CaseStudyNavigatorProps> = ({ title, tagline }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'features' | 'impact'>('overview');
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 400);

          const overviewEl = document.getElementById('overview');
          const featuresEl = document.getElementById('features');
          const impactEl = document.getElementById('impact');

          const scrollPos = window.scrollY + 250;

          if (impactEl && scrollPos >= impactEl.offsetTop) {
            setActiveSection('impact');
          } else if (featuresEl && scrollPos >= featuresEl.offsetTop) {
            setActiveSection('features');
          } else if (overviewEl && scrollPos >= overviewEl.offsetTop) {
            setActiveSection('overview');
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: tagline,
          url,
        });
        return;
      } catch {
        // Fallback to clipboard if share was dismissed/cancelled
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="case-study-nav-rail font-mono"
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Case study section navigator"
        >
          <div className="case-nav-links">
            <button
              type="button"
              className={`case-nav-item ${activeSection === 'overview' ? 'is-active' : ''}`}
              onClick={() => scrollTo('overview')}
            >
              <span>01</span>
              <span className="case-nav-text">Overview</span>
            </button>

            <button
              type="button"
              className={`case-nav-item ${activeSection === 'features' ? 'is-active' : ''}`}
              onClick={() => scrollTo('features')}
            >
              <span>02</span>
              <span className="case-nav-text">Features</span>
            </button>

            <button
              type="button"
              className={`case-nav-item ${activeSection === 'impact' ? 'is-active' : ''}`}
              onClick={() => scrollTo('impact')}
            >
              <span>03</span>
              <span className="case-nav-text">Impact</span>
            </button>
          </div>

          <div className="case-nav-sep" />

          <button
            type="button"
            className="case-share-btn"
            onClick={handleShare}
            aria-label="Share case study"
          >
            {copied ? <Check size={12} className="text-green" /> : <Share2 size={12} />}
            <span>{copied ? 'Copied' : 'Share'}</span>
            {!copied && <ArrowUpRight size={10} />}
          </button>

          {copied && (
            <motion.div
              className="case-share-toast"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
            >
              <Check size={11} />
              <span>Link copied to clipboard</span>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
