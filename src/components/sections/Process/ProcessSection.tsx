import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
import './ProcessSection.css';

interface ProcessStep {
  num: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
}

export const ProcessSection: React.FC = () => {
  const { t } = useTranslation();

  const processSteps: ProcessStep[] = useMemo(() => [
    {
      num: '01',
      badge: t('process.s1_badge'),
      title: t('process.s1_title'),
      description: t('process.s1_desc'),
      points: [t('process.s1_p1'), t('process.s1_p2'), t('process.s1_p3')]
    },
    {
      num: '02',
      badge: t('process.s2_badge'),
      title: t('process.s2_title'),
      description: t('process.s2_desc'),
      points: [t('process.s2_p1'), t('process.s2_p2'), t('process.s2_p3')]
    },
    {
      num: '03',
      badge: t('process.s3_badge'),
      title: t('process.s3_title'),
      description: t('process.s3_desc'),
      points: [t('process.s3_p1'), t('process.s3_p2'), t('process.s3_p3')]
    },
    {
      num: '04',
      badge: t('process.s4_badge'),
      title: t('process.s4_title'),
      description: t('process.s4_desc'),
      points: [t('process.s4_p1'), t('process.s4_p2'), t('process.s4_p3')]
    }
  ], [t]);

  return (
    <section className="section process-section section-border-bottom" id="process">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">05</span>
          <span>// {t('process.section_meta')}</span>
        </div>

        {/* Section Header */}
        <motion.div 
          className="process-header-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="process-main-headline font-display">
            {t('process.title_1')}<br />
            <span className="italic-accent">{t('process.title_2')}</span>
          </h2>
          <p className="process-subtitle">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* 4 Cards Grid with Giant Background Numbers (Buraq AI Style) */}
        <motion.div 
          className="process-cards-grid-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {processSteps.map((step) => (
            <motion.div 
              key={step.num} 
              className="process-delivery-card spotlight-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              {/* Giant Stylized Background Watermark Numeral */}
              <div className="process-card-num-watermark font-display" aria-hidden="true">
                {step.num}
              </div>

              <div className="process-card-inner">
                {/* Step Badge Pill */}
                <div className="process-pill-row font-mono">
                  <span className="process-num-pill text-orange">{step.num}</span>
                  <span className="process-badge-name">{step.badge}</span>
                </div>

                {/* Title & Description */}
                <h3 className="process-card-title font-display">{step.title}</h3>
                <p className="process-card-desc">{step.description}</p>

                {/* Bullets */}
                <ul className="process-card-bullets font-mono">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={12} className="text-orange" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Accent Bottom Line */}
                <div className="process-card-accent-line" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
