import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Precision Background Grid with Measurement Ticks */}
      <div className="hero-grid-pattern" aria-hidden="true">
        <svg className="hero-calibration-svg" width="100%" height="100%">
          <defs>
            <pattern id="calibrationGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.035)" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(255, 77, 28, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#calibrationGrid)" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Top Meta Bar */}
        <div className="hero-top-meta">
          <div className="meta-badge-group">
            <span className="calibration-dot"></span>
            <span className="hero-meta-label font-mono">Tekmora — SOFTWARE COMPANY</span>
          </div>

          <div className="hero-meta-right font-mono">
            <span className="coord-text">LOC // PAKISTAN (WORKING WORLDWIDE)</span>
            <span className="meta-sep">/</span>
            <span className="coord-text">STANDARD // TEKMORA</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div className="hero-headline-wrapper">
          <h1 className="hero-headline">
            <span className="headline-row">SOFTWARE, BUILT TO</span>
            <span className="headline-row">
              <span className="italic-accent">A BETTER STANDARD.</span>
            </span>
          </h1>
        </div>

        {/* Hero Interactive Calibration Diagram (Abstract System Layers) */}
        <div className="hero-system-diagram" aria-hidden="true">
          <div className="diagram-layer layer-1">
            <span className="layer-tag font-mono">01 // INTERFACE</span>
            <div className="layer-line"></div>
            <span className="layer-coord font-mono">X: 000.0</span>
          </div>
          <div className="diagram-layer layer-2">
            <span className="layer-tag font-mono">02 // ARCHITECTURE</span>
            <div className="layer-line"></div>
            <span className="layer-dot"></span>
            <span className="layer-coord font-mono">Y: 100.0</span>
          </div>
          <div className="diagram-layer layer-3">
            <span className="layer-tag font-mono">03 // ENTERPRISE ERP & DATA</span>
            <div className="layer-line"></div>
            <span className="layer-coord font-mono">Z: 200.0</span>
          </div>
        </div>

        {/* Bottom Split Layout: Supporting Copy & Dual CTAs */}
        <div className="hero-bottom-grid">
          <div className="hero-copy-column">
            <p className="hero-description">
              Tekmora designs and develops web platforms, mobile applications and enterprise systems for businesses with real operational challenges.
            </p>
            <div className="hero-capabilities-list font-mono">
              <span className="cap-item">Web Platforms</span>
              <span className="cap-dot">•</span>
              <span className="cap-item">Mobile Systems</span>
              <span className="cap-dot">•</span>
              <span className="cap-item">Enterprise Integrations</span>
              <span className="cap-dot">•</span>
              <span className="cap-item">SAP & GRN</span>
            </div>
          </div>

          <div className="hero-actions-column">
            <a href="#work" className="btn btn-primary hero-btn">
              <span>Explore our work</span>
              <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Start a project</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
