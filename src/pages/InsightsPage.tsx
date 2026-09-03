import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar, Search } from 'lucide-react';
import { INSIGHTS_DATA, type InsightArticle } from '../data/insights';
import { SEOHead } from '../components/seo/SEOHead';
import './InsightsPage.css';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = ['All Categories', ...Array.from(new Set(INSIGHTS_DATA.map(a => a.category)))];

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter(article => {
      const matchesCat = selectedCategory === 'All Categories' || article.category === selectedCategory;
      const matchesQuery = searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="insights-page" id="main-content">
      <SEOHead
        title="Technical Insights & Architecture Notes | Tekmora"
        description="Original, in-depth engineering breakdowns from Tekmora covering SAP Business One integrations, warehouse GRN automation, React Native vs Native, RBAC permissions, and SQL Server telemetry."
        canonical="https://tekmora.com/insights"
      />

      {/* Hero Header */}
      <section className="insights-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// TECHNICAL KNOWLEDGE BASE</span>
            <span className="meta-sep font-mono">10 ARTICLES</span>
          </div>

          <h1 className="insights-title font-display">
            NOTES FROM<br />
            <span className="italic-accent">THE WORK.</span>
          </h1>

          <p className="insights-lead">
            Practical technical answers, architecture trade-offs, and operational blueprints authored by Tekmora based on direct production experience.
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="insights-feed-section section section-border-top">
        <div className="container">
          <div className="insights-controls-bar">
            {/* Category Filter Chips */}
            <div className="category-chips-list font-mono">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-chip-btn ${selectedCategory === cat ? 'chip-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="insights-search-box font-mono">
              <Search size={14} className="text-dim" />
              <input
                type="text"
                placeholder="Search topics (SAP, GRN, React Native, RBAC)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="insights-feed-grid">
            {filteredArticles.map((article: InsightArticle) => (
              <article key={article.slug} className="insight-feed-card">
                <div className="feed-top-meta font-mono">
                  <span className="feed-cat text-orange">{article.category}</span>
                  <div className="feed-time">
                    <Clock size={12} />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h2 className="feed-title font-display">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="feed-summary">{article.summary}</p>

                <div className="feed-footer font-mono">
                  <div className="feed-date">
                    <Calendar size={12} />
                    <span>{article.publishDate}</span>
                  </div>

                  <Link to={`/insights/${article.slug}`} className="feed-link">
                    <span>READ FULL NOTE</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-results-box font-mono">
              <span>NO ARTICLES FOUND MATCHING YOUR QUERY.</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
