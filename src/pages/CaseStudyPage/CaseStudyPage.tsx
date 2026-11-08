import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PORTFOLIO_KIND_LABEL, PROJECTS, type CaseStudy, type PortfolioKind } from '../../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { ProjectVisual, TechLogos } from '../../components/studio/ProductMockups';
import { trackEvent } from '../../utils/analytics';
import './CaseStudyPage.css';

const TABS = ['Overview', 'Challenge', 'Solution', 'Features', 'Engineering', 'Outcome'] as const;

const FEATURED: Record<string, { name: string; category: string; summary: string; tags: string[]; overview: string; challenge: string; solution: string; stats: { value: string; label: string }[] }> = {
  'dome-enterprise': {
    name: 'DOME',
    category: 'Business operations and reporting',
    summary: 'Operational workflows, access permissions, audit trails, and reporting in one system.',
    tags: ['Operations', 'Permissions', 'Reporting'],
    overview: 'DOME is an internal product case study: a business operations system involving workflows, role-based access, audit trails, and reporting. This page explains the requirements, implementation approach, and Tekmora’s contribution.',
    challenge: 'Operational work was spread across disconnected tools and manual processes, making permissions, handoffs, and reporting harder to manage consistently.',
    solution: 'A modular operations system with shared interface patterns, role-based permissions, audit logging, and reporting views shaped around the work people needed to complete.',
    stats: [
      { value: 'Operations', label: 'Focus' },
      { value: 'Role-based', label: 'Access model' },
      { value: 'Audit trails', label: 'Traceability' }
    ]
  }
};

const similarProjectNeed = (project: CaseStudy) => {
  if (project.filterCategory === 'mobile' || project.filterCategory === 'healthcare') return 'Mobile application';
  if (project.filterCategory === 'ecommerce' || project.filterCategory === 'business-platforms') return 'SaaS product';
  if (project.filterCategory === 'warehouse-sap') return 'Existing system or integration';
  return 'Custom software or web application';
};

