import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, type ServiceDetail } from '../../data/services';
import { PROJECTS } from '../../data/projects';
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  HelpCircle, Zap
} from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './ServiceDetailPage.css';

// Slug alias resolver
const resolveService = (slug?: string): ServiceDetail | undefined => {
  if (!slug) return undefined;
  const match = SERVICES_DATA.find(s => s.slug === slug);
  if (match) return match;

  // Aliases
  if (slug === 'saas-development') {
    return SERVICES_DATA.find(s => s.slug === 'saas-engineering-modernization');
  }
  if (slug === 'ui-ux-design' || slug === 'ui-ux-product-design') {
    return SERVICES_DATA.find(s => s.slug === 'ui-ux-product-design') || {
      slug: 'ui-ux-product-design',
      number: '05',
      category: 'saas-modernization',
      title: 'UI/UX & Product Design',
      shortDesc: 'Product discovery, user journeys, wireframes, interface systems, and design tokens.',
      tagline: 'Designing intuitive, high-clarity user interfaces for complex operational systems.',
      primaryTopic: 'UI/UX & Product Design Services',
      heroHeadline: 'USER INTERFACES DESIGNED FOR CLARITY AND PERFORMANCE.',
      overview: 'Tekmora designs digital product interfaces that reduce cognitive friction and streamline complex business operations. We combine rigorous user journey mapping with modern design systems and clickable Figma prototypes.',
      keyCapabilities: [
        { title: 'Product Discovery & Workflow Mapping', description: 'Deconstructing end-user operational tasks and creating logical navigation hierarchies.' },
        { title: 'Interactive Figma Prototypes', description: 'Clickable wireframes and prototypes allowing rapid usability testing prior to development.' },
        { title: 'Design Tokens & Component Systems', description: 'Standardized color, typography, spacing, and state variables for seamless developer handoff.' },
        { title: 'High-Density Operational Dashboards', description: 'Data grids, filtering controls, and telemetry charts optimized for daily professional use.' }
      ],
      technicalStack: [
        { category: 'Design Tools', items: ['Figma', 'FigJam', 'Tokens Studio', 'Framer'] },
        { category: 'UI Systems', items: ['Design Tokens', 'Atomic Design', 'WCAG AA Accessibility'] }
      ],
      developmentProcess: [
        { phase: '01', name: 'User & Workflow Discovery', description: 'We map tasks, friction points, and user goals across each role.' },
        { phase: '02', name: 'Wireframing & Information Architecture', description: 'We establish layout grids, navigation flows, and core action patterns.' },
        { phase: '03', name: 'High-Fidelity Visual Design', description: 'We apply brand aesthetics, typography hierarchy, and state styling.' },
        { phase: '04', name: 'Design System & Handoff', description: 'We export documented token specs and inspectable components for engineering.' }
      ],
      faqs: [
        { question: 'Do you provide the complete Figma files upon completion?', answer: 'Yes. You receive 100% ownership of all organized Figma components, variants, and design token libraries.' },
        { question: 'Can you work directly with our existing development team?', answer: 'Yes. We deliver structured developer handoff files with precise spacing, token variables, and responsive layout guidelines.' }
      ],
      relevantProjectSlugs: ['citi-books-platform', 'dome-enterprise', 'shoestops']
    };
  }
  if (slug === 'product-engineering') {
    return SERVICES_DATA.find(s => s.slug === 'performance-scaling-cloud-devops');
  }
  return undefined;
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = resolveService(slug);
  const relevantProjects = service
    ? PROJECTS.filter(p => service.relevantProjectSlugs?.includes(p.slug))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main className="service-not-found container" id="main-content" style={{ padding: '140px 0', textAlign: 'center' }}>
        <SEOHead
          title="Service Not Found | Tekmora"
          description="The requested service discipline could not be located."
        />
        <span className="sd-kicker">404 DISCIPLINE</span>
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#fafafa' }}>Service Not Found</h1>
        <p style={{ color: '#a1a1aa', maxWidth: '480px', margin: '0 auto 2rem' }}>
          The requested software engineering service could not be located.
        </p>
        <button onClick={() => navigate('/services')} className="btn btn-orange font-mono">
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
      url: 'https://tekmorasolution.com'
    },
    description: service.overview,
    areaServed: 'Worldwide'
  };

  return (
    <main className="service-detail-page" id="main-content">
      <SEOHead
        title={`${service.title} Services | Tekmora`}
        description={service.overview}
        canonical={`https://tekmorasolution.com/services/${service.slug}`}
        type="service"
        jsonLd={serviceJsonLd}
      />

      {/* 1. Hero */}
      <section className="sd-hero-section">
        <div className="container sd-hero-container">
          <div className="sd-breadcrumb font-mono">
            <Link to="/services" className="sd-back-link">
              <ArrowLeft size={14} />
              <span>All Services</span>
            </Link>
            <span className="sd-divider">//</span>
            <span className="sd-cat-label">{service.category.replace('-', ' ')}</span>
          </div>

          <div className="sd-header-content">
            <span className="sd-kicker">DISCIPLINE {service.number}</span>
            <h1 className="sd-title">{service.title}</h1>
            <p className="sd-tagline">{service.tagline}</p>
            <p className="sd-overview">{service.overview}</p>

            <div className="sd-hero-actions">
              <Link
                to="/contact"
                className="btn btn-orange font-mono"
                onClick={() => trackEvent('service_cta_click', 'conversion', service.slug)}
              >
                <span>Start a {service.title} Project</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#capabilities" className="btn btn-secondary font-mono">
                <span>View Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Problems We Solve */}
      {service.businessProblems && service.businessProblems.length > 0 && (
        <section className="sd-problems-section">
          <div className="container">
            <div className="sd-section-intro">
              <span className="sd-kicker">OPERATIONAL BOTTLENECKS</span>
              <h2 className="sd-section-heading">Problems We Solve</h2>
              <p className="sd-section-sub">
                Common obstacles organizations face before deploying this solution.
              </p>
            </div>

            <div className="sd-problems-grid">
              {service.businessProblems.map((prob, idx) => (
                <div key={idx} className="sd-problem-card">
                  <div className="sd-prob-icon-wrap">
                    <Zap size={18} className="text-orange" />
                  </div>
                  <h3 className="sd-prob-title">{prob.title}</h3>
                  <p className="sd-prob-desc">{prob.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Key Capabilities & What We Deliver */}
      <section className="sd-capabilities-section" id="capabilities">
        <div className="container">
          <div className="sd-section-intro">
            <span className="sd-kicker">CAPABILITIES</span>
            <h2 className="sd-section-heading">What We Build & Deliver</h2>
            <p className="sd-section-sub">
              Core architectural and technical deliverables included in our {service.title} engagements.
            </p>
          </div>

          <div className="sd-capabilities-grid">
            {service.keyCapabilities.map((cap, idx) => (
              <div key={cap.title} className="sd-cap-card">
                <span className="sd-cap-idx font-mono">0{idx + 1}</span>
                <h3 className="sd-cap-title">{cap.title}</h3>
                <p className="sd-cap-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Production Tech Stack & Execution Process */}
      <section className="sd-tech-process-section">
        <div className="container">
          <div className="sd-split-grid">
            {/* Tech Stack */}
            <div className="sd-stack-col">
              <span className="sd-kicker">TECHNOLOGY</span>
              <h2 className="sd-section-heading">Verified Tech Stack</h2>
              <p className="sd-section-sub">
                Battle-tested tools selected for long-term maintainability, speed, and reliability.
              </p>

              <div className="sd-tech-list">
                {service.technicalStack.map(group => (
                  <div key={group.category} className="sd-tech-group">
                    <span className="sd-group-title font-mono">{group.category}</span>
                    <div className="sd-group-badges">
                      {group.items.map(item => (
                        <span key={item} className="sd-tech-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="sd-process-col">
              <span className="sd-kicker">EXECUTION</span>
              <h2 className="sd-section-heading">Development Process</h2>
              <p className="sd-section-sub">
                Phased engineering lifecycle from discovery to production handoff.
              </p>

              <div className="sd-timeline-list">
                {service.developmentProcess.map(step => (
                  <div key={step.phase} className="sd-timeline-step">
                    <span className="sd-step-num font-mono">{step.phase}</span>
                    <div className="sd-step-info">
                      <strong className="sd-step-name">{step.name}</strong>
                      <p className="sd-step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Relevant Project Case Studies */}
      {relevantProjects.length > 0 && (
        <section className="sd-projects-section">
          <div className="container">
            <div className="sd-section-intro">
              <span className="sd-kicker">PROVEN WORK</span>
              <h2 className="sd-section-heading">Related Case Studies</h2>
              <p className="sd-section-sub">
                Real software systems engineered by Tekmora in this discipline.
              </p>
            </div>

            <div className="sd-projects-grid">
              {relevantProjects.map(proj => (
                <article key={proj.id} className="sd-project-card">
                  <div className="sd-proj-meta font-mono">
                    <span className="text-orange">{proj.number}</span> // {proj.category}
                  </div>
                  <h3 className="sd-proj-title">
                    <Link to={`/work/${proj.slug}`}>{proj.title}</Link>
                  </h3>
                  <p className="sd-proj-tagline">{proj.tagline}</p>
                  <div className="sd-proj-action">
                    <Link to={`/work/${proj.slug}`} className="sd-proj-link font-mono">
                      <span>View Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Practical FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="sd-faq-section">
          <div className="container">
            <div className="sd-section-intro">
              <span className="sd-kicker">QUESTIONS</span>
              <h2 className="sd-section-heading">Frequently Asked Questions</h2>
            </div>

            <div className="sd-faq-list">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="sd-faq-item">
                  <div className="sd-faq-q-wrap">
                    <HelpCircle size={16} className="text-orange" />
                    <h3 className="sd-faq-q">{faq.question}</h3>
                  </div>
                  <p className="sd-faq-a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Bottom Conversion CTA */}
      <section className="sd-bottom-cta">
        <div className="container sd-cta-container">
          <div className="sd-cta-content">
            <span className="sd-kicker">START A PROJECT</span>
            <h2 className="sd-cta-heading">Ready to build your {service.title}?</h2>
            <p className="sd-cta-sub">
              Tell us about your product requirements, operational constraints, or system goals. We’ll provide direct architectural advice and a realistic delivery plan.
            </p>
          </div>
          <div className="sd-cta-action">
            <Link
              to="/contact"
              className="btn btn-orange font-mono"
              onClick={() => trackEvent('service_detail_bottom_cta', 'lead', service.slug)}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
