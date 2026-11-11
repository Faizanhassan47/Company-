import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { env } from '@/config/env';
import { buildFaqSchema, HOME_FAQS } from '../../data/aiSeo';
import { TECH_EXPERTISE } from '../../data/company';
import { ProjectPoster } from '../../components/studio/ProjectPosters';
import { Reveal } from '../../components/studio/StudioMotion';
import { trackEvent } from '../../utils/analytics';
import './HomePage.css';

const FEATURED = [
  {
    slug: 'dome-enterprise',
    name: 'DOME',
    line: 'Internal product: operations workflows, permissions, audit trails, and reporting.',
    tag: 'Internal product'
  },
  {
    slug: 'glucotrack-cgm',
    name: 'GlucoTrack',
    line: 'Mobile glucose monitoring with sensor pairing and clinical records.',
    tag: 'Healthcare'
  },
  {
    slug: 'matrix-field-service',
    name: 'Matrix',
    line: 'Field service app for jobs, tracking, and equipment checks.',
    tag: 'Mobile'
  },
  {
    slug: 'warehouse-grn-automation',
    name: 'WPS',
    line: 'Warehouse production workflows with scanning and reporting.',
    tag: 'Operations'
  }
] as const;

const SERVICES = [
  {
    title: 'Custom Software Development',
    href: '/services/custom-software-development',
    text: 'Applications built to support your processes, users, and business requirements.'
  },
  {
    title: 'ERP & Operations Software',
    href: '/services/erp-operations-software',
    text: 'Systems that centralize orders, inventory, approvals, reporting, and operational workflows.'
  },
  {
    title: 'Warehouse Management Software',
    href: '/services/warehouse-management-systems',
    text: 'Receiving, GRN processing, inventory visibility, and dock-to-stock warehouse workflows.'
  },
  {
    title: 'Business Dashboards & Internal Tools',
    href: '/services/internal-tools-dashboards',
    text: 'Dashboards and back-office tools that replace spreadsheet reporting and scattered workflows.'
  },
  {
    title: 'Web Development',
    href: '/services/web-application-development',
    text: 'Websites, dashboards, portals, and browser-based applications.'
  },
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    text: 'Mobile applications for customers, teams, and everyday workflows.'
  },
  {
    title: 'SaaS Development',
    href: '/services/saas-engineering-modernization',
    text: 'Subscription platforms with accounts, permissions, and product management.'
  },
  {
    title: 'WordPress Development',
    href: '/services/wordpress-development',
    text: 'Custom WordPress sites, themes, plugins, and WooCommerce stores.'
  },
  {
    title: 'Shopify Development',
    href: '/services/shopify-development',
    text: 'Shopify store setup, theme customization, apps, and checkout improvements.'
  },
  {
    title: 'Integrations & Engineering',
    href: '/services/performance-scaling-cloud-devops',
    text: 'Connect systems, improve applications, and support ongoing releases.'
  }
] as const;

const PROCESS = [
  {
    title: 'Understand the requirements',
    text: 'Discuss the business problem, target users, existing systems, and priorities.'
  },
  {
    title: 'Define the scope',
    text: 'Identify features, technical considerations, milestones, and expected deliverables.'
  },
  {
    title: 'Design and develop',
    text: 'Build the agreed functionality, review progress, and address feedback.'
  },
  {
    title: 'Test and launch',
    text: 'Check the product against acceptance criteria and prepare it for release.'
  },
  {
    title: 'Plan what comes next',
    text: 'Discuss maintenance, improvements, and future development as needed.'
  }
] as const;

const PRINCIPLES = [
  {
    title: 'Clear requirements',
    text: 'Everyone should understand what is being built and why.'
  },
  {
    title: 'Practical technical decisions',
    text: 'Technology choices should reflect the project’s needs and constraints.'
  },
  {
    title: 'Visible progress',
    text: 'Clients should know what is done, what is in progress, and what needs a decision.'
  },
  {
    title: 'Code that can be maintained',
    text: 'Think beyond the first release and account for future changes.'
  }
] as const;

