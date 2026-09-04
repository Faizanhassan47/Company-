import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { ArrowDown } from 'lucide-react';
import './WhyTekmoraSection.css';

const SYSTEM_LAYERS = [
  'Business Workflow',
  'User Experience',
  'Data Model',
  'Backend Architecture',
  'Integrations',
  'Security',
  'Reporting',
  'Deployment',
  'Long-Term Maintenance'
];

export const WhyTekmoraSection: React.FC = () => {
  return (
    <section className="section why-section section-border-bottom" id="why-tekmora">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">06</span>
          <span>// SYSTEM THINKING</span>
          <span className="meta-sep font-mono">OUR APPROACH</span>
        </div>

        <motion.div 
          className="why-heading-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title-large">
            WE DON'T JUST<br />
            <span className="italic-accent">BUILD SCREENS.</span>
          </h2>
          <p className="why-lead-desc">
            We approach software as an operational system, not a collection of web pages. Every system is considered sequentially across its entire operational footprint.
          </p>
        </motion.div>

        <div className="system-thinking-container">
          <motion.div 
            className="system-flow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {SYSTEM_LAYERS.map((layer, idx) => (
              <React.Fragment key={idx}>
                <motion.div className="flow-layer" variants={fadeInUp}>
                  <div className="layer-content font-mono">{layer.toUpperCase()}</div>
                </motion.div>
                {idx < SYSTEM_LAYERS.length - 1 && (
                  <motion.div className="flow-arrow" variants={fadeInUp}>
                    <ArrowDown size={20} className="text-orange" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
