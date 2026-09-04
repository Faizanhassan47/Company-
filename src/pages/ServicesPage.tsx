import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Cpu, Filter } from 'lucide-react';
import { SERVICES_DATA, type ServiceDetail } from '../data/services';
import { SEOHead } from '../components/seo/SEOHead';
import { ServiceMarketMatrix } from '../components/sections/Services/ServiceMarketMatrix';
import { TechRadarSection } from '../components/sections/TechRadar/TechRadarSection';
import { ProcurementFAQSection } from '../components/sections/ProcurementFAQ/ProcurementFAQSection';
import { EngagementModelsSection } from '../components/sections/EngagementModels/EngagementModelsSection';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines', count: SERVICES_DATA.length },
    { id: 'ai-automation', label: 'AI & Automation', count: SERVICES_DATA.filter(s => s.category === 'ai-automation').length },
    { id: 'saas-modernization', label: 'SaaS & Modernization', count: SERVICES_DATA.filter(s => s.category === 'saas-modernization').length },
    { id: 'enterprise-cloud', label: 'Enterprise & DevOps', count: SERVICES_DATA.filter(s => s.category === 'enterprise-cloud').length },
    { id: 'security-systems', label: 'Security & Rescue', count: SERVICES_DATA.filter(s => s.category === 'security-systems').length },
  ];

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES_DATA;
    return SERVICES_DATA.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="services-page" id="main-content">
      <SEOHead
        title="Engineering Services & Market Capabilities | Tekmora"
        description="Tekmora builds custom web platforms, AI workflow automations, autonomous agent systems, multi-tenant SaaS, enterprise ERP portals, and warehouse systems."
        canonical="https://tekmora.com/services"
      />

      {/* Hero */}
      <section className="services-page-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number font-mono">01</span>
            <span>// CORE ENGINEERING DISCIPLINES</span>
            <span className="meta-sep font-mono">FULL-LIFECYCLE SOFTWARE SERVICES</span>
          </div>

          <h1 className="services-page-title font-display">
            CUSTOM SOFTWARE<br />
            <span className="italic-accent">BUILT FOR REAL OPERATIONS.</span>
          </h1>

          <p className="services-page-lead">
            We don’t resell generic software packages or skin pre-made templates. We engineer bespoke platforms, autonomous AI workflows, multi-tenant SaaS platforms, and enterprise integrations that fit the exact way your business functions.
          </p>

          <div className="services-hero-anchors font-mono">
            <a href="#market-matrix" className="hero-anchor-link">
              <span>View Market Attractiveness Matrix</span>
              <ArrowUpRight size={13} />
            </a>
            <span className="anchor-sep">/</span>
            <a href="#services-catalog" className="hero-anchor-link">
              <span>Explore Technical Specifications ({SERVICES_DATA.length})</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* 02: Market Attractiveness & Strategy Matrix (From User Roadmap) */}
      <ServiceMarketMatrix />

      {/* 03: Comprehensive Services Directory */}
      <section className="services-directory-section section section-border-top" id="services-catalog">
        <div className="container">
          <div className="directory-header-row">
            <div>
              <div className="section-meta">
                <span className="section-number font-mono">03</span>
                <span>// DETAILED TECHNICAL SPECIFICATIONS</span>
                <span className="meta-sep font-mono">PRODUCTION SPECIFICATIONS</span>
              </div>
              <h2 className="directory-title font-display">
                ENGINEERING DISCIPLINES CATALOG.
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="services-category-tabs font-mono">
              <div className="tabs-label">
                <Filter size={13} className="text-orange" />
                <span>FILTER:</span>
              </div>
              <div className="tabs-list">
                {filterTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`cat-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                  >
                    <span>{tab.label}</span>
                    <span className="tab-count font-mono">{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Cards Stack */}
          <div className="services-cards-stack">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service: ServiceDetail) => (
                <motion.article 
                  className="service-detail-card spotlight-card" 
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="service-card-left">
                    <div className="service-meta-top font-mono">
                      <span className="text-orange">SERVICE {service.number}</span>
                      <span className="meta-sep">/</span>
                      <span className="service-cat-pill">{service.category?.toUpperCase() || 'CORE'}</span>
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
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <EngagementModelsSection />

      {/* Production Technology Radar Matrix */}
      <TechRadarSection />

      {/* Enterprise Procurement & Security FAQ */}
      <ProcurementFAQSection />
    </main>
  );
};
