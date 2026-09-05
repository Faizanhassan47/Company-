import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, Check, Sparkles, Cpu, Layers, ArrowRight, DollarSign, Share2, GitBranch } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';
import './ProjectEstimator.css';

export type CurrencyType = 'USD' | 'EUR' | 'GBP' | 'PKR';

export interface EstimatorSelection {
  platforms: string[];
  modules: string[];
  speed: 'standard' | 'expedited';
  estimatedWeeks: string;
  estimatedBudget: string;
  currency: CurrencyType;
  complexity: 'Standard' | 'Advanced' | 'Enterprise Multi-Tier';
  suggestedStack: string[];
}

interface ProjectEstimatorProps {
  onApplyEstimates?: (selection: EstimatorSelection) => void;
}

const CURRENCY_RATES: Record<CurrencyType, { symbol: string; rate: number; prefix: boolean }> = {
  USD: { symbol: '$', rate: 1, prefix: true },
  EUR: { symbol: '€', rate: 0.92, prefix: true },
  GBP: { symbol: '£', rate: 0.79, prefix: true },
  PKR: { symbol: 'PKR ', rate: 278, prefix: true }
};

const PLATFORM_OPTIONS = [
  { id: 'web', name: 'Web Platform (React / Next.js)', weeks: 3, costUsd: 3500, tech: ['React 19', 'Next.js', 'TypeScript'] },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', weeks: 4, costUsd: 4500, tech: ['React Native', 'Expo'] },
  { id: 'enterprise', name: 'Enterprise ERP / Portal', weeks: 5, costUsd: 6000, tech: ['Node.js', 'Express', 'SQL Server'] },
  { id: 'sap', name: 'SAP Business One / Warehouse', weeks: 4, costUsd: 5500, tech: ['SAP Service Layer', 'DI API'] },
  { id: 'wordpress', name: 'Custom WordPress / Headless', weeks: 2, costUsd: 2200, tech: ['WordPress', 'PHP 8.x'] }
];

