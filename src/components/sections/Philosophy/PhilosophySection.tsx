import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';

gsap.registerPlugin(ScrollTrigger);
import './PhilosophySection.css';

interface PrincipleCard {
  number: string;
  title: string;
  desc: string;
  badge: string;
}

export const PhilosophySection: React.FC = () => {
  const { t } = useTranslation();

  const principles: PrincipleCard[] = useMemo(() => [
    {
      number: '01',
      badge: t('philosophy.p1_badge'),
      title: t('philosophy.p1_title'),
      desc: t('philosophy.p1_desc')
    },
    {
      number: '02',
      badge: t('philosophy.p2_badge'),
      title: t('philosophy.p2_title'),
      desc: t('philosophy.p2_desc')
    },
    {
      number: '03',
      badge: t('philosophy.p3_badge'),
      title: t('philosophy.p3_title'),
      desc: t('philosophy.p3_desc')
    },
    {
      number: '04',
      badge: t('philosophy.p4_badge'),
      title: t('philosophy.p4_title'),
      desc: t('philosophy.p4_desc')
    }
  ], [t]);

  useGSAP(() => {
    // Parallax Headline
    gsap.to('.philosophy-main-headline', {
      scrollTrigger: {
        trigger: '.philosophy-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
      y: -100,
      ease: 'none',
    });

    // Parallax Cards
    gsap.utils.toArray('.reality-card').forEach((card: any, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1 + (i * 0.2),
        },
        y: -150 - (i * 20),
        ease: 'none',
      });
    });
  }, []);

  return (
    <section className="section philosophy-section section-border-bottom" id="philosophy">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">02</span>
          <span>// {t('philosophy.section_meta')}</span>
        </div>

        <motion.div 
          className="philosophy-split-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left Column: Sticky Narrative Pitch */}
          <motion.div className="philosophy-sticky-col" variants={fadeInUp}>
            <h2 className="philosophy-main-headline font-display">
              {t('philosophy.title_1')}<br />
              {t('philosophy.title_2')}<br />
              <span className="italic-accent">{t('philosophy.title_3')}</span>
            </h2>

            <p className="philosophy-narrative">
              {t('philosophy.narrative')}
            </p>

            <div className="philosophy-action-wrap font-mono">
              <Link to="/about" className="btn btn-outline-orange font-mono">
                <span>{t('philosophy.cta')}</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Interactive Reality Cards */}
          <div className="philosophy-cards-col">
            <motion.div className="reality-cards-grid" variants={staggerContainer}>
              {principles.map((card) => (
                <motion.div 
                  key={card.number} 
                  className="reality-card spotlight-card"
                  variants={fadeInUp}
                  whileHover={hoverLift}
                >
                  <div className="reality-card-top font-mono">
                    <span className="text-orange font-bold">{card.number}</span>
                    <span className="reality-tag">{card.badge}</span>
                  </div>
                  <h3 className="reality-card-title font-display">{card.title}</h3>
                  <p className="reality-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
