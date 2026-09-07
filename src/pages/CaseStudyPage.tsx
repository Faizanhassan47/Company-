import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, type CaseStudy } from '../data/projects';
import {
  Activity, ArrowLeft, ArrowRight, Briefcase, Calendar, Cloud, Code,
  Database, Headphones, Languages, Layers3, LayoutDashboard, Network,
  Palette, PanelsTopLeft, ReceiptText, ShieldCheck,
  Target, Timer, Users
} from 'lucide-react';
import {
  SiDotnet, SiExpo, SiExpress, SiFramer, SiJavascript, SiMongodb,
  SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiSap,
  SiSharp, SiSqlite, SiStrapi, SiTailwindcss, SiTypescript
} from 'react-icons/si';
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
import './CaseStudyPage.css';

const getTechnologyIcon = (technology: string): React.ElementType => {
  const name = technology.toLowerCase();

  if (name.includes('react native')) return SiReact;
  if (name.includes('expo')) return SiExpo;
  if (name === 'react') return SiReact;
  if (name.includes('postgres')) return SiPostgresql;
  if (name.includes('sqlite')) return SiSqlite;
  if (name.includes('mongo')) return SiMongodb;
  if (name.includes('sql') || name.includes('entity framework')) return Database;
  if (name.includes('sap')) return SiSap;
  if (name.includes('node')) return SiNodedotjs;
  if (name.includes('express')) return SiExpress;
  if (name.includes('typescript')) return SiTypescript;
  if (name.includes('tailwind')) return SiTailwindcss;
  if (name.includes('css')) return Palette;
  if (name.includes('next')) return SiNextdotjs;
  if (name.includes('rest') || name.includes('api')) return Network;
  if (name.includes('jwt') || name.includes('auth')) return ShieldCheck;
  if (name.includes('i18n') || name.includes('localization')) return Languages;
  if (name.includes('strapi')) return SiStrapi;
  if (name.includes('cms')) return PanelsTopLeft;
  if (name.includes('framer')) return SiFramer;
  if (name.includes('audio')) return Headphones;
  if (name.includes('c#')) return SiSharp;
  if (name.includes('.net')) return SiDotnet;
  if (name.includes('php')) return SiPhp;
  if (name.includes('javascript')) return SiJavascript;
  if (name.includes('cloud')) return Cloud;
  return Layers3;
};

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
  const project: CaseStudy | undefined = PROJECTS[currentIdx];

  // Get next 4 projects for "Related Projects"
  const relatedProjects = Array.from({ length: 4 }).map((_, i) => PROJECTS[(currentIdx + i + 1) % PROJECTS.length]);

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
        <div className="case-hero-img-wrapper">
          <img src={img} alt={`${title} interface overview`} className="case-hero-img" fetchPriority="high" decoding="async" />
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
          <div className="case-hero-img-wrapper fallback-poster">
            <div className="fallback-title font-display">{title}</div>
          </div>
        );
    }
  };

  return (
    <main className="case-page" id="main-content">
      <SEOHead
        title={`${project.title} | Case Study`}
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

      {/* 1. Hero Section (Dark) */}
      <section className="case-hero-section">
        <div className="container case-hero-grid">
          <div className="case-hero-content">
            <Link to="/work" className="case-back-link font-mono">
              <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="case-hero-category font-mono">
              {project.category.toUpperCase()}
            </div>

            <h1 className="case-hero-title font-display">{project.title}</h1>
            <p className="case-hero-tagline">{project.tagline}</p>

            <div className="case-hero-pills font-mono">
              {project.highlights?.map(hl => (
                <span key={hl} className="hero-pill"><LayoutDashboard size={12} /> {hl}</span>
              ))}
            </div>

            <div className="case-hero-actions">
              <Link to="/contact" className="btn btn-primary" onClick={() => trackEvent('case_study_cta', 'engagement', project.slug)}>Discuss This Project <ArrowRight size={16}/></Link>
              <Link to="/contact" className="btn btn-outline-light">Get in Touch</Link>
            </div>
          </div>

          <div className="case-hero-visual-wrapper">
             <div className="hero-ideas-arrow">
               <div className="ideas-text font-display">Engineered<br/>for scale</div>
               <svg viewBox="0 0 100 50" className="hero-arrow-svg">
                  <path d="M10,40 Q50,10 90,30" stroke="var(--accent-orange)" fill="transparent" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="90,30 85,25 80,35" fill="var(--accent-orange)" />
               </svg>
            </div>
            {renderVisual(project.slug, project.title, project.imageUrl)}
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="case-overview-section">
        <div className="container case-split-grid">
          <div className="case-split-left">
            <span className="section-label font-mono">OVERVIEW</span>
            <h2 className="case-section-title font-display">About the Project</h2>
            <p className="case-section-desc">{project.clientProblem}</p>
            <p className="case-section-desc mt-4">{project.developmentApproach}</p>
          </div>

          <div className="case-split-right">
            <div className="info-cards-grid">
              <div className="info-card">
                <Briefcase className="info-icon text-orange" size={24} />
                <div className="info-data">
                  <span className="info-title font-mono">Industry</span>
                  <span className="info-val">{project.client}</span>
                </div>
              </div>
              <div className="info-card">
                <Code className="info-icon text-orange" size={24} />
                <div className="info-data">
                  <span className="info-title font-mono">Platform</span>
                  <span className="info-val">{project.category}</span>
                </div>
              </div>
              <div className="info-card">
                <Users className="info-icon text-orange" size={24} />
                <div className="info-data">
                  <span className="info-title font-mono">Role</span>
                  <span className="info-val">{project.role}</span>
                </div>
              </div>
              <div className="info-card">
                <Calendar className="info-icon text-orange" size={24} />
                <div className="info-data">
                  <span className="info-title font-mono">Timeline</span>
                  <span className="info-val">{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="case-features-section">
        <div className="container case-split-grid">
          <div className="case-split-left">
            <span className="section-label font-mono">KEY FEATURES</span>
            <h2 className="case-section-title font-display">Built for the Field.<br/>Designed for Results.</h2>
            <p className="case-section-desc">Our systems are engineered with powerful features that simplify on-ground operations and improve team productivity.</p>
            <Link to="/contact" className="btn btn-outline mt-6">Explore All Features <ArrowRight size={16}/></Link>
          </div>

          <div className="case-split-right">
            <div className="features-grid">
              {project.keyFeatures.slice(0, 4).map((feat, i) => (
                <div className="feature-card" key={i}>
                  <div className="feat-icon-box text-orange"><Target size={20} /></div>
                  <h4 className="feat-title">{feat.title}</h4>
                  <p className="feat-desc">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technologies & Impact Section */}
      <section className="case-tech-impact-section">
        <div className="container case-split-grid">
          <div className="case-split-left border-right">
            <span className="section-label font-mono">TECHNOLOGIES</span>
            <h2 className="case-section-title font-display">Tools & <span className="text-orange">Technologies</span></h2>
            <p className="case-section-desc mb-8">A modern, robust stack engineered to ensure performance, scalability and reliability.</p>
            <div className="tech-icons-grid">
              {project.technologies.slice(0, 4).map(tech => {
                const TechnologyIcon = getTechnologyIcon(tech);
                return (
                  <div className="tech-icon-item" key={tech}>
                    <div className="tech-icon-circle" aria-hidden="true">
                      <TechnologyIcon size={25} className="text-orange" />
                    </div>
                    <span className="tech-name">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="case-split-right pad-left">
            <div className="impact-content">
              <span className="section-label font-mono">IMPACT</span>
              <h2 className="case-section-title font-display">Real Business <span className="text-orange">Impact</span></h2>
              <p className="case-section-desc impact-summary">{project.outcome}</p>
              <div className="impact-metrics-grid">
                {project.mockMetrics?.map((m, i) => (
                  <div className="impact-metric" key={i}>
                    <span className="impact-icon" aria-hidden="true">
                      {i === 0 ? <Timer size={18} /> : i === 1 ? <ShieldCheck size={18} /> : <ReceiptText size={18} />}
                    </span>
                    <div className="impact-val font-display text-orange">{m.value}</div>
                    <div className="impact-label">{m.label}</div>
                    <div className="impact-detail">{i === 0 ? 'from 45 mins' : i === 1 ? 'vs. manual process' : 'processed successfully'}</div>
                  </div>
                ))}
                {!project.mockMetrics && (
                  <div className="impact-metric">
                    <span className="impact-icon" aria-hidden="true"><Activity size={18} /></span>
                    <div className="impact-val font-display text-orange">100%</div>
                    <div className="impact-label">Operational Visibility</div>
                    <div className="impact-detail">across operations</div>
                  </div>
                )}
              </div>
            </div>
            <div className="impact-visual" aria-hidden="true">
              <div className="impact-orbit impact-orbit-one"></div>
              <div className="impact-orbit impact-orbit-two"></div>
              <div className="impact-glass-panel"></div>
              <span className="impact-chip chip-fast">Faster</span>
              <span className="impact-chip chip-smart">Smarter</span>
              <span className="impact-chip chip-accurate">More Accurate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section (Dark) */}
      <section className="case-cta-section">
        <div className="container cta-flex-container">
          <div className="cta-content">
            <span className="hero-subtitle font-mono">LET'S BUILD TOGETHER</span>
            <h2 className="cta-title font-display">Have a similar idea?</h2>
            <p className="cta-desc">We can help you turn it into a powerful digital solution tailored to your operational needs.</p>
            <Link to="/contact" className="btn btn-primary mt-4">Discuss Your Project <ArrowRight size={16}/></Link>
          </div>
          <div className="cta-visual">
            <div className="cta-ideas-arrow">
               <div className="ideas-text font-display" style={{color: '#fff'}}>From Ideas<br/>to Real Impact</div>
               <svg viewBox="0 0 100 50" className="hero-arrow-svg">
                  <path d="M10,40 Q50,10 90,30" stroke="var(--accent-orange)" fill="transparent" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="90,30 85,25 80,35" fill="var(--accent-orange)" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Projects */}
      <section className="case-related-section">
        <div className="container">
          <div className="related-header">
            <span className="section-label font-mono mb-0">RELATED PROJECTS</span>
            <Link to="/work" className="btn-link text-orange">View All Projects <ArrowRight size={16} /></Link>
          </div>
          
          <div className="related-grid mt-8">
            {relatedProjects.map(rp => {
              const displayImg = rp.thumbnailUrl || rp.imageUrl;
              return (
                <Link to={`/work/${rp.slug}`} className="related-card" key={rp.id}>
                  <div className="related-img-box">
                    {displayImg ? (
                      <img src={displayImg} alt={rp.title} className="related-img" />
                    ) : (
                      <div className="related-fallback font-mono">{rp.title}</div>
                    )}
                  </div>
                  <div className="related-content">
                    <h4 className="related-title">{rp.title}</h4>
                    <p className="related-cat">{rp.category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