export const HomePage: React.FC = () => {
  return (
    <main className="home-page studio-home" id="main-content">
      <SEOHead
        title="Tekmora Solutions | Custom Software & App Development"
        description="Custom software that solves real business problems — web apps, ERP-style operations systems, mobile apps, and SaaS products. Discuss your project with Tekmora Solutions."
        canonical="https://www.tekmorasolution.com/"
        jsonLd={buildFaqSchema(HOME_FAQS)}
      />

      <section className="home-hero">
        <div className="home-hero-stage">
          <div className="home-hero-copy">
            <Reveal>
              <p className="studio-kicker">Tekmora Solutions / Software development</p>
              <h1>
                Custom software that solves <br />
                <span className="serif-accent"> real business problems.</span>
              </h1>
              <p className="studio-lead">
                We design and develop applications that centralize workflows, reporting, and day-to-day operations — web platforms, mobile apps, SaaS products, and business systems built around how your team actually works.
              </p>
              <div className="home-actions">
                <Link
                  to="/contact?type=Not%20sure%20yet"
                  className="studio-btn"
                  onClick={() => trackEvent('home_cta_click', 'conversion', 'discuss_project')}
                >
                  Discuss Your Project <ArrowRight size={16} />
                </Link>
                {env.calendarUrl ? (
                  <a
                    href={env.calendarUrl}
                    className="studio-btn-ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('home_cta_click', 'conversion', 'discovery_call')}
                  >
                    Book a Discovery Call
                  </a>
                ) : (
                  <Link to="/work" className="studio-btn-ghost">
                    Explore Our Work
                  </Link>
                )}
              </div>
            </Reveal>
          </div>

          <div className="product-window-frame home-hero-visual">
            <ProjectPoster slug="dome-enterprise" />
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="container">
          <Reveal className="home-section-head">
            <p className="studio-kicker">Software development services</p>
            <h2>Different businesses need different kinds of software.</h2>
            <p className="home-section-lead">
              Some need a product built from scratch. Others need to improve an existing system, connect their tools, or make an application easier to use. Here’s where we can help.
            </p>
          </Reveal>
          <ul className="home-service-grid">
            {SERVICES.map((service, index) => (
              <li key={service.href}>
                <Link to={service.href}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{service.title}</strong>
                  <p>{service.text}</p>
                  <em>
                    Learn more <ArrowRight size={14} />
                  </em>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services" className="text-link home-services-all">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="home-work">
        <div className="container">
          <Reveal className="home-work-head">
            <div>
              <p className="studio-kicker">A closer look at our work</p>
              <h2>Projects, requirements, and what was built.</h2>
              <p className="home-section-lead">
                Browse examples of software projects, including the problems they address, features developed, and technical decisions involved.
              </p>
            </div>
            <Link to="/work" className="text-link">
              View Projects <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="home-feature">
            <Link to={`/work/${FEATURED[0].slug}`} className="home-feature-main">
              <div className="home-feature-media">
                <ProjectPoster slug={FEATURED[0].slug} />
              </div>
              <div className="home-feature-meta">
                <span>{FEATURED[0].tag}</span>
                <h3>{FEATURED[0].name}</h3>
                <p>{FEATURED[0].line}</p>
                <em>
                  View case study <ArrowUpRight size={16} />
                </em>
              </div>
            </Link>

            <div className="home-feature-side">
              {FEATURED.slice(1).map((item, index) => (
                <Reveal key={item.slug} delay={0.08 * (index + 1)}>
                  <Link to={`/work/${item.slug}`} className="home-side-row">
                    <div className="home-side-media">
                      <ProjectPoster slug={item.slug} />
                    </div>
                    <div className="home-side-copy">
                      <span>{item.tag}</span>
                      <strong>{item.name}</strong>
                      <p>{item.line}</p>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="home-work-cta">
            <p>Need operations software, reporting, or a similar internal system?</p>
            <Link to="/contact?type=Custom%20software%20or%20web%20application&ref=dome-enterprise" className="studio-btn">
              Build Something Similar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-tech">
        <div className="container">
          <Reveal className="home-section-head">
            <p className="studio-kicker">Technical expertise</p>
            <h2>Technologies used on real project work.</h2>
            <p className="home-section-lead">
              A short list of stacks Tekmora actually uses. The right choice always depends on the product requirements and constraints.
            </p>
          </Reveal>
          <div className="home-tech-grid">
            {TECH_EXPERTISE.map(item => (
              <article key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-agency">
        <div className="container home-agency-panel">
          <Reveal>
            <p className="studio-kicker">Agency partnerships</p>
            <h2>Your development partner, behind the scenes.</h2>
            <p>
              Need additional engineering capacity for a client project? Tekmora can discuss development partnerships for web applications, custom software, SaaS products, and mobile development.
            </p>
            <div className="home-actions">
              <Link to="/agency-partners" className="studio-btn">
                Explore Agency Partnerships <ArrowRight size={16} />
              </Link>
              <Link to="/contact?type=Custom%20software%20or%20web%20application&ref=agency-partners" className="studio-btn-ghost">
                Discuss a Partnership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-process">
        <div className="container">
          <Reveal>
            <p className="studio-kicker">How a project moves forward</p>
            <h2>A practical path from conversation to release.</h2>
          </Reveal>
          <ol className="home-process-list">
            {PROCESS.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-principles">
        <div className="container">
          <Reveal>
            <p className="studio-kicker">What matters when building software</p>
            <h2>Working principles, not marketing slogans.</h2>
          </Reveal>
          <div className="home-principle-grid">
            {PRINCIPLES.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-faq" id="faq">
        <div className="container">
          <Reveal className="home-section-head">
            <p className="studio-kicker">Common questions</p>
            <h2>Clear answers for buyers and AI search.</h2>
            <p className="home-section-lead">
              Short answers about Tekmora’s services, ERP/warehouse/dashboard work, who it’s for, and how a project starts.
            </p>
          </Reveal>
          <div className="home-faq-list">
            {HOME_FAQS.map(item => (
              <details key={item.question} className="home-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-close">
        <div className="container home-close-panel">
          <Reveal>
            <p className="studio-kicker">Next step</p>
            <h2>Tell us what you’re planning.</h2>
            <p>
              Whether you’re starting a new product or improving an existing one, share what you need. We’ll review the requirements and discuss possible next steps.
            </p>
            <div className="home-actions">
              <Link to="/contact?type=Not%20sure%20yet" className="studio-btn">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/contact?type=Existing%20system%20or%20integration" className="studio-btn-ghost">
                Discuss an Existing System
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
