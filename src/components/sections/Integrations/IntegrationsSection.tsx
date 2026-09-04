import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { Link2 } from 'lucide-react';
import './IntegrationsSection.css';

const INTEGRATIONS = [
  'SAP Business One',
  'REST APIs',
  'SQL Server',
  'Power BI',
  'SMTP',
  'Cloud Storage',
  'Payment Platforms',
  'BLE Devices',
  'Barcode Systems',
  'Third-party SaaS'
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="section integrations-section section-border-bottom">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">07</span>
          <span>// SYSTEM INTEGRATION</span>
        </div>

        <motion.div 
          className="integrations-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="integrations-headline font-display">
            WE CONNECT SOFTWARE THAT WASN'T<br />
            <span className="italic-accent">ORIGINALLY BUILT TO WORK TOGETHER.</span>
          </h2>
          <p className="integrations-subtitle">
            Integration work signals high-end technical capability. We build the connective middleware that eliminates double data entry and siloed platforms.
          </p>
        </motion.div>

        {/* Integration Visual Flow */}
        <motion.div 
          className="integration-visual-flow font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="iv-sources">
            <div className="iv-node">ERP / SAP</div>
            <div className="iv-node">CRM / SaaS</div>
            <div className="iv-node">Hardware / Devices</div>
            <div className="iv-node">Legacy Data</div>
          </div>
          
          <div className="iv-connector">
            <div className="iv-line horizontal"></div>
            <div className="iv-line vertical"></div>
          </div>

          <div className="iv-middleware">
            <div className="iv-layer-box text-orange">TEKMORA INTEGRATION LAYER</div>
          </div>

          <div className="iv-connector">
            <div className="iv-line horizontal"></div>
          </div>

          <div className="iv-target">
            <div className="iv-node iv-platform">YOUR PLATFORM</div>
          </div>
        </motion.div>

        <motion.div 
          className="integrations-list mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {INTEGRATIONS.map((integration, idx) => (
            <motion.div key={idx} className="integration-chip font-mono" variants={fadeInUp}>
              <Link2 size={16} className="text-orange" />
              <span>{integration}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
