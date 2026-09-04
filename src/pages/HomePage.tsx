import React from 'react';
import {
  HeroSection,
  ServicesSection,
  BusinessProblemsSection,
  ContactSection,
  LogoCloudSection,
  MetricsSection,
  CapabilitiesMapSection,
  IndustriesSection,
  IntegrationsSection,
  WhyTekmoraSection,
  PhilosophySection,
  SelectedWorkSection
} from '../components/sections';
import { SEOHead } from '../components/seo/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <main className="home-page" id="main-content">
      <SEOHead
        title="Tekmora | Enterprise Software Engineering & Operational Systems"
        description="Tekmora engineers robust operational software—connecting inventory, dispatch, ERPs, and custom workflows into unified enterprise platforms."
        canonical="https://tekmora.com/"
      />
      
      {/* 01: Hero */}
      <HeroSection />

      {/* 02: Credibility / Trust */}
      <LogoCloudSection />

      {/* 03: Results / Numbers */}
      <MetricsSection />

      {/* 04: Problems We Solve (Problem -> Solution) */}
      <BusinessProblemsSection />

      {/* 05: Services (Matrix) */}
      <ServicesSection />

      {/* 06: Featured Case Studies */}
      <SelectedWorkSection />

      {/* 07: Enterprise Capabilities Map */}
      <CapabilitiesMapSection />

      {/* 08: Industries */}
      <IndustriesSection />

      {/* 09: System Thinking / How We Engineer */}
      <WhyTekmoraSection />

      {/* 10: Integrations */}
      <IntegrationsSection />

      {/* 11: Why Tekmora (Philosophy) */}
      <PhilosophySection />

      {/* 12: Final CTA (Contact) */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};
