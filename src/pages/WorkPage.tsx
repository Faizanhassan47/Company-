import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { SEOHead } from '../components/seo/SEOHead';
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
  { label: 'Mobile', value: 'mobile' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Business Platforms', value: 'business-platforms' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Warehouse and SAP', value: 'warehouse-sap' },
  { label: 'Company Websites', value: 'company-websites' }
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

const renderEditorialBlock = (project: CaseStudy, index: number) => {
  const isEven = index % 2 === 0;

  // Render Visual
  const visualContent = project.imageUrl ? (
    <div className="editorial-img-wrapper">
      <img src={project.imageUrl} alt={`${project.title} Interface`} className="editorial-img" loading="lazy" />
      <div className="editorial-img-overlay font-mono">
        <span className="live-dot" /> PRODUCTION SYSTEM
      </div>
    </div>
  ) : (
    <div className="editorial-graphic-wrapper">
      {renderGraphic(project.slug) || (
        <div className="fallback-poster">
          <div className="fallback-hdr font-mono"><span className="dot dot-green"></span> SYSTEM ARCHITECTURE // {project.slug.toUpperCase()}</div>
          <div className="fallback-body"><div className="fallback-title font-display">{project.title}</div><div className="fallback-tech font-mono">VERIFIED TEKMORA PLATFORM</div></div>
        </div>
      )}
    </div>
  );

  // Layouts based on visualType
  if (project.visualType === 'full-interface' || project.visualType === 'workflow-diagram') {
    return (
      <article className="editorial-project project-full" key={project.id}>
        <div className="project-header-bar desktop-header">
          <div className="project-num-badge font-mono">
            <span className="text-orange">{project.number}</span> / {project.category}
          </div>
          <div className="project-year font-mono">{project.year}</div>
        </div>
        
        <div className="editorial-layout-split">
          <div className="editorial-meta-rail font-mono">
            <div className="rail-item">
              <span className="rail-label">CLIENT CONTEXT</span>
              <span className="rail-val">{project.client}</span>
            </div>
            <div className="rail-item">
              <span className="rail-label">STACK</span>
              <span className="rail-val">{project.technologies.slice(0, 3).join(', ')}</span>
            </div>
          </div>
          <div className="editorial-main-content">
            <div className="project-header-bar mobile-header">
              <div className="project-num-badge font-mono">
                <span className="text-orange">{project.number}</span> / {project.category}
              </div>
              <div className="project-year font-mono">{project.year}</div>
            </div>
            
            <h3 className="project-display-title font-display">
              <Link to={`/work/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="project-tagline-text">{project.tagline}</p>
            <div className="project-cta-group font-mono">
              <Link to={`/work/${project.slug}`} className="btn-link case-link">
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="editorial-visual-container">
          {visualContent}
        </div>
      </article>
    );
  }

  // Split Layout for mobile-dual, analytics-board, clean-mobile, editorial-poster
  return (
    <article className={`editorial-project project-split ${isEven ? 'img-right' : 'img-left'}`} key={project.id}>
      <div className="project-header-bar mobile-header">
        <div className="project-num-badge font-mono">
          <span className="text-orange">{project.number}</span> / {project.category}
        </div>
        <div className="project-year font-mono">{project.year}</div>
      </div>
      <div className="editorial-grid">
        <div className="editorial-content-col">
          <div className="project-header-bar desktop-header">
            <div className="project-num-badge font-mono">
              <span className="text-orange">{project.number}</span> / {project.category}
            </div>
            <div className="project-year font-mono">{project.year}</div>
          </div>
          
          <h3 className="project-display-title font-display">
            <Link to={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="project-tagline-text">{project.tagline}</p>
          
          <div className="editorial-tech-list font-mono">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="editorial-highlights font-mono">
            {project.highlights?.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="hl-item">✓ {hl}</div>
            ))}
          </div>

          <div className="project-cta-group font-mono">
            <Link to={`/work/${project.slug}`} className="btn-link case-link">
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="editorial-visual-col">
          {visualContent}
        </div>
      </div>
    </article>
  );
};

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter(project => project.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <main className="work-page" id="main-content">
      <SEOHead
        title="Engineered Systems & Portfolio | Tekmora"
        description="Explore verified custom web applications, mobile tools, enterprise ERP systems, and warehouse automation workflows built by Tekmora."
        canonical="https://tekmora.com/work"
      />

      {/* Hero Header */}
      <section className="work-page-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// PORTFOLIO DIRECTORY</span>
            <span className="meta-sep font-mono">{PROJECTS.length} SYSTEMS</span>
          </div>

          <h1 className="work-page-title font-display">
            SYSTEMS ARCHITECTURE<br />
            <span className="italic-accent">& PORTFOLIO.</span>
          </h1>

          <p className="work-page-lead">
            Every project represents a tailored software architecture engineered around real operational requirements, user environments, and business data models.
          </p>
        </div>
      </section>

      {/* Filter & Editorial List */}
      <section className="work-gallery-section section section-border-top">
        <div className="container">
          {/* Top Controls */}
          <div className="work-controls-bar">
            <div className="filter-tabs-list" role="tablist" aria-label="Filter projects by category">
              {filterTabs.map(tab => {
                const isSelected = activeFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    role="tab"
                    aria-selected={isSelected}
                    className={`filter-tab-btn font-mono ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(tab.value)}
                  >
                    <span>{tab.label}</span>
                    {isSelected && <span className="tab-indicator"></span>}
                  </button>
                );
              })}
            </div>

            <div className="work-count font-mono">
              <Layers size={14} className="text-orange" />
              <span>SHOWING {visibleProjects.length} OF {PROJECTS.length} SYSTEMS</span>
            </div>
          </div>

          {/* Editorial Projects List */}
          <div className="editorial-list-container">
            {visibleProjects.map((project, idx) => renderEditorialBlock(project, idx))}
          </div>
        </div>
      </section>
    </main>
  );
};