const MODULE_OPTIONS = [
  { id: 'rbac', name: 'Role-Based Access Control (RBAC)', weeks: 1, costUsd: 1200, tech: ['JWT Security', 'Permissions Matrix'] },
  { id: 'offline', name: 'Offline Sync & Local SQLite', weeks: 2, costUsd: 2200, tech: ['SQLite Engine', 'Conflict Resolution'] },
  { id: 'realtime', name: 'Real-Time WebSockets & Telemetry', weeks: 1.5, costUsd: 1800, tech: ['WebSocket Stream', 'Redis Pub/Sub'] },
  { id: 'reporting', name: 'Custom BI & Reporting Engine', weeks: 1.5, costUsd: 1600, tech: ['Aggregated SQL', 'Export Pipelines'] },
  { id: 'hardware', name: 'Hardware / Thermal Scanner Sync', weeks: 2, costUsd: 2400, tech: ['ESC/POS Protocols', 'Zebra / Honeywell'] },
  { id: 'audit', name: 'Audit Logging & Compliance', weeks: 1, costUsd: 1200, tech: ['Immutable Logs', 'Data Encryption'] },
  { id: 'ai_ml', name: 'AI & Machine Learning Pipelines', weeks: 3, costUsd: 4500, tech: ['OpenAI / Claude', 'Vector Databases', 'Python Microservices'] },
  { id: 'multi_tenant', name: 'Multi-Tenant SaaS Architecture', weeks: 2.5, costUsd: 3800, tech: ['Data Isolation', 'Custom Domains', 'Subscription Billing'] },
  { id: 'blockchain', name: 'Blockchain & Smart Contracts', weeks: 4, costUsd: 6500, tech: ['Solidity', 'Web3.js', 'Ethereum / Polygon'] },
  { id: 'integrations', name: 'Advanced 3rd-Party Integrations', weeks: 1.5, costUsd: 1800, tech: ['Stripe / Plaid', 'Salesforce / HubSpot API', 'Twilio Webhooks'] }
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimates }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['web']);
  const [selectedModules, setSelectedModules] = useState<string[]>(['rbac']);
  const [speed, setSpeed] = useState<'standard' | 'expedited'>('standard');
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const [applied, setApplied] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(id)
        ? (prev.length > 1 ? prev.filter(p => p !== id) : prev) // keep at least 1
        : [...prev, id]
    );
    setApplied(false);
  };

  const toggleModule = (id: string) => {
    setSelectedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
    setApplied(false);
  };

  const calculation = useMemo<EstimatorSelection>(() => {
    let baseWeeks = 0;
    let baseCost = 0;
    const stackSet = new Set<string>();

    selectedPlatforms.forEach(pId => {
      const found = PLATFORM_OPTIONS.find(p => p.id === pId);
      if (found) {
        baseWeeks += found.weeks;
        baseCost += found.costUsd;
        found.tech.forEach(t => stackSet.add(t));
      }
    });

    selectedModules.forEach(mId => {
      const found = MODULE_OPTIONS.find(m => m.id === mId);
      if (found) {
        baseWeeks += found.weeks;
        baseCost += found.costUsd;
        found.tech.forEach(t => stackSet.add(t));
      }
    });

    // Overlap efficiency deduction (e.g. unified API layer)
    const efficiency = selectedPlatforms.length > 1 ? (selectedPlatforms.length - 1) * 1.5 : 0;
    let netWeeks = Math.max(3, Math.round(baseWeeks - efficiency));

    if (speed === 'expedited') {
      netWeeks = Math.max(2, Math.round(netWeeks * 0.7));
      baseCost = Math.round(baseCost * 1.25); // sprint surcharge
    }

    const minWeeks = Math.max(2, netWeeks - 1);
    const maxWeeks = netWeeks + 2;

    const currInfo = CURRENCY_RATES[currency];
    const minBudget = Math.round((baseCost * 0.9 * currInfo.rate) / 100) * 100;
    const maxBudget = Math.round((baseCost * 1.15 * currInfo.rate) / 100) * 100;
    const formattedBudget = `${currInfo.symbol}${minBudget.toLocaleString()} – ${currInfo.symbol}${maxBudget.toLocaleString()}`;

    let complexity: 'Standard' | 'Advanced' | 'Enterprise Multi-Tier' = 'Standard';
    if (netWeeks >= 9 || selectedPlatforms.length >= 3 || selectedModules.length >= 4) {
      complexity = 'Enterprise Multi-Tier';
    } else if (netWeeks >= 5 || selectedPlatforms.length >= 2 || selectedModules.length >= 2) {
      complexity = 'Advanced';
    }

    return {
      platforms: selectedPlatforms.map(id => PLATFORM_OPTIONS.find(p => p.id === id)?.name || id),
      modules: selectedModules.map(id => MODULE_OPTIONS.find(m => m.id === id)?.name || id),
      speed,
      estimatedWeeks: `${minWeeks}–${maxWeeks} Weeks`,
      estimatedBudget: formattedBudget,
      currency,
      complexity,
      suggestedStack: Array.from(stackSet)
    };
  }, [selectedPlatforms, selectedModules, speed, currency]);

  const handleApply = () => {
    setApplied(true);
    if (onApplyEstimates) {
      onApplyEstimates(calculation);
    }
  };

  const handleCopySummary = async () => {
    const summaryText = `[TEKMORA PROJECT SCOPE ESTIMATE]
- Platforms: ${calculation.platforms.join(', ')}
- Modules: ${calculation.modules.join(', ')}
- Execution Cadence: ${calculation.speed.toUpperCase()}
- Estimated Window: ${calculation.estimatedWeeks}
- Estimated Investment: ${calculation.estimatedBudget}
- Recommended Stack: ${calculation.suggestedStack.join(', ')}
- Complexity Tier: ${calculation.complexity}`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <motion.div 
      className="project-estimator-card spotlight-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {copiedSummary && (
        <div className="feedback-toast font-mono">
          <Check size={16} className="text-green" />
          <span>ESTIMATOR SUMMARY COPIED TO CLIPBOARD</span>
        </div>
      )}

      <div className="estimator-header">
        <div className="estimator-header-meta font-mono">
          <div className="estimator-badge">
            <Calculator size={14} className="text-orange" />
            <span>INTERACTIVE SCOPE & BUDGET CALCULATOR</span>
          </div>
          <div className="currency-selector font-mono">
            <span className="curr-label">CURRENCY:</span>
            {(['USD', 'EUR', 'GBP', 'PKR'] as CurrencyType[]).map(curr => (
              <button
                key={curr}
                type="button"
                className={`curr-btn ${currency === curr ? 'curr-active' : ''}`}
                onClick={() => setCurrency(curr)}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
        <h3 className="estimator-title font-display">
          ESTIMATE TIMELINE & ARCHITECTURAL SCOPE
        </h3>
        <p className="estimator-subtitle">
          Select target platforms, technical capabilities, and execution velocity to generate live milestone timelines and budget brackets.
        </p>
      </div>

      <div className="estimator-grid">
        {/* Left Column: Interactive Checkboxes */}
        <div className="estimator-inputs-col">
          {/* Platform Scope */}
          <div className="estimator-group">
            <label className="estimator-label font-mono">
              <span>01 // TARGET PLATFORMS</span>
              <span className="label-count font-mono">{selectedPlatforms.length} SELECTED</span>
            </label>
            <div className="estimator-chips-grid">
              {PLATFORM_OPTIONS.map(plat => {
                const isSelected = selectedPlatforms.includes(plat.id);
                return (
                  <button
                    key={plat.id}
                    type="button"
                    className={`estimator-chip ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => togglePlatform(plat.id)}
                  >
                    <div className="chip-checkbox">
                      {isSelected ? <Check size={12} /> : null}
                    </div>
                    <span className="chip-name font-mono">{plat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technical Modules */}
          <div className="estimator-group">
            <label className="estimator-label font-mono">
              <span>02 // ADVANCED SYSTEM CAPABILITIES</span>
              <span className="label-count font-mono">{selectedModules.length} SELECTED</span>
            </label>
            <div className="estimator-chips-grid">
              {MODULE_OPTIONS.map(mod => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    className={`estimator-chip ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => toggleModule(mod.id)}
                  >
                    <div className="chip-checkbox">
                      {isSelected ? <Check size={12} /> : null}
                    </div>
                    <span className="chip-name font-mono">{mod.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Delivery Velocity */}
          <div className="estimator-group">
            <label className="estimator-label font-mono">
              <span>03 // EXECUTION CADENCE</span>
            </label>
            <div className="speed-toggle-row font-mono">
              <button
                type="button"
                className={`speed-btn ${speed === 'standard' ? 'speed-active' : ''}`}
                onClick={() => setSpeed('standard')}
              >
                <span>Standard Delivery (Bi-Weekly Milestones)</span>
              </button>
              <button
                type="button"
                className={`speed-btn ${speed === 'expedited' ? 'speed-active' : ''}`}
                onClick={() => setSpeed('expedited')}
              >
                <Sparkles size={13} className="text-orange" />
                <span>Expedited / Dedicated Engineering Sprint</span>
              </button>
            </div>
          </div>

          {/* Visual Milestone Roadmap */}
          <div className="estimator-group roadmap-group">
            <label className="estimator-label font-mono">
              <GitBranch size={13} className="text-orange" />
              <span>PROJECT MILESTONE BLUEPRINT</span>
            </label>
            <div className="roadmap-stepper font-mono">
              <div className="roadmap-step">
                <div className="step-dot active">01</div>
                <div className="step-info">
                  <div className="step-name">Discovery & Architecture</div>
                  <div className="step-sub">Schema, RBAC, API Spec</div>
                </div>
              </div>
              <div className="roadmap-line"></div>
              <div className="roadmap-step">
                <div className="step-dot active">02</div>
                <div className="step-info">
                  <div className="step-name">Engine Sprint</div>
                  <div className="step-sub">UI & Backend Pipelines</div>
                </div>
              </div>
              <div className="roadmap-line"></div>
              <div className="roadmap-step">
                <div className="step-dot active">03</div>
                <div className="step-info">
                  <div className="step-name">Integrations & Sync</div>
                  <div className="step-sub">SAP, WebSockets, DB</div>
                </div>
              </div>
              <div className="roadmap-line"></div>
              <div className="roadmap-step">
                <div className="step-dot active">04</div>
                <div className="step-info">
                  <div className="step-name">QA & Production</div>
                  <div className="step-sub">Load Testing & Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Output Board */}
        <div className="estimator-output-col">
          <div className="estimator-summary-board font-mono">
            <div className="summary-top-row">
              <span className="summary-kicker">ENGINEERED ESTIMATE</span>
              <span className="summary-status text-green">● VERIFIED PROTOCOL</span>
            </div>

            {/* Estimated Weeks */}
            <div className="summary-metric-block">
              <div className="metric-lbl">
                <Clock size={14} className="text-orange" />
                <span>ESTIMATED DELIVERY WINDOW</span>
              </div>
              <div className="metric-val font-display">{calculation.estimatedWeeks}</div>
            </div>

            {/* Estimated Budget Range */}
            <div className="summary-metric-block">
              <div className="metric-lbl">
                <DollarSign size={14} className="text-orange" />
                <span>INDICATIVE INVESTMENT BRACKET</span>
              </div>
              <div className="metric-val budget-val font-display">{calculation.estimatedBudget}</div>
            </div>

            {/* Complexity Tier */}
            <div className="summary-metric-block">
              <div className="metric-lbl">
                <Layers size={14} className="text-orange" />
                <span>ARCHITECTURAL COMPLEXITY</span>
              </div>
              <div className="complexity-badge">
                <span className="complexity-dot"></span>
                <span>{calculation.complexity}</span>
              </div>
            </div>

            {/* Suggested Tech Stack */}
            <div className="summary-stack-block">
              <div className="metric-lbl">
                <Cpu size={14} className="text-orange" />
                <span>RECOMMENDED PRODUCTION STACK</span>
              </div>
              <div className="summary-tech-pills">
                {calculation.suggestedStack.map(tech => (
                  <span key={tech} className="tech-pill-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="summary-apply-row">
              <button
                type="button"
                className={`btn btn-orange w-full apply-btn ${applied ? 'applied-btn' : ''}`}
                onClick={handleApply}
              >
                {applied ? (
                  <>
                    <Check size={16} />
                    <span>APPLIED TO INQUIRY FORM</span>
                  </>
                ) : (
                  <>
                    <span>ATTACH ESTIMATES TO INQUIRY</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn btn-secondary w-full copy-summary-btn font-mono"
                onClick={handleCopySummary}
              >
                {copiedSummary ? <Check size={14} className="text-green" /> : <Share2 size={14} />}
                <span>{copiedSummary ? 'COPIED TO CLIPBOARD' : 'COPY ESTIMATE SUMMARY'}</span>
              </button>

              <div className="summary-disclaimer">
                Estimates based on standard Tekmora engineering milestones. Fixed SOW provided after discovery workshop.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
