import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Layers } from 'lucide-react';
import { DomeInterfaceGraphic } from '../components/visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../components/visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../components/visuals/GrnWorkflowGraphic';
import { SapAnalyticsGraphic } from '../components/visuals/SapAnalyticsGraphic';
import { QuranAyatGraphic } from '../components/visuals/QuranAyatGraphic';
import { CitiBooksGraphic } from '../components/visuals/CitiBooksGraphic';
import './CaseStudyPage.css';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];

  // Next project for pagination
  const nextProject: CaseStudy = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} | Tekmora`;
    else document.title = 'Case Study Not Found | Tekmora';
  }, [slug, project]);

  if (!project) {
    return (
      <div className="case-not-found container section">
        <h2 className="font-display">SYSTEM NOT FOUND</h2>
        <p className="text-secondary mt-4">The requested project case study could not be located.</p>
        <button onClick={() => navigate('/')} className="btn btn-orange font-mono mt-4">
          <ArrowLeft size={16} /> Return to Home
        </button>
      </div>
    );
  }

  const renderVisual = (s: string) => {
    switch (s) {
      case 'dome-enterprise': return <DomeInterfaceGraphic />;
      case 'matrix-field-service': return <MatrixMobileGraphic />;
      case 'warehouse-grn-automation': return <GrnWorkflowGraphic />;
      case 'sap-b1-production-dashboard': return <SapAnalyticsGraphic />;
      case 'quran-ayat-app': return <QuranAyatGraphic />;
      case 'citi-books-platform': return <CitiBooksGraphic />;
      default: return null;
    }
  };

  return (
    <main className="case-study-page">
      {/* Top Breadcrumb Header */}
      <section className="case-hero-section section-border-bottom">
        <div className="container">
          <div className="case-breadcrumb-bar font-mono">
            <Link to="/" className="back-link">
              <ArrowLeft size={14} />
              <span>Back to all work</span>
            </Link>
            <div className="case-meta-tag-group">
              <span className="case-num text-orange">PROJECT {project.number}</span>
              <span className="sep">/</span>
              <span className="case-cat">{project.category}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="case-header-content">
            <div className="case-kicker font-mono">PRODUCT STORY // {project.number}</div>
            <h1 className="case-title font-display">{project.title}</h1>
            <p className="case-lead-tagline">{project.tagline}</p>
            <div className="case-service-tags">
              {project.services.slice(0, 4).map(service => <span key={service} className="meta-tag">{service}</span>)}
            </div>
          </div>

          {/* Metadata Specs Grid */}
          <div className="case-specs-matrix font-mono">
            <div className="case-spec-box">
              <span className="cs-lbl">CLIENT / DOMAIN</span>
              <span className="cs-val">{project.client}</span>
            </div>
            <div className="case-spec-box">
              <span className="cs-lbl">YEAR & TIMELINE</span>
              <span className="cs-val">{project.year}</span>
            </div>
            <div className="case-spec-box">
              <span className="cs-lbl">RESPONSIBILITY</span>
              <span className="cs-val text-orange">{project.role}</span>
            </div>
            <div className="case-spec-box">
              <span className="cs-lbl">CORE TECHNOLOGIES</span>
              <span className="cs-val">{project.technologies.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual Feature Board */}
      <section className="section case-visual-section section-border-bottom">
        <div className="container">
          <div className="case-visual-container">
            {renderVisual(project.slug)}
          </div>
        </div>
      </section>

      <section className="case-outcome-strip section-border-bottom">
        <div className="container case-outcome-inner">
          <span className="case-block-label font-mono"><CheckCircle2 size={14} className="text-green" /> VERIFIED OUTCOME</span>
          <p>{project.outcome}</p>
        </div>
      </section>

      {/* Deep-Dive Editorial Breakdown */}
      <section className="section case-body-section section-border-bottom">
        <div className="container case-body-container">
          {/* Section 1: Problem & Users Context */}
          <div className="case-grid-2">
            <div className="case-block">
              <div className="case-block-label font-mono">
                <span className="calibration-dot"></span>
                <span>01 // THE BUSINESS PROBLEM</span>
              </div>
              <h2 className="case-subheading font-display">Operational Bottlenecks & Friction</h2>
              <p className="case-paragraph">{project.clientProblem}</p>
            </div>

            <div className="case-block">
              <div className="case-block-label font-mono">
                <span className="calibration-dot"></span>
                <span>02 // USERS & OPERATIONAL CONTEXT</span>
              </div>
              <h2 className="case-subheading font-display">Who Uses the System Daily</h2>
              <p className="case-paragraph">{project.usersAndContext}</p>
            </div>
          </div>

          {/* Section 2: Technical Architecture & Development Approach */}
          <div className="case-arch-box">
            <div className="case-block-label font-mono">
              <Cpu size={14} className="text-orange" />
              <span>03 // ARCHITECTURAL BLUEPRINT</span>
            </div>
            <h2 className="case-subheading font-display">How We Structured the Solution</h2>
            <p className="case-paragraph">{project.developmentApproach}</p>

            <div className="arch-layers-list font-mono">
              {project.technicalArchitecture.map((layer, lIdx) => (
                <div key={lIdx} className="arch-layer-item">
                  <span className="layer-bullet">▪</span>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Key Functional Features */}
          <div className="case-features-block">
            <div className="case-block-label font-mono">
              <Layers size={14} className="text-orange" />
              <span>04 // SYSTEM DELIVERABLES & FEATURES</span>
            </div>
            <h2 className="case-subheading font-display">Engineered Capabilities</h2>

            <div className="features-grid">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="feature-item-card">
                  <div className="feat-num font-mono text-orange">0{fIdx + 1}</div>
                  <h3 className="feat-title font-display">{feat.title}</h3>
                  <p className="feat-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Challenges and Technical Decisions */}
          <div className="case-challenges-block">
            <div className="case-block-label font-mono">
              <ShieldAlert size={14} className="text-orange" />
              <span>05 // ENGINEERING TRADEOFFS & DECISIONS</span>
            </div>
            <h2 className="case-subheading font-display">Difficult Problems Solved</h2>

            <div className="challenges-grid">
              {project.challengesAndDecisions.map((cd, cIdx) => (
                <div key={cIdx} className="challenge-card">
                  <div className="ch-challenge">
                    <span className="ch-label font-mono">CHALLENGE:</span>
                    <p>{cd.challenge}</p>
                  </div>
                  <div className="ch-decision">
                    <span className="ch-label font-mono text-orange">DECISION & RESOLUTION:</span>
                    <p>{cd.decision}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Real Outcomes & Future Iterations */}
          <div className="case-grid-2">
            <div className="case-block result-card">
              <div className="case-block-label font-mono">
                <CheckCircle2 size={14} className="text-green" />
                <span>06 // VERIFIED OUTCOME</span>
              </div>
              <h2 className="case-subheading font-display">Operational Impact</h2>
              <p className="case-paragraph text-primary">{project.outcome}</p>
            </div>

            <div className="case-block lesson-card">
              <div className="case-block-label font-mono">
                <span className="calibration-dot"></span>
                <span>07 // CONTINUOUS IMPROVEMENT</span>
              </div>
              <h2 className="case-subheading font-display">Future Evolution</h2>
              <p className="case-paragraph">{project.lessonsOrImprovements}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="next-project-section">
        <div className="container">
          <div className="next-project-wrapper">
            <div className="next-meta font-mono">
              <span>NEXT SYSTEM CASE STUDY</span>
              <span className="text-orange">PROJECT {nextProject.number}</span>
            </div>
            <h3 className="next-title font-display">
              <Link to={`/work/${nextProject.slug}`} className="next-link">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={28} className="next-arrow" />
              </Link>
            </h3>
            <p className="next-tagline font-mono text-secondary">{nextProject.tagline}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
