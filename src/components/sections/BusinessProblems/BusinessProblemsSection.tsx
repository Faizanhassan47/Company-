import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { ArrowRight, AlertTriangle, Zap, ArrowLeftRight, CheckCircle2, XCircle } from 'lucide-react';
import { ScrollTextReveal } from '../../ui/ScrollTextReveal';
import './BusinessProblemsSection.css';

const PROBLEMS = [
  {
    problem: 'Manual operational workflows',
    solution: 'Custom internal systems'
  },
  {
    problem: 'Disconnected SAP / ERP data',
    solution: 'API and system integrations'
  },
  {
    problem: 'Excel-based reporting',
    solution: 'Power BI dashboards'
  },
  {
    problem: 'Warehouse inefficiencies',
    solution: 'WMS automation'
  },
  {
    problem: 'Slow WordPress websites',
    solution: 'Performance optimization'
  },
  {
    problem: 'Missing business automation',
    solution: 'Workflow engines and integrations'
  }
];

interface ComparisonPillar {
  title: string;
  category: string;
  legacy: {
    description: string;
    detail: string;
  };
  tekmora: {
    description: string;
    detail: string;
  };
}

const COMPARISON_PILLARS: ComparisonPillar[] = [
  {
    category: 'DATA PIPELINE',
    title: 'System Integration & Sync',
    legacy: {
      description: 'Manual CSV exports & portal copy-pasting',
      detail: 'Staff manually export spreadsheets from disparate tools and re-key numbers into ERP. Nightly batch sync delays reporting by 24–48 hours.'
    },
    tekmora: {
      description: 'Event-driven bi-directional REST / WebSocket bus',
      detail: 'Direct integration with SAP Service Layer and custom databases. Millisecond-level event dispatch ensures 100% ledger consistency.'
    }
  },
  {
    category: 'FIELD OPERATIONS',
    title: 'Mobile & Dispatch Workflows',
    legacy: {
      description: 'WhatsApp dispatches & unversioned paper trails',
      detail: 'Technicians rely on chat threads and physical work orders. Paper documents get lost, delaying customer billing by 7–14 business days.'
    },
    tekmora: {
      description: 'Offline-first SQLite PWA with instant sync',
      detail: 'Full field operability in zero-connectivity environments. Timestamped GPS and photo capture trigger automated invoicing on reconnect.'
    }
  },
  {
    category: 'INVENTORY & AUDIT',
    title: 'Ledger Accuracy & Governance',
    legacy: {
      description: '14.2% Discrepancies found at month-end',
      detail: 'No distributed locking or row-level constraints. Stock reservations drift, causing double-allocations and frequent stockout penalties.'
    },
    tekmora: {
      description: 'ACID transaction locks & automated barcode audit',
      detail: 'Cryptographic state tracking, zero ghost inventory, and sub-second GRN validation that auto-reconciles Purchase Orders against ERP.'
    }
  },
  {
    category: 'OPERATIONAL VELOCITY',
    title: 'Turnaround Time & Scaling',
    legacy: {
      description: '35+ hours wasted per department weekly',
      detail: 'Operations hit an administrative ceiling. Adding customers requires hiring more data-entry clerks rather than scaling systems.'
    },
    tekmora: {
      description: 'Zero manual re-entry, 24/7 automated pipelines',
      detail: 'Workflows execute autonomously. Systems scale effortlessly 10x in transaction volume without expanding back-office headcount.'
    }
  }
];

