import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_KIND_LABEL, PROJECTS, type CaseStudy } from '../../data/projects';
import { SEOHead } from '../../components/seo/SEOHead';
import { ProjectVisual } from '../../components/studio/ProductMockups';
import { Reveal } from '../../components/studio/StudioMotion';
import './WorkPage.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ecommerce', label: 'E-commerce' }
] as const;

const FEATURED = ['dome-enterprise', 'citi-books-platform', 'glucotrack-cgm', 'matrix-field-service', 'quran-ayat-app', 'fitness-mobile-app', 'warehouse-grn-automation'];

const matches = (project: CaseStudy, filter: string) => {
  if (filter === 'all') return true;
  if (filter === 'mobile') return project.filterCategory === 'mobile' || project.filterCategory === 'healthcare';
  if (filter === 'ecommerce') return project.filterCategory === 'ecommerce';
  if (filter === 'saas') return project.filterCategory === 'business-platforms';
  return ['enterprise', 'warehouse-sap', 'company-websites', 'business-platforms'].includes(project.filterCategory);
};

const SHOWCASE: Record<string, { name: string; category: string; summary: string; tags: string[] }> = {
  'dome-enterprise': {
    name: 'DOME',
    category: 'Business operations and reporting',
    summary: 'A system involving operational workflows, access permissions, audit trails, and reporting functionality.',
    tags: ['Operations', 'Permissions', 'Reporting']
  },
  'matrix-field-service': {
    name: 'Matrix',
    category: 'Field service app',
    summary: 'Jobs, live tracking, equipment scan and support chat for technicians in the field.',
    tags: ['React Native', 'Expo', 'TypeScript']
  },
  'quran-ayat-app': {
    name: 'Ayat',
    category: 'Quran companion',
    summary: 'A mobile companion for surah library, audio, qibla, prayer times and tasbeeh.',
    tags: ['React Native', 'Expo', 'Audio']
  },
  'fitness-mobile-app': {
    name: 'Fitness',
    category: 'Workout app',
    summary: 'Workout plans, weekly progress and activity tracking on mobile.',
    tags: ['Workouts', 'Progress', 'Activity']
  },
  'warehouse-grn-automation': {
    name: 'WPS',
    category: 'Warehouse production',
    summary: 'Scan and track on the floor, with a production dashboard connected to SAP.',
    tags: ['React', 'Node.js', 'SAP']
  },
  shoestops: {
    name: 'Shoestops',
    category: 'E-commerce Platform',
    summary: 'A modern e-commerce platform for footwear with fast search, secure checkout and a seamless user experience.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL']
  },
  'citi-books-platform': {
    name: 'Citi Books',
    category: 'Commerce storefront',
    summary: 'A store for books, art supplies, school supplies and office tools, with search, categories and a cart.',
    tags: ['Catalog', 'Search', 'Cart']
  },
  'glucotrack-cgm': {
    name: 'GlucoTrack',
    category: 'Glucose monitoring app',
    summary: 'A patient app for live readings, sensor pairing and a clinical record.',
    tags: ['.NET MAUI', 'ASP.NET', 'BLE']
  }
};

const present = (project: CaseStudy) => SHOWCASE[project.slug] ?? {
  name: project.title,
  category: project.category,
  summary: project.tagline,
  tags: project.technologies.slice(0, 4)
};

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]['id']>('all');

  const filteredProjects = useMemo(() => {
    const list = PROJECTS.filter(project => matches(project, activeFilter));
    return [...list].sort((a, b) => {
      const ai = FEATURED.indexOf(a.slug);
      const bi = FEATURED.indexOf(b.slug);
      if (ai === -1 && bi === -1) return 0;
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }, [activeFilter]);

  return (
    <main className="work-page" id="main-content">
      <SEOHead
        title="Software Projects & Case Studies — Tekmora"
        description="Browse software projects from Tekmora Solutions, including the problems they address, features developed, and technical decisions involved."
        canonical="https://www.tekmorasolution.com/work"
      />

      <section className="work-hero">
        <div className="container">
          <Reveal>
            <p className="studio-kicker">Projects</p>
            <h1>Software projects and selected work</h1>
            <p className="studio-lead">
              A look at software projects, the requirements behind them, and the development work involved. Each case study explains the system, its functionality, and the decisions that shaped the implementation.
            </p>
            <p className="studio-lead work-kind-note">
              Entries are labeled as client projects, internal products, demonstration work, or selected work so the portfolio stays clear about what each item represents.
            </p>
          </Reveal>
          <div className="filter-pills" role="tablist" aria-label="Project filters">
            {FILTERS.map(filter => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={activeFilter === filter.id ? 'is-on' : ''}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="work-list">
        <div className="container">
          {filteredProjects.length === 0 && <p>No projects in this category yet.</p>}
          <div className="work-grid">
            {filteredProjects.map(project => {
              const card = present(project);
              return (
                <article className="work-case" key={project.slug}>
                  <Link to={`/work/${project.slug}`} className="work-case-link">
                    <div className="work-case-media">
                      <ProjectVisual slug={project.slug} />
                    </div>
                    <div className="work-case-copy">
                      <p className="work-case-sub">
                        <span className="work-kind-badge">{PORTFOLIO_KIND_LABEL[project.portfolioKind ?? 'selected']}</span>
                        {card.category}
                      </p>
                      <h2>{card.name}</h2>
                      <p>{card.summary}</p>
                      <div className="tag-row">
                        {card.tags.map(tech => (
                          <span className="soft-tag" key={tech}>{tech}</span>
                        ))}
                      </div>
                      <span className="text-link">View Case Study <ArrowRight size={16} /></span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="work-glow">
            <div>
              <h2>Tell us what you’re planning.</h2>
              <p>Whether you’re starting a new product or improving an existing one, share what you need.</p>
            </div>
            <Link to="/contact" className="studio-btn">Discuss Your Project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
