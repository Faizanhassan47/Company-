import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../data/projects';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Layers, Share2, Check, Sparkles, Activity, Gauge } from 'lucide-react';
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
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSection, setActiveSection] = useState('sec-problem');

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];

  // Next project for cyclical navigation
  const nextProject: CaseStudy = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Scroll Spy for Sticky TOC
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['sec-problem', 'sec-users', 'sec-arch', 'sec-features', 'sec-challenges', 'sec-outcome'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

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
          <div className="case-img-meta-tag font-mono">
            <span className="live-dot" />
            <span>PRODUCTION SYSTEM INTERFACE // {project.category.toUpperCase()}</span>
          </div>
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
              <div className="fallback-tech font-mono">VERIFIED TEKMORA PRODUCTION SYSTEM</div>
            </div>
          </div>
        );
    }
  };

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${project.title} Case Study: ${project.tagline}`,
    description: project.clientProblem,
    author: {
      '@type': 'Organization',
      name: 'Tekmora'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tekmora',
      url: 'https://tekmora.com'
    },
    about: project.category
  };

  return (
    <main className="case-study-page" id="main-content">
      <SEOHead
        title={`${project.title} — Case Study & Technical Architecture`}
        description={`${project.title}: ${project.tagline}. An engineered system built with ${project.technologies.slice(0, 3).join(', ')}.`}
        canonical={`https://tekmora.com/work/${project.slug}`}
        type="article"
        jsonLd={caseStudyJsonLd}
      />

      {/* Copy Link Toast Notification */}
      {copiedLink && (
        <div className="feedback-toast font-mono" role="status">
          <Check size={16} className="text-green" />
          <span>CASE STUDY LINK COPIED TO CLIPBOARD</span>
        </div>
      )}

      {/* Top Breadcrumb & Hero Header */}
      <section className="case-hero-section section-border-bottom">
        <div className="container">
          <div className="case-breadcrumb-bar font-mono">
            <Link to="/work" className="back-link">
              <ArrowLeft size={14} />
              <span>Back to all work</span>
            </Link>
            <div className="case-header-actions-right">
              <button
                type="button"
                className="case-share-btn font-mono"
                onClick={handleShare}
                aria-label="Share case study link"
              >
                {copiedLink ? <Check size={13} className="text-green" /> : <Share2 size={13} className="text-orange" />}
                <span>{copiedLink ? 'LINK COPIED' : 'SHARE CASE STUDY'}</span>
              </button>
              <div className="case-meta-tag-group">
                <span className="case-num text-orange">SYSTEM {project.number}</span>
                <span className="sep">/</span>
                <span className="case-cat">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="case-header-content">
            <div className="case-kicker font-mono">SYSTEM SPECIFICATION // {project.number}</div>
            <h1 className="case-title font-display">{project.title}</h1>
            <p className="case-lead-tagline">{project.tagline}</p>
            <div className="case-service-tags font-mono">
              {project.services.map(service => (
                <span key={service} className="meta-tag">{service}</span>
              ))}
            </div>
          </div>

          {/* Metadata Specs Grid */}
          <div className="case-specs-matrix font-mono">
            <div className="case-spec-box spotlight-card">
              <span className="cs-lbl">DOMAIN / CONTEXT</span>
              <span className="cs-val">{project.client}</span>
            </div>
            <div className="case-spec-box spotlight-card">
              <span className="cs-lbl">TIMELINE / STATUS</span>
              <span className="cs-val">{project.year}</span>
            </div>
            <div className="case-spec-box spotlight-card">
              <span className="cs-lbl">TEKMORA RESPONSIBILITY</span>
              <span className="cs-val text-orange">{project.role}</span>
            </div>
            <div className="case-spec-box spotlight-card">
              <span className="cs-lbl">CORE TECHNOLOGIES</span>
              <span className="cs-val">{project.technologies.join(', ')}</span>
            </div>
          </div>

          {/* High-Impact Performance Metrics Bar */}
          <div className="case-kpi-strip font-mono">
            <div className="kpi-card spotlight-card">
              <div className="kpi-icon-wrap">
                <Gauge size={16} className="text-orange" />
              </div>
              <div className="kpi-info">
                <div className="kpi-val font-display">99.98%</div>
                <div className="kpi-lbl">TARGET AVAILABILITY</div>
              </div>
            </div>
            <div className="kpi-card spotlight-card">
              <div className="kpi-icon-wrap">
                <Activity size={16} className="text-orange" />
              </div>
              <div className="kpi-info">
                <div className="kpi-val font-display">&lt; 45ms</div>
                <div className="kpi-lbl">EDGE SYNC LATENCY</div>
              </div>
            </div>
            <div className="kpi-card spotlight-card">
              <div className="kpi-icon-wrap">
                <Sparkles size={16} className="text-orange" />
              </div>
              <div className="kpi-info">
                <div className="kpi-val font-display">100%</div>
                <div className="kpi-lbl">CUSTOM DETERMINISTIC CODE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual Feature Board */}
      <section className="section case-visual-section section-border-bottom">
        <div className="container">
          <div className="case-visual-container">
            {renderVisual(project.slug, project.title, project.imageUrl)}
          </div>
        </div>
      </section>

      {/* Verified Outcome Strip */}
      <section className="case-outcome-strip section-border-bottom">
        <div className="container case-outcome-inner">
          <span className="case-block-label font-mono">
            <CheckCircle2 size={14} className="text-green" /> VERIFIED OUTCOME
          </span>
          <p>{project.outcome}</p>
        </div>
      </section>

      {/* Sticky Table of Contents Navigation */}
      <nav className="case-sticky-toc-bar font-mono" aria-label="Case Study Navigation">
        <div className="container toc-container">
          <span className="toc-title text-orange">SPEC CONTENTS:</span>
          <div className="toc-links-row">
            <a href="#sec-problem" className={`toc-pill ${activeSection === 'sec-problem' ? 'is-active' : ''}`}>
              01 // PROBLEM
            </a>
            <a href="#sec-users" className={`toc-pill ${activeSection === 'sec-users' ? 'is-active' : ''}`}>
              02 // USERS
            </a>
            <a href="#sec-arch" className={`toc-pill ${activeSection === 'sec-arch' ? 'is-active' : ''}`}>
              03 // ARCHITECTURE
            </a>
            <a href="#sec-features" className={`toc-pill ${activeSection === 'sec-features' ? 'is-active' : ''}`}>
              04 // CAPABILITIES
            </a>
            <a href="#sec-challenges" className={`toc-pill ${activeSection === 'sec-challenges' ? 'is-active' : ''}`}>
              05 // TRADEOFFS
            </a>
            <a href="#sec-outcome" className={`toc-pill ${activeSection === 'sec-outcome' ? 'is-active' : ''}`}>
              06 // OUTCOME
            </a>
          </div>
        </div>
      </nav>

      {/* Deep-Dive Editorial Breakdown */}
      <section className="section case-body-section section-border-bottom">
        <div className="container case-body-container">
          {/* Section 1: Problem & Users Context */}
          <div className="case-grid-2">
            <div className="case-block spotlight-card" id="sec-problem">
              <div className="case-block-label font-mono">
                <span className="calibration-dot"></span>
                <span>01 // THE BUSINESS PROBLEM</span>
              </div>
              <h2 className="case-subheading font-display">Operational Bottlenecks & Friction</h2>
              <p className="case-paragraph">{project.clientProblem}</p>
            </div>

            <div className="case-block spotlight-card" id="sec-users">
              <div className="case-block-label font-mono">
                <span className="calibration-dot"></span>
                <span>02 // USERS & OPERATIONAL CONTEXT</span>
              </div>
              <h2 className="case-subheading font-display">Who Uses the System Daily</h2>
              <p className="case-paragraph">{project.usersAndContext}</p>
            </div>
          </div>

          {/* Section 2: Technical Architecture & Development Approach */}
          <div className="case-arch-box spotlight-card" id="sec-arch">
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
          <div className="case-features-block" id="sec-features">
            <div className="case-block-label font-mono">
              <Layers size={14} className="text-orange" />
              <span>04 // SYSTEM DELIVERABLES & CAPABILITIES</span>
            </div>
            <h2 className="case-subheading font-display">Engineered Workflows</h2>

            <div className="features-grid">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="feature-item-card spotlight-card">
                  <div className="feat-num font-mono text-orange">0{fIdx + 1}</div>
                  <h3 className="feat-title font-display">{feat.title}</h3>
                  <p className="feat-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Challenges and Technical Decisions */}
          <div className="case-challenges-block" id="sec-challenges">
            <div className="case-block-label font-mono">
              <ShieldAlert size={14} className="text-orange" />
              <span>05 // ENGINEERING TRADEOFFS & DECISIONS</span>
            </div>
            <h2 className="case-subheading font-display">Difficult Decisions & Resolutions</h2>

            <div className="challenges-grid">
              {project.challengesAndDecisions.map((cd, cIdx) => (
                <div key={cIdx} className="challenge-card spotlight-card">
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
          <div className="case-grid-2" id="sec-outcome">
            <div className="case-block result-card spotlight-card">
              <div className="case-block-label font-mono">
                <CheckCircle2 size={14} className="text-green" />
                <span>06 // VERIFIED OUTCOME</span>
              </div>
              <h2 className="case-subheading font-display">Operational Impact</h2>
              <p className="case-paragraph text-primary">{project.outcome}</p>
            </div>

            <div className="case-block lesson-card spotlight-card">
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
