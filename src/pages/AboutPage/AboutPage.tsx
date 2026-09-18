import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code2, Eye, Handshake, ShieldCheck, Target, Users } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import './AboutPage.css';

const values = [
  { icon: Target, title: 'Purpose Over Features', text: 'Every technical decision starts with the operational outcome it needs to create.' },
  { icon: ShieldCheck, title: 'Own the Quality', text: 'We take responsibility for the details—from data integrity to the final user experience.' },
  { icon: Handshake, title: 'Work in the Open', text: 'Clear communication, visible progress, and honest technical guidance throughout delivery.' },
  { icon: Users, title: 'Build for People', text: 'Software succeeds when it genuinely makes everyday work clearer and easier.' },
];

export const AboutPage: React.FC = () => <main className="about-page" id="main-content">
  <SEOHead title="About Tekmora | People Who Build What's Next" description="Tekmora is a software engineering team building dependable web, mobile, AI, and enterprise products around real operations." canonical="https://tekmorasolution.com/about" />

  <section className="ap-hero"><div className="ap-glow" /><div className="container ap-hero-grid">
    <div className="ap-hero-copy"><p className="ap-kicker">About Tekmora</p><h1>People Who Build<br /><span>What's Next.</span></h1><p>We're a focused team of developers, designers, and problem solvers turning ambitious ideas into reliable digital products. We combine deep engineering with a product mindset to help businesses move faster and grow with confidence.</p><div className="ap-actions"><Link className="ap-btn ap-btn-primary" to="/contact">Work With Us <ArrowRight size={15} /></Link><Link className="ap-btn ap-btn-ghost" to="/work">See Our Work</Link></div></div>
    <div className="ap-hero-image"><img src="/images/enterprise-office.jpg" alt="Tekmora team collaborating" /><div className="ap-image-copy">Build<br />Innovate<br />Scale<br /><span>Together.</span></div><i>✦</i></div>
  </div></section>

  <section className="ap-proof"><div className="container ap-proof-grid">{[['50+', 'Projects Delivered'], ['30+', 'Happy Clients'], ['5+', 'Industries Served'], ['98%', 'Client Satisfaction']].map(([value, label]) => <div key={label}><strong>{value}</strong><small>{label}</small></div>)}<p>From ambitious startups to established operations, we help teams turn difficult problems into products that make an impact.</p></div></section>

  <section className="ap-story"><div className="container">
    <div className="ap-section-head"><div><p className="ap-kicker">Why We Exist</p><h2>Driven by Impact.<br /><span>Guided by Purpose.</span></h2></div><p>Technology should create real opportunities, reduce friction, and give people better ways to work. That belief shapes how we plan, build, and support every product.</p></div>
    <div className="ap-purpose-grid"><article><Target /><small>Our Mission</small><h3>Turn complex operations into clear digital systems.</h3><p>We build dependable products that solve meaningful problems and create room for businesses to grow.</p></article><article><Eye /><small>Our Vision</small><h3>Become the trusted engineering partner behind ambitious products.</h3><p>Long-term relationships, honest technical direction, and software designed to keep delivering value.</p></article><div className="ap-purpose-image"><img src="/images/code-screen.jpg" alt="Software engineering in progress" /><span><Code2 />Product thinking.<br />Engineering discipline.</span></div></div>
  </div></section>

  <section className="ap-values"><div className="container"><div className="ap-section-head"><div><p className="ap-kicker">How We Work</p><h2>Values That Show Up<br />in the <span>Work.</span></h2></div><p>Not a poster on the wall—these are the standards we use to make decisions and work with clients.</p></div><div className="ap-values-grid">{values.map(({ icon: Icon, title, text }, index) => <article key={title}><div><Icon /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="ap-team"><div className="container ap-team-grid"><div className="ap-team-image"><img src="/images/coding-workspace.jpg" alt="Tekmora engineering workspace" /><span>✦ <b>tekmora.</b></span></div><div className="ap-team-copy"><p className="ap-kicker">The Team</p><h2>Small Team.<br /><span>Serious Capability.</span></h2><p>We keep the team close to the work. Clients collaborate directly with the people designing and building their product—without layers of account management or lost context.</p><div className="ap-checks">{['Senior engineering involvement', 'Cross-functional product thinking', 'Direct, practical communication', 'Long-term technical ownership'].map(item => <span key={item}><i><Check /></i>{item}</span>)}</div><Link to="/contact">Meet Your Product Team <ArrowRight size={14} /></Link></div></div></section>
</main>;
