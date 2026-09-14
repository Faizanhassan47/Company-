import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Boxes, BrainCircuit, Check, CloudCog, Code2, Database, Filter, Globe2, LockKeyhole, Smartphone, Workflow } from 'lucide-react';
import { SERVICES_DATA, type ServiceDetail } from '../../data/services';
import { SEOHead } from '../../components/seo/SEOHead';
import './ServicesPage.css';

const categories = [
  ['all', 'All Services'],
  ['ai-automation', 'AI & Automation'],
  ['saas-modernization', 'SaaS & Products'],
  ['enterprise-cloud', 'Enterprise & Cloud'],
  ['security-systems', 'Security & Systems'],
] as const;

const getIcon = (service: ServiceDetail) => {
  const slug = service.slug;
  if (slug.includes('mobile')) return Smartphone;
  if (slug.includes('agent')) return Bot;
  if (slug.includes('ai') || slug.includes('rag')) return BrainCircuit;
  if (slug.includes('security') || slug.includes('auth')) return LockKeyhole;
  if (slug.includes('cloud') || slug.includes('devops')) return CloudCog;
  if (slug.includes('warehouse') || slug.includes('wms')) return Boxes;
  if (slug.includes('data') || slug.includes('analytics')) return Database;
  if (slug.includes('integration') || slug.includes('automation')) return Workflow;
  if (slug.includes('web') || slug.includes('wordpress')) return Globe2;
  return Code2;
};

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const services = useMemo(() => activeCategory === 'all' ? SERVICES_DATA : SERVICES_DATA.filter(service => service.category === activeCategory), [activeCategory]);

  return <main className="services-page" id="main-content">
    <SEOHead title="Software Engineering Services | Tekmora" description="Explore Tekmora's AI, SaaS, enterprise, cloud, security, web, mobile, and systems integration services." canonical="https://tekmorasolution.com/services" />

    <section className="sp-hero">
      <div className="sp-hero-glow" />
      <div className="container sp-hero-grid">
        <div><p className="sp-kicker">Engineering Services</p><h1>Software Built<br />Around <span>How Your<br />Business Works.</span></h1></div>
        <div className="sp-hero-copy"><p>From AI-powered workflows to enterprise platforms, we design and build dependable digital products around real users, operational constraints, and measurable business outcomes.</p><div className="sp-hero-actions"><a href="#services-catalog" className="sp-btn sp-btn-primary">Explore Services <ArrowRight size={15} /></a><Link to="/contact" className="sp-btn sp-btn-ghost">Discuss a Project</Link></div><div className="sp-hero-proof"><span><strong>{SERVICES_DATA.length}+</strong>Engineering capabilities</span><span><strong>100%</strong>Client IP ownership</span><span><strong>End-to-end</strong>Delivery & support</span></div></div>
      </div>
    </section>

    <section className="sp-catalog" id="services-catalog"><div className="container">
      <div className="sp-section-head"><div><p className="sp-kicker">What We Build</p><h2>Engineering Capabilities<br />for Modern Operations</h2></div><p>Select a discipline to explore the systems, platforms, and workflows we engineer.</p></div>
      <div className="sp-filter"><span><Filter size={13} /> Filter by</span>{categories.map(([id, label]) => <button type="button" className={activeCategory === id ? 'active' : ''} onClick={() => setActiveCategory(id)} key={id}>{label}<small>{id === 'all' ? SERVICES_DATA.length : SERVICES_DATA.filter(s => s.category === id).length}</small></button>)}</div>
      <motion.div layout className="sp-services-grid"><AnimatePresence mode="popLayout">{services.map((service, index) => { const Icon = getIcon(service); return <motion.article layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .22 }} key={`${service.slug}-${index}`}><div className="sp-card-top"><div className="sp-card-icon"><Icon size={22} /></div><span>{service.number}</span></div><small>{service.category.replace('-', ' & ')}</small><h3>{service.title}</h3><p>{service.shortDesc}</p><div className="sp-capabilities">{service.keyCapabilities.slice(0, 2).map(cap => <span key={cap.title}><Check size={11} />{cap.title}</span>)}</div><Link to={`/services/${service.slug}`}>Explore Service <ArrowRight size={14} /></Link></motion.article> })}</AnimatePresence></motion.div>
    </div></section>

    <section className="sp-approach"><div className="container"><div className="sp-section-head"><div><p className="sp-kicker">How We Work</p><h2>From Operational Problem<br />to Production System</h2></div><p>A clear process keeps technical decisions connected to the business result.</p></div><div className="sp-steps">{[['01', 'Discover', 'We study the workflow, users, constraints, and success measures.'], ['02', 'Architect', 'We define the product, data model, integrations, and delivery roadmap.'], ['03', 'Build', 'Senior engineers deliver in visible, testable iterations.'], ['04', 'Launch & Evolve', 'We deploy safely, monitor performance, and support continued growth.']].map(([n, t, d]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="sp-assurance"><div className="container sp-assurance-grid"><div><p className="sp-kicker">Built for the Long Term</p><h2>Serious Engineering.<br /><span>Clear Partnership.</span></h2></div><div className="sp-assurance-list">{['Direct access to senior engineers', 'Full source code and IP ownership', 'Security and data integrity by design', 'Documented, maintainable architecture', 'Transparent scope and delivery milestones', 'Post-launch support and evolution'].map(item => <p key={item}><span><Check size={12} /></span>{item}</p>)}</div></div></section>
  </main>;
};
