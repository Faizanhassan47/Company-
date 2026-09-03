import React from 'react';
import { ContactSection } from '../components/sections/Contact/ContactSection';
import { SEOHead } from '../components/seo/SEOHead';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  return (
    <main className="standalone-contact-page" id="main-content">
      <SEOHead
        title="Contact Tekmora | Start a Software Project"
        description="Discuss your software development requirements with Tekmora. Direct technical consultation on web platforms, mobile apps, enterprise systems, and SAP integrations."
        canonical="https://tekmora.com/contact"
      />

      {/* Hero */}
      <section className="contact-page-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// PROJECT CONSULTATION</span>
            <span className="meta-sep font-mono">DIRECT INQUIRY</span>
          </div>

          <h1 className="contact-page-title font-display">
            START A CONVERSATION<br />
            <span className="italic-accent">WITH TEKMORA.</span>
          </h1>

          <p className="contact-page-lead">
            Whether you have a full functional specification or a complex operational problem waiting to be solved, we are ready to discuss your architecture.
          </p>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <ContactSection />

      {/* FAQs on Working With Us */}
      <section className="section contact-faq-section section-border-top">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">02</span>
            <span>// WORKING TOGETHER</span>
          </div>

          <h2 className="contact-faq-heading font-display">COMMON QUESTIONS BEFORE STARTING</h2>

          <div className="contact-faq-grid">
            <div className="contact-faq-card">
              <div className="cf-q font-display">How quickly can we begin discovery?</div>
              <p className="cf-a">
                We review inbound inquiries within 24 hours and can typically schedule an initial technical deep-dive call within 2 to 3 business days.
              </p>
            </div>

            <div className="contact-faq-card">
              <div className="cf-q font-display">Do you work under Non-Disclosure Agreements (NDAs)?</div>
              <p className="cf-a">
                Yes. We frequently sign mutual NDAs prior to reviewing proprietary business logic, warehouse layouts, or confidential enterprise data schemas.
              </p>
            </div>

            <div className="contact-faq-card">
              <div className="cf-q font-display">How do you structure project engagements?</div>
              <p className="cf-a">
                We work on fixed-deliverable milestones with clear architectural checkpoints or dedicated monthly technical retainers depending on project scope.
              </p>
            </div>

            <div className="contact-faq-card">
              <div className="cf-q font-display">Do you provide post-launch maintenance?</div>
              <p className="cf-a">
                Yes. We offer ongoing operational monitoring, database optimization, SLA support tiers, and iterative feature development for all systems we engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
