import React, { useState } from 'react';
import { SERVICES, type ServiceItem } from '../../../data/services';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import './ServicesSection.css';

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('01');
  const [expandedMobile, setExpandedMobile] = useState<Record<string, boolean>>({
    '01': true,
    '02': false,
    '03': false,
    '04': false,
    '05': false
  });

  const toggleMobile = (num: string) => {
    setExpandedMobile(prev => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section className="section services-section section-border-bottom" id="services">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">03</span>
          <span>// WHAT WE BUILD</span>
          <span className="meta-sep font-mono">5 CORE CAPABILITIES</span>
        </div>

        {/* Section Headline */}
        <div className="services-heading-block">
          <h2 className="section-title-large">
            ENGINEERING DISCIPLINES.<br />
            <span className="italic-accent">BUILT FOR REAL SCALE.</span>
          </h2>
          <p className="services-lead-desc">
            We don’t do generic software houses or one-size-fits-all templates. Every system is purpose-built to eliminate manual friction, connect fragmented operations, and perform with extreme reliability.
          </p>
        </div>

        {/* Large Editorial Rows List */}
        <div className="services-rows-container">
          {SERVICES.map((service: ServiceItem) => {
            const isActive = activeService === service.number;
            const isMobileOpen = expandedMobile[service.number];

            return (
              <div
                key={service.number}
                className={`service-editorial-row ${isActive ? 'row-active' : ''}`}
                onMouseEnter={() => setActiveService(service.number)}
              >
                {/* Collapsed Row Header */}
                <div
                  className="service-row-header"
                  onClick={() => toggleMobile(service.number)}
                >
                  <div className="service-number-col font-mono">
                    <span className="service-num">{service.number}</span>
                    <span className="service-dot"></span>
                  </div>

                  <div className="service-title-col">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-short-desc">{service.shortDesc}</p>
                  </div>

                  <div className="service-tech-col font-mono">
                    <div className="tech-tags-preview">
                      {service.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="mini-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="service-action-col">
                    <button className="row-toggle-btn" aria-label="Toggle Service Details">
                      <ChevronDown
                        size={18}
                        className={`mobile-chevron ${isMobileOpen ? 'rotate-180' : ''}`}
                      />
                      <ArrowUpRight size={18} className="desktop-arrow" />
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Drawer (Active State / Mobile Accordion) */}
                <div className={`service-drawer ${isMobileOpen ? 'drawer-open-mobile' : ''}`}>
                  <div className="drawer-inner-grid">
                    {/* Left: Deep Description & Deliverables */}
                    <div className="drawer-details">
                      <div className="drawer-desc-block">
                        <div className="drawer-label font-mono">SYSTEM SCOPE & DELIVERABLES</div>
                        <p className="drawer-detailed-text">{service.detailedDescription}</p>
                      </div>

                      <div className="deliverables-grid">
                        {service.deliverables.map(deliv => (
                          <div key={deliv} className="deliverable-item">
                            <span className="deliv-check"><Check size={12} /></span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Technical Spec Box */}
                    <div className="drawer-spec-box">
                      <div className="spec-header font-mono">
                        <span className="spec-title">SPECIFICATION MATRIX // {service.number}</span>
                        <span className="spec-status text-orange">VERIFIED</span>
                      </div>

                      <div className="spec-list">
                        {service.specSnippet.map((spec) => (
                          <div key={spec.label} className="spec-row font-mono">
                            <span className="spec-lbl">{spec.label}</span>
                            <span className="spec-val">{spec.details}</span>
                          </div>
                        ))}
                      </div>

                      <div className="spec-focus-block">
                        <div className="focus-lbl font-mono">CORE SYSTEM FOCUS</div>
                        <div className="focus-val font-mono">{service.systemFocus}</div>
                      </div>

                      <div className="drawer-action-row">
                        <a href="#contact" className="btn btn-sm btn-orange font-mono">
                          Discuss {service.title} Project ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
