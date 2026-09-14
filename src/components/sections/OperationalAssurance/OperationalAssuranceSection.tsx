import React from 'react';
import { Check, Clock3, Code2, Database, Globe2, LockKeyhole, ShieldCheck, Unlock } from 'lucide-react';
import './OperationalAssuranceSection.css';

const standards = [
  { icon: Database, value: '100%', title: 'IP Ownership', text: 'Your repository, infrastructure, documentation, and product IP stay fully yours.' },
  { icon: Code2, value: 'Strict', title: 'Type Safety', text: 'Clear contracts and typed systems reduce regressions as the product evolves.' },
  { icon: ShieldCheck, value: 'ACID', title: 'Data Integrity', text: 'Reliable transactions and migrations protect critical operational records.' },
  { icon: Unlock, value: 'Zero', title: 'Vendor Lock-In', text: 'Portable architecture built with proven, maintainable technologies.' },
];

const stack = ['React', 'TypeScript', '.NET', 'Node.js', 'PostgreSQL', 'SQL Server', 'SAP B1', 'AWS', 'Docker'];

export const OperationalAssuranceSection: React.FC = () => (
  <section className="operational-assurance-section">
    <div className="oa-glow" aria-hidden="true" />
    <div className="container oa-container">
      <div className="oa-header">
        <div><p className="oa-kicker">Operational Assurance</p><h2>Built for<br /><span>Real</span> Operations.</h2></div>
        <div className="oa-header-copy"><p>Production software should stay reliable after launch. We engineer every system around ownership, security, data integrity, and long-term maintainability.</p><div className="oa-traits"><span><Check />Reliable</span><span><Check />Secure</span><span><Check />Scalable</span></div></div>
      </div>

      <div className="oa-standards">
        {standards.map(({ icon: Icon, value, title, text }, index) => <article key={title}><div className="oa-card-head"><span>0{index + 1}</span><small><i /> Verified</small></div><Icon /><strong>{value}</strong><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <div className="oa-stack"><p>Production-ready technology</p><div>{stack.map(item => <span key={item}>{item}</span>)}</div></div>

      <div className="oa-operating-grid">
        <div><Globe2 /><span><small>Global Reach</small><strong>Worldwide Delivery</strong><p>Experienced across international products, platforms, and operations.</p></span></div>
        <div><Clock3 /><span><small>Collaboration</small><strong>Timezone Aligned</strong><p>Clear milestones, regular progress, and direct access to the people building.</p></span></div>
        <div><LockKeyhole /><span><small>Operating Standard</small><strong>Security by Design</strong><p>Permissions, auditability, and safe deployment practices from day one.</p></span></div>
      </div>
    </div>
  </section>
);
