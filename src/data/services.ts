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

  // 02: SaaS Development
  {
    slug: 'saas-engineering-modernization',
    number: '02',
    category: 'saas-modernization',
    title: 'SaaS Development',
    shortDesc: 'Cloud-based software products with accounts, permissions, subscriptions, and product operations.',
    tagline: 'Build your SaaS product on a practical foundation.',
    primaryTopic: 'SaaS product development',
    heroHeadline: 'Build your SaaS product on a practical foundation.',
    overview: 'A SaaS product needs more than its core features. User access, account management, subscriptions, and everyday administration all contribute to how the product operates. We develop cloud-based software with the features required to manage users, access, and day-to-day product work.',
    keyCapabilities: [
      {
        title: 'Authentication and permissions',
        description: 'Account access, roles, and permission models that match how different users should work in the product.'
      },
      {
        title: 'Subscription and account handling',
        description: 'Subscription flows, plan changes, and related account operations planned around the product’s commercial model.'
      },
      {
        title: 'Application dashboards',
        description: 'Product surfaces where customers and operators complete everyday tasks and review status.'
      },
      {
        title: 'Administrative tools',
        description: 'Back-office controls for managing users, content, configuration, and operational support.'
      },
      {
        title: 'Integrations and workflows',
        description: 'Connections to payment providers, email services, analytics, and other systems the product depends on.'
      }
    ],
    technicalStack: [
      { category: 'Product surface', items: ['React', 'Next.js', 'TypeScript'] },
      { category: 'Application services', items: ['Node.js', 'REST APIs', 'PostgreSQL'] },
      { category: 'Product operations', items: ['Auth', 'Roles', 'Billing integrations'] },
      { category: 'Delivery', items: ['Cloud hosting', 'CI/CD', 'Monitoring'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Product requirements', description: 'Identify the users, core workflows, and what the first useful release needs to include.' },
      { phase: '02', name: 'Foundation planning', description: 'Define accounts, permissions, data model, and the operational features around the product.' },
      { phase: '03', name: 'Build the release', description: 'Develop the agreed product features with room for review and feedback.' },
      { phase: '04', name: 'Test and prepare launch', description: 'Validate critical paths, account flows, and release readiness.' },
      { phase: '05', name: 'Continue development', description: 'Plan maintenance, improvements, and the next set of product work.' }
    ],
    faqs: [
      {
        question: 'Do we need every SaaS feature in the first release?',
        answer: 'No. An early release should focus on the functionality that matters most to the intended users. Additional features can be planned as requirements become clearer.'
      },
      {
        question: 'Can you work on an existing SaaS product?',
        answer: 'Yes. We can review the current architecture, product gaps, and proposed changes before agreeing an approach.'
      },
      {
        question: 'How do you plan for continued development?',
        answer: 'Documented requirements, maintainable architecture, testing, and clear release processes help create a foundation for future work.'
      }
    ],
    businessProblems: [
      {
        title: 'The idea is clear, but the product foundation is not',
        description: 'You know the core feature users need, but accounts, permissions, and admin tools still need to be planned before a usable release.'
      },
      {
        title: 'An existing product is hard to extend',
        description: 'New requests keep colliding with an architecture or interface that was never designed for ongoing product development.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'citi-books-platform']
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

  // 08: Business Dashboards & Internal Tools
  {
    slug: 'internal-tools-dashboards',
    number: '08',
    category: 'enterprise-cloud',
    title: 'Business Dashboards & Internal Tools',
    shortDesc: 'Custom dashboards and internal tools that replace spreadsheet reporting and fragmented back-office workflows.',
    tagline: 'Dashboards and internal tools built around the decisions your team makes every day.',
    primaryTopic: 'Business dashboard and internal tools development',
    heroHeadline: 'Business dashboards and internal tools that replace spreadsheet chaos.',
    overview:
      'When status lives in exports, shared drives, and chat threads, managers spend time assembling reports instead of acting on them. Tekmora builds custom business dashboards and internal tools that surface the right records, approvals, and metrics in one place—shaped around your roles, data sources, and operating cadence.',
    architectureApproach:
      'Identify the decisions people need to make, the source systems that hold the data, and the actions that should happen in the tool. Build a maintainable console with clear permissions and reporting before adding complexity.',
    keyCapabilities: [
      {
        title: 'Operational dashboards',
        description: 'Views for status, bottlenecks, exceptions, and KPIs without manual report assembly.'
      },
      {
        title: 'Internal admin tools',
        description: 'Back-office consoles for searching records, updating status, and completing day-to-day work.'
      },
      {
        title: 'Approval and triage queues',
        description: 'Structured lists for reviews, requests, and handoffs between roles.'
      },
      {
        title: 'Role-based access',
        description: 'Permissions that control what each role can view and change.'
      },
      {
        title: 'Exports and bulk actions',
        description: 'Practical exports and multi-record actions when teams still need spreadsheets or batch updates.'
      },
      {
        title: 'Multi-source data views',
        description: 'Combine SQL databases, ERP extracts, and APIs into one operational screen when a single system is not enough.'
      }
    ],
    technicalStack: [
      { category: 'Application', items: ['React', 'TypeScript'] },
      { category: 'Data', items: ['PostgreSQL', 'SQL Server', 'REST APIs'] },
      { category: 'Reporting', items: ['Charts', 'Tables', 'Exports'] }
    ],
    developmentProcess: [
      {
        phase: '01',
        name: 'Map decisions and data',
        description: 'Identify who needs which views, where data lives today, and which manual steps waste the most time.'
      },
      {
        phase: '02',
        name: 'Define the first release',
        description: 'Choose the dashboards, queues, and permissions that must work before expanding.'
      },
      {
        phase: '03',
        name: 'Build and review',
        description: 'Develop the console with visible progress and feedback from actual operators.'
      },
      {
        phase: '04',
        name: 'Test with real scenarios',
        description: 'Validate filters, permissions, and reporting against day-to-day cases.'
      },
      {
        phase: '05',
        name: 'Launch and expand',
        description: 'Release the first useful tools, then add modules as reporting and workflow needs become clearer.'
      }
    ],
    faqs: [
      {
        question: 'Should we use a low-code tool or custom dashboards?',
        answer:
          'Low-code tools can work for simple prototypes. Custom dashboards make more sense when you need specific workflows, permissions, performance with your data model, or a tool that matches how your team already operates without per-seat product limits.'
      },
      {
        question: 'Can a dashboard pull from more than one system?',
        answer:
          'Yes. Many projects combine SQL databases, ERP data, and third-party APIs into one operational view. The design starts from the decisions people need to make, then maps the required sources.'
      },
      {
        question: 'What evidence do you have for this kind of work?',
        answer:
          'Case studies such as DOME and related admin/dashboard projects show internal tools, permissions, and operational reporting. Review projects at tekmorasolution.com/work.'
      },
      {
        question: 'How does a project start?',
        answer:
          'Share the reports or workflows that are painful today, the users involved, and the systems that hold the data. We review suitability and discuss scope before a proposal.'
      }
    ],
    businessProblems: [
      {
        title: 'Reporting is assembled by hand',
        description: 'Managers export from multiple tools and stitch status together in spreadsheets every week.'
      },
      {
        title: 'Back-office work is scattered',
        description: 'Approvals, record updates, and triage live in email, chat, and shared files instead of one console.'
      },
      {
        title: 'People cannot see the same truth',
        description: 'Different teams look at different extracts, so decisions are delayed or disputed.'
      }
    ],
    industries: ['Operations', 'Services', 'Commerce', 'Healthcare'],
    relevantProjectSlugs: ['dome-enterprise', 'grabzer-admin', 'leoedge-dashboard', 'sap-b1-production-dashboard'],
    ctaHeadline: 'Discuss a dashboard or internal tools project',
    ctaDesc: 'Tell us which reports or back-office workflows are manual today. We will review whether a focused dashboard or broader internal tool is the better path.'
  },

  // 09: Integrations & Software Engineering
  {
    slug: 'performance-scaling-cloud-devops',
    number: '09',
    category: 'enterprise-cloud',
    title: 'Integrations & Software Engineering',
    shortDesc: 'Connect applications, develop APIs, improve existing systems, and support ongoing releases.',
    tagline: 'Make your existing software work better together.',
    primaryTopic: 'API integration and software engineering',
    heroHeadline: 'Make your existing software work better together.',
    overview: 'Businesses often use multiple tools to handle different tasks. We help connect applications, develop integrations, and improve existing software where manual handoffs or technical limitations are getting in the way.',
    keyCapabilities: [
      {
        title: 'System integrations',
        description: 'Pass information between websites, CRMs, ERPs, and other tools your team already relies on.'
      },
      {
        title: 'API development',
        description: 'Build and maintain APIs that let applications exchange data reliably.'
      },
      {
        title: 'Existing-system improvements',
        description: 'Fix recurring issues, improve workflows, or add functionality to software already in use.'
      },
      {
        title: 'Technical maintenance',
        description: 'Support releases, address defects, and keep systems workable as requirements change.'
      },
      {
        title: 'Technical discovery',
        description: 'Review architecture, available APIs, dependencies, access requirements, and constraints before committing to an approach.'
      }
    ],
    technicalStack: [
      { category: 'Integration', items: ['REST APIs', 'Webhooks', 'Middleware'] },
      { category: 'Application work', items: ['Node.js', 'TypeScript', 'SQL databases'] },
      { category: 'Connected systems', items: ['CRM', 'ERP', 'Third-party services'] },
      { category: 'Delivery', items: ['Staging environments', 'Release support', 'Monitoring'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Technical discovery', description: 'Review the existing architecture, APIs, dependencies, and constraints.' },
      { phase: '02', name: 'Define the approach', description: 'Agree what should be connected, improved, or rebuilt and in what order.' },
      { phase: '03', name: 'Implement the change', description: 'Develop the integration or improvement with review points along the way.' },
      { phase: '04', name: 'Validate and release', description: 'Test the connected workflows and prepare the change for production use.' },
      { phase: '05', name: 'Support what comes next', description: 'Discuss monitoring, maintenance, and later improvements if needed.' }
    ],
    faqs: [
      {
        question: 'Can you work on an existing application?',
        answer: 'Yes. We can review an existing system to understand its architecture, current issues, and proposed changes before determining a suitable approach.'
      },
      {
        question: 'Do all projects require a full rebuild?',
        answer: 'No. Sometimes the right approach is to fix a recurring issue, improve a workflow, or add functionality to a system already in use.'
      },
      {
        question: 'What determines the scope of an integration?',
        answer: 'Available APIs, data ownership, authentication, error handling, and the business workflows that depend on the connection all affect scope.'
      }
    ],
    businessProblems: [
      {
        title: 'Systems do not exchange information cleanly',
        description: 'Teams re-enter the same records across tools because the applications were never connected for the workflow they support.'
      },
      {
        title: 'An existing application needs targeted improvement',
        description: 'A full rebuild is unnecessary, but recurring bugs, missing features, or fragile integrations are slowing daily work.'
      }
    ],
    relevantProjectSlugs: ['warehouse-grn-automation', 'dome-enterprise']
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

  // 12: Web Development
  {
    slug: 'web-application-development',
    number: '12',
    category: 'saas-modernization',
    title: 'Web Development',
    shortDesc: 'Websites, dashboards, portals, and browser-based applications.',
    tagline: 'Web applications designed around real use.',
    primaryTopic: 'Web application development',
    heroHeadline: 'Web applications designed around real use.',
    overview: 'From customer-facing websites to complex browser-based applications, we develop web experiences with attention to usability, functionality, and long-term maintenance. The technical approach depends on whether the product needs to communicate information or help people complete ongoing tasks.',
    keyCapabilities: [
      {
        title: 'Business websites',
        description: 'Sites that communicate what you offer and help visitors take the next step.'
      },
      {
        title: 'Web platforms and portals',
        description: 'Account-based applications where customers, employees, or partners manage information and complete work.'
      },
      {
        title: 'Dashboards and admin tools',
        description: 'Interfaces for reviewing status, managing records, and supporting day-to-day operations.'
      },
      {
        title: 'Responsive application interfaces',
        description: 'Layouts and interactions that remain usable across desktop and mobile browsers.'
      },
      {
        title: 'Connected services',
        description: 'Integration with existing APIs, databases, and third-party tools where the product needs them.'
      }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
      { category: 'Backend & APIs', items: ['Node.js', 'REST APIs'] },
      { category: 'Data', items: ['PostgreSQL', 'SQL Server'] },
      { category: 'Delivery', items: ['Cloud hosting', 'CI/CD'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Clarify the purpose', description: 'Separate website goals from application workflows and identify the users involved.' },
      { phase: '02', name: 'Define scope', description: 'Agree pages, features, data needs, and integration requirements.' },
      { phase: '03', name: 'Design and develop', description: 'Build the agreed interface and functionality with review points along the way.' },
      { phase: '04', name: 'Test and launch', description: 'Check usability, key flows, and release readiness.' },
      { phase: '05', name: 'Maintain and improve', description: 'Support updates and later improvements as needs change.' }
    ],
    faqs: [
      {
        question: 'What’s the difference between a website and a web application?',
        answer: 'A business website communicates information and helps visitors take action. A web application allows users to complete tasks, manage data, and interact with a system over time.'
      },
      {
        question: 'What considerations affect web project scope?',
        answer: 'Accessibility, responsive layouts, performance, account management, data handling, and integration with existing services all influence scope.'
      },
      {
        question: 'Can you improve an existing web application?',
        answer: 'Yes. We can review the current product, identify practical improvements, and plan changes without assuming a full rebuild.'
      }
    ],
    businessProblems: [
      {
        title: 'Customers or staff need a browser-based workspace',
        description: 'Important tasks still depend on email threads, shared folders, or a website that cannot support accounts and ongoing work.'
      },
      {
        title: 'The current web product is difficult to use or maintain',
        description: 'People avoid the tool, or every small change takes longer than it should because the interface and structure grew without a clear plan.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'citi-books-platform']
  },

  // 13: Mobile App Development
  {
    slug: 'mobile-app-development',
    number: '13',
    category: 'enterprise-cloud',
    title: 'Mobile App Development',
    shortDesc: 'Mobile applications for customers, teams, and everyday workflows.',
    tagline: 'Mobile apps that make everyday tasks easier.',
    primaryTopic: 'Mobile app development',
    heroHeadline: 'Mobile apps that make everyday tasks easier.',
    overview: 'We develop mobile applications for businesses that want to reach customers, deliver services, or give teams access to tools while they’re on the move. Before building screens, we focus on what users need to do and which interactions should stay simple.',
    keyCapabilities: [
      {
        title: 'User accounts and profiles',
        description: 'Sign-in, account settings, and role-based access when the product needs them.'
      },
      {
        title: 'Notifications and updates',
        description: 'Timely alerts that help users return to important tasks or status changes.'
      },
      {
        title: 'Dashboards and data entry',
        description: 'Mobile screens for reviewing information and submitting work from the field or on the go.'
      },
      {
        title: 'Scheduling and service workflows',
        description: 'Flows that support appointments, jobs, or recurring mobile tasks.'
      },
      {
        title: 'API-connected functionality',
        description: 'Mobile clients connected to backend services and existing business systems.'
      }
    ],
    technicalStack: [
      { category: 'Mobile', items: ['React Native', 'Expo', 'TypeScript'] },
      { category: 'Device features', items: ['Camera', 'Notifications', 'Local storage'] },
      { category: 'Backend', items: ['Node.js', 'REST APIs'] },
      { category: 'Delivery', items: ['Test builds', 'App store release support'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'User journey discovery', description: 'Understand what users need to do, how often they will use the app, and which actions must feel immediate.' },
      { phase: '02', name: 'Platform planning', description: 'Consider device support, offline needs, security, performance, and update requirements.' },
      { phase: '03', name: 'Design and develop', description: 'Build the agreed screens and functionality with reviewable progress.' },
      { phase: '04', name: 'Device testing', description: 'Validate key flows across the target devices and usage conditions.' },
      { phase: '05', name: 'Release and follow-up', description: 'Prepare store or internal distribution and discuss ongoing updates.' }
    ],
    faqs: [
      {
        question: 'Do I need separate iOS and Android projects?',
        answer: 'Not always. Cross-platform approaches can share much of the product logic when the requirements and device features allow it. The right choice depends on the project.'
      },
      {
        question: 'What should be decided before development starts?',
        answer: 'Device support, offline requirements, security expectations, performance needs, and how updates will be released should be considered early.'
      },
      {
        question: 'Can you work with an existing backend?',
        answer: 'Yes. Mobile apps often connect to existing APIs. We review those interfaces as part of planning.'
      }
    ],
    businessProblems: [
      {
        title: 'Work happens away from a desk',
        description: 'Teams or customers need to complete tasks on a phone, but the current process still depends on paper, chat messages, or a desktop-only system.'
      },
      {
        title: 'The mobile experience is incomplete',
        description: 'An existing product has a website or back office, but the mobile journey users actually need is missing or unreliable.'
      }
    ],
    relevantProjectSlugs: ['matrix-field-service', 'glucotrack-cgm', 'quran-ayat-app']
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

  // 16: Warehouse Management Systems
  {
    slug: 'warehouse-management-systems',
    number: '16',
    category: 'enterprise-cloud',
    title: 'Warehouse Management Software',
    shortDesc: 'Custom warehouse software for receiving, GRN processing, inventory visibility, and dock-to-stock workflows.',
    tagline: 'Warehouse software built around receiving, inventory, and floor operations.',
    primaryTopic: 'Warehouse management software development',
    heroHeadline: 'Warehouse software that reduces manual receiving and inventory work.',
    overview:
      'Many warehouses still rely on paper GRNs, spreadsheets, and re-keying into an ERP. Tekmora builds custom warehouse management software for receiving, purchase-order checks, inventory visibility, labeling, and floor workflows—so dock and stock data stay consistent without inventing a full packaged WMS when you only need the operational pieces that matter.',
    architectureApproach:
      'Start with the dock and floor process: documents, SKUs, exceptions, and where data must land in ERP or inventory systems. Build the first release around receiving and visibility, then expand to put-away, transfers, or labeling as the operation proves the workflow.',
    keyCapabilities: [
      {
        title: 'Receiving and GRN workflows',
        description: 'Structured paths for goods receipt notes, packing slips, and inbound checks instead of paper-only dock processes.'
      },
      {
        title: 'Purchase-order matching',
        description: 'Compare inbound quantities and lines against open POs so mismatches are visible before stock is committed.'
      },
      {
        title: 'Inventory visibility',
        description: 'Shared records for received stock, locations, and status so teams stop reconciling conflicting spreadsheets.'
      },
      {
        title: 'Batch and lot tracking',
        description: 'Capture batch, lot, or expiry details when the operation requires them.'
      },
      {
        title: 'Labels and scanning support',
        description: 'Barcode or label steps that fit dock and floor devices when hardware is part of the process.'
      },
      {
        title: 'ERP and system connections',
        description: 'Push verified receipts and inventory updates into SAP Business One or other systems when integration is required.'
      }
    ],
    technicalStack: [
      { category: 'Application', items: ['React', 'TypeScript', 'Touch-friendly web UI'] },
      { category: 'Backend', items: ['Node.js', 'SQL Server', 'PostgreSQL', 'REST APIs'] },
      { category: 'Operations', items: ['Document parsing', 'Barcode workflows', 'Queue-based processing'] }
    ],
    developmentProcess: [
      {
        phase: '01',
        name: 'Map dock and floor work',
        description: 'Review receiving steps, documents, exceptions, devices, and where data is entered today.'
      },
      {
        phase: '02',
        name: 'Define the first release',
        description: 'Choose the receiving, matching, and visibility features that must work before broader WMS modules.'
      },
      {
        phase: '03',
        name: 'Build and review',
        description: 'Develop the console and integrations with checkpoints against real shipment scenarios.'
      },
      {
        phase: '04',
        name: 'Test with operational cases',
        description: 'Validate mismatches, partial receipts, labeling, and ERP commits with sample dock work.'
      },
      {
        phase: '05',
        name: 'Launch and expand',
        description: 'Release the first useful warehouse workflows, then plan put-away, transfers, or reporting next.'
      }
    ],
    faqs: [
      {
        question: 'Do I need a full commercial WMS?',
        answer:
          'Not always. Many operations get more value from focused warehouse software that covers receiving, GRN processing, and inventory visibility first, then expands only where the floor still has friction.'
      },
      {
        question: 'Can this connect to SAP Business One or another ERP?',
        answer:
          'Yes. Some projects commit verified receipts into an existing ERP. Others keep a warehouse console as the working layer and sync selected fields. The right path depends on your current system and process.'
      },
      {
        question: 'What evidence do you have for warehouse work?',
        answer:
          'The warehouse GRN automation case study covers document-driven receiving and operational workflow software. Review it at tekmorasolution.com/work/warehouse-grn-automation.'
      },
      {
        question: 'How does a project start?',
        answer:
          'Share how receiving works today, which documents and systems are involved, and where re-entry or mismatches happen. We review suitability and discuss scope before a proposal.'
      }
    ],
    businessProblems: [
      {
        title: 'Dock work is still paper-heavy',
        description: 'GRNs and packing slips are typed into spreadsheets or ERP screens after the fact, which slows receiving and introduces errors.'
      },
      {
        title: 'Inventory counts disagree',
        description: 'Floor, purchasing, and finance each maintain different views of what arrived and what is available.'
      },
      {
        title: 'Exceptions are hard to catch',
        description: 'Short shipments, wrong SKUs, and PO mismatches are discovered late because there is no shared receiving workflow.'
      }
    ],
    industries: ['Warehouse', 'Distribution', 'Manufacturing', 'Logistics'],
    relevantProjectSlugs: ['warehouse-grn-automation', 'sap-b1-production-dashboard', 'dome-enterprise'],
    ctaHeadline: 'Discuss a warehouse software project',
    ctaDesc: 'Tell us how receiving and inventory work today. We will review whether focused warehouse software or an ERP-connected workflow is the better path.'
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
    shortDesc: 'Applications built around your processes, users, and business requirements.',
    tagline: 'Custom software built for your business.',
    primaryTopic: 'Custom software development',
    heroHeadline: 'Custom software built for your business.',
    overview: 'Not every business process fits inside an existing tool. We develop custom applications for businesses that need software shaped around their users, workflows, and operational requirements.',
    architectureApproach: 'We start by identifying user roles, required functionality, existing data, integrations, and delivery priorities. Those details become the basis for the agreed development scope.',
    keyCapabilities: [
      { title: 'Internal management systems', description: 'Software that supports the processes your team already runs day to day.' },
      { title: 'Client and employee portals', description: 'Secure spaces where people access information and complete assigned work.' },
      { title: 'Administrative dashboards', description: 'Views for reviewing status, managing records, and supporting decisions.' },
      { title: 'Approval workflows', description: 'Structured paths for requests, reviews, and handoffs between roles.' },
      { title: 'Connected business processes', description: 'Applications that link related work instead of leaving it in disconnected tools.' }
    ],
    technicalStack: [
      { category: 'Frontend', items: ['React', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'SQL databases', 'REST APIs'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Understand the requirements', description: 'Discuss the business problem, users, existing systems, and priorities.' },
      { phase: '02', name: 'Define the scope', description: 'Identify features, technical considerations, milestones, and deliverables.' },
      { phase: '03', name: 'Design and develop', description: 'Build the agreed functionality, review progress, and address feedback.' },
      { phase: '04', name: 'Test and launch', description: 'Check the product against acceptance criteria and prepare it for release.' }
    ],
    faqs: [
      {
        question: 'How much does custom software development cost?',
        answer: 'The cost depends on features, technical complexity, integrations, and delivery requirements. We can discuss your requirements before defining a scope and estimate.'
      },
      {
        question: 'Do I need a complete specification?',
        answer: 'No. A clear description of the problem, intended users, and desired functionality is a useful starting point.'
      },
      {
        question: 'When does custom software make sense?',
        answer: 'When teams rely on spreadsheets, disconnected systems, or repetitive manual tasks, purpose-built software can help bring the work into a more structured process.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'warehouse-grn-automation'],
    businessProblems: [
      { title: 'Off-the-shelf tools don’t fit', description: 'Important work is spread across spreadsheets and disconnected systems.' },
      { title: 'Manual handoffs slow things down', description: 'Teams re-enter the same information or chase approvals outside a shared system.' }
    ],
    industries: ['Operations', 'Services', 'Healthcare', 'Commerce']
  },
  {
    slug: 'erp-operations-software',
    number: 'C01B',
    category: 'enterprise-cloud',
    title: 'ERP & Operations Software',
    shortDesc: 'Custom systems that centralize orders, inventory, approvals, reporting, and day-to-day operational workflows.',
    tagline: 'Operations software built around how your business actually runs.',
    primaryTopic: 'ERP and operations software development',
    heroHeadline: 'ERP and operations software that centralizes real work.',
    overview:
      'Many businesses run on spreadsheets, chat threads, and disconnected tools. Tekmora develops custom ERP-style and operations systems that bring orders, inventory, approvals, permissions, audit trails, and reporting into one practical application shaped around your processes.',
    architectureApproach:
      'Start with the operational decisions people need to make every day. Define roles, workflows, data ownership, and reporting needs before choosing modules or technology. Build a maintainable system that can expand as processes mature.',
    keyCapabilities: [
      {
        title: 'Operational workflows',
        description: 'Structured paths for requests, handoffs, status updates, and approvals across teams.'
      },
      {
        title: 'Inventory and order visibility',
        description: 'Shared records for stock, orders, or operational items so teams stop reconciling conflicting spreadsheets.'
      },
      {
        title: 'Role-based access',
        description: 'Permissions that control what each role can view and change.'
      },
      {
        title: 'Reporting and dashboards',
        description: 'Views that help managers see status, bottlenecks, and exceptions without manual report assembly.'
      },
      {
        title: 'Audit trails',
        description: 'Records of important changes so activity can be reviewed later.'
      },
      {
        title: 'Integrations when needed',
        description: 'Connections to existing ERPs, accounting tools, or external APIs when the system must exchange data.'
      }
    ],
    technicalStack: [
      { category: 'Application', items: ['React', 'TypeScript', 'Node.js'] },
      { category: 'Data', items: ['SQL Server', 'PostgreSQL', 'REST APIs'] },
      { category: 'Operations features', items: ['RBAC', 'Workflows', 'Reporting', 'Audit logging'] }
    ],
    developmentProcess: [
      {
        phase: '01',
        name: 'Map the operational work',
        description: 'Identify users, decisions, current tools, and the bottlenecks that waste the most time.'
      },
      {
        phase: '02',
        name: 'Define the first release',
        description: 'Choose the workflows, roles, and reports that must work in the initial system.'
      },
      {
        phase: '03',
        name: 'Build and review',
        description: 'Develop modules with visible progress and feedback checkpoints.'
      },
      {
        phase: '04',
        name: 'Test with real scenarios',
        description: 'Validate permissions, handoffs, and reporting against actual operating cases.'
      },
      {
        phase: '05',
        name: 'Launch and expand',
        description: 'Release the first useful system, then plan additional modules as requirements become clearer.'
      }
    ],
    faqs: [
      {
        question: 'Do I need a full ERP, or a focused operations system?',
        answer:
          'Not every business needs a large packaged ERP. Many companies get better results from a focused system that covers the workflows causing the most friction first, then expands later.'
      },
      {
        question: 'Can Tekmora work with an existing ERP such as SAP Business One?',
        answer:
          'Yes. Some projects improve or extend an existing ERP with custom portals, dashboards, or integrations. Others replace spreadsheet-based processes with a purpose-built operations application.'
      },
      {
        question: 'What evidence do you have for this kind of work?',
        answer:
          'The DOME case study documents an internal operations product involving workflows, permissions, audit trails, and reporting. Review it at tekmorasolution.com/work/dome-enterprise.'
      },
      {
        question: 'How does a project start?',
        answer:
          'Share the operational problem, the users involved, and any current tools. We review suitability, discuss scope if it looks like a fit, and agree next steps before a proposal.'
      }
    ],
    businessProblems: [
      {
        title: 'Work is scattered across spreadsheets and chat',
        description: 'Orders, stock, approvals, and status updates live in different places, so nobody trusts a single source of truth.'
      },
      {
        title: 'Reporting takes too long',
        description: 'Managers spend hours assembling status from exports instead of reviewing a shared operational view.'
      },
      {
        title: 'Permissions and accountability are unclear',
        description: 'Too many people can change records, or important changes leave no usable history.'
      }
    ],
    industries: ['Operations', 'Distribution', 'Manufacturing', 'Services'],
    relevantProjectSlugs: ['dome-enterprise', 'warehouse-grn-automation', 'sap-b1-production-dashboard'],
    ctaHeadline: 'Discuss an operations software project',
    ctaDesc: 'Tell us which workflows are manual today. We will review whether a focused custom system or an ERP extension is the better path.'
  },
  {
    slug: 'ui-ux-product-design',
    number: 'C05B',
    category: 'saas-modernization',
    title: 'UI/UX Design',
    shortDesc: 'Interfaces designed around what users need to accomplish.',
    tagline: 'Product design that makes complex work easier.',
    primaryTopic: 'UI/UX design services',
    heroHeadline: 'Product design that makes complex work easier.',
    overview: 'Clear interfaces begin with an understanding of what users are trying to accomplish. We design application experiences that connect business requirements with usable screens and workflows.',
    keyCapabilities: [
      { title: 'User flows', description: 'Map the tasks people need to complete and the steps involved.' },
      { title: 'Wireframes', description: 'Structure screens and information before visual polish.' },
      { title: 'Interface design', description: 'Design application screens that support real work.' },
      { title: 'Interactive prototypes', description: 'Make interactions reviewable before full development.' },
      { title: 'Development-ready specs', description: 'Clarify expected behavior enough for build, review, and testing.' }
    ],
    technicalStack: [
      { category: 'Design', items: ['Figma', 'User flows', 'Prototypes'] },
      { category: 'Handoff', items: ['Interface specs', 'Component notes', 'Review checkpoints'] }
    ],
    developmentProcess: [
      { phase: '01', name: 'Understand the work', description: 'Examine the tasks users need to complete and the information they require.' },
      { phase: '02', name: 'Structure the experience', description: 'Define flows, screen structure, and key interactions.' },
      { phase: '03', name: 'Design the interface', description: 'Produce screen designs and prototypes for review.' },
      { phase: '04', name: 'Prepare for development', description: 'Clarify behavior, states, and handoff details for engineering.' }
    ],
    faqs: [
      {
        question: 'What deliverables can a design engagement include?',
        answer: 'Depending on the engagement, these may include user flows, wireframes, screen designs, interactive prototypes, and interface specifications.'
      },
      {
        question: 'Do you design before development starts?',
        answer: 'Design begins before the interface. We examine tasks and information needs first, then shape screens around that understanding.'
      },
      {
        question: 'Can design work support an existing product?',
        answer: 'Yes. Design can improve an existing application’s workflows and screens as well as shape a new product.'
      }
    ],
    businessProblems: [
      {
        title: 'Users get stuck in the product',
        description: 'The business rules exist, but screens and flows make everyday tasks slower or more confusing than they should be.'
      },
      {
        title: 'Development needs clearer interface direction',
        description: 'Engineering is ready to build, but user flows, states, and expected behavior are still too ambiguous to implement confidently.'
      }
    ],
    relevantProjectSlugs: ['dome-enterprise', 'citi-books-platform', 'glucotrack-cgm']
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
