import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import { env } from '@/config/env';
import { Reveal } from '../../components/studio/StudioMotion';
import './ContactPage.css';

const NEEDS = [
  'Custom software or web application',
  'Mobile application',
  'SaaS product',
  'UI/UX design',
  'Existing system or integration',
  'Not sure yet'
];

const STAGES = [
  'Exploring an idea',
  'Planning requirements',
  'Already have a product'
];

const BUDGETS = [
  'Not sure yet',
  'Under $15,000',
  '$15,000 — $35,000',
  '$35,000 — $75,000',
  '$75,000+'
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const budgetParam = searchParams.get('budget');
  const typeParam = searchParams.get('type');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: typeParam && NEEDS.includes(typeParam) ? typeParam : '',
    projectStage: '',
    budget: budgetParam && BUDGETS.includes(budgetParam) ? budgetParam : '',
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
      projectType: formData.need || 'Not sure yet',
      projectStage: formData.projectStage || 'Not specified',
      budget: formData.budget || 'Not sure yet',
      details: formData.description,
      _subject: `New Project Inquiry: ${formData.need || 'General'} from ${formData.name}`
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
      trackEvent('contact_form_submit', 'conversion', formData.need || 'general');
    } catch {
      setErrorMessage('Network error occurred while submitting. Please email us directly at info@tekmorasolution.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page" id="main-content">
      <SEOHead
        title="Contact Tekmora Solutions — Discuss Your Project"
        description="Tell Tekmora Solutions what you’re planning. Share a short project description and we’ll review the requirements and discuss possible next steps."
        canonical="https://www.tekmorasolution.com/contact"
      />

      <section className="contact-layout">
        <div className="container contact-grid">
          <Reveal>
            <p className="studio-kicker">Contact</p>
            <h1>Let’s talk about your project.</h1>
            <p className="studio-lead">
              Tell us what you’re planning, what you’re trying to solve, or what needs improvement in your existing software. You don’t need a complete technical specification to start the conversation.
            </p>

            <div className="contact-next">
              <h2>What happens after you inquire</h2>
              <ol>
                <li>We review your note and any links or documents you share.</li>
                <li>We reply with clarifying questions or an initial point of view on scope.</li>
                <li>If it looks like a fit, we schedule a short discussion to align on next steps.</li>
              </ol>
              <p>A short call is available if that is easier than writing everything up front.</p>
            </div>

            <ul className="contact-facts">
              <li>
                <Mail size={16} />
                <a
                  href="mailto:info@tekmorasolution.com"
                  onClick={() => trackEvent('contact_email_click', 'conversion', 'mailto')}
                >
                  info@tekmorasolution.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tekmora-solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('contact_linkedin_click', 'engagement', 'linkedin')}
                >
                  Company LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>

          <aside className="contact-aside">
            <div className="aside-card">
              <h2>Share your project details</h2>
              <p className="form-helper">A short description is enough to get started. Include any useful links, documents, or deadlines you already have.</p>
              {isSubmitted ? (
                <div className="contact-success" role="status">
                  <CheckCircle2 size={32} />
                  <p>We’ll reply to {formData.email} after reviewing your note.</p>
                  <button type="button" className="studio-btn-ghost" onClick={() => setIsSubmitted(false)}>Send another note</button>
                </div>
              ) : (
                <form id="project-inquiry" className="inquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-two">
                    <label>
                      Full name
                      <input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={e => update('name', e.target.value)} placeholder="Your name" required />
                    </label>
                    <label>
                      Work email
                      <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={e => update('email', e.target.value)} placeholder="you@company.com" required />
                    </label>
                  </div>
                  <label>
                    Company or organization (optional)
                    <input name="company" autoComplete="organization" value={formData.company} onChange={e => update('company', e.target.value)} placeholder="Company name" />
                  </label>
                  <label>
                    What do you need?
                    <select value={formData.need} onChange={e => update('need', e.target.value)}>
                      <option value="">Select an option</option>
                      {NEEDS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    What stage is the project at?
                    <select value={formData.projectStage} onChange={e => update('projectStage', e.target.value)}>
                      <option value="">Select an option</option>
                      {STAGES.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Estimated budget (optional)
                    <select value={formData.budget} onChange={e => update('budget', e.target.value)}>
                      <option value="">Select an option</option>
                      {BUDGETS.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    Tell us about your project
                    <textarea rows={4} value={formData.description} onChange={e => update('description', e.target.value)} placeholder="What you’re trying to build or improve, who will use it, and any constraints you already know." required />
                  </label>
                  {errorMessage && (
                    <p className="form-error" role="alert"><AlertCircle size={16} /> {errorMessage}</p>
                  )}
                  <button type="submit" className="studio-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Discuss Your Project'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
            <div className="aside-card aside-call">
              <Calendar size={18} />
              <h2>Prefer a call?</h2>
              <p>Request a short call and we’ll arrange a time to discuss requirements and next steps.</p>
              <a
                className="studio-btn-ghost"
                href="mailto:info@tekmorasolution.com?subject=Project%20call%20request"
                onClick={() => trackEvent('contact_call_request', 'conversion', 'request_call')}
              >
                Request a Call <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
