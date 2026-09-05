import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import './LegalPages.css';

export const PrivacyPage: React.FC = () => {
  return (
    <main className="legal-page" id="main-content">
      <SEOHead
        title="Privacy Policy | Tekmora"
        description="Tekmora privacy policy and data governance practices. Learn how we handle client data and platform confidentiality."
        canonical="https://tekmorasolution.com/privacy"
      />

      <section className="legal-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// LEGAL & DATA GOVERNANCE</span>
          </div>

          <h1 className="legal-title font-display">
            PRIVACY<br />
            <span className="italic-accent">POLICY.</span>
          </h1>

          <p className="legal-lead font-mono">
            EFFECTIVE DATE: JANUARY 01, 2024 // LAST UPDATED: AUGUST 2024
          </p>
        </div>
      </section>

      <section className="section legal-body-section section-border-top">
        <div className="container legal-container">
          <div className="legal-content">
            <h2>1. Overview and Commitment to Confidentiality</h2>
            <p>
              Tekmora operates as an independent custom software development company. We are strictly committed to safeguarding the proprietary technical information, business workflows, and personal contact details shared with us by prospective and active clients.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you submit a project inquiry via our website form or direct email, we collect:
            </p>
            <ul>
              <li>Your name and business email address</li>
              <li>Your company or organization name (optional)</li>
              <li>Your project parameters (project type, timeline, estimated budget, workflow notes)</li>
            </ul>

            <h2>3. How We Use Collected Information</h2>
            <p>
              Information provided to Tekmora is used exclusively for:
            </p>
            <ul>
              <li>Responding to project consultations and evaluating technical scope</li>
              <li>Drafting architectural proposals and engineering contracts</li>
              <li>Communicating during active development cycles</li>
            </ul>
            <p>
              We do not sell, rent, or trade your contact information to any third-party marketing networks.
            </p>

            <h2>4. Client Data & Source Code Security</h2>
            <p>
              All proprietary business logic, database schemas, and source code repositories developed for clients are treated with strict confidentiality under bilateral Non-Disclosure Agreements (NDAs).
            </p>

            <h2>5. Contact for Privacy Inquiries</h2>
            <p>
              If you have any questions regarding our data privacy practices, please contact us at:
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
