import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { DomeInterfaceGraphic } from '../../visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../../visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../../visuals/GrnWorkflowGraphic';
import { SapAnalyticsGraphic } from '../../visuals/SapAnalyticsGraphic';
import { QuranAyatGraphic } from '../../visuals/QuranAyatGraphic';
import { CitiBooksGraphic } from '../../visuals/CitiBooksGraphic';
import './SelectedWorkSection.css';

export const SelectedWorkSection: React.FC = () => {
  const renderProjectVisual = (slug: string) => {
    switch (slug) {
      case 'dome-enterprise':
        return <DomeInterfaceGraphic />;
      case 'matrix-field-service':
        return <MatrixMobileGraphic />;
      case 'warehouse-grn-automation':
        return <GrnWorkflowGraphic />;
      case 'sap-b1-production-dashboard':
        return <SapAnalyticsGraphic />;
      case 'quran-ayat-app':
        return <QuranAyatGraphic />;
      case 'citi-books-platform':
        return <CitiBooksGraphic />;
      default:
        return null;
    }
  };

  return (
    <section className="section work-section section-border-bottom" id="work">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">04</span>
          <span>// SELECTED WORK</span>
          <span className="meta-sep font-mono">6 VERIFIED SYSTEMS</span>
        </div>

        {/* Section Headline */}
        <div className="work-heading-block">
          <h2 className="section-title-large">
            SELECTED SYSTEMS<br />
            <span className="italic-accent">BUILT TO WORK.</span>
          </h2>
          <p className="work-lead-desc">
            Explore authentic case studies of enterprise portals, offline mobile engines, SAP ERP integrations, and financial systems deployed for real operational environments.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="projects-showcase-list">
          {PROJECTS.map((project: CaseStudy, index: number) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className={`project-feature-card ${isReversed ? 'layout-reversed' : ''}`}
                data-cursor="view"
              >
                {/* Project Information Panel */}
                <div className="project-info-panel">
                  {/* Top Meta Bar */}
                  <div className="project-card-meta font-mono">
                    <span className="p-num text-orange">{project.number}</span>
                    <span className="p-sep">/</span>
                    <span className="p-cat">{project.category}</span>
                    <span className="p-year">{project.year}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="project-card-title">
                    <Link to={`/work/${project.slug}`} className="project-title-link">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="project-tagline">{project.tagline}</p>

                  {/* Live Metrics Row (if available) */}
                  {project.mockMetrics && (
                    <div className="project-metrics-strip">
                      {project.mockMetrics.map(m => (
                        <div key={m.label} className="p-metric-item">
                          <span className="pm-val font-mono">{m.value}</span>
                          <span className="pm-lbl font-mono">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies & Deep Dive Link */}
                  <div className="project-bottom-actions">
                    <div className="tech-badge-row font-mono">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="meta-tag">{tech}</span>
                      ))}
                    </div>

                    <Link to={`/work/${project.slug}`} className="btn-link project-case-link">
                      <span>View Product Story</span>
                      <ArrowUpRight size={16} className="link-arrow" />
                    </Link>
                  </div>
                </div>

                {/* Project Visual Showcase */}
                <div className="project-visual-wrapper">
                  <Link to={`/work/${project.slug}`} className="visual-link" tabIndex={-1}>
                    {renderProjectVisual(project.slug)}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
