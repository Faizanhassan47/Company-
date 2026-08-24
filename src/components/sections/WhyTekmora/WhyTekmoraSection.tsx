import React, { useState } from 'react';
import { PRINCIPLES, type Principle } from '../../../data/principles';
import './WhyTekmoraSection.css';

export const WhyTekmoraSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section className="section why-section section-border-bottom" id="principles">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">05</span>
          <span>// WHY TEKMORA</span>
          <span className="meta-sep font-mono">4 OPERATIONAL PILLARS</span>
        </div>

        {/* Headline */}
        <div className="why-heading-block">
          <h2 className="section-title-large">
            THE STANDARD IS<br />
            <span className="italic-accent">HOW WE WORK.</span>
          </h2>
          <p className="why-lead-desc">
            The Tekmora standard represents measurement, alignment, and uncompromising quality. We apply this standard through every stage of software engineering.
          </p>
        </div>

        {/* Interactive Calibration Scale Bar */}
        <div className="principles-calibration-scale">
          <div className="scale-track-line">
            <div
              className="scale-active-fill"
              style={{ width: `${(selectedIdx / (PRINCIPLES.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="scale-nodes-row">
            {PRINCIPLES.map((p: Principle, idx: number) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={p.number}
                  className={`scale-node-btn ${isSelected ? 'node-selected' : ''}`}
                  onClick={() => setSelectedIdx(idx)}
                  aria-label={`Select Principle ${p.number}: ${p.title}`}
                >
                  <span className="node-pip"></span>
                  <span className="node-number font-mono">{p.number}</span>
                  <span className="node-title-short font-mono">{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Principles Grid */}
        <div className="principles-grid">
          {PRINCIPLES.map((principle: Principle, idx: number) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={principle.number}
                className={`principle-card ${isSelected ? 'principle-highlighted' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                <div className="principle-top-row">
                  <span className="p-num font-mono">{principle.number}</span>
                  <span className="p-calibration-tag font-mono">
                    {principle.calibrationPoint}
                  </span>
                </div>

                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-statement">{principle.statement}</p>
                <p className="principle-elaboration">{principle.elaboration}</p>

                <div className="principle-status-indicator">
                  <span className="calibration-dot"></span>
                  <span className="indicator-text font-mono">STANDARD APPLIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
