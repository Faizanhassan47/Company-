import React from 'react';
import { ARCHITECTURE_LAYERS, type ArchitectureLayer } from '../../../data/capabilities';
import { Layers, Database, Cpu, Network, LayoutTemplate } from 'lucide-react';
import './CapabilitiesSection.css';

export const CapabilitiesSection: React.FC = () => {
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

  return (
    <section className="section capabilities-section section-border-bottom" id="capabilities">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">07</span>
          <span>// TECHNICAL ARCHITECTURE</span>
          <span className="meta-sep font-mono">VERIFIED ENGINE PIPELINE</span>
        </div>

        {/* Section Headline */}
        <div className="capabilities-heading-block">
          <h2 className="section-title-large">
            STRUCTURED STACK.<br />
            <span className="italic-accent">NO SUPERFLUOUS CODE.</span>
          </h2>
          <p className="capabilities-lead-desc">
            We operate with a carefully chosen, verified stack of battle-tested technologies. No experimental trend-chasing; only frameworks that deliver stability, performance, and long-term maintainability.
          </p>
        </div>

        {/* Architecture Pipeline Diagram Overview */}
        <div className="architecture-flow-diagram font-mono">
          <div className="flow-step">
            <span className="flow-num">01</span>
            <span className="flow-name">INTERFACE</span>
          </div>
          <span className="flow-sep">→</span>
          <div className="flow-step">
            <span className="flow-num">02</span>
            <span className="flow-name">API</span>
          </div>
          <span className="flow-sep">→</span>
          <div className="flow-step">
            <span className="flow-num">03</span>
            <span className="flow-name">BUSINESS LOGIC</span>
          </div>
          <span className="flow-sep">→</span>
          <div className="flow-step">
            <span className="flow-num">04</span>
            <span className="flow-name">DATA STORE</span>
          </div>
          <span className="flow-sep">→</span>
          <div className="flow-step">
            <span className="flow-num">05</span>
            <span className="flow-name">INTEGRATIONS</span>
          </div>
        </div>

        {/* Stack Layers Metadata Breakdown */}
        <div className="capabilities-layers-stack">
          {ARCHITECTURE_LAYERS.map((layer: ArchitectureLayer) => (
            <div key={layer.step} className="layer-spec-row">
              {/* Layer Title & Focus */}
              <div className="layer-intro-col">
                <div className="layer-badge-head font-mono">
                  {getLayerIcon(layer.step)}
                  <span className="layer-step-num">LAYER {layer.step}</span>
                </div>
                <h3 className="layer-heading">{layer.layer}</h3>
                <p className="layer-focus-text">{layer.focus}</p>
              </div>

              {/* Verified Technologies Metadata Grid */}
              <div className="layer-tech-col">
                <div className="tech-meta-list">
                  {layer.technologies.map(tech => (
                    <div key={tech.name} className="tech-spec-item font-mono">
                      <div className="tech-name-row">
                        <span className="tech-bullet">▪</span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                      <div className="tech-use-desc">{tech.verifiedUse}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="layer-responsibilities-col">
                <div className="resp-title font-mono">CORE RESPONSIBILITIES</div>
                <ul className="resp-list">
                  {layer.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="resp-item font-mono">
                      <span className="resp-dash">—</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
