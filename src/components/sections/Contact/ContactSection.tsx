import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Web Platform',
    timeline: '1-3 Months',
    budget: '$5k - $15k',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Email: ${formData.email}`,
      `Project type: ${formData.projectType}`,
      `Timeline: ${formData.timeline}`,
      `Budget: ${formData.budget}`,
      '',
      formData.details || 'No additional details provided.'
    ].join('\n'));
    window.location.href = `mailto:contact@tekmora.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const projectTypes = [
    'Web Platform',
    'Mobile Application',
    'Enterprise ERP / Portal',
    'SAP / Warehouse Automation',
    'WordPress / Headless',
    'Technical Advisory'
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">09</span>
          <span>// START A CONVERSATION</span>
          <span className="meta-sep font-mono">DIRECT INQUIRY</span>
        </div>

        {/* Closing Main Grid */}
        <div className="contact-main-grid">
          {/* Left: Cinematic Pitch & Direct Channels */}
          <div className="contact-pitch-column">
            <div className="contact-small-label font-mono">
              <span className="calibration-dot"></span>
              <span>HAVE SOMETHING DIFFICULT TO BUILD?</span>
            </div>

            <h2 className="contact-headline">
              LET’S SET<br />
              A BETTER<br />
              <span className="italic-accent">STANDARD.</span>
            </h2>

            <p className="contact-lead-text">
              Tell us about the problem, the workflow or even the unfinished idea. We can begin there without sales scripts or forced commitments.
            </p>

            {/* Verified Contact Details Box */}
            <div className="contact-details-box">
              <div className="c-detail-item">
                <div className="cd-lbl font-mono">DIRECT EMAIL</div>
                <a href="mailto:contact@tekmora.com" className="cd-val font-mono">
                  <Mail size={14} className="text-orange" /> contact@tekmora.com
                </a>
              </div>

              <div className="c-detail-item">
                <div className="cd-lbl font-mono">OPERATIONAL BASE</div>
                <div className="cd-val font-mono">
                  <MapPin size={14} className="text-orange" /> Pakistan (Serving Clients Worldwide)
                </div>
              </div>

              <div className="c-detail-item">
                <div className="cd-lbl font-mono">RESPONSE COMMITMENT</div>
                <div className="cd-val font-mono">
                  <Clock size={14} className="text-green" /> Direct reply within 24 hours
                </div>
              </div>
            </div>

            {/* Brand Signature Mark */}
            <div className="contact-brand-signature">
              <div className="sig-brand-row">
                <span className="sig-brand-title font-display">Tekmora</span>
                <span className="sig-brand-dot"></span>
                <span className="sig-sub font-mono">Tekmora.</span>
              </div>
              <div className="sig-tagline font-mono text-dim">
                Software, built to a better standard.
              </div>
            </div>
          </div>

          {/* Right: Interactive Project Inquiry Form */}
          <div className="contact-form-column">
            <div className="inquiry-card">
              <div className="inquiry-header font-mono">
                <span>PROJECT SCOPE INQUIRY</span>
                <span className="text-orange">STEP 01 // OVERVIEW</span>
              </div>

              {submitted ? (
                <div className="submission-success-view">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} className="text-green" />
                  </div>
                    <h3 className="success-title font-display">EMAIL DRAFT READY</h3>
                  <p className="success-desc">
                    Your email client should now contain a prepared project brief addressed to contact@tekmora.com. Send it to begin the conversation.
                  </p>
                  <button
                    className="btn btn-secondary btn-sm font-mono mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  {/* Name & Company */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label font-mono">
                        YOUR NAME <span className="text-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Bilal Ahmed"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Apex Logistics Ltd"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label font-mono">
                      EMAIL ADDRESS <span className="text-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Project Type Scope Chips */}
                  <div className="form-group">
                    <label className="form-label font-mono">WHAT ARE YOU BUILDING?</label>
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

                  {/* Timeline & Budget Ranges */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label font-mono">EXPECTED TIMELINE</label>
                      <select
                        className="form-select font-mono"
                        value={formData.timeline}
                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option>Immediate (Under 1 month)</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Flexible / Ongoing</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">BUDGET RANGE (OPTIONAL)</label>
                      <select
                        className="form-select font-mono"
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option>Under $5,000</option>
                        <option>$5k - $15k</option>
                        <option>$15k — $30k</option>
                        <option>$30k+</option>
                        <option>Not sure yet / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem / Details */}
                  <div className="form-group">
                    <label className="form-label font-mono">TELL US ABOUT THE PROBLEM OR WORKFLOW</label>
                    <textarea
                      rows={4}
                      className="form-textarea"
                      placeholder="What is currently difficult or manual? What systems need to be connected?"
                      value={formData.details}
                      onChange={e => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="btn btn-orange w-full font-mono submit-btn"
                  >
                    <span>OPEN EMAIL DRAFT</span>
                    <Send size={15} />
                  </button>

                  <div className="form-disclaimer font-mono">
                    Zero spam. Direct technical conversation with Muhammad Faizan.
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
