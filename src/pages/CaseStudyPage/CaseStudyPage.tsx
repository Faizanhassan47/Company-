import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../../data/projects';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './CaseStudyPage.css';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];

  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="case-not-found container" id="main-content" style={{ padding: '140px 0', textAlign: 'center' }}>
        <SEOHead
          title="Case Study Not Found | Tekmora"
          description="The requested project case study could not be located in our portfolio."
        />
        <span className="case-kicker">404 ERROR</span>
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#fafafa' }}>Case Study Not Found</h1>
        <p style={{ color: '#a1a1aa', maxWidth: '480px', margin: '0 auto 2rem' }}>
          The requested project could not be located in our case study repository.
        </p>
        <button onClick={() => navigate('/work')} className="btn btn-orange font-mono">
          <ArrowLeft size={16} /> Return to Portfolio
        </button>
      </main>
    );
  }

  const projectImage = project.imageUrl || project.thumbnailUrl || '/images/projects/dome-enterprise.jpg';

  return (
    <main className="case-page" id="main-content">
      <SEOHead
        title={`${project.title} | Case Study | Tekmora`}
        description={`${project.title}: ${project.tagline}`}
        canonical={`https://tekmorasolution.com/work/${project.slug}`}
        image={project.imageUrl}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.tagline,
            url: `https://tekmorasolution.com/work/${project.slug}`,
            image: project.imageUrl ? `https://tekmorasolution.com${project.imageUrl}` : undefined,
            creator: { '@type': 'Organization', name: 'Tekmora' }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Work', item: 'https://tekmorasolution.com/work' },
              { '@type': 'ListItem', position: 2, name: project.title, item: `https://tekmorasolution.com/work/${project.slug}` }
            ]
          }
        ]}
      />

      {/* 1. Case Study Hero */}
      <section className="cs-hero-section">
        <div className="container cs-hero-container">
          <div className="cs-hero-breadcrumb">
            <Link to="/work" className="cs-back-link">
              <ArrowLeft size={14} />
              <span>Back to Selected Work</span>
            </Link>
            <span className="cs-meta-divider">//</span>
            <span className="cs-hero-category">{project.category}</span>
          </div>

          <div className="cs-hero-header">
            <h1 className="cs-hero-title">{project.title}</h1>
            <p className="cs-hero-tagline">{project.tagline}</p>
          </div>

          {/* Metadata Grid */}
          <div className="cs-metadata-bar">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client / Industry</span>
              <span className="cs-meta-value">{project.client}</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tekmora Role</span>
              <span className="cs-meta-value">{project.role}</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">{project.category}</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">{project.year}</span>
            </div>
          </div>

          {/* Large Hero Screenshot */}
          <div className="cs-hero-media-wrap">
            <div className="cs-browser-frame">
              <div className="cs-browser-header">
                <span className="cs-dot cs-dot--red"></span>
                <span className="cs-dot cs-dot--yellow"></span>
                <span className="cs-dot cs-dot--green"></span>
                <span className="cs-browser-title font-mono">{project.slug}.tekmora.internal</span>
              </div>
              <img
                src={projectImage}
                alt={`${project.title} primary interface overview`}
                className="cs-hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Challenge */}
      <section className="cs-narrative-section">
        <div className="container cs-two-col-grid">
          <div className="cs-col">
            <span className="cs-kicker">01 // PROJECT CONTEXT</span>
            <h2 className="cs-section-heading">Project Overview</h2>
            <p className="cs-paragraph">{project.clientProblem}</p>
            {project.usersAndContext && (
              <div className="cs-sub-block">
                <strong className="cs-sub-label">Users & Operational Context:</strong>
                <p className="cs-sub-text">{project.usersAndContext}</p>
              </div>
            )}
          </div>

          <div className="cs-col">
            <span className="cs-kicker">02 // THE CHALLENGE</span>
            <h2 className="cs-section-heading">The Business Problem</h2>
            <p className="cs-paragraph">
              Prior to Tekmora's involvement, operations were constrained by disconnected workflows, data silos, and manual overhead that increased operational risk and latency.
            </p>
            <div className="cs-highlight-box">
              <strong className="cs-highlight-title">What Tekmora Was Responsible For:</strong>
              <p className="cs-highlight-text">{project.developmentApproach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering & Architecture */}
      <section className="cs-engineering-section">
        <div className="container">
          <div className="cs-section-intro">
            <span className="cs-kicker">03 // ENGINEERING DECISIONS</span>
            <h2 className="cs-section-heading">
              Technical Architecture & <span className="text-orange">Decisions</span>
            </h2>
            <p className="cs-section-sub">
              A breakdown of the architecture, data modeling, and performance decisions engineered for {project.title}.
            </p>
          </div>

          {project.technicalArchitecture && project.technicalArchitecture.length > 0 && (
            <div className="cs-arch-grid">
              {project.technicalArchitecture.map((arch, i) => (
                <div className="cs-arch-card" key={i}>
                  <span className="cs-arch-num font-mono">0{i + 1}</span>
                  <p className="cs-arch-text">{arch}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="cs-tech-stack-wrap">
            <span className="cs-tech-label">Core Technologies Deployed:</span>
            <div className="cs-tech-pill-list">
              {project.technologies.map(tech => (
                <span key={tech} className="cs-tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Genuine Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="cs-features-section">
          <div className="container">
            <div className="cs-section-intro">
              <span className="cs-kicker">04 // CAPABILITIES</span>
              <h2 className="cs-section-heading">Key Features Built</h2>
              <p className="cs-section-sub">
                Engineered specifically around user workflows, data integrity, and operational speed.
              </p>
            </div>

            <div className="cs-features-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div className="cs-feature-card" key={idx}>
                  <div className="cs-feature-head">
                    <CheckCircle2 size={18} className="text-orange" />
                    <h3 className="cs-feature-title">{feat.title}</h3>
                  </div>
                  <p className="cs-feature-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Difficult Challenges & Decisions */}
      {project.challengesAndDecisions && project.challengesAndDecisions.length > 0 && (
        <section className="cs-challenges-section">
          <div className="container">
            <div className="cs-section-intro">
              <span className="cs-kicker">05 // PROBLEM SOLVING</span>
              <h2 className="cs-section-heading">Difficult Problems Solved</h2>
              <p className="cs-section-sub">
                Real technical hurdles encountered during engineering and how our team resolved them.
              </p>
            </div>

            <div className="cs-challenges-list">
              {project.challengesAndDecisions.map((item, idx) => (
                <div className="cs-challenge-item" key={idx}>
                  <div className="cs-challenge-problem">
                    <strong className="cs-block-label">The Hurdle:</strong>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="cs-challenge-decision">
                    <strong className="cs-block-label text-orange">Tekmora's Solution:</strong>
                    <p>{item.decision}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Outcome & Real Business Impact */}
      <section className="cs-outcome-section">
        <div className="container">
          <div className="cs-outcome-card">
            <div className="cs-outcome-left">
              <span className="cs-kicker">06 // OUTCOME</span>
              <h2 className="cs-outcome-heading">Real Factual Impact</h2>
              <p className="cs-outcome-body">{project.outcome}</p>
              {project.lessonsOrImprovements && (
                <p className="cs-outcome-evolution">
                  <strong>Ongoing Evolution:</strong> {project.lessonsOrImprovements}
                </p>
              )}
            </div>

            {project.mockMetrics && project.mockMetrics.length > 0 && (
              <div className="cs-metrics-col">
                {project.mockMetrics.map((m, i) => (
                  <div className="cs-metric-box" key={i}>
                    <span className="cs-metric-value">{m.value}</span>
                    <span className="cs-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Next Project Navigation */}
      <section className="cs-next-nav-section">
        <div className="container cs-next-nav-container">
          <Link to={`/work/${prevProject.slug}`} className="cs-nav-project cs-nav-project--prev">
            <span className="cs-nav-dir"><ArrowLeft size={14} /> Previous Project</span>
            <span className="cs-nav-name">{prevProject.title}</span>
          </Link>

          <Link to="/work" className="cs-nav-center font-mono">
            View All Work
          </Link>

          <Link to={`/work/${nextProject.slug}`} className="cs-nav-project cs-nav-project--next">
            <span className="cs-nav-dir">Next Project <ArrowRight size={14} /></span>
            <span className="cs-nav-name">{nextProject.title}</span>
          </Link>
        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <section className="cs-bottom-cta">
        <div className="container cs-cta-container">
          <div className="cs-cta-content">
            <span className="cs-kicker">START A PROJECT</span>
            <h2 className="cs-cta-heading">Building something similar?</h2>
            <p className="cs-cta-lead">
              We can help you architect, design, and engineer a dependable software product tailored to your exact business requirements.
            </p>
          </div>
          <div className="cs-cta-action">
            <Link
              to="/contact"
              className="btn btn-orange font-mono"
              onClick={() => trackEvent('case_study_bottom_cta', 'lead', project.slug)}
            >
              <span>Talk to Tekmora</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
