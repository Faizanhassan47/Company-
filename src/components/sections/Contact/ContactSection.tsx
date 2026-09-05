import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { TekmoraLogo } from '../../ui/TekmoraLogo';
import { ProjectEstimator, type EstimatorSelection } from '../../ui/ProjectEstimator';
import { staggerContainer, fadeInUp } from '../../../utils/animations';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Web Platform',
    timeline: '1-3 Months',
    budget: '$15k — $35k',
    requestNDA: true,
    details: '',
    projectStage: 'Idea'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleApplyEstimates = (est: EstimatorSelection) => {
    setFormData(prev => ({
      ...prev,
      projectType: est.platforms[0] || prev.projectType,
      timeline: est.estimatedWeeks,
      details: [
        `Architectural Scope: ${est.complexity}`,
        `Target Platforms: ${est.platforms.join(', ')}`,
        `Capabilities: ${est.modules.join(', ')}`,
        `Recommended Stack: ${est.suggestedStack.slice(0, 6).join(', ')}`,
        '',
        prev.details ? `Additional Notes:\n${prev.details}` : ''
      ].join('\n').trim()
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mbgjkvrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          projectType: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          projectStage: formData.projectStage,
          requestNDA: formData.requestNDA,
          details: formData.details,
          _subject: `Enterprise inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('System routing error. Please try again or email us directly.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Platform',
    'Mobile Application',
    'Enterprise System',
    'SAP & Warehouse',
    'WordPress Solutions',
    'System Integrations'
  ];

  const projectStages = [
    'Idea',
    'Requirements Ready',
    'Existing System',
    'Already in Development'
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">10</span>
          <span>// {t('contact.section_meta')}</span>
          <span className="meta-sep font-mono">{t('contact.section_submeta')}</span>
        </div>

        {/* Interactive Scope & Timeline Estimator Widget */}
        <ProjectEstimator onApplyEstimates={handleApplyEstimates} />

        {/* Closing Main Grid */}
        <motion.div
          className="contact-main-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left: Pitch & Direct Channels */}
          <motion.div className="contact-pitch-column" variants={fadeInUp}>
            <div className="contact-small-label font-mono">
              <span className="calibration-dot"></span>
              <span>{t('contact.small_label')}</span>
            </div>

            <h2 className="contact-headline font-display">
              {t('contact.title_1')}<br />
              {t('contact.title_2')}<br />
              <span className="italic-accent">{t('contact.title_3')}</span>
            </h2>

            <p className="contact-lead-text">
              {t('contact.lead')}
            </p>

            {/* Verified Contact Details Box */}
            <div className="contact-details-box">
              <div className="c-detail-item">
                <div className="cd-lbl font-mono">{t('contact.biz_inq')}</div>
                <a href="mailto:info@tekmorasolution.com" className="cd-val font-mono">
                  <Mail size={14} className="text-orange" /> info@tekmorasolution.com
                </a>
              </div>

              <div className="c-detail-item">
                <div className="cd-lbl font-mono">{t('contact.location')}</div>
                <div className="cd-val font-mono">
                  <MapPin size={14} className="text-orange" /> {t('contact.loc_val')}
                </div>
              </div>

              <div className="c-detail-item">
                <div className="cd-lbl font-mono">{t('contact.status')}</div>
                <div className="cd-val font-mono">
                  <Clock size={14} className="text-green" /> {t('contact.status_val')}
                </div>
              </div>
            </div>

            {/* Brand Signature Mark */}
            <div className="contact-brand-signature">
              <div className="sig-brand-row">
                <TekmoraLogo height={36} />
              </div>
              <div className="sig-tagline font-mono text-dim mt-2">
                {t('contact.tagline')}
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Project Inquiry Form */}
          <motion.div className="contact-form-column" variants={fadeInUp}>
            <div className="inquiry-card">
              <div className="inquiry-header font-mono">
                <span>{t('contact.form_header')}</span>
                <span className="text-orange">STEP 0{step} // {step === 1 ? 'CONTACT' : step === 2 ? 'SCOPE' : 'DETAILS'}</span>
              </div>

              {/* Progress Indicator */}
              {!submitted && (
                <div className="funnel-progress">
                  <div className={`funnel-step ${step >= 1 ? 'active' : ''}`} />
                  <div className={`funnel-step ${step >= 2 ? 'active' : ''}`} />
                  <div className={`funnel-step ${step >= 3 ? 'active' : ''}`} />
                </div>
              )}

              {submitted ? (
                <div className="submission-success-view">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} className="text-green" />
                  </div>
                  <h3 className="success-title font-display">{t('contact.success_title')}</h3>
                  <p className="success-desc">
                    {t('contact.success_desc')}
                  </p>
                  <button
                    className="btn btn-secondary btn-sm font-mono mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    {t('contact.success_btn')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  {/* Step 1: Contact */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="funnel-step-content"
                    >
                      <div className="form-row-2">
                        <div className="form-group">
                          <label className="form-label font-mono">
                            {t('contact.f_name')} <span className="text-orange">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="form-input"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label font-mono">{t('contact.f_company')}</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label font-mono">
                          {t('contact.f_email')} <span className="text-orange">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <button
                        type="button"
                        className="btn btn-orange w-full font-mono mt-4"
                        onClick={() => {
                          if (formData.name && formData.email) setStep(2);
                        }}
                      >
                        NEXT STEP ↗
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Scope */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="funnel-step-content"
                    >
                      <div className="form-group">
                        <label className="form-label font-mono">{t('contact.f_scope')}</label>
                        <div className="scope-chips-grid">
                          {projectTypes.map(type => (
                            <button
                              type="button"
                              key={type}
                              className={`scope-chip font-mono ${formData.projectType === type ? 'chip-active' : ''}`}
                              onClick={() => setFormData({ ...formData, projectType: type })}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group" style={{ marginTop: '1.5rem' }}>
                        <label className="form-label font-mono">PROJECT STAGE</label>
                        <div className="scope-chips-grid">
                          {projectStages.map(stage => (
                            <button
                              type="button"
                              key={stage}
                              className={`scope-chip font-mono ${formData.projectStage === stage ? 'chip-active' : ''}`}
                              onClick={() => setFormData({ ...formData, projectStage: stage })}
                            >
                              {stage}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-row-2" style={{ marginTop: '1.5rem' }}>
                        <div className="form-group">
                          <label className="form-label font-mono">{t('contact.f_timeline')}</label>
                          <select
                            className="form-select font-mono"
                            value={formData.timeline}
                            onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                          >
                            <option>Immediate (Under 1 month)</option>
                            <option>1-3 Months</option>
                            <option>2–4 Weeks</option>
                            <option>4–8 Weeks</option>
                            <option>8–12 Weeks</option>
                            <option>Flexible / Exploratory</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label font-mono">{t('contact.f_budget')}</label>
                          <select
                            className="form-select font-mono"
                            value={formData.budget}
                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                          >
                            <option>Under $5,000</option>
                            <option>$5k - $15k</option>
                            <option>$15k — $35k</option>
                            <option>$35k — $75k+</option>
                            <option>Dedicated Monthly Engineering Squad</option>
                            <option>Not determined yet</option>
                          </select>
                        </div>
                      </div>

                      <div className="funnel-actions">
                        <button type="button" className="btn btn-secondary font-mono" onClick={() => setStep(1)}>BACK</button>
                        <button type="button" className="btn btn-orange font-mono flex-1" onClick={() => setStep(3)}>NEXT STEP ↗</button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details & Submit */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="funnel-step-content"
                    >
                      <div className="form-group">
                        <label className="form-label font-mono">{t('contact.f_details')}</label>
                        <textarea
                          rows={4}
                          className="form-textarea font-mono"
                          placeholder="What is currently manual or disconnected? What systems need to be built or integrated?"
                          value={formData.details}
                          onChange={e => setFormData({ ...formData, details: e.target.value })}
                        />
                      </div>

                      <div className="form-group nda-checkbox-group">
                        <label className="nda-checkbox-label font-mono">
                          <input
                            type="checkbox"
                            checked={formData.requestNDA}
                            onChange={e => setFormData({ ...formData, requestNDA: e.target.checked })}
                            className="nda-checkbox-input"
                          />
                          <span>{t('contact.f_nda')}</span>
                        </label>
                      </div>

                      <div className="funnel-actions">
                        <button type="button" className="btn btn-secondary font-mono" onClick={() => setStep(2)}>BACK</button>
                        <button
                          type="submit"
                          className="btn btn-orange font-mono submit-btn flex-1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span>{t('contact.submitting')}</span>
                          ) : (
                            <>
                              <span>{t('contact.submit')}</span>
                              <Send size={15} />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {errorMsg && (
                    <div className="form-error-msg font-mono text-orange mt-3 text-sm text-center">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-disclaimer font-mono">
                    {t('contact.disclaimer')}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