const shortName = (project: CaseStudy) => FEATURED[project.slug]?.name ?? project.title;

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [tab, setTab] = useState<(typeof TABS)[number]>('Overview');

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    setTab('Overview');
  }, [slug]);

  if (!project) {
    return (
      <main className="case-page" id="main-content">
        <SEOHead
          title="Case Study Not Found | Tekmora"
          description="The requested project case study could not be located in our portfolio."
        />
        <div className="container case-missing">
          <p className="studio-kicker">404</p>
          <h1>Case study not found</h1>
          <button type="button" onClick={() => navigate('/work')} className="studio-btn">
            <ArrowLeft size={16} /> Return to work
          </button>
        </div>
      </main>
    );
  }

  const name = shortName(project);
  const featured = FEATURED[project.slug];
  const stats = featured?.stats ?? project.mockMetrics?.slice(0, 3) ?? [];
  const category = featured?.category ?? project.category;
  const summary = featured?.summary ?? project.tagline;
  const tags = featured?.tags ?? project.services.slice(0, 3);
  const overview = featured?.overview ?? project.usersAndContext;
  const challenge = featured?.challenge ?? project.clientProblem;
  const solution = featured?.solution ?? project.developmentApproach;
  const portfolioKind: PortfolioKind = project.portfolioKind ?? 'selected';
  const kindLabel = PORTFOLIO_KIND_LABEL[portfolioKind];
  const contactHref = `/contact?type=${encodeURIComponent(similarProjectNeed(project))}&ref=${encodeURIComponent(project.slug)}`;

  return (
    <main className="case-page" id="main-content">
      <SEOHead
        title={`${project.title} — Case Study | Tekmora`}
        description={`${project.title}: ${project.tagline} See the requirements, implementation approach, and development decisions.`}
        canonical={`https://www.tekmorasolution.com/work/${project.slug}`}
        image={project.imageUrl}
        type="article"
      />

      <section className="case-hero">
        <div className="container">
          <p className="case-crumb">
            <Link to="/work">Work</Link>
            <span>/</span>
            {name}
          </p>
          <p className="studio-kicker">Case study · {kindLabel}</p>
          <h1>{name}</h1>
          <p className="case-category">{category}</p>
          <p className="studio-lead">{summary}</p>
          <p className="case-kind-note">
            Portfolio category: {kindLabel}. This entry documents the system, Tekmora’s contribution, and the technical decisions involved.
          </p>
          <div className="tag-row">
            {tags.map(service => (
              <span className="soft-tag" key={service}>{service}</span>
            ))}
          </div>
          <div className="case-hero-visual">
            <ProjectVisual slug={project.slug} />
          </div>
          {project.slug === 'glucotrack-cgm' && (
            <div className="cgm-gallery">
              <img src="/projects/glucotrack-desk.jpg" alt="GlucoTrack on a phone and a dashboard" />
              <img src="/projects/glucotrack-sensor.jpg" alt="GlucoTrack pairing with a CGM sensor" />
              <img src="/projects/glucotrack-platform.jpg" alt="GlucoTrack mobile app, API and Bluetooth platform" />
            </div>
          )}
          {project.slug === 'dome-enterprise' && (
            <div className="cgm-gallery dome-gallery">
              <img src="/projects/dome-landing.jpg" alt="DOME landing visual, one workspace for connected operations" />
              <img src="/projects/dome-logo.png" alt="DOME digital office product mark" />
              <img src="/projects/dome.jpg" alt="DOME digital office platform poster" />
            </div>
          )}
        </div>
      </section>

      <section className="case-body">
        <div className="container">
          <div className="case-tabs" role="tablist" aria-label="Case study sections">
            {TABS.map(item => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={tab === item}
                className={tab === item ? 'is-on' : ''}
                onClick={() => setTab(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {(tab === 'Overview' || tab === 'Challenge') && (
            <div className="case-block">
              <h2>{tab === 'Overview' ? 'Project overview' : 'The challenge'}</h2>
              <div className="case-split">
                <p>{tab === 'Overview' ? overview : challenge}</p>
                {tab === 'Overview' && stats.length > 0 && (
                  <div className="case-stats">
                    {stats.map(stat => (
                      <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'Overview' && (
            <>
              <div className="case-block">
                <h2>The challenge</h2>
                <p>{challenge}</p>
              </div>
              <div className="case-block">
                <h2>Our solution</h2>
                <p>{solution}</p>
              </div>
              <div className="case-block">
                <h2>Key features</h2>
                <div className="feature-grid">
                  {project.keyFeatures.slice(0, 4).map(feature => (
                    <article key={feature.title}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="case-block">
                <h2>Technology stack</h2>
                <TechLogos />
              </div>
              <div className="case-block">
                <h2>The outcome</h2>
                <p>{project.outcome}</p>
              </div>
            </>
          )}

          {tab === 'Solution' && (
            <div className="case-block">
              <h2>Our solution</h2>
              <p>{solution}</p>
              <ul className="case-list">
                {project.challengesAndDecisions.map(item => (
                  <li key={item.challenge}>
                    <strong>{item.challenge}</strong>
                    <span>{item.decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === 'Features' && (
            <div className="case-block">
              <h2>Features</h2>
              <ul className="case-list">
                {project.keyFeatures.map(feature => (
                  <li key={feature.title}>
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === 'Engineering' && (
            <div className="case-block">
              <h2>Engineering</h2>
              <ul className="case-list">
                {project.technicalArchitecture.map(item => (
                  <li key={item}><span>{item}</span></li>
                ))}
              </ul>
              <div className="tag-row">
                {project.technologies.map(tech => (
                  <span className="soft-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {tab === 'Outcome' && (
            <div className="case-block">
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
              <p>{project.lessonsOrImprovements}</p>
            </div>
          )}

          {tab === 'Challenge' && project.challengesAndDecisions.length > 0 && (
            <ul className="case-list">
              {project.challengesAndDecisions.map(item => (
                <li key={item.challenge}>
                  <strong>{item.challenge}</strong>
                  <span>{item.decision}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="band-cta">
            <div>
              <h2>Build something similar</h2>
              <p>If you need a comparable system, tell us about the workflow, users, and constraints. We’ll review the requirements and discuss next steps.</p>
            </div>
            <div className="case-cta-actions">
              <Link
                to={contactHref}
                className="studio-btn"
                onClick={() => trackEvent('case_study_cta', 'conversion', project.slug)}
              >
                Build Something Similar <ArrowRight size={16} />
              </Link>
              <Link to={`/work/${nextProject.slug}`} className="studio-btn-ghost">
                Next project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyPage;
