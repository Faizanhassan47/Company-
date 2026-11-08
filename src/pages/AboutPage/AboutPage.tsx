import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Reveal } from '../../components/studio/StudioMotion';
import './AboutPage.css';

const THINKING = [
  {
    title: 'Understand the work',
    description: 'A feature only makes sense when we understand the people and processes it supports.'
  },
  {
    title: 'Make decisions deliberately',
    description: 'The most complicated architecture isn’t always the right one. The solution should fit the requirements and available resources.'
  },
  {
    title: 'Be clear about trade-offs',
    description: 'Scope, budget, performance, and development time all affect decisions. Those considerations should be discussed openly.'
  },
  {
    title: 'Build for change',
    description: 'Requirements evolve. Software should be structured with future maintenance and development in mind.'
  }
];

export const AboutPage: React.FC = () => {
  return (
    <main className="about-page" id="main-content">
      <SEOHead
        title="About Tekmora Solutions — Software Development Company"
        description="Tekmora Solutions provides custom software development for businesses building new digital products or improving existing systems."
        canonical="https://www.tekmorasolution.com/about"
      />

      <section className="about-hero">
        <div className="container about-hero-copy">
          <Reveal>
            <p className="studio-kicker">About Tekmora Solutions</p>
            <h1>A software company focused on the work behind the product.</h1>
            <p className="studio-lead">
              Tekmora Solutions provides custom software development services for businesses building new digital products or improving existing systems.
            </p>
            <p className="studio-lead">
              Our work covers web and mobile applications, SaaS platforms, product design, and software engineering. Each project starts with understanding what needs to be built, who will use it, and the practical constraints involved.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid about-story-grid--text">
          <div>
            <h2>What we do</h2>
            <p>
              Some projects start with an idea and a list of requirements. Others start with an existing application that needs new features, better workflows, or technical improvements.
            </p>
            <p>
              We approach each engagement by understanding the current problem before deciding how the software should be developed.
            </p>
          </div>
          <div>
            <h2>How we work</h2>
            <p>
              Development is handled through a focused team assembled around each project’s needs. Clients work with the people responsible for planning, design, and delivery — not a large anonymous process.
            </p>
            <p>
              Scope, priorities, and delivery expectations are agreed early so progress stays visible and decisions stay grounded in the work itself.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid about-story-grid--text">
          <div>
            <h2>Leadership and delivery</h2>
            <p>
              Tekmora Solutions is led by the people who scope, design, and ship the work. Prospects should be able to identify who is responsible for delivery, not just a company brand.
            </p>
            <p>
              Founder biography, professional background, and photos will be published here once the company-approved details and media are confirmed. Until then, project case studies remain the clearest evidence of the work.
            </p>
          </div>
          <div>
            <h2>What we can share today</h2>
            <p>
              Selected projects, service pages, and a direct contact path. If you want to discuss a product idea, an internal workflow, or an existing system, start with a short project note.
            </p>
            <p>
              Prefer email first? Write to <a href="mailto:info@tekmorasolution.com">info@tekmorasolution.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <h2>How we think about software</h2>
          <div className="principle-grid">
            {THINKING.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="band-cta">
            <div>
              <h2>Get to know our work</h2>
              <p>Browse selected projects to see how requirements turn into working software.</p>
            </div>
            <Link to="/work" className="studio-btn">Get to Know Our Work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
