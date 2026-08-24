import React, { useState, useEffect } from 'react';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 1600; // ms
    const intervalTime = 25;
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
            }, 500);
          }, 200);
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
        {/* Brand Mark */}
        <div className="preloader-brand">
          <span className="preloader-title">Tekmora</span>
          <span className="preloader-dot"></span>
        </div>

        <div className="preloader-subtext font-mono">Tekmora.</div>

        {/* Calibration Progress Bar */}
        <div className="preloader-calibration-track">
          <div
            className="preloader-calibration-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Counter & Coordinates */}
        <div className="preloader-meta font-mono">
          <div className="preloader-metric">
            <span className="meta-label">CALIBRATING STANDARD</span>
            <span className="meta-value text-orange">{Math.round(progress)}%</span>
          </div>
          <div className="preloader-coord">PK // 24.8607° N, 67.0011° E</div>
        </div>
      </div>
    </div>
  );
};
