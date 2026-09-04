import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Coins, ArrowUpRight, Check, Copy, ChevronDown, Sparkles, Filter } from 'lucide-react';
import { SERVICES_MARKET_MATRIX, type ServiceMarketItem } from '../../../data/services';
import './ServiceMarketMatrix.css';

export const ServiceMarketMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedRank, setExpandedRank] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All 15 Disciplines' },
    { id: 'lead', label: 'Lead & Core' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'saas-modernization', label: 'SaaS & Modernization' },
    { id: 'enterprise-cloud', label: 'Enterprise & DevOps' },
    { id: 'security-systems', label: 'Security & Rescue' }
  ];

  const filteredMatrix = useMemo(() => {
    return SERVICES_MARKET_MATRIX.filter(item => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'lead') {
        return item.badgeType === 'lead' || item.badgeType === 'lead-ai' || item.badgeType === 'opportunity';
      }
      return item.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handleCopyTable = async () => {
    const textData = SERVICES_MARKET_MATRIX.map(
      item => `${item.rank}\t${item.service}\t${item.ratingType === 'money' ? '💰 x ' + item.attractivenessRating : '🔥 x ' + item.attractivenessRating}\t${item.recommendation}`
    ).join('\n');

    try {
      await navigator.clipboard.writeText(`Rank\tService\tMarket Attractiveness\tRecommendation\n${textData}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const renderRating = (item: ServiceMarketItem) => {
    if (item.ratingType === 'money') {
      return (
        <div className="rating-indicator money-rating" title="High-Margin Recurring Retainer">
          {[...Array(5)].map((_, i) => (
            <Coins key={i} size={15} className="rating-icon text-gold" />
          ))}
        </div>
      );
    }

    const fullFlames = Math.floor(item.attractivenessRating);
    const hasHalf = item.attractivenessRating % 1 !== 0;

    return (
      <div className="rating-indicator fire-rating" title={`${item.attractivenessRating} / 5 Market Demand`}>
        {[...Array(fullFlames)].map((_, i) => (
          <Flame key={`full-${i}`} size={16} className="rating-icon text-flame" />
        ))}
        {hasHalf && (
          <span className="half-flame-wrapper font-mono">
            <Flame size={16} className="rating-icon text-flame half" />
            <span className="half-tag">½</span>
          </span>
        )}
      </div>
    );
  };

  const getBadgeClass = (badgeType: string) => {
    switch (badgeType) {
      case 'lead':
        return 'badge-lead';
      case 'lead-ai':
        return 'badge-lead-ai';
      case 'opportunity':
        return 'badge-opportunity';
      case 'prominent':
        return 'badge-prominent';
      case 'add':
        return 'badge-add';
      case 'retainer':
        return 'badge-retainer';
      case 'niche':
        return 'badge-niche';
      case 'integrated':
        return 'badge-integrated';
      case 'secondary':
        return 'badge-secondary';
      default:
        return 'badge-neutral';
    }
  };

  return (
    <section className="service-matrix-section section-border-top" id="market-matrix">
      <div className="container">
        {/* Header with Title & Filter Controls */}
        <div className="matrix-header-wrap">
          <div className="matrix-title-area">
            <div className="section-meta">
              <span className="section-number font-mono">02</span>
              <span>// STRATEGIC CAPABILITY MATRIX</span>
              <span className="meta-sep font-mono">MARKET DEMAND RANKINGS</span>
            </div>
            <h2 className="matrix-headline font-display">
              MARKET ATTRACTIVENESS &<br />
              <span className="italic-accent">SERVICE PORTFOLIO RANKINGS.</span>
            </h2>
            <p className="matrix-description">
              Our engineering services are strategically structured based on operational ROI, enterprise urgency, and production longevity. We lead with transformative automation, scalable SaaS architecture, and hardened code.
            </p>
          </div>

          <div className="matrix-controls-top">
            <button 
              onClick={handleCopyTable} 
              className="btn btn-outline font-mono btn-copy-matrix"
              title="Copy matrix data to clipboard"
            >
              {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
              <span>{copied ? 'COPIED TABLE' : 'COPY MATRIX'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="matrix-filter-bar font-mono">
          <div className="filter-label">
            <Filter size={13} className="text-orange" />
            <span>FILTER BY DOMAIN:</span>
          </div>
          <div className="filter-chips">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Swiss Table */}
        <div className="matrix-table-container">
          <div className="matrix-table-header font-mono">
            <div className="col-rank">Rank</div>
            <div className="col-service">Service Discipline</div>
            <div className="col-market">Market Attractiveness</div>
            <div className="col-recommendation">Strategic Recommendation</div>
            <div className="col-action font-mono">Action</div>
          </div>

          <div className="matrix-table-body">
            {filteredMatrix.map((item) => {
              const isExpanded = expandedRank === item.rank;
              return (
                <div 
                  key={item.rank} 
                  className={`matrix-row ${isExpanded ? 'is-expanded' : ''}`}
                >
                  <div 
                    className="matrix-row-summary"
                    onClick={() => setExpandedRank(isExpanded ? null : item.rank)}
                  >
                    {/* Rank */}
                    <div className="col-rank font-mono">
                      <span className="rank-num">{item.rank}</span>
                    </div>

                    {/* Service Name */}
                    <div className="col-service">
                      <div className="service-name-wrap">
                        <Link 
                          to={`/services/${item.slug}`} 
                          className="service-link-title font-display"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.service}
                        </Link>
                        {item.rank <= 3 && (
                          <span className="lead-tag font-mono">
                            <Sparkles size={10} /> TIER-1
                          </span>
                        )}
                      </div>
                      <div className="service-mobile-note font-mono">{item.strategicNote}</div>
                    </div>

                    {/* Market Attractiveness */}
                    <div className="col-market">
                      {renderRating(item)}
                    </div>

                    {/* Recommendation Badge */}
                    <div className="col-recommendation">
                      <span className={`recommendation-badge font-mono ${getBadgeClass(item.badgeType)}`}>
                        {item.recommendation}
                      </span>
                    </div>

                    {/* Action Link & Expand Trigger */}
                    <div className="col-action">
                      <Link 
                        to={`/services/${item.slug}`} 
                        className="btn-inspect-service font-mono"
                        onClick={(e) => e.stopPropagation()}
                        title="View complete technical specification"
                      >
                        <span>VIEW SPEC</span>
                        <ArrowUpRight size={13} />
                      </Link>
                      <button 
                        className="btn-toggle-expand" 
                        aria-label="Toggle details"
                      >
                        <ChevronDown size={16} className={`chevron-icon ${isExpanded ? 'open' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Technical Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        className="matrix-row-drawer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="drawer-inner">
                          <div className="drawer-left">
                            <span className="drawer-label font-mono">STRATEGIC ARCHITECTURAL SCOPE:</span>
                            <p className="drawer-text">{item.strategicNote}</p>
                          </div>
                          <div className="drawer-right">
                            <Link to={`/services/${item.slug}`} className="btn btn-sm btn-orange font-mono">
                              <span>EXPLORE ARCHITECTURE & STACK</span>
                              <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Distinction Note */}
        <div className="matrix-strategic-insight font-mono">
          <div className="insight-badge">STRATEGIC PRINCIPLE</div>
          <p className="insight-content">
            <strong>The Critical Engineering Distinction:</strong> Generic marketing websites have commoditized, offering limited operational defensibility. We deliberately position and lead with <em>AI Workflow Automation, Scalable SaaS Modernization, Autonomous Agents,</em> and <em>Production Hardening</em> — the complex, high-throughput systems that directly drive revenue, mitigate security risk, and deliver compounding operational ROI.
          </p>
        </div>
      </div>
    </section>
  );
};
