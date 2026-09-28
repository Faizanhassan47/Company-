import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, Globe, Smartphone, Cloud, Layout, Wrench } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import './ServicesSection.css';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  deliverables: string;
  slug: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Development',
    icon: <Code size={24} className="service-icon" />,
    summary: 'Tailor-made internal business platforms, workflow automation, and proprietary operational systems structured around your exact business logic.',
    deliverables: 'Internal tools, operational dashboards, database pipelines, and ERP integrations.',
    slug: 'custom-software-development'
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'Web Application Development',
    icon: <Globe size={24} className="service-icon" />,
    summary: 'Modern, high-concurrency web platforms engineered for speed, responsiveness, and long-term architectural maintainability.',
    deliverables: 'Customer portals, multi-tenant web consoles, analytics dashboards, and edge APIs.',
    slug: 'web-application-development'
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile App Development',
    icon: <Smartphone size={24} className="service-icon" />,
    summary: 'Cross-platform iOS and Android applications with offline-first synchronization and native device hardware integration.',
    deliverables: 'Technician field apps, consumer mobile products, SQLite persistence, and BLE sync.',
    slug: 'mobile-app-development'
  },
  {
    id: 'saas-development',
    number: '04',
    title: 'SaaS Product Development',
    icon: <Cloud size={24} className="service-icon" />,
    summary: 'End-to-end SaaS architecture—from MVP prototype to multi-tenant, production-hardened subscription platforms.',
    deliverables: 'Row-level security, automated Stripe billing, RBAC authorization, and user onboarding.',
    slug: 'saas-engineering-modernization'
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX & Product Design',
    icon: <Layout size={24} className="service-icon" />,
    summary: 'Ergonomic user interfaces designed around real user workflows, frictionless adoption, and concrete product conversion goals.',
    deliverables: 'Design systems, interactive Figma prototypes, usability audits, and component specs.',
    slug: 'custom-software-development'
  },
  {
    id: 'product-engineering',
    number: '06',
    title: 'Product Engineering & Scaling',
    icon: <Wrench size={24} className="service-icon" />,
    summary: 'Dedicated senior engineering support to continuously improve, maintain, index databases, and scale live digital products.',
    deliverables: 'CI/CD automation, cloud cost optimization, performance tuning, and SLA uptime maintenance.',
    slug: 'enterprise-software-development'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="section services-clean-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>SERVICES</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="services-title">
              Software engineering services tailored to <span className="text-orange">your product goals.</span>
            </h2>
            <p className="services-lead-text">
              We design, build, and maintain dependable software that solves operational bottlenecks and accelerates digital product roadmaps.
            </p>
          </motion.div>
        </div>

        {/* 2x3 Editorial Grid */}
        <div className="services-clean-grid">
          {SERVICES_DATA.map((svc) => (
            <motion.div
              key={svc.id}
              className="service-clean-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="service-card-top font-mono">
                <div className="service-icon-box">{svc.icon}</div>
                <span className="service-num text-orange">{svc.number}</span>
              </div>

              <h3 className="service-card-title">
                <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
              </h3>

              <p className="service-summary">
                {svc.summary}
              </p>

              <div className="service-deliv-line font-mono">
                <span className="deliv-tag">DELIVERABLES:</span>
                <span className="deliv-text">{svc.deliverables}</span>
              </div>

              <div className="service-card-footer font-mono">
                <Link to={`/services/${svc.slug}`} className="service-link">
                  <span>Learn more</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
