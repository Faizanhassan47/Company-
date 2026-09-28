import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Globe, Smartphone, Cloud, Palette, Cpu } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import './ServicesPage.css';

interface CoreService {
  number: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  tagline: string;
  summary: string;
  whatWeBuild: string[];
  whoItIsFor: string;
  deliverables: string[];
  technologies: string[];
  relatedProject: {
    title: string;
    slug: string;
  };
}

const CORE_SERVICES: CoreService[] = [
  {
    number: '01',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    icon: Code2,
    tagline: 'Internal platforms, operational systems, and custom automated workflows.',
    summary: 'We build tailored software platforms engineered around your company’s exact operational realities—replacing fragile spreadsheets and rigid off-the-shelf software with robust, proprietary digital systems.',
    whatWeBuild: [
      'Internal operations & resource platforms',
      'Role-based approval and dispatch consoles',
      'Warehouse & inventory reconciliation pipelines',
      'Bespoke ERP extensions and departmental hubs',
      'Custom API middleware & database connectors'
    ],
    whoItIsFor: 'Growing businesses and commercial operators needing software that adapts to their workflows rather than forcing workarounds.',
    deliverables: [
      'Full architecture specification',
      'Clean modular React & Node frontend/backend',
      'Normalized SQL/PostgreSQL relational database',
      '100% intellectual property & source code transfer'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQL Server', 'REST APIs'],
    relatedProject: {
      title: 'DOME Enterprise Platform',
      slug: 'dome-enterprise'
    }
  },
  {
    number: '02',
    title: 'Web Application Development',
    slug: 'web-application-development',
    icon: Globe,
    tagline: 'High-performance SaaS apps, customer portals, and interactive web platforms.',
    summary: 'We develop fast, responsive web applications engineered for scale, search visibility, and sub-second user interactions. Built with modern React and Next.js architectures with strict type safety.',
    whatWeBuild: [
      'Customer self-service portals and account hubs',
      'Multi-tenant SaaS platforms and subscription tools',
      'High-throughput transactional dashboards',
      'Dynamic e-commerce & catalog web applications',
      'Interactive marketplaces and directory platforms'
    ],
    whoItIsFor: 'Startups and businesses launching customer-facing digital products requiring speed, high conversion, and robust security.',
    deliverables: [
      'Server-rendered Next.js/React web application',
      'Secure tokenized authentication (JWT / OAuth)',
      'Responsive interface tested across all screen viewports',
      'Automated CI/CD deployment pipeline'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    relatedProject: {
      title: 'Shoestops E-Commerce',
      slug: 'shoestops'
    }
  },
  {
    number: '03',
    title: 'Mobile Application Development',
    slug: 'mobile-app-development',
    icon: Smartphone,
    tagline: 'iOS and Android applications with offline synchronization and native hardware features.',
    summary: 'We engineer cross-platform mobile apps that perform reliably in demanding environments. From field-service tools with zero-connectivity persistence to polished consumer products.',
    whatWeBuild: [
      'Field-service job dispatch & inspection apps',
      'Offline-first data collection & logging tools',
      'Consumer companion & habit tracking apps',
      'Hardware-integrated scanning & camera utilities',
      'Push notification dispatch & real-time updates'
    ],
    whoItIsFor: 'Companies with field technicians, distributed teams, or founders building consumer mobile apps for iOS and Android.',
    deliverables: [
      'Cross-platform React Native / Expo application codebase',
      'Local SQLite offline synchronization engine',
      'App Store and Google Play deployment readiness',
      'Backend API endpoints & push notification handlers'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'iOS / Android SDKs'],
    relatedProject: {
      title: 'Matrix Field Service Application',
      slug: 'matrix-field-service'
    }
  },
  {
    number: '04',
    title: 'SaaS Product Development',
    slug: 'saas-engineering-modernization',
    icon: Cloud,
    tagline: 'From initial MVP architecture to high-margin, multi-tenant subscription scale.',
    summary: 'We partner with founders and product teams to take SaaS ideas from concept to revenue. We architect clean tenant isolation, subscription billing, automated provisioning, and administrative telemetry.',
    whatWeBuild: [
      'Multi-tenant database architectures & Row-Level Security',
      'Stripe billing, seat tiers, and usage metering',
      'Customer onboarding flows & automated provisioning',
      'Administrative analytics and tenant health consoles',
      'Public APIs with documentation and rate limiting'
    ],
    whoItIsFor: 'Software founders and B2B companies building recurring-revenue platforms that must scale smoothly under increasing subscriber loads.',
    deliverables: [
      'Production MVP ready for customer onboarding',
      'Integrated Stripe subscription and invoice webhooks',
      'Granular tenant partitioning and RBAC matrices',
      'Full deployment configuration on AWS / Vercel'
    ],
    technologies: ['Next.js', 'PostgreSQL RLS', 'Stripe Billing', 'Docker', 'Redis'],
    relatedProject: {
      title: 'Comments Fusion Automation',
      slug: 'comments-fusion'
    }
  },
  {
    number: '05',
    title: 'UI/UX & Product Design',
    slug: 'ui-ux-product-design',
    icon: Palette,
    tagline: 'Intuitive user flows, dense data systems, and cohesive digital design systems.',
    summary: 'Great engineering starts with clear product thinking. We design user interfaces that reduce cognitive load, simplify complex multi-step workflows, and give your software a credible, premium aesthetic.',
    whatWeBuild: [
      'Product discovery & operational user flow mapping',
      'Interactive Figma prototypes & usability wireframes',
      'Comprehensive design systems & tokenized component libraries',
      'High-density dashboard layouts & data visualization',
      'Mobile-first responsive interaction patterns'
    ],
    whoItIsFor: 'Companies building complex software who need interfaces that their users and employees actually enjoy using daily.',
    deliverables: [
      'Complete Figma design file with organized component states',
      'Interactive clickable prototype for user testing',
      'Production-ready design tokens (colors, typography, spacing)',
      'Direct developer handoff specifications'
    ],
    technologies: ['Figma', 'Design Systems', 'Design Tokens', 'User Journey Mapping'],
    relatedProject: {
      title: 'Citi Books Platform',
      slug: 'citi-books-platform'
    }
  },
  {
    number: '06',
    title: 'Product Engineering & Scaling',
    slug: 'performance-scaling-cloud-devops',
    icon: Cpu,
    tagline: 'Code refactoring, database query tuning, cloud DevOps, and ongoing feature sprints.',
    summary: 'We rescue and stabilize fragile codebases, eliminate performance bottlenecks, and scale infrastructure. We act as your dedicated platform engineering team to keep your production software fast and secure.',
    whatWeBuild: [
      'Legacy monolith refactoring & TypeScript upgrades',
      'Database query optimization, indexing & caching layers',
      'Automated CI/CD pipelines & blue-green deployment',
      'Containerization (Docker / ECS) and cloud migration',
      'Dedicated SLA maintenance & evolutionary feature sprints'
    ],
    whoItIsFor: 'Businesses with existing software facing technical debt, slow database performance, or teams needing senior engineering capacity.',
    deliverables: [
      'Comprehensive 48-hour architecture and security audit',
      'Benchmarked p99 latency reduction (sub-200ms target)',
      'Automated testing harness (Vitest / Playwright)',
      'Guaranteed SLA response times and uptime monitoring'
    ],
    technologies: ['Docker', 'AWS / GCP', 'Redis Caching', 'PostgreSQL', 'GitHub Actions', 'Sentry'],
    relatedProject: {
      title: 'SAP B1 Production Dashboard',
      slug: 'sap-b1-production-dashboard'
    }
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <main className="services-page" id="main-content">
      <SEOHead
        title="Software Development Services | Tekmora"
        description="Engineering expertise from idea to scale. Custom software, web applications, mobile apps, SaaS platforms, UI/UX design, and product engineering."
        canonical="https://tekmorasolution.com/services"
      />

      {/* 1. Hero */}
      <section className="services-hero">
        <div className="container services-hero-container">
          <div className="services-hero-content">
            <span className="services-kicker">SERVICES</span>
            <h1 className="services-hero-title">
              Engineering expertise <br />
              <span className="text-orange">from idea to scale.</span>
            </h1>
            <p className="services-hero-lead">
              We design, build, and maintain software products for startups and growing businesses. Whether you are launching a new product or modernizing an existing system, our senior team delivers clean, dependable engineering.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Services Detailed Breakdown */}
      <section className="services-core-section">
        <div className="container">
          <div className="services-list">
            {CORE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <article className="service-detail-card" key={svc.number} id={svc.slug}>
                  {/* Card Header */}
                  <div className="svc-card-header">
                    <div className="svc-num-wrap">
                      <span className="svc-number font-mono">{svc.number}</span>
                      <div className="svc-icon-box">
                        <Icon size={24} className="text-orange" />
                      </div>
                    </div>
                    <div className="svc-title-wrap">
                      <h2 className="svc-title">{svc.title}</h2>
                      <p className="svc-tagline">{svc.tagline}</p>
                    </div>
                  </div>

                  <p className="svc-summary">{svc.summary}</p>

                  {/* 3-Column Specifications Grid */}
                  <div className="svc-specs-grid">
                    {/* Col 1: What We Build */}
                    <div className="svc-spec-col">
                      <h3 className="svc-spec-heading font-mono">What We Build</h3>
                      <ul className="svc-check-list">
                        {svc.whatWeBuild.map(item => (
                          <li key={item}>
                            <CheckCircle2 size={14} className="check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 2: Deliverables & Audience */}
                    <div className="svc-spec-col">
                      <h3 className="svc-spec-heading font-mono">Typical Deliverables</h3>
                      <ul className="svc-check-list">
                        {svc.deliverables.map(item => (
                          <li key={item}>
                            <CheckCircle2 size={14} className="check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="svc-who-box">
                        <strong className="font-mono">Who It's For:</strong>
                        <p>{svc.whoItIsFor}</p>
                      </div>
                    </div>

                    {/* Col 3: Tech & Case Study */}
                    <div className="svc-spec-col svc-spec-col--action">
                      <h3 className="svc-spec-heading font-mono">Technologies</h3>
                      <div className="svc-tech-tags">
                        {svc.technologies.map(tech => (
                          <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                      </div>

                      <div className="svc-related-box">
                        <span className="svc-related-label font-mono">Related Project:</span>
                        <Link
                          to={`/work/${svc.relatedProject.slug}`}
                          className="svc-related-link"
                          onClick={() => trackEvent('service_related_project', 'portfolio', svc.relatedProject.slug)}
                        >
                          <span>{svc.relatedProject.title}</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>

                      <Link
                        to={`/services/${svc.slug}`}
                        className="svc-explore-btn font-mono"
                      >
                        <span>Deep Dive: {svc.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Development Process */}
      <section className="services-process-section">
        <div className="container">
          <div className="process-header">
            <span className="services-kicker">HOW WE WORK</span>
            <h2 className="process-title">
              From problem definition to <br />
              <span className="text-orange">production deployment.</span>
            </h2>
            <p className="process-lead">
              A transparent, iterative engineering methodology designed to eliminate surprises and maintain continuous momentum.
            </p>
          </div>

          <div className="process-timeline-grid">
            <div className="process-step-card">
              <span className="step-num font-mono">01</span>
              <h3>Discovery & Architecture</h3>
              <p>We analyze user workflows, define technical requirements, and architect the database schema before writing code.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num font-mono">02</span>
              <h3>Iterative Sprints</h3>
              <p>Senior engineers build in 2-week milestones with testable staging environments and weekly progress demos.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num font-mono">03</span>
              <h3>Quality & Security QA</h3>
              <p>End-to-end integration tests, concurrency benchmarking, and strict security validation against vulnerabilities.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num font-mono">04</span>
              <h3>Deployment & Evolution</h3>
              <p>Zero-downtime production cutover, complete IP transfer, and optional continuous SLA maintenance support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <section className="services-bottom-cta">
        <div className="container services-cta-container">
          <div className="services-cta-text">
            <span className="services-kicker">PROJECT CONSULTATION</span>
            <h2 className="services-cta-heading">Not sure what your product needs?</h2>
            <p className="services-cta-sub">
              Book a direct conversation with a senior engineer. We’ll review your technical constraints and outline the most practical architecture.
            </p>
          </div>
          <div className="services-cta-action">
            <Link
              to="/contact"
              className="btn btn-orange font-mono"
              onClick={() => trackEvent('services_cta_click', 'conversion', 'talk_to_engineer')}
            >
              <span>Talk to an Engineer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
