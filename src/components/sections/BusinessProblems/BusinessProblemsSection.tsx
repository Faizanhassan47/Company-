import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Boxes, Cable, Gauge, Settings2, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BusinessProblemsSection.css';

const PROBLEMS = [
  { icon: Workflow, problem: 'Manual workflows', solution: 'Purpose-built internal systems', detail: 'Replace repetitive handoffs and disconnected tasks with one reliable workflow.' },
  { icon: Cable, problem: 'Disconnected business data', solution: 'API & ERP integrations', detail: 'Keep platforms, teams, and operational records synchronized in real time.' },
  { icon: BarChart3, problem: 'Slow, inconsistent reporting', solution: 'Live analytics dashboards', detail: 'Turn scattered records into clear metrics your team can act on immediately.' },
  { icon: Boxes, problem: 'Warehouse inefficiencies', solution: 'WMS automation', detail: 'Improve receiving, inventory accuracy, picking, and dispatch operations.' },
  { icon: Gauge, problem: 'Slow digital products', solution: 'Performance engineering', detail: 'Remove bottlenecks and deliver fast experiences at production scale.' },
  { icon: Settings2, problem: 'Systems that cannot scale', solution: 'Modern cloud architecture', detail: 'Build a stable technical foundation that grows with the business.' },
];

export const BusinessProblemsSection: React.FC = () => (
  <section className="business-problems-section" id="problems">
    <div className="problems-glow" aria-hidden="true" />
    <div className="container">
      <motion.div className="problems-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
        <div>
          <p className="problems-kicker">Problems We Solve</p>
          <h2>Engineering Solutions to<br /><span>Real Operational Bottlenecks.</span></h2>
        </div>
        <div className="problems-intro"><p>We don't add technology for its own sake. We identify where work slows down, data breaks apart, and manual effort creates risk—then engineer the system that fixes it.</p><Link to="/services">Explore Our Solutions <ArrowRight size={14} /></Link></div>
      </motion.div>

      <div className="problems-grid">
        {PROBLEMS.map(({ icon: Icon, problem, solution, detail }, index) => (
          <motion.article key={problem} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
            <div className="problem-card-top"><span className="problem-icon"><Icon size={21} /></span><small>0{index + 1}</small></div>
            <p className="problem-label">The Bottleneck</p>
            <h3>{problem}</h3>
            <div className="problem-divider"><span /><ArrowRight size={14} /></div>
            <p className="solution-label">The Solution</p>
            <h4>{solution}</h4>
            <p className="problem-detail">{detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="problems-outcome-bar">
        <div><strong>&lt;180ms</strong><span>System response</span></div>
        <div><strong>0%</strong><span>Manual data drift</span></div>
        <div><strong>10×</strong><span>Scale-ready capacity</span></div>
        <p>From operational friction to a connected, measurable system.</p>
      </div>
    </div>
  </section>
);
