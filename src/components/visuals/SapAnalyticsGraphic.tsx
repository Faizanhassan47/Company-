import React from 'react';

export const SapAnalyticsGraphic: React.FC = () => {
  return (
    <div className="system-graphic sap-analytics-graphic">
      {/* Industrial Plant Monitor Header */}
      <div className="plant-header">
        <div className="plant-info">
          <div className="plant-title font-mono">PLANT FLOOR TELEMETRY // LINE 01 - 04</div>
          <div className="plant-sub text-secondary font-mono">SAP B1 LIVE READ-REPLICA // SYNC: 1s INTERVAL</div>
        </div>
        <div className="live-oee-badge">
          <span className="oee-label font-mono">OVERALL OEE</span>
          <span className="oee-val font-mono text-orange">89.4%</span>
        </div>
      </div>

      {/* Grid of Industrial Production Lines */}
      <div className="plant-lines-grid">
        {/* Line 01 */}
        <div className="plant-line-card active">
          <div className="line-head">
            <span className="line-name font-mono">LINE 01 — EXTRUSION</span>
            <span className="line-status status-green font-mono">RUNNING (100%)</span>
          </div>
          <div className="line-metrics">
            <div className="l-metric">
              <span className="lm-label font-mono">OUTPUT TARGET</span>
              <span className="lm-val font-mono">4,850 / 5,000 U</span>
            </div>
            <div className="l-metric">
              <span className="lm-label font-mono">SCRAP RATE</span>
              <span className="lm-val font-mono text-green">1.2% (BELOW TARGET)</span>
            </div>
          </div>
          <div className="line-progress-bar">
            <div className="progress-fill" style={{ width: '97%' }}></div>
          </div>
        </div>

        {/* Line 02 */}
        <div className="plant-line-card active">
          <div className="line-head">
            <span className="line-name font-mono">LINE 02 — CNC MILLING</span>
            <span className="line-status status-green font-mono">RUNNING (92%)</span>
          </div>
          <div className="line-metrics">
            <div className="l-metric">
              <span className="lm-label font-mono">OUTPUT TARGET</span>
              <span className="lm-val font-mono">1,240 / 1,500 U</span>
            </div>
            <div className="l-metric">
              <span className="lm-label font-mono">SCRAP RATE</span>
              <span className="lm-val font-mono text-green">0.8%</span>
            </div>
          </div>
          <div className="line-progress-bar">
            <div className="progress-fill" style={{ width: '82%' }}></div>
          </div>
        </div>

        {/* Line 03 */}
        <div className="plant-line-card warning">
          <div className="line-head">
            <span className="line-name font-mono">LINE 03 — SURFACE COATING</span>
            <span className="line-status status-orange font-mono">TOOLING CHANGEOVER</span>
          </div>
          <div className="line-metrics">
            <div className="l-metric">
              <span className="lm-label font-mono">OUTPUT TARGET</span>
              <span className="lm-val font-mono">820 / 1,200 U</span>
            </div>
            <div className="l-metric">
              <span className="lm-label font-mono">DOWNTIME</span>
              <span className="lm-val font-mono text-orange">14 MINS (SCHEDULED)</span>
            </div>
          </div>
          <div className="line-progress-bar">
            <div className="progress-fill progress-orange" style={{ width: '68%' }}></div>
          </div>
        </div>

        {/* Line 04 */}
        <div className="plant-line-card active">
          <div className="line-head">
            <span className="line-name font-mono">LINE 04 — PACKAGING & QC</span>
            <span className="line-status status-green font-mono">RUNNING (98%)</span>
          </div>
          <div className="line-metrics">
            <div className="l-metric">
              <span className="lm-label font-mono">OUTPUT TARGET</span>
              <span className="lm-val font-mono">3,980 / 4,000 U</span>
            </div>
            <div className="l-metric">
              <span className="lm-label font-mono">QC PASS RATE</span>
              <span className="lm-val font-mono text-green">99.7%</span>
            </div>
          </div>
          <div className="line-progress-bar">
            <div className="progress-fill" style={{ width: '99%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
