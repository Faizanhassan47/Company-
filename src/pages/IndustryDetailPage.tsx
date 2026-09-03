import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/industries';
import { PROJECTS } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { ArrowLeft, ArrowUpRight, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import './IndustryDetailPage.css';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const industry = INDUSTRIES_DATA.find(ind => ind.slug === slug);
  const relevantProjects = industry
    ? PROJECTS.filter(p => industry.relatedProjectSlugs.includes(p.slug))
    : [];
  const relatedServices = industry
    ? SERVICES_DATA.filter(s => industry.relatedServiceSlugs.includes(s.slug))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <main className="industry-not-found container section" id="main-content">
        <SEOHead
          title="Industry Not Found | Tekmora"
          description="The requested industry sector could not be located."
        />
        <h1 className="font-display">INDUSTRY SECTOR NOT FOUND</h1>
        <p className="text-secondary mt-4">The requested operational vertical could not be located.</p>
        <button onClick={() => navigate('/industries')} className="btn btn-orange font-mono mt-6">
          <ArrowLeft size={16} /> View All Industries
        </button>
      </main>
    );
  }

  const industryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.title} Custom Software Solutions`,
    provider: {
      '@type': 'Organization',
      name: 'Tekmora',
      url: 'https://tekmora.com'
    },
    description: industry.overview,
    areaServed: 'Worldwide'
  };

  return (
    <main className="industry-detail-page" id="main-content">
      <SEOHead
        title={`${industry.title} Software Solutions | Tekmora`}
        description={industry.overview}
        canonical={`https://tekmora.com/industries/${industry.slug}`}
        type="service"
        jsonLd={industryJsonLd}
      />

      {/* Hero Header */}
      <section className="industry-hero-section section-border-bottom">
        <div className="container">
          <div className="industry-breadcrumb font-mono">
            <Link to="/industries" className="back-link">
              <ArrowLeft size={14} />
              <span>All Industries</span>
            </Link>
            <span className="sep">/</span>
            <span className="text-orange">SECTOR {industry.number}</span>
          </div>

          <div className="industry-header-content">
            <div className="ind-kicker font-mono">OPERATIONAL VERTICAL // {industry.number}</div>
            <h1 className="ind-headline font-display">{industry.heroHeadline}</h1>
            <p className="ind-lead-tagline">{industry.overview}</p>

            {/* Metrics Chips */}
            <div className="ind-metrics-row font-mono">
              {industry.metrics.map(m => (
                <div key={m.label} className="ind-metric-card">
                  <span className="metric-lbl">{m.label}</span>
                  <span className="metric-num text-orange">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Bottlenecks vs Solutions */}
      <section className="section problems-solutions-section section-border-bottom">
        <div className="container">
          <div className="problems-solutions-grid">
            {/* Left: Problems */}
            <div className="problems-column">
              <div className="section-meta">
                <span className="section-number">01</span>
                <span>// OPERATIONAL REALITIES</span>
              </div>
              <h2 className="ind-subhead font-display">WHERE MANUAL PROCESSES BREAK DOWN</h2>

              <div className="problems-detailed-list">
                {industry.commonProblems.map((prob) => (
                  <div key={prob.problem} className="problem-detail-item">
                    <div className="prob-head font-mono">
                      <AlertCircle size={14} className="text-orange" />
                      <strong>{prob.problem}</strong>
                    </div>
                    <p className="prob-body">{prob.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solutions */}
            <div className="solutions-column">
              <div className="section-meta">
                <span className="section-number">02</span>
                <span>// TEKMORA ARCHITECTURES</span>
              </div>
              <h2 className="ind-subhead font-display">ENGINEERED SOFTWARE BLUEPRINTS</h2>

              <div className="solutions-detailed-list">
                {industry.softwareSolutions.map((sol) => (
                  <div key={sol.title} className="solution-detail-item">
                    <div className="sol-head">
                      <CheckCircle2 size={14} className="text-green" />
                      <strong className="font-display">{sol.title}</strong>
                    </div>
                    <p className="sol-body">{sol.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section related-services-section section-border-bottom">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">03</span>
            <span>// APPLICABLE DISCIPLINES</span>
          </div>

          <h2 className="ind-subhead font-display">CORE SERVICES FOR {industry.title.toUpperCase()}</h2>

          <div className="related-services-grid">
            {relatedServices.map(srv => (
              <div key={srv.slug} className="rel-service-card font-mono">
                <div className="rel-num text-orange">{srv.number}</div>
                <h3 className="rel-title font-display">{srv.title}</h3>
                <p className="rel-desc">{srv.shortDesc}</p>
                <Link to={`/services/${srv.slug}`} className="rel-link">
                  <span>VIEW SERVICE SPEC</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Projects Showcase */}
      {relevantProjects.length > 0 && (
        <section className="section ind-relevant-projects section-border-bottom">
          <div className="container">
            <div className="section-meta">
              <span className="section-number">04</span>
              <span>// DEPLOYED SYSTEMS</span>
              <span className="meta-sep font-mono">PROVEN IN PRODUCTION</span>
            </div>

            <h2 className="ind-subhead font-display">VERIFIED CASE STUDIES IN THIS VERTICAL</h2>

            <div className="ind-projects-grid">
              {relevantProjects.map(p => (
                <article key={p.id} className="ind-project-card">
                  <div className="ind-p-meta font-mono">
                    <span className="text-orange">{p.number}</span> / {p.category}
                  </div>
                  <h3 className="ind-p-title font-display">
                    <Link to={`/work/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="ind-p-tagline">{p.tagline}</p>
                  <div className="ind-p-action font-mono">
                    <Link to={`/work/${p.slug}`} className="btn-link case-link">
                      <span>READ CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section ind-faq-section section-border-bottom">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">05</span>
            <span>// INDUSTRY FAQS</span>
          </div>

          <h2 className="ind-subhead font-display">TECHNICAL & DEPLOYMENT QUESTIONS</h2>

          <div className="ind-faq-list">
            {industry.faqs.map((faq, idx) => (
              <div key={idx} className="ind-faq-item">
                <div className="faq-q-line">
                  <HelpCircle size={15} className="text-orange" />
                  <h3 className="faq-q font-display">{faq.question}</h3>
                </div>
                <p className="faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section ind-cta-section">
        <div className="container">
          <div className="ind-cta-box">
            <h2 className="cta-box-title font-display">
              DISCUSS YOUR<br />
              <span className="italic-accent">{industry.title.toUpperCase()} REQUIREMENTS.</span>
            </h2>
            <p className="cta-box-desc">
              We begin with understanding the physical workflow, system constraints, and operator realities.
            </p>
            <Link to="/contact" className="btn btn-orange btn-lg font-mono">
              <span>START A PROJECT INQUIRY ↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
