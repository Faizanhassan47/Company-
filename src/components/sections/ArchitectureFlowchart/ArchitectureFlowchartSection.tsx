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
        {flowchartData.map((tier, index) => (
          <div key={tier.tier} className="arch-tier-group">
            <div className="arch-tier-header">
              <span className="arch-tier-number">{tier.tier}</span>
              <span className="arch-tier-separator">//</span>
              <span className="arch-tier-title">{tier.title}</span>
            </div>
            
            <div className="arch-nodes-container">
              {tier.nodes.map((node, nodeIndex) => (
                <div key={nodeIndex} className="arch-node">
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

            {/* Connecting line to next tier, except for last tier */}
            {index < flowchartData.length - 1 && (
              <div className="arch-connector-line"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
