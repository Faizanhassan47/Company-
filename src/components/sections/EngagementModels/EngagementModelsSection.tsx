import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { Settings2, RefreshCcw, Blocks, Link2, Users, Lightbulb } from 'lucide-react';
import './EngagementModelsSection.css';

const MODELS = [
  {
    title: 'Modernize Existing Systems',
    desc: 'Legacy redesign, performance tuning, and ERP integrations for software you already use.',
    icon: <RefreshCcw size={24} />
  },
  {
    title: 'Build a New System',
    desc: 'End-to-end architecture and engineering for brand new operational platforms.',
    icon: <Settings2 size={24} />
  },
  {
    title: 'Systems Integration',
    desc: 'Connecting software that wasn\'t originally built to work together.',
    icon: <Link2 size={24} />
  },
  {
    title: 'Module Development',
    desc: 'Adding specific capabilities (like a WMS module) to your current enterprise suite.',
    icon: <Blocks size={24} />
  },
  {
    title: 'Dedicated Engineering Support',
    desc: 'Retained technical teams for ongoing maintenance and iterative feature releases.',
    icon: <Users size={24} />
  },
  {
    title: 'Technical Consulting',
    desc: 'System audits, security reviews, and strategic technology roadmap planning.',
    icon: <Lightbulb size={24} />
  }
];

export const EngagementModelsSection: React.FC = () => {
  return (
    <section className="section engagement-section section-border-bottom">
      <div className="container">
        <motion.div 
          className="engagement-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="engagement-headline font-display">
            WAYS WE CAN<br />
            <span className="italic-accent">WORK TOGETHER.</span>
          </h2>
          <p className="engagement-subtitle">
            Whether you need a ground-up build or just need to fix painful legacy software, we have a structural model to support your operations.
          </p>
        </motion.div>

        <motion.div 
          className="engagement-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {MODELS.map((model, idx) => (
            <motion.div key={idx} className="engagement-card spotlight-card" variants={fadeInUp}>
              <div className="ec-icon text-orange">{model.icon}</div>
              <h3 className="ec-title font-display">{model.title}</h3>
              <p className="ec-desc">{model.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
