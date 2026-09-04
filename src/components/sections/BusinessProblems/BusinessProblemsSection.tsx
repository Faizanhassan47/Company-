import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import { ArrowRight } from 'lucide-react';
import './BusinessProblemsSection.css';

const PROBLEMS = [
  {
    problem: 'Manual operational workflows',
    solution: 'Custom internal systems'
  },
  {
    problem: 'Disconnected SAP / ERP data',
    solution: 'API and system integrations'
  },
  {
    problem: 'Excel-based reporting',
    solution: 'Power BI dashboards'
  },
  {
    problem: 'Warehouse inefficiencies',
    solution: 'WMS automation'
  },
  {
    problem: 'Slow WordPress websites',
    solution: 'Performance optimization'
  },
  {
    problem: 'Missing business automation',
    solution: 'Workflow engines and integrations'
  }
];

export const BusinessProblemsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.2) {
        const totalProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - rect.top) / (rect.height * 0.8)));
        const idx = Math.min(Math.floor(totalProgress * PROBLEMS.length), PROBLEMS.length - 1);
        setActiveIndex(idx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section business-problems-section section-border-bottom" ref={sectionRef} id="problems">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">03</span>
          <span>// PROBLEMS WE SOLVE</span>
        </div>

        <motion.div 
          className="problems-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="problems-headline font-display">
            ENGINEERING SOLUTIONS TO<br />
            <span className="italic-accent">REAL OPERATIONAL BOTTLENECKS.</span>
          </h2>
          <p className="problems-subtitle">
            We don't just write code. We eliminate manual processes and connect siloed data.
          </p>
        </motion.div>

        <div className="problems-sequence">
          {PROBLEMS.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`problem-solution-row ${isActive ? 'row-active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="problem-side font-display">
                  <span className="ps-label font-mono">PROBLEM</span>
                  <div className="ps-text">{item.problem}</div>
                </div>
                
                <div className="ps-arrow">
                  <ArrowRight size={24} className="text-orange" />
                </div>
                
                <div className="solution-side font-display">
                  <span className="ps-label font-mono">SOLUTION</span>
                  <div className="ps-text">{item.solution}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
