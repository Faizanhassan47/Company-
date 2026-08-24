import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { DomeInterfaceGraphic } from '../components/visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../components/visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../components/visuals/GrnWorkflowGraphic';
import { SapAnalyticsGraphic } from '../components/visuals/SapAnalyticsGraphic';
import { QuranAyatGraphic } from '../components/visuals/QuranAyatGraphic';
import { CitiBooksGraphic } from '../components/visuals/CitiBooksGraphic';
import './CaseStudiesPage.css';

const categories = ['All Projects', ...Array.from(new Set(PROJECTS.map(project => project.category)))];

const renderVisual = (slug: string) => {
  switch (slug) {
    case 'dome-enterprise': return <DomeInterfaceGraphic />;
    case 'matrix-field-service': return <MatrixMobileGraphic />;
    case 'warehouse-grn-automation': return <GrnWorkflowGraphic />;
    case 'sap-b1-production-dashboard': return <SapAnalyticsGraphic />;
    case 'quran-ayat-app': return <QuranAyatGraphic />;
    case 'citi-books-platform': return <CitiBooksGraphic />;
    default: return null;
  }
};

export const CaseStudiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  useEffect(() => {
    document.title = 'Product Stories | Tekmora';
  }, []);
  const visibleProjects = useMemo(
    () => activeCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter(project => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="case-studies-page">
      <section className="case-studies-intro section">
        <div className="container">
          <div className="case-studies-eyebrow section-meta">
            <span className="calibration-dot"></span>
            <span>// FROM VISION TO WORKING SYSTEM</span>
          </div>
          <h1 className="case-studies-title">
            PRODUCT STORIES<br />
            <span className="italic-accent">BUILT TO WORK.</span>
          </h1>
          <p className="case-studies-lead">
            A selection of web platforms, mobile products, and operational systems designed around real business problems.
          </p>
        </div>
      </section>

      <section className="case-studies-index section section-border-top">
        <div className="container">
          <div className="case-studies-filter-header">
            <div className="section-meta">
              <span className="section-number">01</span>
              <span>// SELECTED CASE STUDIES</span>
            </div>
            <span className="case-studies-count font-mono">{visibleProjects.length.toString().padStart(2, '0')} PROJECTS</span>
          </div>

          <div className="case-studies-filters" aria-label="Filter case studies">
            {categories.map(category => (
              <button
                type="button"
                key={category}
                className={`case-filter-btn font-mono ${activeCategory === category ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="case-study-grid">
            {visibleProjects.map((project: CaseStudy) => (
              <article className="product-card" key={project.id}>
                <Link to={`/work/${project.slug}`} className="product-card-visual" aria-label={`View ${project.title}`}>
                  {renderVisual(project.slug)}
                  <span className="product-card-overlay"><ArrowUpRight size={22} /></span>
                </Link>
                <div className="product-card-content">
                  <div className="product-card-meta font-mono">
                    <span className="text-orange">{project.number}</span>
                    <span>/</span>
                    <span>{project.category}</span>
                    <span className="product-card-year">{project.year}</span>
                  </div>
                  <h2 className="product-card-title">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>
                  <p className="product-card-tagline">{project.tagline}</p>
                  <div className="product-card-outcome">
                    <CheckCircle2 size={15} className="text-green" />
                    <span>{project.outcome}</span>
                  </div>
                  <Link to={`/work/${project.slug}`} className="product-card-link btn-link">
                    View product story <ArrowUpRight size={16} className="link-arrow" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
