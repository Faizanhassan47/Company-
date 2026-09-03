import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp, hoverLift } from '../../../utils/animations';
import './TechRadarSection.css';

type TechCategory = 'all' | 'frontend' | 'backend' | 'data' | 'enterprise';

interface RadarItem {
  id: string;
  name: string;
  category: TechCategory;
  categoryLabel: string;
  role: string;
  benchmark: string;
  status: 'TIER-1 VERIFIED' | 'MISSION CRITICAL';
  tags: string[];
}

const RADAR_DATA: RadarItem[] = [
  {
    id: 'sap-b1',
    name: 'SAP Business One Service Layer',
    category: 'enterprise',
    categoryLabel: 'ERP & OPERATIONS',
    role: 'Bidirectional transactional synchronization for inventory, GRNs, and sales orders.',
    benchmark: '< 80ms Roundtrip / Safe DI API Handshake',
    status: 'MISSION CRITICAL',
    tags: ['OData v4', 'Service Layer API', 'DI Server']
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server & Transact-SQL',
    category: 'data',
    categoryLabel: 'ENTERPRISE DATABASE',
    role: 'Mission-critical relational ledger with ACID compliance, indexed views, and stored procedures.',
    benchmark: 'Zero Record Drift / Sub-Millisecond Reads',
    status: 'MISSION CRITICAL',
    tags: ['T-SQL', 'ACID Transactions', 'Indexed Views']
  },
  {
    id: 'react-next',
    name: 'React 19 & Next.js Architecture',
    category: 'frontend',
    categoryLabel: 'WEB SYSTEMS',
    role: 'High-performance desktop & tablet enterprise portals with deterministic state machines.',
    benchmark: '100 Lighthouse Performance / Zero Layout Shift',
    status: 'TIER-1 VERIFIED',
    tags: ['React 19', 'Next.js App Router', 'TypeScript 5.x']
  },
  {
    id: 'react-native',
    name: 'React Native & Offline SQLite Engine',
    category: 'frontend',
    categoryLabel: 'MOBILE & FIELD',
    role: 'Field operations and warehouse barcode scanner apps operating with zero connectivity.',
    benchmark: 'Local SQLite Queue / Automatic Conflict Resolution',
    status: 'MISSION CRITICAL',
    tags: ['React Native', 'Expo Bare', 'SQLite Local DB']
  },
  {
    id: 'nodejs-express',
    name: 'Node.js & Express REST / Microservices',
    category: 'backend',
    categoryLabel: 'API & MIDDLEWARE',
    role: 'High-throughput enterprise API gateway with granular role-based access control (RBAC).',
    benchmark: '15,000+ Req/Sec / Zero Runtime Exceptions',
    status: 'TIER-1 VERIFIED',
    tags: ['Node.js 22 LTS', 'JWT Security', 'Express Gateway']
  },
  {
    id: 'websockets-redis',
    name: 'Real-Time WebSockets & Redis Pub/Sub',
    category: 'backend',
    categoryLabel: 'TELEMETRY & STREAMS',
    role: 'Instant fleet tracking, dispatch alerts, and live operational inventory telemetry.',
    benchmark: '< 25ms Global Message Distribution',
    status: 'TIER-1 VERIFIED',
    tags: ['WebSocket Stream', 'Redis Cluster', 'Event Driven']
  },
  {
    id: 'hardware-scanners',
    name: 'Zebra / Honeywell & ESC-POS Integration',
    category: 'enterprise',
    categoryLabel: 'HARDWARE & EDGE',
    role: 'Direct serial/Bluetooth protocol drivers for warehouse ruggedized PDA scanners & thermal printers.',
    benchmark: '100% Deterministic Barcode Decodes',
    status: 'MISSION CRITICAL',
    tags: ['ESC/POS Protocol', 'Bluetooth SPP', 'Zebra DataWedge']
  },
  {
    id: 'security-rbac',
    name: 'OWASP Top 10 & Immutable Audit Logs',
    category: 'data',
    categoryLabel: 'SECURITY & COMPLIANCE',
    role: 'Cryptographic data signing, permission matrix enforcement, and audit ledger tracking.',
    benchmark: 'SOC-2 Aligned Architecture',
    status: 'MISSION CRITICAL',
    tags: ['AES-256 GCM', 'Audit Trails', 'RBAC Matrix']
  }
];

export const TechRadarSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');

  const filteredItems = activeCategory === 'all'
    ? RADAR_DATA
    : RADAR_DATA.filter(item => item.category === activeCategory);

  return (
    <section className="tech-radar-section section" id="tech-radar">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta">
          <span className="section-number">04</span>
          <span>// PRODUCTION TECHNOLOGY RADAR</span>
        </div>

        {/* Header */}
        <motion.div 
          className="radar-header-split"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="radar-headline font-display">
              CERTIFIED TECH STACK<br />
              <span className="italic-accent">& ARCHITECTURE MATRIX.</span>
            </h2>
            <p className="radar-subtitle">
              Tekmora engineers exclusively with proven, enterprise-grade technologies that guarantee high throughput, offline survivability, and zero runtime fragility.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="radar-filter-tabs font-mono">
            <button
              type="button"
              className={`radar-tab-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              ALL PROTOCOLS ({RADAR_DATA.length})
            </button>
            <button
              type="button"
              className={`radar-tab-btn ${activeCategory === 'enterprise' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('enterprise')}
            >
              ERP & SAP B1
            </button>
            <button
              type="button"
              className={`radar-tab-btn ${activeCategory === 'frontend' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('frontend')}
            >
              WEB & MOBILE
            </button>
            <button
              type="button"
              className={`radar-tab-btn ${activeCategory === 'backend' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('backend')}
            >
              APIS & TELEMETRY
            </button>
            <button
              type="button"
              className={`radar-tab-btn ${activeCategory === 'data' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('data')}
            >
              DATABASE & SECURITY
            </button>
          </div>
        </motion.div>

        {/* Radar Cards Grid */}
        <motion.div 
          className="radar-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="radar-card spotlight-card"
              variants={fadeInUp}
              whileHover={hoverLift}
            >
              <div className="radar-card-top font-mono">
                <span className="radar-cat-badge">{item.categoryLabel}</span>
                <span className={`radar-status-badge ${item.status === 'MISSION CRITICAL' ? 'status-critical' : ''}`}>
                  <CheckCircle2 size={11} className="text-orange" />
                  <span>{item.status}</span>
                </span>
              </div>

              <h3 className="radar-tech-name font-display">{item.name}</h3>
              <p className="radar-tech-role">{item.role}</p>

              <div className="radar-benchmark-box font-mono">
                <Zap size={13} className="text-orange" />
                <span>BENCHMARK: {item.benchmark}</span>
              </div>

              <div className="radar-tags-row font-mono">
                {item.tags.map(tag => (
                  <span key={tag} className="radar-tech-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
