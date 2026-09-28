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
    quote: "Tekmora replaced our fragile spreadsheets with an automated warehouse platform that eliminated dispatch errors overnight and unified four depot locations under a single real-time system.",
    author: "Marcus Vance",
    role: "Head of Supply Chain & Operations",
    organization: "Apex Industrial Logistics",
    metricHighlight: "99.4% Dispatch Accuracy",
    impactTag: "OPERATIONS & WAREHOUSE AUTOMATION"
  },
  {
    quote: "Our technicians work across remote substations with zero cellular reception. Tekmora’s offline SQLite replication allowed 40+ field engineers to perform audits with zero data loss or sync conflicts.",
    author: "Elena Rostova",
    role: "VP of Field Engineering",
    organization: "Gridline Infrastructure Services",
    metricHighlight: "Zero Audit Data Loss",
    impactTag: "OFFLINE-FIRST MOBILE PLATFORM"
  },
  {
    quote: "The engineering discipline Tekmora brought was night and day compared to traditional agencies. They grasped our complex business logic immediately and delivered maintainable TypeScript code ahead of schedule.",
    author: "David Chen",
    role: "Chief Technology Officer",
    organization: "SaaS Enterprise Solutions",
    metricHighlight: "100% On-Time Milestone Delivery",
    impactTag: "FULL-STACK SAAS PLATFORM"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header-block">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>CLIENT OUTCOMES</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="testimonials-title">
              Engineered for results.<br />
              <span className="text-orange">Validated by engineering & product leaders.</span>
            </h2>
            <p className="testimonials-lead-text">
              How our custom software platforms and operational architectures solve real business bottlenecks and deliver measurable performance.
            </p>
          </motion.div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <motion.div 
          className="testimonials-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="testimonial-clean-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              <div className="testimonial-card-top font-mono">
                <span className="impact-tag text-orange">{item.impactTag}</span>
                <Quote size={20} className="quote-icon" />
              </div>

              <blockquote className="testimonial-quote-text">
                "{item.quote}"
              </blockquote>

              <div className="metric-highlight-strip font-mono">
                <TrendingUp size={14} className="text-green" />
                <span>MEASURED IMPACT: {item.metricHighlight}</span>
              </div>

              <div className="testimonial-author-box">
                <div className="author-name">{item.author}</div>
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
