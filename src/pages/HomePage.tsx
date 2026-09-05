import React from 'react';
import {
  HeroSection,
  BusinessProblemsSection,
  LogoCloudSection,
  MetricsSection,
  CapabilitiesMapSection,
  IndustriesSection,
  PhilosophySection,
  SelectedWorkSection,
  ArchitectureFlowchartSection,
  ProcessApproachSection,
  SystemIntegrationSection,
  ProjectInquirySection,
  OperationalAssuranceSection,
  ServiceMatrixSection,
  InteractiveScopeCalculatorSection
} from '../components/sections';
import { SEOHead } from '../components/seo/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <main className="home-page" id="main-content">
      <SEOHead
        title="Tekmora | Enterprise Software Engineering & Operational Systems"
        description="Tekmora engineers robust operational software—connecting inventory, dispatch, ERPs, and custom workflows into unified enterprise platforms."
        canonical="https://tekmorasolution.com/"
      />
      
      {/* 01: Hero */}
      <HeroSection />

      {/* 02: Credibility / Trust */}
      <LogoCloudSection />

      {/* 03: Results / Numbers */}
      <MetricsSection />

      {/* 03.5: Process / Approach (Moved to 09) */}

      {/* 04: Problems We Solve (Problem -> Solution) */}
      <BusinessProblemsSection />

      {/* 05: Services (Matrix) */}
      <ServiceMatrixSection />

      {/* 05.5: Operational Assurance */}
      <OperationalAssuranceSection />

      {/* 06: Featured Case Studies */}
      <SelectedWorkSection />

      {/* 07: Enterprise Capabilities Map */}
      <CapabilitiesMapSection />

      {/* 07.5: Technical Architecture Flowchart */}
      <ArchitectureFlowchartSection />

      {/* 08: Industries */}
      <IndustriesSection />

      {/* 09: System Thinking / How We Engineer */}
      <ProcessApproachSection />

      {/* 10: Integrations */}
      <SystemIntegrationSection />

      {/* 11: Why Tekmora (Philosophy) */}
      <PhilosophySection />

      {/* 11.5: Interactive Calculator */}
      <InteractiveScopeCalculatorSection />

      {/* 12: Final CTA (Contact / Inquiry) */}
      <div id="contact">
        <ProjectInquirySection />
      </div>
    </main>
  );
};
