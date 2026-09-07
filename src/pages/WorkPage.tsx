import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code, Globe, Layout } from 'lucide-react';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { SEOHead } from '../components/seo/SEOHead';
import { trackEvent } from '../utils/analytics';
import { DomeInterfaceGraphic } from '../components/visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../components/visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../components/visuals/GrnWorkflowGraphic';
import { SapAnalyticsGraphic } from '../components/visuals/SapAnalyticsGraphic';
import { QuranAyatGraphic } from '../components/visuals/QuranAyatGraphic';
import { CitiBooksGraphic } from '../components/visuals/CitiBooksGraphic';
import { ShoestopsGraphic } from '../components/visuals/ShoestopsGraphic';
import { CommentsFusionGraphic } from '../components/visuals/CommentsFusionGraphic';
import { TranscendGraphic } from '../components/visuals/TranscendGraphic';
import './WorkPage.css';

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Web Apps', value: 'web-apps' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Data & BI', value: 'data-bi' }
];

const renderGraphic = (slug: string) => {
  switch (slug) {
    case 'dome-enterprise': return <DomeInterfaceGraphic />;
    case 'matrix-field-service': return <MatrixMobileGraphic />;
    case 'warehouse-grn-automation': return <GrnWorkflowGraphic />;
    case 'sap-b1-production-dashboard': return <SapAnalyticsGraphic />;
    case 'quran-ayat-app': return <QuranAyatGraphic />;
    case 'citi-books-platform': return <CitiBooksGraphic />;
    case 'shoestops': return <ShoestopsGraphic />;
    case 'comments-fusion': return <CommentsFusionGraphic />;
    case 'transcend-healthcare': return <TranscendGraphic />;
    default:
      return null;
  }
};

const renderProjectCard = (project: CaseStudy, isFullWidth: boolean) => {
  const visualContent = project.imageUrl ? (
    <img src={project.imageUrl} alt={`${project.title} interface preview`} className="project-card-img" loading="lazy" decoding="async" />
  ) : (
    <div className="project-card-graphic">
      {renderGraphic(project.slug) || (
        <div className="fallback-poster">
          <div className="fallback-title font-display">{project.title}</div>
        </div>
      )}
    </div>
  );

  return (
    <article className={`project-card ${isFullWidth ? 'project-card-full' : 'project-card-half'}`} key={project.id}>
      <div className="project-card-content">
        <div className="project-card-header font-mono">
          <span className="project-num">{project.number}</span>
          <span className="project-cat-sep">—</span>
          <span className="project-cat">{isFullWidth ? 'FEATURED PROJECT' : project.category}</span>
        </div>

        <h3 className="project-card-title font-display">
          {project.title}
        </h3>

        <p className="project-card-desc">
          {project.tagline}
        </p>

        <div className="project-card-tech font-mono">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-pill">
              <Code size={12} /> {tech}
            </span>
          ))}
        </div>

        <Link to={`/work/${project.slug}`} className="project-card-btn" onClick={() => trackEvent('project_open', 'portfolio', project.slug)}>
          View Project <ArrowRight size={16} />
        </Link>
      </div>

      <div className="project-card-visual">
        {visualContent}
      </div>
    </article>
  );
};

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Map filters to internal categories for demo
  const getMappedCategory = (filter: string) => {
    if (filter === 'all') return 'all';
    if (filter === 'web-apps') return 'business-platforms';
    if (filter === 'data-bi') return 'warehouse-sap';
    return filter;
  };

  const visibleProjects = useMemo(() => {
    const mapped = getMappedCategory(activeFilter);
    if (mapped === 'all') return PROJECTS;
    return PROJECTS.filter(project => project.filterCategory === mapped);
  }, [activeFilter]);

  return (
    <main className="work-page" id="main-content">
      <SEOHead
        title="Our Work & Portfolio | Tekmora"
        description="Explore verified custom web applications, mobile tools, enterprise ERP systems, and warehouse automation workflows built by Tekmora."
        canonical="https://tekmorasolution.com/work"
      />

      {/* Hero Section */}
      <section className="work-page-hero">
        <div className="container work-hero-grid">
          <div className="work-hero-content">
            <span className="hero-subtitle font-mono">OUR WORK</span>
            <h1 className="work-page-title font-display">
              Software that moves businesses <span className="text-orange">forward.</span>
            </h1>
            <p className="work-page-lead">
              From enterprise platforms to mobile applications, we design and build reliable software solutions that solve real world problems.
            </p>
          </div>

          <div className="work-hero-stats">
            <div className="hero-ideas-arrow">
               <div className="ideas-text font-display">Ideas<br/>into Impact</div>
               <svg viewBox="0 0 200 80" className="hero-arrow-svg">
                  <path d="M20,60 Q80,10 180,30" stroke="var(--accent-orange)" fill="transparent" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="180,30 165,20 170,40" fill="var(--accent-orange)" />
               </svg>
            </div>
            <div className="stat-list">
              <div className="stat-item">
                <div className="stat-icon"><Layout size={18} className="text-orange"/></div>
                <div className="stat-data">
                  <span className="stat-val font-display">15+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Globe size={18} className="text-orange"/></div>
                <div className="stat-data">
                  <span className="stat-val font-display">8+</span>
                  <span className="stat-label">Industries Served</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><ArrowUpRight size={18} className="text-orange"/></div>
                <div className="stat-data">
                  <span className="stat-val font-display">100%</span>
                  <span className="stat-label">Client Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="work-gallery-section">
        <div className="container">
          <div className="filter-tabs-container">
            {filterTabs.map(tab => {
              const isSelected = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  className={`filter-tab-pill ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(tab.value)}
                  type="button"
                  aria-pressed={isSelected}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="work-grid">
            {visibleProjects.map((project, idx) => {
              // Full width for 1st and 4th items in "all" view, or if only 1 item
              const isFullWidth = (activeFilter === 'all' && (idx === 0 || idx === 3)) || visibleProjects.length === 1;
              return renderProjectCard(project, isFullWidth);
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-subtitle font-mono">LET'S BUILD TOGETHER</span>
            <h2 className="cta-title font-display">
              Have a <span className="text-orange">system</span> in mind?
            </h2>
            <p className="cta-desc">
              Let's discuss your idea and turn it into a reliable, scalable solution.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
