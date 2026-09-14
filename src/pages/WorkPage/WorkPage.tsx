import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './WorkPage.css';

const filters = [
  ['all', 'All Work'], ['enterprise', 'Enterprise'], ['mobile', 'Mobile'],
  ['business-platforms', 'Web Platforms'], ['warehouse-sap', 'ERP & Operations'],
  ['ecommerce', 'E-commerce'], ['healthcare', 'Healthcare'], ['company-websites', 'Websites'],
] as const;

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = useMemo(() => activeFilter === 'all' ? PROJECTS : PROJECTS.filter(project => project.filterCategory === activeFilter), [activeFilter]);
  const featured = projects[0];
  const remaining = projects.slice(1);

  return <main className="work-page" id="main-content">
    <SEOHead title="Selected Work & Software Portfolio | Tekmora" description="Explore web, mobile, enterprise, healthcare, e-commerce, ERP, and operational software engineered by Tekmora." canonical="https://tekmorasolution.com/work" />

    <section className="wp-hero"><div className="wp-glow" /><div className="container wp-hero-grid"><div><p className="wp-kicker">Selected Work</p><h1>Real Products.<br /><span>Real Outcomes.</span></h1></div><div className="wp-hero-copy"><p>We design and engineer digital products that solve difficult operational problems—from customer-facing mobile apps to the systems running businesses behind the scenes.</p><a href="#project-gallery" className="wp-btn wp-btn-primary">Explore Our Work <ArrowRight size={15} /></a><div className="wp-proof"><span><strong>{PROJECTS.length}+</strong>Products delivered</span><span><strong>8+</strong>Industries served</span><span><strong>100%</strong>Client focused</span></div></div></div></section>

    <section className="wp-gallery" id="project-gallery"><div className="container">
      <div className="wp-gallery-head"><div><p className="wp-kicker">Project Library</p><h2>Built Across Products,<br />Platforms & Operations</h2></div><p>Filter the portfolio by product type or industry.</p></div>
      <div className="wp-filter"><span><Filter size={13} /> Filter</span>{filters.map(([value, label]) => <button type="button" key={value} className={activeFilter === value ? 'active' : ''} onClick={() => setActiveFilter(value)}>{label}<small>{value === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.filterCategory === value).length}</small></button>)}</div>

      <AnimatePresence mode="wait"><motion.div key={activeFilter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
        {featured ? <Link className="wp-featured" to={`/work/${featured.slug}`} onClick={() => trackEvent('project_open', 'portfolio', featured.slug)}><div className="wp-featured-copy"><span>{featured.number} / Featured Project</span><h2>{featured.title}</h2><p>{featured.tagline}</p><div>{featured.technologies.slice(0, 5).map(tech => <small key={tech}>{tech}</small>)}</div><strong>View Case Study <ArrowRight size={14} /></strong></div><div className="wp-featured-image">{featured.imageUrl || featured.thumbnailUrl ? <img src={featured.imageUrl ?? featured.thumbnailUrl} alt={`${featured.title} project interface`} /> : <div>{featured.title}</div>}</div></Link> : <div className="wp-empty">No projects found in this category.</div>}
        <div className="wp-grid">{remaining.map(project => <Link className="wp-card" to={`/work/${project.slug}`} key={project.id} onClick={() => trackEvent('project_open', 'portfolio', project.slug)}><div className="wp-card-image">{project.imageUrl || project.thumbnailUrl ? <img src={project.imageUrl ?? project.thumbnailUrl} alt={`${project.title} project interface`} loading="lazy" /> : <div>{project.title}</div>}<span>{project.year}</span></div><div className="wp-card-copy"><small>{project.category}</small><h3>{project.title}</h3><p>{project.tagline}</p><div>{project.technologies.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div><strong>View Project <ArrowRight size={13} /></strong></div></Link>)}</div>
      </motion.div></AnimatePresence>
    </div></section>

    <section className="wp-results"><div className="container"><div><p className="wp-kicker">The Standard</p><h2>More Than a<br /><span>Good-Looking Product.</span></h2></div><div className="wp-results-list">{['Built around real user workflows', 'Engineered for reliability and scale', 'Clear ownership and maintainable code', 'Measured against business outcomes'].map(item => <p key={item}><i><Check /></i>{item}</p>)}</div></div></section>
  </main>;
};
