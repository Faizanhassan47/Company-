import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_DATA, type IndustryDetail } from '../data/industries';
import { SEOHead } from '../components/seo/SEOHead';
import './IndustriesPage.css';

export const IndustriesPage: React.FC = () => {
  return (
    <main className="industries-page" id="main-content">
      <SEOHead
        title="Operational Software for Core Industries | Tekmora"
        description="Tekmora engineers custom software solutions for manufacturing plants, warehouse logistics hubs, field service teams, and scaling e-commerce brands."
        canonical="https://tekmorasolution.com/industries"
      />

      {/* Hero */}
      <section className="industries-hero section">
        <div className="container">
          <div className="section-meta">
            <span className="section-number">01</span>
            <span>// SECTOR EXPERTISE</span>
            <span className="meta-sep font-mono">4 OPERATIONAL VERTICALS</span>
          </div>

          <h1 className="industries-title font-display">
            SOFTWARE FOR<br />
            <span className="italic-accent">SPECIALIZED INDUSTRIES.</span>
          </h1>

          <p className="industries-lead">
            Every sector has its own physical realities, constraints, and data bottlenecks. We design software around the actual environments where work happens—factory floors, receiving docks, service vans, and retail storefronts.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid-section section section-border-top">
        <div className="container">
          <div className="industries-stack">
            {INDUSTRIES_DATA.map((industry: IndustryDetail) => (
              <article className="industry-card" key={industry.slug}>
                <div className="industry-card-header">
                  <div className="ind-meta font-mono">
                    <span className="text-orange">SECTOR {industry.number}</span>
                    <span className="meta-sep">/</span>
                    <span>{industry.title}</span>
                  </div>

                  <h2 className="ind-title font-display">
                    <Link to={`/industries/${industry.slug}`}>{industry.title}</Link>
                  </h2>

                  <p className="ind-tagline">{industry.tagline}</p>
                </div>

                <div className="industry-card-body">
                  {/* Common Problems */}
                  <div className="ind-problems-col">
                    <div className="col-label font-mono">
                      <AlertCircle size={13} className="text-orange" />
                      <span>COMMON OPERATIONAL BOTTLENECKS</span>
                    </div>

                    <div className="problems-compact-list">
                      {industry.commonProblems.map((prob) => (
                        <div key={prob.problem} className="problem-compact-item">
                          <strong className="prob-name font-mono">{prob.problem}</strong>
                          <p className="prob-impact">{prob.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Software Solutions */}
                  <div className="ind-solutions-col">
                    <div className="col-label font-mono">
                      <CheckCircle2 size={13} className="text-green" />
                      <span>TEKMORA SOFTWARE BLUEPRINTS</span>
                    </div>

                    <div className="solutions-compact-list">
                      {industry.softwareSolutions.map((sol) => (
                        <div key={sol.title} className="solution-compact-item">
                          <strong className="sol-name">{sol.title}</strong>
                          <p className="sol-desc">{sol.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="ind-action font-mono">
                      <Link to={`/industries/${industry.slug}`} className="btn btn-sm btn-orange">
                        <span>EXPLORE {industry.title.toUpperCase()} SOLUTIONS</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
