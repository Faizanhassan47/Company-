import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { ArrowLeft, ArrowDown } from 'lucide-react';
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
import './CaseStudyPage.css';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];

  const nextProject: CaseStudy = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="case-not-found container section" id="main-content">
        <SEOHead
          title="Case Study Not Found | Tekmora"
          description="The requested project case study could not be located."
        />
        <h1 className="font-display">SYSTEM CASE STUDY NOT FOUND</h1>
        <p className="text-secondary mt-4">The requested project could not be located in our portfolio repository.</p>
        <button onClick={() => navigate('/work')} className="btn btn-orange font-mono mt-6">
          <ArrowLeft size={16} /> Return to Portfolio
        </button>
      </main>
    );
  }

  const renderVisual = (s: string, title: string, img?: string) => {
    if (img) {
      return (
        <div className="case-study-hero-img-wrapper">
          <img
            src={img}
            alt={`${title} Interface Overview`}
            className="case-study-hero-img"
          />
        </div>
      );
    }
    switch (s) {
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
              <span>SYSTEM ARCHITECTURE SCHEMATIC // {s.toUpperCase()}</span>
            </div>
            <div className="fallback-body">
              <div className="fallback-title font-display">{title}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="case-study-page" id="main-content">
      <SEOHead
        title={`${project.title} | Case Study`}
        description={`${project.title}: ${project.tagline}`}
        canonical={`https://tekmora.com/work/${project.slug}`}
        type="article"
      />

      <section className="case-hero-section section-border-bottom">
        <div className="container">
          <Link to="/work" className="case-back-link font-mono">
            <ArrowLeft size={14} /> BACK TO PORTFOLIO
          </Link>
          
          <div className="case-hero-meta font-mono mt-6">
            <span>PROJECT {project.number}</span>
            <span className="text-orange">// {project.category.toUpperCase()}</span>
          </div>
          
          <h1 className="case-title font-display mt-4">{project.title}</h1>
          <p className="case-tagline mt-4">{project.tagline}</p>
        </div>
      </section>

      {/* Metrics Strip */}
      {project.mockMetrics && project.mockMetrics.length > 0 && (
        <section className="case-metrics-strip section-border-bottom">
          <div className="container metrics-strip-grid">
            {project.mockMetrics.map((m, i) => (
              <div key={i} className="metric-strip-item">
                <div className="ms-value font-display text-orange">{m.value}</div>
                <div className="ms-label font-mono">{m.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visual */}
      <section className="case-visual-section section-border-bottom">
        <div className="container">
          <div className="case-visual-container">
            {renderVisual(project.slug, project.title, project.imageUrl)}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="case-body-section section-border-bottom">
        <div className="container">
          <div className="cso-grid">
            
            <div className="cso-block">
              <h2 className="cso-title font-display">THE CHALLENGE</h2>
              <div className="cso-content text-secondary">{project.clientProblem}</div>
            </div>

            <div className="cso-block">
              <h2 className="cso-title font-display">THE SOLUTION</h2>
              <div className="cso-content text-secondary">{project.developmentApproach}</div>
              
              <ul className="solution-capabilities-list mt-4 font-mono">
                {project.keyFeatures.slice(0, 4).map((f, i) => (
                  <li key={i}>
                    <span className="text-orange mr-2">✓</span>
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cso-block">
              <h2 className="cso-title font-display">THE OUTCOME</h2>
              <div className="cso-content text-primary font-medium">{project.outcome}</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="case-architecture-section section-border-bottom">
        <div className="container">
          <h2 className="arch-section-title font-display mb-8">SYSTEM ARCHITECTURE</h2>
          
          <div className="arch-flow-diagram">
            {project.technicalArchitecture.map((layer, idx) => {
              // The original strings are like: "Frontend: Scalable React architecture..."
              const [role, ...descArr] = layer.split(':');
              const desc = descArr.join(':').trim();

              return (
                <React.Fragment key={idx}>
                  <div className="arch-flow-node">
                    <div className="arch-node-role font-mono text-orange">{role.toUpperCase()}</div>
                    <div className="arch-node-desc text-secondary">{desc || layer}</div>
                  </div>
                  {idx < project.technicalArchitecture.length - 1 && (
                    <div className="arch-flow-arrow">
                      <ArrowDown size={20} className="text-dim" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <section className="case-cta-section section-border-bottom text-center py-16">
        <div className="container">
          <h2 className="font-display text-2xl mb-4">WANT TO BUILD A SIMILAR SYSTEM?</h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            Discuss your requirements with our engineering team to map out architecture and timelines.
          </p>
          <Link to="/contact" className="btn btn-orange font-mono">
            START A PROJECT ↗
          </Link>
        </div>
      </section>

      <section className="next-project-section py-12">
        <div className="container">
          <div className="next-project-wrapper text-center">
            <div className="next-meta font-mono mb-4">
              <span>NEXT CASE STUDY // </span>
              <span className="text-orange">PROJECT {nextProject.number}</span>
            </div>
            <h3 className="next-title font-display text-4xl hover:text-orange transition-colors">
              <Link to={`/work/${nextProject.slug}`} className="next-link">
                {nextProject.title}
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};
