import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ArrowUpRight, HelpCircle, ArrowDownRight, Briefcase, Zap } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import './ServiceDetailPage.css';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find(s => s.slug === slug);
  const relevantProjects = service
    ? PROJECTS.filter(p => service.relevantProjectSlugs.includes(p.slug))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main className="service-not-found container section" id="main-content">
        <SEOHead
          title="Service Not Found | Tekmora"
          description="The requested service discipline could not be located."
        />
        <h1 className="font-display">SERVICE NOT FOUND</h1>
        <p className="text-secondary mt-4">The requested engineering service could not be located.</p>
        <button onClick={() => navigate('/services')} className="btn btn-orange font-mono mt-6">
          <ArrowLeft size={16} /> View All Services
        </button>
      </main>
    );
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.primaryTopic,
    provider: {
      '@type': 'Organization',
      name: 'Tekmora',
      url: 'https://tekmora.com'
    },
    description: service.overview,
    areaServed: 'Worldwide'
  };

  return (
    <main className="service-detail-page" id="main-content">
      <SEOHead
        title={`${service.title} Services | Tekmora`}
        description={`${service.overview}`}
        canonical={`https://tekmora.com/services/${service.slug}`}
        type="service"
        jsonLd={serviceJsonLd}
      />

      {/* Breadcrumb & Hero */}
      <section className="service-hero-section section-border-bottom">
        <div className="container">
          <div className="service-breadcrumb font-mono">
            <Link to="/services" className="back-link">
              <ArrowLeft size={14} />
              <span>All Services</span>
            </Link>
            <span className="sep">/</span>
            <span className="text-orange">{service.number}</span>
          </div>

          <div className="service-header-content">
            <div className="service-kicker font-mono">DISCIPLINE // {service.number}</div>
            <h1 className="service-headline font-display">{service.heroHeadline}</h1>
            <p className="service-lead-tagline">{service.overview}</p>
            
            {service.architectureApproach && (
              <div className="service-arch-approach font-mono">
                <span className="text-orange">ARCHITECTURAL APPROACH:</span> {service.architectureApproach}
              </div>
            )}

            <div className="service-hero-actions font-mono">
              <Link to="/contact" className="btn btn-primary">
                <span>Start a {service.title} Project</span>
                <ArrowUpRight size={15} />
              </Link>
              <a href="#capabilities" className="btn btn-secondary">
                <span>Explore Capabilities</span>
                <ArrowDownRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems We Solve */}
      {service.businessProblems && service.businessProblems.length > 0 && (
        <section className="section business-problems-section section-border-bottom">
          <div className="container">
             <div className="section-meta">
              <span className="section-number">01</span>
              <span>// OPERATIONAL CHALLENGES</span>
            </div>
            
            <h2 className="subhead-display font-display">BUSINESS PROBLEMS WE SOLVE</h2>
            
            <div className="problems-grid">
              {service.businessProblems.map((prob, idx) => (
                <div key={idx} className="problem-card">
                  <div className="problem-icon"><Zap size={20} className="text-orange" /></div>
                  <h3 className="problem-title font-display">{prob.title}</h3>
                  <p className="problem-desc">{prob.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Architectural Capabilities */}
      <section className="section capabilities-detail-section section-border-bottom" id="capabilities">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">{service.businessProblems ? '02' : '01'}</span>
            <span>// ARCHITECTURAL CAPABILITIES</span>
            <span className="meta-sep font-mono">WHAT WE DELIVER</span>
          </div>

          <div className="capabilities-detail-grid">
            {service.keyCapabilities.map((cap, idx) => (
              <div key={cap.title} className="cap-detail-card">
                <div className="cap-idx font-mono text-orange">0{idx + 1}</div>
                <h2 className="cap-title font-display">{cap.title}</h2>
                <p className="cap-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stack & Delivery Process */}
      <section className="section stack-process-section section-border-bottom">
        <div className="container">
          <div className="stack-process-split">
            {/* Left: Production Stack */}
            <div className="tech-stack-column">
              <div className="section-meta">
                <span className="section-number">{service.businessProblems ? '03' : '02'}</span>
                <span>// PRODUCTION TECH STACK</span>
              </div>
              <h2 className="subhead-display font-display">VERIFIED TECHNOLOGIES</h2>
              <p className="subhead-desc">Restrained, battle-tested tools selected for long-term operational maintainability.</p>

              <div className="tech-categories-list font-mono">
                {service.technicalStack.map(group => (
                  <div key={group.category} className="tech-group-item">
                    <div className="group-name">{group.category}</div>
                    <div className="group-pills">
                      {group.items.map(item => (
                        <span key={item} className="tech-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Development Process */}
            <div className="dev-process-column">
              <div className="section-meta">
                <span className="section-number">{service.businessProblems ? '04' : '03'}</span>
                <span>// EXECUTION METHODOLOGY</span>
              </div>
              <h2 className="subhead-display font-display">PHASED LIFECYCLE</h2>

              <div className="process-timeline font-mono">
                {service.developmentProcess.map(step => (
                  <div key={step.phase} className="process-step-item">
                    <span className="step-phase text-orange">{step.phase}</span>
                    <div className="step-body">
                      <strong className="step-title">{step.name}</strong>
                      <p className="step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Projects Showcase */}
      {relevantProjects.length > 0 && (
        <section className="section relevant-projects-section section-border-bottom">
          <div className="container">
            <div className="section-meta">
              <span className="section-number">{service.businessProblems ? '05' : '04'}</span>
              <span>// PROVEN TRACK RECORD</span>
              <span className="meta-sep font-mono">RELEVANT CASE STUDIES</span>
            </div>

            <h2 className="subhead-display font-display">SELECTED {service.title.toUpperCase()} SYSTEMS</h2>

            <div className="relevant-cards-grid">
              {relevantProjects.map(proj => (
                <article key={proj.id} className="relevant-card">
                  <div className="relevant-meta font-mono">
                    <span className="text-orange">{proj.number}</span> / {proj.category}
                  </div>
                  <h3 className="relevant-title font-display">
                    <Link to={`/work/${proj.slug}`}>{proj.title}</Link>
                  </h3>
                  <p className="relevant-tagline">{proj.tagline}</p>
                  <div className="relevant-tech font-mono">
                    {proj.technologies.slice(0, 3).join(' • ')}
                  </div>
                  <div className="relevant-action font-mono">
                    <Link to={`/work/${proj.slug}`} className="btn-link case-link">
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
      
      {/* Industries Section */}
      {service.industries && service.industries.length > 0 && (
        <section className="section service-industries-section section-border-bottom">
          <div className="container">
            <div className="section-meta">
              <span className="section-number">{service.businessProblems ? '06' : '05'}</span>
              <span>// PRIMARY DOMAINS</span>
            </div>
            <h2 className="subhead-display font-display">INDUSTRIES WE SERVE</h2>
            <div className="industries-list font-mono">
              {service.industries.map((ind, idx) => (
                <div key={idx} className="industry-chip">
                   <Briefcase size={14} />
                   <span>{ind.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="section service-faq-section section-border-bottom">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">{service.businessProblems ? (service.industries ? '07' : '06') : '05'}</span>
            <span>// FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="subhead-display font-display">PRACTICAL QUESTIONS ANSWERED</h2>

          <div className="faq-accordion-list">
            {service.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="faq-item">
                <div className="faq-q-row">
                  <HelpCircle size={16} className="text-orange" />
                  <h3 className="faq-question font-display">{faq.question}</h3>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-banner">
            <h2 className="cta-banner-title font-display">
              {service.ctaHeadline ? (
                <span dangerouslySetInnerHTML={{ __html: service.ctaHeadline.replace('\n', '<br />') }} />
              ) : (
                <>
                  READY TO BUILD YOUR<br />
                  <span className="italic-accent">{service.title.toUpperCase()}?</span>
                </>
              )}
            </h2>
            <p className="cta-banner-desc">
              {service.ctaDesc || 'Tell us about your operational workflows, required integrations, or user requirements.'}
            </p>
            <div className="cta-banner-action font-mono">
              <Link to="/contact" className="btn btn-orange btn-lg">
                <span>START A PROJECT INQUIRY ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
