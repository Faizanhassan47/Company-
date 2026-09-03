import React from 'react';
import { motion } from 'framer-motion';
import { INSIGHTS_DATA } from '../../../data/insights';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
import './InsightsPreviewSection.css';

export const InsightsPreviewSection: React.FC = () => {
  const featuredArticles = INSIGHTS_DATA.slice(0, 3);

  return (
    <section className="section insights-preview-section section-border-bottom" id="insights">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">09</span>
          <span>// PRACTICAL EXPERTISE</span>
          <span className="meta-sep font-mono">ENGINEERING PERSPECTIVES</span>
        </div>

        <motion.div 
          className="insights-preview-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="insights-headline font-display">
              NOTES FROM<br />
              <span className="italic-accent">THE WORK.</span>
            </h2>
          </div>
          <p className="insights-subtitle">
            Original, practical technical breakdowns and operational insights based on direct software engineering experience.
          </p>
        </motion.div>

        {/* 3 Featured Article Cards Grid */}
        <motion.div 
          className="insights-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {featuredArticles.map((article) => (
            <motion.article 
              key={article.slug} 
              className="insight-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              <div className="insight-top-bar font-mono">
                <span className="insight-category text-orange">{article.category}</span>
                <div className="insight-reading-time">
                  <Clock size={12} />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <h3 className="insight-card-title font-display">
                <Link to={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>

              <p className="insight-card-summary">{article.summary}</p>

              <div className="insight-card-footer font-mono">
                <div className="insight-date">
                  <Calendar size={12} />
                  <span>{article.publishDate}</span>
                </div>

                <Link to={`/insights/${article.slug}`} className="insight-read-link">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* All Insights Link */}
        <div className="insights-action-row font-mono">
          <Link to="/insights" className="btn btn-secondary">
            <span>EXPLORE ALL 10 TECHNICAL ARTICLES</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
