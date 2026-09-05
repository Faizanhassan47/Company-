import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INSIGHTS_DATA, type InsightArticle } from '../data/insights';
import { SERVICES_DATA } from '../data/services';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, ShieldCheck, Layers } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import './InsightDetailPage.css';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIdx = INSIGHTS_DATA.findIndex(a => a.slug === slug);
  const article: InsightArticle | undefined = INSIGHTS_DATA[currentIdx];
  const nextArticle = INSIGHTS_DATA[(currentIdx + 1) % INSIGHTS_DATA.length];

  const relatedServices = article
    ? SERVICES_DATA.filter(s => article.relatedServiceSlugs.includes(s.slug))
    : [];
  const relatedProjects = article
    ? PROJECTS.filter(p => article.relatedProjectSlugs.includes(p.slug))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <main className="insight-not-found container section" id="main-content">
        <SEOHead
          title="Article Not Found | Tekmora"
          description="The requested technical article could not be located."
        />
        <h1 className="font-display">ARTICLE NOT FOUND</h1>
        <p className="text-secondary mt-4">The requested technical publication could not be located.</p>
        <button onClick={() => navigate('/insights')} className="btn btn-orange font-mono mt-6">
          <ArrowLeft size={16} /> View All Notes
        </button>
      </main>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: 'Tekmora',
      url: 'https://tekmorasolution.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tekmora',
      logo: 'https://tekmorasolution.com/brand-icon.svg'
    },
    datePublished: article.publishDate,
    dateModified: article.updatedDate
  };

  return (
    <main className="insight-detail-page" id="main-content">
      <SEOHead
        title={`${article.title} | Tekmora Insights`}
        description={article.summary}
        canonical={`https://tekmorasolution.com/insights/${article.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />

      {/* Hero / Header */}
      <section className="insight-header-section section-border-bottom">
        <div className="container">
          <div className="insight-breadcrumb font-mono">
            <Link to="/insights" className="back-link">
              <ArrowLeft size={14} />
              <span>All Insights</span>
            </Link>
            <span className="sep">/</span>
            <span className="text-orange">{article.category}</span>
          </div>

          <div className="insight-headline-block">
            <h1 className="insight-main-title font-display">{article.title}</h1>
            <p className="insight-tagline">{article.tagline}</p>

            <div className="insight-author-bar font-mono">
              <div className="meta-item">
                <span className="meta-lbl">AUTHOR:</span>
                <span className="meta-val text-primary">{article.author}</span>
              </div>
              <span className="sep">•</span>
              <div className="meta-item">
                <Calendar size={13} className="text-dim" />
                <span>Published {article.publishDate}</span>
              </div>
              <span className="sep">•</span>
              <div className="meta-item">
                <Clock size={13} className="text-dim" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content & Side Rails */}
      <section className="section insight-body-section section-border-bottom">
        <div className="container insight-body-container">
          {/* Main Reading Column */}
          <article className="insight-article-column">
            {article.sections.map((sec, sIdx) => (
              <section key={sIdx} className="article-section-block">
                <h2 className="section-h2 font-display">{sec.heading}</h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="article-p">{p}</p>
                ))}

                {sec.callout && (
                  <blockquote className="article-callout">
                    <span className="callout-indicator font-mono">CRITICAL ARCHITECTURAL NOTE</span>
                    <p>{sec.callout}</p>
                  </blockquote>
                )}
              </section>
            ))}
          </article>

          {/* Side Context Rail */}
          <aside className="insight-sidebar-rail">
            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="sidebar-widget">
                <div className="widget-header font-mono">
                  <Layers size={14} className="text-orange" />
                  <span>RELEVANT DISCIPLINES</span>
                </div>
                <div className="widget-links-list">
                  {relatedServices.map(srv => (
                    <Link key={srv.slug} to={`/services/${srv.slug}`} className="widget-link-item font-mono">
                      <span>{srv.title}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Case Studies */}
            {relatedProjects.length > 0 && (
              <div className="sidebar-widget">
                <div className="widget-header font-mono">
                  <ShieldCheck size={14} className="text-orange" />
                  <span>VERIFIED SYSTEMS</span>
                </div>
                <div className="widget-links-list">
                  {relatedProjects.map(proj => (
                    <Link key={proj.slug} to={`/work/${proj.slug}`} className="widget-link-item font-mono">
                      <span>{proj.title}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Project Inquiry Callout */}
            <div className="sidebar-inquiry-box font-mono">
              <div className="inq-title">HAVE A SYSTEM TO ARCHITECT?</div>
              <p className="inq-desc">We build dependable custom software for complex operational environments.</p>
              <Link to="/contact" className="btn btn-sm btn-orange w-full">
                <span>Start a conversation ↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Next Article Footer */}
      <section className="next-article-section">
        <div className="container">
          <div className="next-article-wrapper">
            <div className="next-meta font-mono">
              <span>NEXT TECHNICAL NOTE</span>
              <span className="text-orange">NOTE {nextArticle.number}</span>
            </div>
            <h3 className="next-title font-display">
              <Link to={`/insights/${nextArticle.slug}`} className="next-link">
                <span>{nextArticle.title}</span>
                <ArrowUpRight size={26} className="next-arrow" />
              </Link>
            </h3>
            <p className="next-summary text-secondary">{nextArticle.summary}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