export const BusinessProblemsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [archMode, setArchMode] = useState<'tekmora' | 'legacy' | 'split'>('tekmora');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.2) {
        const totalProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - rect.top) / (rect.height * 0.8)));
        const idx = Math.min(Math.floor(totalProgress * PROBLEMS.length), PROBLEMS.length - 1);
        setActiveIndex(idx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section business-problems-section section-border-bottom" ref={sectionRef} id="problems">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">03</span>
          <span>// PROBLEMS WE SOLVE</span>
        </div>

        <motion.div 
          className="problems-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="problems-headline font-display">
            ENGINEERING SOLUTIONS TO<br />
            <span className="italic-accent">REAL OPERATIONAL BOTTLENECKS.</span>
          </h2>
          <ScrollTextReveal className="problems-subtitle" as="p">
            We don't just write code. We eliminate manual processes and connect siloed data.
          </ScrollTextReveal>
        </motion.div>

        <div className="problems-sequence">
          {PROBLEMS.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`problem-solution-row ${isActive ? 'row-active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="problem-side font-display">
                  <span className="ps-label font-mono">PROBLEM</span>
                  <div className="ps-text">{item.problem}</div>
                </div>
                
                <div className="ps-arrow">
                  <ArrowRight size={24} className="text-orange" />
                </div>
                
                <div className="solution-side font-display">
                  <span className="ps-label font-mono">SOLUTION</span>
                  <div className="ps-text">{item.solution}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Architecture Reality Check: Legacy Sprawl vs. Tekmora Core */}
        <div className="arch-compare-module">
          <div className="arch-compare-header">
            <div>
              <div className="arch-compare-badge font-mono">
                <ArrowLeftRight size={13} className="text-orange" />
                <span>ARCHITECTURE REALITY CHECK</span>
              </div>
              <h3 className="arch-compare-title font-display">
                LEGACY SPRAWL <span className="text-dim">VS.</span> <span className="text-orange">TEKMORA CORE</span>
              </h3>
              <p className="arch-compare-subtitle">
                Compare fragile manual workarounds with an engineered, event-driven operational backbone.
              </p>
            </div>

            <div className="arch-compare-controls font-mono">
              <button 
                type="button"
                className={`arch-ctrl-btn ${archMode === 'tekmora' ? 'active-tekmora' : ''}`}
                onClick={() => setArchMode('tekmora')}
              >
                <Zap size={14} />
                <span>TEKMORA UNIFIED</span>
              </button>
              <button 
                type="button"
                className={`arch-ctrl-btn ${archMode === 'legacy' ? 'active-legacy' : ''}`}
                onClick={() => setArchMode('legacy')}
              >
                <AlertTriangle size={14} />
                <span>LEGACY SILOS</span>
              </button>
              <button 
                type="button"
                className={`arch-ctrl-btn ${archMode === 'split' ? 'active-split' : ''}`}
                onClick={() => setArchMode('split')}
              >
                <ArrowLeftRight size={14} />
                <span>SIDE-BY-SIDE</span>
              </button>
            </div>
          </div>

          {/* Benchmark Metrics Bar */}
          <div className="arch-metrics-bar font-mono spotlight-card">
            <div className="arch-metric-cell">
              <span className="metric-label">DATA SYNC LATENCY</span>
              <div className="metric-comparison">
                <span className="metric-legacy">24 - 48 Hours</span>
                <ArrowRight size={13} className="metric-arrow" />
                <span className="metric-tekmora">&lt; 180ms</span>
              </div>
            </div>
            <div className="arch-metric-cell">
              <span className="metric-label">RECONCILIATION ERRORS</span>
              <div className="metric-comparison">
                <span className="metric-legacy">14.2% Drift</span>
                <ArrowRight size={13} className="metric-arrow" />
                <span className="metric-tekmora">0.00% ACID</span>
              </div>
            </div>
            <div className="arch-metric-cell">
              <span className="metric-label">BILLING CYCLE LAG</span>
              <div className="metric-comparison">
                <span className="metric-legacy">7 - 14 Days</span>
                <ArrowRight size={13} className="metric-arrow" />
                <span className="metric-tekmora">Same-Day Auto</span>
              </div>
            </div>
            <div className="arch-metric-cell">
              <span className="metric-label">ADMIN HEADCOUNT CEILING</span>
              <div className="metric-comparison">
                <span className="metric-legacy">Bottlenecked</span>
                <ArrowRight size={13} className="metric-arrow" />
                <span className="metric-tekmora">10x Scale Ready</span>
              </div>
            </div>
          </div>

          {/* Architecture Panels */}
          <div className={`arch-panels-container mode-${archMode}`}>
            <AnimatePresence mode="wait">
              {(archMode === 'legacy' || archMode === 'split') && (
                <motion.div 
                  key="legacy-panel"
                  className="arch-panel arch-panel-legacy spotlight-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="arch-panel-header">
                    <div className="panel-status-tag font-mono status-legacy">
                      <XCircle size={14} />
                      <span>THE LEGACY WORKAROUND (FRAGILE SILOS)</span>
                    </div>
                    <span className="panel-risk-badge font-mono">HIGH TECHNICAL DEBT</span>
                  </div>

                  <div className="arch-pillars-list">
                    {COMPARISON_PILLARS.map((p, i) => (
                      <div key={i} className="pillar-item pillar-legacy">
                        <div className="pillar-header font-mono">
                          <span className="pillar-num">0{i+1}</span>
                          <span className="pillar-cat">{p.category}</span>
                        </div>
                        <h4 className="pillar-title font-display">{p.legacy.description}</h4>
                        <p className="pillar-detail">{p.legacy.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {(archMode === 'tekmora' || archMode === 'split') && (
                <motion.div 
                  key="tekmora-panel"
                  className="arch-panel arch-panel-tekmora spotlight-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="arch-panel-header">
                    <div className="panel-status-tag font-mono status-tekmora">
                      <CheckCircle2 size={14} />
                      <span>THE TEKMORA ARCHITECTURE (UNIFIED CORE)</span>
                    </div>
                    <span className="panel-benefit-badge font-mono">ZERO MANUAL OVERHEAD</span>
                  </div>

                  <div className="arch-pillars-list">
                    {COMPARISON_PILLARS.map((p, i) => (
                      <div key={i} className="pillar-item pillar-tekmora">
                        <div className="pillar-header font-mono">
                          <span className="pillar-num">0{i+1}</span>
                          <span className="pillar-cat">{p.category}</span>
                        </div>
                        <h4 className="pillar-title font-display">{p.tekmora.description}</h4>
                        <p className="pillar-detail">{p.tekmora.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

