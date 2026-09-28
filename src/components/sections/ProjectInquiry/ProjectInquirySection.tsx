import React, { useState } from 'react';
import { 
  ArrowRight, ArrowUpRight, Check, Mail, 
  Globe, Smartphone, Cloud, Code, Layout, HelpCircle 
} from 'lucide-react';
import './ProjectInquirySection.css';
import { trackEvent } from '../../../utils/analytics';
import { env } from '@/config/env';

const SERVICE_OPTIONS = [
  { id: 'web-app', label: 'Web Application', icon: <Globe size={18} /> },
  { id: 'mobile-app', label: 'Mobile Application', icon: <Smartphone size={18} /> },
  { id: 'saas', label: 'SaaS Product', icon: <Cloud size={18} /> },
  { id: 'custom-software', label: 'Custom Software', icon: <Code size={18} /> },
  { id: 'ui-ux', label: 'UI/UX & Product Design', icon: <Layout size={18} /> },
  { id: 'other', label: 'Other Engineering', icon: <HelpCircle size={18} /> }
];

const STAGE_OPTIONS = [
  { id: 'idea', label: 'Idea / Early Concept' },
  { id: 'design-ready', label: 'Design Ready (Figma / Specs)' },
  { id: 'existing-product', label: 'Existing Live Product' },
  { id: 'need-improvements', label: 'Codebase Refactoring & Improvements' }
];

const BUDGET_OPTIONS = [
  { id: '10k-25k', label: '$10,000 – $25,000' },
  { id: '25k-50k', label: '$25,000 – $50,000' },
  { id: '50k-100k', label: '$50,000 – $100,000' },
  { id: '100k+', label: '$100,000+' }
];

