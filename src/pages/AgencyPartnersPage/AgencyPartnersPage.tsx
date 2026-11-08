import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { ENGAGEMENT_MODELS } from '../../data/company';
import { Reveal } from '../../components/studio/StudioMotion';
import { trackEvent } from '../../utils/analytics';
import './AgencyPartnersPage.css';

const FIT = [
  'You sell design, product, or digital services and need additional engineering capacity.',
  'A client project requires custom software, a web application, SaaS features, or mobile development.',
  'You want a clear scope, visible progress, and delivery ownership without expanding permanent headcount.'
];

export const AgencyPartnersPage: React.FC = () => {
  return (
    <main className="agency-page" id="main-content">
      <SEOHead
        title="Agency Partners — Tekmora Solutions"
        description="Tekmora Solutions works as a development partner for digital agencies that need engineering capacity for web apps, custom software, SaaS, and mobile projects."
        canonical="https://www.tekmorasolution.com/agency-partners"
      />

      <section className="agency-hero">
        <div className="container">
          <Reveal>
            <p className="studio-kicker">Agency partnerships</p>
            <h1>Your development partner, behind the scenes.</h1>
            <p className="studio-lead">
              Need additional engineering capacity for a client project? Tekmora Solutions can discuss development partnerships for web applications, custom software, SaaS products, and mobile development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="agency-body">
        <div className="container agency-grid">
          <div>
            <h2>How collaboration can work</h2>
            <div className="agency-cards">
              {ENGAGEMENT_MODELS.map(item => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <aside>
            <h2>A good fit when</h2>
            <ul>
              {FIT.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="agency-note">
              We do not take over your client relationship. Scope, communication expectations, and commercial terms are agreed before work starts.
            </p>
          </aside>
        </div>
      </section>

      <section className="agency-process">
        <div className="container">
          <h2>What happens next</h2>
          <ol>
            <li>Share the client need, constraints, and preferred collaboration model.</li>
            <li>We review fit, capacity, and technical requirements.</li>
            <li>If suitable, we agree scope, responsibilities, and next steps before a proposal.</li>
          </ol>
          <div className="agency-actions">
            <Link
              to="/contact?type=Custom%20software%20or%20web%20application&ref=agency-partners"
              className="studio-btn"
              onClick={() => trackEvent('agency_partner_cta', 'conversion', 'discuss_partnership')}
            >
              Discuss a Development Partnership <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="studio-btn-ghost">
              Review selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgencyPartnersPage;
