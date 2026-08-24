import React, { useState } from 'react';
import { PROCESS_STAGES, type ProcessStage } from '../../../data/process';
import { ArrowRight, HelpCircle } from 'lucide-react';
import './ProcessSection.css';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section className="section process-section section-border-bottom" id="process">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">06</span>
          <span>// DELIVERY METHODOLOGY</span>
          <span className="meta-sep font-mono">5-STAGE DISCIPLINE</span>
        </div>

        {/* Section Title */}
        <div className="process-heading-block">
          <h2 className="section-title-large">
            HOW WE MOVE<br />
            <span className="italic-accent">FROM PROBLEM TO SYSTEM.</span>
          </h2>
          <p className="process-lead-desc">
            A linear, transparent progression with zero smoke and mirrors. Every phase yields concrete technical artifacts and verified operational checkpoints.
          </p>
        </div>

        {/* Continuous Process Stepper Ribbon */}
        <div className="process-stepper-ribbon font-mono">
          {PROCESS_STAGES.map((st: ProcessStage, idx: number) => {
            const isActive = activeStep === st.step;
            return (
              <React.Fragment key={st.step}>
                <button
                  className={`ribbon-step-btn ${isActive ? 'ribbon-active' : ''}`}
                  onClick={() => setActiveStep(st.step)}
                  aria-label={`Jump to stage ${st.step}: ${st.name}`}
                >
                  <span className="step-idx">{st.step}</span>
                  <span className="step-label">{st.name}</span>
                  {isActive && <span className="step-indicator-dot"></span>}
                </button>
                {idx < PROCESS_STAGES.length - 1 && (
                  <span className="ribbon-arrow" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Dynamic Process Stage Deep-Dive Board */}
        <div className="process-stage-board">
          {PROCESS_STAGES.map((stage: ProcessStage) => {
            const isCurrent = activeStep === stage.step;
            if (!isCurrent) return null;

            return (
              <div key={stage.step} className="stage-active-panel">
                <div className="stage-left-info">
                  <div className="stage-meta-head font-mono">
                    <span className="stage-badge text-orange">STAGE {stage.step} OF 05</span>
                    <span className="stage-status font-mono">CALIBRATED PROTOCOL</span>
                  </div>

                  <h3 className="stage-action-title">{stage.action}</h3>
                  <p className="stage-desc-text">{stage.description}</p>

                  {/* Core Guiding Question */}
                  <div className="stage-question-card">
                    <div className="q-label font-mono">
                      <HelpCircle size={14} className="text-orange" />
                      <span>CRITICAL VERIFICATION QUESTION</span>
                    </div>
                    <div className="q-content">“{stage.keyQuestion}”</div>
                  </div>
                </div>

                <div className="stage-right-artifacts">
                  <div className="artifacts-card">
                    <div className="artifacts-title font-mono">
                      <span>CONCRETE DELIVERABLE ARTIFACTS</span>
                      <span className="text-orange">VERIFIED</span>
                    </div>

                    <div className="artifacts-list">
                      {stage.artifacts.map(art => (
                        <div key={art} className="artifact-row font-mono">
                          <span className="art-dot"></span>
                          <span className="art-name">{art}</span>
                          <span className="art-status">DOCUMENTED</span>
                        </div>
                      ))}
                    </div>

                    <div className="stage-nav-footer">
                      <div className="stage-step-summary font-mono">
                        DISCIPLINE {stage.step}: {stage.name}
                      </div>
                      <button
                        className="btn btn-sm btn-outline-cta font-mono"
                        onClick={() => {
                          const nextIdx = (parseInt(stage.step) % 5) + 1;
                          const nextStr = nextIdx < 10 ? `0${nextIdx}` : `${nextIdx}`;
                          setActiveStep(nextStr);
                        }}
                      >
                        <span>Next Phase</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
