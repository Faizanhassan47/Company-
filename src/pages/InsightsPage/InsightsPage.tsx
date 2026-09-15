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
  const featured = INSIGHTS_DATA[0];
  const articles = useMemo(() => INSIGHTS_DATA.filter(article => {
    const matchesCategory = category === 'All' || article.category === category;
    const searchable = `${article.title} ${article.summary} ${article.tagline}`.toLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <main className="insights-page" id="main-content">
      <SEOHead
        title="Engineering Insights & Architecture Notes | Tekmora"
        description="Practical notes on software architecture, AI, SAP integration, mobile engineering, data integrity, and operational systems."
        canonical="https://tekmorasolution.com/insights"
      />

      <section className="ip-hero">
        <div className="ip-hero-gridlines" aria-hidden="true" />
        <div className="container ip-hero-layout">
          <div className="ip-hero-main">
            <p className="ip-kicker"><span /> Tekmora Field Notes</p>
            <h1>Ideas built in<br /><em>production.</em></h1>
            <p className="ip-hero-lead">Clear thinking on software architecture, product delivery, and the operational systems businesses depend on.</p>
          </div>
          <div className="ip-hero-aside">
            <span className="ip-issue font-mono">ISSUE 01 / ENGINEERING INTELLIGENCE</span>
            <p>Lessons from real constraints, real integrations, and software that has to work when the edge cases arrive.</p>
            <a href="#insights-library">Browse the library <ArrowRight size={16} /></a>
          </div>
          <div className="ip-stats">
            <div><strong>{String(INSIGHTS_DATA.length).padStart(2, '0')}</strong><span>Published notes</span></div>
            <div><strong>{String(categories.length - 1).padStart(2, '0')}</strong><span>Areas of practice</span></div>
            <div><strong>100%</strong><span>Production informed</span></div>
          </div>
        </div>
      </section>

      <section className="ip-featured">
        <div className="container">
          <div className="ip-section-label"><span>01</span><p>Featured dispatch</p></div>
          <Link className="ip-feature-card" to={`/insights/${featured.slug}`}>
            <div className="ip-feature-art" aria-hidden="true">
              <div className="ip-art-grid" />
              <div className="ip-orbit ip-orbit-lg" />
              <div className="ip-orbit ip-orbit-sm" />
              <span className="ip-node ip-node-a">ERP</span>
              <span className="ip-node ip-node-b">API</span>
              <span className="ip-node ip-node-c">DATA</span>
              <div className="ip-art-core"><Sparkles size={20} /><b>CONNECTED<br />OPERATIONS</b></div>
            </div>
            <div className="ip-feature-copy">
              <div className="ip-feature-meta font-mono"><span>{featured.category}</span><span>{featured.number}</span></div>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <div className="ip-reading-meta"><span><Clock size={13} />{featured.readingTime}</span><span><Calendar size={13} />{featured.publishDate}</span></div>
              <span className="ip-read-link">Read the full dispatch <ArrowRight size={16} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="ip-library" id="insights-library">
        <div className="container">
          <div className="ip-library-heading">
            <div className="ip-section-label"><span>02</span><p>Knowledge library</p></div>
            <div className="ip-library-title"><h2>Research, decisions<br />and field notes.</h2><p>Browse practical guidance across engineering, platforms, data, and operations.</p></div>
          </div>

          <div className="ip-controls">
            <div className="ip-categories" aria-label="Filter insights by category">
              {categories.map(item => (
                <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>
                  {item}<small>{item === 'All' ? INSIGHTS_DATA.length : INSIGHTS_DATA.filter(article => article.category === item).length}</small>
                </button>
              ))}
            </div>
            <label className="ip-search"><Search size={16} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search the library" aria-label="Search insights" /></label>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="ip-grid">
              {articles.map((article, index) => (
                <motion.article layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} key={article.slug}>
                  <div className="ip-card-index font-mono">{String(index + 1).padStart(2, '0')}</div>
                  <div className="ip-card-body">
                    <div className="ip-card-top"><span>{article.category}</span><span>{article.number}</span></div>
                    <BookOpen className="ip-card-icon" size={20} />
                    <h3><Link to={`/insights/${article.slug}`}>{article.title}</Link></h3>
                    <p>{article.summary}</p>
                  </div>
                  <div className="ip-card-footer">
                    <div><span><Clock size={12} />{article.readingTime}</span><span>{article.publishDate}</span></div>
                    <Link to={`/insights/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowRight size={18} /></Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
          {articles.length === 0 && <div className="ip-empty"><Search size={22} /><p>No insights match “{query}”.</p><button type="button" onClick={() => { setQuery(''); setCategory('All'); }}>Clear filters</button></div>}
        </div>
      </section>

      <section className="ip-principles">
        <div className="container">
          <div className="ip-principles-intro"><p className="ip-kicker"><span /> Our editorial standard</p><h2>Useful detail.<br /><em>No empty theory.</em></h2></div>
          <div className="ip-principles-list">
            {[
              ['01', 'Architecture decisions', 'Why an approach works, where it fails, and what it costs.'],
              ['02', 'Operational lessons', 'Patterns learned from workflows, edge cases, and production constraints.'],
              ['03', 'Practical guidance', 'Clear explanations that help teams make stronger product decisions.']
            ].map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
        </div>
      </section>
    </main>
  );
};
