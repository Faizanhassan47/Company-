import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import './ProcessSection.css';

interface ProcessStep {
  number: string;
  name: string;
  duration: string;
  summary: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discovery',
    duration: 'Week 1',
    summary: 'We dive deep into your business requirements, existing technical constraints, user personas, and operational goals.',
    deliverables: ['Technical Architecture Blueprint', 'System Scope & Requirements Document', 'Milestone Schedule & Risk Analysis']
  },
  {
    number: '02',
    name: 'Product Design',
    duration: 'Weeks 1–2',
    summary: 'We map user journeys, design high-fidelity interactive wireframes, and establish the product design system.',
    deliverables: ['Clickable Prototype (Figma)', 'Design System Tokens & Components', 'Database Entity Relationship Diagram (ERD)']
  },
  {
    number: '03',
    name: 'Development',
    duration: 'Structured Sprints',
    summary: 'Frontend, backend, APIs, and cloud infrastructure are developed in bi-weekly iterative sprints with regular demos.',
    deliverables: ['Strict TypeScript Codebase', 'Bi-Weekly Staging Deployments', 'REST / GraphQL API Endpoints']
  },
  {
    number: '04',
    name: 'Testing & QA',
    duration: 'Continuous QA',
    summary: 'Automated end-to-end testing, query latency benchmarking, cross-browser audits, and security vulnerability scans.',
    deliverables: ['Automated Playwright QA Suites', 'Database Indexing & Load Testing', 'Cross-Device Usability Verification']
  },
  {
    number: '05',
    name: 'Launch',
    duration: 'Production Deploy',
    summary: 'The software is deployed to production cloud infrastructure with zero-downtime deployment pipelines and monitoring.',
    deliverables: ['Cloud CI/CD Pipeline', 'Real-Time Health & Error Monitoring', 'Admin Documentation & Team Onboarding']
  },
  {
    number: '06',
    name: 'Support & Scale',
    duration: 'Long-Term Partnership',
    summary: 'Tekmora acts as your ongoing engineering partner—shipping new feature iterations, maintaining uptime, and optimizing performance.',
    deliverables: ['Guaranteed SLA Response Times', 'Continuous Database Optimization', 'Feature Enhancements & Scaling']
  }
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section process-clean-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="process-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>OUR PROCESS</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="process-title">
              From idea to production.<br />
              <span className="text-orange">A structured engineering lifecycle.</span>
            </h2>
            <p className="process-lead-text">
              We eliminate guesswork with predictable milestones, transparent progress demos, and direct access to senior engineers at every phase.
            </p>
          </motion.div>
        </div>

        {/* Numbered Step Navigation Bar */}
        <div className="process-timeline-bar font-mono">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              className={`timeline-step-btn ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className="step-btn-num">{step.number}</span>
              <span className="step-btn-name">{step.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Active Step Detail Card */}
        <div className="process-active-view">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="active-step-panel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="active-step-left">
                <div className="active-step-meta font-mono">
                  <span className="meta-badge text-orange">PHASE {PROCESS_STEPS[activeStep].number}</span>
                  <span className="meta-sep">//</span>
                  <span className="meta-time">{PROCESS_STEPS[activeStep].duration}</span>
                </div>

                <h3 className="active-step-title">
                  {PROCESS_STEPS[activeStep].name}
                </h3>

                <p className="active-step-summary">
                  {PROCESS_STEPS[activeStep].summary}
                </p>
              </div>

              <div className="active-step-right">
                <span className="deliv-headline font-mono">DELIVERABLES & OUTCOMES:</span>
                <ul className="deliv-items-list">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, i) => (
                    <li key={i} className="deliv-item">
                      <span className="deliv-check text-orange font-mono">✓</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
