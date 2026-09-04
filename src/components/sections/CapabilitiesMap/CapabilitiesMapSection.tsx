import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './CapabilitiesMapSection.css';

const CAPABILITIES = [
  'Warehouse Management',
  'HR Management',
  'Recruitment Systems',
  'Finance & Budgeting',
  'Dispatch Management',
  'Inventory Management',
  'Production Planning',
  'Machine Efficiency',
  'CRM / Opportunity Management',
  'Healthcare Applications',
  'Power BI Reporting',
  'SAP B1 Integrations'
];

export const CapabilitiesMapSection: React.FC = () => {
  return (
    <section className="section capabilities-map-section section-border-bottom">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">04</span>
          <span>// ENTERPRISE CAPABILITIES</span>
        </div>

        <motion.div 
          className="map-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="map-headline font-display">
            WHAT WE'VE BUILT.
          </h2>
          <p className="map-subtitle">
            We architect comprehensive operational systems across diverse business domains.
          </p>
        </motion.div>

        <motion.div 
          className="capabilities-map-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {CAPABILITIES.map((cap, idx) => (
            <motion.div key={idx} className="map-item font-mono" variants={fadeInUp}>
              <span className="map-dot"></span>
              {cap}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
