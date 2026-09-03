import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Server, Smartphone, Layers, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
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

  const capabilities: CapabilityCard[] = useMemo(() => [
    {
      number: '01',
      category: t('services.c1_cat'),
      title: t('services.c1_title'),
      slug: 'web-application-development',
      icon: <Code2 size={24} className="text-orange" />,
      desc: t('services.c1_desc'),
      tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind']
    },
    {
      number: '02',
      category: t('services.c2_cat'),
      title: t('services.c2_title'),
      slug: 'mobile-app-development',
      icon: <Smartphone size={24} className="text-orange" />,
      desc: t('services.c2_desc'),
      tags: ['React Native', 'Expo Bare', 'SQLite', 'Offline Engine']
    },
    {
      number: '03',
      category: t('services.c3_cat'),
      title: t('services.c3_title'),
      slug: 'sap-business-one-integration',
      icon: <Server size={24} className="text-orange" />,
      desc: t('services.c3_desc'),
      tags: ['Service Layer API', 'DI API', 'OData v4', 'T-SQL']
    },
    {
      number: '04',
      category: t('services.c4_cat'),
      title: t('services.c4_title'),
      slug: 'warehouse-management-systems',
      icon: <Layers size={24} className="text-orange" />,
      desc: t('services.c4_desc'),
      tags: ['Zebra Scanners', 'Bin Allocation', 'ESC/POS', 'GRN Sync']
    },
    {
      number: '05',
      category: t('services.c5_cat'),
      title: t('services.c5_title'),
      slug: 'enterprise-software-development',
      icon: <Cpu size={24} className="text-orange" />,
      desc: t('services.c5_desc'),
      tags: ['Node.js 22', 'Express', 'WebSockets', 'Redis Streams']
    },
    {
      number: '06',
      category: t('services.c6_cat'),
      title: t('services.c6_title'),
      slug: 'wordpress-development',
      icon: <ShieldCheck size={24} className="text-orange" />,
      desc: t('services.c6_desc'),
      tags: ['Headless APIs', 'OWASP Hardening', 'Core Web Vitals']
    }
  ], [t]);

  return (
    <section className="section services-section section-border-bottom" id="services">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">04</span>
          <span>// {t('services.section_meta')}</span>
          <span className="meta-sep font-mono">{t('services.section_submeta')}</span>
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
              {t('services.title_1')}<br />
              <span className="italic-accent">{t('services.title_2')}</span>
            </h2>
            <p className="services-subtitle">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="services-header-action font-mono">
            <Link to="/services" className="btn btn-outline-orange">
              <span>{t('services.cta')}</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Embedded Architecture Diagram */}
        <div style={{ marginBottom: '4rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-orange)', letterSpacing: '0.1em' }}>ENTERPRISE TOPOLOGY // SYSTEM ARCHITECTURE</span>
          </div>
          <ArchitectureDiagram />
        </div>

        {/* 6 Capabilities Cards Grid (3x2, Zero Image Dependency) */}
        <motion.div 
          className="capabilities-grid-3x2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {capabilities.map((cap) => (
            <MotionLink
              to={`/services/${cap.slug}`}
              key={cap.slug}
              className="capability-card-modern spotlight-card"
              variants={fadeInUp}
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
      </div>
    </section>
  );
};
