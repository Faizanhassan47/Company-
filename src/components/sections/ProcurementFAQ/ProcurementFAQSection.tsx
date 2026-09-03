import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../../utils/animations';
import './ProcurementFAQSection.css';

interface FAQItem {
  id: string;
  question: string;
  category: string;
  answer: string;
  highlights: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'ip-ownership',
    category: 'GOVERNANCE & ASSETS',
    question: 'Do clients own 100% of the codebase, data schemas, and intellectual property?',
    answer: 'Yes. Upon milestone completion and final handoff, 100% of the codebase, Git repositories, database migration scripts, API schemas, and architectural documentation are fully transferred to the client. Tekmora retains zero proprietary locks or hidden licensing fees.',
    highlights: ['Zero vendor lock-in', 'Complete GitHub/GitLab transfer', 'Documented architecture handoff']
  },
  {
    id: 'pricing-models',
    category: 'COMMERCIAL ENGAGEMENT',
    question: 'How are enterprise engagements scoped, budgeted, and billed?',
    answer: 'We provide two transparent commercial models: (1) Fixed-Price Milestone SOWs for defined platforms where deliverables and delivery schedules are guaranteed, and (2) Dedicated Monthly Engineering Squads for evolving enterprise platforms needing dedicated senior full-stack developers.',
    highlights: ['Fixed-price milestones', 'Clear SOW guarantees', 'Transparent bi-weekly cadence']
  },
  {
    id: 'sap-safety',
    category: 'SYSTEM INTEGRATION',
    question: 'How do you safely integrate custom web and mobile apps with SAP Business One and legacy ERPs?',
    answer: 'We communicate exclusively through certified SAP Service Layer APIs and DI API wrappers with strict idempotent queues. We never perform raw unprotected database writes, ensuring zero transactional drift, complete audit compliance, and undisturbed SAP data integrity.',
    highlights: ['Certified Service Layer handshake', 'Idempotent transactional queues', 'Zero data corruption guarantee']
  },
  {
    id: 'security-compliance',
    category: 'SECURITY & DATA',
    question: 'What security standards and compliance protocols are built into Tekmora systems?',
    answer: 'Every system is engineered following OWASP Top 10 security guidelines: JWT authentication with granular Role-Based Access Control (RBAC), bcrypt/argon2 password hashing, parameterized SQL queries, AES-256 encrypted fields, and immutable operational audit logs.',
    highlights: ['OWASP Top 10 compliant', 'Granular RBAC matrices', 'Immutable audit ledgers']
  },
  {
    id: 'sla-support',
    category: 'SUPPORT & RELIABILITY',
    question: 'What post-launch SLA, warranty, and long-term maintenance is provided?',
    answer: 'Every production release includes a 60-day post-launch bug warranty followed by optional Enterprise SLA tiers with 24/7 uptime monitoring, critical incident resolution within 2 hours, automated database backups, and scheduled performance health checks.',
    highlights: ['60-day warranty included', '< 2 hour critical response SLA', '24/7 uptime monitoring']
  }
];

export const ProcurementFAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('ip-ownership');

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="procurement-faq-section section" id="faq">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">06</span>
          <span>// ENTERPRISE PROCUREMENT & SECURITY FAQ</span>
        </div>

        <motion.div 
          className="faq-grid-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left Column: Context & Overview */}
          <motion.div className="faq-intro-col" variants={fadeInUp}>
            <h2 className="faq-headline font-display">
              TRANSPARENT<br />
              <span className="italic-accent">GOVERNANCE & TERMS.</span>
            </h2>
            <p className="faq-description">
              Clear answers to the technical, legal, and operational questions enterprise CTOs, CIOs, and procurement directors ask before partnering with Tekmora.
            </p>

            <div className="faq-assurance-box font-mono spotlight-card">
              <div className="assurance-head">
                <ShieldCheck size={16} className="text-orange" />
                <span>TEKMORA ASSURANCE PROTOCOL</span>
              </div>
              <ul className="assurance-list">
                <li><CheckCircle2 size={12} className="text-green" /> Signed Mutual NDA before technical discovery</li>
                <li><CheckCircle2 size={12} className="text-green" /> 100% Client IP & Repository Ownership</li>
                <li><CheckCircle2 size={12} className="text-green" /> Zero-Drift ERP & Database Integrations</li>
                <li><CheckCircle2 size={12} className="text-green" /> Direct Communication with Lead Engineers</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Interactive Accordion */}
          <motion.div className="faq-accordion-col" variants={fadeInUp}>
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item spotlight-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-meta font-mono">
                      <span className="faq-cat-tag">{item.category}</span>
                    </div>
                    <div className="faq-q-row">
                      <span className="faq-q-title font-display">{item.question}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-body">
                      <p className="faq-answer-text">{item.answer}</p>
                      <div className="faq-highlights-row font-mono">
                        {item.highlights.map(h => (
                          <span key={h} className="faq-highlight-pill">
                            <CheckCircle2 size={11} className="text-orange" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
