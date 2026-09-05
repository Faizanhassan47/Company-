import React from 'react';
import { 
  Layers, Cloud, Settings, Bot, Database, 
  Link, Monitor, Shield, Cpu, Flame, ArrowRight, MoreVertical
} from 'lucide-react';
import './ServiceMatrixSection.css';

const services = [
  {
    rank: '01',
    icon: Layers,
    title: 'AI Integration + Workflow Automation',
    subtitle: 'Custom LLM pipelines, autonomous workflows, vector embeddings, real-time business logic.',
    tier: 'TIER-1',
    fires: 5,
    recType: 'lead-service',
    recLabel: 'LEAD SERVICE',
    desc: 'High demand across industries with immediate ROI.'
  },
  {
    rank: '02',
    icon: Cloud,
    title: 'Existing SaaS / Product Development & Modernization',
    subtitle: 'Refactoring legacy codebases, TypeScript upgrades, microservices migrations.',
    tier: 'TIER-1',
    fires: 5,
    recType: 'lead-service',
    recLabel: 'LEAD SERVICE',
    desc: 'Strong market need for modernization.'
  },
  {
    rank: '03',
    icon: Settings,
    title: 'SaaS Engineering',
    subtitle: 'Multi-tenant architecture, subscription tiers, high-throughput APIs, billing.',
    tier: 'TIER-1',
    fires: 5,
    recType: 'lead-service',
    recLabel: 'LEAD SERVICE',
    desc: 'Recurring revenue model and high scalability.'
  },
  {
    rank: '04',
    icon: Bot,
    title: 'AI Agents / Business Process Automation',
    subtitle: 'Multi-agent systems, tool-use execution, ERP/CRM action loops, deterministic workflows.',
    tier: '',
    fires: 4,
    recType: 'add-service',
    recLabel: 'ADD',
    desc: 'Emerging and high growth opportunity.'
  },
  {
    rank: '05',
    icon: Database,
    title: 'RAG / Private Company Data AI',
    subtitle: 'Hybrid vector search, proprietary document processing, secure data isolation.',
    tier: '',
    fires: 4,
    recType: 'lead-ai',
    recLabel: 'LEAD AI SERVICE',
    desc: 'High value for enterprises with internal data.'
  },
  {
    rank: '06',
    icon: Link,
    title: 'API / Stripe / Third-Party Integrations',
    subtitle: 'Webhooks, idempotent transactions, payment engines, bi-directional CRM/ERP sync.',
    tier: '',
    fires: 4,
    recType: 'strong-service',
    recLabel: 'STRONG',
    desc: 'Always relevant, cross-industry demand.'
  },
  {
    rank: '07',
    icon: Monitor,
    title: 'Internal Tools + Dashboards + Automation',
    subtitle: 'Operational dashboards, real-time telemetry, approval workflows, back-office tools.',
    tier: '',
    fires: 4,
    recType: 'strong-service',
    recLabel: 'STRONG',
    desc: 'High adoption across enterprise clients.'
  },
  {
    rank: '08',
    icon: Shield,
    title: 'Security / Auth / Roles / Multi-Tenant Systems',
    subtitle: 'RBAC/ABAC, SSO (SAML/OAuth), tenant isolation, audit logging.',
    tier: '',
    fires: 4,
    recType: 'add-prom',
    recLabel: 'ADD PROMINENTLY',
    desc: 'Critical for enterprise and regulated industries.'
  },
  {
    rank: '09',
    icon: Cpu,
    title: 'Production Hardening / AI-Code Rescue',
    subtitle: 'Fixing brittle AI systems, memory leaks, strict TypeScript, production reliability.',
    tier: '',
    fires: 4,
    recType: 'add-big',
    recLabel: 'ADD - BIG OPPORTUNITY',
    desc: 'High pain point, strong demand for rescue services.'
  }
];

export const ServiceMatrixSection: React.FC = () => {
  return (
    <section className="service-matrix-section">
      <div className="sm-container">
        
        {/* Table Header */}
        <div className="sm-header-row">
          <div className="sm-col-rank">RANK</div>
          <div className="sm-col-service">SERVICE DISCIPLINE</div>
          <div className="sm-col-market">MARKET ATTRACTIVENESS</div>
          <div className="sm-col-strategy">STRATEGIC RECOMMENDATION</div>
          <div className="sm-col-action">ACTION</div>
        </div>

        {/* Table Body */}
        <div className="sm-body">
          {services.map((item, idx) => (
            <div key={idx} className="sm-row">
              <div className="sm-col-rank">
                <span className="sm-rank-num">{item.rank}</span>
              </div>
              
              <div className="sm-col-service">
                <div className="sm-service-icon">
                  <item.icon size={24} />
                </div>
                <div className="sm-service-text">
                  <h4 className="sm-service-title">
                    {item.title}
                    {item.tier && <span className="sm-tier-badge"><BarChart3 size={10} className="sm-tier-icon"/> {item.tier}</span>}
                  </h4>
                  <p className="sm-service-subtitle">{item.subtitle}</p>
                </div>
              </div>

              <div className="sm-col-market">
                <div className="sm-fires">
                  {[...Array(5)].map((_, i) => (
                    <Flame key={i} size={16} className={`sm-fire-icon ${i < item.fires ? 'active' : 'inactive'}`} />
                  ))}
                </div>
              </div>

              <div className="sm-col-strategy">
                <span className={`sm-rec-badge ${item.recType}`}>{item.recLabel}</span>
                <p className="sm-rec-desc">{item.desc}</p>
              </div>

              <div className="sm-col-action">
                <button className="sm-action-btn">VIEW SPEC <ArrowRight size={14} /></button>
                <button className="sm-more-btn"><MoreVertical size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sm-footer">
          <div className="sm-footer-left">TEKMORA &mdash; TECHNOLOGY THAT WORKS TOGETHER.</div>
          <div className="sm-footer-right">
             <div className="sm-footer-line"></div>
             <span>SOLVE <span className="slash">/</span> INTEGRATE <span className="slash">/</span> INNOVATE</span>
          </div>
        </div>

      </div>
    </section>
  );
};

// Quick mock for BarChart3 since it was missed in main import list for the Tier badge.
const BarChart3 = ({size, className}: {size:number, className:string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
);
