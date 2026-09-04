import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './LogoCloudSection.css';

const EXPERIENCES = [
  'Healthcare',
  'Manufacturing',
  'Logistics',
  'Supply Chain',
  'Finance',
  'Retail',
  'eCommerce'
];

export const LogoCloudSection: React.FC = () => {
  return (
    <section className="section logo-cloud-section section-border-bottom">
      <div className="container">
        <motion.div 
          className="logo-cloud-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className="logo-cloud-title font-mono" variants={fadeInUp}>
            ENTERPRISE EXPERIENCE ACROSS
          </motion.div>
          <div className="logo-grid">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div key={idx} className="logo-item font-display" variants={fadeInUp}>
                 <span className="logo-text-fallback">{exp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
