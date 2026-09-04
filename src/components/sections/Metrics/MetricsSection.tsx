import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './MetricsSection.css';

const METRICS = [
  { value: '13K+', label: 'Inventory Items Managed' },
  { value: '2.3M+', label: 'Stock Units Represented' },
  { value: '20+', label: 'Enterprise Modules Deployed' },
  { value: 'SAP', label: 'Integrated Operations' }
];

export const MetricsSection: React.FC = () => {
  return (
    <section className="section metrics-section section-border-bottom">
      <div className="container">
        <motion.div 
          className="metrics-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {METRICS.map((metric, idx) => (
            <motion.div key={idx} className="metric-item" variants={fadeInUp}>
              <div className="metric-value font-display">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
