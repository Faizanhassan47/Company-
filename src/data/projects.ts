export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  filterCategory: 'enterprise' | 'mobile' | 'ecommerce' | 'business-platforms' | 'healthcare' | 'warehouse-sap' | 'company-websites';
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
  liveUrl?: string;
  imageUrl?: string;
}

export const PROJECTS: CaseStudy[] = [
  {
    id: 'dome-enterprise',
    slug: 'dome-enterprise',
    number: '01',
    title: 'DOME Enterprise Platform',
    client: 'Enterprise Commercial Operations',
    tagline: 'An enterprise platform connecting finance, HR, CRM, sales, logistics, inventory, approvals and operational reporting.',
    imageUrl: '/images/projects/dome-enterprise.jpg',
    category: 'Enterprise Management Platform',
    filterCategory: 'enterprise',
    year: '2024',
    role: 'Full-Stack Architecture & Engineering',
    services: ['Enterprise Web Portal', 'Role-Based Access Control', 'Multi-Module ERP', 'Custom Reporting Engine'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'SQL Server'],
    clientProblem: 'The organization operated isolated legacy spreadsheets and disparate sub-systems for procurement, employee records, customer ticketing, and warehouse invoicing. Disconnected databases caused latency, duplicate entries, and a total lack of cross-departmental visibility for executive decision makers.',
    usersAndContext: 'Used daily by 200+ multi-departmental personnel: HR managers, procurement officers, sales leads, logistics coordinators, and C-level executives requiring real-time operational status without system friction.',
    developmentApproach: 'Tekmora designed a unified, modular architecture with strict design tokens, standardized data grid tables, centralized authentication with granular permission matrix, and real-time aggregation microservices.',
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
    title: 'Matrix Field Service Application',
    client: 'Field Operations & Equipment Maintenance',
    tagline: 'A field-service mobile application supporting technicians, customers and operational teams.',
    imageUrl: '/images/projects/matrix-field.jpg',
    category: 'Mobile Field Operations',
    filterCategory: 'mobile',
    year: '2023 — 2024',
    role: 'Mobile Architecture & API Integration',
    services: ['Cross-Platform Mobile App', 'Offline Sync Engine', 'Geolocation Dispatch', 'Digital Work Orders'],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'SQLite'],
    clientProblem: 'Field service technicians previously relied on physical paper job sheets and patchy messaging apps to report maintenance visits, part replacements, and customer signatures. This resulted in delayed billing cycles, lost job records, and zero real-time tracking.',
    usersAndContext: 'Engineers on the move operating in low-connectivity industrial sites, customer support coordinators dispatching emergency repairs, and clients signing off service completion.',
    developmentApproach: 'Tekmora engineered an offline-first mobile client using local SQLite persistence combined with deterministic queue syncing that guarantees job logs and photographic evidence upload cleanly upon network restoration.',
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
    imageUrl: '/images/projects/warehouse-wms.jpg',
    category: 'Warehouse Automation & SAP Integration',
    filterCategory: 'warehouse-sap',
    year: '2024',
    role: 'System Integration & Automation Engineering',
    services: ['Document OCR & Parsing', 'PO Reconciliation Engine', 'Batch & Expiry Validation', 'SAP B1 Middleware'],
    technologies: ['Node.js', 'Express', 'SQL Server', 'SAP Business One DI API', 'React'],
    clientProblem: 'Receiving docks manually cross-checked printed vendor Goods Receipt Notes (GRNs) against open SAP purchase orders line by line. Manual verification created dock bottlenecks, frequent data entry errors in lot numbers, and delayed warehouse bin allocation.',
    usersAndContext: 'Warehouse receiving managers, dock workers scanning delivery pallets, and inventory procurement analysts auditing shipment discrepancies.',
    developmentApproach: 'Tekmora built a specialized automation pipeline that parses digital invoices, matches SKU line items with SAP open purchase orders, flags quantity/cost deviations, and commits verified receipts directly to SAP Business One.',
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
    id: 'shoestops',
    slug: 'shoestops',
    number: '04',
    title: 'Shoestops',
    client: 'Shoestops Retail & Footwear',
    tagline: 'A MERN-based e-commerce platform with product management, secure authentication, an administration dashboard and dynamic product routing.',
    imageUrl: '/images/projects/shoestops-ecommerce.jpg',
    category: 'E-Commerce Platform',
    filterCategory: 'ecommerce',
    year: '2024',
    role: 'Full-Stack Web Engineering',
    services: ['E-Commerce Platform', 'Admin Dashboard', 'User Authentication', 'Product Catalog Engine'],
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js'],
    clientProblem: 'The brand required a bespoke e-commerce storefront with high conversion velocity, granular inventory controls, fast dynamic product indexing, and a responsive administrative backend to handle multi-variant footwear lines.',
    usersAndContext: 'Consumers shopping across diverse shoe categories and internal staff managing product variants, pricing tiers, and fulfillment statuses.',
    developmentApproach: 'Tekmora engineered a high-performance Next.js storefront combined with an Express/Node.js API and MongoDB database, implementing server-side rendering for optimal search indexing and instantaneous category transitions.',
    technicalArchitecture: [
      'Storefront: Next.js with optimized dynamic image delivery, sub-second routing, and accessible checkout forms.',
      'API & Auth: Node.js/Express with JWT session management and role-guarded administrative endpoints.',
      'Data Model: Document schema in MongoDB tailored for multi-attribute footwear (sizes, colorways, inventory bins).'
    ],
    keyFeatures: [
      {
        title: 'Dynamic Product Routing & SEO',
        description: 'Server-rendered product pages with automated OpenGraph tags and search-optimized URL structures.'
      },
      {
        title: 'Administrative Inventory Hub',
        description: 'Complete CRUD management for footwear variants, discount schedules, and order fulfillment states.'
      },
      {
        title: 'Secure Customer Authentication',
        description: 'JWT authorization for customer order tracking, saved wishlists, and encrypted payment handoffs.'
      },
      {
        title: 'Multi-Variant Filtering',
        description: 'Instant client-side filter engine by size, color, brand, and pricing with zero reload delay.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Managing complex shopping cart persistence across mobile and desktop browser sessions.',
        decision: 'Implemented an synchronized local storage and server session fallback strategy.'
      }
    ],
    outcome: 'Achieved sub-second page transition speeds, increased conversion rates, and streamlined catalog updates for the client team.',
    lessonsOrImprovements: 'Integrating real-time courier tracking webhooks and additional payment gateway providers.',
    visualType: 'full-interface',
    mockMetrics: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'Catalog Size', value: '1,500+ SKUs' },
      { label: 'Cart Latency', value: '< 50ms' }
    ],
    highlights: ['Next.js SSR', 'Dynamic Catalog', 'Admin Console', 'MERN Architecture']
  },
  {
    id: 'comments-fusion',
    slug: 'comments-fusion',
    number: '05',
    title: 'Comments Fusion',
    client: 'Business Automation & Engagement Platform',
    tagline: 'A full-stack engagement automation platform with authentication, protected routes, dashboards and campaign workflows.',
    imageUrl: '/images/projects/comments-fusion.jpg',
    category: 'Business Automation Platform',
    filterCategory: 'business-platforms',
    year: '2024',
    role: 'Full-Stack Engineering & System Architecture',
    services: ['Automation Workflows', 'Campaign Management', 'User Dashboards', 'API Scheduling Engine'],
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    clientProblem: 'Marketing teams and business development specialists spent hours each week manually tracking and scheduling targeted outreach and professional network engagement campaigns across multiple accounts.',
    usersAndContext: 'Growth managers, agency teams, and business executives executing structured multi-channel audience engagement strategies.',
    developmentApproach: 'Tekmora developed a secure, scalable web automation platform with protected routes, intuitive operational dashboards, and scheduled campaign workers with strict rate-limiting compliance.',
    technicalArchitecture: [
      'Frontend: Next.js application tailored for rich interactive dashboards and real-time campaign monitors.',
      'Backend: Node.js worker queues handling scheduling algorithms and asynchronous task dispatching.',
      'Security: Granular tokenized authorization with rate-limit protection and audit logs.'
    ],
    keyFeatures: [
      {
        title: 'Scheduled Campaign Engine',
        description: 'Configure and monitor structured outreach and engagement workflows with time-zone awareness.'
      },
      {
        title: 'Protected Route Architecture',
        description: 'Strict role-guarded views isolating tenant configurations and campaign analytics.'
      },
      {
        title: 'Interactive Operations Console',
        description: 'Live visual indicators for pending, active, and completed engagement cycles.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ensuring automation queues run reliably without encountering external platform rate limits.',
        decision: 'Engineered exponential backoff retries and intelligent jitter delays across all scheduled workers.'
      }
    ],
    outcome: 'Eliminated up to 15 hours of repetitive manual engagement tasks per user weekly while maintaining 99.9% campaign uptime.',
    lessonsOrImprovements: 'Added customizable reporting exports and multi-tenant team collaboration roles.',
    visualType: 'workflow-diagram',
    mockMetrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Weekly Time Saved', value: '15+ Hrs' },
      { label: 'Queue Throughput', value: 'Real-Time' }
    ],
    highlights: ['Scheduled Workflows', 'Protected Dashboards', 'Queue Processing', 'Next.js & Node']
  },
  {
    id: 'transcend-healthcare',
    slug: 'transcend-healthcare',
    number: '06',
    title: 'Transcend Healthcare',
    client: 'Healthcare Services & Medical Group',
    tagline: 'A healthcare website with dynamic routing, CMS-managed content, multilingual support and URL-based navigation.',
    imageUrl: '/images/projects/transcend-healthcare.jpg',
    category: 'Healthcare Website & CMS',
    filterCategory: 'healthcare',
    year: '2023',
    role: 'Frontend Engineering & CMS Architecture',
    services: ['CMS Integration', 'Multi-Language Support', 'Dynamic Routing', 'Medical Directory Engine'],
    technologies: ['Next.js', 'Strapi CMS', 'Tailwind CSS', 'i18n Localization'],
    clientProblem: 'The healthcare provider needed a fast, accessible, multilingual digital platform where non-technical medical staff could easily update specialist directories, departmental clinical schedules, and patient intake resources without code deployments.',
    usersAndContext: 'Patients seeking reliable medical guidance and appointment routing across diverse languages, alongside hospital administrative staff updating clinical listings.',
    developmentApproach: 'Tekmora architected a headless CMS structure using Strapi integrated with Next.js static site generation and incremental regeneration to guarantee extreme performance and instant multilingual switching.',
    technicalArchitecture: [
      'Frontend: Next.js with SSG and ISR ensuring sub-second global page loads.',
      'Headless CMS: Strapi CMS with custom content types for clinicians, facilities, and care programs.',
      'Localization: Native i18n routing preserving SEO parameters across language locales.'
    ],
    keyFeatures: [
      {
        title: 'Multilingual Patient Experience',
        description: 'Comprehensive i18n localization allowing instant language toggle without page reloads.'
      },
      {
        title: 'Dynamic Clinical Directory',
        description: 'Filterable specialist and department directories powered by structured headless CMS data.'
      },
      {
        title: 'URL-Aware Navigation',
        description: 'Context-sensitive menus adapting automatically to active medical divisions and language roots.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Maintaining accessible contrast and strict WCAG AA healthcare standards across all color themes.',
        decision: 'Implemented an audited design token palette with verified 7:1 contrast ratios for critical patient text.'
      }
    ],
    outcome: 'Broadened patient access across diverse linguistic groups, achieved perfect 100 Lighthouse performance scores, and reduced content update turnaround from days to minutes.',
    lessonsOrImprovements: 'Added downloadable patient preparation PDFs dynamically rendered from CMS records.',
    visualType: 'editorial-poster',
    mockMetrics: [
      { label: 'Performance', value: '100/100' },
      { label: 'Languages', value: 'Multilingual' },
      { label: 'Content Speed', value: 'Instant' }
    ],
    highlights: ['Headless CMS', 'i18n Localization', 'WCAG AA Accessibility', 'Next.js & Strapi']
  },
  {
    id: 'sap-b1-production-dashboard',
    slug: 'sap-b1-production-dashboard',
    number: '07',
    title: 'SAP Business One Production Dashboard',
    client: 'Industrial Manufacturing & Plant Operations',
    tagline: 'Production intelligence covering manufacturing activity, inventory, machine performance and cost analysis.',
    imageUrl: '/images/projects/sap-b1-analytics.jpg',
    category: 'Manufacturing & SAP Integration',
    filterCategory: 'warehouse-sap',
    year: '2023 — 2024',
    role: 'Full-Stack Architecture & Data Engineering',
    services: ['Manufacturing Intelligence', 'Production Floor Monitor', 'SAP B1 Data Warehouse', 'OEE & Yield Analytics'],
    technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server', 'SAP Business One'],
    clientProblem: 'Plant managers and production directors had no real-time visibility into active production orders, scrap percentages, machine idle time, or true bill-of-materials (BOM) cost variances until month-end SAP reports were compiled.',
    usersAndContext: 'Factory floor supervisors, manufacturing plant managers, quality assurance leads, and financial cost controllers needing live floor metrics on overhead monitors and tablets.',
    developmentApproach: 'Tekmora engineered a real-time analytics portal backed by an optimized read-replica database connected to SAP Business One, delivering instantaneous production KPIs and live bottleneck tracking.',
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
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Heavy queries directly against production SAP tables caused database lockups.',
        decision: 'Designed a lightweight read-replica sync mechanism with indexed materialized views for real-time dashboards.'
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
    highlights: ['Real-Time OEE', 'SAP B1 SQL Data', 'Scrap Telemetry', 'Plant Floor Monitors']
  },
  {
    id: 'quran-ayat-app',
    slug: 'quran-ayat-app',
    number: '08',
    title: 'Quran / Ayat Mobile Application',
    client: 'Digital Product & Mobile Experience',
    tagline: 'A calm mobile Islamic companion for Quran reading, ayah reflection, prayer calculations, and daily spiritual features.',
    imageUrl: '/images/projects/quran-ayat.jpg',
    category: 'Mobile Application',
    filterCategory: 'mobile',
    year: '2023',
    role: 'Mobile Product Design & Engineering',
    services: ['Mobile App Design', 'React Native Development', 'Offline Audio & Text Storage', 'Astronomical Calculations'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Audio Engine'],
    clientProblem: 'Many existing religious applications are cluttered with intrusive ads, noisy animations, confusing menus, and aggressive monetization that disrupt spiritual focus.',
    usersAndContext: 'Global users seeking a respectful, minimalist, and dependable daily companion for recitation, ayah bookmarking, accurate prayer times, and offline tafsir reading.',
    developmentApproach: 'Tekmora built a serene, distraction-free mobile client with calibrated Arabic typography, smooth verse scrolling, offline SQLite text database, and accurate local prayer calculation algorithms.',
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
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ensuring perfect Arabic font glyph rendering and correct ligatures across varying Android OEM devices.',
        decision: 'Implemented custom font rendering wrappers with strict line-height and baseline alignments.'
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
    number: '09',
    title: 'Citi Books Platform',
    client: 'Commercial Accounting & Financial Operations',
    tagline: 'A connected web, mobile and backend platform supporting business accounting and ledger operations.',
    imageUrl: '/images/projects/citi-books.jpg',
    category: 'Financial & Business Platform',
    filterCategory: 'business-platforms',
    year: '2023 — 2024',
    role: 'Full-Stack Engineering & Financial Ledger Design',
    services: ['Web Accounting Platform', 'Mobile Companion App', 'Double-Entry Ledger', 'Tax & Invoice Management'],
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'REST APIs'],
    clientProblem: 'Growing commercial businesses needed a modern financial accounting system that bridges web-based back-office bookkeeping with mobile invoicing for sales teams on the road, without the bloat and complexity of traditional legacy ERPs.',
    usersAndContext: 'Accountants managing double-entry journal ledgers, business owners reviewing cashflow dashboards, and mobile field agents generating customer sales receipts.',
    developmentApproach: 'Tekmora architected a unified ledger backend with concurrent web and mobile clients sharing transactional rules, tax calculations, and real-time ledger balance validation.',
    technicalArchitecture: [
      'Backend Core: Node.js & PostgreSQL financial ledger engine ensuring ACID transactional compliance.',
      'Web Dashboard: React application with keyboard-driven journal entries, bank reconciliations, and financial statements.',
      'Mobile Client: React Native companion app for on-the-spot invoice generation and customer payment collection.'
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
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Maintaining absolute numerical precision without floating-point rounding errors in ledger calculations.',
        decision: 'Enforced integer-based fractional unit storage in PostgreSQL and specialized decimal arithmetic libraries.'
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
  },
  {
    id: 'fitness-mobile-app',
    slug: 'fitness-mobile-app',
    number: '10',
    title: 'Fitness Mobile Application',
    client: 'Health & Athletic Training',
    tagline: 'A cross-platform React Native fitness tracking and workout regimen application with offline logging and progress analytics.',
    imageUrl: '/images/projects/fitness-mobile.jpg',
    category: 'Mobile Application',
    filterCategory: 'mobile',
    year: '2023',
    role: 'Mobile Engineering & UI Architecture',
    services: ['Mobile App Development', 'Offline Telemetry', 'Interactive Workout Engine', 'Health Analytics'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'SQLite'],
    clientProblem: 'Fitness enthusiasts and personal training clients needed an offline-resilient training app that tracks workout routines, rest intervals, and progressive overload metrics without requiring continuous cell reception in subterranean gyms.',
    usersAndContext: 'Athletes following custom training programs and personal trainers assigning structured workout splits.',
    developmentApproach: 'Tekmora built a lightweight React Native client featuring a zero-latency workout timer, local SQLite log storage, and synchronized cloud metrics when connected.',
    technicalArchitecture: [
      'Mobile Framework: React Native with Expo and native haptic triggers for rest interval timing.',
      'Persistence: Local SQLite caching for full offline workout execution and historical logs.',
      'Analytics: Custom visualization of 1RM estimates, volume loads, and consistency streaks.'
    ],
    keyFeatures: [
      {
        title: 'Zero-Latency Workout Execution',
        description: 'Quick set logging, rest timer overlays, and previous weight benchmarks displayed in real time.'
      },
      {
        title: 'Progressive Overload Analytics',
        description: 'Visual volume progression graphs and estimated 1-rep maximum calculations.'
      },
      {
        title: '100% Offline Capability',
        description: 'Complete workout tracking and historical reference without internet dependence.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Maintaining timer precision when app is backgrounded or screen locks during rest intervals.',
        decision: 'Implemented native background timer notifications and state timestamp diffing.'
      }
    ],
    outcome: 'Delivered an intuitive, reliable training companion with high daily retention and rapid workout logging.',
    lessonsOrImprovements: 'Added customizable workout split templates and superset pairing tools.',
    visualType: 'clean-mobile',
    mockMetrics: [
      { label: 'Log Speed', value: '< 2 Sec' },
      { label: 'Offline Ready', value: '100%' },
      { label: 'Crash Rate', value: '< 0.01%' }
    ],
    highlights: ['React Native', 'Offline SQLite', 'Haptic Rest Timer', 'Volume Analytics']
  },
  {
    id: 'leoedge-dashboard',
    slug: 'leoedge-dashboard',
    number: '11',
    title: 'LeoEdge Dashboard',
    client: 'Corporate Operations & HR Management',
    tagline: 'A full-stack operations and HR portal for tracking employee attendance, automated payroll deductions, and administrative reporting.',
    imageUrl: '/images/projects/leoedge-hr.jpg',
    category: 'Corporate HR & Operations',
    filterCategory: 'enterprise',
    year: '2023',
    role: 'Full-Stack Engineering',
    services: ['HR Management System', 'Attendance Tracking', 'Payroll Automation', 'Role-Based Access'],
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js'],
    clientProblem: 'The company struggled with manual attendance reconciliation and complex payroll deduction calculations that caused frequent administrative bottlenecks and payroll delays.',
    usersAndContext: 'HR managers calculating monthly payroll and employees reviewing their attendance records, leave balances, and salary slips.',
    developmentApproach: 'Tekmora architected a unified operations dashboard focused on deterministic payroll calculations, audit logs, and clear data visualization.',
    technicalArchitecture: [
      'Frontend: Next.js with custom data grids and exportable payroll reports.',
      'Backend: Node.js/Express API with custom business logic for attendance-based salary calculations.',
      'Security: JWT authentication with granular permissions for HR admins and general staff.'
    ],
    keyFeatures: [
      {
        title: 'Automated Payroll Deductions',
        description: 'Calculates net salary automatically based on clocked hours, late policies, and approved leaves.'
      },
      {
        title: 'Centralized Employee Directory',
        description: 'Comprehensive repository of personnel records, department assignments, and contract details.'
      },
      {
        title: 'Granular Role Permissions',
        description: 'Role-based access separating confidential payroll data from general company dashboards.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Handling complex date-time attendance logs across multi-shift operational schedules.',
        decision: 'Standardized all timestamps to UTC on the backend with client-side localization and shift rule sets.'
      }
    ],
    outcome: 'Cut monthly payroll processing time by 70% and eliminated human calculation errors in deduction schedules.',
    lessonsOrImprovements: 'Added direct batch salary disbursement CSV export for bank integrations.',
    visualType: 'analytics-board',
    mockMetrics: [
      { label: 'Processing Time', value: '-70%' },
      { label: 'Calculation Accuracy', value: '100%' },
      { label: 'Security', value: 'JWT RBAC' }
    ],
    highlights: ['HR Automation', 'Payroll Engine', 'Next.js & Node', 'Role Permissions']
  },
  {
    id: 'hyperblock-studio',
    slug: 'hyperblock-studio',
    number: '12',
    title: 'HyperBlock Studio',
    client: 'Creative Technology & Web Studio',
    tagline: 'A modern, dynamic web platform with rich interactive animations, API-driven project showcases, and responsive UI architecture.',
    imageUrl: '/images/projects/hyperblock-studio.jpg',
    category: 'Creative Tech & Web Platform',
    filterCategory: 'company-websites',
    year: '2024',
    role: 'Frontend Architecture & Creative Engineering',
    services: ['Creative Web Platform', 'Interactive UI Architecture', 'API Integrations', 'Performance Tuning'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    clientProblem: 'The studio needed a standout digital presence that communicated high engineering capability, creative precision, and interactive excellence without degrading page speed or search visibility.',
    usersAndContext: 'Prospective commercial clients and international technology partners reviewing past case studies and technical capabilities.',
    developmentApproach: 'Tekmora developed a sophisticated Next.js platform utilizing hardware-accelerated Framer Motion interactions, dynamic API data fetching, and an editorial dark aesthetic.',
    technicalArchitecture: [
      'Frontend: Next.js with server-side rendering for critical content and optimized client-side motion.',
      'Animation: Hardware-accelerated CSS and Framer Motion transforms respecting prefers-reduced-motion.',
      'API: REST integration for dynamic project portfolio updates and contact pipelines.'
    ],
    keyFeatures: [
      {
        title: 'Precision Micro-Interactions',
        description: 'Subtle hover states, page transition cues, and interactive portfolio showcases.'
      },
      {
        title: 'Dynamic Project Showcase',
        description: 'Server-rendered project gallery with dynamic tag filtering and high-resolution media handling.'
      },
      {
        title: 'Optimized Mobile Responsiveness',
        description: 'Tailored mobile layouts that simplify motion while maintaining visual drama.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Balancing complex visual transitions with 90+ Lighthouse performance scores.',
        decision: 'Employed lazy loading for off-screen media and lightweight CSS transforms over heavy canvas rendering.'
      }
    ],
    outcome: 'Delivered an impressive digital showcase that significantly elevated brand authority and international client inquiries.',
    lessonsOrImprovements: 'Added interactive case-study carousels with keyboard arrow navigation.',
    visualType: 'full-interface',
    mockMetrics: [
      { label: 'Lighthouse Score', value: '96/100' },
      { label: 'Animation FPS', value: '60 FPS' },
      { label: 'Inquiry Rate', value: '+45%' }
    ],
    highlights: ['Next.js SSR', 'Framer Motion', 'Editorial Styling', 'Responsive Design']
  },
  {
    id: 'grabzer',
    slug: 'grabzer',
    number: '13',
    title: 'Grabzer',
    client: 'On-Demand Consumer Platform',
    tagline: 'A multilingual web application with dynamic API data handling, token-based authentication, global state management, and pagination.',
    imageUrl: '/images/projects/grabzer-delivery.jpg',
    category: 'Consumer Web Application',
    filterCategory: 'business-platforms',
    year: '2023',
    role: 'Frontend Engineering & State Architecture',
    services: ['Multilingual Web App', 'Global State Management', 'API Integration', 'Pagination Engine'],
    technologies: ['Next.js', 'Tailwind CSS', 'i18n', 'REST APIs'],
    clientProblem: 'The platform needed a fast, scalable frontend architecture capable of managing complex real-time search state, multi-language localization, and smooth pagination across dense item listings.',
    usersAndContext: 'Consumers browsing and ordering services across multiple regional markets and languages.',
    developmentApproach: 'Tekmora built a structured Next.js application leveraging optimized React state boundaries, centralized API wrappers, and comprehensive localization.',
    technicalArchitecture: [
      'Frontend: Next.js with modular component architecture and responsive CSS.',
      'State: Domain-scoped React state preventing unnecessary parent re-renders.',
      'Localization: Multi-locale routing supporting dynamic language transitions.'
    ],
    keyFeatures: [
      {
        title: 'Global State Management',
        description: 'Efficient session and cart management across multi-page user flows.'
      },
      {
        title: 'Dynamic API Pagination',
        description: 'Performant infinite loading and indexed pagination for large item directories.'
      },
      {
        title: 'Multilingual Support',
        description: 'Complete localization affecting content strings, dates, and layout alignment.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Preventing state thrashing during rapid filter updates across large catalog queries.',
        decision: 'Implemented debounced query parameters with URL query synchronization.'
      }
    ],
    outcome: 'Engineered a resilient frontend that scaled smoothly across international user demographics.',
    lessonsOrImprovements: 'Refactored legacy UI components to clean design tokens for easier brand skinning.',
    visualType: 'editorial-poster',
    mockMetrics: [
      { label: 'Languages', value: 'Multi-Locale' },
      { label: 'Query Latency', value: '< 80ms' },
      { label: 'Render Optimization', value: 'Zero Thrash' }
    ],
    highlights: ['Next.js', 'i18n Localization', 'State Optimization', 'Pagination Engine']
  },
  {
    id: 'grabzer-admin',
    slug: 'grabzer-admin',
    number: '14',
    title: 'Grabzer Admin Dashboard',
    client: 'Platform Operations & Administration',
    tagline: 'A secure admin dashboard featuring JWT authentication, global state handling, protected routes, and data management console.',
    imageUrl: '/images/projects/grabzer-delivery.jpg',
    category: 'Admin Operations Dashboard',
    filterCategory: 'enterprise',
    year: '2023',
    role: 'Frontend Architecture & Security Implementation',
    services: ['Admin Console', 'Security Architecture', 'Data Management Tables', 'Protected Routes'],
    technologies: ['Next.js', 'Tailwind CSS', 'JWT Auth', 'REST APIs'],
    clientProblem: 'Operational support teams lacked a centralized, secure interface to manage multilingual listings, moderate customer orders, and configure localized platform parameters.',
    usersAndContext: 'Platform administrators, customer operations staff, and catalog moderators managing day-to-day operations.',
    developmentApproach: 'Tekmora developed a utility-first, high-density operations dashboard focused on speed of execution, data integrity, and strict access control.',
    technicalArchitecture: [
      'Frontend: Next.js with high-density data tables, search filters, and batch action modals.',
      'Security: JWT session validation with route guards and automatic token refresh protocols.'
    ],
    keyFeatures: [
      {
        title: 'Protected Route Guards',
        description: 'Client and server-side authorization ensuring only verified administrative personnel access sensitive views.'
      },
      {
        title: 'High-Density Operations Tables',
        description: 'Optimized tables designed for fast data scanning, filtering, and batch status updates.'
      },
      {
        title: 'Audit Logging & Action Trails',
        description: 'Visual status history tracking administrative modifications across catalog records.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Maintaining secure session state without exposing tokens to client-side script injection.',
        decision: 'Implemented secure cookie-based token handling with server-side validation layers.'
      }
    ],
    outcome: 'Streamlined internal administrative workflows, cutting order moderation and listing review times by 40%.',
    lessonsOrImprovements: 'Added exportable audit logs and role-specific dashboard home widgets.',
    visualType: 'analytics-board',
    mockMetrics: [
      { label: 'Efficiency Gain', value: '+40%' },
      { label: 'Security Tier', value: 'JWT RBAC' },
      { label: 'Data Density', value: 'High' }
    ],
    highlights: ['Protected Routes', 'Admin Console', 'Data Tables', 'Security Guards']
  },
  {
    id: 'seven-koncepts',
    slug: 'seven-koncepts',
    number: '15',
    title: 'Seven Koncepts',
    client: 'Design & Corporate Profiling',
    tagline: 'A corporate profile website with dynamic API data, interactive showcase sliders, and a responsive component-based UI.',
    imageUrl: '/images/projects/hyperblock-studio.jpg',
    category: 'Corporate Website',
    filterCategory: 'company-websites',
    year: '2022',
    role: 'Web Engineering & Component Architecture',
    services: ['Corporate Web Platform', 'Interactive UI Architecture', 'API Integration', 'Responsive Design'],
    technologies: ['React', 'JavaScript', 'CSS Modules', 'REST APIs'],
    clientProblem: 'The enterprise needed a modern, refined corporate website to articulate their services, showcase key enterprise case studies, and facilitate corporate inquiries.',
    usersAndContext: 'Corporate decision makers, prospective enterprise partners, and industry peers exploring agency capabilities.',
    developmentApproach: 'Tekmora created a clean single-page application experience using React, emphasizing smooth transitions, structured typography, and responsive presentation.',
    technicalArchitecture: [
      'Frontend: React.js application with modular CSS architecture for brand consistency.',
      'Interactivity: Custom touch-enabled content sliders and modal showcase drawers.'
    ],
    keyFeatures: [
      {
        title: 'Dynamic Portfolio Showcase',
        description: 'Organized presentation of corporate projects and service offerings.'
      },
      {
        title: 'Responsive Grid Architecture',
        description: 'Seamless visual layout across desktop, tablet, and mobile viewports.'
      },
      {
        title: 'Lead Generation Inquiries',
        description: 'Validated contact form with direct routing to executive sales teams.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Delivering smooth carousel interactions on touch devices without adding heavy external dependencies.',
        decision: 'Configured optimized, lightweight touch-event handlers with native momentum scrolling.'
      }
    ],
    outcome: 'Successfully established a polished corporate presence that reinforced brand credibility and drove inbound inquiries.',
    lessonsOrImprovements: 'Migrated styling to modern CSS custom properties for effortless theme updates.',
    visualType: 'clean-mobile',
    mockMetrics: [
      { label: 'Mobile Score', value: '95/100' },
      { label: 'Lead Inquiries', value: '+30%' },
      { label: 'Uptime', value: '99.9%' }
    ],
    highlights: ['React.js', 'Corporate Platform', 'Touch Sliders', 'Responsive UI']
  },
  {
    id: 'bombay-fifty',
    slug: 'bombay-fifty',
    number: '16',
    title: 'Bombay Fifty',
    client: 'Hospitality & Culinary Group',
    tagline: 'A restaurant website with API-driven menu management, responsive culinary presentation, and seamless customer interaction.',
    imageUrl: '/images/projects/shoestops-ecommerce.jpg',
    category: 'Hospitality & Web Experience',
    filterCategory: 'company-websites',
    year: '2022',
    role: 'Frontend Engineering & API Integration',
    services: ['Hospitality Web Experience', 'Dynamic Menu Engine', 'Responsive UI', 'Location Integration'],
    technologies: ['React', 'JavaScript', 'PHP', 'REST APIs'],
    clientProblem: 'The restaurant group required an appetizing, mobile-first web experience that allowed kitchen managers to update daily culinary specials and seasonal menus dynamically.',
    usersAndContext: 'Diners exploring menu offerings on mobile devices, checking opening hours, and booking table reservations.',
    developmentApproach: 'Tekmora engineered a responsive React frontend that consumes structured menu data from an API backend, prioritizing image fidelity and rapid menu filtering.',
    technicalArchitecture: [
      'Frontend: React with responsive component hierarchy and fast touch interactions.',
      'Backend Integration: REST API integration connecting to restaurant management endpoints.'
    ],
    keyFeatures: [
      {
        title: 'Dynamic Culinary Menu',
        description: 'Real-time categorization of appetizers, mains, beverages, and daily chef specials.'
      },
      {
        title: 'Mobile-First Navigation',
        description: 'Optimized touch navigation allowing quick access to directions, hours, and reservation links.'
      },
      {
        title: 'Rich Culinary Presentation',
        description: 'High-contrast typography and clear layout highlighting dietary tags and ingredients.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ensuring fast load times on cellular mobile connections while presenting rich imagery.',
        decision: 'Implemented responsive image sizes with modern WebP formatting and lazy loading.'
      }
    ],
    outcome: 'Elevated online visibility, driving increased foot traffic and digital table reservation requests.',
    lessonsOrImprovements: 'Added direct WhatsApp concierge reservation integration for instant booking confirmations.',
    visualType: 'full-interface',
    mockMetrics: [
      { label: 'Mobile Traffic', value: '75%' },
      { label: 'Image Load Speed', value: '< 300ms' },
      { label: 'Reservations', value: '+35%' }
    ],
    highlights: ['React', 'Dynamic Menu', 'Hospitality Experience', 'Mobile-First']
  },
  {
    id: 'lb908-dashboard',
    slug: 'lb908-dashboard',
    number: '17',
    title: 'LB908 Dashboard',
    client: 'Commercial Business Network',
    tagline: 'A business promotion network and dashboard with API-based listings, shout-out features, user accounts, and profile management.',
    imageUrl: '/images/projects/comments-fusion.jpg',
    category: 'Business Promotion Network',
    filterCategory: 'business-platforms',
    year: '2022',
    role: 'Web Application Development',
    services: ['Dashboard Development', 'User Profile Management', 'API Directory Engine', 'Member Interactions'],
    technologies: ['PHP', 'JavaScript', 'REST APIs', 'SQL'],
    clientProblem: 'A regional commercial network required a centralized member directory where businesses could manage their public promotional profiles, publish shout-outs, and discover commercial partners.',
    usersAndContext: 'Member business owners maintaining their company profiles and browsing verified regional enterprise listings.',
    developmentApproach: 'Tekmora developed a reliable portal with structured profile management tools, dynamic directory search, and interactive member promotion features.',
    technicalArchitecture: [
      'Frontend: Responsive JavaScript application with search filters and profile editing forms.',
      'Backend: Custom PHP services managing session authentication, profile media, and directory listings.'
    ],
    keyFeatures: [
      {
        title: 'Business Profile Hub',
        description: 'Tools for members to maintain service offerings, operating locations, and contact channels.'
      },
      {
        title: 'Interactive Shout-Out System',
        description: 'Community feed allowing member enterprises to endorse and cross-promote partner services.'
      },
      {
        title: 'Dynamic Business Directory',
        description: 'Categorized commercial listings with keyword search and region filters.'
      }
    ],
    challengesAndDecisions: [
      {
        challenge: 'Ensuring seamless search and filter responses across hundreds of member profiles.',
        decision: 'Implemented optimized database indexing and client-side cached lookup routines.'
      }
    ],
    outcome: 'Successfully launched a dependable member portal connecting regional businesses with zero operational downtime.',
    lessonsOrImprovements: 'Modernized the frontend to modular component structures for enhanced long-term scalability.',
    visualType: 'analytics-board',
    mockMetrics: [
      { label: 'Member Network', value: 'Active' },
      { label: 'Platform Stability', value: '99.9%' },
      { label: 'Directory Response', value: '< 100ms' }
    ],
    highlights: ['Business Portal', 'Directory Search', 'Member Network', 'PHP & SQL']
  }
];
