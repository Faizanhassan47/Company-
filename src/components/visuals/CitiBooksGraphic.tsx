import React from 'react';

export const CitiBooksGraphic: React.FC = () => {
  return (
    <div className="system-graphic citi-books-graphic">
      {/* Top Banner */}
      <div className="ledger-header">
        <div className="ledger-title-group">
          <div className="ledger-tag font-mono">FINANCIAL CORE // DOUBLE-ENTRY LEDGER</div>
          <div className="ledger-subtitle">ACID General Journal & Multi-Currency Ledger</div>
        </div>
        <div className="ledger-balance-status font-mono">
          <span className="dot dot-green"></span>
          <span>TRIAL BALANCE BALANCED (0.00 DRIFT)</span>
        </div>
      </div>

      {/* Financial Numbers Matrix */}
      <div className="ledger-kpi-grid">
        <div className="kpi-block">
          <div className="kpi-lbl font-mono">MONTHLY REVENUE</div>
          <div className="kpi-amount font-mono">$184,920.50</div>
          <div className="kpi-change text-green font-mono">↑ +18.4% vs Q1</div>
        </div>
        <div className="kpi-block">
          <div className="kpi-lbl font-mono">ACCOUNTS RECEIVABLE</div>
          <div className="kpi-amount font-mono">$42,300.00</div>
          <div className="kpi-change text-orange font-mono">4 DUE THIS WEEK</div>
        </div>
        <div className="kpi-block">
          <div className="kpi-lbl font-mono">NET CASH FLOW</div>
          <div className="kpi-amount font-mono">$68,140.20</div>
          <div className="kpi-change text-parchment font-mono">AUDITED REAL-TIME</div>
        </div>
      </div>

      {/* Ledger Journal Entries */}
      <div className="journal-table-wrapper">
        <table className="journal-table font-mono">
          <thead>
            <tr>
              <th>VOUCHER</th>
              <th>ACCOUNT NAME</th>
              <th>MEMO / TRANSACTION</th>
              <th>DEBIT ($)</th>
              <th>CREDIT ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#JV-9081</td>
              <td>1010 — Cash & Bank Holdings</td>
              <td>Client Retainer — Invoice #9910</td>
              <td className="text-green">14,500.00</td>
              <td>—</td>
            </tr>
            <tr>
              <td>#JV-9081</td>
              <td>4010 — Software Consulting Revenue</td>
              <td>Earned Milestone Phase 2</td>
              <td>—</td>
              <td className="text-orange">14,500.00</td>
            </tr>
            <tr>
              <td>#JV-9082</td>
              <td>5020 — Cloud Infrastructure Host</td>
              <td>Monthly Dedicated Compute Tier</td>
              <td className="text-green">1,840.00</td>
              <td>—</td>
            </tr>
            <tr>
              <td>#JV-9082</td>
              <td>2010 — Accounts Payable</td>
              <td>Compute Provider Auto-Charge</td>
              <td>—</td>
              <td className="text-orange">1,840.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-right">TOTAL BALANCED SUM:</td>
              <td className="text-green font-bold">$16,340.00</td>
              <td className="text-orange font-bold">$16,340.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
