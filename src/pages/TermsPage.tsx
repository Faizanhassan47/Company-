import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import './LegalPages.css';

export const TermsPage: React.FC = () => {
  return (
    <main className="legal-page" id="main-content">
      <SEOHead
        title="Terms of Service | Tekmora"
        description="Terms of service and software development engagement standards for Tekmora."
        canonical="https://tekmorasolution.com/terms"
      />

      <section className="legal-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// TERMS OF SERVICE</span>
          </div>

          <h1 className="legal-title font-display">
            TERMS OF<br />
            <span className="italic-accent">SERVICE.</span>
          </h1>

          <p className="legal-lead font-mono">
            EFFECTIVE DATE: JANUARY 01, 2024 // LAST UPDATED: AUGUST 2024
          </p>
        </div>
      </section>

      <section className="section legal-body-section section-border-top">
        <div className="container legal-container">
          <div className="legal-content">
            <h2>1. Engagement & Engineering Services</h2>
            <p>
              Tekmora provides custom software design, full-stack web and mobile application engineering, enterprise systems integration, and technical advisory services. All engagements are governed by formal Statement of Work (SOW) documents and milestone specifications agreed upon between Tekmora and the client.
            </p>

            <h2>2. Intellectual Property Ownership</h2>
            <p>
              Upon complete payment of milestone invoices, all custom software source code, database architectures, and design assets created specifically for the client become the sole intellectual property of the client, unless explicitly agreed otherwise.
            </p>

            <h2>3. Quality Assurance & Milestone Verification</h2>
            <p>
              We engineer software to verified technical specifications. Each development phase includes dedicated testing intervals where clients review and validate deliverables before deployment to production environments.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              While Tekmora applies rigorous testing and security standards to all software builds, client operations must maintain appropriate data backups and operational continuity protocols. Tekmora’s liability is limited to the fees paid under the relevant statement of work.
            </p>

            <h2>5. Contact & Questions</h2>
            <p>
              For legal and contractual inquiries, contact:
            </p>
            <p className="font-mono text-orange">
              info@tekmorasolution.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
