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
    slug: 'warehouse-grn-automation',
    name: 'Warehouse GRN',
    line: 'Receiving workflow with document intake, PO matching, exceptions, and SAP Business One commit.',
    tag: 'Warehouse · SAP'
  },
  {
    slug: 'dome-enterprise',
    name: 'DOME',
    line: 'Internal product: operations workflows, permissions, audit trails, and reporting.',
    tag: 'Internal product'
  },
  {
    slug: 'sap-b1-production-dashboard',
    name: 'SAP B1 Dashboard',
    line: 'Production and inventory visibility pulled from SAP Business One into one operating view.',
    tag: 'Manufacturing'
  },
  {
    slug: 'matrix-field-service',
    name: 'Matrix',
    line: 'Offline-first field service app for jobs, evidence capture, and sync.',
    tag: 'Field service'
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
    title: 'Discovery',
    text: 'Review the business problem, users, current tools, constraints, and what “done” should mean for the first release.'
  },
  {
    title: 'Scope',
    text: 'Agree features, integrations, milestones, and ownership of decisions before build work expands.'
  },
  {
    title: 'Build',
    text: 'Develop in visible increments, share progress, and keep technical decisions tied to the agreed requirements.'
  },
  {
    title: 'Test',
    text: 'Validate workflows, permissions, edge cases, and integrations against real operating scenarios.'
  },
  {
    title: 'Handover and support',
    text: 'Deliver the working system with documentation, knowledge transfer, and a clear path for fixes or next-phase work.'
  }
] as const;

const ENGAGEMENT = [
  {
    title: 'You own the source code',
    text: 'Project code and agreed deliverables are handed over for your ownership. Tekmora does not lock the product behind an opaque black box.'
  },
  {
    title: 'Changing requirements stay explicit',
    text: 'When priorities shift, we revisit scope together so timeline and effort stay honest instead of drifting silently.'
  },
  {
    title: 'Support after launch',
    text: 'After release we can discuss maintenance, small fixes, documentation follow-up, or a next development phase.'
  },
  {
    title: 'Clear communication',
    text: 'Expect structured updates on what is done, what is blocked, and what needs a decision. Inquiries get a reply within one business day when possible.'
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
    title: 'Maintainable delivery',
    text: 'Code, structure, and documentation should support handover and future changes.'
  }
] as const;

export const HomePage: React.FC = () => {
  return (
    <main className="home-page studio-home" id="main-content">
      <SEOHead
        title="Tekmora Solutions | Custom Software & App Development"
        description="Custom software that solves real business problems — web apps, mobile apps, SaaS, WordPress, Shopify, and business systems. Discuss your project with Tekmora Solutions."
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
                <span className="serif-accent"> real business <br /> problems.</span>
              </h1>
              <p className="studio-lead">
                We design and develop applications that centralize workflows, reporting, and day-to-day operations — web platforms, mobile apps, SaaS products, WordPress sites, Shopify stores, and business systems built around how your team actually works.
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

      <section className="home-work">
        <div className="container">
          <Reveal className="home-work-head">
            <div>
              <p className="studio-kicker">Selected proof of work</p>
              <h2>Case studies before credentials.</h2>
              <p className="home-section-lead">
                Prospects usually ask whether we have solved something similar. These projects show the challenge, approach, and what was delivered—without inventing unverified metrics.
              </p>
            </div>
            <Link to="/work" className="text-link">
              View All Projects <ArrowRight size={16} />
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
            <p>Need warehouse receiving, SAP-connected workflows, or similar operations software?</p>
            <Link to="/contact?type=Existing%20system%20or%20integration&ref=warehouse-grn-automation" className="studio-btn">
              Discuss a Similar Project <ArrowRight size={16} />
            </Link>
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

      <section className="home-process" id="how-we-work">
        <div className="container">
          <Reveal className="home-section-head">
            <p className="studio-kicker">How we work</p>
            <h2>A deliberate path from discovery to handover.</h2>
            <p className="home-section-lead">
              Clear steps reduce delivery risk—especially when you are evaluating a focused team rather than a personal brand.{' '}
              <Link to="/workflow" className="text-link">Read the full workflow →</Link>
            </p>
          </Reveal>
          <ol className="home-process-list">
            {PROCESS.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="home-principle-grid home-engagement-grid">
            {ENGAGEMENT.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
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
            <h2>Clear answers for buyers .</h2>
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
