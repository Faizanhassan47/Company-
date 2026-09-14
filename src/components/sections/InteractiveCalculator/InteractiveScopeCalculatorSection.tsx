import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, Check, AlertCircle, Share2, ArrowRight, GitMerge, FileCode2, LayoutGrid, Download, CheckCheck, Sparkles
} from 'lucide-react';
import './InteractiveScopeCalculatorSection.css';

// Base pricing config (extremely low / startup pricing as requested)
const PRICING = {
  platforms: {
    web: { min: 250, max: 400, weeks: 2 },
    mobile: { min: 300, max: 650, weeks: 3 },
    erp: { min: 300, max: 500, weeks: 4 },
    sap: { min: 400, max: 600, weeks: 4 },
    wp: { min: 100, max: 200, weeks: 1 }
  },
  features: {
    rbac: { min: 50, max: 80, weeks: 1 },
    offline: { min: 80, max: 120, weeks: 1 },
    realtime: { min: 100, max: 150, weeks: 1 },
    bi: { min: 120, max: 180, weeks: 2 },
    hardware: { min: 150, max: 250, weeks: 2 },
    audit: { min: 50, max: 100, weeks: 1 },
    gps: { min: 120, max: 220, weeks: 2 },
    chatbot: { min: 100, max: 200, weeks: 2 },
    payments: { min: 100, max: 180, weeks: 1 },
    notifications: { min: 80, max: 140, weeks: 1 },
    integrations: { min: 100, max: 200, weeks: 2 },
    documents: { min: 120, max: 220, weeks: 2 },
    cloudMedia: { min: 80, max: 150, weeks: 1 }
  }
};

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  PKR: { symbol: 'Rs ', rate: 278 }
};

type Currency = keyof typeof CURRENCY_RATES;

const PRESETS = [
  {
    id: 'mvp',
    badge: '🚀 FAST MVP',
    title: 'SaaS MVP Launch',
    desc: 'Web App, Auth RBAC, Stripe & Cloud Storage',
    platforms: { web: true, mobile: false, erp: false, sap: false, wp: false },
    features: {
      rbac: true, offline: false, realtime: false, bi: false, hardware: false, audit: false,
      gps: false, chatbot: false, payments: true, notifications: false,
      integrations: false, documents: false, cloudMedia: true
    },
    cadence: 'expedited' as const,
  },
  {
    id: 'erp',
    badge: '🏭 ENTERPRISE',
    title: 'ERP & Logistics Core',
    desc: 'ERP Engine, SAP Sync, Offline Sync & Audit',
    platforms: { web: false, mobile: false, erp: true, sap: true, wp: false },
    features: {
      rbac: true, offline: true, realtime: true, bi: true, hardware: false, audit: true,
      gps: false, chatbot: false, payments: false, notifications: false,
      integrations: true, documents: true, cloudMedia: false
    },
    cadence: 'standard' as const,
  },
  {
    id: 'field',
    badge: '📱 FIELD OPS',
    title: 'Field Ops & Mobile',
    desc: 'iOS/Android App, GPS Geofencing & Offline Sync',
    platforms: { web: false, mobile: true, erp: false, sap: false, wp: false },
    features: {
      rbac: true, offline: true, realtime: false, bi: false, hardware: true, audit: false,
      gps: true, chatbot: false, payments: false, notifications: true,
      integrations: false, documents: false, cloudMedia: false
    },
    cadence: 'standard' as const,
  },
  {
    id: 'ai',
    badge: '🤖 AI AGENTS',
    title: 'AI Automation Hub',
    desc: 'Web Hub, Autonomous Agents, OCR & APIs',
    platforms: { web: true, mobile: false, erp: false, sap: false, wp: false },
    features: {
      rbac: true, offline: false, realtime: true, bi: true, hardware: false, audit: true,
      gps: false, chatbot: true, payments: false, notifications: true,
      integrations: true, documents: true, cloudMedia: false
    },
    cadence: 'standard' as const,
  }
];

