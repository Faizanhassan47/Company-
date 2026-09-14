import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

export const HeroSection: React.FC = () => (
  <section className="hero-section" id="hero">
    <div className="hero-atmosphere" aria-hidden="true" />
    <div className="container hero-container">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <p className="hero-kicker">Ideas • Products • Real Impact.</p>
        <h1>We Build<br />Digital Products<br />That <span>Move<br />Business.</span></h1>
        <p className="hero-lead">From MVPs to enterprise systems, we design and develop web and mobile solutions that help startups and businesses launch faster, operate smarter, and scale confidently.</p>
        <div className="hero-actions">
          <Link to="/contact" className="hero-primary">Start a Project <ArrowRight size={16} /></Link>
          <Link to="/work" className="hero-secondary">See Our Work</Link>
        </div>
        <div className="hero-stats">
          <div><strong>50+</strong><small>Projects Delivered</small></div>
          <div><strong>30+</strong><small>Happy Clients</small></div>
          <div><strong>98%</strong><small>Client Satisfaction</small></div>
        </div>
      </motion.div>

      <motion.div className="hero-devices" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} aria-label="Tekmora product dashboard preview">
        <div className="hero-laptop">
          <div className="hero-screen">
            <header><b>✦ tekmora.</b><span>•••</span></header>
            <div className="hero-dashboard"><aside><i /><i /><i /><i /></aside><div className="hero-dashboard-main"><p>Good morning 👋</p><small>Product Overview</small><div className="hero-dashboard-stats"><span><b>12,480</b><small>Total Users</small></span><span><b>$24.8K</b><small>Revenue</small></span><span><b>4.6%</b><small>Conversion</small></span></div><div className="hero-chart"><svg viewBox="0 0 420 110"><polyline points="0,92 55,76 105,84 155,57 205,69 255,43 305,51 350,24 390,32 420,10" /></svg></div></div></div>
          </div>
          <div className="hero-laptop-base" />
        </div>
        <div className="hero-phone"><div className="hero-notch" /><b>✦ tekmora.</b><h3>Ideas<br />Into<br /><span>Impact.</span></h3><i>→</i></div>
        <div className="hero-note">Build<br />Scale<br />Grow ↗</div>
      </motion.div>
    </div>
  </section>
);
