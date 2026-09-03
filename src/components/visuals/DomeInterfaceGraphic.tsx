import React from 'react';

export const DomeInterfaceGraphic: React.FC = () => {
  return (
    <div className="system-graphic dome-graphic">
      {/* Top Window Bar */}
      <div className="graphic-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">DOME Enterprise Portal // Logistics, ERP & Invoicing Platform</div>
        <div className="window-status">
          <span className="status-indicator"></span>
          <span className="status-text font-mono">RBAC ACTIVE (TIER-1)</span>
        </div>
      </div>

      {/* Main Interface Layout */}
      <div className="graphic-body">
        {/* Sidebar Nav */}
        <div className="graphic-sidebar">
          <div className="sidebar-brand">
            <span className="brand-dot"></span>
            <span>DOME ERP</span>
          </div>
          <div className="sidebar-group">
            <div className="sidebar-label font-mono">MODULES</div>
            <div className="sidebar-item active">
              <span className="sidebar-icon">❖</span> Operations Hub
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">▤</span> Procurement
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">◈</span> Logistics & Fleet
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">◓</span> HR & Payroll
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">▥</span> Financial Ledger
            </div>
          </div>
          <div className="sidebar-footer">
            <span className="user-avatar font-mono">TK</span>
            <div className="user-meta">
              <div className="user-name">Tekmora Admin</div>
              <div className="user-role font-mono">Enterprise Lead</div>
            </div>
          </div>
        </div>

        {/* Central Content Board */}
        <div className="graphic-content">
          {/* Top Metric Bar */}
          <div className="metric-row">
            <div className="metric-box">
              <div className="metric-label font-mono">MODULES</div>
              <div className="metric-val font-mono">07 <span className="metric-unit">ACTIVE</span></div>
              <div className="metric-trend text-green font-mono">↑ 100% HEALTHY</div>
            </div>
            <div className="metric-box">
              <div className="metric-label font-mono">TRANSACTIONS</div>
              <div className="metric-val font-mono">14,820</div>
              <div className="metric-trend text-orange font-mono">REAL-TIME SYNC</div>
            </div>
            <div className="metric-box">
              <div className="metric-label font-mono">QUERY LATENCY</div>
              <div className="metric-val font-mono">142 <span className="metric-unit">MS</span></div>
              <div className="metric-trend text-green font-mono">INDEX OPTIMIZED</div>
            </div>
            <div className="metric-box">
              <div className="metric-label font-mono">PERSONNEL</div>
              <div className="metric-val font-mono">250+</div>
              <div className="metric-trend text-parchment font-mono">ACROSS 4 HUBS</div>
            </div>
          </div>

          {/* Operational Data Table */}
          <div className="data-table-card">
            <div className="table-header-bar">
              <div className="table-title">Cross-Department Operations & Ledger Dispatches</div>
              <div className="table-actions">
                <span className="table-btn font-mono">FILTER</span>
                <span className="table-btn export-btn font-mono">EXPORT CSV</span>
              </div>
            </div>

            <table className="mini-table">
              <thead>
                <tr>
                  <th>REF ID</th>
                  <th>DEPARTMENT</th>
                  <th>DESTINATION / ENTITY</th>
                  <th>VALUE</th>
                  <th>APPROVAL STATUS</th>
                  <th>AUDIT TRAIL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono">#INV-89241</td>
                  <td>Procurement</td>
                  <td>North Regional Depot</td>
                  <td className="font-mono">$48,250.00</td>
                  <td><span className="status-pill status-pill-success">COMMITTED</span></td>
                  <td className="font-mono text-dim">VERIFIED BY SAP</td>
                </tr>
                <tr>
                  <td className="font-mono">#LOG-38910</td>
                  <td>Logistics</td>
                  <td>Terminal 03 Dispatch</td>
                  <td className="font-mono">$12,400.00</td>
                  <td><span className="status-pill status-pill-warning">IN TRANSIT</span></td>
                  <td className="font-mono text-dim">GPS CONFIRMED</td>
                </tr>
                <tr>
                  <td className="font-mono">#HR-10928</td>
                  <td>Operations</td>
                  <td>Shift Roster Q3 Handover</td>
                  <td className="font-mono">—</td>
                  <td><span className="status-pill status-pill-success">APPROVED</span></td>
                  <td className="font-mono text-dim">MGR SIGNED</td>
                </tr>
                <tr>
                  <td className="font-mono">#INV-89242</td>
                  <td>Commercial Sales</td>
                  <td>Apex Bulk Distribution</td>
                  <td className="font-mono">$96,780.00</td>
                  <td><span className="status-pill status-pill-orange">PROCESSING</span></td>
                  <td className="font-mono text-dim">LEDGER POSTED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
