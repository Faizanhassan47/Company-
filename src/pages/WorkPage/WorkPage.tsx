import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './WorkPage.css';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise', label: 'Enterprise & ERP' },
  { id: 'mobile', label: 'Mobile Applications' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'business-platforms', label: 'Web Platforms & Automation' },
  { id: 'healthcare', label: 'Healthcare' }
] as const;

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    if (activeFilter === 'enterprise') {
      return PROJECTS.filter(p => p.filterCategory === 'enterprise' || p.filterCategory === 'warehouse-sap');
    }
    return PROJECTS.filter(p => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <main className="work-page" id="main-content">
      <SEOHead
        title="Software Projects & Case Studies | Tekmora"
        description="Explore software products and custom engineering systems built by Tekmora for startups, commercial operations, and enterprises."
        canonical="https://tekmorasolution.com/work"
      />

      {/* Hero Section */}
      <section className="work-hero">
        <div className="container work-hero-container">
          <div className="work-hero-content">
            <span className="work-kicker">SELECTED WORK</span>
            <h1 className="work-hero-title">
              Software built for <br />
              <span className="text-orange">real business problems.</span>
            </h1>
            <p className="work-hero-lead">
              We design and engineer digital software products for startups and growing businesses—from customer-facing web and mobile applications to the mission-critical systems running operations behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Navigation */}
      <section className="work-filter-bar">
        <div className="container filter-container">
          <div className="filter-pill-list" role="tablist" aria-label="Portfolio category filter">
            {FILTER_CATEGORIES.map(cat => {
              const isActive = activeFilter === cat.id;
              const count = cat.id === 'all'
                ? PROJECTS.length
                : cat.id === 'enterprise'
                  ? PROJECTS.filter(p => p.filterCategory === 'enterprise' || p.filterCategory === 'warehouse-sap').length
                  : PROJECTS.filter(p => p.filterCategory === cat.id).length;

              return (
                <button
                  type="button"
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${isActive ? 'filter-pill--active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Project Showcase List */}
      <section className="work-showcase-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="editorial-showcase-list"
            >
              {filteredProjects.map((project, index) => {
                const isReversed = index % 2 === 1;
                const projectImage = project.imageUrl || project.thumbnailUrl || '/images/projects/dome-enterprise.jpg';

                return (
                  <article
                    className={`editorial-project-card ${isReversed ? 'editorial-project-card--reversed' : ''}`}
                    key={project.id}
                  >
                    {/* Visual Media Column */}
                    <div className="project-media-col">
                      <Link
                        to={`/work/${project.slug}`}
                        className="project-image-link"
                        onClick={() => trackEvent('view_case_study', 'portfolio', project.slug)}
                        aria-label={`View ${project.title} case study`}
                      >
                        <div className="project-image-frame">
                          <img
                            src={projectImage}
                            alt={`${project.title} system interface preview`}
                            className="project-main-image"
                            loading={index < 2 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div className="project-info-col">
                      <div className="project-meta-kicker">
                        <span className="project-num">{project.number}</span>
                        <span className="project-divider">//</span>
                        <span className="project-category">{project.category}</span>
                      </div>

                      <h2 className="project-headline">
                        <Link to={`/work/${project.slug}`}>{project.title}</Link>
                      </h2>

                      <p className="project-tagline">{project.tagline}</p>

                      {/* Business Problem & What Tekmora Built */}
                      <div className="project-narrative-block">
                        <div className="narrative-item">
                          <strong className="narrative-label">The Problem:</strong>
                          <p className="narrative-text">{project.clientProblem}</p>
                        </div>
                        <div className="narrative-item">
                          <strong className="narrative-label">What We Built:</strong>
                          <p className="narrative-text">{project.developmentApproach}</p>
                        </div>
                      </div>

                      {/* Deliverables / Services */}
                      {project.services && project.services.length > 0 && (
                        <div className="project-services-pills">
                          {project.services.slice(0, 3).map(service => (
                            <span key={service} className="service-tag">
                              <CheckCircle2 size={13} className="service-tag-icon" />
                              {service}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Technology Stack Tags */}
                      <div className="project-tech-row">
                        {project.technologies.slice(0, 5).map(tech => (
                          <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      {/* Real Factual Outcome where available */}
                      {project.outcome && (
                        <div className="project-outcome-box">
                          <span className="outcome-title">Outcome:</span>
                          <span className="outcome-text">{project.outcome}</span>
                        </div>
                      )}

                      {/* Action Link */}
                      <div className="project-action-wrap">
                        <Link
                          to={`/work/${project.slug}`}
                          className="project-cta-link"
                          onClick={() => trackEvent('view_case_study', 'portfolio', project.slug)}
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight size={16} className="cta-arrow-icon" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="work-standards-section">
        <div className="container standards-container">
          <div className="standards-intro">
            <span className="work-kicker">ENGINEERING PRINCIPLES</span>
            <h2 className="standards-title">
              Software built for the <br />
              <span className="text-orange">long term.</span>
            </h2>
            <p className="standards-desc">
              We hold every codebase to rigorous technical and architectural standards.
            </p>
          </div>

          <div className="standards-grid">
            <div className="standard-card">
              <span className="standard-num">01</span>
              <h3>User-Centric Architecture</h3>
              <p>Designed around the actual physical and operational reality of the people doing the work daily.</p>
            </div>
            <div className="standard-card">
              <span className="standard-num">02</span>
              <h3>Performance & Reliability</h3>
              <p>Engineered for sub-200ms latency, strict database indexing, and fault-tolerant concurrency.</p>
            </div>
            <div className="standard-card">
              <span className="standard-num">03</span>
              <h3>100% Client Ownership</h3>
              <p>Clean, maintainable source code, complete documentation, and zero proprietary lock-in.</p>
            </div>
            <div className="standard-card">
              <span className="standard-num">04</span>
              <h3>Factual Measurable Impact</h3>
              <p>Every feature is measured against genuine workflow speed, reduction in errors, and operational clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="work-bottom-cta">
        <div className="container work-cta-container">
          <div className="work-cta-text">
            <span className="work-kicker">LET'S BUILD</span>
            <h2 className="work-cta-heading">Have a product to build?</h2>
            <p className="work-cta-sub">
              Tell us about your product idea, operational bottlenecks, or system requirements. We'll review your scope and provide direct engineering feedback.
            </p>
          </div>
          <div className="work-cta-action">
            <Link to="/contact" className="btn btn-orange font-mono">
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
