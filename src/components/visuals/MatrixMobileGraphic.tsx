import React from 'react';

export const MatrixMobileGraphic: React.FC = () => {
  return (
    <div className="system-graphic matrix-mobile-graphic">
      <div className="mobile-dual-container">
        {/* Device 1: Technician Work Order */}
        <div className="mobile-frame frame-primary">
          <div className="mobile-notch">
            <span className="notch-speaker"></span>
            <span className="notch-camera"></span>
          </div>

          <div className="mobile-screen">
            <div className="mobile-status-bar">
              <span>09:41</span>
              <span className="sync-badge">
                <span className="sync-dot"></span> OFFLINE SYNC (SQLITE)
              </span>
              <span>100% ⚡</span>
            </div>

            <div className="mobile-app-header">
              <div>
                <div className="mobile-app-label font-mono">WORK ORDER #WO-4089</div>
                <div className="mobile-app-title">Turbine Pump Valve 04</div>
              </div>
              <div className="priority-pill font-mono">HIGH PRIORITY</div>
            </div>

            <div className="mobile-card">
              <div className="card-sub font-mono">SITE LOCATION</div>
              <div className="card-main">Industrial Processing Plant Alpha</div>
              <div className="card-coord font-mono">LAT: 24.8607° N, LON: 67.0011° E</div>
            </div>

            <div className="mobile-checklist font-mono">
              <div className="checklist-title">REQUIRED PROTOCOLS (3/4)</div>
              <div className="check-item done">
                <span className="check-box">✓</span> Pressure Seal Tested (420 PSI)
              </div>
              <div className="check-item done">
                <span className="check-box">✓</span> O-Ring Replacement (#OR-881)
              </div>
              <div className="check-item done">
                <span className="check-box">✓</span> High-Res Photo Uploaded
              </div>
              <div className="check-item pending">
                <span className="check-box">○</span> Customer Signature Capture
              </div>
            </div>

            {/* Signature Area */}
            <div className="signature-area">
              <div className="sig-label font-mono">CUSTOMER SIGN-OFF CAPTURE</div>
              <div className="sig-line">
                <svg viewBox="0 0 200 40" className="sig-svg">
                  <path d="M10 25 Q 35 5, 60 28 T 110 15 T 150 30 T 190 20" stroke="var(--accent-orange)" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="sig-footer font-mono">TIMESTAMP: 2024-04-18 09:38:12 UTC</div>
            </div>

            <button className="mobile-submit-btn font-mono">SUBMIT & SYNC TO DISPATCH ↗</button>
          </div>
        </div>

        {/* Device 2: Dispatcher Live Map View */}
        <div className="mobile-frame frame-secondary">
          <div className="mobile-notch">
            <span className="notch-speaker"></span>
            <span className="notch-camera"></span>
          </div>

          <div className="mobile-screen">
            <div className="mobile-status-bar">
              <span>09:41</span>
              <span className="font-mono">LIVE DISPATCH</span>
              <span>5G</span>
            </div>

            <div className="mobile-map-view">
              <div className="map-grid-lines"></div>
              {/* Radar Pins */}
              <div className="map-pin pin-active" style={{ top: '35%', left: '42%' }}>
                <span className="pin-pulse"></span>
                <span className="pin-dot"></span>
                <span className="pin-label font-mono">TECH #04 (ON-SITE)</span>
              </div>
              <div className="map-pin pin-pending" style={{ top: '65%', left: '70%' }}>
                <span className="pin-dot"></span>
                <span className="pin-label font-mono">TECH #08 (EN-ROUTE)</span>
              </div>

              <div className="map-overlay-info">
                <div className="overlay-title font-mono">ACTIVE FIELD UNITS</div>
                <div className="overlay-val font-mono">18 / 18 ONLINE</div>
                <div className="overlay-desc font-mono">Zero packet loss recorded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
