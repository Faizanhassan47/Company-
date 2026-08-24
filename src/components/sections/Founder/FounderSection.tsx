import React from 'react';
import { ArrowUpRight, MapPin, CheckCircle2, Award, Terminal } from 'lucide-react';
import './FounderSection.css';

export const FounderSection: React.FC = () => {
  return (
    <section className="section founder-section section-border-bottom" id="founder">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">08</span>
          <span>// FOUNDER-LED & HUMAN</span>
          <span className="meta-sep font-mono">DIRECT TECHNICAL ENGAGEMENT</span>
        </div>

        {/* Section Main Grid */}
        <div className="founder-grid">
          {/* Left: Editorial Portrait & Verification Card */}
          <div className="founder-card">
            <div className="founder-badge font-mono">
              <span className="calibration-dot"></span>
              <span>FOUNDER & PRINCIPAL ENGINEER</span>
            </div>

            {/* Graphic Portrait Avatar */}
            <div className="founder-portrait-frame">
              <div className="portrait-inner">
                <div className="portrait-monogram font-display">MF</div>
                <div className="portrait-specs font-mono">
                  <div className="spec-item">
                    <span className="spec-dot"></span>
                    <span>MUHAMMAD FAIZAN</span>
                  </div>
                  <div className="spec-item text-dim">FULL-STACK & MOBILE LEAD</div>
                </div>
              </div>
            </div>

            {/* Quick Stats / Meta */}
            <div className="founder-meta-strip font-mono">
              <div className="f-meta-item">
                <span className="f-lbl">LOCATION</span>
                <span className="f-val">
                  <MapPin size={12} className="text-orange" /> Pakistan (Remote Worldwide)
                </span>
              </div>
              <div className="f-meta-item">
                <span className="f-lbl">PRIMARY DISCIPLINE</span>
                <span className="f-val">React, React Native, Node, SAP B1</span>
              </div>
              <div className="f-meta-item">
                <span className="f-lbl">ENGAGEMENT MODEL</span>
                <span className="f-val text-green">
                  <CheckCircle2 size={12} /> Founder-Led Development
                </span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="founder-links-row">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm font-mono w-full"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="mailto:contact@tekmora.com"
                className="btn btn-orange btn-sm font-mono w-full"
              >
                <span>Direct Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Narrative Philosophy & Direct Working Model */}
          <div className="founder-narrative">
            <h2 className="section-title-large">
              SMALL BY DESIGN.<br />
              <span className="italic-accent">SERIOUS ABOUT THE WORK.</span>
            </h2>

            <div className="founder-bio-paragraphs">
              <p className="bio-lead">
                Tekmora is led by <strong>Muhammad Faizan</strong>, a full-stack and mobile engineer based in Pakistan working with organizations internationally.
              </p>
              <p>
                We do not pass your project through account managers, junior sub-contractors, or sales intermediaries. When you work with Tekmora, you communicate directly with the engineer who architects your database, writes your API contracts, and tests your production edge cases.
              </p>
              <p>
                We work closely with clients to understand difficult workflows, shape practical systems, and build software that can continue improving long after launch.
              </p>
            </div>

            {/* Direct Commitments Checklist */}
            <div className="founder-commitments-grid">
              <div className="commitment-card">
                <div className="c-head font-mono">
                  <Terminal size={14} className="text-orange" />
                  <span>DIRECT TECHNICAL DIALOGUE</span>
                </div>
                <p className="c-desc">
                  No sales scripts. We talk directly about your data schemas, integrations, and user pain points from day one.
                </p>
              </div>

              <div className="commitment-card">
                <div className="c-head font-mono">
                  <Award size={14} className="text-orange" />
                  <span>HONEST TECHNICAL STANDARDS</span>
                </div>
                <p className="c-desc">
                  If a problem is better solved with a simpler tool, we say so. We prioritize your business success over billable bloat.
                </p>
              </div>
            </div>

            <div className="founder-availability-alert font-mono">
              <span className="dot dot-green"></span>
              <span>CURRENT STATUS: ACCEPTING SELECT CLIENT ENGAGEMENTS FOR Q3/Q4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
