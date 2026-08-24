import React, { useEffect, useState, useRef } from 'react';
import './ManifestoSection.css';

export const ManifestoSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section manifesto-section section-border-bottom" ref={sectionRef} id="manifesto">
      <div className="container">
        {/* Numbered Meta Tag */}
        <div className="section-meta">
          <span className="section-number">02</span>
          <span>// BRAND MANIFESTO</span>
        </div>

        {/* Big Editorial Statement */}
        <div className="manifesto-header-block">
          <h2 className="manifesto-heading">
            COMPLEX SYSTEMS.<br />
            CLEAR PRODUCTS.<br />
            <span className="italic-accent">A BETTER STANDARD.</span>
          </h2>
        </div>

        {/* Animated Measurement Calibration Line */}
        <div className="manifesto-calibration-wrapper">
          <div className="manifesto-scale-ticks">
            <span className="tick">0.00</span>
            <span className="tick">0.25</span>
            <span className="tick">0.50</span>
            <span className="tick">0.75</span>
            <span className="tick">1.00 (TEKMORA)</span>
          </div>

          <div className="manifesto-progress-track">
            <div
              className="manifesto-progress-indicator"
              style={{ width: `${scrollProgress * 100}%` }}
            >
              <span className="progress-needle-dot"></span>
            </div>
          </div>
        </div>

        {/* Narrative Copy Split */}
        <div className="manifesto-copy-grid">
          <div className="manifesto-lead-quote">
            <p className="lead-text">
              “Complex behind the scenes. Simple where it matters.”
            </p>
            <div className="quote-origin font-mono">
              <span>FOUNDING PHILOSOPHY</span>
              <span className="origin-sep">/</span>
              <span>MUHAMMAD FAIZAN</span>
            </div>
          </div>

          <div className="manifesto-body-column">
            <p className="manifesto-body-text">
              We work on products where understanding the problem matters more than choosing the trendiest technology. That might mean building a mobile application, connecting several business systems or turning a complicated workflow into one understandable platform.
            </p>
            <p className="manifesto-body-subtext">
              We do not treat engineering as an isolated craft. Every line of code exists to remove operational drag, empower real technicians and business operators, and deliver software that works consistently on ordinary business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
