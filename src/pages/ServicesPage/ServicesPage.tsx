import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import './ServicesPage.css';

const SHOWCASE = [
  {
    code: '01',
    title: 'Custom software',
    slug: 'custom-software-development',
    summary: 'Internal tools, workflow systems and integrations built around how your team already works.',
    stack: 'APIs · automation · ops tooling'
  },
  {
    code: '02',
    title: 'Web applications',
    slug: 'web-application-development',
    summary: 'Customer portals, admin systems and product surfaces that stay fast as usage grows.',
    stack: 'SaaS · portals · dashboards'
  },
  {
    code: '03',
    title: 'Mobile apps',
    slug: 'mobile-app-development',
    summary: 'iOS and Android products with solid UX, offline support and reliable device features.',
    stack: 'Flutter · React Native · .NET MAUI'
  },
  {
    code: '04',
    title: 'SaaS products',
    slug: 'saas-engineering-modernization',
    summary: 'From first release to a product you can sell, scale and keep improving over time.',
    stack: 'MVP · architecture · iteration'
  },
  {
    code: '05',
    title: 'Product design',
    slug: 'ui-ux-product-design',
    summary: 'Interfaces that make complex work feel simple — research, flows and design systems.',
    stack: 'UX · UI · systems'
  },
  {
    code: '06',
    title: 'Engineering & scale',
    slug: 'performance-scaling-cloud-devops',
    summary: 'Ongoing work to harden, speed up and extend products already in production.',
    stack: 'performance · cloud · refactor'
  }
] as const;

export const ServicesPage: React.FC = () => {
  return (
    <main className="services-page" id="main-content">
      <SEOHead
        title="Software Development Services | Tekmora"
        description="Custom software, web apps, mobile products, SaaS platforms, product design and long-term engineering support."
        canonical="https://tekmorasolution.com/services"
      />

      <section className="sv">
        <div className="sv-shell">
          <aside className="sv-rail" aria-label="Service index">
            <p className="sv-rail-label">/services</p>
            <nav>
              {SHOWCASE.map(item => (
                <a key={item.slug} href={`#${item.slug}`}>
                  <span>{item.code}</span>
                  {item.title}
                </a>
              ))}
            </nav>
            <Link to="/contact" className="sv-rail-cta">
              Start a project →
            </Link>
          </aside>

          <div className="sv-main">
            <header className="sv-intro">
              <p className="sv-meta">Tekmora · engineering services</p>
              <h1>What we build for startups and operating businesses.</h1>
              <p className="sv-lede">
                We take products from a rough brief to something people use every day — web, mobile, SaaS and the custom systems around them.
              </p>
            </header>

            <div className="sv-list">
              {SHOWCASE.map(item => (
                <article className="sv-item" key={item.slug} id={item.slug}>
                  <div className="sv-item-top">
                    <span className="sv-code">{item.code}</span>
                    <span className="sv-stack">{item.stack}</span>
                  </div>
                  <h2>
                    <Link to={`/services/${item.slug}`}>{item.title}</Link>
                  </h2>
                  <p>{item.summary}</p>
                  <Link to={`/services/${item.slug}`} className="sv-more">
                    Open service notes →
                  </Link>
                </article>
              ))}
            </div>

            <footer className="sv-foot">
              <div>
                <p className="sv-meta">Next</p>
                <h2>If you’re unsure which lane fits, send the brief anyway.</h2>
                <p>
                  We’ll reply with a short read on scope, approach and whether we’re the right team.
                </p>
              </div>
              <div className="sv-foot-actions">
                <Link to="/contact" className="sv-btn">
                  Write to us
                </Link>
                <Link to="/work" className="sv-link">
                  Look at shipped work
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
