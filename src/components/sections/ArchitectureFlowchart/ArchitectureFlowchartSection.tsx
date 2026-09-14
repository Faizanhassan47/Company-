import React, { useRef } from 'react';
import {
  Globe, Monitor,
  ShieldCheck, Lock, ShieldAlert,
  Box, Server, Activity, Settings, Zap,
  CreditCard, Link as LinkIcon, Mail, Cloud,
  Database, Layers,
  Cloudy, Package, RefreshCw
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

// Retained as the source for the upcoming interactive code-preview treatment.
void SNIPPETS;

export const ArchitectureFlowchartSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

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

      </div>
    </section>
  );
};
