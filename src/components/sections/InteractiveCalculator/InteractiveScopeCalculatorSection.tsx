import React, { useState, useMemo } from 'react';
import { 
  Calculator, Check, AlertCircle, Share2, ArrowRight, GitMerge, FileCode2, TestTube2, LayoutGrid
} from 'lucide-react';
import './InteractiveScopeCalculatorSection.css';

// Base pricing config (extremely low / startup pricing as requested)
const PRICING = {
  platforms: {
    web: { min: 150, max: 250, weeks: 2 },
    mobile: { min: 200, max: 350, weeks: 3 },
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
    audit: { min: 50, max: 100, weeks: 1 }
  }
};

const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  PKR: { symbol: 'Rs ', rate: 278 }
};

type Currency = keyof typeof CURRENCY_RATES;

export const InteractiveScopeCalculatorSection: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  
  // State for selections
  const [platforms, setPlatforms] = useState({
    web: true, mobile: false, erp: false, sap: false, wp: false
  });
  
  const [features, setFeatures] = useState({
    rbac: true, offline: false, realtime: false, bi: false, hardware: false, audit: false
  });

  const [cadence, setCadence] = useState<'standard' | 'expedited'>('standard');

  const togglePlatform = (key: keyof typeof platforms) => {
    setPlatforms(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFeature = (key: keyof typeof features) => {
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
                <button className="cec-btn-primary">
                  ATTACH ESTIMATES TO INQUIRY <ArrowRight size={16}/>
                </button>
                <button className="cec-btn-secondary">
                  <Share2 size={14}/> COPY ESTIMATE SUMMARY
                </button>
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
