export interface ArchitectureLayer {
  step: string;
  layer: string;
  focus: string;
  technologies: {
    name: string;
    verifiedUse: string;
    type: 'core' | 'framework' | 'database' | 'integration';
  }[];
  responsibilities: string[];
}

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    step: '01',
    layer: 'Interface & Client Layer',
    focus: 'Zero-latency interaction, clean typography, strict design tokens, and ergonomic accessibility.',
    technologies: [
      { name: 'React', verifiedUse: 'Web apps, enterprise dashboards & portals', type: 'core' },
      { name: 'Next.js', verifiedUse: 'High-performance web applications & SSR platforms', type: 'framework' },
      { name: 'React Native', verifiedUse: 'Cross-platform iOS & Android mobile clients', type: 'core' },
      { name: 'Expo', verifiedUse: 'Mobile build tooling, OTA updates & hardware APIs', type: 'framework' }
    ],
    responsibilities: [
      'Component-driven modular frontend',
      'Optimistic state updates and keyboard-first navigation',
      'Offline caching and touch-friendly mobile ergonomics'
    ]
  },
  {
    step: '02',
    layer: 'API & Communication Layer',
    focus: 'Deterministic contracts, schema validation, rate-limiting, and granular authorization.',
    technologies: [
      { name: 'Node.js', verifiedUse: 'High-concurrency backend services & workers', type: 'core' },
      { name: 'Express', verifiedUse: 'RESTful API endpoints & middleware pipelines', type: 'framework' },
      { name: 'REST APIs', verifiedUse: 'Standardized JSON endpoints with typed schemas', type: 'core' }
    ],
    responsibilities: [
      'Tokenized JWT authentication & granular RBAC',
      'Strict payload validation and error normalization',
      'Rate-limiting and request throttling'
    ]
  },
  {
    step: '03',
    layer: 'Business Logic & Processing',
    focus: 'Immutable business rules, multi-step approval workflows, and automated cron workers.',
    technologies: [
      { name: 'TypeScript', verifiedUse: 'End-to-end type safety across backend and clients', type: 'core' },
      { name: 'PHP 8.x', verifiedUse: 'Custom WordPress backends & custom plugins', type: 'framework' },
      { name: 'WordPress Core', verifiedUse: 'Tailored headless & custom CMS installations', type: 'framework' }
    ],
    responsibilities: [
      'State-machine driven workflow transitions',
      'Document parsing, OCR extraction, and reconciliation',
      'Automated background jobs and notification triggers'
    ]
  },
  {
    step: '04',
    layer: 'Data & Persistence Layer',
    focus: 'ACID compliance, schema normalization, query indexing, and automated backups.',
    technologies: [
      { name: 'SQL Server', verifiedUse: 'Enterprise ERP tables, complex relational schemas', type: 'database' },
      { name: 'PostgreSQL', verifiedUse: 'Transactional web applications & ledger storage', type: 'database' },
      { name: 'MongoDB', verifiedUse: 'Flexible document stores & telemetry logs', type: 'database' }
    ],
    responsibilities: [
      'Relational integrity and transactional safety',
      'Optimized read-replicas for real-time dashboards',
      'Encrypted backups and point-in-time recovery'
    ]
  },
  {
    step: '05',
    layer: 'Integrations & Enterprise ERP',
    focus: 'Safe two-way communication with enterprise backbones and third-party systems.',
    technologies: [
      { name: 'SAP Business One', verifiedUse: 'DI API & Service Layer ERP connectivity', type: 'integration' },
      { name: 'WooCommerce', verifiedUse: 'Custom e-commerce platforms & payment APIs', type: 'integration' },
      { name: 'Hardware APIs', verifiedUse: 'Barcode scanners, thermal printers, mobile GPS', type: 'integration' }
    ],
    responsibilities: [
      'Automated Goods Receipt (GRPO) posting to SAP',
      'Production order sync and inventory reconciliation',
      'Payment gateway and external logistics webhooks'
    ]
  }
];
