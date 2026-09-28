import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Activity, ShieldCheck, Database, Cpu, Terminal, Zap, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const TECH_STACK = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Flutter',
  'PostgreSQL',
  'AWS'
];

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      
      <div className="container hero-container">
        {/* Left Column: Clear positioning copy with mixed-case typography */}
        <motion.div 
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-kicker-badge font-mono">
            <span className="hero-badge-pulse" />
            <span>SOFTWARE ENGINEERING FOR STARTUPS & BUSINESSES</span>
          </div>

          <h1 className="hero-title">
            We build software<br />
            businesses <span className="hero-highlight">rely on.</span>
          </h1>

          <p className="hero-lead">
            Tekmora designs and develops web applications, mobile products, SaaS platforms, and custom software from idea to production.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-hero-primary">
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#work" className="btn btn-hero-secondary">
              <span>View Our Work</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="hero-trust-metrics">
            <div className="metric-item">
              <span className="metric-val font-mono">100%</span>
              <span className="metric-lbl">Production Ready</span>
            </div>
            <div className="metric-sep" />
            <div className="metric-item">
              <span className="metric-val font-mono">&lt; 50ms</span>
              <span className="metric-lbl">Target Latency</span>
            </div>
            <div className="metric-sep" />
            <div className="metric-item">
              <span className="metric-val font-mono">Direct</span>
              <span className="metric-lbl">Senior Engineer Access</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 15% Larger High-Fidelity UI Dashboard */}
        <motion.div 
          className="hero-preview-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Tekmora engineered SaaS operations dashboard"
        >
          <div className="product-window-frame">
            {/* Window Chrome Header */}
            <div className="window-header font-mono">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-address-bar">
                <ShieldCheck size={13} className="text-orange" />
                <span>app.tekmora.com/operations/telemetry</span>
              </div>
              <div className="window-status">
                <span className="status-live-dot" />
                <span>ONLINE 99.99%</span>
              </div>
            </div>

            {/* Application Interface Layout */}
            <div className="window-body">
              {/* App Sidebar */}
              <aside className="app-sidebar">
                <div className="app-brand-mark">
                  <span className="text-orange font-mono">TK</span>
                </div>
                <nav className="app-sidebar-nav">
                  <div className="sidebar-btn active" title="Operations Overview"><Activity size={16} /></div>
                  <div className="sidebar-btn" title="Database Clusters"><Database size={16} /></div>
                  <div className="sidebar-btn" title="Compute Nodes"><Cpu size={16} /></div>
                  <div className="sidebar-btn" title="CLI Terminal"><Terminal size={16} /></div>
                </nav>
              </aside>

              {/* Main Dashboard Canvas */}
              <main className="app-canvas">
                {/* Top Metrics Bar */}
                <div className="canvas-header">
                  <div>
                    <h4 className="canvas-title">Operations & Fleet Dispatch Hub</h4>
                    <span className="canvas-subtitle font-mono">Multi-Tenant PostgreSQL // Cluster: us-east-prod</span>
                  </div>
                  <div className="canvas-badge font-mono">
                    <Zap size={13} className="text-orange" />
                    <span>Real-Time Sync</span>
                  </div>
                </div>

                {/* KPI Metric Cards Grid */}
                <div className="canvas-kpis">
                  <div className="kpi-box">
                    <span className="kpi-title font-mono">DAILY ORDERS</span>
                    <span className="kpi-num font-mono">14,820</span>
                    <span className="kpi-delta text-green font-mono">↑ 18.4% vs lw</span>
                  </div>
                  <div className="kpi-box">
                    <span className="kpi-title font-mono">API LATENCY</span>
                    <span className="kpi-num font-mono">18ms</span>
                    <span className="kpi-delta text-green font-mono">p99 &lt; 42ms</span>
                  </div>
                  <div className="kpi-box">
                    <span className="kpi-title font-mono">WORKER QUEUE</span>
                    <span className="kpi-num font-mono">Healthy</span>
                    <span className="kpi-delta text-muted font-mono">0 pending jobs</span>
                  </div>
                </div>

                {/* Live Telemetry Chart */}
                <div className="canvas-chart-panel">
                  <div className="chart-meta font-mono">
                    <span>TRANSACTION THROUGHPUT (TXN/SEC)</span>
                    <span className="text-orange">3,420 TPS</span>
                  </div>
                  <div className="chart-svg-container">
                    <svg viewBox="0 0 520 90" preserveAspectRatio="none" className="telemetry-chart">
                      <defs>
                        <linearGradient id="heroGradientRefined" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff4d1c" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#ff4d1c" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,75 Q45,60 90,66 T180,38 T270,52 T360,22 T450,30 L520,12 L520,90 L0,90 Z"
                        fill="url(#heroGradientRefined)"
                      />
                      <path
                        d="M0,75 Q45,60 90,66 T180,38 T270,52 T360,22 T450,30 L520,12"
                        fill="none"
                        stroke="#ff4d1c"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Live Transaction Ledger Table Preview */}
                <div className="canvas-ledger font-mono">
                  <div className="ledger-row ledger-head">
                    <span>WORKFLOW</span>
                    <span>TARGET NODE</span>
                    <span>LATENCY</span>
                    <span>STATUS</span>
                  </div>
                  <div className="ledger-row">
                    <span className="text-white">SAP_B1_SYNC</span>
                    <span>Warehouse_North</span>
                    <span>12ms</span>
                    <span className="status-pill status-ok"><Check size={11} /> Sync Complete</span>
                  </div>
                  <div className="ledger-row">
                    <span className="text-white">FLEET_DISPATCH</span>
                    <span>Node_Route_44</span>
                    <span>24ms</span>
                    <span className="status-pill status-ok"><Check size={11} /> Dispatched</span>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust & Technology Strip */}
      <div className="hero-tech-strip">
        <div className="container strip-container">
          <span className="strip-label font-mono">ENGINEERING WITH MODERN TECHNOLOGIES:</span>
          <div className="strip-items font-mono">
            {TECH_STACK.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="tech-item">{tech}</span>
                {idx < TECH_STACK.length - 1 && <span className="tech-dot">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
