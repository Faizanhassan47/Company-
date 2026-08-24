export interface Principle {
  number: string;
  title: string;
  statement: string;
  elaboration: string;
  calibrationPoint: string;
}

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Understand Before Building',
    statement: 'We begin with the workflow, users and business problem—not a predetermined technology.',
    elaboration: 'Most software fails not because of bad code, but because of misunderstood operations. We take the time to map your actual business workflows, interview end users, and understand where the friction lives before writing a single line of architecture.',
    calibrationPoint: 'Workflow Discovery & Root Cause Analysis'
  },
  {
    number: '02',
    title: 'Structure the Complicated',
    statement: 'We turn permissions, integrations, data and operational rules into clear systems.',
    elaboration: 'Real business operations are full of edge cases, multi-level approvals, legacy data mismatches, and compliance rules. We treat complexity with structural discipline—normalizing schemas, establishing clean API boundaries, and maintaining strict type safety.',
    calibrationPoint: 'Architectural Modeling & Strict Type Contracts'
  },
  {
    number: '03',
    title: 'Build for Real Use',
    statement: 'Products should work during ordinary business days, not only inside polished presentations.',
    elaboration: 'A system must thrive under spotty network connections, high transaction volumes, urgent shift handovers, and real human error. We engineer offline resilience, fast error recovery, and ergonomic ergonomics into every view.',
    calibrationPoint: 'Stress Testing & Real-World Ergonomics'
  },
  {
    number: '04',
    title: 'Improve After Launch',
    statement: 'Shipping is part of the process. We continue learning from how the product is actually used.',
    elaboration: 'Deployment is the beginning of real operational feedback. We monitor telemetry, track bottlenecks, listen to user frustrations, and iteratively refine the software to keep it reliable as the business expands.',
    calibrationPoint: 'Telemetry, Telemetry Refinement & Evolution'
  }
];
