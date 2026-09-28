import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../../components/sections/Hero/HeroSection';
import { SEOHead } from '../../components/seo/SEOHead';

const SelectedWorkSection = lazy(() => import('../../components/sections/SelectedWork/SelectedWorkSection').then(m => ({ default: m.SelectedWorkSection })));
const ServicesSection = lazy(() => import('../../components/sections/Services/ServicesSection').then(m => ({ default: m.ServicesSection })));
const ProcessSection = lazy(() => import('../../components/sections/Process/ProcessSection').then(m => ({ default: m.ProcessSection })));
const WhyTekmoraSection = lazy(() => import('../../components/sections/WhyTekmora/WhyTekmoraSection').then(m => ({ default: m.WhyTekmoraSection })));
const TechStackSection = lazy(() => import('../../components/sections/TechStack/TechStackSection').then(m => ({ default: m.TechStackSection })));
const TestimonialsSection = lazy(() => import('../../components/sections/Testimonials/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const AboutPreviewSection = lazy(() => import('../../components/sections/AboutPreview/AboutPreviewSection').then(m => ({ default: m.AboutPreviewSection })));
const ProjectInquirySection = lazy(() => import('../../components/sections/ProjectInquiry/ProjectInquirySection').then(m => ({ default: m.ProjectInquirySection })));

export const HomePage: React.FC = () => {
  return (
    <main className="home-page" id="main-content">
      <SEOHead
        title="Tekmora Solution | Software Engineering for Startups & Businesses"
        description="Tekmora designs and develops custom software, web applications, mobile products, and SaaS platforms from idea to production."
        canonical="https://tekmorasolution.com/"
      />
      
      {/* 01: Hero & Technology / Trust Strip */}
      <HeroSection />

      <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', fontFamily: 'monospace' }}>Loading section...</div>}>
        {/* 02: Selected Work / Portfolio */}
        <SelectedWorkSection />

        {/* 03: Services */}
        <ServicesSection />

        {/* 04: Development Process */}
        <ProcessSection />

        {/* 05: Why Tekmora */}
        <WhyTekmoraSection />

        {/* 06: Technology Stack */}
        <TechStackSection />

        {/* 07: Testimonials */}
        <TestimonialsSection />

        {/* 08: About Studio & Human Presence */}
        <AboutPreviewSection />

        {/* 09: Final CTA & Start a Project Qualifier */}
        <ProjectInquirySection />
      </Suspense>
    </main>
  );
};

export default HomePage;
