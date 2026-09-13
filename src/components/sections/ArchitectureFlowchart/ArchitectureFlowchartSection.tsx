import React, { useRef, useState } from 'react';
import { 
  Globe, Monitor,
  ShieldCheck, Lock, ShieldAlert,
  Box, Server, Activity, Settings, Zap,
  CreditCard, Link as LinkIcon, Mail, Cloud,
  Database, Layers,
  Cloudy, Package, RefreshCw,
  Terminal, Copy, Check, Code2
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './ArchitectureFlowchartSection.css';

const flowchartData = [
  {
    tier: "01",
    title: "CLIENT EDGE",
    nodes: [
      { icon: Globe, title: "Web Platform", subtitle: "React 19 / Vite" },
      { icon: Activity, title: "Mobile App", subtitle: "React Native / Expo" },
      { icon: Monitor, title: "Desktop App", subtitle: "Electron / .NET" }
    ]
  },
  {
    tier: "02",
    title: "GATEWAY & SECURITY",
    nodes: [
      { icon: ShieldCheck, title: "API Gateway", subtitle: "Cloudflare / WAF / Auth" },
      { icon: Lock, title: "Identity & Access", subtitle: "OAuth 2.0 / JWT / SSO" },
      { icon: ShieldAlert, title: "Security Layer", subtitle: "WAF / DDoS Protection" }
    ]
  },
  {
    tier: "03",
    title: "COMPUTE & LOGIC",
    nodes: [
      { icon: Box, title: "Auth Service", subtitle: "Node.js / JWT" },
      { icon: Server, title: "Core Engine", subtitle: "Python FastAPI" },
      { icon: Activity, title: "ERP Sync", subtitle: "SAP Service Layer" },
      { icon: Settings, title: "AI & Automation", subtitle: "OpenAI / Python / ML" },
      { icon: Zap, title: "Real-Time Service", subtitle: "WebSockets / SignalR" }
    ]
  },
  {
    tier: "04",
    title: "INTEGRATIONS",
    nodes: [
      { icon: CreditCard, title: "Payment Integration", subtitle: "Stripe / PayPal" },
      { icon: LinkIcon, title: "Third-Party APIs", subtitle: "REST / Webhooks" },
      { icon: Mail, title: "Notification Service", subtitle: "Email / SMS / Push" },
      { icon: Cloud, title: "File & Media Service", subtitle: "S3 / Cloud Storage" }
    ]
  },
  {
    tier: "05",
    title: "PERSISTENCE",
    nodes: [
      { icon: Database, title: "Primary Database", subtitle: "PostgreSQL (ACID)" },
      { icon: Layers, title: "Cache Layer", subtitle: "Redis" }
    ]
  },
  {
    tier: "06",
    title: "DEPLOYMENT & INFRASTRUCTURE",
    nodes: [
      { icon: Cloudy, title: "Cloud Infrastructure", subtitle: "AWS / Azure" },
      { icon: Package, title: "Containerization", subtitle: "Docker" },
      { icon: RefreshCw, title: "Deployment", subtitle: "CI / CD" }
    ]
  }
];

const SNIPPETS = {
  sap: {
    title: 'SAP B1 Service Layer Hook',
    method: 'POST',
    endpoint: '/b1s/v2/Drafts (Automated GRN)',
    status: '201 CREATED • 18ms',
    code: `// Automated Goods Receipt via SAP Service Layer
curl -X POST https://api.tekmorasolution.com/v1/erp/sap/grn \\
  -H "Authorization: Bearer tk_live_984210" \\
  -H "Content-Type: application/json" \\
  -d '{
    "CardCode": "V10002",
    "DocDate": "2026-09-13",
    "DocumentLines": [
      { "ItemCode": "SKU-9941", "Quantity": 150, "WarehouseCode": "WH-B4" }
    ],
    "Comments": "Automated warehouse scan via Tekmora WMS Engine"
  }'`
  },
  ws: {
    title: 'Real-Time Telemetry Stream',
    method: 'WSS',
    endpoint: 'wss://stream.tekmorasolution.com/v1/telemetry',
    status: 'CONNECTED • 0 DROPPED',
    code: `// Real-Time Event Bus Subscription
const socket = new WebSocket('wss://stream.tekmorasolution.com/v1/telemetry');

socket.onmessage = (event) => {
  const telemetry = JSON.parse(event.data);
  // [18:22:01.041] SKU-9941 verified at Bay B4
  // [18:22:01.189] SAP Service Layer journal balanced (0 discrepancies)
  // [18:22:01.214] Automated dispatch alert dispatched to mobile client
};`
  },
  sql: {
    title: 'PostgreSQL ACID Ledger Lock',
    method: 'SQL',
    endpoint: 'PostgreSQL 16 (Strict Atomicity)',
    status: 'COMMITTED • 4ms',
    code: `-- Zero-Drift Financial & Inventory Ledger Lock
BEGIN;

SELECT balance, reserved_stock 
FROM inventory_ledger 
WHERE sku = 'SKU-9941' AND warehouse_id = 'WH-B4'
FOR UPDATE;

UPDATE inventory_ledger 
SET reserved_stock = reserved_stock + 150,
    updated_at = NOW()
WHERE sku = 'SKU-9941';

COMMIT; -- Atomicity guaranteed across multi-tenant clusters`
  }
};

type SnippetTab = keyof typeof SNIPPETS;

export const ArchitectureFlowchartSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<SnippetTab>('sap');
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    if (!container.current) return;
    
    gsap.fromTo('.arch-node', 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  const handleCopyCode = () => {
    navigator.clipboard.writeText(SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="architecture-section" ref={container}>
      <div className="architecture-container">
        {flowchartData.map((tier) => (
          <div key={tier.tier} className="arch-tier-group">
            <div className="arch-tier-header">
              <span className="arch-tier-number">{tier.tier}</span>
              <span className="arch-tier-separator">//</span>
              <span className="arch-tier-title">{tier.title}</span>
            </div>
            
            <div className="arch-nodes-container">
              {tier.nodes.map((node, nodeIndex) => (
                <div key={nodeIndex} className="arch-node spotlight-card">
                  <div className="arch-node-icon-wrapper">
                    <node.icon className="arch-node-icon" size={20} />
                  </div>
                  <div className="arch-node-content">
                    <h4 className="arch-node-title">{node.title}</h4>
                    <p className="arch-node-subtitle">{node.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting line to next tier */}
            <div className="arch-connector-line"></div>
          </div>
        ))}

        {/* Live 2D Enterprise API & Telemetry Playground */}
        <div className="arch-terminal-wrapper spotlight-card">
          <div className="arch-terminal-header font-mono">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">LIVE ARCHITECTURAL CONTRACT TELEMETRY</span>
            </div>
            <div className="terminal-live-pill">
              <span className="telemetry-live-dot" />
              <span>LIVE EDGE ENVIRONMENT</span>
            </div>
          </div>

          <div className="arch-terminal-tabs font-mono">
            <button
              type="button"
              className={`terminal-tab-btn ${activeTab === 'sap' ? 'active' : ''}`}
              onClick={() => setActiveTab('sap')}
            >
              <Terminal size={12} className="text-orange" />
              <span>01 // SAP SERVICE LAYER</span>
            </button>
            <button
              type="button"
              className={`terminal-tab-btn ${activeTab === 'ws' ? 'active' : ''}`}
              onClick={() => setActiveTab('ws')}
            >
              <Zap size={12} className="text-orange" />
              <span>02 // WEBSOCKET STREAM</span>
            </button>
            <button
              type="button"
              className={`terminal-tab-btn ${activeTab === 'sql' ? 'active' : ''}`}
              onClick={() => setActiveTab('sql')}
            >
              <Code2 size={12} className="text-orange" />
              <span>03 // ACID SQL TRANSACTION</span>
            </button>
          </div>

          <div className="arch-terminal-subbar font-mono">
            <div className="endpoint-info">
              <span className={`method-badge method-${activeTab}`}>{SNIPPETS[activeTab].method}</span>
              <span className="endpoint-url">{SNIPPETS[activeTab].endpoint}</span>
            </div>
            <div className="endpoint-actions">
              <span className="status-badge text-green">{SNIPPETS[activeTab].status}</span>
              <button
                type="button"
                className="copy-snippet-btn font-mono"
                onClick={handleCopyCode}
                title="Copy code to clipboard"
              >
                {copied ? <Check size={12} className="text-green" /> : <Copy size={12} />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <pre className="arch-terminal-code font-mono">
            <code>{SNIPPETS[activeTab].code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
