import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import { env } from '@/config/env';
import { Reveal } from '../../components/studio/StudioMotion';
import './ContactPage.css';

const NEEDS = [
  'Custom software',
  'Web application',
  'Mobile app',
  'SaaS product',
  'UI/UX & product design',
  'Not sure yet'
];

const PROJECT_TYPES = [
  'New product',
  'Existing product',
  'Internal platform',
  'MVP',
  'Ongoing partnership'
];

const TIMELINES = [
  'As soon as possible',
  '1 — 3 months',
  '3 — 6 months',
  'Flexible'
];

const BUDGETS = [
  'Under $15,000',
  '$15,000 — $35,000',
  '$35,000 — $75,000',
  '$75,000+',
  'Let’s discuss'
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: searchParams.get('type') || 'Web application',
    projectType: 'New product',
    timeline: '1 — 3 months',
    budget: searchParams.get('budget') || '$15,000 — $35,000',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const update = (key: keyof typeof formData, value: string) => {
    setFormData(current => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setErrorMessage('Please fill in your name, email, and a short description of the project.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not specified',
      projectType: formData.need,
      projectStage: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      details: formData.description,
      _subject: `New Project Inquiry: ${formData.need} from ${formData.name}`
    };

    try {
      let isSent = false;
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) isSent = true;
      } catch {
        // Fall through to Formspree.
      }

      if (!isSent && env.formspreeEndpointId) {
        const response = await fetch(`https://formspree.io/f/${env.formspreeEndpointId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) isSent = true;
      }

      setIsSubmitted(true);
      trackEvent('contact_form_submit', 'conversion', formData.need);
    } catch {
      setErrorMessage('Network error occurred while submitting. Please email us directly at info@tekmorasolution.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page" id="main-content">
      <SEOHead
        title="Start a Software Project | Tekmora"
        description="Tell us what you're building. Share a few details about your project and we'll get back to you within one business day."
        canonical="https://tekmorasolution.com/contact"
      />

      <section className="contact-layout">
        <div className="container contact-grid">
          <Reveal>
            <p className="studio-kicker">Contact</p>
            <h1>Tell us what <span className="serif-accent">you’re building.</span></h1>
            <p className="studio-lead">
              Share a few details about your project and we’ll get back to you with clear next steps.
            </p>

            <ul className="contact-facts">
              <li>
                <Mail size={16} />
                <a href="mailto:info@tekmorasolution.com">info@tekmorasolution.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>Barisal, Bangladesh (Remote-first)</span>
              </li>
              <li>Typically reply within 1 business day</li>
            </ul>
          </Reveal>

          <aside className="contact-aside">
            <div className="aside-card">
              <h2>Start a project</h2>
              {isSubmitted ? (
                <div className="contact-success" role="status">
                  <CheckCircle2 size={32} />
                  <p>We’ll reply to {formData.email} with an initial point of view.</p>
                  <button type="button" className="studio-btn-ghost" onClick={() => setIsSubmitted(false)}>Send another note</button>
                </div>
              ) : (
                <form id="project-inquiry" className="inquiry-form" onSubmit={handleSubmit} noValidate>
                  <label>
                    What do you need?
                    <select value={formData.need} onChange={e => update('need', e.target.value)}>
                      {NEEDS.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Project stage
                    <select value={formData.projectType} onChange={e => update('projectType', e.target.value)}>
                      {PROJECT_TYPES.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Timeline
                    <select value={formData.timeline} onChange={e => update('timeline', e.target.value)}>
                      {TIMELINES.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Estimated budget
                    <select value={formData.budget} onChange={e => update('budget', e.target.value)}>
                      {BUDGETS.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Tell us about your project
                    <textarea rows={4} value={formData.description} onChange={e => update('description', e.target.value)} placeholder="A brief description of your idea, goals or requirements." required />
                  </label>
                  <div className="form-two">
                    <label>
                      Your name
                      <input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={e => update('name', e.target.value)} placeholder="Your name" required />
                    </label>
                    <label>
                      Email
                      <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={e => update('email', e.target.value)} placeholder="you@company.com" required />
                    </label>
                  </div>
                  {errorMessage && (
                    <p className="form-error" role="alert"><AlertCircle size={16} /> {errorMessage}</p>
                  )}
                  <button type="submit" className="studio-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send Project'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
            <div className="aside-card aside-call">
              <Calendar size={18} />
              <h2>Prefer a quick call?</h2>
              <p>A short call is often the fastest way to shape scope and next steps.</p>
              <a className="studio-btn-ghost" href="mailto:info@tekmorasolution.com?subject=Project%20call">Book a Call <ArrowRight size={16} /></a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
