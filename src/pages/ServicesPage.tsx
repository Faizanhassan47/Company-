import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';
import { SERVICES_DATA, type ServiceDetail } from '../data/services';
import { SEOHead } from '../components/seo/SEOHead';
import { TechRadarSection } from '../components/sections/TechRadar/TechRadarSection';
import { ProcurementFAQSection } from '../components/sections/ProcurementFAQ/ProcurementFAQSection';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  return (
    <main className="services-page" id="main-content">
      <SEOHead
        title="Custom Software Engineering Services | Tekmora"
        description="Tekmora builds custom web platforms, React Native mobile apps, enterprise ERP portals, SAP Business One integrations, and warehouse management systems."
        canonical="https://tekmora.com/services"
      />

      {/* Hero */}
      <section className="services-page-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// CORE ENGINEERING SERVICES</span>
            <span className="meta-sep font-mono">6 SPECIALIZED DISCIPLINES</span>
          </div>

          <h1 className="services-page-title font-display">
            CUSTOM SOFTWARE<br />
            <span className="italic-accent">BUILT FOR REAL OPERATIONS.</span>
          </h1>

          <p className="services-page-lead">
            We don’t resell generic software packages or skin pre-made templates. We engineer bespoke platforms, mobile applications, and enterprise integrations that fit the exact way your organization operates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-directory-section section section-border-top">
        <div className="container">
          <div className="services-cards-stack">
            {SERVICES_DATA.map((service: ServiceDetail) => (
              <article className="service-detail-card spotlight-card" key={service.slug}>
                <div className="service-card-left">
                  <div className="service-meta-top font-mono">
                    <span className="text-orange">SERVICE {service.number}</span>
                    <span className="meta-sep">/</span>
                    <span>{service.primaryTopic}</span>
                  </div>

                  <h2 className="service-card-title font-display">
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </h2>

                  <p className="service-card-desc">{service.overview}</p>

                  <div className="service-card-capabilities">
                    {service.keyCapabilities.slice(0, 3).map(cap => (
                      <div key={cap.title} className="cap-item">
                        <CheckCircle2 size={14} className="text-orange cap-icon" />
                        <div>
                          <strong>{cap.title}:</strong> {cap.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-card-action font-mono">
                    <Link to={`/services/${service.slug}`} className="btn btn-sm btn-orange">
                      <span>VIEW FULL {service.title.toUpperCase()} SPECIFICATION</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="service-card-right">
                  <div className="service-spec-panel font-mono">
                    <div className="panel-header">
                      <Cpu size={14} className="text-orange" />
                      <span>PRODUCTION TECH STACK</span>
                    </div>

                    <div className="panel-tech-groups">
                      {service.technicalStack.map(group => (
                        <div key={group.category} className="tech-grp">
                          <span className="grp-label">{group.category}:</span>
                          <span className="grp-items">{group.items.join(', ')}</span>
                        </div>
                      ))}
                    </div>

                    <div className="panel-footer">
                      <span className="footer-status text-green">● ARCHITECTURE TESTED</span>
                      <Link to={`/services/${service.slug}`} className="panel-link">
                        <span>Read FAQs</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Production Technology Radar Matrix */}
      <TechRadarSection />

      {/* Enterprise Procurement & Security FAQ */}
      <ProcurementFAQSection />
    </main>
  );
};

