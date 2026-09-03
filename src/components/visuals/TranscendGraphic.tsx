import React from 'react';

export const TranscendGraphic: React.FC = () => {
  return (
    <div className="system-graphic transcend-graphic">
      <div className="graphic-header light-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">Transcend Healthcare // Multilingual Strapi CMS & Medical Platform</div>
        <div className="window-status">
          <span className="status-indicator"></span>
          <span className="status-text font-mono">i18n / WCAG AA</span>
        </div>
      </div>

      <div className="transcend-body">
        <div className="medical-nav">
          <span className="medical-brand font-display">Transcend Care.</span>
          <div className="locale-switcher font-mono">
            <span className="locale-btn active">EN</span>
            <span className="locale-btn">AR</span>
            <span className="locale-btn">UR</span>
          </div>
        </div>

        <div className="clinical-card-grid">
          <div className="clinical-card">
            <div className="dept-badge font-mono">CARDIOLOGY</div>
            <div className="clinician-name font-display">Specialized Cardiovascular Center</div>
            <p className="clinician-desc">Advanced diagnostic screening, echocardiogram interpretation, and preventative care programs.</p>
            <div className="card-footer font-mono">
              <span className="availability-tag">AVAILABLE TODAY</span>
              <span className="cta-link">INTAKE ROUTE ↗</span>
            </div>
          </div>

          <div className="cms-status-pill font-mono">
            <span>STRAPI HEADLESS CMS // SYNCED IN 120MS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
