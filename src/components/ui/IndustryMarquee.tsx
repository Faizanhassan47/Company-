import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import './IndustryMarquee.css';

interface MarqueeItem {
  name: string;
  category: string;
}

const INDUSTRIES: MarqueeItem[] = [
  { name: 'Manufacturing & Plants', category: 'Production Systems' },
  { name: 'Warehouse & Logistics', category: 'Inventory Automation' },
  { name: 'Field Services & Audits', category: 'Offline Mobile Sync' },
  { name: 'Fintech & Invoicing', category: 'Ledger Integrations' },
  { name: 'Healthcare & Pharma', category: 'HIPAA & Compliance' },
  { name: 'Enterprise SaaS', category: 'Multi-Tenant Platforms' },
  { name: 'Commercial Distribution', category: 'SAP Business One' },
  { name: 'Retail & E-Commerce', category: 'High-Volume Order API' },
  { name: 'Energy & Infrastructure', category: 'Telemetry & Asset Ops' }
];

export const IndustryMarquee: React.FC = () => {
  // Duplicate array for seamless infinite loop
  const duplicated = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <motion.div 
      className="industry-marquee-wrapper" 
      aria-label="Industries We Serve"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="container marquee-header-container font-mono">
        <div className="marquee-label">
          <span className="marquee-pulse-dot" />
          <span>DEPLOYED ACROSS CRITICAL INDUSTRIES & ENTERPRISE VERTICALS</span>
        </div>
        <div className="marquee-meta-tag">GLOBAL PRODUCTION REACH</div>
      </div>

      <div className="marquee-container">
        <div className="marquee-gradient-left" />
        <div className="marquee-gradient-right" />

        <div className="marquee-track">
          {duplicated.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="marquee-chip font-mono">
              <span className="marquee-chip-dot" />
              <div className="marquee-chip-content">
                <span className="marquee-chip-name">{item.name}</span>
                <span className="marquee-chip-cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
