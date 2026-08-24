import React from 'react';

export const GrnWorkflowGraphic: React.FC = () => {
  return (
    <div className="system-graphic grn-workflow-graphic">
      <div className="workflow-container">
        {/* Step 1: Document OCR Ingestion */}
        <div className="workflow-node node-source">
          <div className="node-badge">STEP 01 // OCR EXTRACTION</div>
          <div className="node-card">
            <div className="doc-icon font-mono">📄 VENDOR_INVOICE.PDF</div>
            <div className="ocr-field">
              <span className="ocr-label">VENDOR:</span>
              <span className="ocr-val">Apex Precision Steel Ltd</span>
            </div>
            <div className="ocr-field">
              <span className="ocr-label">PO REF:</span>
              <span className="ocr-val font-mono">#PO-2024-8841</span>
            </div>
            <div className="ocr-field">
              <span className="ocr-label">BATCH NO:</span>
              <span className="ocr-val font-mono text-orange">LOT-9920-A</span>
            </div>
            <div className="ocr-field">
              <span className="ocr-label">QTY REC:</span>
              <span className="ocr-val font-mono">5,000 PCS</span>
            </div>
            <div className="ocr-status">
              <span className="dot dot-green"></span> OCR PARSE 100% CONFIDENCE
            </div>
          </div>
        </div>

        {/* Connector Line 1 */}
        <div className="workflow-connector">
          <div className="connector-line"></div>
          <div className="connector-tag font-mono">DELTA RECONCILER</div>
          <span className="connector-arrow">→</span>
        </div>

        {/* Step 2: PO Matching & Validation Engine */}
        <div className="workflow-node node-engine">
          <div className="node-badge">STEP 02 // VALIDATION ENGINE</div>
          <div className="node-card highlight-card">
            <div className="engine-title font-mono">RULES VALIDATION ENGINE</div>
            <div className="rule-check passed">
              <span>✓ PO Status: Open & Authorized</span>
            </div>
            <div className="rule-check passed">
              <span>✓ Tolerance Variance: 0.00% within range</span>
            </div>
            <div className="rule-check passed">
              <span>✓ Batch & Expiry Format: Validated</span>
            </div>
            <div className="rule-check passed">
              <span>✓ Receiving Bin: Bay-04 Shelving Allocated</span>
            </div>
            <div className="engine-result">
              <span className="calibration-dot"></span> AUTO-APPROVAL GRANTED
            </div>
          </div>
        </div>

        {/* Connector Line 2 */}
        <div className="workflow-connector">
          <div className="connector-line"></div>
          <div className="connector-tag font-mono">SAP DI API</div>
          <span className="connector-arrow">→</span>
        </div>

        {/* Step 3: SAP Business One Transaction Commit */}
        <div className="workflow-node node-target">
          <div className="node-badge">STEP 03 // SAP B1 COMMIT</div>
          <div className="node-card">
            <div className="sap-header font-mono">SAP BUSINESS ONE // DI API</div>
            <div className="sap-trx font-mono text-orange">DOC_TYPE: GOODS RECEIPT PO</div>
            <div className="sap-docnum font-mono">DOCUMENT NO: #GRPO-900318</div>
            <div className="sap-timestamp font-mono text-dim">COMMITTED: 2024-04-20 11:22:04</div>
            <div className="sap-badge-sync font-mono">
              <span className="dot dot-green"></span> 2-WAY SYNC COMPLETED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
