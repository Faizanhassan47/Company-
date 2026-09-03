import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Layers, Eye } from 'lucide-react';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { SEOHead } from '../components/seo/SEOHead';
import { ProjectModal } from '../components/ui/ProjectModal';
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

const renderProjectVisual = (project: CaseStudy) => {
  if (project.imageUrl) {
    return (
      <div className="work-card-img-container">
        <img
          src={project.imageUrl}
          alt={`${project.title} Interface Screenshot`}
          className="work-card-img"
          loading="lazy"
        />
        <div className="work-img-overlay-bar font-mono">
          <span className="overlay-pill">
            <span className="live-dot" />
            <span>PRODUCTION SYSTEM</span>
          </span>
          <span className="overlay-role">{project.category}</span>
        </div>
      </div>
    );
  }

  switch (project.slug) {
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
      return (
        <div className="system-graphic fallback-poster">
          <div className="fallback-hdr font-mono">
            <span className="dot dot-green"></span>
            <span>SYSTEM ARCHITECTURE // {project.slug.toUpperCase()}</span>
          </div>
          <div className="fallback-body">
            <div className="fallback-title font-display">{project.title}</div>
            <div className="fallback-tech font-mono">VERIFIED TEKMORA PLATFORM</div>
          </div>
        </div>
      );
  }
};

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter(project => project.filterCategory === activeFilter);
  }, [activeFilter]);

  const activeModalProject = modalIndex !== null ? visibleProjects[modalIndex] : null;

  const handleNextProject = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % visibleProjects.length);
  };

  const handlePrevProject = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + visibleProjects.length) % visibleProjects.length);
  };

  return (
    <main className="work-page" id="main-content">
      <SEOHead
        title="Engineered Systems & Portfolio | Tekmora"
        description="Explore 17 verified custom web applications, mobile tools, enterprise ERP systems, warehouse automation workflows and SAP Business One integrations built by Tekmora."
        canonical="https://tekmora.com/work"
      />

      {/* Hero Header */}
      <section className="work-page-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// PORTFOLIO DIRECTORY</span>
            <span className="meta-sep font-mono">17 SYSTEMS</span>
          </div>

          <h1 className="work-page-title font-display">
            SELECTED SYSTEMS<br />
            <span className="italic-accent">BUILT TO WORK.</span>
          </h1>

          <p className="work-page-lead">
            Every project represents a tailored software architecture engineered around real operational requirements, user environments, and business data models.
          </p>
        </div>
      </section>

      {/* Filter Matrix & Project Gallery */}
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
                    onClick={() => {
                      setActiveFilter(tab.value);
                      setModalIndex(null);
                    }}
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

          {/* Projects Grid */}
          <div className="work-cards-grid">
            {visibleProjects.map((project: CaseStudy, idx: number) => (
              <article className="work-project-card" key={project.id}>
                {/* Visual Header with Lightbox Popup Trigger */}
                <div
                  className="work-card-visual-wrapper"
                  onClick={() => setModalIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setModalIndex(idx);
                    }
                  }}
                  aria-label={`Open popup preview for ${project.title}`}
                >
                  {renderProjectVisual(project)}
                  <div className="visual-hover-overlay">
                    <span className="overlay-badge font-mono">
                      <Eye size={14} />
                      <span>QUICK PREVIEW (POPUP)</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="work-card-body">
                  <div className="work-card-top-meta font-mono">
                    <span className="project-num text-orange">{project.number}</span>
                    <span className="meta-sep">/</span>
                    <span className="project-cat">{project.category}</span>
                    <span className="project-yr">{project.year}</span>
                  </div>

                  <h2 className="work-card-title font-display">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="work-card-tagline">{project.tagline}</p>

                  {/* Main Features */}
                  <div className="work-card-features">
                    {project.keyFeatures.slice(0, 2).map((feat) => (
                      <div key={feat.title} className="card-feat-item">
                        <CheckCircle2 size={13} className="text-orange feat-icon" />
                        <span className="feat-text"><strong>{feat.title}:</strong> {feat.description}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="work-card-tech font-mono">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="work-card-actions font-mono">
                    <button
                      type="button"
                      className="btn-preview-modal font-mono"
                      onClick={() => setModalIndex(idx)}
                    >
                      <Eye size={13} />
                      <span>Quick View</span>
                    </button>
                    <Link to={`/work/${project.slug}`} className="btn-link case-link">
                      <span>Full Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        isOpen={modalIndex !== null}
        project={activeModalProject}
        onClose={() => setModalIndex(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </main>
  );
};
