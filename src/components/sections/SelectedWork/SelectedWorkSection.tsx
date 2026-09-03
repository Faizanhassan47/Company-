import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { DomeInterfaceGraphic } from '../../visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../../visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../../visuals/GrnWorkflowGraphic';
import { ShoestopsGraphic } from '../../visuals/ShoestopsGraphic';
import { CommentsFusionGraphic } from '../../visuals/CommentsFusionGraphic';
import { TranscendGraphic } from '../../visuals/TranscendGraphic';
import { fadeInUp } from '../../../utils/animations';
import './SelectedWorkSection.css';

export const SelectedWorkSection: React.FC = () => {
  const dome = PROJECTS.find(p => p.id === 'dome-enterprise');
  const matrix = PROJECTS.find(p => p.id === 'matrix-field-service');
  const grn = PROJECTS.find(p => p.id === 'warehouse-grn-automation');
  const shoestops = PROJECTS.find(p => p.id === 'shoestops');
  const comments = PROJECTS.find(p => p.id === 'comments-fusion');
  const transcend = PROJECTS.find(p => p.id === 'transcend-healthcare');

  return (
    <section className="section work-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-meta">
          <span className="section-number">03</span>
          <span>// FEATURED SYSTEMS</span>
        </div>

        <motion.div 
          className="work-section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="work-headline font-display">
            SELECTED SYSTEMS<br />
            <span className="italic-accent">BUILT TO WORK.</span>
          </h2>
          <p className="work-subtitle">
            Six operational systems engineered to solve complicated business workflows, disconnected databases, and real-world coordination challenges.
          </p>
        </motion.div>

        {/* 01. DOME Enterprise Platform - Full-Width Application Visual */}
        {dome && (
          <motion.article 
            className="featured-project project-dome" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="project-header-bar">
              <div className="project-num-badge font-mono">
                <span className="text-orange">{dome.number}</span> / {dome.category}
              </div>
              <div className="project-year font-mono">{dome.year}</div>
            </div>

            <div className="dome-layout-split">
              <div className="dome-meta-rail font-mono">
                <div className="rail-item">
                  <span className="rail-label">CLIENT CONTEXT</span>
                  <span className="rail-val">{dome.client}</span>
                </div>
                <div className="rail-item">
                  <span className="rail-label">STACK</span>
                  <span className="rail-val">{dome.technologies.slice(0, 3).join(', ')}</span>
                </div>
                <div className="rail-item">
                  <span className="rail-label">OUTCOME</span>
                  <span className="rail-val">4 Depts Unified</span>
                </div>
              </div>

              <div className="dome-main-content">
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${dome.slug}`}>{dome.title}</Link>
                </h3>
                <p className="project-tagline-text">{dome.tagline}</p>
                <div className="project-cta-group font-mono">
                  <Link to={`/work/${dome.slug}`} className="btn-link case-link">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="dome-visual-wrapper">
              <DomeInterfaceGraphic />
            </div>
          </motion.article>
        )}

        {/* 02. Matrix Field Service Application - Asymmetric Mobile Screens */}
        {matrix && (
          <motion.article 
            className="featured-project project-matrix" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="matrix-grid">
              <div className="matrix-content-col">
                <div className="project-num-badge font-mono">
                  <span className="text-orange">{matrix.number}</span> / {matrix.category}
                </div>
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${matrix.slug}`}>{matrix.title}</Link>
                </h3>
                <p className="project-tagline-text">{matrix.tagline}</p>
                
                <div className="matrix-tech-list font-mono">
                  {matrix.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="matrix-highlights font-mono">
                  <div className="hl-item">✓ 100% Offline SQLite Persistence</div>
                  <div className="hl-item">✓ Geocoded Photographic Proof</div>
                  <div className="hl-item">✓ Same-Day Invoicing Turnaround</div>
                </div>

                <div className="project-cta-group font-mono">
                  <Link to={`/work/${matrix.slug}`} className="btn-link case-link">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="matrix-visual-col">
                <MatrixMobileGraphic />
              </div>
            </div>
          </motion.article>
        )}

        {/* 03. Warehouse & GRN Automation - Horizontal Document-to-System Workflow */}
        {grn && (
          <motion.article 
            className="featured-project project-grn" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="grn-header">
              <div>
                <div className="project-num-badge font-mono">
                  <span className="text-orange">{grn.number}</span> / {grn.category}
                </div>
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${grn.slug}`}>{grn.title}</Link>
                </h3>
              </div>
              <p className="grn-tagline-text">{grn.tagline}</p>
            </div>

            <div className="grn-visual-container">
              <GrnWorkflowGraphic />
            </div>

            <div className="grn-footer-meta font-mono">
              <div className="meta-block">
                <span className="meta-lbl">STACK:</span>
                <span className="meta-v">{grn.technologies.slice(0, 4).join(' • ')}</span>
              </div>
              <Link to={`/work/${grn.slug}`} className="btn-link case-link">
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.article>
        )}

        {/* 04. Shoestops - Warm Editorial E-Commerce Storefront */}
        {shoestops && (
          <motion.article 
            className="featured-project project-shoestops" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="shoestops-grid">
              <div className="shoestops-visual-col">
                <ShoestopsGraphic />
              </div>

              <div className="shoestops-content-col">
                <div className="project-num-badge font-mono">
                  <span className="text-orange">{shoestops.number}</span> / {shoestops.category}
                </div>
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${shoestops.slug}`}>{shoestops.title}</Link>
                </h3>
                <p className="project-tagline-text">{shoestops.tagline}</p>

                <div className="shoestops-tech-list font-mono">
                  {shoestops.technologies.slice(0, 4).map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-cta-group font-mono">
                  <Link to={`/work/${shoestops.slug}`} className="btn-link case-link">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* 05. Comments Fusion - Dark Operational Pipeline */}
        {comments && (
          <motion.article 
            className="featured-project project-comments" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="comments-grid">
              <div className="comments-content-col">
                <div className="project-num-badge font-mono">
                  <span className="text-orange">{comments.number}</span> / {comments.category}
                </div>
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${comments.slug}`}>{comments.title}</Link>
                </h3>
                <p className="project-tagline-text">{comments.tagline}</p>

                <div className="comments-highlights font-mono">
                  <div className="hl-item">✓ Queue Worker Automation</div>
                  <div className="hl-item">✓ Rate-Limiting Jitter Protocol</div>
                  <div className="hl-item">✓ 15+ Hours Saved Weekly</div>
                </div>

                <div className="project-cta-group font-mono">
                  <Link to={`/work/${comments.slug}`} className="btn-link case-link">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="comments-visual-col">
                <CommentsFusionGraphic />
              </div>
            </div>
          </motion.article>
        )}

        {/* 06. Transcend Healthcare - Calm Light Editorial Composition */}
        {transcend && (
          <motion.article 
            className="featured-project project-transcend" 
            data-cursor="view"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="transcend-grid">
              <div className="transcend-visual-col">
                <TranscendGraphic />
              </div>

              <div className="transcend-content-col">
                <div className="project-num-badge font-mono">
                  <span className="text-orange">{transcend.number}</span> / {transcend.category}
                </div>
                <h3 className="project-display-title font-display">
                  <Link to={`/work/${transcend.slug}`}>{transcend.title}</Link>
                </h3>
                <p className="project-tagline-text">{transcend.tagline}</p>

                <div className="transcend-tech-list font-mono">
                  {transcend.technologies.slice(0, 4).map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-cta-group font-mono">
                  <Link to={`/work/${transcend.slug}`} className="btn-link case-link">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* View All Work Action */}
        <div className="view-all-work-wrapper font-mono">
          <Link to="/work" className="btn btn-secondary btn-lg">
            <span>VIEW ALL 17 SYSTEMS & ARCHITECTURES</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
