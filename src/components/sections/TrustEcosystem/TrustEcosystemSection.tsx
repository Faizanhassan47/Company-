import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Server, Smartphone, Cpu, Cloud, Radio, Lock } from 'lucide-react';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
import './TrustEcosystemSection.css';

interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
}

interface TechBadge {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const STATS: StatMetric[] = [
  { value: '100%', label: 'IP OWNERSHIP', sublabel: 'Direct Git transfer & schema documentation' },
  { value: 'Strict', label: 'TYPE SAFETY', sublabel: 'TypeScript 5.x with zero any standard' },
  { value: 'ACID', label: 'DATA INTEGRITY', sublabel: 'Idempotent transactions & migration scripts' },
  { value: 'Zero', label: 'VENDOR LOCK-IN', sublabel: 'Portable open-source modern frameworks' }
];

const TECH_ECOSYSTEM: TechBadge[] = [
  { name: 'SAP Business One', category: 'ERP / Service Layer', icon: <Server size={14} className="text-orange" /> },
  { name: 'Microsoft SQL Server', category: 'Enterprise Relational DB', icon: <Database size={14} className="text-orange" /> },
  { name: 'React 19 & Next.js', category: 'Core Web Platform', icon: <Cpu size={14} className="text-orange" /> },
  { name: 'React Native & Expo', category: 'iOS & Android Mobile', icon: <Smartphone size={14} className="text-orange" /> },
  { name: 'Node.js & Express', category: 'High-Throughput APIs', icon: <Cpu size={14} className="text-orange" /> },
  { name: 'AWS & Cloudflare', category: 'Edge Infrastructure', icon: <Cloud size={14} className="text-orange" /> },
  { name: 'Zebra / ESC-POS', category: 'Hardware Telemetry', icon: <Radio size={14} className="text-orange" /> },
  { name: 'OWASP / RBAC', category: 'Enterprise Security', icon: <Lock size={14} className="text-orange" /> }
];

export const TrustEcosystemSection: React.FC = () => {
  return (
    <section className="trust-ecosystem-section section-border-bottom">
      <div className="container">
        {/* Top Section Header */}
        <motion.div 
          className="trust-header font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="trust-kicker">
            <ShieldCheck size={14} className="text-orange" />
            <span>OPERATIONAL ASSURANCE & CERTIFIED STACK</span>
          </div>
          <div className="trust-standard-label">ENTERPRISE GRADE // DETERMINISTIC ENGINEERING</div>
        </motion.div>

        {/* 4 Telemetry Metrics Grid */}
        <motion.div 
          className="trust-metrics-grid font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="trust-metric-card spotlight-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              <div className="trust-metric-top">
                <span className="metric-index text-orange">0{idx + 1}</span>
                <span className="metric-status-dot"></span>
              </div>
              <div className="trust-metric-val font-display">{stat.value}</div>
              <div className="trust-metric-label">{stat.label}</div>
              <div className="trust-metric-sub">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certified Tech Ecosystem Ticker */}
        <motion.div 
          className="trust-tech-wrapper font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="tech-ecosystem-title">
            <span>CERTIFIED ENTERPRISE PROTOCOLS:</span>
          </div>
          <div className="tech-badges-grid">
            {TECH_ECOSYSTEM.map((tech, idx) => (
              <div key={idx} className="tech-badge-item">
                {tech.icon}
                <div className="tech-badge-info">
                  <span className="tech-badge-name">{tech.name}</span>
                  <span className="tech-badge-cat">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
