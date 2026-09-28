import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './AboutPage.css';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Build What Matters',
    description: 'We don’t build features for the sake of complexity. Every line of code, database index, and user interface component must directly serve a verified business or operational outcome.'
  },
  {
    number: '02',
    title: 'Communicate Directly',
    description: 'No account managers, bloated communication layers, or lost context. Clients collaborate directly with the senior engineers and product designers actively building their software.'
  },
  {
    number: '03',
    title: 'Engineer for Change',
    description: 'Business requirements evolve. We architect modular, well-documented systems with strict type safety that your team can maintain, scale, or hand over with zero friction.'
  },
  {
    number: '04',
    title: 'Own the Outcome',
    description: 'We don’t just deliver code and disappear. We take end-to-end technical responsibility—from initial architecture and threat modeling to deployment, monitoring, and post-launch stability.'
  }
];

const WORKING_MODEL_ITEMS = [
  {
    title: 'Direct Technical Access',
    description: 'Direct Slack channel and weekly video check-ins with your engineering lead.'
  },
  {
    title: 'Product-First Mindset',
    description: 'We challenge assumptions to ensure the software solves the actual underlying problem.'
  },
  {
    title: '100% Intellectual Property Ownership',
    description: 'All repositories, design assets, and database schemas are 100% owned by you from day one.'
  },
  {
    title: 'Visible 2-Week Sprints',
    description: 'Continuous delivery with working staging environments you can test at every milestone.'
  },
  {
    title: 'Rigorous Quality & Security',
    description: 'Automated test suites, type-checked contracts, and security audits baked into every build.'
  },
  {
    title: 'Long-Term Partnership',
    description: 'Optional ongoing SLA retainers to ensure your systems remain fast and secure as you scale.'
  }
];

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page" id="main-content">
      <SEOHead
        title="About Tekmora | Software Engineering Studio"
        description="Tekmora is a focused software engineering studio. We build custom web applications, mobile apps, and internal platforms for startups and commercial businesses."
        canonical="https://tekmorasolution.com/about"
      />

      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="about-kicker">ABOUT TEKMORA</span>
            <h1 className="about-hero-title">
              Small team. <br />
              <span className="text-orange">Serious engineering.</span>
            </h1>
            <p className="about-hero-lead">
              Tekmora is an independent software engineering studio. We partner with founders, growing companies, and commercial operators to design, build, and maintain digital products that solve real operational problems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story / Who We Are & Why We Exist */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-col">
            <span className="about-kicker">WHO WE ARE</span>
            <h2 className="about-section-heading">
              Why Tekmora Exists
            </h2>
            <p className="about-body-text">
              Too many businesses are stuck between two bad options: off-the-shelf SaaS products that force clumsy workarounds, or large generic IT consultancies that assign junior developers behind layers of account managers.
            </p>
            <p className="about-body-text">
              We started Tekmora to provide a better model: a focused, founder-led software studio where businesses work directly with experienced engineers who genuinely understand system architecture, product design, and business constraints.
            </p>
          </div>

          <div className="about-story-col">
            <div className="about-image-card">
              <img
                src="/images/coding-workspace.jpg"
                alt="Tekmora engineering studio workspace"
                className="about-workspace-img"
              />
              <div className="about-image-caption font-mono">
                <span>TEKMORA STUDIO // FOCUSED PRODUCT ENGINEERING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Principles */}
      <section className="about-principles-section">
        <div className="container">
          <div className="about-section-intro">
            <span className="about-kicker">OUR STANDARDS</span>
            <h2 className="about-section-heading">How We Think & Operate</h2>
            <p className="about-section-sub">
              These principles guide every technical decision, architecture recommendation, and client partnership.
            </p>
          </div>

          <div className="about-principles-grid">
            {PRINCIPLES.map(p => (
              <div className="about-principle-card" key={p.number}>
                <span className="about-principle-num font-mono">{p.number}</span>
                <h3 className="about-principle-title">{p.title}</h3>
                <p className="about-principle-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Working Model */}
      <section className="about-model-section">
        <div className="container">
          <div className="about-section-intro">
            <span className="about-kicker">ENGAGEMENT MODEL</span>
            <h2 className="about-section-heading">What Working With Us Looks Like</h2>
            <p className="about-section-sub">
              Clear expectations, continuous visibility, and zero bureaucratic overhead.
            </p>
          </div>

          <div className="about-model-grid">
            {WORKING_MODEL_ITEMS.map((item, idx) => (
              <div className="about-model-card" key={idx}>
                <CheckCircle2 size={20} className="model-check-icon text-orange" />
                <div className="about-model-info">
                  <h3 className="about-model-title">{item.title}</h3>
                  <p className="about-model-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Specialize In */}
      <section className="about-focus-section">
        <div className="container about-focus-container">
          <div className="about-focus-left">
            <span className="about-kicker">SPECIALIZATION</span>
            <h2 className="about-section-heading">
              Our Core Technical Disciplines
            </h2>
            <p className="about-body-text">
              We specialize in custom web applications, mobile engineering, multi-tenant SaaS platforms, internal operations hubs, and database integrations.
            </p>
            <div className="about-focus-links">
              <Link to="/services" className="btn btn-secondary font-mono">
                <span>Explore Services</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/work" className="btn-link font-mono text-orange">
                <span>View Selected Work →</span>
              </Link>
            </div>
          </div>

          <div className="about-focus-right">
            <div className="about-tech-matrix">
              <div className="tech-matrix-group">
                <span className="matrix-title font-mono">Frontend</span>
                <span className="matrix-tags">React • Next.js • TypeScript • Tailwind CSS • Framer Motion</span>
              </div>
              <div className="tech-matrix-group">
                <span className="matrix-title font-mono">Backend & APIs</span>
                <span className="matrix-tags">Node.js • Express • REST • GraphQL • WebSockets</span>
              </div>
              <div className="tech-matrix-group">
                <span className="matrix-title font-mono">Mobile</span>
                <span className="matrix-tags">React Native • Expo • Offline SQLite • iOS • Android</span>
              </div>
              <div className="tech-matrix-group">
                <span className="matrix-title font-mono">Databases & Cloud</span>
                <span className="matrix-tags">PostgreSQL (RLS) • SQL Server • MongoDB • Redis • Docker • AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="container about-cta-container">
          <div className="about-cta-content">
            <span className="about-kicker">START A CONVERSATION</span>
            <h2 className="about-cta-heading">Have something ambitious to build?</h2>
            <p className="about-cta-sub">
              Tell us about your project or operational goals. We’ll provide candid technical guidance and a clear plan to bring it to life.
            </p>
          </div>
          <div className="about-cta-action">
            <Link
              to="/contact"
              className="btn btn-orange font-mono"
              onClick={() => trackEvent('about_cta_click', 'conversion', 'start_conversation')}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
