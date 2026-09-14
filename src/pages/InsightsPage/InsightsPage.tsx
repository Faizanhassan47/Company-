import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INSIGHTS_DATA } from '../../data/insights';
import { SEOHead } from '../../components/seo/SEOHead';
import './InsightsPage.css';

export const InsightsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(INSIGHTS_DATA.map(article => article.category))], []);
  const articles = useMemo(() => INSIGHTS_DATA.filter(article => (category === 'All' || article.category === category) && (`${article.title} ${article.summary} ${article.tagline}`).toLowerCase().includes(query.toLowerCase())), [category, query]);
  const featured = INSIGHTS_DATA[0];

  return <main className="insights-page" id="main-content">
    <SEOHead title="Engineering Insights & Architecture Notes | Tekmora" description="Practical notes on software architecture, AI, SAP integration, mobile engineering, data integrity, and operational systems." canonical="https://tekmorasolution.com/insights" />

    <section className="ip-hero"><div className="ip-glow" /><div className="container ip-hero-grid"><div><p className="ip-kicker">Ideas From the Work</p><h1>Practical Thinking<br />for <span>Better Digital<br />Products.</span></h1></div><div className="ip-hero-copy"><p>Engineering perspectives, architecture decisions, and operational lessons drawn from building real products—not abstract theory.</p><a className="ip-btn" href="#insights-library">Explore Insights <ArrowRight size={15} /></a><div className="ip-proof"><span><strong>{INSIGHTS_DATA.length}</strong>In-depth articles</span><span><strong>{categories.length - 1}</strong>Technical topics</span><span><strong>100%</strong>Production informed</span></div></div></div></section>

    <section className="ip-featured"><div className="container"><p className="ip-kicker">Featured Insight</p><Link className="ip-feature-card" to={`/insights/${featured.slug}`}><div className="ip-feature-copy"><span>{featured.number} / {featured.category}</span><h2>{featured.title}</h2><p>{featured.summary}</p><div><small><Clock />{featured.readingTime}</small><small><Calendar />{featured.publishDate}</small></div><strong>Read Full Article <ArrowRight size={14} /></strong></div><div className="ip-feature-visual"><div className="ip-orbit orbit-one" /><div className="ip-orbit orbit-two" /><span className="ip-node node-one">ERP</span><span className="ip-node node-two">API</span><span className="ip-node node-three">DATA</span><i><Sparkles />Connected<br />Operations</i></div></Link></div></section>

    <section className="ip-library" id="insights-library"><div className="container"><div className="ip-section-head"><div><p className="ip-kicker">Knowledge Library</p><h2>Notes on Building<br />Systems That Last</h2></div><p>Browse practical guidance across engineering, platforms, and operations.</p></div>
      <div className="ip-controls"><div className="ip-categories">{categories.map(item => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}<small>{item === 'All' ? INSIGHTS_DATA.length : INSIGHTS_DATA.filter(a => a.category === item).length}</small></button>)}</div><label className="ip-search"><Search size={14} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search insights…" aria-label="Search insights" /></label></div>
      <AnimatePresence mode="popLayout"><motion.div layout className="ip-grid">{articles.map((article, index) => <motion.article layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} key={article.slug}><div className="ip-card-top"><span>{article.number}</span><small>{article.category}</small></div><BookOpen /><h3><Link to={`/insights/${article.slug}`}>{article.title}</Link></h3><p>{article.summary}</p><div className="ip-card-meta"><span><Clock />{article.readingTime}</span><span>{article.publishDate}</span></div><Link className="ip-card-link" to={`/insights/${article.slug}`}>Read Article <ArrowRight size={13} /></Link><i>0{index + 1}</i></motion.article>)}</motion.div></AnimatePresence>
      {articles.length === 0 && <div className="ip-empty">No insights match your search.</div>}
    </div></section>

    <section className="ip-principles"><div className="container"><div><p className="ip-kicker">What You’ll Find Here</p><h2>Useful Detail.<br /><span>No Empty Theory.</span></h2></div><div>{[['01', 'Architecture Decisions', 'Why a technical approach works, where it fails, and what it costs.'], ['02', 'Operational Lessons', 'Patterns learned from workflows, edge cases, and production constraints.'], ['03', 'Practical Guidance', 'Clear explanations that help teams make better product decisions.']].map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    {/* <section className="ip-cta"><div className="container"><div><p className="ip-kicker">Have a Technical Challenge?</p><h2>Let’s Think It Through Together.</h2><p>Bring us the workflow, integration, or product problem. We'll help define a practical path forward.</p></div><Link className="ip-btn" to="/contact">Talk to an Engineer <ArrowRight size={15} /></Link></div></section> */}
  </main>;
};
