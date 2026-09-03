import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { initAnalytics } from '../../utils/analytics';
import './CookieBanner.css';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tekmora_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly so it doesn't interrupt initial page load animations
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tekmora_cookie_consent', 'granted');
    setIsVisible(false);
    // Initialize analytics immediately upon consent
    initAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('tekmora_cookie_consent', 'denied');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cookie-banner-overlay"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="cookie-banner-content">
            <div className="cookie-banner-info">
              <div className="cookie-banner-title font-mono">
                <ShieldCheck size={16} className="text-orange" />
                <span>DATA PRIVACY & ANALYTICS</span>
              </div>
              <p className="cookie-banner-text">
                Tekmora uses minimal tracking cookies to measure site performance and understand technical engagement. We prioritize your privacy and do not sell data.
              </p>
            </div>
            <div className="cookie-banner-actions font-mono">
              <button className="btn btn-secondary btn-sm" onClick={handleDecline}>
                DECLINE
              </button>
              <button className="btn btn-orange btn-sm" onClick={handleAccept}>
                ACCEPT & CONTINUE
              </button>
              <button 
                className="cookie-close-btn" 
                onClick={handleDecline} 
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
