import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import './ManifestoSection.css';

export const ManifestoSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const techPills = [
    { name: 'React 19', tag: 'Web Core' },
    { name: 'TypeScript', tag: 'Type-Safe' },
    { name: 'Next.js (App Router)', tag: 'SSR / Edge' },
    { name: 'React Native & Expo', tag: 'Cross-Platform' },
    { name: 'Node.js & Express', tag: 'REST APIs' },
    { name: 'Microsoft SQL Server', tag: 'Relational Core' },
    { name: 'SAP Business One', tag: 'Service Layer' },
    { name: 'PostgreSQL', tag: 'ACID Data' },
    { name: 'Redis Cache', tag: 'Sub-ms Speed' },
    { name: 'SQLite Offline Sync', tag: 'Field DB' },
    { name: 'Tailwind CSS', tag: 'Design Tokens' },
    { name: 'Docker Containers', tag: 'Deployment' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section manifesto-section section-border-bottom" ref={sectionRef} id="manifesto">
      {/* Slow Horizontal Running Typography Marquee */}
      <div className="manifesto-marquee font-mono" aria-hidden="true">
        <div className="marquee-track">
          {techPills.concat(techPills).map((t, idx) => (
            <div key={idx} className="marquee-pill-item">
              <span className="pill-dot">●</span>
              <strong className="pill-name">{t.name}</strong>
              <span className="pill-tag font-mono">{t.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Numbered Meta Tag */}
        <div className="section-meta">
          <span className="section-number">02</span>
          <span>// COMPANY STATEMENT</span>
        </div>

        {/* Big Editorial Statement */}
        <motion.div 
          className="manifesto-header-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="manifesto-heading font-display">
            COMPLEX SYSTEMS.<br />
            <span className="italic-accent">CLEAR PRODUCTS.</span>
          </h2>
        </motion.div>

        {/* Animated Measurement Calibration Line */}
        <div className="manifesto-calibration-wrapper">
          <div className="manifesto-scale-ticks font-mono">
            <span className="tick">0.00 DISCONNECTED</span>
            <span className="tick">0.50 STRUCTURED</span>
            <span className="tick">1.00 TEKMORA STANDARD</span>
          </div>

          <div className="manifesto-progress-track">
            <div
              className="manifesto-progress-indicator"
              style={{ width: `${scrollProgress * 100}%` }}
            >
              <span className="progress-needle-dot"></span>
            </div>
          </div>
        </div>

        {/* Narrative Copy Split */}
        <motion.div 
          className="manifesto-copy-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="manifesto-lead-quote">
            <p className="lead-text font-display">
              “Complex behind the scenes. Simple where it matters.”
            </p>
            <div className="quote-origin font-mono">
              <ShieldCheck size={13} className="text-orange" />
              <span>CORE PHILOSOPHY</span>
              <span className="origin-sep">/</span>
              <span>TEKMORA</span>
            </div>
          </div>

          <div className="manifesto-body-column">
            <p className="manifesto-body-text">
              We work where software meets real business operations. Tekmora helps organizations replace disconnected tools, repetitive work and difficult workflows with dependable digital systems.
            </p>
            <p className="manifesto-body-subtext">
              We explain technical decisions without hiding behind jargon. Whether a project begins with an exact technical specification or an unorganized spreadsheet, our goal remains constant: build a dependable, maintainable platform that solves the actual problem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
