import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import './SelectedWorkSection.css';

interface ProjectFeature {
  id: string;
  number: string;
  category: string;
  title: string;
  challenge: string;
  whatWeBuilt: string;
  technologies: string[];
  outcomes: { label: string; val: string }[];
  slug: string;
  imageSrc: string;
  imageAlt: string;
  visualPosition: 'right' | 'left';
}

const FEATURED_PROJECTS: ProjectFeature[] = [
  {
    id: 'dome-enterprise',
    number: '01',
    category: 'Operations & Logistics Platform',
    title: 'Centralized Logistics & Dispatch Portal',
    challenge: 'Operations were distributed across multiple disconnected departments and manual spreadsheets, resulting in delayed order dispatches and inventory discrepancies.',
    whatWeBuilt: 'A centralized operational platform for fleet dispatching, warehouse inventory intake, and real-time ledger management with sub-120ms database queries.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    outcomes: [
      { label: 'Depts Unified', val: '4 Branches' },
      { label: 'Query Speed', val: '< 120ms' },
      { label: 'Daily Volume', val: '14,800+ Txns' }
    ],
    slug: 'dome-enterprise',
    imageSrc: '/images/projects/dome-enterprise.jpg',
    imageAlt: 'DOME Enterprise Logistics and Dispatch Platform interface',
    visualPosition: 'right'
  },
  {
    id: 'matrix-field-service',
    number: '02',
    category: 'Mobile Application',
    title: 'Matrix Field Service & Inspection Suite',
    challenge: 'Field technicians operating in remote substations with zero internet connection suffered audit data loss, dragging customer billing turnaround out to 14 days.',
    whatWeBuilt: 'An offline-first mobile application featuring deterministic local SQLite persistence and cryptographic GPS-verified photographic sign-offs.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQLite'],
    outcomes: [
      { label: 'Offline Sync', val: '100% Reliable' },
      { label: 'GPS Geotagging', val: 'Instant' },
      { label: 'Billing Cycle', val: 'Same-Day' }
    ],
    slug: 'matrix-field-service',
    imageSrc: '/images/projects/matrix-field.jpg',
    imageAlt: 'Matrix Field Service Mobile Application screens',
    visualPosition: 'left'
  },
  {
    id: 'shoestops',
    number: '03',
    category: 'E-Commerce Platform',
    title: 'Shoestops High-Performance Storefront',
    challenge: 'A legacy monolithic codebase suffered from slow initial load times (>4s) and high friction on mobile checkout flows.',
    whatWeBuilt: 'A modern, edge-rendered commercial storefront with instantaneous catalog search, multi-variant filtering, and streamlined checkout.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    outcomes: [
      { label: 'PageSpeed Score', val: '98 / 100' },
      { label: 'Conversion Lift', val: '+42%' },
      { label: 'Catalog Search', val: '< 50ms' }
    ],
    slug: 'shoestops',
    imageSrc: '/images/projects/shoestops-ecommerce.jpg',
    imageAlt: 'Shoestops high-performance e-commerce storefront',
    visualPosition: 'right'
  }
];

export const SelectedWorkSection: React.FC = () => {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        {/* Section Meta Header */}
        <div className="work-header-block">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>SELECTED WORK</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="work-title">
              Software we've designed for <span className="text-orange">real businesses.</span>
            </h2>
            <p className="work-lead-text">
              A selection of web applications, mobile platforms, and operational systems built to solve complicated business bottlenecks and power critical workflows.
            </p>
          </motion.div>
        </div>

        {/* Project Case Cards - Alternating Layouts with Large Real Screenshots */}
        <div className="work-projects-list">
          {FEATURED_PROJECTS.map((project) => (
            <motion.article 
              key={project.id}
              className={`project-case-card ${project.visualPosition === 'left' ? 'layout-visual-left' : 'layout-visual-right'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              {/* Text / Information Side */}
              <div className="project-case-content">
                <div>
                  <div className="project-header-pill font-mono">
                    <span className="project-index text-orange">{project.number}</span>
                    <span className="project-cat-name">{project.category}</span>
                  </div>

                  <h3 className="project-headline">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  {/* Challenge & What We Built Sections */}
                  <div className="project-narrative-block">
                    <div className="narrative-item">
                      <span className="narrative-label font-mono">THE CHALLENGE</span>
                      <p className="narrative-text">{project.challenge}</p>
                    </div>

                    <div className="narrative-item">
                      <span className="narrative-label font-mono">WHAT WE BUILT</span>
                      <p className="narrative-text">{project.whatWeBuilt}</p>
                    </div>
                  </div>

                  {/* Outcome Metrics Strip */}
                  <div className="project-outcomes">
                    {project.outcomes.map((out) => (
                      <div key={out.label} className="outcome-item">
                        <span className="outcome-val font-mono">{out.val}</span>
                        <span className="outcome-lbl font-mono">{out.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="project-tech-strip font-mono">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge-item">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Case Study Link CTA */}
                <div className="project-case-actions">
                  <Link to={`/work/${project.slug}`} className="btn-case-study">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Large Real Product Screenshot Visual */}
              <div className="project-case-visual">
                <Link to={`/work/${project.slug}`} className="visual-image-wrapper" aria-label={`View ${project.title} Case Study`}>
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="project-screenshot-img"
                    loading="lazy"
                  />
                  <div className="image-overlay-reveal">
                    <span className="overlay-pill font-mono">
                      <span>Explore Full Case Study</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Callout to Full Archive */}
        <div className="work-footer-cta">
          <span>Looking for more industry-specific implementations?</span>
          <Link to="/work" className="btn-all-work font-mono">
            <span>Explore All Work & Case Studies</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
