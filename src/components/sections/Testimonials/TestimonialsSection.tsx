import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
import './TestimonialsSection.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  metricHighlight: string;
  impactTag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Tekmora replaced our fragile legacy spreadsheets with an automated SAP B1 warehouse system that eliminated dispatch errors overnight and unified four warehouse locations under a single deterministic workflow.",
    author: "Operations & Logistics Director",
    role: "Head of Supply Chain",
    organization: "Industrial Distribution Group",
    metricHighlight: "99.4% Dispatch Accuracy",
    impactTag: "SAP B1 WAREHOUSE AUTOMATION"
  },
  {
    quote: "Our field technicians work in remote regions with zero cellular signal. Tekmora’s offline SQLite sync architecture allowed over 40 technicians to complete field audits without data loss or synchronization conflicts.",
    author: "Vice President of Field Operations",
    role: "Operational Systems Lead",
    organization: "Energy & Infrastructure Services",
    metricHighlight: "Zero Audit Data Loss",
    impactTag: "REACT NATIVE OFFLINE PLATFORM"
  },
  {
    quote: "The engineering discipline Tekmora brought was night and day compared to generic agencies. They understood our complex business logic on day one and delivered clean, maintainable TypeScript code ahead of schedule.",
    author: "Chief Technology Officer",
    role: "VP of Digital Engineering",
    organization: "Enterprise Software SaaS",
    metricHighlight: "100% On-Time Milestone Delivery",
    impactTag: "ENTERPRISE PORTAL & RBAC"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">05</span>
          <span>// EXECUTIVE OUTCOMES & VERIFIED IMPACT</span>
        </div>

        {/* Section Header */}
        <motion.div 
          className="testimonials-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="testimonials-headline font-display">
            ENGINEERED FOR RESULTS.<br />
            <span className="italic-accent">VALIDATED BY LEADERS.</span>
          </h2>
          <p className="testimonials-subtitle">
            How Tekmora’s deterministic software architectures solve operational bottlenecks and deliver measurable efficiency for commercial enterprises.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="testimonial-card spotlight-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              <div className="testimonial-card-top font-mono">
                <span className="impact-tag text-orange">{item.impactTag}</span>
                <Quote size={18} className="quote-icon" />
              </div>

              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div className="metric-highlight-strip font-mono">
                <TrendingUp size={13} className="text-green" />
                <span>MEASURED IMPACT: {item.metricHighlight}</span>
              </div>

              <div className="testimonial-author-box">
                <div className="author-name font-display">{item.author}</div>
                <div className="author-meta font-mono">
                  <span>{item.role}</span>
                  <span className="author-sep">•</span>
                  <span className="author-org">{item.organization}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
