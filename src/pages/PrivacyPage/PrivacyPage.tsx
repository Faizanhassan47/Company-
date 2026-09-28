import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { ArrowLeft } from 'lucide-react';
import '../_shared/LegalPages.css';

export const PrivacyPage: React.FC = () => {
  return (
    <main className="legal-page" id="main-content">
      <SEOHead
        title="Privacy Policy | Tekmora"
        description="Tekmora privacy policy and data governance practices. Learn how we handle client data, communications, and confidentiality."
        canonical="https://tekmorasolution.com/privacy"
      />

      <section className="legal-hero">
        <div className="container legal-container">
          <div className="legal-breadcrumb font-mono">
            <Link to="/" className="legal-back-link">
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>
            <span>//</span>
            <span className="text-orange">Legal</span>
          </div>

          <span className="legal-kicker">DATA GOVERNANCE</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-lead font-mono">
            EFFECTIVE DATE: JANUARY 01, 2024 // LAST UPDATED: SEPTEMBER 2026
          </p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container legal-container">
          <div className="legal-content">
            <h2>1. Overview and Commitment to Confidentiality</h2>
            <p>
              Tekmora Solution operates as an independent custom software engineering studio. We are strictly committed to safeguarding the proprietary technical information, business workflows, and contact details shared with us by prospective and active clients.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you submit a project inquiry via our website form, direct email, or scheduling link, we collect:
            </p>
            <ul>
              <li>Your name and business email address</li>
              <li>Your company or organization name (if provided)</li>
              <li>Your project parameters (project type, project stage, timeline, estimated budget, and technical notes)</li>
            </ul>

            <h2>3. How We Use Collected Information</h2>
            <p>
              Information provided to Tekmora is used exclusively for:
            </p>
            <ul>
              <li>Evaluating technical scope and responding to project consultations</li>
              <li>Drafting architectural proposals and engineering contracts</li>
              <li>Direct communication during active software delivery cycles</li>
            </ul>
            <p>
              We do not sell, rent, monetize, or trade your contact information to third-party marketing networks or data brokers.
            </p>

            <h2>4. Client Data & Source Code Security</h2>
            <p>
              All proprietary business logic, database schemas, and source code repositories developed for clients are treated with strict confidentiality under bilateral Non-Disclosure Agreements (NDAs). We enforce cryptographic storage for any sensitive keys and never use client code or data to train public AI models.
            </p>

            <h2>5. Cookies & Analytics</h2>
            <p>
              We use minimal, privacy-respecting analytics to measure site traffic and aggregate engagement. You can control or disable cookies through your browser settings at any time without impacting website usability.
            </p>

            <h2>6. Contact for Privacy Inquiries</h2>
            <p>
              If you have any questions regarding our data privacy practices or would like us to remove your project inquiry records, please contact us directly at:
            </p>
            <p className="font-mono text-orange">
              <a href="mailto:info@tekmorasolution.com" style={{ color: '#ff4d1c' }}>info@tekmorasolution.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
