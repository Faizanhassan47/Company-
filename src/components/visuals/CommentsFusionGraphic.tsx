import React from 'react';

export const CommentsFusionGraphic: React.FC = () => {
  return (
    <div className="system-graphic comments-fusion-graphic">
      <div className="graphic-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">Comments Fusion // Full-Stack Engagement Automation Platform</div>
        <div className="window-status">
          <span className="status-indicator"></span>
          <span className="status-text font-mono">QUEUE WORKERS: ACTIVE</span>
        </div>
      </div>

      <div className="fusion-body">
        <div className="fusion-pipeline">
          <div className="pipeline-stage stage-setup">
            <div className="stage-tag font-mono">01 // TARGETING</div>
            <div className="stage-card">
              <div className="card-title font-mono">CAMPAIGN: B2B LEADS</div>
              <div className="card-item font-mono">INDUSTRY: SaaS & Enterprise</div>
              <div className="card-item font-mono">KEYWORD: "Operations Software"</div>
              <div className="card-item text-green font-mono">STATUS: 42 POSTS INDEXED</div>
            </div>
          </div>

          <div className="pipeline-arrow font-mono">→</div>

          <div className="pipeline-stage stage-queue">
            <div className="stage-tag font-mono">02 // RATE-LIMIT QUEUE</div>
            <div className="stage-card active-card">
              <div className="card-title font-mono">ASYNC WORKER POOL</div>
              <div className="card-item font-mono">CONCURRENCY: 3 THREADS</div>
              <div className="card-item font-mono">JITTER: 120s – 340s RANDOM</div>
              <div className="card-item text-orange font-mono">ACTIVE QUEUE: 18 PENDING</div>
            </div>
          </div>

          <div className="pipeline-arrow font-mono">→</div>

          <div className="pipeline-stage stage-analytics">
            <div className="stage-tag font-mono">03 // ENGAGEMENT HUD</div>
            <div className="stage-card">
              <div className="card-title font-mono">EXECUTION METRICS</div>
              <div className="card-item font-mono">SUCCESS RATE: 99.8%</div>
              <div className="card-item font-mono">DAILY SAVED: 3.5 HOURS</div>
              <div className="card-item text-green font-mono">TOKEN: JWT ENCRYPTED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
