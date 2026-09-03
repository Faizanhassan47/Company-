export interface IndustryDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  overview: string;
  commonProblems: {
    problem: string;
    impact: string;
  }[];
  softwareSolutions: {
    title: string;
    description: string;
  }[];
  relatedServiceSlugs: string[];
  relatedProjectSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    slug: 'manufacturing',
    number: '01',
    title: 'Manufacturing & Industrial Operations',
    tagline: 'Connect factory floors, machine telemetry, and ERP production orders in real time.',
    heroHeadline: 'REAL-TIME SOFTWARE FOR MANUFACTURING & SHOP-FLOOR OPERATIONS.',
    overview: 'Modern manufacturing facilities cannot afford information gaps between shop-floor machinery and executive ERP databases. Tekmora builds custom manufacturing intelligence systems, live production telemetry dashboards, and machine uptime trackers that connect directly with SAP Business One and industrial databases.',
    commonProblems: [
      {
        problem: 'Delayed Month-End Production Reporting',
        impact: 'Plant managers only discover scrap rate spikes and yield drops weeks after they occur, making root-cause mitigation difficult.'
      },
      {
        problem: 'Manual Paper Job Cards & Traveler Sheets',
        impact: 'Physical paper cards get lost, smudged with oil, or fail to reflect immediate bill-of-materials (BOM) design updates.'
      },
      {
        problem: 'Untracked Machine Downtime & OEE',
        impact: 'Unplanned machine stoppages are recorded informally on whiteboards without accurate bottleneck root-cause data.'
      }
    ],
    softwareSolutions: [
      {
        title: 'Live Production Order Telemetry',
        description: 'Overhead touchscreen monitors tracking live shift targets, completed unit counts, and real-time scrap percentages.'
      },
      {
        title: 'SAP B1 Manufacturing Integration',
        description: 'Automated synchronisation of Issue for Production and Receipt from Production records directly to SAP tables.'
      },
      {
        title: 'Overall Equipment Effectiveness (OEE) Monitors',
        description: 'Continuous tracking of availability, performance efficiency, and quality yield across active machine lines.'
      }
    ],
    relatedServiceSlugs: ['sap-business-one-integration', 'enterprise-software-development', 'warehouse-management-systems'],
    relatedProjectSlugs: ['sap-b1-production-dashboard', 'warehouse-grn-automation', 'dome-enterprise'],
    faqs: [
      {
        question: 'Can your software run on existing industrial touch monitors on the factory floor?',
        answer: 'Yes. We build responsive, high-contrast web interfaces optimized specifically for large overhead monitors, rugged industrial tablets, and touchscreen HMIs.'
      },
      {
        question: 'How do you prevent data loss during factory network drops?',
        answer: 'Our shop-floor clients cache operational logs locally and buffer telemetry points, syncing automatically with central SQL databases once connectivity resumes.'
      }
    ],
    metrics: [
      { label: 'Scrap Reduction', value: '-14%' },
      { label: 'Reporting Latency', value: 'Instant' },
      { label: 'Floor Telemetry', value: 'Real-Time' }
    ]
  },
  {
    slug: 'warehouse-logistics',
    number: '02',
    title: 'Warehouse & Logistics Operations',
    tagline: 'Automate receiving, purchase-order reconciliation, and batch tracking from dock to bin.',
    heroHeadline: 'STREAMLINED WORKFLOWS FOR HIGH-THROUGHPUT WAREHOUSES.',
    overview: 'Receiving docks and distribution centers frequently suffer from manual paperwork bottlenecks, SKU transposition errors, and delayed ERP stock commits. Tekmora builds custom receiving automation, OCR document parsing pipelines, and barcode-driven inventory platforms.',
    commonProblems: [
      {
        problem: 'Dock Receiving Bottlenecks',
        impact: 'Trucks idle while receiving clerks manually compare printed vendor packing slips against ERP purchase orders line by line.'
      },
      {
        problem: 'Human Transposition Errors in Batch & Lot Data',
        impact: 'Incorrect lot numbers or expiry dates entered into the system lead to compliance audit failures and stock spoilage.'
      },
      {
        problem: 'Disconnected Handheld Scanners',
        impact: 'Scanners that fail to communicate directly with central ERP inventory create phantom stock discrepancies.'
      }
    ],
    softwareSolutions: [
      {
        title: 'Automated GRN & Document OCR Extraction',
        description: 'Instant parsing of PDF and printed vendor delivery notes, auto-matching SKUs against open purchase orders.'
      },
      {
        title: 'Real-Time ERP Goods Receipt Posting',
        description: 'Direct API posting of verified Goods Receipt POs (GRPOs) directly into SAP Business One with rollback protection.'
      },
      {
        title: 'Barcode & Thermal Pallet Labeling',
        description: 'Instant automated trigger of thermal barcode printers upon shipment verification for immediate put-away routing.'
      }
    ],
    relatedServiceSlugs: ['warehouse-management-systems', 'sap-business-one-integration', 'enterprise-software-development'],
    relatedProjectSlugs: ['warehouse-grn-automation', 'sap-b1-production-dashboard', 'dome-enterprise'],
    faqs: [
      {
        question: 'Can you integrate with our existing thermal barcode printers?',
        answer: 'Yes. We support direct network printing protocols including ZPL (Zebra Programming Language) and ESC/POS for seamless label printing.'
      },
      {
        question: 'How do you handle partial shipments and split deliveries?',
        answer: 'Our reconciliation engine flags quantity variances and allows receiving supervisors to create partial GRN entries while keeping the remaining PO balance open in SAP.'
      }
    ],
    metrics: [
      { label: 'Dock Processing', value: '< 4 Mins' },
      { label: 'Entry Accuracy', value: '100%' },
      { label: 'Receipt Commits', value: '1,200+/Mo' }
    ]
  },
  {
    slug: 'field-services',
    number: '03',
    title: 'Field Services & Dispatch Operations',
    tagline: 'Equip technicians with offline-resilient mobile tools, instant dispatching, and digital work orders.',
    heroHeadline: 'OFFLINE-FIRST MOBILE SOFTWARE FOR FIELD ENGINEERING & SERVICE.',
    overview: 'Field technicians operate in low-connectivity basements, remote industrial facilities, and demanding job sites. Tekmora builds React Native mobile applications equipped with offline SQLite persistence, GPS job dispatching, photo evidence capture, and instant customer sign-offs.',
    commonProblems: [
      {
        problem: 'Lost Paper Job Sheets & Delayed Invoicing',
        impact: 'Technicians wait until the end of the week to submit physical job sheets, delaying client billing by up to two weeks.'
      },
      {
        problem: 'Zero Cellular Signal at Remote Sites',
        impact: 'Standard web apps fail to load or drop form submissions when technicians work in shielded industrial basements.'
      },
      {
        problem: 'Unverified Repair Evidence',
        impact: 'Customer disputes over maintenance completion because job records lack timestamped and geotagged photographic proof.'
      }
    ],
    softwareSolutions: [
      {
        title: '100% Offline Work Order Execution',
        description: 'Technicians fill diagnostic forms, track replacement parts, and collect customer signatures with zero connection.'
      },
      {
        title: 'Geocoded Photo Evidence Capture',
        description: 'Camera integration stamping photos with GPS coordinates and immutable UTC timestamps.'
      },
      {
        title: 'Intelligent Mobile Dispatch Engine',
        description: 'Push notification routing alerting technicians to priority emergency repair calls with turn-by-turn routing.'
      }
    ],
    relatedServiceSlugs: ['mobile-app-development', 'web-application-development', 'enterprise-software-development'],
    relatedProjectSlugs: ['matrix-field-service', 'citi-books-platform', 'dome-enterprise'],
    faqs: [
      {
        question: 'How do you prevent battery drain with background GPS tracking?',
        answer: 'We utilize motion activity sensors and geofencing triggers rather than constant high-frequency GPS polling, extending battery life throughout full 10-hour technician shifts.'
      },
      {
        question: 'Can technicians look up spare part inventory from their mobile vans?',
        answer: 'Yes. The mobile app syncs local inventory catalogs and allows technicians to requisition parts directly from their service vehicles.'
      }
    ],
    metrics: [
      { label: 'Sync Reliability', value: '99.8%' },
      { label: 'Billing Turnaround', value: 'Same-Day' },
      { label: 'Active Technicians', value: '80+' }
    ]
  },
  {
    slug: 'ecommerce',
    number: '04',
    title: 'E-Commerce & Digital Retail',
    tagline: 'High-speed custom storefronts, bespoke inventory management, and conversion-focused architectures.',
    heroHeadline: 'HIGH-PERFORMANCE E-COMMERCE FOR SCALING RETAIL BRANDS.',
    overview: 'Standard e-commerce templates are often weighed down by bloated plugins, slow checkout funnels, and rigid inventory models. Tekmora builds custom MERN and Next.js e-commerce platforms and bespoke WooCommerce systems with sub-second page transitions, dynamic product routing, and custom administrative backends.',
    commonProblems: [
      {
        problem: 'Slow Category Page Filtering & High Bounce Rates',
        impact: 'Bloated third-party apps delay filter results by seconds, driving shoppers away from the storefront.'
      },
      {
        problem: 'Complex Multi-Variant Inventory Sync',
        impact: 'Managing sizes, colors, and regional warehouse stock across disparate channels causes overselling and stockouts.'
      },
      {
        problem: 'Rigid Checkout Experiences',
        impact: 'Standard checkout flows cannot support specialized B2B pricing tiers, split payments, or custom shipping rules.'
      }
    ],
    softwareSolutions: [
      {
        title: 'Next.js Server-Rendered Storefronts',
        description: 'Lightning-fast product catalog navigation, automated SEO meta tags, and instant client-side filtering.'
      },
      {
        title: 'Custom Administrative Catalog Hub',
        description: 'Complete CRUD management for product variants, promotional pricing schedules, and fulfillment states.'
      },
      {
        title: 'Secure JWT Customer Portals',
        description: 'User accounts with saved order histories, payment profiles, and multi-address management.'
      }
    ],
    relatedServiceSlugs: ['web-application-development', 'wordpress-development', 'enterprise-software-development'],
    relatedProjectSlugs: ['shoestops', 'comments-fusion', 'bombay-fifty'],
    faqs: [
      {
        question: 'How do you ensure fast page speeds for catalogs with thousands of products?',
        answer: 'We implement Next.js Incremental Static Regeneration (ISR), optimized WebP image compression, and indexed database queries that return results in under 50ms.'
      },
      {
        question: 'Can you integrate with custom regional payment gateways?',
        answer: 'Yes. We develop custom payment integration bridges with secure webhook verification and transaction reconciliation.'
      }
    ],
    metrics: [
      { label: 'Lighthouse Speed', value: '98/100' },
      { label: 'Catalog Latency', value: '< 50ms' },
      { label: 'Cart Uptime', value: '99.99%' }
    ]
  }
];
