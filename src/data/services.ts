export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  detailedDescription: string;
  technologies: string[];
  deliverables: string[];
  systemFocus: string;
  specSnippet: {
    label: string;
    details: string;
  }[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Platforms',
    shortDesc: 'Custom React and Next.js applications connected to reliable APIs, databases and business workflows.',
    detailedDescription: 'We engineer robust, high-performance web applications built from the ground up for speed, precision, and heavy operational usage. Every interface is designed with a strict component architecture, eliminating bloat and optimizing real-world task efficiency.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS / CSS Modules'],
    deliverables: [
      'Custom SaaS & Web Portals',
      'Role-Based Operational Dashboards',
      'High-Throughput Data Grids',
      'Secure Authentication & Audit Logs'
    ],
    systemFocus: 'Architecture, state predictability, and low-latency interaction for heavy daily usage.',
    specSnippet: [
      { label: 'Frontend Stack', details: 'React 18 / Next.js / TypeScript' },
      { label: 'Data Layer', details: 'REST / GraphQL / WebSockets' },
      { label: 'Performance', details: 'Zero layout shift, <100ms UI response' }
    ]
  },
  {
    number: '02',
    title: 'Mobile Applications',
    shortDesc: 'React Native and Expo applications designed for real users, field teams and operational environments.',
    detailedDescription: 'Cross-platform iOS and Android applications that perform reliably in demanding physical environments. From field technician tools to spiritual companions, our mobile software is built with offline-first persistence, resilient syncing, and battery optimization.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Background Sync', 'Native Modules'],
    deliverables: [
      'Field Service & Inspection Apps',
      'Offline-First Data Capture',
      'Location & Geocoding Workflows',
      'Consumer & B2B Mobile Companions'
    ],
    systemFocus: 'Offline reliability, local SQLite caching, and ergonomic touch interfaces.',
    specSnippet: [
      { label: 'Platforms', details: 'iOS & Android (Single Codebase)' },
      { label: 'Persistence', details: 'Local SQLite & Delta Sync Queue' },
      { label: 'Hardware', details: 'Camera, GPS, Biometrics, Bluetooth' }
    ]
  },
  {
    number: '03',
    title: 'Enterprise Systems',
    shortDesc: 'Dashboards, portals, permissions, reporting and internal workflows for complex organizations.',
    detailedDescription: 'We replace fragile spreadsheets and disconnected legacy tools with structured enterprise software. We design multi-tiered authorization, centralized data models, automated approval matrices, and bespoke financial and HR management workflows.',
    technologies: ['React', 'Node.js / Express', 'SQL Server', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: [
      'Multi-Module ERP Systems',
      'Granular Role-Based Access Control (RBAC)',
      'Automated Workflow Approvals',
      'Executive Intelligence & Reports'
    ],
    systemFocus: 'Data integrity, granular security tiers, and cross-department visibility.',
    specSnippet: [
      { label: 'Security Model', details: 'Granular Row & Column-Level RBAC' },
      { label: 'Data Storage', details: 'ACID Compliant Relational Schemas' },
      { label: 'Audit Trail', details: 'Immutable Event & Change Logging' }
    ]
  },
  {
    number: '04',
    title: 'SAP & Warehouse Solutions',
    shortDesc: 'Applications connecting warehouse operations, production processes and SAP Business One data.',
    detailedDescription: 'Bridge the gap between your physical shop floor and your SAP Business One ERP. We build custom middleware, barcode scanning interfaces, Goods Receipt Note (GRN) automation, and production telemetry displays that communicate directly with SAP tables.',
    technologies: ['SAP Business One DI API', 'Service Layer', 'Node.js', 'SQL Server / SAP HANA', 'Express'],
    deliverables: [
      'Document OCR & Automated GRPO Creation',
      'Shop Floor & OEE Telemetry Monitors',
      'Batch, Lot & Expiry Tracking Systems',
      'Two-Way SAP Inventory Synchronization'
    ],
    systemFocus: 'Direct ERP connectivity, transaction safety, and shop floor throughput.',
    specSnippet: [
      { label: 'ERP Target', details: 'SAP Business One (SQL / HANA)' },
      { label: 'Interface', details: 'DI API / Service Layer / REST Middleware' },
      { label: 'Latency', details: 'Real-time transactional verification' }
    ]
  },
  {
    number: '05',
    title: 'WordPress Solutions',
    shortDesc: 'Custom WordPress websites, WooCommerce platforms and tailored plugins.',
    detailedDescription: 'Crafted WordPress solutions without the bloat of visual page builders. We build custom PHP themes, bespoke Gutenberg blocks, tailored WooCommerce checkout flows, and custom API plugins engineered for longevity, security, and extreme speed.',
    technologies: ['WordPress Core', 'PHP 8.x', 'WooCommerce', 'Custom REST Endpoints', 'JavaScript / React'],
    deliverables: [
      'Bespoke Custom PHP Themes',
      'Tailored WooCommerce Stores',
      'Proprietary Custom Plugins',
      'Headless WordPress Integrations'
    ],
    systemFocus: 'Clean code standards, lightweight database footprint, and high conversion velocity.',
    specSnippet: [
      { label: 'Theme Architecture', details: '100% Custom PHP / Zero Bloat Builders' },
      { label: 'E-Commerce', details: 'Custom WooCommerce Flows & Gateways' },
      { label: 'Speed Score', details: '95+ Google PageSpeed Optimization' }
    ]
  }
];
