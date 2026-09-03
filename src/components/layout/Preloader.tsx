import React, { useState, useEffect } from 'react';
import { TekmoraLogo } from '../ui/TekmoraLogo';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const duration = 1100; // ~1.1s
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 300);
          }, 150);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isExiting ? 'preloader-exit' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        {/* Brand Mark with Official tk symbol */}
        <div className="preloader-brand">
          <TekmoraLogo height={48} theme="dark" />
        </div>

        {/* Calibration Progress Bar */}
        <div className="preloader-calibration-track">
          <div
            className="preloader-calibration-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Counter & Status */}
        <div className="preloader-meta font-mono">
          <div className="preloader-metric">
            <span className="meta-label">SYSTEM INITIALIZATION</span>
            <span className="meta-value text-orange">{Math.round(progress)}%</span>
          </div>
          <div className="preloader-coord">GLOBAL // WORKING WORLDWIDE</div>
        </div>
      </div>
    </div>
  );
};
