import React, { useState } from 'react';
import { motion } from 'motion/react';
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
    question: 'How are code, schemas, and intellectual-property ownership handled?',
    answer: 'Repository access, database migration scripts, API schemas, documentation, licensing, and intellectual-property handover are defined in the signed project agreement and delivery scope.',
    highlights: ['Contract-defined ownership', 'Repository handover plan', 'Documented architecture handoff']
  },
  {
    id: 'pricing-models',
    category: 'COMMERCIAL ENGAGEMENT',
    question: 'How are enterprise engagements scoped, budgeted, and billed?',
    answer: 'Engagements can use milestone-based statements of work for well-defined scopes or dedicated monthly engineering capacity for evolving products. Deliverables, assumptions, review cadence, and schedule dependencies are agreed before work begins.',
    highlights: ['Milestone-based scope', 'Clear acceptance criteria', 'Agreed review cadence']
  },
  {
    id: 'sap-safety',
    category: 'SYSTEM INTEGRATION',
    question: 'How do you safely integrate custom web and mobile apps with SAP Business One and legacy ERPs?',
    answer: 'The integration approach is selected for the SAP environment and can use Service Layer or DI API patterns, validation, idempotency, reconciliation, retry handling, and auditable failure paths. Data-write boundaries are reviewed with the system owner before implementation.',
    highlights: ['Approved SAP integration interface', 'Idempotent processing where required', 'Reconciliation and failure handling']
  },
  {
    id: 'security-compliance',
    category: 'SECURITY & DATA',
    question: 'What security standards and compliance protocols are built into Tekmora systems?',
    answer: 'Security controls are selected from the project threat model and may include role-based access, suitable password hashing, parameterized queries, encryption, logging, and review against relevant OWASP guidance. Compliance remains project- and organization-specific.',
    highlights: ['Threat-informed controls', 'Role-based access', 'Auditable security requirements']
  },
  {
    id: 'sla-support',
    category: 'SUPPORT & RELIABILITY',
    question: 'What post-launch SLA, warranty, and long-term maintenance is provided?',
    answer: 'Post-launch support periods, response targets, monitoring, backup responsibilities, and maintenance work are defined in the applicable proposal or support agreement. No universal SLA is implied.',
    highlights: ['Contract-defined support', 'Agreed response targets', 'Documented monitoring responsibilities']
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
                <li><CheckCircle2 size={12} className="text-green" /> Contract-defined IP & Repository Ownership</li>
                <li><CheckCircle2 size={12} className="text-green" /> Validated ERP & Database Integrations</li>
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
