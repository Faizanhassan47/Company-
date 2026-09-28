import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { ArrowLeft } from 'lucide-react';
import '../_shared/LegalPages.css';

export const TermsPage: React.FC = () => {
  return (
    <main className="legal-page" id="main-content">
      <SEOHead
        title="Terms of Service | Tekmora"
        description="Terms of service, engineering standards, and milestone delivery practices for Tekmora Solution."
        canonical="https://tekmorasolution.com/terms"
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

          <span className="legal-kicker">TERMS & STANDARDS</span>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-lead font-mono">
            EFFECTIVE DATE: JANUARY 01, 2024 // LAST UPDATED: SEPTEMBER 2026
          </p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container legal-container">
          <div className="legal-content">
            <h2>1. Engagement & Engineering Services</h2>
            <p>
              Tekmora Solution provides custom software architecture, full-stack web and mobile application development, enterprise systems integration, and technical advisory services. All projects are governed by formal Statement of Work (SOW) documents and milestone specifications agreed upon between Tekmora and the client.
            </p>

            <h2>2. Intellectual Property Ownership</h2>
            <p>
              Upon complete payment of milestone invoices, all custom software source code, database architectures, documentation, and design assets created specifically for the client become the sole intellectual property of the client. Tekmora retains no proprietary lock-in.
            </p>

            <h2>3. Quality Assurance & Milestone Verification</h2>
            <p>
              We engineer software against verified technical specifications. Each sprint includes dedicated testing intervals with accessible staging environments where clients review and validate deliverables before deployment to production environments.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              While Tekmora applies rigorous testing and security standards to all software builds, client operations must maintain appropriate data backups and operational continuity protocols. Tekmora’s liability is limited to the fees paid under the relevant statement of work.
            </p>

            <h2>5. Contact & Contractual Inquiries</h2>
            <p>
              For legal and contractual inquiries, please contact our team at:
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
