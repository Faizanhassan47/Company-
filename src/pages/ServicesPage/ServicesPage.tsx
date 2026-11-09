import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import './ServicesPage.css';

const SHOWCASE = [
  {
    code: '01',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    summary: 'Build software around the way your business operates, instead of forcing every process into an off-the-shelf product.',
    examples: 'Internal tools, dashboards, client portals, workflow systems'
  },
  {
    code: '02',
    title: 'Web Development',
    slug: 'web-application-development',
    summary: 'Develop websites and web applications that help customers, employees, and partners access the information and functionality they need.',
    examples: 'Web platforms, business websites, account portals, online applications'
  },
  {
    code: '03',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    summary: 'Create mobile applications designed for the devices, interactions, and workflows your users depend on.',
    examples: 'Customer apps, service apps, field-work apps, mobile product interfaces'
  },
  {
    code: '04',
    title: 'SaaS Development',
    slug: 'saas-engineering-modernization',
    summary: 'Develop cloud-based software products with the features required to manage users, subscriptions, access, and everyday product operations.',
    examples: 'Multi-user platforms, subscription products, admin dashboards'
  },
  {
    code: '05',
    title: 'UI/UX Design',
    slug: 'ui-ux-product-design',
    summary: 'Plan workflows and design interfaces that help people understand and use your product.',
    examples: 'Wireframes, user flows, prototypes, application interface design'
  },
  {
    code: '06',
    title: 'Integrations & Software Engineering',
    slug: 'performance-scaling-cloud-devops',
    summary: 'Improve how your software systems exchange information and support day-to-day operations.',
    examples: 'APIs, third-party integrations, existing-system improvements, technical maintenance'
  },
  {
    code: '07',
    title: 'ERP & Operations Software',
    slug: 'erp-operations-software',
    summary: 'Custom systems that centralize orders, inventory, approvals, reporting, and day-to-day operational workflows.',
    examples: 'Operations hubs, inventory visibility, approvals, dashboards'
  }
] as const;

export const ServicesPage: React.FC = () => {
  return (
    <main className="services-page" id="main-content">
      <SEOHead
        title="Software Development Services — Tekmora Solutions"
        description="Custom software, ERP and operations systems, web apps, mobile apps, SaaS products, UI/UX design, and integrations from Tekmora Solutions."
        canonical="https://www.tekmorasolution.com/services"
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
              Discuss Your Project →
            </Link>
          </aside>

          <div className="sv-main">
            <header className="sv-intro">
              <p className="sv-meta">Software development services</p>
              <h1>Software development services</h1>
              <p className="sv-lede">
                We help businesses develop digital products and software systems for specific needs. That includes building new applications from requirements, and improving existing products when workflows, integrations, or interfaces need practical changes.
              </p>
              <p className="sv-lede">
                Whether the goal is launching an application, managing internal operations, or strengthening a system already in use, we start from the problem and define a development approach that fits the constraints.
              </p>
            </header>

            <div className="sv-list">
              {SHOWCASE.map(item => (
                <article className="sv-item" key={item.slug} id={item.slug}>
                  <div className="sv-item-top">
                    <span className="sv-code">{item.code}</span>
                    <span className="sv-stack">{item.examples}</span>
                  </div>
                  <h2>
                    <Link to={`/services/${item.slug}`}>{item.title}</Link>
                  </h2>
                  <p>{item.summary}</p>
                  <Link to={`/services/${item.slug}`} className="sv-more">
                    Explore this service →
                  </Link>
                </article>
              ))}
            </div>

            <footer className="sv-foot">
              <div>
                <p className="sv-meta">Next</p>
                <h2>Tell us what you’re planning.</h2>
                <p>
                  Share the problem, the users, and what you need the software to do. We’ll review the requirements and discuss possible next steps.
                </p>
              </div>
              <div className="sv-foot-actions">
                <Link to="/contact?type=Not%20sure%20yet" className="sv-btn">
                  Discuss Your Product Idea
                </Link>
                <Link to="/contact?type=Existing%20system%20or%20integration" className="sv-link">
                  Discuss an Existing System
                </Link>
                <Link to="/work" className="sv-link">
                  View Projects
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
