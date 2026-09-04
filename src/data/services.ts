export interface ServiceDetail {
  ctaHeadline?: string;
  ctaDesc?: string;
  slug: string;
  number: string;
  category: 'ai-automation' | 'saas-modernization' | 'enterprise-cloud' | 'security-systems';
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
  businessProblems?: {
    title: string;
    description: string;
  }[];
  industries?: string[];
  architectureApproach?: string;
}

export interface ServiceMarketItem {
  rank: number;
  service: string;
  category: 'ai-automation' | 'saas-modernization' | 'enterprise-cloud' | 'security-systems';
  slug: string;
  attractivenessRating: number; // e.g. 5, 4.5, 4, 3.5, 2
  ratingType: 'fire' | 'money';
  recommendation: string;
  badgeType: 'lead' | 'lead-ai' | 'add' | 'opportunity' | 'prominent' | 'strong' | 'niche' | 'retainer' | 'secondary' | 'integrated';
  strategicNote: string;
}

export const SERVICES_MARKET_MATRIX: ServiceMarketItem[] = [
  {
    rank: 1,
    service: 'AI Integration + Workflow Automation',
    category: 'ai-automation',
    slug: 'ai-integration-workflow-automation',
    attractivenessRating: 5,
    ratingType: 'fire',
    recommendation: 'Lead service',
    badgeType: 'lead',
    strategicNote: 'Custom LLM pipelines, autonomous multi-step workflow automations, vector embeddings, and real-time business process connectors.'
  },
  {
    rank: 2,
    service: 'Existing SaaS/Product Development & Modernization',
    category: 'saas-modernization',
    slug: 'saas-engineering-modernization',
    attractivenessRating: 5,
    ratingType: 'fire',
    recommendation: 'Lead service',
    badgeType: 'lead',
    strategicNote: 'Refactoring legacy codebases, monolith to microservices migrations, TypeScript upgrades, and database schema modernization.'
  },
  {
    rank: 3,
    service: 'SaaS Engineering',
    category: 'saas-modernization',
    slug: 'saas-engineering-modernization',
    attractivenessRating: 5,
    ratingType: 'fire',
    recommendation: 'Lead service',
    badgeType: 'lead',
    strategicNote: 'Ground-up multi-tenant SaaS architecture, subscription tiers, high-throughput APIs, tenant isolation, and billing engines.'
  },
  {
    rank: 4,
    service: 'AI Agents / Business Process Automation',
    category: 'ai-automation',
    slug: 'ai-agents-process-automation',
    attractivenessRating: 5,
    ratingType: 'fire',
    recommendation: 'Add',
    badgeType: 'add',
    strategicNote: 'Autonomous multi-agent swarms, tool-use execution, ERP/CRM action loops, deterministic error fallbacks, and task orchestration.'
  },
  {
    rank: 5,
    service: 'RAG / Private Company Data AI',
    category: 'ai-automation',
    slug: 'rag-enterprise-data-ai',
    attractivenessRating: 4.5,
    ratingType: 'fire',
    recommendation: 'Lead AI service',
    badgeType: 'lead-ai',
    strategicNote: 'Hybrid vector search over proprietary enterprise docs (pgvector/Pinecone), strict data isolation, and hallucination guardrails.'
  },
  {
    rank: 6,
    service: 'API / Stripe / Third-Party Integrations',
    category: 'saas-modernization',
    slug: 'api-stripe-integrations',
    attractivenessRating: 4.5,
    ratingType: 'fire',
    recommendation: 'Strong',
    badgeType: 'strong',
    strategicNote: 'High-volume webhooks, idempotent transactions, Stripe billing & payout engines, and bi-directional CRM/ERP conduits.'
  },
  {
    rank: 7,
    service: 'Internal Tools + Dashboards + Automation',
    category: 'enterprise-cloud',
    slug: 'internal-tools-dashboards',
    attractivenessRating: 4.5,
    ratingType: 'fire',
    recommendation: 'Strong',
    badgeType: 'strong',
    strategicNote: 'High-density operational dashboards, real-time telemetry, multi-step approval workflows, and back-office tools.'
  },
  {
    rank: 8,
    service: 'Security / Auth / Roles / Multi-Tenant Systems',
    category: 'security-systems',
    slug: 'security-auth-multitenant',
    attractivenessRating: 4,
    ratingType: 'fire',
    recommendation: 'Add prominently',
    badgeType: 'prominent',
    strategicNote: 'Enterprise RBAC/ABAC authorization matrices, SSO (SAML/Okta/OAuth), row-level tenant security, and audit logging.'
  },
  {
    rank: 9,
    service: 'Production Hardening / AI-Code Rescue',
    category: 'security-systems',
    slug: 'production-hardening-code-rescue',
    attractivenessRating: 4,
    ratingType: 'fire',
    recommendation: 'Add — big opportunity',
    badgeType: 'opportunity',
    strategicNote: 'Rescuing brittle AI-generated codebases, eliminating memory leaks, typing strict TypeScript contracts, and fixing CVE vulnerabilities.'
  },
  {
    rank: 10,
    service: 'Performance / Reliability / Scaling',
    category: 'enterprise-cloud',
    slug: 'performance-scaling-cloud-devops',
    attractivenessRating: 4,
    ratingType: 'fire',
    recommendation: 'Strong',
    badgeType: 'strong',
    strategicNote: 'Latency profiling, Redis caching layers, database query tuning, load balancing, and high-concurrency stress resilience.'
  },
  {
    rank: 11,
    service: 'Cloud / DevOps / Deployment',
    category: 'enterprise-cloud',
    slug: 'performance-scaling-cloud-devops',
    attractivenessRating: 4,
    ratingType: 'fire',
    recommendation: 'Supporting service',
    badgeType: 'secondary',
    strategicNote: 'Automated CI/CD pipelines (GitHub Actions), Docker containerization, Kubernetes orchestration, and Terraform IaC.'
  },
  {
    rank: 12,
    service: 'Payments / Subscription Systems',
    category: 'saas-modernization',
    slug: 'api-stripe-integrations',
    attractivenessRating: 4,
    ratingType: 'fire',
    recommendation: 'Great SaaS niche',
    badgeType: 'niche',
    strategicNote: 'Complex recurring billing, usage-based metering, multi-currency checkout funnels, dunning management, and sales tax compliance.'
  },
  {
    rank: 13,
    service: 'Maintenance Retainers',
    category: 'enterprise-cloud',
    slug: 'maintenance-evolution-retainers',
    attractivenessRating: 5,
    ratingType: 'money',
    recommendation: 'Excellent after project',
    badgeType: 'retainer',
    strategicNote: 'Dedicated SLA engineering, 24/7 uptime monitoring, dependency security patching, performance audits, and evolutionary sprints.'
  },
  {
    rank: 14,
    service: 'AI Customer Support / Chatbots',
    category: 'ai-automation',
    slug: 'ai-customer-support-chatbots',
    attractivenessRating: 3.5,
    ratingType: 'fire',
    recommendation: 'Sell only when integrated',
    badgeType: 'integrated',
    strategicNote: 'Context-aware support agents connected to ticketing systems (Zendesk, Intercom), real-time order lookups, and human escalation handoffs.'
  },
  {
    rank: 15,
    service: 'Generic website development',
    category: 'saas-modernization',
    slug: 'web-application-development',
    attractivenessRating: 2,
    ratingType: 'fire',
    recommendation: "Don't lead with it",
    badgeType: 'secondary',
    strategicNote: 'High-performance bespoke corporate portals, headless CMS architectures, and sub-second SEO platforms.'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  // 01: AI Integration & Workflow Automation
  {
    slug: 'ai-integration-workflow-automation',
    number: '01',
    category: 'ai-automation',
    title: 'AI Integration + Workflow Automation',
    shortDesc: 'Custom LLM pipelines, autonomous multi-step workflow automations, LangGraph & n8n connectors.',
    tagline: 'Connect intelligence directly into your production pipelines with zero hallucination risk.',
    primaryTopic: 'Enterprise AI integration & workflow automation',
    heroHeadline: 'EMBED PREDICTABLE AI DIRECTLY INTO OPERATIONAL WORKFLOWS.',
    overview: 'Tekmora engineers production-grade AI integrations that eliminate repetitive manual back-office tasks, enrich unformatted telemetry feeds, and trigger deterministic multi-step actions across your CRM, ERP, and databases. We replace fragile one-off prompts with resilient agentic workflows featuring schema validation, fallback handling, and strict token cost governance.',
    keyCapabilities: [
      {
        title: 'Deterministic LLM Pipelines',
        description: 'Structured JSON schema outputs, strict Pydantic/Zod data validation, and automated retries that prevent invalid AI responses from reaching production databases.'
      },
      {
        title: 'Multi-Step Workflow Orchestration',
        description: 'Autonomous execution loops utilizing LangGraph, temporal queues, and n8n to chain complex multi-department handoffs without human delays.'
      },
      {
        title: 'ERP & Database Event Connectors',
        description: 'Bi-directional webhooks and message queues connecting OpenAI, Claude, and open-source models directly to SAP B1, PostgreSQL, and SQL Server.'
      },
      {
        title: 'Token Cost & Latency Governance',
        description: 'Semantic caching with Redis, intelligent prompt pruning, and dynamic model routing (tiering fast SLMs for simple tasks and frontier LLMs for reasoning).'
      },
      {
        title: 'Human-in-the-Loop Safeguards',
        description: 'Configurable approval checkpoints for high-risk transactional operations like refund authorizations, vendor PO releases, and bulk data mutations.'
      }
    ],
    technicalStack: [
      { category: 'AI Frameworks', items: ['LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI API', 'Anthropic Claude API'] },
      { category: 'Orchestration & Queues', items: ['BullMQ', 'Temporal.io', 'n8n', 'Redis Streams'] },
      { category: 'Validation & Schemas', items: ['Zod', 'Pydantic', 'JSON Schema', 'Instructor'] },
      { category: 'Databases & Caching', items: ['PostgreSQL', 'Redis', 'pgvector', 'ClickHouse'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Workflow & Bottleneck Audit', description: 'We map repetitive human tasks, operational data flows, and measure target cycle-time reductions.' },
      { phase: '02', name: 'Schema & Prompt Engineering', description: 'We design strict input/output contracts, system prompts, few-shot exemplars, and failure recovery trees.' },
      { phase: '03', name: 'Middleware & Queue Pipeline Build', description: 'We build asynchronous workers, rate limiters, token metering, and retry logic.' },
      { phase: '04', name: 'Red-Teaming & Stress Validation', description: 'We test with noisy inputs, adversarial jailbreaks, latency spikes, and edge-case exceptions.' },
      { phase: '05', name: 'Telemetry & Observability', description: 'We deploy LangSmith/OpenTelemetry monitoring for latency, cost per run, and accuracy metrics.' }
    ],
    faqs: [
      {
        question: 'How do you prevent AI hallucinations in operational business workflows?',
        answer: 'We never allow models to return unstructured free text for programmatic execution. We enforce strict JSON schema contracts with Zod validation, temperature 0 deterministic sampling, and cross-reference model outputs against SQL referential constraints.'
      },
      {
        question: 'Can you integrate AI workflows with on-premise databases securely?',
        answer: 'Yes. We deploy localized queue workers and private VPN tunnels that process data behind your corporate firewall without exposing database credentials or unencrypted customer records.'
      },
      {
        question: 'What are the typical operating cost reductions from AI workflow automation?',
        answer: 'Our enterprise clients consistently observe a 60% to 85% drop in manual document processing time, accompanied by near-instant turnaround on operational approvals and zero transcription errors.'
      }
    ],
    relevantProjectSlugs: ['warehouse-grn-automation', 'comments-fusion', 'dome-enterprise']
  },

  // 02: SaaS Engineering & Modernization
  {
    slug: 'saas-engineering-modernization',
    number: '02',
    category: 'saas-modernization',
    title: 'SaaS Engineering & Product Modernization',
    shortDesc: 'Ground-up multi-tenant SaaS architecture, legacy modernization, subscription billing and high-concurrency platforms.',
    tagline: 'Engineered for exponential subscriber scale, flawless multi-tenancy, and high recurring margins.',
    primaryTopic: 'SaaS engineering & legacy product modernization',
    heroHeadline: 'BUILD NEW SAAS PLATFORMS OR MODERNIZE LEGACY ARCHITECTURES.',
    overview: 'Tekmora builds high-margin, scalable B2B SaaS platforms from scratch and rescues aging, fragile software products through systematic modernization. Whether you need a ground-up multi-tenant platform with Stripe billing or a zero-downtime migration from a slow monolith to modular microservices, our team delivers battle-tested architectures.',
    keyCapabilities: [
      {
        title: 'Multi-Tenant Architecture & Data Isolation',
        description: 'Robust tenant partitioning with schema-per-tenant, database-per-tenant, or partitioned row-level security (RLS) ensuring total data privacy.'
      },
      {
        title: 'Legacy Monolith Refactoring & Migration',
        description: 'Strangler-fig migrations decomposing monolithic codebases into performant Next.js frontends and decoupled API microservices without business disruption.'
      },
      {
        title: 'Subscription Tiers & Metered Billing',
        description: 'Seamless Stripe Billing and Paddle integrations supporting flat-rate subscriptions, seat-based pricing, overage metering, and automated dunning.'
      },
      {
        title: 'High-Throughput API Gateway',
        description: 'Rate-limited, token-bucket protected REST and GraphQL endpoints designed for thousands of concurrent requests with sub-50ms response times.'
      },
      {
        title: 'Admin Portals & Customer Self-Service',
        description: 'Dedicated back-office consoles for customer impersonation, churn analytics, feature flagging, and automated onboarding funnels.'
      }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend & APIs', items: ['Node.js', 'Fastify / Express', 'Go', 'GraphQL', 'REST'] },
      { category: 'Databases & Isolation', items: ['PostgreSQL (RLS)', 'Supabase', 'Redis', 'Prisma / Drizzle'] },
      { category: 'Payments & Infrastructure', items: ['Stripe Billing', 'Stripe Tax', 'Docker', 'AWS ECS', 'Vercel'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Product Scope & Unit Economics', description: 'We map tenant models, pricing tiers, subscriber journeys, and technical bottlenecks.' },
      { phase: '02', name: 'Database & Security Schema', description: 'We architect partitioned relational schemas, auth boundaries, and Stripe subscription webhooks.' },
      { phase: '03', name: 'Modular Full-Stack Build', description: 'We implement customer-facing portals, administrative consoles, and billing workflows in parallel.' },
      { phase: '04', name: 'Load & Concurrency Testing', description: 'We simulate thousands of concurrent tenant requests and automated subscription lifecycle events.' },
      { phase: '05', name: 'Zero-Downtime Deployment', description: 'We execute blue-green releases, automated database migrations, and real-time error tracking.' }
    ],
    faqs: [
      {
        question: 'Can you modernize an existing SaaS application without causing customer downtime?',
        answer: 'Yes. We utilize the strangler-fig pattern, incrementally replacing legacy endpoints and frontend views behind a reverse proxy so your paying subscribers never experience service interruptions.'
      },
      {
        question: 'Which multi-tenancy model do you recommend for B2B SaaS?',
        answer: 'For most applications, a shared database with PostgreSQL Row-Level Security (RLS) offers the optimal balance of speed, cost efficiency, and tenant isolation. For strict enterprise compliance (HIPAA/SOC2), we implement schema-isolated databases.'
      },
      {
        question: 'How do you handle subscription renewals, proration, and payment failures?',
        answer: 'We build idempotent webhook listeners for Stripe events, ensuring that subscription downgrades, upgrades with proration, card expiry retries, and access revocations happen automatically.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'leoedge-dashboard', 'grabzer-admin', 'citi-books-platform']
  },

  // 03: AI Agents & Business Process Automation
  {
    slug: 'ai-agents-process-automation',
    number: '03',
    category: 'ai-automation',
    title: 'AI Agents / Business Process Automation',
    shortDesc: 'Autonomous multi-agent swarms, tool-use execution, ERP/CRM action loops, deterministic error fallbacks.',
    tagline: 'Autonomous software agents that execute complex operations across your entire software stack.',
    primaryTopic: 'Autonomous AI agents & process automation',
    heroHeadline: 'DEPLOY AUTONOMOUS AGENTS THAT SAFELY EXECUTE BUSINESS TASKS.',
    overview: 'Tekmora designs autonomous AI agent systems that go beyond basic question-answering. Our agents interact directly with your APIs, databases, spreadsheets, and third-party tools to research information, reconcile discrepant records, compile audits, and execute verified transactions autonomously with human supervision.',
    keyCapabilities: [
      {
        title: 'Tool-Calling & API Execution Engines',
        description: 'Agents equipped with typed function signatures allowing them to query SQL databases, send emails, generate PDF invoices, and trigger ERP webhooks.'
      },
      {
        title: 'Multi-Agent Collaboration Swarms',
        description: 'Specialized hierarchical agents (e.g. Researcher, Auditor, Formatter, Validator) collaborating with state checkpoints to solve multi-stage tasks.'
      },
      {
        title: 'Deterministic State Machines & Memory',
        description: 'Persistent conversation and execution memory backed by Redis and relational state graphs, ensuring agents never lose context during long-running tasks.'
      },
      {
        title: 'Autonomous Reconciliation & Auditing',
        description: 'Agents that cross-check incoming purchase orders against vendor statements, highlighting discrepancies and automatically preparing journal entries.'
      },
      {
        title: 'Safe Escalation & Human Review UI',
        description: 'Interactive management dashboards where human operators can inspect agent thought reasoning, review proposed actions, and approve or reject steps.'
      }
    ],
    technicalStack: [
      { category: 'Agent Frameworks', items: ['LangGraph', 'CrewAI', 'AutoGen', 'OpenAI Assistants API'] },
      { category: 'Execution & Sandboxing', items: ['Docker Sandboxes', 'Node.js Workers', 'Python Microservices'] },
      { category: 'State & Memory', items: ['Redis', 'PostgreSQL', 'Vector Memory (pgvector)'] },
      { category: 'Monitoring & Telemetry', items: ['LangSmith', 'OpenTelemetry', 'Structured Winston Logs'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Task Decomposition & Boundaries', description: 'We break complex operational roles into concrete tool specifications and guardrails.' },
      { phase: '02', name: 'Tool & Schema Engineering', description: 'We implement safe, idempotent API wrappers that agents use to read and modify data.' },
      { phase: '03', name: 'Agent Graph & State Machine Build', description: 'We configure routing graphs, fallback paths, and reflection loops for self-correcting mistakes.' },
      { phase: '04', name: 'Adversarial & Edge-Case Simulation', description: 'We test ambiguous inputs, incomplete data payloads, and network drops during tool execution.' },
      { phase: '05', name: 'Human-in-the-Loop Console Deployment', description: 'We launch the review interface and configure live monitoring for agent decision logs.' }
    ],
    faqs: [
      {
        question: 'What is the difference between a simple chatbot and an AI agent?',
        answer: 'A chatbot only outputs text for a human to read. An AI agent has access to typed software tools (APIs, SQL queries, file parsers) and can independently take actions, observe the results, correct its own errors, and achieve an end operational goal.'
      },
      {
        question: 'How do you ensure an autonomous agent does not execute dangerous actions?',
        answer: 'We enforce sandboxed execution environments, read-only permissions for exploratory steps, strict parameter validation before any state-mutating tool call, and require explicit human operator approval for transactions exceeding defined thresholds.'
      },
      {
        question: 'Can agents work with our existing ERP or custom internal portal?',
        answer: 'Yes. We expose secure REST or GraphQL tools with API tokens that allow agents to interact with your existing databases, SAP Business One, Salesforce, or proprietary internal tools.'
      }
    ],
    relevantProjectSlugs: ['warehouse-grn-automation', 'matrix-field-service', 'dome-enterprise']
  },

  // 04: RAG / Private Company Data AI
  {
    slug: 'rag-enterprise-data-ai',
    number: '04',
    category: 'ai-automation',
    title: 'RAG / Private Company Data AI',
    shortDesc: 'Hybrid vector search over proprietary enterprise docs, strict data isolation, zero hallucination guardrails.',
    tagline: 'Transform your proprietary corporate archives into an instant, confidential intelligence engine.',
    primaryTopic: 'Enterprise Retrieval-Augmented Generation (RAG)',
    heroHeadline: 'QUERY YOUR PROPRIETARY DATA WITH ZERO INFORMATION LEAKS.',
    overview: 'Tekmora builds enterprise-grade Retrieval-Augmented Generation (RAG) systems that allow internal teams to query confidential PDFs, contracts, technical specifications, and historical records. We guarantee absolute data isolation, strict permission enforcement, semantic citation tracing, and zero training leakage to external foundation model providers.',
    keyCapabilities: [
      {
        title: 'Hybrid Semantic & Keyword Search',
        description: 'Combines dense vector embeddings with BM25 full-text keyword indexing and re-ranking algorithms (Cohere ReRank) for 99%+ retrieval accuracy.'
      },
      {
        title: 'Document Ingestion & Chunking Pipelines',
        description: 'Custom parsing engines handling complex tabular data, multi-column PDFs, scanned invoices, and nested engineering diagrams.'
      },
      {
        title: 'Granular Document Permission Inheritance',
        description: 'Direct mapping of enterprise RBAC permissions to vector chunks, ensuring employees only retrieve information they have clearance to view.'
      },
      {
        title: 'Verifiable Footnote & Source Citations',
        description: 'Every generated answer links directly to the specific page, paragraph, and highlighted document source for rapid human verification.'
      },
      {
        title: 'Private & Air-Gapped Deployment Options',
        description: 'Support for cloud VPC deployments or on-premise open-source models (Llama 3, Mistral) with zero data transmission to external APIs.'
      }
    ],
    technicalStack: [
      { category: 'Vector Stores', items: ['pgvector (PostgreSQL)', 'Pinecone', 'Qdrant', 'Milvus'] },
      { category: 'Embedding & Re-Ranking', items: ['OpenAI text-embedding-3', 'Cohere Rerank', 'HuggingFace Embeddings'] },
      { category: 'RAG Frameworks', items: ['LlamaIndex', 'LangChain', 'Unstructured.io', 'PDFPlumber'] },
      { category: 'Security & Auth', items: ['Row-Level Security', 'SAML SSO', 'AES-256 Encryption'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Document Audit & Taxonomy', description: 'We evaluate file formats, OCR quality, confidentiality classifications, and document hierarchy.' },
      { phase: '02', name: 'Chunking & Embedding Pipeline Build', description: 'We build automated ingestion workers with metadata tagging and semantic chunking.' },
      { phase: '03', name: 'Retrieval & Re-Ranking Engine', description: 'We implement hybrid search, reciprocal rank fusion, and context window optimization.' },
      { phase: '04', name: 'Evaluation & Hallucination QA', description: 'We run Ragas evaluation benchmarks measuring context precision, recall, and faithfulness.' },
      { phase: '05', name: 'Enterprise Deployment', description: 'We integrate with your internal SSO and provide a polished, responsive query interface.' }
    ],
    faqs: [
      {
        question: 'Will our proprietary company documents be used to train public AI models?',
        answer: 'Never. We utilize zero-data-retention enterprise API contracts (where data is never logged or used for training) or deploy self-hosted open-source models inside your own private AWS/Azure VPC.'
      },
      {
        question: 'How do you prevent employees from accessing documents above their pay grade?',
        answer: 'We attach access control list (ACL) metadata directly to each vector chunk during ingestion. When a user issues a query, the vector database filters out any chunks that exceed their verified security clearance before the model receives the prompt.'
      },
      {
        question: 'How does your RAG system handle complex tables and financial spreadsheets?',
        answer: 'Standard RAG systems fail on tables. We use specialized layout-aware extractors (Unstructured, Camelot) that convert tabular records into Markdown or structured JSON before embedding, preserving cell relationships and exact financial totals.'
      }
    ],
    relevantProjectSlugs: ['citi-books-platform', 'dome-enterprise', 'transcend-healthcare']
  },

  // 05: Security, Auth & Multi-Tenant Systems
  {
    slug: 'security-auth-multitenant',
    number: '05',
    category: 'security-systems',
    title: 'Security / Auth / Roles / Multi-Tenant Systems',
    shortDesc: 'Granular RBAC/ABAC authorization, SAML/SSO, row-level tenant security, and tamper-proof audit trails.',
    tagline: 'Bulletproof identity governance, multi-tenant isolation, and SOC2-ready authorization matrices.',
    primaryTopic: 'Enterprise security, identity governance & multi-tenancy',
    heroHeadline: 'ENTERPRISE ACCESS CONTROL AND TENANT ISOLATION ARCHITECTURES.',
    overview: 'Tekmora architects enterprise authentication, fine-grained access control, and multi-tenant security layers that pass stringent enterprise vendor reviews. We replace ad-hoc boolean flags with deterministic Role-Based (RBAC) and Attribute-Based (ABAC) authorization engines, single sign-on (SSO), and immutable transaction logging.',
    keyCapabilities: [
      {
        title: 'Single Sign-On (SSO) & Identity Federation',
        description: 'Turnkey integration with Okta, Microsoft Entra ID (Azure AD), Google Workspace, SAML 2.0, and OpenID Connect (OIDC).'
      },
      {
        title: 'Hierarchical RBAC & ABAC Policy Engines',
        description: 'Dynamic permission policies evaluating user role, organizational department, resource ownership, and environmental context (e.g. IP whitelist).'
      },
      {
        title: 'Row-Level Tenant Isolation (RLS)',
        description: 'PostgreSQL Row-Level Security policies enforced at the database engine level, making cross-tenant data leakage mathematically impossible.'
      },
      {
        title: 'Cryptographic Transaction Audit Logs',
        description: 'Immutable, tamper-evident audit trails recording every read, write, export, and privilege elevation event for SOC2 and HIPAA compliance.'
      },
      {
        title: 'Session Governance & Token Rotation',
        description: 'HttpOnly cookie session storage, automatic refresh token rotation, anomaly detection, and instant multi-device session revocation.'
      }
    ],
    technicalStack: [
      { category: 'Identity & SSO', items: ['WorkOS', 'Auth0', 'Microsoft Entra ID', 'SAML 2.0', 'OIDC'] },
      { category: 'Authorization Engines', items: ['Opa / Rego', 'Cerbos', 'CASL', 'Custom SQL RLS'] },
      { category: 'Data Protection', items: ['PostgreSQL RLS', 'pgcrypto', 'KMS Envelope Encryption', 'Argon2id'] },
      { category: 'Compliance & Audit', items: ['OpenTelemetry', 'CloudWatch Logs', 'Structured Audit Tables'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Threat Modeling & Matrix Audit', description: 'We map user roles, organizational hierarchies, API attack surfaces, and compliance requirements.' },
      { phase: '02', name: 'Database Policy Architecture', description: 'We write declarative row-level security policies and cryptographic hashing safeguards.' },
      { phase: '03', name: 'SSO & Identity Layer Build', description: 'We implement SAML/OIDC handlers, SCIM user provisioning, and session tokens.' },
      { phase: '04', name: 'Penetration & Escalation Testing', description: 'We run automated fuzzing, IDOR vulnerability tests, and simulated privilege escalation.' },
      { phase: '05', name: 'Compliance Documentation', description: 'We provide technical architecture diagrams and security questionnaires for enterprise procurement.' }
    ],
    faqs: [
      {
        question: 'Why is application-level authorization check not enough for multi-tenant systems?',
        answer: 'Application-level code is vulnerable to developer oversight (forgetting a `where tenant_id = ?` clause). Enforcing Row-Level Security (RLS) in PostgreSQL guarantees that even if an application endpoint has a bug, the database engine will refuse to return rows belonging to another tenant.'
      },
      {
        question: 'Can you implement SCIM for automated user onboarding and deprovisioning?',
        answer: 'Yes. We support SCIM 2.0 protocols so your enterprise clients can automatically sync employee accounts directly from Okta or Azure AD without manual IT intervention.'
      },
      {
        question: 'How do you store sensitive customer secrets and API credentials?',
        answer: 'We use AWS KMS / HashiCorp Vault envelope encryption. Data is encrypted using unique data keys before storage, ensuring that even in the unlikely event of a raw database dump, customer secrets remain fully unreadable.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'grabzer-admin', 'leoedge-dashboard']
  },

  // 06: Production Hardening & AI-Code Rescue
  {
    slug: 'production-hardening-code-rescue',
    number: '06',
    category: 'security-systems',
    title: 'Production Hardening / AI-Code Rescue',
    shortDesc: 'Rescuing brittle AI-generated codebases, eliminating memory leaks, typing strict TypeScript contracts, and fixing critical production vulnerabilities.',
    tagline: 'Turn fragile AI prototypes into stable, scalable, enterprise-grade production software.',
    primaryTopic: 'Software stabilization & AI prototype code rescue',
    heroHeadline: 'RESCUE BRITTLE CODEBASES AND FORTIFY SYSTEMS FOR PRODUCTION.',
    overview: 'Tekmora specializes in code rescue and production hardening. In the era of rapid AI prototyping, companies frequently end up with fragile, unmaintainable software that breaks under load, leaks sensitive keys, or contains subtle race conditions. We audit, untangle, refactor, and stabilize your codebase so you can scale with complete confidence.',
    keyCapabilities: [
      {
        title: 'Architectural Debt & Vulnerability Audit',
        description: 'Comprehensive static analysis, dependency CVE scanning, secret leak detection, and concurrency bottleneck profiling.'
      },
      {
        title: 'Strict TypeScript & Schema Typing',
        description: 'Eliminating ambiguous `any` types, building strict runtime validation contracts (Zod), and ensuring deterministic type safety across the stack.'
      },
      {
        title: 'Memory Leak & Event Loop Profiling',
        description: 'Identifying unclosed database connections, runaway WebSocket listeners, circular references, and CPU starvation issues.'
      },
      {
        title: 'Automated Test Harness Engineering',
        description: 'Implementing high-value integration tests (Vitest, Playwright) covering core payment, authentication, and transactional state machines.'
      },
      {
        title: 'CI/CD & Observability Pipeline Build',
        description: 'Setting up automated linting, type-checking, PR review gates, automated staging environments, and Sentry error alerting.'
      }
    ],
    technicalStack: [
      { category: 'Analysis & Profiling', items: ['Chrome DevTools Profiler', 'Clinic.js', 'SonarQube', 'Snyk'] },
      { category: 'Testing Frameworks', items: ['Playwright', 'Vitest', 'Testing Library', 'k6 Load Testing'] },
      { category: 'Type Safety & Contracts', items: ['TypeScript 5.x Strict', 'Zod', 'Biome', 'ESLint'] },
      { category: 'Monitoring & Alerting', items: ['Sentry', 'Datadog', 'BetterStack', 'OpenTelemetry'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Rapid Technical Audit (48h)', description: 'We review repository structure, security vulnerabilities, query efficiency, and architectural risks.' },
      { phase: '02', name: 'Stabilization Plan & Triage', description: 'We rank issues by risk to business continuity and create a phased hardening roadmap.' },
      { phase: '03', name: 'Refactoring & Test Harness Build', description: 'We write regression tests around critical paths before touching underlying implementation code.' },
      { phase: '04', name: 'Code Modernization & Type Fortification', description: 'We refactor fragile modules, eliminate anti-patterns, and enforce strict type contracts.' },
      { phase: '05', name: 'Stress Benchmarks & Handoff', description: 'We run load tests verifying latency and reliability improvements, followed by documentation.' }
    ],
    faqs: [
      {
        question: 'Why do AI-generated applications often fail in production?',
        answer: 'AI code generators produce plausible-looking individual functions, but lack systemic understanding of concurrency, edge-case rollback mechanisms, database connection pooling, and multi-tenant security boundaries. This leads to silent failures and performance cliffs under real traffic.'
      },
      {
        question: 'Do we have to completely rewrite our application to rescue it?',
        answer: 'Rarely. In over 80% of cases, we successfully stabilize existing codebases by adding strict runtime contracts, wrapping transactions with safeguards, and optimizing database queries without throwing away your existing UI or business logic.'
      },
      {
        question: 'How fast can Tekmora step in to resolve an active production crisis?',
        answer: 'We offer emergency stabilization response. Within 48 hours, our senior engineers can profile your production environment, identify root-cause memory leaks or deadlocks, and deploy targeted hotfixes.'
      }
    ],
    relevantProjectSlugs: ['comments-fusion', 'shoestops', 'dome-enterprise']
  },

  // 07: API & Stripe Integrations
  {
    slug: 'api-stripe-integrations',
    number: '07',
    category: 'saas-modernization',
    title: 'API / Stripe / Third-Party Integrations',
    shortDesc: 'High-volume webhooks, idempotent transactions, Stripe billing & payout engines, and enterprise CRM/ERP conduits.',
    tagline: 'Reliable transaction pipelines connecting payments, ERPs, and third-party SaaS ecosystems.',
    primaryTopic: 'API development, Stripe integration & payment systems',
    heroHeadline: 'CONNECT PAYMENTS, STRIPE, AND THIRD-PARTY APIS FLAWLESSLY.',
    overview: 'Tekmora builds resilient API integration pipelines and payment gateways. Whether connecting Stripe for global subscription billing, linking your warehouse to shipping carriers, or synchronizing CRM records with your accounting software, we engineer fault-tolerant, idempotent integration middleware that never loses a transaction.',
    keyCapabilities: [
      {
        title: 'Idempotent Stripe Billing & Checkout',
        description: 'Custom Stripe Elements, Stripe Checkout, usage-based metering, invoice generation, customer portals, and automatic payment recovery.'
      },
      {
        title: 'Resilient Webhook Infrastructure',
        description: 'Dead-letter queues, exponential backoff retries, and cryptographic signature validation handling millions of third-party webhook events.'
      },
      {
        title: 'ERP & Accounting Software Sync',
        description: 'Bi-directional synchronization between sales platforms and accounting software (QuickBooks, Xero, SAP B1, NetSuite).'
      },
      {
        title: 'Shipping & Logistics API Conduits',
        description: 'Direct integrations with FedEx, UPS, DHL, and ShipStation for real-time rates, automated label generation, and tracking webhooks.'
      },
      {
        title: 'Public & Partner API Gateway Design',
        description: 'Clean REST and GraphQL API interfaces with OpenAPI / Swagger documentation, rate limiting, and API key management.'
      }
    ],
    technicalStack: [
      { category: 'Payments', items: ['Stripe SDK', 'Stripe Webhooks', 'Paddle', 'PayPal Braintree'] },
      { category: 'Queues & Retries', items: ['BullMQ', 'Redis', 'SQS', 'Inngest'] },
      { category: 'API Protocol', items: ['REST', 'GraphQL', 'Webhooks', 'gRPC'] },
      { category: 'Documentation', items: ['OpenAPI 3.1', 'Swagger', 'Scalar', 'Postman Collections'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'API Schema & Data Mapping', description: 'We map source and destination field contracts, types, rate limits, and authentication modes.' },
      { phase: '02', name: 'Idempotency & Queue Architecture', description: 'We design retry policies, deduplication locks, and dead-letter queues for failed events.' },
      { phase: '03', name: 'Integration Engine Build', description: 'We build the bi-directional middleware with comprehensive error reporting.' },
      { phase: '04', name: 'Sandbox & Failure Simulation', description: 'We simulate carrier outages, expired credit cards, and delayed webhooks.' },
      { phase: '05', name: 'Production Cutover & Monitoring', description: 'We monitor transaction latencies, success rates, and webhook processing queues.' }
    ],
    faqs: [
      {
        question: 'How do you prevent duplicate charges if Stripe webhooks fire more than once?',
        answer: 'We implement strict idempotency keys and database transaction locks. When a webhook arrives, we verify whether its unique event ID has already been committed before executing any balance or subscription modifications.'
      },
      {
        question: 'Can you migrate our existing Stripe customer and subscription data?',
        answer: 'Yes. We frequently execute seamless customer token and subscription migrations, preserving active billing cycles and card details without requiring customers to re-enter payment information.'
      },
      {
        question: 'What happens if a third-party API goes down while our platform is processing orders?',
        answer: 'Our queue middleware captures the order, confirms receipt to the customer, and queues the outbound third-party request in an asynchronous retry queue with exponential backoff until the external provider recovers.'
      }
    ],
    relevantProjectSlugs: ['shoestops', 'grabzer-admin', 'citi-books-platform']
  },

  // 08: Internal Tools + Dashboards + Automation
  {
    slug: 'internal-tools-dashboards',
    number: '08',
    category: 'enterprise-cloud',
    title: 'Internal Tools + Dashboards + Automation',
    shortDesc: 'High-density operational dashboards, real-time KPI telemetry, multi-step approval workflows, and back-office tools.',
    tagline: 'Custom administrative consoles and operations dashboards engineered for speed and workflow accuracy.',
    primaryTopic: 'Internal tools, operational dashboards & back-office automation',
    heroHeadline: 'HIGH-DENSITY INTERNAL TOOLS THAT SUPERCHARGE OPERATIONS.',
    overview: 'Tekmora designs custom internal tools, operations dashboards, and back-office software that replace clumsy spreadsheets and fragmented SaaS subscriptions. We build ergonomic, keyboard-friendly data management consoles with instant search, bulk actions, and live database telemetry tailored to your exact team workflows.',
    keyCapabilities: [
      {
        title: 'Virtualized High-Density Data Tables',
        description: 'Multi-column sorting, sticky columns, inline editing, fuzzy filtering, and smooth scrolling across hundreds of thousands of rows.'
      },
      {
        title: 'Multi-Tier Approval & Triage Queues',
        description: 'Configurable operational queues where managers review pending claims, orders, discounts, and dispatch requests with single-click actions.'
      },
      {
        title: 'Real-Time Telemetry & Metric Displays',
        description: 'Live WebSocket metrics, charts, and warehouse/sales leaderboards designed for high-contrast executive and shop-floor displays.'
      },
      {
        title: 'One-Click Bulk Actions & Excel Export',
        description: 'Bulk status changes, automated invoice generation, CSV/Excel parsing, and formatted reporting with zero browser freeze.'
      },
      {
        title: 'Granular Role-Based Permissions',
        description: 'Custom view and action permissions ensuring staff only view and execute workflows relevant to their operational responsibilities.'
      }
    ],
    technicalStack: [
      { category: 'Frontend UI', items: ['React 19', 'TanStack Table', 'TanStack Query', 'Tailwind CSS'] },
      { category: 'Data Visualization', items: ['Recharts', 'Tremor', 'Lucide Icons', 'HTML5 Canvas'] },
      { category: 'Backend Engine', items: ['Node.js', 'Express', 'WebSockets', 'PostgreSQL / SQL Server'] },
      { category: 'Export & Utilities', items: ['ExcelJS', 'PDFKit', 'Redis Pub/Sub'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Operational Shadowing', description: 'We observe your internal operators to identify repetitive clicks, spreadsheet juggling, and pain points.' },
      { phase: '02', name: 'Information Architecture', description: 'We design high-density wireframes prioritizing keyboard shortcuts and minimal visual noise.' },
      { phase: '03', name: 'Data Pipeline Engineering', description: 'We build optimized SQL views and indices to ensure instant dashboard load times.' },
      { phase: '04', name: 'Operator Testing & Iteration', description: 'We test with actual back-office personnel, refining table ergonomics and shortcut keys.' },
      { phase: '05', name: 'Deployment & Training', description: 'We deploy the tool, integrate SSO, and provide interactive operator walkthroughs.' }
    ],
    faqs: [
      {
        question: 'Why build a custom internal dashboard instead of using Retool or Appsmith?',
        answer: 'Low-code tools like Retool are great for simple prototypes, but become prohibitively expensive at scale ($50+/user/month) and hit strict performance walls with complex business logic, custom styling, or offline synchronization. Custom tools have zero per-user licensing fees and unlimited flexibility.'
      },
      {
        question: 'Can internal dashboards connect to multiple databases simultaneously?',
        answer: 'Yes. Our backend middleware can aggregate records from PostgreSQL, SQL Server, legacy ERPs, and third-party APIs into a single unified operational dashboard.'
      },
      {
        question: 'How fast do data tables load when viewing millions of rows?',
        answer: 'We utilize server-side pagination, database indexing, and client-side DOM virtualization so that only the ~30 visible rows are rendered, resulting in instant load times regardless of total dataset size.'
      }
    ],
    relevantProjectSlugs: ['grabzer-admin', 'leoedge-dashboard', 'dome-enterprise']
  },

  // 09: Performance, Reliability & Cloud DevOps
  {
    slug: 'performance-scaling-cloud-devops',
    number: '09',
    category: 'enterprise-cloud',
    title: 'Performance, Reliability & Cloud DevOps',
    shortDesc: 'Sub-second p99 latencies, Redis caching layers, query execution profiling, Docker, Kubernetes, and automated CI/CD.',
    tagline: 'High-availability cloud infrastructure and extreme performance optimization for high-throughput platforms.',
    primaryTopic: 'Application performance engineering & cloud DevOps',
    heroHeadline: 'MAXIMIZE SYSTEM SPEED, RESILIENCE, AND CLOUD SCALABILITY.',
    overview: 'Tekmora diagnoses performance bottlenecks, optimizes database queries, and designs robust cloud infrastructure. Whether your web application slows to a crawl during traffic spikes or your deployments are manual and error-prone, we tune your architecture for sub-100ms response times and 99.99% operational uptime.',
    keyCapabilities: [
      {
        title: 'Database Query Optimization & Indexing',
        description: 'Deep EXPLAIN ANALYZE profiling, dead-lock elimination, composite index tuning, and read-replica offloading.'
      },
      {
        title: 'Multi-Tier Redis Caching Strategies',
        description: 'Stale-while-revalidate caching, distributed cache invalidation, and session stores slashing primary database query loads by up to 90%.'
      },
      {
        title: 'Automated CI/CD & Preview Deployments',
        description: 'Zero-downtime deployment pipelines using GitHub Actions, automated database schema migrations, and per-PR preview environments.'
      },
      {
        title: 'Containerization & Cloud Infrastructure (IaC)',
        description: 'Dockerized microservices orchestrated on AWS ECS / EKS or Kubernetes, provisioned predictably using Terraform.'
      },
      {
        title: 'Full-Stack Observability & APM',
        description: 'Comprehensive telemetry dashboards tracking p50/p95/p99 latency, error budgets, memory saturation, and CPU utilization.'
      }
    ],
    technicalStack: [
      { category: 'Cloud Providers', items: ['AWS', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Cloudflare'] },
      { category: 'DevOps & Containers', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
      { category: 'Caching & Data', items: ['Redis', 'Memcached', 'PostgreSQL Read-Replicas', 'Cloudflare CDN'] },
      { category: 'Observability', items: ['Prometheus', 'Grafana', 'Datadog', 'Sentry'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Telemetry & Latency Audit', description: 'We benchmark p99 response times, profile database slow queries, and identify bottlenecks.' },
      { phase: '02', name: 'Database & Caching Optimization', description: 'We add targeted indices, refactor N+1 queries, and implement Redis caching layers.' },
      { phase: '03', name: 'Infrastructure as Code (IaC)', description: 'We codify cloud environments with Terraform and configure containerized build runners.' },
      { phase: '04', name: 'Stress & Chaos Benchmarks', description: 'We simulate heavy traffic spikes with k6 to verify auto-scaling and zero-downtime releases.' },
      { phase: '05', name: 'Monitoring & Alerting Handover', description: 'We set up real-time Slack/PagerDuty alerts for latency anomalies and error rate spikes.' }
    ],
    faqs: [
      {
        question: 'How do you diagnose why our web application is slow?',
        answer: 'We install non-intrusive APM profilers that trace the complete request lifecycle: network transport, server CPU execution, ORM overhead, and individual database SQL query wait times to pinpoint the exact millisecond bottleneck.'
      },
      {
        question: 'Can you migrate our manual hosting to automated AWS infrastructure?',
        answer: 'Yes. We migrate fragile VPS setups to modern containerized AWS/GCP architectures with automated CI/CD pipelines, SSL certificate renewal, and automated nightly database backups.'
      },
      {
        question: 'What performance improvement can we realistically expect?',
        answer: 'In typical modernization engagements, we achieve an 80% to 95% reduction in API response times, slashing multi-second page loads down to under 200 milliseconds.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'shoestops', 'sap-b1-production-dashboard']
  },

  // 10: Maintenance Retainers
  {
    slug: 'maintenance-evolution-retainers',
    number: '10',
    category: 'enterprise-cloud',
    title: 'Maintenance & Evolution Retainers',
    shortDesc: 'Dedicated SLA engineering, 24/7 uptime monitoring, dependency security patching, and evolutionary feature sprints.',
    tagline: 'Guaranteed senior engineering capacity to keep your mission-critical software fast, secure, and evolving.',
    primaryTopic: 'Ongoing software maintenance & engineering retainers',
    heroHeadline: 'PROACTIVE ENGINEERING SUPPORT AND CONTINUOUS EVOLUTION.',
    overview: 'Software is never finished after initial launch. Tekmora provides dedicated engineering retainers that protect your investment. We act as your fractional platform engineering team, providing proactive 24/7 uptime monitoring, critical security patching, rapid bug resolution, and monthly feature iteration cycles under a guaranteed SLA.',
    keyCapabilities: [
      {
        title: 'Guaranteed SLA Response Times',
        description: 'Direct Slack channel and hotline with committed response times (under 1 hour for critical production incidents).'
      },
      {
        title: 'Proactive Security & Dependency Upgrades',
        description: 'Monthly npm/package audits, automated CVE vulnerability remediation, and framework version upgrades before deprecation.'
      },
      {
        title: 'Continuous Performance & Database Audits',
        description: 'Ongoing query optimization, database vacuuming, table re-indexing, and cache hit-ratio monitoring.'
      },
      {
        title: 'Dedicated Monthly Feature Sprints',
        description: 'Reserved senior developer hours each month dedicated to building new features, integrations, and user-requested enhancements.'
      },
      {
        title: 'Executive Infrastructure & Roadmap Reviews',
        description: 'Monthly health reports detailing error frequency, server capacity headroom, cost optimization tips, and upcoming roadmap recommendations.'
      }
    ],
    technicalStack: [
      { category: 'Incident Management', items: ['PagerDuty', 'OpsGenie', 'Slack Connect', 'Jira / Linear'] },
      { category: 'Monitoring', items: ['Datadog', 'Sentry', 'BetterStack', 'UptimeRobot'] },
      { category: 'Automation', items: ['Renovate Bot', 'Dependabot', 'GitHub Actions'] },
      { category: 'Reporting', items: ['Executive SLA Dashboards', 'Monthly Telemetry Summaries'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Codebase & Infrastructure Onboarding', description: 'We audit repositories, documentation, environment variables, and configure telemetry.' },
      { phase: '02', name: 'Alerting & Incident Setup', description: 'We configure alerting thresholds, escalate on-call routing, and test emergency channels.' },
      { phase: '03', name: 'Routine Patching & Health Cycles', description: 'We perform scheduled weekly dependency reviews and database maintenance runs.' },
      { phase: '04', name: 'Sprint Execution', description: 'We execute prioritized feature requests and bug fixes in 2-week continuous delivery cycles.' },
      { phase: '05', name: 'Monthly Executive Review', description: 'We deliver uptime verification, SLA adherence metrics, and strategic roadmap advice.' }
    ],
    faqs: [
      {
        question: 'Do unused retainer hours roll over to the next month?',
        answer: 'Yes, up to 25% of unused feature development hours roll over into the following month, ensuring your budget is never wasted while maintaining team availability.'
      },
      {
        question: 'Can you take over maintenance of software that was built by another agency?',
        answer: 'Yes. We conduct a structured 2-week Technical Due Diligence audit to understand the architecture, identify critical risks, and transition maintenance smoothly.'
      },
      {
        question: 'What is the commitment period for maintenance retainers?',
        answer: 'We offer flexible 3-month, 6-month, and 12-month agreements. We earn your continued partnership through consistent, high-velocity engineering delivery.'
      }
    ],
    relevantProjectSlugs: ['seven-koncepts', 'transcend-healthcare', 'dome-enterprise']
  },

  // 11: AI Customer Support & Chatbots
  {
    slug: 'ai-customer-support-chatbots',
    number: '11',
    category: 'ai-automation',
    title: 'AI Customer Support / Chatbots',
    shortDesc: 'Context-aware support agents connected to ticketing systems, real-time database lookups, and human escalation handoffs.',
    tagline: 'Context-grounded customer service AI connected directly to your transactional databases.',
    primaryTopic: 'AI customer support agents & integrated chatbot systems',
    heroHeadline: 'ENTERPRISE AI SUPPORT CONNECTED DIRECTLY TO YOUR REAL DATA.',
    overview: 'Most customer service chatbots fail because they give generic, hallucinated answers and cannot actually check an order status or update an account. Tekmora builds integrated customer support AI that connects directly to your SQL databases, Shopify, or ERP to provide factual answers, look up order statuses, and escalate smoothly to human reps.',
    keyCapabilities: [
      {
        title: 'Real-Time Database Order & Account Lookups',
        description: 'Secure tool execution allowing the AI to verify customer identity, look up tracking numbers, and report live account balances.'
      },
      {
        title: 'Frictionless Human Escalation Hand-off',
        description: 'Smooth transitions to Zendesk, Intercom, or live human operators with full conversation context and sentiment analysis.'
      },
      {
        title: 'Hallucination-Guarded Knowledge Base',
        description: 'Strict retrieval from verified return policies, warranties, and FAQs with zero improvisation on policy terms.'
      },
      {
        title: 'Omnichannel Deployment',
        description: 'A single unified AI intelligence engine powering your web chat widget, WhatsApp business API, and email support inbox.'
      },
      {
        title: 'Continuous Quality & Resolution Analytics',
        description: 'Automated CSAT analysis, question categorization, and reports identifying frequently confused product topics.'
      }
    ],
    technicalStack: [
      { category: 'LLM & Voice', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Whisper Speech-to-Text'] },
      { category: 'Customer Desk APIs', items: ['Zendesk API', 'Intercom', 'Freshdesk', 'Shopify Admin API'] },
      { category: 'Vector Search', items: ['pgvector', 'Pinecone', 'LlamaIndex'] },
      { category: 'UI Widget', items: ['React Lightweight Widget', 'WebSockets', 'Tailwind CSS'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Knowledge & Tool Scoping', description: 'We index support documentation, return policies, and define database query tools.' },
      { phase: '02', name: 'Guardrail & Persona Engineering', description: 'We craft strict boundary guidelines, tone instructions, and refusal parameters.' },
      { phase: '03', name: 'Helpdesk & Database Integration', description: 'We connect customer verification flows and ticket escalation endpoints.' },
      { phase: '04', name: 'Simulated Ticket Testing', description: 'We run hundreds of past historical support tickets to evaluate resolution accuracy.' },
      { phase: '05', name: 'Live Rollout with Shadow Mode', description: 'We run the AI in shadow mode (drafting responses for human approval) before full release.' }
    ],
    faqs: [
      {
        question: 'Why do you recommend selling AI customer support only when integrated?',
        answer: 'Stand-alone chatbots that only regurgitate generic text frustrate customers. An AI bot is only valuable when it can answer specific questions like "Where is order #4819?" or "How many days left on my subscription?", which requires deep database integration.'
      },
      {
        question: 'Can the bot process returns or refunds automatically?',
        answer: 'Yes, within predefined business guardrails (e.g. Orders under $50 delivered within the last 14 days can be issued a return label automatically; higher amounts trigger human review).'
      },
      {
        question: 'How does the bot know when to transfer to a human agent?',
        answer: 'We configure sentiment analysis and keyword triggers (e.g. repeated frustration, legal threats, complex edge cases) that immediately alert human agents with a summarized brief.'
      }
    ],
    relevantProjectSlugs: ['shoestops', 'comments-fusion', 'citi-books-platform']
  },

  // 12: Web Application Development (Existing)
  {
    slug: 'web-application-development',
    number: '12',
    category: 'saas-modernization',
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

  // 13: Mobile App Development (Existing)
  {
    slug: 'mobile-app-development',
    number: '13',
    category: 'enterprise-cloud',
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

  // 14: Enterprise Software Development (Existing)
  {
    slug: 'enterprise-software-development',
    number: '14',
    category: 'enterprise-cloud',
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

  // 15: SAP Business One Integration (Existing)
  {
    slug: 'sap-business-one-integration',
    number: '15',
    category: 'enterprise-cloud',
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

  // 16: Warehouse Management Systems (Existing)
  {
    slug: 'warehouse-management-systems',
    number: '16',
    category: 'enterprise-cloud',
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

  // 17: WordPress Development (Existing)
  {
    slug: 'wordpress-development',
    number: '17',
    category: 'saas-modernization',
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
,
  {
    slug: 'custom-software-development',
    number: 'C01',
    category: 'enterprise-cloud',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke enterprise applications engineered for complex operational workflows.',
    tagline: 'We build the software your business runs on.',
    primaryTopic: 'Custom Enterprise Software',
    heroHeadline: 'ENGINEERED FOR YOUR EXACT OPERATIONAL REALITY.',
    overview: 'Generic SaaS products force you to adapt your business to their constraints. We build custom software that adapts perfectly to you—bridging the gap between your unique workflows, legacy systems, and future scale.',
    architectureApproach: 'We favor modular monoliths or pragmatic microservices using React/Next.js and Node.js/C#. Architecture is designed around domain boundaries, ensuring the system can evolve without breaking.',
    keyCapabilities: [
      { title: 'End-to-End Development', description: 'From architecture design to deployment, we handle the entire lifecycle.' },
      { title: 'Legacy System Integration', description: 'Seamlessly connecting new platforms with existing ERPs or CRMs.' },
      { title: 'High-Performance Architecture', description: 'Optimized for speed, concurrency, and reliability.' }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
      { category: 'Backend', items: ['Node.js', '.NET C#', 'PostgreSQL', 'Redis'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Discovery & Architecture', description: 'Mapping your business domain and technical constraints.' },
      { phase: '02', name: 'Iterative Development', description: 'Sprint-based delivery with continuous feedback.' },
      { phase: '03', name: 'Testing & QA', description: 'Rigorous automated and manual testing.' },
      { phase: '04', name: 'Deployment & Training', description: 'Smooth rollout and user onboarding.' }
    ],
    faqs: [
      { question: 'Do we own the source code?', answer: 'Yes, 100% ownership of the intellectual property transfers to you upon project completion.' },
      { question: 'How do you handle maintenance?', answer: 'We offer dedicated SLAs and retainer packages for ongoing support and feature evolution.' }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'citi-books-platform'],
    businessProblems: [
      { title: 'Off-the-shelf software doesn\'t fit', description: 'You are using multiple disjointed tools with manual data entry in between.' },
      { title: 'High licensing costs', description: 'Per-user SaaS fees are eating into your margins as your team scales.' }
    ],
    industries: ['Logistics', 'Healthcare', 'Manufacturing', 'Finance']
  },
  {
    slug: 'web-development',
    number: 'C02',
    category: 'saas-modernization',
    title: 'Enterprise Web Application Development',
    shortDesc: 'High-performance, secure, and scalable web applications.',
    tagline: 'Web platforms that operate like native desktop applications.',
    primaryTopic: 'Enterprise Web Apps',
    heroHeadline: 'WEB APPLICATIONS ENGINEERED FOR ENTERPRISE SCALE.',
    overview: 'We build data-intensive web applications with sub-second response times. Using modern JavaScript frameworks and robust backend architectures, we deliver platforms that handle thousands of concurrent users flawlessly.',
    architectureApproach: 'Server-Side Rendered (SSR) or Static Site Generated (SSG) frontends backed by highly available REST/GraphQL APIs, deployed on scalable cloud infrastructure.',
    keyCapabilities: [
      { title: 'Complex State Management', description: 'Handling massive datasets in the browser without freezing the UI.' },
      { title: 'Real-Time Synchronization', description: 'WebSockets for instant data updates across all connected clients.' },
      { title: 'Enterprise Security', description: 'SSO integration, strict RBAC, and OWASP top 10 protection.' }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js'] },
      { category: 'Backend', items: ['Node.js', 'Go', 'GraphQL'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'UX/UI Design', description: 'Creating intuitive interfaces for complex data.' },
      { phase: '02', name: 'Frontend Engineering', description: 'Building the interactive components.' },
      { phase: '03', name: 'Backend Integration', description: 'Wiring up the APIs and database.' },
      { phase: '04', name: 'Performance Tuning', description: 'Optimizing rendering and network payloads.' }
    ],
    faqs: [
      { question: 'Can the app work offline?', answer: 'Yes, we can build Progressive Web Apps (PWAs) with offline sync capabilities.' },
      { question: 'Is it mobile responsive?', answer: 'Absolutely. All our web applications are fully responsive across desktop, tablet, and mobile.' }
    ],
    relevantProjectSlugs: ['grabzer-admin', 'leoedge-dashboard'],
    businessProblems: [
      { title: 'Slow legacy portals', description: 'Your current web app takes 10+ seconds to load critical reports.' },
      { title: 'Poor user experience', description: 'Employees hate using the internal tools because they are clunky and confusing.' }
    ],
    industries: ['SaaS', 'B2B Services', 'E-commerce']
  },
  {
    slug: 'erp-wms-development',
    number: 'C03',
    category: 'enterprise-cloud',
    title: 'ERP / WMS Development',
    shortDesc: 'Custom Warehouse Management and Enterprise Resource Planning systems.',
    tagline: 'Connecting inventory, procurement, and dispatch workflows.',
    primaryTopic: 'WMS & ERP Systems',
    heroHeadline: 'WAREHOUSE PLATFORMS BUILT FOR OPERATIONAL VELOCITY.',
    overview: 'Build warehouse platforms that connect inventory, procurement, SAP, dispatch, barcode operations and warehouse workflows into a single, cohesive system.',
    architectureApproach: 'Event-driven architecture to handle high-volume inventory movements, coupled with offline-first mobile scanning applications for warehouse floor staff.',
    keyCapabilities: [
      { title: 'Inventory Management', description: 'Real-time stock visibility and location tracking.' },
      { title: 'Barcode / QR Workflows', description: 'Mobile scanning for GR, GI, and transfers.' },
      { title: 'Dispatch Management', description: 'Route optimization and carrier integration.' }
    ],
    technicalStack: [
      { category: 'Core Systems', items: ['.NET', 'Node.js', 'SQL Server'] },
      { category: 'Mobile & Hardware', items: ['React Native', 'Zebra Scanners'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Process Mapping', description: 'Documenting the physical flow of goods.' },
      { phase: '02', name: 'System Design', description: 'Architecting the database and integration points.' },
      { phase: '03', name: 'Hardware Integration', description: 'Connecting scanners and label printers.' },
      { phase: '04', name: 'Floor Testing', description: 'Validating workflows in the actual warehouse environment.' }
    ],
    faqs: [
      { question: 'Can you replace an existing warehouse system?', answer: 'Yes, we specialize in migrating from legacy or paper-based systems to modern digital platforms.' },
      { question: 'Can you build modules incrementally?', answer: 'Yes. We often start with Goods Receipt and incrementally roll out Dispatch, Returns, and cycle counting.' }
    ],
    relevantProjectSlugs: ['warehouse-grn-automation', 'matrix-field-service'],
    businessProblems: [
      { title: 'Lost inventory', description: 'Items are in the warehouse but cannot be located in the system.' },
      { title: 'Manual data entry errors', description: 'Paper-based picking leads to shipping the wrong items.' }
    ],
    industries: ['Logistics', 'Retail', 'Manufacturing', 'Wholesale']
  },
  {
    slug: 'sap-b1-integration',
    number: 'C04',
    category: 'enterprise-cloud',
    title: 'SAP B1 Integration & Automation',
    shortDesc: 'Deep bi-directional integration with SAP Business One.',
    tagline: 'Unlock your ERP data and automate SAP workflows.',
    primaryTopic: 'SAP B1 Integration',
    heroHeadline: 'SEAMLESS SAP BUSINESS ONE INTEGRATIONS.',
    overview: 'We connect your SAP Business One ERP to modern web apps, mobile apps, e-commerce platforms, and custom portals using the SAP Service Layer (DI API). We automate data entry, sync inventory, and extend SAP functionality.',
    architectureApproach: 'Middleware layer caching SAP data in Redis/PostgreSQL to prevent overwhelming the SAP Service Layer, ensuring fast API responses for end-user applications.',
    keyCapabilities: [
      { title: 'Service Layer API Integration', description: 'Secure, high-performance communication with SAP.' },
      { title: 'B2B Portal Development', description: 'Customer portals reading real-time SAP pricing and stock.' },
      { title: 'Automated Document Creation', description: 'Auto-generating Sales Orders, Invoices, and Deliveries.' }
    ],
    technicalStack: [
      { category: 'Integration Layer', items: ['Node.js', 'C#', 'SAP Service Layer', 'OData'] },
      { category: 'Database', items: ['MS SQL Server', 'SAP HANA', 'Redis'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Data Mapping', description: 'Aligning external models with SAP Business One UDFs and standard objects.' },
      { phase: '02', name: 'Middleware Architecture', description: 'Building the robust synchronization engine.' },
      { phase: '03', name: 'Bi-Directional Syncing', description: 'Implementing robust queue-based data transfers.' },
      { phase: '04', name: 'UAT & Go-Live', description: 'Testing in SAP Sandbox before production cutover.' }
    ],
    faqs: [
      { question: 'Do you support SAP HANA?', answer: 'Yes, we integrate with both SAP HANA and MS SQL Server deployments of SAP B1.' },
      { question: 'Can you handle custom UDFs and UDOs?', answer: 'Absolutely. Our integrations seamlessly read and write to User-Defined Fields and User-Defined Objects.' }
    ],
    relevantProjectSlugs: ['sap-b1-production-dashboard', 'warehouse-grn-automation'],
    businessProblems: [
      { title: 'Siloed systems', description: 'Your e-commerce site doesn\'t talk to SAP, requiring manual order entry.' },
      { title: 'Slow reporting', description: 'Pulling real-time production data out of SAP takes hours.' }
    ],
    industries: ['Manufacturing', 'Distribution', 'Retail']
  },
  {
    slug: 'mobile-app-development',
    number: 'C05',
    category: 'enterprise-cloud',
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile apps for iOS and Android.',
    tagline: 'Enterprise mobility solutions that work anywhere, even offline.',
    primaryTopic: 'Mobile App Engineering',
    heroHeadline: 'MISSION-CRITICAL MOBILE APPLICATIONS.',
    overview: 'From consumer-facing flagship apps to ruggedized warehouse scanner tools, we build mobile applications that deliver flawless performance. We specialize in complex requirements like offline-first synchronization and hardware integrations.',
    architectureApproach: 'React Native for cross-platform efficiency, with native Swift/Kotlin modules written for specific hardware integrations (Bluetooth, Scanners, offline SQLite).',
    keyCapabilities: [
      { title: 'Offline-First Architecture', description: 'Apps that function completely without internet and sync when reconnected.' },
      { title: 'Hardware Integration', description: 'Connecting to Bluetooth printers, RFID scanners, and biometric sensors.' },
      { title: 'Cross-Platform Delivery', description: 'Single codebase deploying to both iOS and Android stores.' }
    ],
    technicalStack: [
      { category: 'Mobile Frameworks', items: ['React Native', 'Expo', 'Swift', 'Kotlin'] },
      { category: 'Local Storage', items: ['SQLite', 'WatermelonDB', 'MMKV'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'UX & Prototyping', description: 'Designing intuitive, thumb-friendly mobile interfaces.' },
      { phase: '02', name: 'Core Development', description: 'Building the app logic and native bridges.' },
      { phase: '03', name: 'Offline Sync Engine', description: 'Implementing robust data reconciliation.' },
      { phase: '04', name: 'App Store Submission', description: 'Managing the Apple and Google review processes.' }
    ],
    faqs: [
      { question: 'Do you build native or cross-platform?', answer: 'We primarily use React Native to deliver iOS and Android apps faster, but we write native code when hardware performance demands it.' },
      { question: 'Can you integrate with mobile device management (MDM)?', answer: 'Yes, we can build apps designed for enterprise deployment via Jamf, Intune, or AirWatch.' }
    ],
    relevantProjectSlugs: ['matrix-field-service', 'quran-ayat-app', 'shoestops'],
    businessProblems: [
      { title: 'Field workers lack connectivity', description: 'Staff in remote locations cannot access or submit data because they have no cell service.' },
      { title: 'Clunky mobile experiences', description: 'Your current mobile app is just a wrapped website and feels slow.' }
    ],
    industries: ['Field Services', 'Logistics', 'Healthcare', 'Consumer Tech']
  },
  {
    slug: 'data-bi-analytics',
    number: 'C06',
    category: 'enterprise-cloud',
    title: 'Data Analytics & Power BI',
    shortDesc: 'Transforming raw database records into actionable business intelligence.',
    tagline: 'See the true velocity and profitability of your business in real time.',
    primaryTopic: 'Data & BI',
    heroHeadline: 'ACTIONABLE BUSINESS INTELLIGENCE.',
    overview: 'We build data pipelines that aggregate fragmented data sources into a single source of truth. We design bespoke Power BI dashboards and custom analytical portals that give executives instant visibility into KPIs.',
    architectureApproach: 'ELT pipelines using dbt to transform raw data in a data warehouse (Snowflake/PostgreSQL), feeding optimized materialized views into BI tools or custom React dashboards.',
    keyCapabilities: [
      { title: 'Data Warehousing', description: 'Centralizing data from ERPs, CRMs, and APIs.' },
      { title: 'Power BI Development', description: 'Designing interactive, high-performance BI reports.' },
      { title: 'Custom Analytics Dashboards', description: 'Building bespoke, fast-loading React analytics portals.' }
    ],
    technicalStack: [
      { category: 'Data Engineering', items: ['dbt', 'Airflow', 'Python'] },
      { category: 'Warehousing & BI', items: ['PostgreSQL', 'Snowflake', 'Power BI', 'Metabase'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Metric Definition', description: 'Identifying the core KPIs that actually drive business decisions.' },
      { phase: '02', name: 'Pipeline Construction', description: 'Extracting and loading data into the warehouse.' },
      { phase: '03', name: 'Data Modeling', description: 'Transforming raw data into optimized star schemas.' },
      { phase: '04', name: 'Visualization', description: 'Designing the dashboards and setting up automated alerts.' }
    ],
    faqs: [
      { question: 'Can you embed Power BI into our existing web app?', answer: 'Yes, we use Power BI Embedded to securely display reports inside your custom portals.' },
      { question: 'How do you handle slow-loading reports?', answer: 'We optimize the underlying SQL queries, build materialized views, and redesign the DAX measures in Power BI.' }
    ],
    relevantProjectSlugs: ['sap-b1-production-dashboard', 'transcend-healthcare'],
    businessProblems: [
      { title: 'Reporting takes days', description: 'Your team spends hours in Excel every week just to generate standard reports.' },
      { title: 'Inconsistent metrics', description: 'Different departments report different numbers for the same KPI.' }
    ],
    industries: ['Finance', 'Manufacturing', 'Retail', 'Healthcare']
  },
  {
    slug: 'api-integration',
    number: 'C07',
    category: 'saas-modernization',
    title: 'API & System Integration',
    shortDesc: 'Connecting disparate software systems via robust APIs.',
    tagline: 'We make your software talk to each other.',
    primaryTopic: 'System Integration',
    heroHeadline: 'ENTERPRISE SYSTEM INTEGRATION.',
    overview: 'We engineer resilient middleware that connects legacy systems, third-party SaaS, and custom applications. We eliminate manual data entry by automating the flow of information across your entire technical ecosystem.',
    architectureApproach: 'Asynchronous event-driven architecture utilizing message queues (RabbitMQ/BullMQ) to ensure guaranteed delivery, with idempotent webhook receivers to prevent duplicate processing.',
    keyCapabilities: [
      { title: 'Custom Middleware Engineering', description: 'Building the connective tissue between closed systems.' },
      { title: 'API Gateway Design', description: 'Creating clean, secure, and documented APIs for your partners.' },
      { title: 'Webhook Management', description: 'Handling high-volume incoming events reliably.' }
    ],
    technicalStack: [
      { category: 'Backend & APIs', items: ['Node.js', 'Go', 'GraphQL', 'REST'] },
      { category: 'Queues', items: ['RabbitMQ', 'Redis Streams', 'BullMQ'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'API Auditing', description: 'Reviewing rate limits, authentication methods, and data payloads.' },
      { phase: '02', name: 'Middleware Architecture', description: 'Designing the robust message queues and dead-letter queues.' },
      { phase: '03', name: 'Data Transformation', description: 'Mapping schemas between the connected systems.' },
      { phase: '04', name: 'Stress Testing', description: 'Simulating outages to ensure the system recovers gracefully.' }
    ],
    faqs: [
      { question: 'What happens if the receiving API goes down?', answer: 'Our queues will automatically retry the request with exponential backoff until the system recovers, ensuring zero data loss.' },
      { question: 'Can you integrate with SOAP APIs?', answer: 'Yes, we regularly integrate with legacy SOAP, XML, and even flat-file FTP drops.' }
    ],
    relevantProjectSlugs: ['api-stripe-integrations', 'citi-books-platform'],
    businessProblems: [
      { title: 'Double data entry', description: 'Employees have to type the same information into the CRM and the accounting software.' },
      { title: 'Data silos', description: 'Valuable customer data is locked in tools that don\'t communicate.' }
    ],
    industries: ['SaaS', 'E-commerce', 'B2B Services']
  },
  {
    slug: 'wordpress-development',
    number: 'C08',
    category: 'saas-modernization',
    title: 'WordPress & Custom Plugin Development',
    shortDesc: 'Enterprise-grade WordPress engineering without the bloat.',
    tagline: 'High-performance, secure, and custom WordPress solutions.',
    primaryTopic: 'WordPress Engineering',
    heroHeadline: 'ENTERPRISE WORDPRESS DEVELOPMENT.',
    overview: 'We treat WordPress as a serious engineering platform. We strip out bloated page builders, write custom lightweight themes from scratch, and develop bespoke plugins for advanced functionality, delivering WordPress sites that load in milliseconds.',
    architectureApproach: 'Custom PHP themes utilizing modern build tools (Vite/Tailwind). For maximum performance, we employ Headless WordPress architecture with a Next.js frontend.',
    keyCapabilities: [
      { title: 'Custom Theme Development', description: 'Pixel-perfect, zero-bloat themes tailored to your brand.' },
      { title: 'Advanced Plugin Engineering', description: 'Custom PHP plugins for complex business logic and API integrations.' },
      { title: 'Headless WordPress', description: 'Decoupling the CMS from the frontend for ultimate speed and security.' }
    ],
    technicalStack: [
      { category: 'Core Stack', items: ['PHP 8+', 'WordPress Core', 'MySQL'] },
      { category: 'Frontend', items: ['Next.js (Headless)', 'Tailwind CSS', 'React (Gutenberg)'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Architecture Planning', description: 'Defining Custom Post Types, taxonomies, and ACF fields.' },
      { phase: '02', name: 'Backend Engineering', description: 'Building the plugins and headless GraphQL endpoints.' },
      { phase: '03', name: 'Frontend Implementation', description: 'Developing the blazing fast user interface.' },
      { phase: '04', name: 'Security & Optimization', description: 'Hardening the server and tuning caching layers.' }
    ],
    faqs: [
      { question: 'Why is my current WordPress site so slow?', answer: 'Usually due to page builders (like Elementor), too many plugins, and unoptimized images. We build from scratch to eliminate this overhead.' },
      { question: 'Can you migrate our site without losing SEO?', answer: 'Yes, we meticulously map and redirect all existing URLs to preserve your search rankings during migration.' }
    ],
    relevantProjectSlugs: ['transcend-healthcare'],
    businessProblems: [
      { title: 'Security vulnerabilities', description: 'Your site is constantly targeted due to outdated, unmaintained plugins.' },
      { title: 'Impossible to scale', description: 'Your WooCommerce store crashes during high-traffic sales events.' }
    ],
    industries: ['Publishing', 'E-commerce', 'Corporate', 'Marketing']
  }
];
