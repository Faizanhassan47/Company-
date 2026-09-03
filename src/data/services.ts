export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  tagline: string;
  primaryTopic: string;
  heroHeadline: string;
  overview: string;
  keyCapabilities: {
    title: string;
    description: string;
  }[];
  technicalStack: {
    category: string;
    items: string[];
  }[];
  developmentProcess: {
    phase: string;
    name: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relevantProjectSlugs: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'web-application-development',
    number: '01',
    title: 'Web Application Development',
    shortDesc: 'Custom React and Next.js applications connected to secure APIs, databases and business workflows.',
    tagline: 'Custom web platforms engineered for operational precision and zero-latency interaction.',
    primaryTopic: 'Custom web application development',
    heroHeadline: 'WEB PLATFORMS BUILT FOR OPERATIONAL RELIABILITY.',
    overview: 'Tekmora designs and develops custom web applications, multi-tenant SaaS portals, customer self-service hubs, and high-throughput internal platforms. We build using modern React and Next.js architectures with strict component isolation, predictable state management, and optimized server-side rendering for search visibility and instant interaction.',
    keyCapabilities: [
      {
        title: 'React & Next.js Core Architecture',
        description: 'Server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) tailored for maximum performance and crawlability.'
      },
      {
        title: 'Business & Customer Portals',
        description: 'Secure, authenticated multi-user portals with role-based access control, profile management, and interactive data grids.'
      },
      {
        title: 'High-Throughput API Integration',
        description: 'REST and WebSocket connections handling high concurrent event streams, telemetry feeds, and deterministic transactions.'
      },
      {
        title: 'Database Schema & Performance',
        description: 'Normalized SQL Server, PostgreSQL, and MongoDB architectures designed with strict relational constraints and indexing.'
      },
      {
        title: 'Authentication & Audit Security',
        description: 'Tokenized JWT and session management, encrypted data transfers, and immutable transaction audit logs.'
      }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend & APIs', items: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'GraphQL'] },
      { category: 'Database & Caching', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'] },
      { category: 'Deployment & CI/CD', items: ['Docker', 'Vercel', 'AWS', 'Automated Pipelines'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Workflow Scoping', description: 'We map user journeys, operational data flows, and security requirements to prevent scope drift.' },
      { phase: '02', name: 'Architecture & Wireframes', description: 'We design responsive UI components, state machines, and relational schemas before writing code.' },
      { phase: '03', name: 'Full-Stack Development', description: 'We build frontend clients and backend microservices with end-to-end TypeScript validation.' },
      { phase: '04', name: 'Stress & Accessibility Testing', description: 'We test concurrent queries, network latency, and WCAG AA contrast standards.' },
      { phase: '05', name: 'Deployment & Monitoring', description: 'We configure production monitoring, telemetry dashboards, and maintenance plans.' }
    ],
    faqs: [
      {
        question: 'Why build a custom web application instead of buying an off-the-shelf SaaS?',
        answer: 'Off-the-shelf SaaS tools force your organization to adapt your business workflows to their rigid constraints. Custom software fits your exact operational steps, eliminates perpetual per-seat license fees, and keeps 100% of your data under your control.'
      },
      {
        question: 'How do you ensure web application security?',
        answer: 'We enforce HTTPS encryption, parameterized queries against SQL injection, strict CORS policies, tokenized JWT authentication with HttpOnly cookies, and granular row-level access control.'
      },
      {
        question: 'Can you migrate legacy web portals to modern Next.js?',
        answer: 'Yes. We frequently execute phased migrations from monolithic legacy applications to modular Next.js platforms without causing downtime for active business users.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'shoestops', 'comments-fusion', 'citi-books-platform']
  },
  {
    slug: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    shortDesc: 'React Native and Expo applications for customers, employees and field operations.',
    tagline: 'Cross-platform mobile applications engineered for demanding physical environments.',
    primaryTopic: 'React Native mobile app development',
    heroHeadline: 'MOBILE SOFTWARE ENGINEERED FOR REAL-WORLD OPERATIONS.',
    overview: 'Tekmora builds high-performance cross-platform mobile applications for iOS and Android using React Native and Expo. We specialize in field-service applications, offline data capture tools, and polished consumer companion apps that function flawlessly regardless of cell signal strength.',
    keyCapabilities: [
      {
        title: 'Cross-Platform React Native & Expo',
        description: 'Single codebase powering native iOS and Android apps with unified logic, native UI performance, and fast over-the-air updates.'
      },
      {
        title: 'Offline-First Persistence & SQLite',
        description: 'Local SQLite and asynchronous queue engines that allow users to fill forms, take photos, and collect signatures without internet connection.'
      },
      {
        title: 'Field-Service & Geolocation Workflows',
        description: 'Battery-efficient background GPS tracking, dispatch routing, and geocoded photographic verification.'
      },
      {
        title: 'Hardware & Sensor Integration',
        description: 'Native device camera controls, barcode/QR scanning, Bluetooth thermal printing, and biometric authentication.'
      },
      {
        title: 'Push Notifications & Dispatch Sync',
        description: 'Real-time job dispatch alerts, appointment reminders, and instant status updates between mobile agents and back-office teams.'
      }
    ],
    technicalStack: [
      { category: 'Mobile Framework', items: ['React Native', 'Expo', 'TypeScript'] },
      { category: 'Local Storage', items: ['SQLite', 'AsyncStorage', 'WatermelonDB'] },
      { category: 'Hardware APIs', items: ['Camera', 'Geolocation', 'Biometrics', 'Bluetooth'] },
      { category: 'Backend Synchronization', items: ['Node.js', 'REST APIs', 'WebSockets', 'Cloud Storage'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Field Environment Discovery', description: 'We analyze lighting conditions, glove usage, network availability, and device hardware constraints.' },
      { phase: '02', name: 'Offline Data Modeling', description: 'We design local SQLite schemas and conflict-resolution algorithms for concurrent offline edits.' },
      { phase: '03', name: 'Native Component Engineering', description: 'We build ergonomic touch interfaces with haptic feedback and rapid input shortcuts.' },
      { phase: '04', name: 'Device Matrix QA', description: 'We test across diverse iOS and Android form factors, screen resolutions, and battery thresholds.' },
      { phase: '05', name: 'App Store Deployment', description: 'We handle Apple App Store, Google Play Store compliance, and enterprise MDM distributions.' }
    ],
    faqs: [
      {
        question: 'Why choose React Native over separate native Swift and Kotlin applications?',
        answer: 'React Native allows a single engineering team to deliver 95%+ shared code across iOS and Android, drastically cutting development and maintenance costs while maintaining 60 FPS native performance.'
      },
      {
        question: 'How do offline workflows handle sync conflicts when connectivity returns?',
        answer: 'We employ deterministic timestamp diffing and server-side reconciliation rules to resolve conflicting edits cleanly without data loss or user confusion.'
      },
      {
        question: 'Can field workers scan barcodes with standard phone cameras?',
        answer: 'Yes. We integrate native camera scanning libraries optimized for low light and damaged barcodes, eliminating the need for expensive dedicated scanner hardware.'
      }
    ],
    relevantProjectSlugs: ['matrix-field-service', 'quran-ayat-app', 'fitness-mobile-app', 'citi-books-platform']
  },
  {
    slug: 'enterprise-software-development',
    number: '03',
    title: 'Enterprise Software Development',
    shortDesc: 'Dashboards, permissions, reporting and internal workflows for complex organizations.',
    tagline: 'Custom enterprise architectures replacing disconnected tools with reliable platforms.',
    primaryTopic: 'Enterprise software development',
    heroHeadline: 'ENTERPRISE PLATFORMS THAT UNIFY COMPLEX BUSINESS OPERATIONS.',
    overview: 'Tekmora builds enterprise-grade management platforms, multi-department ERP extensions, and custom operations consoles. We specialize in eliminating human data duplication, structuring approval workflows, and delivering executive business intelligence through fast SQL data pipelines.',
    keyCapabilities: [
      {
        title: 'Granular Role-Based Access Control (RBAC)',
        description: 'Multi-tiered authorization matrices defining row, module, and field-level visibility across hundreds of employee tiers.'
      },
      {
        title: 'Multi-Step Approval Workflows',
        description: 'Automated authorization paths for purchase requisitions, leave requests, discount exceptions, and payment releases.'
      },
      {
        title: 'High-Density Operational Grids',
        description: 'Standardized data tables with multi-column sorting, sticky headers, instant fuzzy search, and clean spreadsheet export.'
      },
      {
        title: 'SQL Server & Data Warehousing',
        description: 'Relational data modeling, partitioned transaction tables, and read-replicas for real-time reporting without backend lag.'
      },
      {
        title: 'Immutable Audit Logging',
        description: 'Comprehensive activity tracking recording every user update, status change, and transactional event for compliance.'
      }
    ],
    technicalStack: [
      { category: 'Enterprise UI', items: ['React', 'TypeScript', 'Tailwind CSS', 'Virtualized Grids'] },
      { category: 'Backend Engine', items: ['Node.js', 'Express', 'C# / .NET (when needed)', 'REST APIs'] },
      { category: 'Data Architecture', items: ['Microsoft SQL Server', 'PostgreSQL', 'Redis Caching'] },
      { category: 'Infrastructure', items: ['Docker', 'On-Premise IIS', 'Azure', 'Linux Servers'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Process Audit', description: 'We map cross-departmental handoffs, data flows, and approval hierarchies.' },
      { phase: '02', name: 'Schema Normalization', description: 'We construct clean relational data models with strict referential integrity.' },
      { phase: '03', name: 'Modular Platform Build', description: 'We develop independent department modules sharing uniform navigation and design tokens.' },
      { phase: '04', name: 'Security & Concurrency Testing', description: 'We simulate heavy multi-user transaction loads and verify permission boundaries.' },
      { phase: '05', name: 'Phased Rollout & Training', description: 'We onboard departmental teams gradually with minimal disruption to daily operations.' }
    ],
    faqs: [
      {
        question: 'How do you handle large data tables without browser lag?',
        answer: 'We implement server-side windowing and DOM virtualization so only visible rows are rendered, allowing users to scroll through hundreds of thousands of records smoothly.'
      },
      {
        question: 'Can you integrate with existing Active Directory / LDAP authentication?',
        answer: 'Yes. We support SAML, OAuth2, and LDAP single sign-on protocols for seamless enterprise identity management.'
      },
      {
        question: 'How do you prevent data loss during network interruptions?',
        answer: 'We utilize transactional database saves with rollback safeguards and client-side optimistic caching.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'leoedge-dashboard', 'grabzer-admin', 'sap-b1-production-dashboard']
  },
  {
    slug: 'sap-business-one-integration',
    number: '04',
    title: 'SAP Business One Integration',
    shortDesc: 'Operational software connected to SAP Business One, warehouse inventory and manufacturing processes.',
    tagline: 'Custom middleware and real-time dashboards communicating directly with SAP Business One.',
    primaryTopic: 'SAP Business One integration services',
    heroHeadline: 'CONNECTING PHYSICAL OPERATIONS DIRECTLY TO SAP BUSINESS ONE.',
    overview: 'Tekmora builds robust integration layers and specialized user interfaces that communicate directly with SAP Business One (SQL Server and SAP HANA). We connect warehouse scanners, shop floor displays, and external portals to SAP, eliminating manual data entry and providing live operational visibility.',
    keyCapabilities: [
      {
        title: 'Service Layer & DI API Integration',
        description: 'Bi-directional middleware communicating securely with SAP Business One Service Layer and DI API endpoints.'
      },
      {
        title: 'Real-Time Production Floor Telemetry',
        description: 'Live overhead monitors displaying SAP Production Orders, scrap rates, machine OEE, and shift output targets.'
      },
      {
        title: 'Automated Goods Receipt & PO Reconciliation',
        description: 'Automated document extraction and matching pipelines committing verified Goods Receipt POs (GRPOs) to SAP.'
      },
      {
        title: 'Inventory & Batch Synchronization',
        description: 'Real-time stock queries, bin transfers, batch tracking, and expiry date management linked to SAP inventory tables.'
      },
      {
        title: 'Read-Replica Performance Optimization',
        description: 'Offloaded read-only analytical reporting layers that keep production SAP databases fast and unburdened.'
      }
    ],
    technicalStack: [
      { category: 'SAP Connectivity', items: ['SAP B1 Service Layer', 'DI API', 'DI Server', 'REST Middleware'] },
      { category: 'Databases', items: ['Microsoft SQL Server', 'SAP HANA', 'Materialized Views'] },
      { category: 'Integration Backend', items: ['Node.js', 'Express', 'Queue Workers', 'Webhooks'] },
      { category: 'Frontend Monitors', items: ['React', 'TypeScript', 'High-Contrast Telemetry UI'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'SAP Schema Analysis', description: 'We map target User Defined Fields (UDFs), User Defined Tables (UDTs), and standard SAP object flows.' },
      { phase: '02', name: 'API Gateway Architecture', description: 'We build an intermediary queue that insulates SAP from spikes in concurrent scanner requests.' },
      { phase: '03', name: 'Custom UI Engineering', description: 'We develop tailored web or mobile interfaces for shop-floor operators and dock workers.' },
      { phase: '04', name: 'Transaction Rollback Validation', description: 'We rigorously test edge cases, ensuring failed transactions trigger clean rollbacks.' },
      { phase: '05', name: 'Deployment & Telemetry', description: 'We connect live production data streams and monitor API response latencies.' }
    ],
    faqs: [
      {
        question: 'Are you an official SAP partner?',
        answer: 'Tekmora is an independent custom software development company with deep, verified engineering experience building integrations and applications on top of SAP Business One Service Layer and DI API.'
      },
      {
        question: 'Does your integration slow down our SAP Business One system?',
        answer: 'No. We utilize queued asynchronous middleware and dedicated read-replica reporting queries to ensure zero performance degradation on your primary SAP transactional database.'
      },
      {
        question: 'Can you work with both SAP HANA and Microsoft SQL Server databases?',
        answer: 'Yes. We have built production systems connected to both SAP B1 on SQL Server and SAP B1 on SAP HANA.'
      }
    ],
    relevantProjectSlugs: ['sap-b1-production-dashboard', 'warehouse-grn-automation', 'dome-enterprise']
  },
  {
    slug: 'warehouse-management-systems',
    number: '05',
    title: 'Warehouse Management Systems',
    shortDesc: 'Operational software combining document extraction, purchase-order matching, batch handling and ERP inventory.',
    tagline: 'Accelerate receiving, bin allocation, and inventory tracking with custom warehouse workflows.',
    primaryTopic: 'Warehouse management system development',
    heroHeadline: 'CUT DOCK BOTTLENECK WITH AUTOMATED WAREHOUSE WORKFLOWS.',
    overview: 'Tekmora develops tailored warehouse management systems (WMS), receiving automation pipelines, and barcode-driven inventory tracking software. We replace manual paperwork at the dock with automated invoice parsing, purchase-order reconciliation, and direct ERP committing.',
    keyCapabilities: [
      {
        title: 'Document Extraction & OCR',
        description: 'Automated parsing of vendor packing slips and Goods Receipt Notes (GRNs) into structured line-item datasets.'
      },
      {
        title: 'Purchase Order Reconciliation',
        description: 'Algorithmic matching of incoming shipments against open purchase orders with tolerance and deviation checks.'
      },
      {
        title: 'Batch, Lot & Expiry Tracking',
        description: 'Mandatory batch logging and expiration monitoring preventing spoiled inventory from entering circulation.'
      },
      {
        title: 'Bin Allocation & Stock Transfers',
        description: 'Visual warehouse mapping and barcode-directed put-away routes for optimized warehouse space utilization.'
      },
      {
        title: 'Thermal Barcode & Pallet Labeling',
        description: 'Instant generation of pallet identification labels and item barcodes directly upon receipt verification.'
      }
    ],
    technicalStack: [
      { category: 'Warehouse UI', items: ['React', 'Touch-Optimized Web UI', 'Rugged Mobile Interfaces'] },
      { category: 'Parsing & OCR', items: ['PDF Parsers', 'OCR Vision Engines', 'Fuzzy SKU Matching'] },
      { category: 'Backend & Queues', items: ['Node.js', 'Express', 'BullMQ / Redis', 'SQL Server'] },
      { category: 'Hardware Protocols', items: ['ZPL Barcode Printing', 'Bluetooth Scanners', 'Handheld Terminals'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Dock & Floor Audit', description: 'We observe physical receiving practices, pallet staging, and SKU labeling bottlenecks.' },
      { phase: '02', name: 'Extraction Template Modeling', description: 'We configure parsing rules for key vendor delivery documents and invoice formats.' },
      { phase: '03', name: 'Receiving Console Build', description: 'We build high-contrast touch screens highlighting SKU matches and discrepancy exceptions.' },
      { phase: '04', name: 'Floor Stress Testing', description: 'We test multi-pallet concurrent scanning and label printing in simulated dock conditions.' },
      { phase: '05', name: 'Go-Live & Support', description: 'We deploy to dockside workstations and rugged Android tablets with live operational support.' }
    ],
    faqs: [
      {
        question: 'How much faster is automated GRN processing compared to manual entry?',
        answer: 'In our verified production deployments, receiving processing times dropped from 45 minutes per shipment to under 4 minutes, while eliminating human transposition errors.'
      },
      {
        question: 'How do you handle invoices from new vendors with unfamiliar layouts?',
        answer: 'Our extraction engine combines structural templates with heuristic fuzzy matching on SKU codes, vendor names, and quantity columns to adapt to novel invoice formats.'
      },
      {
        question: 'Can the WMS run on standard tablets or does it require industrial handhelds?',
        answer: 'Our software is responsive and touch-optimized, running equally well on cost-effective consumer tablets, smartphones, and rugged industrial barcode scanners.'
      }
    ],
    relevantProjectSlugs: ['warehouse-grn-automation', 'sap-b1-production-dashboard', 'dome-enterprise']
  },
  {
    slug: 'wordpress-development',
    number: '06',
    title: 'WordPress Development',
    shortDesc: 'Custom WordPress websites, WooCommerce platforms and tailored functionality.',
    tagline: 'Bespoke, high-performance WordPress engineering with zero page-builder bloat.',
    primaryTopic: 'Custom WordPress development',
    heroHeadline: 'CLEAN, TAILORED WORDPRESS ENGINEERING FOR SERIOUS BRANDS.',
    overview: 'Tekmora creates custom WordPress and WooCommerce platforms built for longevity, security, and exceptional page speed. We write clean PHP themes, bespoke Gutenberg blocks, and custom backend plugins from scratch, rejecting slow visual page builders in favor of semantic, maintainable code.',
    keyCapabilities: [
      {
        title: '100% Custom PHP Themes',
        description: 'Lightweight, semantic markup written from the ground up without Elementor or heavy visual builder dependencies.'
      },
      {
        title: 'Custom Gutenberg Block Systems',
        description: 'Tailored React-powered editing blocks that give marketing teams creative freedom within strict brand guidelines.'
      },
      {
        title: 'Bespoke WooCommerce Architecture',
        description: 'Streamlined checkout funnels, custom payment gateway integrations, and complex product configuration rules.'
      },
      {
        title: 'Headless WordPress & REST APIs',
        description: 'Using WordPress as a structured headless CMS powering modern Next.js and React frontend applications.'
      },
      {
        title: 'Performance & Security Hardening',
        description: '95+ Google PageSpeed scores, object caching, database query optimization, and strict server hardening.'
      }
    ],
    technicalStack: [
      { category: 'Core CMS', items: ['WordPress 6.x', 'PHP 8.2+', 'WooCommerce', 'MySQL / MariaDB'] },
      { category: 'Frontend', items: ['HTML5', 'Vanilla CSS / SCSS', 'JavaScript', 'React Gutenberg Blocks'] },
      { category: 'Performance', items: ['Redis Object Cache', 'Cloudflare CDN', 'WebP Optimization'] },
      { category: 'Integrations', items: ['Custom REST Endpoints', 'Payment Gateways', 'CRM Webhooks'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Information Architecture', description: 'We define page hierarchies, custom post types (CPTs), and field structures.' },
      { phase: '02', name: 'Theme & Block Development', description: 'We code custom PHP templates and custom React Gutenberg blocks.' },
      { phase: '03', name: 'E-Commerce & Plugins', description: 'We build custom checkout workflows, payment hooks, and operational integrations.' },
      { phase: '04', name: 'Performance Tuning', description: 'We minimize database queries, eliminate asset bloat, and achieve 95+ Core Web Vitals.' },
      { phase: '05', name: 'Launch & Security Setup', description: 'We configure automated backups, SSL certificates, and firewall rules.' }
    ],
    faqs: [
      {
        question: 'Why do you avoid visual page builders like Elementor or Divi?',
        answer: 'Visual builders inject thousands of lines of redundant CSS and JavaScript, severely degrading page speed, Core Web Vitals, and SEO rankings. Custom themes load in milliseconds and are far easier to maintain.'
      },
      {
        question: 'Can our marketing team easily edit content without touching code?',
        answer: 'Yes. We build custom native Gutenberg blocks tailored to your exact brand styles, giving your team intuitive visual editing while preserving design integrity.'
      },
      {
        question: 'How do you protect WordPress sites from security vulnerabilities?',
        answer: 'We eliminate bloated third-party plugins, enforce strong authentication, disable XML-RPC, sanitize all database queries, and implement Web Application Firewalls (WAF).'
      }
    ],
    relevantProjectSlugs: ['seven-koncepts', 'bombay-fifty', 'lb908-dashboard', 'transcend-healthcare']
  }
];
