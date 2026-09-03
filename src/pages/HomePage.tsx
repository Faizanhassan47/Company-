import React from 'react';
import {
  HeroSection,
  PhilosophySection,
  ServicesSection,
  BusinessProblemsSection,
  TechRadarSection,
  ProcessSection,
  ProcurementFAQSection,
  TrustEcosystemSection,
  ContactSection
} from '../components/sections';
import { ProjectEstimator } from '../components/ui/ProjectEstimator';
import { SEOHead } from '../components/seo/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <main className="home-page" id="main-content">
      <SEOHead
        title="Tekmora | Custom Web, Mobile and Enterprise Software Engineering"
        description="Tekmora builds custom web platforms, mobile applications, enterprise ERP portals, warehouse systems and SAP Business One integrations."
        canonical="https://tekmora.com/"
      />
      {/* 01: Grounded Engineering Hero */}
      <HeroSection />

      {/* 02: Core Engineering Principles */}
      <PhilosophySection />

      {/* 03: 6 Specialized Engineering Disciplines */}
      <ServicesSection />

      {/* 04: Operational Challenges & Problems We Solve */}
      <BusinessProblemsSection />

      {/* 05: Concrete Technology & Protocol Radar */}
      <TechRadarSection />

      {/* 06: How We Deliver (4-Stage Engineering Process) */}
      <ProcessSection />

      {/* 07: Transparent Procurement, IP Ownership & Security FAQ */}
      <ProcurementFAQSection />

      {/* 08: Security & Compliance Trust Center */}
      <TrustEcosystemSection />

      {/* 09: Interactive ROI & Project Estimator */}
      <section className="section-border-bottom" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>PROJECT SCOPE CALCULATOR</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Use our interactive architecture estimator to instantly calculate the complexity, timeline, and investment required for your system.</p>
          </div>
          <ProjectEstimator onApplyEstimates={() => {
            // Scroll to contact form
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>
      </section>

      {/* 10: Direct Technical Consultation & Inquiry Form */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};

