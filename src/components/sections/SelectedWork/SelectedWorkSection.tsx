import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../data/projects';
import { ArrowUpRight, Activity } from 'lucide-react';
import { DomeInterfaceGraphic } from '../../visuals/DomeInterfaceGraphic';
import { MatrixMobileGraphic } from '../../visuals/MatrixMobileGraphic';
import { GrnWorkflowGraphic } from '../../visuals/GrnWorkflowGraphic';
import { ShoestopsGraphic } from '../../visuals/ShoestopsGraphic';
import { CommentsFusionGraphic } from '../../visuals/CommentsFusionGraphic';
import { TranscendGraphic } from '../../visuals/TranscendGraphic';
import { fadeInUp } from '../../../utils/animations';
import { ScrollTextReveal } from '../../ui/ScrollTextReveal';
import { MagneticButton } from '../../ui/MagneticButton';
import './SelectedWorkSection.css';

type KpiFilter = 'all' | 'realtime' | 'erp' | 'field' | 'performance';

export const SelectedWorkSection: React.FC = () => {
  const [kpiFilter, setKpiFilter] = useState<KpiFilter>('all');

  const cgm = PROJECTS.find(p => p.id === 'glucotrack-cgm');
  const dome = PROJECTS.find(p => p.id === 'dome-enterprise');
  const matrix = PROJECTS.find(p => p.id === 'matrix-field-service');
  const grn = PROJECTS.find(p => p.id === 'warehouse-grn-automation');
  const shoestops = PROJECTS.find(p => p.id === 'shoestops');
  const comments = PROJECTS.find(p => p.id === 'comments-fusion');
  const transcend = PROJECTS.find(p => p.id === 'transcend-healthcare');

  const isCgmVisible = kpiFilter === 'all' || kpiFilter === 'realtime' || kpiFilter === 'field';
  const isDomeVisible = kpiFilter === 'all' || kpiFilter === 'erp' || kpiFilter === 'performance';
  const isMatrixVisible = kpiFilter === 'all' || kpiFilter === 'field' || kpiFilter === 'realtime';
  const isGrnVisible = kpiFilter === 'all' || kpiFilter === 'erp';
  const isShoestopsVisible = kpiFilter === 'all' || kpiFilter === 'performance';
  const isCommentsVisible = kpiFilter === 'all' || kpiFilter === 'realtime' || kpiFilter === 'performance';
  const isTranscendVisible = kpiFilter === 'all' || kpiFilter === 'realtime' || kpiFilter === 'performance';

  let runningIndex = 0;
  const cgmIndex = isCgmVisible ? runningIndex++ : -1;
  const domeIndex = isDomeVisible ? runningIndex++ : -1;
  const matrixIndex = isMatrixVisible ? runningIndex++ : -1;
  const grnIndex = isGrnVisible ? runningIndex++ : -1;
  const shoestopsIndex = isShoestopsVisible ? runningIndex++ : -1;
  const commentsIndex = isCommentsVisible ? runningIndex++ : -1;
  const transcendIndex = isTranscendVisible ? runningIndex++ : -1;

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
          <ScrollTextReveal className="work-subtitle" as="p">
            Six operational systems engineered to solve complicated business workflows, disconnected databases, and real-world coordination challenges.
          </ScrollTextReveal>
        </motion.div>

        {/* Live KPI Telemetry & Architecture Scrubber Bar */}
        <div className="impact-scrubber-bar font-mono spotlight-card">
          <div className="scrubber-header">
            <div className="scrubber-label">
              <Activity size={14} className="text-orange" />
              <span className="scrubber-title">PRODUCTION KPI BENCHMARKS</span>
            </div>
            <span className="scrubber-caption">Filter architectures by verifiable operational outcomes:</span>
          </div>
          
          <div className="scrubber-filters">
            {[
              { id: 'all', label: 'ALL ARCHITECTURES (7)' },
              { id: 'realtime', label: '⚡ REAL-TIME & TELEMETRY' },
              { id: 'erp', label: '🏭 ERP & WMS PIPELINES' },
              { id: 'field', label: '📱 FIELD & MOBILE OPS' },
              { id: 'performance', label: '🚀 HIGH-SCALE CLOUD' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`scrubber-tab ${kpiFilter === tab.id ? 'active' : ''}`}
                onClick={() => setKpiFilter(tab.id as KpiFilter)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 00. GlucoTrack CGM Platform */}
        {cgm && isCgmVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': cgmIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-matrix" 
              data-cursor="view"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="matrix-grid">
                <div className="matrix-content-col">
                  <div className="project-num-badge font-mono">
                    <span className="text-orange">{cgm.number}</span> / {cgm.category}
                  </div>
                  <h3 className="project-display-title font-display">
                    <Link to={`/work/${cgm.slug}`}>{cgm.title}</Link>
                  </h3>
                  <p className="project-tagline-text">{cgm.tagline}</p>
                  
                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">&lt; 20ms</span>
                      <span className="kpi-chip-lbl">GATT Sync</span>
                      <span className="kpi-chip-tooltip">Direct .NET MAUI BLE GATT notify loop with zero UI thread contention</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">100%</span>
                      <span className="kpi-chip-lbl">Offline Cache</span>
                      <span className="kpi-chip-tooltip">Local SQLite persistence with deterministic cloud synchronization</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">Zero</span>
                      <span className="kpi-chip-lbl">Data Loss</span>
                      <span className="kpi-chip-tooltip">Simulated hardware peripheral tested to 100,000 continuous readings</span>
                    </div>
                  </div>

                  <div className="matrix-tech-list font-mono">
                    {cgm.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="matrix-highlights font-mono">
                    <div className="hl-item">✓ .NET MAUI Cross-Platform</div>
                    <div className="hl-item">✓ BLE GATT Integration</div>
                    <div className="hl-item">✓ Real-Time Clinical Dashboard</div>
                  </div>

                  <div className="project-cta-group font-mono">
                    <Link to={`/work/${cgm.slug}`} className="btn-link case-link">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                <div className="matrix-visual-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-secondary)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                  <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'var(--font-mono)', opacity: 0.5 }}>
                    CGM UI Visual
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        )}


        {/* 01. DOME Enterprise Platform - Full-Width Application Visual */}
        {dome && isDomeVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': domeIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-dome" 
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

                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">4 Depts</span>
                      <span className="kpi-chip-lbl">Unified</span>
                      <span className="kpi-chip-tooltip">Sales, Warehousing, Production, and Finance consolidated into one pane</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">&lt; 120ms</span>
                      <span className="kpi-chip-lbl">Query Speed</span>
                      <span className="kpi-chip-tooltip">PostgreSQL indexing with multi-tenant row security & Redis cache</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">10k+</span>
                      <span className="kpi-chip-lbl">Daily Txns</span>
                      <span className="kpi-chip-tooltip">High-throughput transactional integrity with zero double-entry errors</span>
                    </div>
                  </div>

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
          </div>
        )}

        {/* 02. Matrix Field Service Application - Asymmetric Mobile Screens */}
        {matrix && isMatrixVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': matrixIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-matrix" 
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
                  
                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">100%</span>
                      <span className="kpi-chip-lbl">Offline SQLite</span>
                      <span className="kpi-chip-tooltip">Field technicians operate seamlessly in zero-connectivity environments</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">Instant</span>
                      <span className="kpi-chip-lbl">GPS Geotag</span>
                      <span className="kpi-chip-tooltip">Cryptographic GPS & photo verification for tamper-proof customer sign-offs</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">Same-Day</span>
                      <span className="kpi-chip-lbl">Billing Cycle</span>
                      <span className="kpi-chip-tooltip">Turnaround accelerated from 14 days to same-day automated ERP invoicing</span>
                    </div>
                  </div>

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
          </div>
        )}

        {/* 03. Warehouse & GRN Automation - Horizontal Document-to-System Workflow */}
        {grn && isGrnVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': grnIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-grn" 
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

              {/* Interactive KPI Benchmark Chips */}
              <div className="project-kpi-chips font-mono">
                <div className="kpi-chip">
                  <span className="kpi-chip-dot text-orange">●</span>
                  <span className="kpi-chip-val">18 Mins</span>
                  <span className="kpi-chip-lbl">Pallet Intake</span>
                  <span className="kpi-chip-tooltip">Warehouse dock intake slashed from 4.5 hours down to 18 minutes</span>
                </div>
                <div className="kpi-chip">
                  <span className="kpi-chip-dot text-emerald">●</span>
                  <span className="kpi-chip-val">SAP B1</span>
                  <span className="kpi-chip-lbl">Service Layer</span>
                  <span className="kpi-chip-tooltip">Direct bidirectional REST sync with automated purchase order line matching</span>
                </div>
                <div className="kpi-chip">
                  <span className="kpi-chip-dot text-dim">●</span>
                  <span className="kpi-chip-val">0.00%</span>
                  <span className="kpi-chip-lbl">Ledger Drift</span>
                  <span className="kpi-chip-tooltip">Instant barcode verification prevents misplaced lots and duplicate receipts</span>
                </div>
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
          </div>
        )}

        {/* 04. Shoestops - Warm Editorial E-Commerce Storefront */}
        {shoestops && isShoestopsVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': shoestopsIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-shoestops" 
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

                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">98 / 100</span>
                      <span className="kpi-chip-lbl">PageSpeed</span>
                      <span className="kpi-chip-tooltip">Server-rendered edge deployment with sub-450ms Core Web Vitals</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">+42%</span>
                      <span className="kpi-chip-lbl">Conversion Lift</span>
                      <span className="kpi-chip-tooltip">Optimized checkout funnel and frictionless guest purchasing flows</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">&lt; 50ms</span>
                      <span className="kpi-chip-lbl">Catalog Search</span>
                      <span className="kpi-chip-tooltip">Client-side in-memory index for instantaneous multi-variant filtering</span>
                    </div>
                  </div>

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
          </div>
        )}

        {/* 05. Comments Fusion - Dark Operational Pipeline */}
        {comments && isCommentsVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': commentsIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-comments" 
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

                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">15+ Hrs</span>
                      <span className="kpi-chip-lbl">Saved / Wk</span>
                      <span className="kpi-chip-tooltip">Automated background workers eliminate manual message triaging</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">100%</span>
                      <span className="kpi-chip-lbl">Rate-Limit Safe</span>
                      <span className="kpi-chip-tooltip">Adaptive exponential backoff prevents third-party API throttling</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">Zero</span>
                      <span className="kpi-chip-lbl">Lost Webhooks</span>
                      <span className="kpi-chip-tooltip">Persistent dead-letter queue ensures 100% delivery guarantee</span>
                    </div>
                  </div>

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
          </div>
        )}

        {/* 06. Transcend Healthcare - Calm Light Editorial Composition */}
        {transcend && isTranscendVisible && (
          <div className="sticky-card-wrapper" style={{ '--card-index': transcendIndex } as React.CSSProperties}>
            <motion.article 
              className="featured-project spotlight-card project-transcend" 
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

                  {/* Interactive KPI Benchmark Chips */}
                  <div className="project-kpi-chips font-mono">
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-orange">●</span>
                      <span className="kpi-chip-val">HIPAA</span>
                      <span className="kpi-chip-lbl">Compliant</span>
                      <span className="kpi-chip-tooltip">End-to-end data encryption at rest and in transit with audit logs</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-emerald">●</span>
                      <span className="kpi-chip-val">&lt; 100ms</span>
                      <span className="kpi-chip-lbl">Query Latency</span>
                      <span className="kpi-chip-tooltip">Elastic serverless architecture optimized for high-volume patient data</span>
                    </div>
                    <div className="kpi-chip">
                      <span className="kpi-chip-dot text-dim">●</span>
                      <span className="kpi-chip-val">99.99%</span>
                      <span className="kpi-chip-lbl">Uptime SLA</span>
                      <span className="kpi-chip-tooltip">Redundant multi-zone deployment with automated health check failover</span>
                    </div>
                  </div>

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
          </div>
        )}


        {/* View All Work Action */}
        <div className="view-all-work-wrapper font-mono">
          <MagneticButton>
            <Link to="/work" className="btn btn-secondary btn-lg">
              <span>VIEW ALL 17 SYSTEMS & ARCHITECTURES</span>
              <ArrowUpRight size={18} />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

