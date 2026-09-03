import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import './BusinessProblemsSection.css';

export const BusinessProblemsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const problems = useMemo(() => [
    {
      title: t('problems.p1_title'),
      context: t('problems.p1_ctx')
    },
    {
      title: t('problems.p2_title'),
      context: t('problems.p2_ctx')
    },
    {
      title: t('problems.p3_title'),
      context: t('problems.p3_ctx')
    },
    {
      title: t('problems.p4_title'),
      context: t('problems.p4_ctx')
    },
    {
      title: t('problems.p5_title'),
      context: t('problems.p5_ctx')
    },
    {
      title: t('problems.p6_title'),
      context: t('problems.p6_ctx')
    },
    {
      title: t('problems.p7_title'),
      context: t('problems.p7_ctx')
    }
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.2) {
        const totalProgress = Math.max(0, Math.min(1, (windowHeight * 0.5 - rect.top) / (rect.height * 0.8)));
        const idx = Math.min(Math.floor(totalProgress * problems.length), problems.length - 1);
        setActiveIndex(idx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [problems.length]);

  return (
    <section className="section business-problems-section section-border-bottom" ref={sectionRef} id="problems">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">06</span>
          <span>// {t('problems.section_meta')}</span>
        </div>

        <motion.div 
          className="problems-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="problems-headline font-display">
            {t('problems.title_1')}<br />
            <span className="italic-accent">{t('problems.title_2')}</span>
          </h2>
          <p className="problems-subtitle">
            {t('problems.subtitle')}
          </p>
        </motion.div>

        {/* Scroll-Activated Statement Sequence */}
        <div className="problems-sequence">
          {problems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={item.title}
                className={`problem-row ${isActive ? 'problem-row--active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="problem-index font-mono">
                  <span>0{idx + 1}</span>
                  <span className="index-indicator"></span>
                </div>

                <div className="problem-content">
                  <h3 className="problem-title font-display">{item.title}</h3>
                  <p className="problem-context">{item.context}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
