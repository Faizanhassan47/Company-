import React, { useState } from 'react';
import { 
  MessageSquare, Lightbulb, Rocket, 
  Mail, MapPin, Clock, User, Building, ArrowRight, ArrowUpRight, Check, Send
} from 'lucide-react';
import './ProjectInquirySection.css';

export const ProjectInquirySection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: 'Less than $5,000',
    timeline: 'As soon as possible',
    details: '',
    requestNDA: false
  });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setShowError(false);
      
      try {
        const endpointId = import.meta.env.VITE_FORMSPREE_ENDPOINT_ID || 'mbgjkvrb';
        const response = await fetch(`https://formspree.io/f/${endpointId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Project Inquiry from ${formData.name}`
          })
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setShowError(true);
        }
      } catch (err) {
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
    <section className="project-inquiry-section">
      <div className="pi-container">
        
        {/* Left Column */}
        <div className="pi-left-col">
          <div className="pi-header-meta">
            <span className="pi-red-dot"></span>
            HAVE SOMETHING POWERFUL TO BUILD?
          </div>

          <h2 className="pi-headline font-display">
            LET'S BUILD<br/>
            THE SYSTEM<br/>
            <span className="pi-italic-accent">BEHIND IT.</span>
          </h2>

          <p className="pi-subtitle">
            Tell us about the workflow, the product or even the unfinished idea. We can begin there.
          </p>

          <div className="pi-process-steps">
            <div className="pi-step">
              <div className="pi-step-icon"><MessageSquare size={18} /></div>
              <h4>Discuss</h4>
              <p>Share your idea or requirement</p>
            </div>
            <div className="pi-step">
              <div className="pi-step-icon"><Lightbulb size={18} /></div>
              <h4>Plan</h4>
              <p>We suggest the best approach</p>
            </div>
            <div className="pi-step">
              <div className="pi-step-icon"><Rocket size={18} /></div>
              <h4>Build</h4>
              <p>Turn it into a working solution</p>
            </div>
          </div>

          <div className="pi-contact-card">
            <div className="pi-contact-item">
              <Mail size={16} className="pi-contact-icon" />
              <div>
                <span className="pi-contact-label">EMAIL US</span>
                <span className="pi-contact-value">info@tekmorasolution.com</span>
              </div>
            </div>
            <div className="pi-contact-item">
              <MapPin size={16} className="pi-contact-icon" />
              <div>
                <span className="pi-contact-label">VISIT OUR OFFICE</span>
                <span className="pi-contact-value">Global Engineering Workspace (Worldwide)</span>
              </div>
            </div>
            <div className="pi-contact-item">
              <Clock size={16} className="pi-contact-icon" />
              <div>
                <span className="pi-contact-label">RESPONSE TIME</span>
                <span className="pi-contact-value">Direct technical reply within 24 hours</span>
              </div>
            </div>
          </div>
          
          <div className="pi-logo-area">
             <div className="pi-logo-mark">tekmora<span className="pi-logo-dot">.</span></div>
             <div className="pi-logo-tag">CUSTOM SOFTWARE FOR REAL BUSINESS OUTCOMES.</div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="pi-right-col">
          <div className="pi-form-card">
            <div className="pi-form-header">
              <span className="pi-form-title">PROJECT INQUIRY FORM</span>
              <span className="pi-form-step">
                {step === 1 ? 'STEP 01 // CONNECT' : step === 2 ? 'STEP 02 // SCOPE' : 'STEP 03 // DETAILS'}
              </span>
            </div>

            <div className="pi-progress-bar">
              <div className={`pi-progress-fill ${step >= 1 ? 'active' : ''}`}></div>
              <div className={`pi-progress-fill ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`pi-progress-fill ${step >= 3 ? 'active' : ''}`}></div>
            </div>

            {isSuccess ? (
              <div className="pi-success-view">
                <div className="pi-success-icon"><Check size={40} className="text-green" /></div>
                <h3>Inquiry Submitted Successfully</h3>
                <p>We've received your project details and will be in touch within 24 hours.</p>
                <button type="button" className="pi-back-btn" onClick={() => { setIsSuccess(false); setStep(1); }}>
                  START ANOTHER INQUIRY
                </button>
              </div>
            ) : (
            <form className="pi-form" onSubmit={handleNext}>
              
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div className="pi-form-row">
                    <div className="pi-form-group">
                      <label>YOUR NAME <span className="pi-req">*</span></label>
                      <div className="pi-input-wrapper">
                        <User size={16} className="pi-input-icon" />
                        <input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      </div>
                    </div>
                    <div className="pi-form-group">
                      <label>COMPANY / ORGANIZATION</label>
                      <div className="pi-input-wrapper">
                        <Building size={16} className="pi-input-icon" />
                        <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  <div className="pi-form-group">
                    <label>EMAIL ADDRESS <span className="pi-req">*</span></label>
                    <div className="pi-input-wrapper">
                      <Mail size={16} className="pi-input-icon" />
                      <input type="email" placeholder="you@company.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <div className="pi-form-group">
                    <label>PROJECT BUDGET (OPTIONAL)</label>
                    <select className="pi-select-input" value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})}>
                      <option>Less than $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <div className="pi-form-group">
                    <label>TIMELINE</label>
                    <select className="pi-select-input" value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})}>
                      <option>As soon as possible</option>
                      <option>Within 1-2 months</option>
                      <option>Within 3-6 months</option>
                      <option>Just exploring options</option>
                    </select>
                  </div>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <div className="pi-form-group">
                    <label>TELL US ABOUT THE WORKFLOW OR SYSTEM</label>
                    <div className="pi-input-wrapper pi-textarea-wrapper no-icon">
                      <textarea placeholder="What is currently manual or disconnected? What systems need to be built or integrated?" required value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})}></textarea>
                    </div>
                  </div>

                  <label className="pi-checkbox-label">
                    <input type="checkbox" checked={formData.requestNDA} onChange={(e) => setFormData({...formData, requestNDA: e.target.checked})} />
                    <div className="pi-custom-checkbox">
                      <Check size={14} />
                    </div>
                    <span>Request signed Mutual NDA prior to technical discovery</span>
                  </label>
                </>
              )}

              {showError && (
                <div className="pi-error-message">
                  System routing error. Please try again or email us directly.
                </div>
              )}

              <div className="pi-form-actions">
                {step > 1 && (
                  <button type="button" className="pi-back-btn" onClick={handleBack}>
                    BACK
                  </button>
                )}
                
                <button type="submit" className="pi-submit-btn" disabled={isSubmitting}>
                  {step < 3 ? (
                    <>NEXT STEP <ArrowRight size={18} /></>
                  ) : (
                    <>{isSubmitting ? 'SENDING...' : 'START A PROJECT INQUIRY'} <ArrowUpRight size={16} /> <Send size={16} /></>
                  )}
                </button>
              </div>
              
              <div className="pi-form-footer">
                Direct technical communication with Tekmora. No sales scripts.
              </div>
            </form>
            )}
          </div>
          
          <div className="pi-footer-right">
             IDEAS / SYSTEMS / REAL IMPACT
          </div>
        </div>
      </div>
    </section>
  );
};
