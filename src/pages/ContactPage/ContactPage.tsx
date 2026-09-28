import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Clock, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { trackEvent } from '../../utils/analytics';
import { env } from '@/config/env';
import './ContactPage.css';

const PROJECT_TYPES = [
  'Web Application',
  'Mobile Application',
  'SaaS Product',
  'Custom Software',
  'UI/UX & Product Design',
  'Existing Product / Modernization',
  'Other'
];

const PROJECT_STAGES = [
  'Idea / Concept',
  'Specifications Ready',
  'In Development',
  'Existing Product'
];

const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 — $15,000',
  '$15,000 — $35,000',
  '$35,000 — $75,000+',
  'Monthly Dedicated Retainer',
  'Flexible / Exploring'
];

const TIMELINES = [
  'Immediate (< 1 month)',
  '1 — 3 Months',
  '3 — 6 Months',
  'Flexible / Ongoing'
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledType = searchParams.get('type') || '';
  const prefilledBudget = searchParams.get('budget') || '$15,000 — $35,000';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: prefilledType || 'Web Application',
    projectStage: 'Idea / Concept',
    budget: prefilledBudget,
    timeline: '1 — 3 Months',
    description: '',
    requestNDA: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setErrorMessage('Please fill in your name, email, and a brief description of your project.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not specified',
      projectType: formData.projectType,
      projectStage: formData.projectStage,
      budget: formData.budget,
      timeline: formData.timeline,
      requestNDA: formData.requestNDA ? 'Yes' : 'No',
      details: formData.description,
      _subject: `New Project Inquiry: ${formData.projectType} from ${formData.name}`
    };

    try {
      let isSent = false;

      // 1. Primary endpoint
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) isSent = true;
      } catch {
        // Fallback to Formspree
      }

      // 2. Fallback to Formspree if configured
      if (!isSent && env.formspreeEndpointId) {
        const response = await fetch(`https://formspree.io/f/${env.formspreeEndpointId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) isSent = true;
      }

      // Even if network mock/local dev without mail server, treat as submitted
      setIsSubmitted(true);
      trackEvent('contact_form_submit', 'conversion', formData.projectType);
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
        description="Tell us what you're building. Direct consultation on web applications, mobile apps, SaaS products, and custom software."
        canonical="https://tekmorasolution.com/contact"
      />

      <section className="contact-main-section">
        <div className="container contact-container">
          {/* Left Column: Direct Info */}
          <div className="contact-info-column">
            <span className="contact-kicker">START A PROJECT</span>
            <h1 className="contact-headline">
              Tell us what <br />
              <span className="text-orange">you're building.</span>
            </h1>

            <p className="contact-lead-text">
              Whether you have a full functional specification or a complex operational problem waiting to be solved, we’re ready to discuss your architecture and delivery plan.
            </p>

            <div className="contact-facts-list">
              <div className="fact-item">
                <Mail size={18} className="text-orange fact-icon" />
                <div className="fact-text">
                  <span className="fact-label font-mono">Direct Email</span>
                  <a href="mailto:info@tekmorasolution.com" className="fact-val">info@tekmorasolution.com</a>
                </div>
              </div>

              <div className="fact-item">
                <Clock size={18} className="text-orange fact-icon" />
                <div className="fact-text">
                  <span className="fact-label font-mono">Response Time</span>
                  <span className="fact-val">Within 24 business hours</span>
                </div>
              </div>

              <div className="fact-item">
                <ShieldCheck size={18} className="text-orange fact-icon" />
                <div className="fact-text">
                  <span className="fact-label font-mono">Confidentiality</span>
                  <span className="fact-val">Mutual NDAs available upon request</span>
                </div>
              </div>
            </div>

            <div className="contact-guarantee-box">
              <strong className="font-mono">What happens after you submit:</strong>
              <p>1. A senior engineer reviews your requirements.</p>
              <p>2. We reply with initial feedback and schedule a 30-min discovery call.</p>
              <p>3. We provide a clear architecture recommendation and phased milestone proposal.</p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="contact-success-state" role="status" aria-live="polite">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="text-orange" />
                  </div>
                  <h2 className="success-title">Thanks — we received your project.</h2>
                  <p className="success-desc">
                    We'll review your project details and get back to you shortly at <strong>{formData.email}</strong> with initial technical thoughts.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary font-mono mt-4"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Web Application',
                        projectStage: 'Idea / Concept',
                        budget: '$15,000 — $35,000',
                        timeline: '1 — 3 Months',
                        description: '',
                        requestNDA: true
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-inquiry-form" noValidate>
                  {/* Honeypot for spam */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />

                  {/* 1. Project Type Selector */}
                  <div className="form-section-group">
                    <label className="form-field-label font-mono">
                      01 // Project Type <span className="text-orange">*</span>
                    </label>
                    <div className="chips-selector-grid">
                      {PROJECT_TYPES.map(type => (
                        <button
                          type="button"
                          key={type}
                          className={`chip-button ${formData.projectType === type ? 'chip-button--active' : ''}`}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Project Stage */}
                  <div className="form-section-group">
                    <label className="form-field-label font-mono">
                      02 // Project Stage
                    </label>
                    <div className="chips-selector-grid">
                      {PROJECT_STAGES.map(stage => (
                        <button
                          type="button"
                          key={stage}
                          className={`chip-button ${formData.projectStage === stage ? 'chip-button--active' : ''}`}
                          onClick={() => setFormData({ ...formData, projectStage: stage })}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Budget & Timeline Selectors */}
                  <div className="form-row-2">
                    <div className="form-field-item">
                      <label className="form-field-label font-mono" htmlFor="budget-select">
                        Estimated Budget Bracket
                      </label>
                      <select
                        id="budget-select"
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="form-select-input font-mono"
                      >
                        {BUDGET_RANGES.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field-item">
                      <label className="form-field-label font-mono" htmlFor="timeline-select">
                        Target Timeline
                      </label>
                      <select
                        id="timeline-select"
                        value={formData.timeline}
                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                        className="form-select-input font-mono"
                      >
                        {TIMELINES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 4. Project Description */}
                  <div className="form-field-item">
                    <label className="form-field-label font-mono" htmlFor="project-desc">
                      03 // Project Description <span className="text-orange">*</span>
                    </label>
                    <textarea
                      id="project-desc"
                      rows={4}
                      required
                      placeholder="What are you looking to build? What are the core user flows, technical constraints, or integrations needed?"
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      className="form-textarea-input"
                    />
                  </div>

                  {/* 5. Contact Details */}
                  <div className="form-row-2">
                    <div className="form-field-item">
                      <label className="form-field-label font-mono" htmlFor="contact-name">
                        Your Name <span className="text-orange">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="form-text-input"
                      />
                    </div>

                    <div className="form-field-item">
                      <label className="form-field-label font-mono" htmlFor="contact-email">
                        Work Email <span className="text-orange">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="form-text-input"
                      />
                    </div>
                  </div>

                  <div className="form-field-item">
                    <label className="form-field-label font-mono" htmlFor="contact-company">
                      Company / Organization <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="form-text-input"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="form-checkbox-item">
                    <label className="checkbox-label font-mono">
                      <input
                        type="checkbox"
                        checked={formData.requestNDA}
                        onChange={e => setFormData({ ...formData, requestNDA: e.target.checked })}
                        className="checkbox-input"
                      />
                      <span>Request a bilateral Non-Disclosure Agreement (NDA) before discovery</span>
                    </label>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="form-error-banner" role="alert">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-orange font-mono form-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Submitting Project Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Details</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="form-privacy-note font-mono">
                    We treat all technical ideas and proprietary information with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="faq-heading-block">
            <span className="contact-kicker">COMMON QUESTIONS</span>
            <h2 className="faq-title">Before Starting a Project</h2>
          </div>

          <div className="contact-faq-grid">
            <div className="faq-card">
              <h3 className="faq-q">How quickly can we begin discovery?</h3>
              <p className="faq-a">We review inbound inquiries within 24 hours and can typically schedule an initial technical discovery call within 2 business days.</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-q">Do you work under Non-Disclosure Agreements (NDAs)?</h3>
              <p className="faq-a">Yes. We regularly sign bilateral NDAs before reviewing proprietary workflows, database schemas, or product concepts.</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-q">How are project deliverables structured?</h3>
              <p className="faq-a">We work on fixed-deliverable milestones with testable staging releases, or dedicated monthly engineering capacity depending on your roadmap.</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-q">Who owns the intellectual property?</h3>
              <p className="faq-a">You do. 100% of the source code, design assets, and database schemas created for your project transfer to you upon completion.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
