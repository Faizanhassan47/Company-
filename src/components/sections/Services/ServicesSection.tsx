import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Server, Smartphone, Layers, ShieldCheck, Bot, Sparkles, Database, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, hoverLift } from '../../../utils/animations';
import { ArchitectureDiagram } from '../../ui/ArchitectureDiagram';
import './ServicesSection.css';

const MotionLink = motion.create(Link);

interface CapabilityCard {
  number: string;
  category: string;
  title: string;
  slug: string;
  icon: React.ReactNode;
  desc: string;
  tags: string[];
}

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'lead-ai' | 'industrial'>('lead-ai');

  const leadCapabilities: CapabilityCard[] = useMemo(() => [
    {
      number: '01',
      category: 'AI & AUTOMATION',
      title: 'AI Integration + Workflow Automation',
      slug: 'ai-integration-workflow-automation',
      icon: <Sparkles size={24} className="text-orange" />,
      desc: 'Custom LLM pipelines, autonomous multi-step workflow automations, LangGraph & n8n connectors with zero hallucination risk.',
      tags: ['LangGraph', 'LlamaIndex', 'OpenAI/Claude', 'BullMQ', 'Zod']
    },
    {
      number: '02',
      category: 'SAAS & CLOUD',
      title: 'SaaS Engineering & Modernization',
      slug: 'saas-engineering-modernization',
      icon: <Code2 size={24} className="text-orange" />,
      desc: 'Ground-up multi-tenant SaaS architecture, legacy code refactoring, Stripe billing engines, and high-concurrency systems.',
      tags: ['Next.js 15', 'PostgreSQL RLS', 'Stripe Billing', 'Docker']
    },
    {
      number: '03',
      category: 'AUTONOMOUS AGENTS',
      title: 'AI Agents / Process Automation',
      slug: 'ai-agents-process-automation',
      icon: <Bot size={24} className="text-orange" />,
      desc: 'Autonomous multi-agent swarms, tool-use execution, ERP/CRM action loops, deterministic error fallbacks, and task orchestration.',
      tags: ['Multi-Agent Swarms', 'Tool Calling', 'CrewAI', 'Human-in-Loop']
    },
    {
      number: '04',
      category: 'ENTERPRISE AI',
      title: 'RAG / Private Company Data AI',
      slug: 'rag-enterprise-data-ai',
      icon: <Database size={24} className="text-orange" />,
      desc: 'Hybrid vector search over proprietary enterprise docs (pgvector/Pinecone), strict data isolation, and hallucination guardrails.',
      tags: ['pgvector', 'Cohere ReRank', 'ACL Permissions', 'Air-Gapped']
    },
    {
      number: '05',
      category: 'SECURITY & AUTH',
      title: 'Security / Auth & Multi-Tenant Systems',
      slug: 'security-auth-multitenant',
      icon: <ShieldCheck size={24} className="text-orange" />,
      desc: 'Enterprise RBAC/ABAC authorization matrices, SSO (SAML/Okta), row-level tenant security, and immutable audit logs.',
      tags: ['SAML 2.0 / Okta', 'Row-Level Security', 'Opa/Rego', 'SOC2 Ready']
    },
    {
      number: '06',
      category: 'PRODUCTION HARDENING',
      title: 'Production Hardening / Code Rescue',
      slug: 'production-hardening-code-rescue',
      icon: <ShieldAlert size={24} className="text-orange" />,
      desc: 'Rescuing brittle AI-generated codebases, eliminating memory leaks, typing strict TypeScript contracts, and fixing CVE risks.',
      tags: ['TypeScript 5.x', 'Playwright QA', 'Leak Profiling', 'Snyk Audit']
    }
  ], []);

  const industrialCapabilities: CapabilityCard[] = useMemo(() => [
    {
      number: '07',
      category: t('services.c1_cat'),
      title: t('services.c1_title'),
      slug: 'web-application-development',
      icon: <Code2 size={24} className="text-orange" />,
      desc: t('services.c1_desc'),
      tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind']
    },
    {
      number: '08',
      category: t('services.c2_cat'),
      title: t('services.c2_title'),
      slug: 'mobile-app-development',
      icon: <Smartphone size={24} className="text-orange" />,
      desc: t('services.c2_desc'),
      tags: ['React Native', 'Expo Bare', 'SQLite', 'Offline Engine']
    },
    {
      number: '09',
      category: t('services.c3_cat'),
      title: t('services.c3_title'),
      slug: 'sap-business-one-integration',
      icon: <Server size={24} className="text-orange" />,
      desc: t('services.c3_desc'),
      tags: ['Service Layer API', 'DI API', 'OData v4', 'T-SQL']
    },
    {
      number: '10',
      category: t('services.c4_cat'),
      title: t('services.c4_title'),
      slug: 'warehouse-management-systems',
      icon: <Layers size={24} className="text-orange" />,
      desc: t('services.c4_desc'),
      tags: ['Zebra Scanners', 'Bin Allocation', 'ESC/POS', 'GRN Sync']
    },
    {
      number: '11',
      category: t('services.c5_cat'),
      title: t('services.c5_title'),
      slug: 'enterprise-software-development',
      icon: <Cpu size={24} className="text-orange" />,
      desc: t('services.c5_desc'),
      tags: ['Node.js 22', 'Express', 'WebSockets', 'Redis Streams']
    },
    {
      number: '12',
      category: t('services.c6_cat'),
      title: t('services.c6_title'),
      slug: 'wordpress-development',
      icon: <ShieldCheck size={24} className="text-orange" />,
      desc: t('services.c6_desc'),
      tags: ['Headless APIs', 'OWASP Hardening', 'Core Web Vitals']
    }
  ], [t]);

  const currentCapabilities = activeTab === 'lead-ai' ? leadCapabilities : industrialCapabilities;

  return (
    <section className="section services-section section-border-bottom" id="services">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number font-mono">04</span>
          <span>// {t('services.section_meta')}</span>
          <span className="meta-sep font-mono">15 STRATEGIC CAPABILITIES // PRODUCTION ARCHITECTURE</span>
        </div>

        {/* Section Header Split */}
        <motion.div 
          className="services-header-split"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="services-main-headline font-display">
              CORE DISCIPLINES.<br />
              <span className="italic-accent">WHAT WE ENGINEER.</span>
            </h2>
            <p className="services-subtitle">
              From autonomous AI workflows and multi-tenant SaaS modernization to industrial ERP integration, we engineer the mission-critical software that powers operations.
            </p>
          </div>

          <div className="services-header-action font-mono">
            <Link to="/services" className="btn btn-outline-orange">
              <span>EXPLORE ALL 15 DISCIPLINES</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Embedded Architecture Diagram */}
        <div style={{ marginBottom: '3.5rem', marginTop: '1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-orange)', letterSpacing: '0.1em' }}>ENTERPRISE TOPOLOGY // SYSTEM ARCHITECTURE</span>
          </div>
          <ArchitectureDiagram />
        </div>

        {/* View Switcher Tabs */}
        <div className="services-tab-switcher font-mono">
          <button
            onClick={() => setActiveTab('lead-ai')}
            className={`tab-switch-btn ${activeTab === 'lead-ai' ? 'active' : ''}`}
          >
            <Sparkles size={14} />
            <span>LEAD DISCIPLINES (AI & SAAS)</span>
            <span className="tab-pill">TIER 1</span>
          </button>
          <button
            onClick={() => setActiveTab('industrial')}
            className={`tab-switch-btn ${activeTab === 'industrial' ? 'active' : ''}`}
          >
            <Server size={14} />
            <span>OPERATIONS & INDUSTRIAL SYSTEMS</span>
          </button>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="capabilities-grid-3x2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {currentCapabilities.map((cap) => (
              <MotionLink
                to={`/services/${cap.slug}`}
                key={cap.slug}
                className="capability-card-modern spotlight-card"
                whileHover={hoverLift}
              >
                {/* Top Row: Icon + Arrow */}
                <div className="cap-card-top">
                  <div className="cap-icon-box">{cap.icon}</div>
                  <div className="cap-arrow-btn">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Category Tag */}
                <div className="cap-cat-badge font-mono">{cap.category}</div>

                {/* Title & Description */}
                <h3 className="cap-card-title font-display">{cap.title}</h3>
                <p className="cap-card-desc">{cap.desc}</p>

                {/* Technical Stack Pills */}
                <div className="cap-tags-row font-mono">
                  {cap.tags.map(tag => (
                    <span key={tag} className="cap-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Explore Footer Trigger */}
                <div className="cap-card-footer font-mono">
                  <span>{t('services.explore')}</span>
                  <ArrowUpRight size={12} className="footer-arrow" />
                </div>
              </MotionLink>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Matrix Callout Banner */}
        <div className="services-matrix-cta-banner font-mono">
          <div className="cta-banner-left">
            <div className="banner-kicker">
              <span className="live-status-dot" />
              <span>MARKET ATTRACTIVENESS RANKINGS</span>
            </div>
            <h4 className="banner-title font-display">
              STRATEGIC SERVICE PORTFOLIO MATRIX
            </h4>
            <p className="banner-sub">
              See our 15 engineering disciplines ranked by enterprise market demand, operational ROI, and strategic recommendations.
            </p>
          </div>
          <div className="cta-banner-right">
            <Link to="/services#market-matrix" className="btn btn-orange font-mono">
              <span>EXPLORE COMPLETE 15-SERVICE MATRIX</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
