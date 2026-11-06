import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { ProjectPoster } from '../../components/studio/ProjectPosters';
import { Reveal } from '../../components/studio/StudioMotion';
import './HomePage.css';

const FEATURED = [
  {
    slug: 'dome-enterprise',
    name: 'DOME',
    line: 'Digital office for operations, people and finance',
    tag: 'Enterprise'
  },
  {
    slug: 'glucotrack-cgm',
    name: 'GlucoTrack',
    line: 'Live glucose readings, sensor pairing and clinical record',
    tag: 'Healthcare'
  },
  {
    slug: 'matrix-field-service',
    name: 'Matrix',
    line: 'Jobs, live tracking and equipment scan for field teams',
    tag: 'Mobile'
  },
  {
    slug: 'warehouse-grn-automation',
    name: 'WPS',
    line: 'Scan and track with a production dashboard on SAP',
    tag: 'Operations'
  }
] as const;

const SERVICES = [
  { title: 'Custom software', href: '/services/custom-software-development' },
  { title: 'Web applications', href: '/services/web-application-development' },
  { title: 'Mobile apps', href: '/services/mobile-app-development' },
  { title: 'SaaS products', href: '/services/saas-engineering-modernization' }
] as const;

const TECH = ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', '.NET', 'PostgreSQL', 'AWS'] as const;

export const HomePage: React.FC = () => {
  return (
    <main className="home-page studio-home" id="main-content">
      <SEOHead
        title="Tekmora Solution | Software Engineering for Startups & Businesses"
        description="Tekmora designs and develops web applications, mobile products, SaaS platforms and custom software from idea to production."
        canonical="https://tekmorasolution.com/"
      />

      <section className="home-hero">
        <div className="home-hero-stage">
          <div className="home-hero-copy">
            <Reveal>
              <p className="home-brand">Tekmora</p>
              <p className="studio-kicker">Software engineering for startups &amp; businesses</p>
              <h1>
                Software that businesses <br /> <span className="serif-accent"> rely on.</span>
              </h1>
              <p className="studio-lead">
                Web apps, mobile products, SaaS platforms and custom software — designed and engineered end to end.
              </p>
              <div className="home-actions">
                <Link to="/contact" className="studio-btn">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link to="/work" className="studio-btn-ghost">
                  View Our Work
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="product-window-frame home-hero-visual">
            <ProjectPoster slug="matrix-field-service" />
          </div>
        </div>
      </section>

      <section className="home-marquee" aria-label="Engineering with modern technologies">
        <div className="home-marquee-track">
          {[...TECH, ...TECH].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="home-work">
        <div className="container">
          <Reveal className="home-work-head">
            <div>
              <p className="studio-kicker">Selected work</p>
              <h2>Products shipping in the real world.</h2>
            </div>
            <Link to="/work" className="text-link">
              All projects <ArrowRight size={16} />
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
        </div>
      </section>

      <section className="home-services">
        <div className="container home-services-grid">
          <Reveal>
            <p className="studio-kicker">What we build</p>
            <h2>Engineering from first idea to a product people use.</h2>
          </Reveal>
          <ul className="home-service-list">
            {SERVICES.map((service, index) => (
              <li key={service.href}>
                <Link to={service.href}>
                  <span>0{index + 1}</span>
                  <strong>{service.title}</strong>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-proof" aria-label="Studio record">
        <div className="container home-proof-row">
          <div>
            <strong>18</strong>
            <span>Shipped products</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Delivery rate</span>
          </div>
          <div>
            <strong>5+</strong>
            <span>Industries</span>
          </div>
          <div>
            <strong>Remote-first</strong>
            <span>Long-term support</span>
          </div>
        </div>
      </section>

      <section className="home-close">
        <div className="container home-close-panel">
          <Reveal>
            <p className="studio-kicker">Next step</p>
            <h2>
              Have a product to build?
              <span className="serif-accent"> Let’s talk.</span>
            </h2>
            <p>
              Tell us what you’re building. We’ll reply with a clear point of view within one business day.
            </p>
            <div className="home-actions">
              <Link to="/contact" className="studio-btn">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="studio-btn-ghost">
                About Tekmora
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
