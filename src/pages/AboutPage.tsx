import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, ShieldCheck, Code2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { TrustEcosystemSection } from '../components/sections/TrustEcosystem/TrustEcosystemSection';
import { TestimonialsSection } from '../components/sections/Testimonials/TestimonialsSection';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page" id="main-content">
      <SEOHead
        title="About Tekmora | Custom Software Engineering Company"
        description="Tekmora is a focused custom software engineering company operating globally and working worldwide, building web, mobile and enterprise systems around real operational workflows."
        canonical="https://tekmora.com/about"
      />

      {/* Hero */}
      <section className="about-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// COMPANY IDENTITY</span>
            <span className="meta-sep font-mono">POSITIONING & PHILOSOPHY</span>
          </div>

          <div className="about-hero-grid">
            <div className="about-hero-text">
              <h1 className="about-title font-display">
                BUILT AROUND<br />
                <span className="italic-accent">THE WORK.</span>
              </h1>

              <div className="about-lead-block">
                <p className="lead-highlight">
                  Tekmora is a focused software development company building web, mobile and enterprise products for real operational environments.
                </p>
                <p>
                  We begin by understanding how the business works, where existing processes fail and what users need to complete their work reliably.
                </p>
                <p>
                  Our goal is not to add technology where it is unnecessary. It is to create a clear, maintainable system that solves the right problem.
                </p>
              </div>
            </div>

            <div className="about-hero-photo-card spotlight-card">
              <img
                src="/images/code-screen.jpg"
                alt="Tekmora Modern Code Editor & Architecture"
                className="about-code-img"
              />
              <div className="about-photo-glass font-mono">
                <div className="about-glass-tag">
                  <Code2 size={12} className="text-orange" />
                  <span>DETERMINISTIC CODEBASE</span>
                </div>
                <div className="about-glass-sub">TypeScript • React • Node.js • Express • SAP B1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certified Telemetry Ecosystem Strip */}
      <TrustEcosystemSection />

      {/* Location & Operating Standard */}
      <section className="about-location-strip section section-border-top section-border-bottom">
        <div className="container">
          <div className="location-split-grid font-mono">
            <div className="loc-box spotlight-card">
              <div className="loc-head">
                <Globe size={16} className="text-orange" />
                <span>GLOBAL REACH</span>
              </div>
              <div className="loc-main font-display">WORLDWIDE</div>
              <div className="loc-sub">Deep full-stack engineering, system integration, and mobile architecture.</div>
            </div>

            <div className="loc-box spotlight-card">
              <div className="loc-head">
                <MapPin size={16} className="text-orange" />
                <span>DISTRIBUTED ENGINEERING</span>
              </div>
              <div className="loc-main font-display">TIMEZONE ALIGNED</div>
              <div className="loc-sub">Serving international commercial, manufacturing, logistics, and digital enterprises.</div>
            </div>

            <div className="loc-box spotlight-card">
              <div className="loc-head">
                <ShieldCheck size={16} className="text-green" />
                <span>OPERATING STANDARD</span>
              </div>
              <div className="loc-main font-display">ZERO JARGON</div>
              <div className="loc-sub">Clear technical decisions, direct communication, and documented architectures.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy & Core Tenets */}
      <section className="section about-tenets-section section-border-bottom">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">02</span>
            <span>// BRAND PHILOSOPHY</span>
          </div>

          <h2 className="about-subhead font-display">COMPLEX BEHIND THE SCENES. SIMPLE WHERE IT MATTERS.</h2>

          <div className="tenets-grid">
            <div className="tenet-card">
              <span className="tenet-num font-mono text-orange">01</span>
              <h3 className="tenet-title font-display">We like solving the difficult parts.</h3>
              <p className="tenet-desc">
                When spreadsheets become unmanageable, when warehouse docks bottleneck, or when field technicians need reliable tools in basements with zero cellular reception—that is where we do our best work.
              </p>
            </div>

            <div className="tenet-card">
              <span className="tenet-num font-mono text-orange">02</span>
              <h3 className="tenet-title font-display">Every project begins with understanding.</h3>
              <p className="tenet-desc">
                We never start by pushing a predetermined technology stack. We study user habits, edge-case exceptions, and system handoffs first. Software must fit the business, not vice-versa.
              </p>
            </div>

            <div className="tenet-card">
              <span className="tenet-num font-mono text-orange">03</span>
              <h3 className="tenet-title font-display">Built for real workflows and real users.</h3>
              <p className="tenet-desc">
                Real software is used by busy operators, warehouse clerks in gloves, and mobile teams under time pressure. Ergonomic touch targets, fast keyboard shortcuts, and instant feedback are foundational.
              </p>
            </div>

            <div className="tenet-card">
              <span className="tenet-num font-mono text-orange">04</span>
              <h3 className="tenet-title font-display">Small by design. Serious about the work.</h3>
              <p className="tenet-desc">
                We maintain an agile, focused structure without middle-management bloat. When you work with Tekmora, you communicate directly with the engineers building your platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities & Stack Overview */}
      <section className="section about-stack-section section-border-bottom">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">03</span>
            <span>// TECHNICAL FOUNDATIONS</span>
          </div>

          <h2 className="about-subhead font-display">THE TEKMORA TECHNOLOGY OVERVIEW</h2>

          <div className="about-stack-table-card font-mono">
            <div className="stack-table-row">
              <span className="st-layer">CLIENT & INTERFACE</span>
              <span className="st-tools">React, Next.js (SSR / SSG), React Native, Expo, Tailwind CSS, TypeScript</span>
            </div>
            <div className="stack-table-row">
              <span className="st-layer">APIS & BACKEND</span>
              <span className="st-tools">Node.js, Express, REST APIs, WebSockets, PHP 8.x, JWT Authentication</span>
            </div>
            <div className="stack-table-row">
              <span className="st-layer">DATABASE & PERSISTENCE</span>
              <span className="st-tools">Microsoft SQL Server, PostgreSQL, MongoDB, SQLite (Mobile Offline), Redis</span>
            </div>
            <div className="stack-table-row">
              <span className="st-layer">ERP & INTEGRATIONS</span>
              <span className="st-tools">SAP Business One Service Layer, DI API, OCR Document Ingestion, Thermal Print Protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Outcomes & Testimonials */}
      <TestimonialsSection />

      {/* Contact CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h2 className="about-cta-title font-display">
              HAVE AN OPERATIONAL SYSTEM<br />
              <span className="italic-accent">TO DESIGN OR BUILD?</span>
            </h2>
            <p className="about-cta-lead">
              No sales script—tell us what you are trying to build and what problems need solving.
            </p>
            <Link to="/contact" className="btn btn-orange btn-lg font-mono">
              <span>START A PROJECT INQUIRY ↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
