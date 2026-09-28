import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Terminal, ShieldCheck, HeartHandshake } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import './AboutPreviewSection.css';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="section about-clean-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="about-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>ABOUT TEKMORA</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="about-title">
              Small team.<br />
              <span className="text-orange">Direct communication.</span>
            </h2>
            <p className="about-lead-intro">
              Tekmora is a software engineering studio working directly with founders and businesses to design, build, and improve digital products.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Split: Studio Workspace on Left, Story & Commitments on Right */}
        <div className="about-human-grid">
          {/* Left Column: Authentic Studio Workspace Visual */}
          <div className="about-photo-col">
            <div className="team-photo-frame">
              <img
                src="/images/coding-workspace.jpg"
                alt="Tekmora software engineering studio workspace"
                className="team-photo-img"
                loading="lazy"
              />
              <div className="photo-caption-bar font-mono">
                <span className="caption-dot text-orange">●</span>
                <span>TEKMORA STUDIO // FOCUSED SENIOR SOFTWARE ENGINEERING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Story & Operating Principles */}
          <div className="about-narrative-col">
            <p className="about-p">
              We keep our team intentionally focused. You don't get handed off to junior contractors or account managers. When you work with Tekmora, you partner directly with experienced engineers who write clean code, manage cloud infrastructure, and take personal pride in every system we launch.
            </p>

            <div className="about-meta-strip font-mono">
              <div className="meta-strip-item">
                <MapPin size={16} className="text-orange" />
                <span>Working directly with founders and companies worldwide</span>
              </div>
              <div className="meta-strip-item">
                <Terminal size={16} className="text-orange" />
                <span>Full-Stack Engineering, Cloud Infrastructure & Systems</span>
              </div>
            </div>

            <div className="about-commitments-list">
              <div className="commitment-row">
                <ShieldCheck size={18} className="text-orange" />
                <div>
                  <h4 className="commit-title">Engineering Integrity</h4>
                  <p className="commit-desc">Strict TypeScript contracts, tested workflows, and maintainable systems built for the long haul.</p>
                </div>
              </div>

              <div className="commitment-row">
                <HeartHandshake size={18} className="text-orange" />
                <div>
                  <h4 className="commit-title">Direct Senior Partnership</h4>
                  <p className="commit-desc">Clear communication, weekly demos, and complete visibility into codebase and progress.</p>
                </div>
              </div>
            </div>

            <div className="about-action-row">
              <Link to="/about" className="btn-about-link font-mono">
                <span>Learn more about our team & story</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
