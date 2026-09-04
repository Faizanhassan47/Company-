import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Stethoscope, Truck, Building2, ShoppingCart, Activity } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './IndustriesSection.css';

const INDUSTRIES = [
  {
    name: 'Logistics & Supply Chain',
    icon: <Truck size={24} />,
    desc: 'WMS, inventory automation, and dispatch routing.',
    slug: 'logistics-supply-chain'
  },
  {
    name: 'Healthcare & Medical',
    icon: <Stethoscope size={24} />,
    desc: 'HIPAA-compliant patient portals and clinical workflows.',
    slug: 'healthcare'
  },
  {
    name: 'Manufacturing & Industrial',
    icon: <Factory size={24} />,
    desc: 'Production planning, IoT integrations, and ERP sync.',
    slug: 'manufacturing'
  },
  {
    name: 'Enterprise SaaS',
    icon: <Building2 size={24} />,
    desc: 'Multi-tenant platforms, billing engines, and SSO.',
    slug: 'enterprise-saas'
  },
  {
    name: 'E-commerce & Retail',
    icon: <ShoppingCart size={24} />,
    desc: 'Headless storefronts, Stripe integrations, and fulfillment.',
    slug: 'ecommerce-retail'
  },
  {
    name: 'Financial Services',
    icon: <Activity size={24} />,
    desc: 'Secure portals, real-time analytics, and role-based access.',
    slug: 'financial-services'
  }
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="section industries-section section-border-bottom">
      <div className="container">
        <div className="section-meta">
          <span className="section-number">05</span>
          <span>// VERTICAL DOMAINS</span>
        </div>

        <motion.div 
          className="industries-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="industries-headline font-display">
            DEEP DOMAIN EXPERTISE.
          </h2>
          <p className="industries-subtitle">
            We understand the regulatory requirements, specific operational workflows, and data structures of these core industries.
          </p>
        </motion.div>

        <motion.div 
          className="industries-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {INDUSTRIES.map((ind, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Link to={`/industries/${ind.slug}`} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-content">
                  <h3 className="industry-name font-display">{ind.name}</h3>
                  <p className="industry-desc">{ind.desc}</p>
                </div>
                <div className="industry-arrow">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