export const ProjectInquirySection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceType: 'Web Application',
    projectStage: 'Idea / Early Concept',
    budget: '$25,000 – $50,000',
    details: '',
    name: '',
    email: '',
    company: '',
    requestNDA: false
  });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setShowError(false);

      const payload = {
        ...formData,
        _subject: `New Project Inquiry from ${formData.name} (${formData.serviceType})`
      };

      try {
        let isSent = false;

        // 1. Primary endpoint
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          if (response.ok) {
            isSent = true;
          }
        } catch {
          // fallback
        }

        // 2. Fallback Formspree
        if (!isSent) {
          const endpointId = env.formspreeEndpointId;
          const response = await fetch(`https://formspree.io/f/${endpointId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          if (response.ok) {
            isSent = true;
          }
        }

        if (isSent) {
          setIsSuccess(true);
          trackEvent('project_inquiry_submit', 'lead', formData.budget);
        } else {
          setShowError(true);
        }
      } catch {
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setShowError(false);
    }
  };

  return (
    <section className="section project-inquiry-clean-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="inquiry-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="inquiry-title">
            Have a product in mind?<br />
            <span className="text-orange">Let's turn it into software people actually want to use.</span>
          </h2>
          <p className="inquiry-lead-text">
            Tell us about your project requirements. We'll review your scope and provide a direct technical reply within 24 hours.
          </p>
        </div>

        {/* Main Grid: Direct Contacts + Qualifier Form */}
        <div className="inquiry-main-grid">
          {/* Left Column: Direct Contacts */}
          <div className="inquiry-info-col">
            <div className="info-card">
              <span className="info-card-label font-mono">DIRECT INQUIRY</span>
              <a href="mailto:hello@tekmorasolution.com" className="direct-email-link">
                <Mail size={20} className="text-orange" />
                <span>hello@tekmorasolution.com</span>
              </a>
              <p className="info-card-sub">
                Prefer email? Send your project brief, wireframes, or RFP documents directly to our senior engineering team.
              </p>
            </div>

            <div className="info-card">
              <span className="info-card-label font-mono">WHAT HAPPENS NEXT</span>
              <div className="info-step-item">
                <span className="info-step-num font-mono">01</span>
                <span>We review your requirements & technical constraints</span>
              </div>
              <div className="info-step-item">
                <span className="info-step-num font-mono">02</span>
                <span>We schedule a direct call with senior engineering</span>
              </div>
              <div className="info-step-item">
                <span className="info-step-num font-mono">03</span>
                <span>We deliver a transparent architecture & milestone plan</span>
              </div>
            </div>

            <div className="info-guarantee">
              <div className="guarantee-dot text-orange">●</div>
              <span>100% Direct Senior Engineer Access. No high-pressure sales reps.</span>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Step Qualifier Form */}
          <div className="inquiry-form-col">
            <div className="inquiry-form-card">
              {/* Form Step Progress */}
              <div className="form-card-top font-mono">
                <span className="form-step-badge">
                  {step === 1 ? 'STEP 01 // SCOPE & NEEDS' : step === 2 ? 'STEP 02 // STAGE & BUDGET' : 'STEP 03 // DETAILS & CONTACT'}
                </span>
                <span className="form-step-counter">0{step} / 03</span>
              </div>

              <div className="form-progress-track">
                <div className={`track-fill ${step >= 1 ? 'active' : ''}`} />
                <div className={`track-fill ${step >= 2 ? 'active' : ''}`} />
                <div className={`track-fill ${step >= 3 ? 'active' : ''}`} />
              </div>

              {isSuccess ? (
                <div className="inquiry-success-view">
                  <div className="success-icon-box">
                    <Check size={36} className="text-orange" />
                  </div>
                  <h3>Inquiry Submitted Successfully</h3>
                  <p>
                    Thank you, {formData.name}. We've received your inquiry for <strong>{formData.serviceType}</strong> and will be in touch with a direct technical assessment within 24 hours.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-hero-secondary font-mono"
                    onClick={() => { setIsSuccess(false); setStep(1); }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="inquiry-step-form" onSubmit={handleNext}>
                  {/* STEP 1: What do you need? */}
                  {step === 1 && (
                    <div className="step-panel">
                      <label className="step-label">
                        1. What do you need to build? <span className="req">*</span>
                      </label>
                      <div className="options-grid">
                        {SERVICE_OPTIONS.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            className={`option-btn ${formData.serviceType === opt.label ? 'selected' : ''}`}
                            onClick={() => setFormData({ ...formData, serviceType: opt.label })}
                          >
                            <span className="opt-icon">{opt.icon}</span>
                            <span className="opt-text">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Project Stage & Estimated Budget */}
                  {step === 2 && (
                    <div className="step-panel">
                      <div className="field-group">
                        <label className="step-label">
                          2. What is the current project stage? <span className="req">*</span>
                        </label>
                        <div className="stage-grid">
                          {STAGE_OPTIONS.map((stg) => (
                            <button
                              type="button"
                              key={stg.id}
                              className={`option-btn ${formData.projectStage === stg.label ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, projectStage: stg.label })}
                            >
                              <span className="opt-text">{stg.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="field-group">
                        <label className="step-label">
                          3. Estimated budget range
                        </label>
                        <div className="budget-grid">
                          {BUDGET_OPTIONS.map((bgt) => (
                            <button
                              type="button"
                              key={bgt.id}
                              className={`option-btn ${formData.budget === bgt.label ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, budget: bgt.label })}
                            >
                              <span className="opt-text">{bgt.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Details & Contact Info */}
                  {step === 3 && (
                    <div className="step-panel">
                      <div className="field-group">
                        <label htmlFor="pi-details" className="step-label">
                          4. Tell us about the project <span className="req">*</span>
                        </label>
                        <textarea
                          id="pi-details"
                          rows={4}
                          className="clean-textarea"
                          placeholder="What are the key goals, requirements, or business problems you want to solve?"
                          required
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        />
                      </div>

                      <div className="form-two-col">
                        <div className="field-group">
                          <label htmlFor="pi-name" className="step-label">Your Name <span className="req">*</span></label>
                          <input
                            id="pi-name"
                            type="text"
                            className="clean-input"
                            placeholder="Alex Morgan"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="field-group">
                          <label htmlFor="pi-email" className="step-label">Email Address <span className="req">*</span></label>
                          <input
                            id="pi-email"
                            type="email"
                            className="clean-input"
                            placeholder="alex@company.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="field-group">
                        <label htmlFor="pi-company" className="step-label">Company / Organization</label>
                        <input
                          id="pi-company"
                          type="text"
                          className="clean-input"
                          placeholder="Acme Corp (optional)"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>

                      <label className="nda-checkbox-row">
                        <input
                          type="checkbox"
                          checked={formData.requestNDA}
                          onChange={(e) => setFormData({ ...formData, requestNDA: e.target.checked })}
                        />
                        <span>Request signed Mutual NDA prior to technical discovery</span>
                      </label>
                    </div>
                  )}

                  {showError && (
                    <div className="form-error-banner font-mono">
                      Routing error. Please try again or email hello@tekmorasolution.com directly.
                    </div>
                  )}

                  {/* Form Action Controls */}
                  <div className="form-actions-row">
                    {step > 1 && (
                      <button type="button" className="btn-form-back" onClick={handleBack}>
                        Back
                      </button>
                    )}

                    <button type="submit" className="btn-form-next" disabled={isSubmitting}>
                      {step < 3 ? (
                        <>
                          <span>Continue</span>
                          <ArrowRight size={16} />
                        </>
                      ) : (
                        <>
                          <span>{isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}</span>
                          <ArrowUpRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