export const InteractiveScopeCalculatorSection: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [activePreset, setActivePreset] = useState<string | null>('mvp');
  
  // State for selections
  const [platforms, setPlatforms] = useState({
    web: true, mobile: false, erp: false, sap: false, wp: false
  });
  
  const [features, setFeatures] = useState({
    rbac: true, offline: false, realtime: false, bi: false, hardware: false, audit: false,
    gps: false, chatbot: false, payments: true, notifications: false,
    integrations: false, documents: false, cloudMedia: true
  });

  const [cadence, setCadence] = useState<'standard' | 'expedited'>('expedited');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const applyPreset = (preset: typeof PRESETS[number]) => {
    setActivePreset(preset.id);
    setPlatforms(preset.platforms);
    setFeatures(preset.features);
    setCadence(preset.cadence);
  };

  const togglePlatform = (key: keyof typeof platforms) => {
    setActivePreset(null);
    setPlatforms(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFeature = (key: keyof typeof features) => {
    setActivePreset(null);
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate totals
  const estimate = useMemo(() => {
    let minCost = 0;
    let maxCost = 0;
    let baseWeeks = 0;
    let stack = ['TypeScript'];
    
    // Sum platforms
    if (platforms.web) { minCost += PRICING.platforms.web.min; maxCost += PRICING.platforms.web.max; baseWeeks += PRICING.platforms.web.weeks; stack.push('React 19', 'Next.js'); }
    if (platforms.mobile) { minCost += PRICING.platforms.mobile.min; maxCost += PRICING.platforms.mobile.max; baseWeeks += PRICING.platforms.mobile.weeks; stack.push('React Native'); }
    if (platforms.erp) { minCost += PRICING.platforms.erp.min; maxCost += PRICING.platforms.erp.max; baseWeeks += PRICING.platforms.erp.weeks; stack.push('Node.js', 'PostgreSQL'); }
    if (platforms.sap) { minCost += PRICING.platforms.sap.min; maxCost += PRICING.platforms.sap.max; baseWeeks += PRICING.platforms.sap.weeks; stack.push('SAP B1 SL'); }
    if (platforms.wp) { minCost += PRICING.platforms.wp.min; maxCost += PRICING.platforms.wp.max; baseWeeks += PRICING.platforms.wp.weeks; stack.push('Headless WP'); }

    // Sum features
    if (features.rbac) { minCost += PRICING.features.rbac.min; maxCost += PRICING.features.rbac.max; baseWeeks += PRICING.features.rbac.weeks; stack.push('JWT Security'); }
    if (features.offline) { minCost += PRICING.features.offline.min; maxCost += PRICING.features.offline.max; baseWeeks += PRICING.features.offline.weeks; stack.push('SQLite Sync'); }
    if (features.realtime) { minCost += PRICING.features.realtime.min; maxCost += PRICING.features.realtime.max; baseWeeks += PRICING.features.realtime.weeks; stack.push('WebSockets'); }
    if (features.bi) { minCost += PRICING.features.bi.min; maxCost += PRICING.features.bi.max; baseWeeks += PRICING.features.bi.weeks; stack.push('D3.js'); }
    if (features.hardware) { minCost += PRICING.features.hardware.min; maxCost += PRICING.features.hardware.max; baseWeeks += PRICING.features.hardware.weeks; stack.push('BLE APIs'); }
    if (features.audit) { minCost += PRICING.features.audit.min; maxCost += PRICING.features.audit.max; baseWeeks += PRICING.features.audit.weeks; stack.push('Event Log'); }
    if (features.gps) { minCost += PRICING.features.gps.min; maxCost += PRICING.features.gps.max; baseWeeks += PRICING.features.gps.weeks; stack.push('GPS & Maps'); }
    if (features.chatbot) { minCost += PRICING.features.chatbot.min; maxCost += PRICING.features.chatbot.max; baseWeeks += PRICING.features.chatbot.weeks; stack.push('AI Assistant'); }
    if (features.payments) { minCost += PRICING.features.payments.min; maxCost += PRICING.features.payments.max; baseWeeks += PRICING.features.payments.weeks; stack.push('Stripe'); }
    if (features.notifications) { minCost += PRICING.features.notifications.min; maxCost += PRICING.features.notifications.max; baseWeeks += PRICING.features.notifications.weeks; stack.push('Push & SMS'); }
    if (features.integrations) { minCost += PRICING.features.integrations.min; maxCost += PRICING.features.integrations.max; baseWeeks += PRICING.features.integrations.weeks; stack.push('External APIs'); }
    if (features.documents) { minCost += PRICING.features.documents.min; maxCost += PRICING.features.documents.max; baseWeeks += PRICING.features.documents.weeks; stack.push('OCR & E-Sign'); }
    if (features.cloudMedia) { minCost += PRICING.features.cloudMedia.min; maxCost += PRICING.features.cloudMedia.max; baseWeeks += PRICING.features.cloudMedia.weeks; stack.push('Cloud Storage'); }

    // Fallback if nothing selected
    if (minCost === 0) {
      minCost = 50; maxCost = 100; baseWeeks = 1; stack = ['Advisory'];
    }

    // Apply cadence multiplier
    if (cadence === 'expedited') {
      minCost = Math.round(minCost * 1.5);
      maxCost = Math.round(maxCost * 1.5);
      baseWeeks = Math.max(1, Math.round(baseWeeks * 0.6));
    }

    // Complexity label
    let complexity = 'Standard';
    if (baseWeeks > 6) complexity = 'Advanced';
    if (baseWeeks > 12) complexity = 'Enterprise';

    // Format currency
    const rate = CURRENCY_RATES[currency].rate;
    const sym = CURRENCY_RATES[currency].symbol;
    
    const fmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
    const formattedMin = `${sym}${fmt.format(minCost * rate)}`;
    const formattedMax = `${sym}${fmt.format(maxCost * rate)}`;

    // Unique stack
    stack = Array.from(new Set(stack)).slice(0, 5);

    return {
      costStr: `${formattedMin} — ${formattedMax}`,
      weeksStr: cadence === 'expedited' ? `${baseWeeks} Weeks (Fast)` : `${baseWeeks}-${baseWeeks+2} Weeks`,
      complexity,
      stack,
      platformCount: Object.values(platforms).filter(Boolean).length,
      featureCount: Object.values(features).filter(Boolean).length
    };
  }, [platforms, features, cadence, currency]);

  const handleAttachInquiry = () => {
    navigate(`/contact?scope=${encodeURIComponent(estimate.costStr)}&timeline=${encodeURIComponent(estimate.weeksStr)}&tier=${encodeURIComponent(estimate.complexity)}`);
  };

  const handleCopySummary = () => {
    const summaryText = `TEKMORA SOLUTIONS // ARCHITECTURAL ESTIMATE\nDelivery Window: ${estimate.weeksStr}\nInvestment Bracket: ${estimate.costStr}\nComplexity: ${estimate.complexity}\nRecommended Stack: ${estimate.stack.join(', ')}\nCadence: ${cadence.toUpperCase()}\nCurrency: ${currency}\nGenerated via https://tekmorasolution.com`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportBrief = () => {
    const platformLabels: Record<string, string> = {
      web: 'Custom Web Platform',
      mobile: 'Mobile App (iOS/Android)',
      erp: 'Enterprise ERP System',
      sap: 'SAP Business One Integration',
      wp: 'Headless Web Solution'
    };

    const selectedPlatformsList = Object.entries(platforms)
      .filter(([, v]) => v)
      .map(([k]) => platformLabels[k] || k.toUpperCase())
      .join(', ') || 'Custom Architecture';

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tekmora Solutions - Formal Architectural Scope Brief</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 40px; color: #0f172a; line-height: 1.5; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px; }
    .brand { font-size: 22px; font-weight: 800; letter-spacing: 0.05em; color: #ea580c; }
    .meta { font-family: monospace; font-size: 11px; color: #475569; text-align: right; }
    .title { font-size: 18px; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
    .card { border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; background: #f8fafc; }
    .card h4 { margin: 0 0 8px; font-size: 11px; text-transform: uppercase; color: #64748b; font-family: monospace; }
    .val { font-size: 18px; font-weight: 700; color: #0f172a; }
    .section { margin: 24px 0; }
    .section h3 { font-size: 12px; font-family: monospace; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 10px; color: #334155; }
    .tags span { display: inline-block; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-family: monospace; margin: 0 4px 4px 0; }
    .footer { margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 14px; font-size: 10px; color: #64748b; font-family: monospace; }
    @media print { body { margin: 20px; } button { display: none; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="brand">TEKMORA SOLUTIONS</div>
      <div style="font-size: 12px; color: #475569;">Enterprise Software Engineering & Architecture Studio</div>
    </div>
    <div class="meta">
      DISPATCH: FORMAL ARCHITECTURAL BRIEF<br>
      REF: TKM-SCOPE-SPEC<br>
      URL: tekmorasolution.com
    </div>
  </div>

  <div class="title">Architectural Scope & Investment Specification</div>
  <p style="font-size: 13px; color: #475569;">Prepared for corporate procurement, engineering review, and statement-of-work baseline estimation.</p>

  <div class="grid">
    <div class="card">
      <h4>ESTIMATED DELIVERY WINDOW</h4>
      <div class="val">${estimate.weeksStr}</div>
      <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Cadence: ${cadence.toUpperCase()}</div>
    </div>
    <div class="card">
      <h4>INVESTMENT BRACKET (${currency})</h4>
      <div class="val">${estimate.costStr}</div>
      <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Complexity Tier: ${estimate.complexity}</div>
    </div>
  </div>

  <div class="section">
    <h3>01 // INCLUDED ARCHITECTURAL DOMAINS</h3>
    <p style="font-size: 12px; margin: 0; color: #0f172a;">${selectedPlatformsList}</p>
  </div>

  <div class="section">
    <h3>02 // SPECIFIED CAPABILITIES & MODULES</h3>
    <div class="tags">
      ${Object.entries(features).filter(([, v]) => v).map(([k]) => `<span>${k.toUpperCase()}</span>`).join(' ')}
    </div>
  </div>

  <div class="section">
    <h3>03 // RECOMMENDED PRODUCTION STACK</h3>
    <div class="tags">
      ${estimate.stack.map(s => `<span>${s}</span>`).join(' ')}
    </div>
  </div>

  <div class="section">
    <h3>04 // EXECUTION MILESTONES</h3>
    <p style="font-size: 11px; color: #475569;">
      <strong>Phase 1: Discovery & Architecture</strong> — Schema, RBAC, API Spec.<br>
      <strong>Phase 2: Engine Sprint</strong> — UI & Backend Pipelines.<br>
      <strong>Phase 3: Integrations & Sync</strong> — SAP Service Layer, WebSockets, DB validation.<br>
      <strong>Phase 4: QA & Production Hardening</strong> — Multi-region staging, automated failover, load testing.
    </p>
  </div>

  <div class="footer">
    TEKMORA SOLUTIONS // CONFIDENTIAL & PROPRIETARY // MUTUAL NDA COMPLIANT // CONTACT: info@tekmorasolution.com
  </div>

  <script>
    window.onload = function() { window.print(); };
  </script>
</body>
</html>
    `);
    printWindow.document.close();
  };

  return (
    <section className="interactive-calc-section">
      <div className="calc-container">
        
        {/* Header */}
        <div className="calc-header-row">
          <div className="calc-meta">
            <Calculator size={16} className="calc-meta-icon" />
            <span>INTERACTIVE SCOPE & BUDGET CALCULATOR</span>
          </div>
          
          <div className="calc-currency-toggle">
            <span className="cc-label">CURRENCY:</span>
            <div className="cc-buttons">
              {(Object.keys(CURRENCY_RATES) as Currency[]).map(c => (
                <button 
                  key={c} 
                  className={currency === c ? 'active' : ''}
                  onClick={() => setCurrency(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h2 className="calc-headline font-display">
          ESTIMATE TIMELINE & ARCHITECTURAL SCOPE
        </h2>
        <p className="calc-subtitle">
          Select target platforms, technical capabilities, and execution velocity to generate live milestone timelines and highly competitive budget brackets.
        </p>

        {/* Quick Enterprise Architecture Presets */}
        <div className="calc-presets-container">
          <div className="calc-presets-header font-mono">
            <Sparkles size={13} className="text-orange" />
            <span>CURATED ARCHITECTURE PRESETS (1-CLICK CONFIG):</span>
          </div>
          <div className="calc-presets-grid">
            {PRESETS.map(preset => (
              <button
                key={preset.id}
                type="button"
                className={`calc-preset-card spotlight-card ${activePreset === preset.id ? 'is-active' : ''}`}
                onClick={() => applyPreset(preset)}
              >
                <div className="preset-card-top font-mono">
                  <span className="preset-badge">{preset.badge}</span>
                  {activePreset === preset.id && <span className="preset-active-dot" />}
                </div>
                <div className="preset-title">{preset.title}</div>
                <div className="preset-desc font-mono">{preset.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="calc-main-split">
          
          {/* Left Column: Form Options */}
          <div className="calc-options-col">
            
            {/* Target Platforms */}
            <div className="calc-option-group">
              <div className="cog-header">
                <span className="cog-title">01 // TARGET PLATFORMS</span>
                <span className="cog-count">{estimate.platformCount} SELECTED</span>
              </div>
              <div className="cog-list">
                <label className={`calc-checkbox ${platforms.web ? 'active' : ''}`}>
                  <input type="checkbox" checked={platforms.web} onChange={() => togglePlatform('web')} />
                  <div className="cc-box">{platforms.web && <Check size={14} />}</div>
                  <span className="cc-text">Web Platform (React / Next.js)</span>
                </label>
                <label className={`calc-checkbox ${platforms.mobile ? 'active' : ''}`}>
                  <input type="checkbox" checked={platforms.mobile} onChange={() => togglePlatform('mobile')} />
                  <div className="cc-box">{platforms.mobile && <Check size={14} />}</div>
                  <span className="cc-text">Mobile App (iOS & Android)</span>
                </label>
                <label className={`calc-checkbox ${platforms.erp ? 'active' : ''}`}>
                  <input type="checkbox" checked={platforms.erp} onChange={() => togglePlatform('erp')} />
                  <div className="cc-box">{platforms.erp && <Check size={14} />}</div>
                  <span className="cc-text">Enterprise ERP / Portal</span>
                </label>
                <label className={`calc-checkbox ${platforms.sap ? 'active' : ''}`}>
                  <input type="checkbox" checked={platforms.sap} onChange={() => togglePlatform('sap')} />
                  <div className="cc-box">{platforms.sap && <Check size={14} />}</div>
                  <span className="cc-text">SAP Business One / Warehouse</span>
                </label>
                <label className={`calc-checkbox ${platforms.wp ? 'active' : ''}`}>
                  <input type="checkbox" checked={platforms.wp} onChange={() => togglePlatform('wp')} />
                  <div className="cc-box">{platforms.wp && <Check size={14} />}</div>
                  <span className="cc-text">Custom WordPress / Headless</span>
                </label>
              </div>
            </div>

            {/* Advanced Capabilities */}
            <div className="calc-option-group">
              <div className="cog-header">
                <span className="cog-title">02 // ADVANCED SYSTEM CAPABILITIES</span>
                <span className="cog-count">{estimate.featureCount} SELECTED</span>
              </div>
              <div className="cog-list">
                <label className={`calc-checkbox ${features.rbac ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.rbac} onChange={() => toggleFeature('rbac')} />
                  <div className="cc-box">{features.rbac && <Check size={14} />}</div>
                  <span className="cc-text">Role-Based Access Control (RBAC)</span>
                </label>
                <label className={`calc-checkbox ${features.offline ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.offline} onChange={() => toggleFeature('offline')} />
                  <div className="cc-box">{features.offline && <Check size={14} />}</div>
                  <span className="cc-text">Offline Sync & Local SQLite</span>
                </label>
                <label className={`calc-checkbox ${features.realtime ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.realtime} onChange={() => toggleFeature('realtime')} />
                  <div className="cc-box">{features.realtime && <Check size={14} />}</div>
                  <span className="cc-text">Real-Time WebSockets & Telemetry</span>
                </label>
                <label className={`calc-checkbox ${features.bi ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.bi} onChange={() => toggleFeature('bi')} />
                  <div className="cc-box">{features.bi && <Check size={14} />}</div>
                  <span className="cc-text">Custom BI & Reporting Engine</span>
                </label>
                <label className={`calc-checkbox ${features.hardware ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.hardware} onChange={() => toggleFeature('hardware')} />
                  <div className="cc-box">{features.hardware && <Check size={14} />}</div>
                  <span className="cc-text">Hardware / Thermal Scanner Sync</span>
                </label>
                <label className={`calc-checkbox ${features.audit ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.audit} onChange={() => toggleFeature('audit')} />
                  <div className="cc-box">{features.audit && <Check size={14} />}</div>
                  <span className="cc-text">Audit Logging & Compliance</span>
                </label>
                <label className={`calc-checkbox ${features.gps ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.gps} onChange={() => toggleFeature('gps')} />
                  <div className="cc-box">{features.gps && <Check size={14} />}</div>
                  <span className="cc-text">GPS Tracking, Geofencing & Route Maps</span>
                </label>
                <label className={`calc-checkbox ${features.chatbot ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.chatbot} onChange={() => toggleFeature('chatbot')} />
                  <div className="cc-box">{features.chatbot && <Check size={14} />}</div>
                  <span className="cc-text">AI Chatbot & Virtual Assistant Integration</span>
                </label>
                <label className={`calc-checkbox ${features.payments ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.payments} onChange={() => toggleFeature('payments')} />
                  <div className="cc-box">{features.payments && <Check size={14} />}</div>
                  <span className="cc-text">Online Payments & Subscription Billing</span>
                </label>
                <label className={`calc-checkbox ${features.notifications ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.notifications} onChange={() => toggleFeature('notifications')} />
                  <div className="cc-box">{features.notifications && <Check size={14} />}</div>
                  <span className="cc-text">Push, SMS, WhatsApp & Email Notifications</span>
                </label>
                <label className={`calc-checkbox ${features.integrations ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.integrations} onChange={() => toggleFeature('integrations')} />
                  <div className="cc-box">{features.integrations && <Check size={14} />}</div>
                  <span className="cc-text">CRM, ERP & Third-Party API Integrations</span>
                </label>
                <label className={`calc-checkbox ${features.documents ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.documents} onChange={() => toggleFeature('documents')} />
                  <div className="cc-box">{features.documents && <Check size={14} />}</div>
                  <span className="cc-text">Document OCR, PDF Reports & E-Signatures</span>
                </label>
                <label className={`calc-checkbox ${features.cloudMedia ? 'active' : ''}`}>
                  <input type="checkbox" checked={features.cloudMedia} onChange={() => toggleFeature('cloudMedia')} />
                  <div className="cc-box">{features.cloudMedia && <Check size={14} />}</div>
                  <span className="cc-text">Cloud Storage, File Uploads & Media Processing</span>
                </label>
              </div>
            </div>

            {/* Execution Cadence */}
            <div className="calc-option-group">
              <div className="cog-header">
                <span className="cog-title">03 // EXECUTION CADENCE</span>
              </div>
              <div className="cog-list">
                <label className={`calc-radio ${cadence === 'standard' ? 'active' : ''}`}>
                  <input type="radio" name="cadence" checked={cadence === 'standard'} onChange={() => setCadence('standard')} />
                  <div className="cr-circle">{cadence === 'standard' && <div className="cr-dot"></div>}</div>
                  <span className="cr-text">Standard Delivery (Bi-Weekly Milestones)</span>
                </label>
                <label className={`calc-radio ${cadence === 'expedited' ? 'active' : ''}`}>
                  <input type="radio" name="cadence" checked={cadence === 'expedited'} onChange={() => setCadence('expedited')} />
                  <div className="cr-circle">{cadence === 'expedited' && <div className="cr-dot"></div>}</div>
                  <span className="cr-text">Expedited / Dedicated Engineering Sprint (+50%)</span>
                </label>
              </div>
            </div>

            {/* Milestone Blueprint */}
            <div className="calc-blueprint">
               <div className="cb-header">
                 <GitMerge size={14} className="cb-icon"/> PROJECT MILESTONE BLUEPRINT
               </div>
               <div className="cb-timeline">
                 <div className="cb-step">
                   <div className="cb-step-num">01</div>
                   <div className="cb-step-text"><strong>Discovery & Architecture</strong><br/><span>Schema, RBAC, API Spec</span></div>
                 </div>
                 <div className="cb-line"></div>
                 <div className="cb-step">
                   <div className="cb-step-num">02</div>
                   <div className="cb-step-text"><strong>Engine Sprint</strong><br/><span>UI & Backend Pipelines</span></div>
                 </div>
                 <div className="cb-line"></div>
                 <div className="cb-step">
                   <div className="cb-step-num">03</div>
                   <div className="cb-step-text"><strong>Integrations & Sync</strong><br/><span>SAP, WebSockets, DB</span></div>
                 </div>
                 <div className="cb-line"></div>
                 <div className="cb-step">
                   <div className="cb-step-num">04</div>
                   <div className="cb-step-text"><strong>QA & Production</strong><br/><span>Load Testing & Deploy</span></div>
                 </div>
               </div>
            </div>

          </div>

          {/* Right Column: Sticky Estimate Panel */}
          <div className="calc-estimate-col">
            <div className="calc-estimate-card">
              
              <div className="cec-header">
                <span className="cec-label">ENGINEERED ESTIMATE</span>
                <span className="cec-badge"><span className="dot"></span> VERIFIED PROTOCOL</span>
              </div>

              <div className="cec-metric">
                <span className="cec-metric-label"><AlertCircle size={12}/> ESTIMATED DELIVERY WINDOW</span>
                <div className="cec-metric-value text-orange">{estimate.weeksStr}</div>
              </div>

              <div className="cec-metric">
                <span className="cec-metric-label text-green">$ INDICATIVE INVESTMENT BRACKET</span>
                <div className="cec-metric-value text-green">{estimate.costStr}</div>
              </div>

              <div className="cec-metric">
                <span className="cec-metric-label"><LayoutGrid size={12}/> ARCHITECTURAL COMPLEXITY</span>
                <div className="cec-complexity-pill">
                  <span className={`dot ${estimate.complexity.toLowerCase()}`}></span> {estimate.complexity}
                </div>
              </div>

              <div className="cec-metric">
                <span className="cec-metric-label"><FileCode2 size={12}/> RECOMMENDED PRODUCTION STACK</span>
                <div className="cec-stack-tags">
                  {estimate.stack.map(tech => (
                    <span key={tech} className="cec-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="cec-actions">
                <button
                  type="button"
                  className="cec-btn-primary"
                  onClick={handleAttachInquiry}
                >
                  <span>ATTACH ESTIMATES TO INQUIRY</span>
                  <ArrowRight size={16}/>
                </button>
                <div className="cec-action-row">
                  <button
                    type="button"
                    className="cec-btn-secondary"
                    onClick={handleCopySummary}
                    title="Copy text summary to clipboard"
                  >
                    {copied ? <CheckCheck size={14} className="text-green" /> : <Share2 size={14}/>}
                    <span>{copied ? 'COPIED!' : 'COPY SUMMARY'}</span>
                  </button>
                  <button
                    type="button"
                    className="cec-btn-secondary"
                    onClick={handleExportBrief}
                    title="Export printable executive PDF brief"
                  >
                    <Download size={14} className="text-orange" />
                    <span>EXPORT BRIEF (PDF)</span>
                  </button>
                </div>
              </div>

              <div className="cec-footer">
                Estimates based on aggressive startup pricing models. Fixed SOW provided after discovery workshop.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
