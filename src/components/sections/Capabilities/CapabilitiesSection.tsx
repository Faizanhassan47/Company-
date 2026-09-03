import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ARCHITECTURE_LAYERS, type ArchitectureLayer } from '../../../data/capabilities';
import { Layers, Database, Cpu, Network, LayoutTemplate, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';
import './CapabilitiesSection.css';

export const CapabilitiesSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('01');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([
    'INIT: Architecture pipeline ready. Awaiting transactional event...'
  ]);

  const getLayerIcon = (step: string) => {
    switch (step) {
      case '01': return <LayoutTemplate size={16} className="text-orange" />;
      case '02': return <Network size={16} className="text-orange" />;
      case '03': return <Cpu size={16} className="text-orange" />;
      case '04': return <Database size={16} className="text-orange" />;
      case '05': return <Layers size={16} className="text-orange" />;
      default: return <Layers size={16} />;
    }
  };

  const handleSimulateTransaction = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);
    setSelectedLayer('01');
    setSimulationLogs([
      `[T+0ms] EVENT TRIGGER: Operator initiates GRN receipt on Mobile/Web UI.`,
      `[T+4ms] LAYER 01 (Interface): Payload serialized & cryptographically signed.`
    ]);

    const timeline = [
      {
        step: 2,
        layer: '02',
        delay: 600,
        log: `[T+12ms] LAYER 02 (API Gateway): JWT token verified; rate limit checked (0.4ms); CORS & schema validated.`
      },
      {
        step: 3,
        layer: '03',
        delay: 1300,
        log: `[T+19ms] LAYER 03 (Business Logic): Role 'WAREHOUSE_OPERATOR' authorized; item batch & lot state machine resolved.`
      },
      {
        step: 4,
        layer: '04',
        delay: 2000,
        log: `[T+26ms] LAYER 04 (Database): SQL Server atomic transaction committed; ledger audit row inserted; Redis cache invalidated.`
      },
      {
        step: 5,
        layer: '05',
        delay: 2700,
        log: `[T+34ms] LAYER 05 (Integrations): SAP Business One Service Layer document #GRN-9402 created; Zebra label printed.`
      }
    ];

    timeline.forEach(item => {
      setTimeout(() => {
        setSimulationStep(item.step);
        setSelectedLayer(item.layer);
        setSimulationLogs(prev => [...prev, item.log]);
        if (item.step === 5) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimulationLogs(prev => [
              ...prev,
              `[T+38ms] COMPLETE: 100% Data Integrity • Total Latency: 38ms • Zero Data Drift.`
            ]);
          }, 600);
        }
      }, item.delay);
    });
  };

  const currentLayerData = ARCHITECTURE_LAYERS.find(l => l.step === selectedLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <section className="section capabilities-section section-border-bottom" id="technical-system">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">08</span>
          <span>// TECHNICAL SYSTEM</span>
          <span className="meta-sep font-mono">DATA-FLOW SIMULATOR & ARCHITECTURE</span>
        </div>

        {/* Section Headline */}
        <motion.div 
          className="capabilities-heading-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="capabilities-headline font-display">
            FROM INTERFACE<br />
            <span className="italic-accent">TO INFRASTRUCTURE.</span>
          </h2>
          <p className="capabilities-lead-desc">
            We operate with a restrained, battle-tested stack of production technologies. Every tier is architected for deterministic performance, data integrity, and operational maintainability.
          </p>
        </motion.div>

        {/* Interactive Architecture Simulator Widget */}
        <motion.div 
          className="architecture-simulator-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="simulator-top-bar font-mono">
            <div className="simulator-title-group">
              <div className="live-pulse-dot"></div>
              <span>INTERACTIVE DATA-FLOW PIPELINE SIMULATOR</span>
            </div>
            <button
              type="button"
              className={`btn btn-sm ${isSimulating ? 'btn-secondary' : 'btn-orange'} font-mono simulate-btn`}
              onClick={handleSimulateTransaction}
              disabled={isSimulating}
            >
              {isSimulating ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  <span>PROCESSING PACKET...</span>
                </>
              ) : (
                <>
                  <Play size={13} />
                  <span>SIMULATE ENTERPRISE TRANSACTION</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive 5-Layer Stepper Pipeline */}
          <div className="simulator-pipeline-strip font-mono">
            {ARCHITECTURE_LAYERS.map((layer: ArchitectureLayer, idx: number) => {
              const isSelected = selectedLayer === layer.step;
              const isPulsing = isSimulating && simulationStep === idx + 1;

              return (
                <React.Fragment key={layer.step}>
                  <button
                    type="button"
                    className={`pipeline-tier-btn ${isSelected ? 'is-active' : ''} ${isPulsing ? 'is-pulsing' : ''}`}
                    onClick={() => setSelectedLayer(layer.step)}
                  >
                    <div className="tier-icon-wrap">
                      {getLayerIcon(layer.step)}
                    </div>
                    <div className="tier-text-wrap">
                      <span className="tier-step">LAYER {layer.step}</span>
                      <span className="tier-name font-display">{layer.layer.split(' ')[0]}</span>
                    </div>
                    {isSelected && <span className="tier-active-indicator"></span>}
                  </button>
                  {idx < ARCHITECTURE_LAYERS.length - 1 && (
                    <div className={`pipeline-connector ${isSimulating && simulationStep > idx ? 'connector-active' : ''}`}>
                      <span className="connector-arrow">→</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Live Telemetry & Inspector Box */}
          <div className="simulator-inspector-grid font-mono">
            {/* Left: Active Layer Deep Dive */}
            <div className="inspector-layer-details">
              <div className="inspector-head">
                <div className="layer-badge-head font-mono">
                  {getLayerIcon(currentLayerData.step)}
                  <span className="layer-step-num text-orange">LAYER {currentLayerData.step} // {currentLayerData.layer.toUpperCase()}</span>
                </div>
                <div className="layer-focus font-display">{currentLayerData.focus}</div>
              </div>

              <div className="inspector-tech-grid">
                <span className="grid-label">PRODUCTION STACK & VERIFIED USE:</span>
                <div className="tech-tags-list">
                  {currentLayerData.technologies.map(t => (
                    <div key={t.name} className="tech-item-row">
                      <strong className="text-primary">{t.name}:</strong>
                      <span className="text-secondary">{t.verifiedUse}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inspector-resp-box">
                <span className="grid-label">CORE ARCHITECTURAL SAFEGUARDS:</span>
                <ul className="inspector-resp-list">
                  {currentLayerData.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>
                      <CheckCircle2 size={12} className="text-green flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Live Telemetry Terminal */}
            <div className="inspector-terminal">
              <div className="terminal-titlebar">
                <div className="terminal-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-yellow"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="terminal-title">LIVE TELEMETRY LOGS</span>
                <span className="terminal-status text-green">CONNECTED</span>
              </div>

              <div className="terminal-console-body font-mono">
                {simulationLogs.map((log, lIdx) => (
                  <div key={lIdx} className="log-line">
                    <span className="log-prompt">&gt;</span>
                    <span className={log.includes('COMPLETE') ? 'text-green font-bold' : ''}>{log}</span>
                  </div>
                ))}
              </div>

              <div className="terminal-footer font-mono">
                <span>ACTIVE SPEC: ISO/IEC 27001 • ZERO DATA LEAKAGE</span>
                <span className="text-orange">TEKMORA CORE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
