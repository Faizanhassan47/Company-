import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MessagesSquare, RefreshCcw, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { ScenePhoto, STUDIO_PHOTOS } from '../../components/studio/ProductMockups';
import { Reveal } from '../../components/studio/StudioMotion';
import { TekmoraLogo } from '../../components/ui/TekmoraLogo';
import './AboutPage.css';

const PRINCIPLES = [
  {
    title: 'Build what matters',
    description: 'Focus on real problems.',
    icon: Compass
  },
  {
    title: 'Communicate directly',
    description: 'Clear, honest and practical.',
    icon: MessagesSquare
  },
  {
    title: 'Engineer for change',
    description: 'Flexible, maintainable and scalable.',
    icon: RefreshCcw
  },
  {
    title: 'Own the outcome',
    description: 'We take responsibility for the results.',
    icon: ShieldCheck
  }
];

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page" id="main-content">
      <SEOHead
        title="About Tekmora | Software Engineering Studio"
        description="Tekmora is a focused engineering studio that partners with businesses and founders to design, build and improve digital products."
        canonical="https://tekmorasolution.com/about"
      />

      <section className="about-hero">
        <div className="container about-hero-grid">
          <Reveal>
            <p className="studio-kicker">About Tekmora</p>
            <h1>A focused engineering studio building <span className="serif-accent">meaningful products.</span></h1>
          </Reveal>
          <ScenePhoto src={STUDIO_PHOTOS.office} alt="Studio workspace" className="about-photo">
            <div className="scene-mark">
              <TekmoraLogo height={22} />
            </div>
          </ScenePhoto>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div>
            <h2>Our story</h2>
            <p>
              Tekmora was founded with a simple goal — to build high-quality software that solves real problems.
            </p>
            <p>
              We work closely with founders and businesses, combining engineering discipline and a practical, outcome-focused approach to turn ideas into reliable, scalable products.
            </p>
          </div>
          <div className="about-stats">
            <div><strong>3+</strong><span>Years of experience</span></div>
            <div><strong>5+</strong><span>Industries served</span></div>
            <div><strong>100%</strong><span>Project delivery</span></div>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <h2>Our principles</h2>
          <div className="principle-grid">
            {PRINCIPLES.map(item => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={18} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="about-model">
            <ScenePhoto src={STUDIO_PHOTOS.engineers} alt="Team working in the studio" className="about-model-photo" />
            <div>
              <h2>Our working model</h2>
              <ul>
                <li>Direct collaboration with the team</li>
                <li>Product-focused thinking</li>
                <li>Iterative and transparent delivery</li>
                <li>Long-term partnership and support</li>
              </ul>
            </div>
          </div>
          <div className="band-cta">
            <div>
              <h2>Have something ambitious to build?</h2>
              <p>Tell us about the product and we’ll show how we can help.</p>
            </div>
            <Link to="/contact" className="studio-btn">Start a Conversation <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
