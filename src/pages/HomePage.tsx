import React from 'react';
import {
  HeroSection,
  ManifestoSection,
  ServicesSection,
  SelectedWorkSection,
  WhyTekmoraSection,
  ProcessSection,
  CapabilitiesSection,
  FounderSection,
  ContactSection
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <SelectedWorkSection />
      <WhyTekmoraSection />
      <ProcessSection />
      <CapabilitiesSection />
      <FounderSection />
      <ContactSection />
    </main>
  );
};
