export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  services: string[];
  technologies: string[];
  clientProblem: string;
  usersAndContext: string;
  developmentApproach: string;
  technicalArchitecture: string[];
  keyFeatures: { title: string; description: string }[];
  challengesAndDecisions: { challenge: string; decision: string }[];
  outcome: string;
  lessonsOrImprovements: string;
  visualType: 'full-interface' | 'mobile-dual' | 'workflow-diagram' | 'analytics-board' | 'clean-mobile' | 'editorial-poster';
  mockMetrics?: { label: string; value: string }[];
  highlights: string[];
  accentColor?: string;
}

export const PROJECTS: CaseStudy[] = [
  {
    id: 'dome-enterprise',
    slug: 'dome-enterprise',
    number: '01',
    title: 'DOME Enterprise Platform',
    client: 'Enterprise Industrial & Commercial Operations',
    tagline: 'An enterprise portal connecting finance, HR, CRM, sales, logistics and operational reporting.',
    category: 'Enterprise Systems & Web Platform',
    year: '2024 — Present',
    role: 'Full-Stack Lead Architect & Engineering',
    services: ['Enterprise Web Portal', 'Role-Based Access Control', 'Multi-Module ERP', 'Custom Reporting Engine'],
    technologies: ['React', 'TypeScript', 'Node.js / Express', 'SQL Server / PostgreSQL', 'REST APIs'],
    clientProblem: 'The client was running isolated legacy spreadsheets and disparate sub-systems for procurement, employee management, customer ticketing, and warehouse invoicing. Disconnected databases caused latency, duplicate entries, and a total lack of cross-departmental visibility for executive decision makers.',
    usersAndContext: 'Used daily by 200+ multi-departmental personnel: HR managers, procurement officers, sales leads, logistics coordinators, and C-level executives requiring real-time operational status without system friction.',
    developmentApproach: 'Designed a unified, modular architecture with strict design tokens, standardized data grid tables, centralized authentication with granular permission matrix, and real-time aggregation microservices.',
    technicalArchitecture: [
      'Frontend: Scalable React architecture with custom design system, zero box-shadows, keyboard shortcuts, and virtualized tables.',
      'API Gateway: Express/Node.js middleware layer managing tokenized RBAC, audit logging, and payload validation.',
      'Database: Normalized relational database schema with transactional integrity and partitioned reporting tables.',
      'Integrations: Automated background cron workers reconciling invoices, CRM pipeline stages, and inventory levels.'
    ],
    keyFeatures: [
      {
        title: 'Comprehensive Operations Hub',
        description: 'Single-pane view for managing cross-department workflows, pending approvals, and operational health metrics.'
      },
      {
        title: 'Granular Role & Department Access',
        description: 'Enterprise permissions controlling module access, row-level data visibility, and approval authorization tiers.'
      },
      {
        title: 'High-Throughput Data Tables',
        description: 'Standardized global table engine supporting multi-column sorting, sticky headers, advanced filtering, and instant export.'
      },
      {
        title: 'Automated Audit Logging',
        description: 'Immutable transaction trails recording user actions, status changes, and critical data updates.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Handling diverse departmental data models without creating bloated monolithic views.',
        decision: 'Built an atomic component system and modular route layout where each department module shares uniform table and action patterns while keeping schema models isolated.'
      },
      {
        challenge: 'Preventing UI lag when rendering thousands of inventory and sales entries.',
        decision: 'Implemented server-side pagination with windowed table rendering and structured debounce filters.'
      }
    ],
    outcome: 'Eliminated duplicate data entry across 4 main departments, decreased monthly report generation time from 3 days to instantaneous automated export, and unified company operations under one consistent platform.',
    lessonsOrImprovements: 'Moving forward, expanding the notification pipeline with webhook support and deeper offline caching for remote warehouse terminals.',
    visualType: 'full-interface',
    mockMetrics: [
      { label: 'Department Modules', value: '7 Connected' },
      { label: 'Report Latency', value: '< 200ms' },
      { label: 'Active Personnel', value: '250+ Daily' }
    ],
    highlights: ['Unified ERP Portal', 'Granular RBAC', 'Automated Workflows', 'Standardized Design System']
  },
  {
    id: 'matrix-field-service',
    slug: 'matrix-field-service',
    number: '02',
    title: 'Matrix Field Service App',
    client: 'Field Operations & Equipment Maintenance',
    tagline: 'A React Native application for field technicians, service dispatchers, and operational coordinators.',
    category: 'Mobile Applications',
    year: '2023 — 2024',
    role: 'Mobile Architecture & API Integration',
    services: ['Cross-Platform Mobile App', 'Offline Sync Engine', 'Geolocation Dispatch', 'Digital Work Orders'],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL / SQLite', 'REST APIs'],
    clientProblem: 'Field service technicians previously relied on physical paper job sheets and patchy messaging apps to report maintenance visits, part replacements, and customer signatures. This resulted in delayed billing cycles, lost job records, and zero real-time tracking.',
    usersAndContext: 'Engineers on the move operating in low-connectivity industrial sites, customer support coordinators dispatching emergency repairs, and clients signing off service completion.',
    developmentApproach: 'Engineered an offline-first mobile client using local SQLite persistence combined with deterministic queue syncing that guarantees job logs and photographic evidence upload cleanly upon network restoration.',
    technicalArchitecture: [
      'Mobile Client: React Native & Expo with custom low-light field UI, haptic feedback, and local SQLite state.',
      'Sync Engine: Bidirectional delta-sync protocol handling conflict resolution and media chunking.',
      'Backend: Node.js service exposing RESTful job dispatching endpoints and real-time push notification channels.',
      'Storage: Cloud object store for timestamped and geocoded repair verification images.'
    ],
    keyFeatures: [
      {
        title: 'Offline-First Work Orders',
        description: 'Complete inspection forms, capture diagnostic measurements, and collect signatures with zero connectivity.'
      },
      {
        title: 'Digital Signature & Evidence Capture',
        description: 'High-resolution photo annotation with timestamp and GPS coordinate watermarks for verification.'
      },
      {
        title: 'Intelligent Job Dispatching',
        description: 'Direct push notifications with navigation routing, priority tags, and customer historical service logs.'
      },
      {
        title: 'Spare Parts Requisition',
        description: 'Real-time inventory lookup allowing technicians to claim replacement items straight from mobile vans.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Unreliable 3G/4G coverage at remote industrial facilities causing dropped submissions.',
        decision: 'Implemented an asynchronous persistence queue with optimistic UI updates and background synchronization workers.'
      },
      {
        challenge: 'Battery drain and thermal throttling caused by continuous GPS tracking.',
        decision: 'Employed geofencing and motion-activity triggers instead of high-frequency GPS polling.'
      }
    ],
    outcome: 'Reduced field billing cycle turnaround from 6 business days to immediate same-day invoice generation; achieved 99.8% work order synchronization reliability.',
    lessonsOrImprovements: 'Integrated biometric fast authentication to allow field technicians to log in instantly while wearing protective work gloves.',
    visualType: 'mobile-dual',
    mockMetrics: [
      { label: 'Job Sync Reliability', value: '99.8%' },
      { label: 'Invoice Turnaround', value: 'Same-day' },
      { label: 'Field Technicians', value: '80+ Active' }
    ],
    highlights: ['Offline SQLite Sync', 'Digital Work Orders', 'GPS Geocoding', 'React Native & Expo']
  },
  {
    id: 'warehouse-grn-automation',
    slug: 'warehouse-grn-automation',
    number: '03',
    title: 'Warehouse & GRN Automation',
    client: 'Supply Chain & Distribution Logistics',
    tagline: 'A warehouse workflow combining document extraction, purchase-order matching, batch handling and SAP integration.',
    category: 'Operational Systems & Integrations',
    year: '2024',
    role: 'System Integration & Automation Engineer',
    services: ['Document OCR & Parsing', 'PO Reconciliation Engine', 'Batch & Expiry Validation', 'SAP B1 Middleware'],
    technologies: ['Node.js', 'Express', 'SQL Server', 'SAP Business One DI API', 'React'],
    clientProblem: 'Receiving docks manually cross-checked printed vendor Goods Receipt Notes (GRNs) against open SAP purchase orders line by line. Manual verification created dock bottlenecks, frequent data entry errors in lot numbers, and delayed warehouse bin allocation.',
    usersAndContext: 'Warehouse receiving managers, dock workers scanning delivery pallets, and inventory procurement analysts auditing shipment discrepancies.',
    developmentApproach: 'Built a specialized automation pipeline that parses digital invoices, matches SKU line items with SAP open purchase orders, flags quantity/cost deviations, and commits verified receipts directly to SAP Business One.',
    technicalArchitecture: [
      'Document Ingestion: Automated PDF/image parsing pipeline extracting vendor details, PO numbers, and batch items.',
      'Reconciliation Engine: Rule-based matching engine verifying tolerances, unit of measurement conversions, and price accuracy.',
      'Integration Layer: Custom SAP Business One Service Layer connector creating Goods Receipt PO (GRPO) transactions automatically.',
      'Warehouse UI: Touchscreen-friendly receiving console highlighting discrepancies with visual color codes.'
    ],
    keyFeatures: [
      {
        title: 'Automated PO Reconciler',
        description: 'Auto-matches vendor shipment items to active purchase orders with tolerance verification.'
      },
      {
        title: 'Batch & Lot Tracking',
        description: 'Mandatory batch and expiry validation prior to committing stock to warehouse bins.'
      },
      {
        title: 'Direct SAP B1 Integration',
        description: 'Real-time API creation of Goods Receipt POs with rollback handling in case of validation failures.'
      },
      {
        title: 'Discrepancy Exception Management',
        description: 'Instant supervisor alerts and split-receipt routing when delivered quantities deviate from agreed terms.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Inconsistent invoice layouts across different domestic and international vendors.',
        decision: 'Implemented a templated extraction pipeline with flexible fuzzy matching algorithms for vendor SKU aliases.'
      },
      {
        challenge: 'Handling lock timeouts and concurrent transactions on SAP Business One backend during peak hours.',
        decision: 'Constructed an in-memory queue with rate-limited worker threads and retry policies.'
      }
    ],
    outcome: 'Accelerated receiving dock processing from 45 minutes per shipment to under 4 minutes; eliminated human transposition errors in batch numbering.',
    lessonsOrImprovements: 'Added direct barcode printing triggers for pallet labeling at the moment of SAP receipt confirmation.',
    visualType: 'workflow-diagram',
    mockMetrics: [
      { label: 'Dock Processing', value: '< 4 Mins' },
      { label: 'Entry Error Rate', value: '0.0%' },
      { label: 'SAP Receipts', value: '1,200+/Mo' }
    ],
    highlights: ['Document Extraction', 'PO Reconciliation', 'Batch & Lot Handling', 'SAP B1 DI Integration']
  },
  {
    id: 'sap-b1-production-dashboard',
    slug: 'sap-b1-production-dashboard',
    number: '04',
    title: 'SAP B1 Production Dashboard',
    client: 'Industrial Manufacturing & Plant Operations',
    tagline: 'Production intelligence covering manufacturing activity, inventory, machine performance and cost analysis.',
    category: 'Enterprise Systems & Analytics',
    year: '2023 — 2024',
    role: 'Full-Stack Architecture & Data Engineering',
    services: ['Manufacturing Intelligence', 'Production Floor Monitor', 'SAP B1 Data Warehouse', 'OEE & Yield Analytics'],
    technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server / SAP HANA', 'REST APIs'],
    clientProblem: 'Plant managers and production directors had no real-time visibility into active production orders, scrap percentages, machine idle time, or true bill-of-materials (BOM) cost variances until month-end SAP reports were compiled.',
    usersAndContext: 'Factory floor supervisors, manufacturing plant managers, quality assurance leads, and financial cost controllers needing live floor metrics on overhead monitors and tablets.',
    developmentApproach: 'Engineered a real-time analytics portal backed by an optimized read-replica database connected to SAP Business One, delivering instantaneous production KPIs and live bottleneck tracking.',
    technicalArchitecture: [
      'Data Extraction: High-performance SQL queries tapping SAP Production Orders, Issue for Production, and Receipt from Production tables.',
      'Cache & Aggregation: Node.js telemetry aggregator refreshing shift performance metrics in sub-second intervals.',
      'Frontend Visuals: Bespoke SVG gauges, timeline flowcharts, and status heatmaps with zero third-party chart bloat.',
      'Alerting Service: Automated thresholds flagging sudden yield drops or material consumption anomalies.'
    ],
    keyFeatures: [
      {
        title: 'Live Floor Telemetry',
        description: 'Real-time tracking of active production orders, current stage completion, and remaining shift targets.'
      },
      {
        title: 'BOM Cost & Scrap Analysis',
        description: 'Instant comparison between planned versus actual raw material usage and scrap generation.'
      },
      {
        title: 'Machine Utilization & OEE',
        description: 'Tracking availability, performance efficiency, and quality rates across discrete manufacturing lines.'
      },
      {
        title: 'Shift & Operator Productivity',
        description: 'Comparative analytics highlighting shift output benchmarks and bottleneck stages.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Heavy queries directly against production SAP tables caused database lockups.',
        decision: 'Designed a lightweight read-replica sync mechanism with indexed materialized views for real-time dashboards.'
      },
      {
        challenge: 'Displaying complex floor layouts legibly on large 65-inch overhead plant displays.',
        decision: 'Built high-contrast dark industrial UI with large numerical indicators and strict visual hierarchy.'
      }
    ],
    outcome: 'Gave leadership real-time visibility into 12 manufacturing lines, reduced scrap waste by 14% through faster anomaly detection, and eliminated month-end reporting delays.',
    lessonsOrImprovements: 'Added export capabilities for predictive maintenance scheduling based on machine operating hours.',
    visualType: 'analytics-board',
    mockMetrics: [
      { label: 'Scrap Reduction', value: '-14%' },
      { label: 'Lines Monitored', value: '12 Active' },
      { label: 'Telemetry Refresh', value: 'Real-Time' }
    ],
    highlights: ['Real-Time OEE', 'SAP B1 HANA Data', 'Scrap Telemetry', 'Plant Floor Monitors']
  },
  {
    id: 'quran-ayat-app',
    slug: 'quran-ayat-app',
    number: '05',
    title: 'Quran / Ayat Mobile Companion',
    client: 'Digital Product & Mobile Experience',
    tagline: 'A calm mobile Islamic companion for Quran reading, ayah reflection, prayer calculations, and daily spiritual features.',
    category: 'Mobile Applications',
    year: '2023',
    role: 'Mobile Product Design & Engineering',
    services: ['Mobile App Design', 'React Native Development', 'Offline Audio & Text Storage', 'Astronomical Calculations'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Audio Engine'],
    clientProblem: 'Many existing religious applications are cluttered with intrusive ads, noisy animations, confusing menus, and aggressive monetization that disrupt spiritual focus.',
    usersAndContext: 'Global Muslims seeking a respectful, minimalist, and dependable daily companion for recitation, ayah bookmarking, accurate prayer times, and offline tafsir reading.',
    developmentApproach: 'Built a serene, distraction-free mobile client with calibrated Arabic typography, smooth verse scrolling, offline SQLite text database, and accurate local prayer calculation algorithms.',
    technicalArchitecture: [
      'Mobile Framework: React Native with Expo bare workflow and optimized typography rendering for Arabic Uthmani script.',
      'Storage: Completely bundled local SQLite database containing 6,236 verses, translations, and word-by-word metadata.',
      'Audio Player: Background audio streaming engine supporting reciter selection and ayah-by-ayah synchronized highlighting.',
      'Algorithms: Native celestial math algorithms computing accurate prayer times based on user coordinates.'
    ],
    keyFeatures: [
      {
        title: 'Calibrated Arabic Typography',
        description: 'Carefully typeset Uthmani script with adjustable font sizing, diacritics clarity, and night reading themes.'
      },
      {
        title: '100% Offline Recitation',
        description: 'Complete Quran text and multiple translations accessible without internet connection.'
      },
      {
        title: 'Precise Astronomical Prayer Times',
        description: 'Offline mathematical calculation based on GPS latitude/longitude with custom juristic methods.'
      },
      {
        title: 'Audio Recitation Sync',
        description: 'Ayah-by-ayah recitation playback with synchronized active verse spotlighting.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ensuring perfect Arabic font glyph rendering and correct ligatures across varying Android OEM devices.',
        decision: 'Implemented custom font rendering wrappers with strict line-height and baseline alignments.'
      },
      {
        challenge: 'Managing audio caching for multi-reciter offline listening without bloating device memory.',
        decision: 'Constructed an on-demand surah cache manager with smart background cleanup of unused audio tracks.'
      }
    ],
    outcome: 'Delivered an elegant, 5-star rated experience praised for its calmness, zero advertisements, and lightning-fast verse navigation.',
    lessonsOrImprovements: 'Introduced customizable thematic collections and daily ayah reflection widgets.',
    visualType: 'clean-mobile',
    mockMetrics: [
      { label: 'App Rating', value: '4.9 ★' },
      { label: 'Offline Verses', value: '6,236' },
      { label: 'Ad Bloat', value: '0%' }
    ],
    highlights: ['Serene Minimalist UI', 'Uthmani Typography', '100% Offline SQLite', 'Zero Ads']
  },
  {
    id: 'citi-books-platform',
    slug: 'citi-books-platform',
    number: '06',
    title: 'Citi Books Platform',
    client: 'Commercial Accounting & Financial Operations',
    tagline: 'A connected web, mobile and backend platform supporting business accounting and ledger operations.',
    category: 'Web & Mobile Financial Platform',
    year: '2023 — 2024',
    role: 'Full-Stack Lead Developer',
    services: ['Web Accounting Platform', 'Mobile Companion App', 'Double-Entry Ledger', 'Tax & Invoice Management'],
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'REST APIs'],
    clientProblem: 'Growing commercial businesses needed a modern financial accounting system that bridges web-based back-office bookkeeping with mobile invoicing for sales teams on the road, without the bloat and complexity of traditional enterprise software.',
    usersAndContext: 'Accountants managing double-entry journal ledgers, business owners reviewing cashflow dashboards, and mobile field agents generating customer sales receipts.',
    developmentApproach: 'Architected a unified ledger backend with concurrent web and mobile clients sharing transactional rules, tax calculations, and real-time ledger balance validation.',
    technicalArchitecture: [
      'Backend Core: Node.js & PostgreSQL financial ledger engine ensuring ACID transactional compliance.',
      'Web Dashboard: React application with keyboard-driven journal entries, bank reconciliations, and financial statements.',
      'Mobile Client: React Native companion app for on-the-spot invoice generation and customer payment collection.',
      'Security: JWT authorization with session invalidation, data encryption at rest, and automated backup routines.'
    ],
    keyFeatures: [
      {
        title: 'Double-Entry General Ledger',
        description: 'Strict debit/credit validation guaranteeing balanced accounts across all operational journals.'
      },
      {
        title: 'Cross-Device Invoicing',
        description: 'Create estimates, convert to invoices, and record partial customer payments on web or mobile.'
      },
      {
        title: 'Cashflow & Profit Intelligence',
        description: 'Automated Profit & Loss, Balance Sheet, and Aging Receivables reporting generated on demand.'
      },
      {
        title: 'Multi-Currency & Tax Engine',
        description: 'Configurable tax rules and exchange rate conversions tailored for international trade.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Maintaining absolute numerical precision without floating-point rounding errors in ledger calculations.',
        decision: 'Enforced integer-based fractional unit storage in PostgreSQL and specialized decimal arithmetic libraries.'
      },
      {
        challenge: 'Ensuring seamless offline invoice drafting for mobile agents in transit.',
        decision: 'Designed an offline voucher state that locks invoice sequences and commits to server once back online.'
      }
    ],
    outcome: 'Deployed across active commercial enterprises, processing thousands of daily ledger entries with zero reconciliation drift.',
    lessonsOrImprovements: 'Added direct bank statement CSV parser for automated journal reconciliation.',
    visualType: 'editorial-poster',
    mockMetrics: [
      { label: 'Ledger Precision', value: '100% ACID' },
      { label: 'Platform Availability', value: '99.95%' },
      { label: 'Vouchers Processed', value: '50k+/Mo' }
    ],
    highlights: ['Double-Entry Core', 'Web & Mobile Invoicing', 'ACID Compliance', 'Financial Analytics']
  }
];
