import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Eye } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './WhyTekmoraSection.css';

interface PillarItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const PILLARS: PillarItem[] = [
  {
    number: '01',
    icon: <MessageSquare size={22} className="pillar-icon" />,
    title: 'Direct Senior Communication',
    desc: 'You collaborate directly with the engineers and product architects building your software. No account managers or translation layers.'
  },
  {
    number: '02',
    icon: <Lightbulb size={22} className="pillar-icon" />,
    title: 'Product-First Thinking',
    desc: 'We prioritize real business outcomes and intuitive UX workflows over unnecessary code complexity or generic agency hype.'
  },
  {
    number: '03',
    icon: <Code2 size={22} className="pillar-icon" />,
    title: 'Maintainable Architecture',
    desc: 'Clean, strictly typed TypeScript contracts, modular schemas, and comprehensive documentation structured to scale with your team for years.'
  },
  {
    number: '04',
    icon: <Eye size={22} className="pillar-icon" />,
    title: 'Transparent Delivery',
    desc: 'Predictable milestones, regular live staging demos, and complete visibility into Git repositories and sprint boards.'
  }
];

export const WhyTekmoraSection: React.FC = () => {
  return (
    <section className="section why-clean-section" id="why-tekmora">
      <div className="container">
        {/* Section Header */}
        <div className="why-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>WHY TEKMORA</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="why-title">
              Built like a product team,<br />
              <span className="text-orange">not a development factory.</span>
            </h2>
            <p className="why-lead-text">
              We work with a select number of clients at a time, allowing us to deeply invest in the architecture, usability, and long-term success of every system we build.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Spacious Editorial Grid */}
        <motion.div 
          className="why-pillars-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.number}
              className="why-pillar-card"
              variants={fadeInUp}
            >
              <div className="pillar-card-head font-mono">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <span className="pillar-num text-orange">{pillar.number}</span>
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
