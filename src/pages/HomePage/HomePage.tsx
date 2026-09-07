import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../../components/sections/Hero/HeroSection';
import { LogoCloudSection } from '../../components/sections/LogoCloud/LogoCloudSection';
import { MetricsSection } from '../../components/sections/Metrics/MetricsSection';
import { SEOHead } from '../../components/seo/SEOHead';

const BusinessProblemsSection = lazy(() => import('../../components/sections/BusinessProblems/BusinessProblemsSection').then(m => ({ default: m.BusinessProblemsSection })));
const CapabilitiesMapSection = lazy(() => import('../../components/sections/CapabilitiesMap/CapabilitiesMapSection').then(m => ({ default: m.CapabilitiesMapSection })));
const IndustriesSection = lazy(() => import('../../components/sections/Industries/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const PhilosophySection = lazy(() => import('../../components/sections/Philosophy/PhilosophySection').then(m => ({ default: m.PhilosophySection })));
const SelectedWorkSection = lazy(() => import('../../components/sections/SelectedWork/SelectedWorkSection').then(m => ({ default: m.SelectedWorkSection })));
const ArchitectureFlowchartSection = lazy(() => import('../../components/sections/ArchitectureFlowchart/ArchitectureFlowchartSection').then(m => ({ default: m.ArchitectureFlowchartSection })));
const ProcessApproachSection = lazy(() => import('../../components/sections/ProcessApproach/ProcessApproachSection').then(m => ({ default: m.ProcessApproachSection })));
const SystemIntegrationSection = lazy(() => import('../../components/sections/SystemIntegration/SystemIntegrationSection').then(m => ({ default: m.SystemIntegrationSection })));
const ProjectInquirySection = lazy(() => import('../../components/sections/ProjectInquiry/ProjectInquirySection').then(m => ({ default: m.ProjectInquirySection })));
const OperationalAssuranceSection = lazy(() => import('../../components/sections/OperationalAssurance/OperationalAssuranceSection').then(m => ({ default: m.OperationalAssuranceSection })));
const ServiceMatrixSection = lazy(() => import('../../components/sections/ServiceMatrix/ServiceMatrixSection').then(m => ({ default: m.ServiceMatrixSection })));
const InteractiveScopeCalculatorSection = lazy(() => import('../../components/sections/InteractiveCalculator/InteractiveScopeCalculatorSection').then(m => ({ default: m.InteractiveScopeCalculatorSection })));

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

      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
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
      </Suspense>
    </main>
  );
};
