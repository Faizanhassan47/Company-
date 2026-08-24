export interface ProcessStage {
  step: string;
  name: string;
  action: string;
  description: string;
  artifacts: string[];
  keyQuestion: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'UNDERSTAND',
    action: 'Understand the business problem and users.',
    description: 'We dig deep into operational realities, observe real work habits, identify edge-case bottlenecks, and clarify what genuine success looks like before choosing solutions.',
    artifacts: ['Workflow Diagrams', 'Problem Statement Matrix', 'User Role Personas'],
    keyQuestion: 'What manual friction or operational error is costing the business the most time?'
  },
  {
    step: '02',
    name: 'STRUCTURE',
    action: 'Shape the technical system and product direction.',
    description: 'We architect data models, design UI state flows, establish security authorization tiers, and map third-party integration pipelines with strict structural clarity.',
    artifacts: ['Database Schemas', 'API Contracts', 'High-Fidelity Wireframes'],
    keyQuestion: 'How will data flow between systems without creating single points of failure?'
  },
  {
    step: '03',
    name: 'BUILD',
    action: 'Build the interface, backend and integrations.',
    description: 'We write clean, modular, and type-safe code across frontend, mobile clients, middleware, and database layers using verified battle-tested frameworks.',
    artifacts: ['Production Codebase', 'Reusable Component Library', 'Automated Unit Checks'],
    keyQuestion: 'Is the code maintainable, documented, and resilient to sudden network drops?'
  },
  {
    step: '04',
    name: 'TEST',
    action: 'Test the complete experience in real conditions.',
    description: 'We validate the system under real operational stress—testing spotty internet connections, heavy data loads, conflicting updates, and multi-user concurrency.',
    artifacts: ['Concurrency Test Reports', 'Edge Case Validations', 'Security Audit'],
    keyQuestion: 'How does the system behave when 20 users submit records simultaneously during peak hours?'
  },
  {
    step: '05',
    name: 'IMPROVE',
    action: 'Improve the product using feedback and evidence.',
    description: 'We monitor production telemetry, observe live operator usage, address user feedback promptly, and evolve the platform alongside business growth.',
    artifacts: ['Operational Telemetry', 'User Feedback Backlog', 'Iterative Release Plan'],
    keyQuestion: 'What small adjustments will make the software feel even faster and simpler for daily users?'
  }
];
