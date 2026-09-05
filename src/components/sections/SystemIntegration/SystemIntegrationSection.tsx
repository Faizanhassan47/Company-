import React from 'react';
import { 
  Building2, Cloud, Cpu, Database, 
  Monitor, Settings, BarChart2, Users,
  ArrowRight, Box, ArrowLeftRight, Database as DbIcon,
  PieChart, CloudRain, Bluetooth, CreditCard, Link
} from 'lucide-react';
import './SystemIntegrationSection.css';

const leftNodes = [
  { icon: Building2, title: 'ERP / SAP', sub: 'SAP B1, SAP S/4HANA' },
  { icon: Cloud, title: 'CRM / SaaS', sub: 'Salesforce, HubSpot' },
  { icon: Cpu, title: 'Hardware / Devices', sub: 'IoT, BLE, Scanners' },
  { icon: Database, title: 'Legacy Systems', sub: 'Databases, Files, APIs' },
];

const rightNodes = [
  { icon: Monitor, title: 'Your Platform', sub: 'Web / Mobile / Custom Apps' },
  { icon: Settings, title: 'Automation', sub: 'Streamlined Workflows' },
  { icon: BarChart2, title: 'Reporting', sub: 'Unified Insights' },
  { icon: Users, title: 'Business Growth', sub: 'More Value, Less Complexity' },
];

const techStack = [
  { icon: Box, title: 'SAP Business One' },
  { icon: ArrowLeftRight, title: 'REST APIs' },
  { icon: DbIcon, title: 'SQL Server' },
  { icon: PieChart, title: 'Power BI' },
  { icon: CloudRain, title: 'Cloud Storage', sub: 'AWS / Azure / S3' },
  { icon: Bluetooth, title: 'BLE / IoT', sub: 'Devices & Sensors' },
  { icon: CreditCard, title: 'Payment Platforms', sub: 'Stripe / PayPal' },
  { icon: Link, title: 'Third-party SaaS', sub: '100+ Integrations' },
];

export const SystemIntegrationSection: React.FC = () => {
  return (
    <section className="sys-integration-section">
      <div className="si-container">
        {/* Top Header */}
        <div className="si-header-meta">
          <span className="si-number">07</span>
          <span className="si-slash">//</span>
          <span className="si-label">SYSTEM INTEGRATION</span>
        </div>

        <div className="si-main-layout">
          {/* Left Text Block */}
          <div className="si-text-content">
            <h2 className="si-headline font-display">
              WE CONNECT SOFTWARE THAT WASN'T<br />
              <span className="si-italic-accent">ORIGINALLY BUILT<br/>TO WORK TOGETHER.</span>
            </h2>
            <p className="si-description">
              We build the connective middleware that unifies ERP, SaaS, devices, legacy systems and cloud platforms—eliminating duplicate work, fragmented data and disconnected workflows.
            </p>
            <button className="si-cta-button">
              DISCUSS YOUR INTEGRATION <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Diagram Block */}
          <div className="si-diagram">
            {/* Top right meta */}
            <div className="si-diagram-meta">
              ONE ECOSYSTEM.<br/>
              REAL EFFICIENCY.<br/>
              GREATER POSSIBILITIES.
            </div>

            <div className="si-graph-container">
              {/* Background circular grids */}
              <div className="si-bg-circles"></div>

              {/* Left Column Nodes */}
              <div className="si-nodes-col si-left-col">
                {leftNodes.map((node, i) => (
                  <div key={i} className="si-node-card">
                    <div className="si-node-icon"><node.icon size={20} /></div>
                    <div className="si-node-text">
                      <h4>{node.title}</h4>
                      <p>{node.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Node */}
              <div className="si-center-wrapper">
                {/* SVG Connecting Lines (Simplified representation) */}
                <svg className="si-connections-svg" preserveAspectRatio="none">
                   {/* We will handle complex routing with CSS mostly, but SVG is better for actual paths. For now, pseudo elements will serve to connect to center. */}
                </svg>
                
                <div className="si-center-node">
                  <div className="si-center-icon">
                    <div className="si-layer-stack">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  <h3>TEKMORA<br/>INTEGRATION LAYER</h3>
                  <div className="si-center-footer">Connect &middot; Transform &middot; Secure &middot; Deliver</div>
                </div>
              </div>

              {/* Right Column Nodes */}
              <div className="si-nodes-col si-right-col">
                {rightNodes.map((node, i) => (
                  <div key={i} className="si-node-card">
                    <div className="si-node-icon"><node.icon size={20} /></div>
                    <div className="si-node-text">
                      <h4>{node.title}</h4>
                      <p>{node.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tech Bar */}
        <div className="si-tech-bar">
          <div className="si-tech-bar-header">
            <span className="si-tech-label">TECHNOLOGIES WE INTEGRATE</span>
            <div className="si-tech-nav">
              <button>&larr;</button>
              <button>&rarr;</button>
            </div>
          </div>
          
          <div className="si-tech-list">
            {techStack.map((tech, i) => (
              <div key={i} className="si-tech-item">
                <div className="si-tech-icon"><tech.icon size={20} /></div>
                <div className="si-tech-text">
                  <strong>{tech.title}</strong>
                  {tech.sub && <span>{tech.sub}</span>}
                </div>
              </div>
            ))}
          </div>
          
          <div className="si-footer-bar">
             <span className="si-footer-left">FROM DISCONNECTED SYSTEMS &rarr; TO A UNIFIED TOMORROW</span>
             <span className="si-footer-right">INTEGRATE / AUTOMATE / ACCELERATE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
