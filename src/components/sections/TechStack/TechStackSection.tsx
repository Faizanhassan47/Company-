import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Database, Cloud } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import './TechStackSection.css';

interface TechPillar {
  title: string;
  categoryNumber: string;
  icon: React.ReactNode;
  technologies: { name: string; role: string }[];
}

const TECH_PILLARS: TechPillar[] = [
  {
    title: 'Frontend',
    categoryNumber: '01',
    icon: <Layout size={18} className="text-orange" />,
    technologies: [
      { name: 'React', role: 'Component Architecture' },
      { name: 'Next.js', role: 'Edge & Server Rendering' },
      { name: 'TypeScript', role: 'Type Safety & Contracts' },
      { name: 'Tailwind CSS', role: 'Design Systems' },
      { name: 'Vite', role: 'Fast Build Tooling' }
    ]
  },
  {
    title: 'Backend',
    categoryNumber: '02',
    icon: <Server size={18} className="text-orange" />,
    technologies: [
      { name: 'Node.js', role: 'High-Concurrency Services' },
      { name: 'Python', role: 'Automation & Processing' },
      { name: 'REST APIs', role: 'Deterministic Endpoints' },
      { name: 'GraphQL', role: 'Flexible Schema Queries' },
      { name: 'Fastify / Express', role: 'Lightweight Microservices' }
    ]
  },
  {
    title: 'Mobile',
    categoryNumber: '03',
    icon: <Smartphone size={18} className="text-orange" />,
    technologies: [
      { name: 'Flutter', role: 'Multi-Platform Native UI' },
      { name: 'React Native', role: 'Cross-Platform Apps' },
      { name: 'SQLite', role: 'Offline Local Storage' },
      { name: 'BLE / Hardware', role: 'Peripheral Device Sync' },
      { name: 'iOS / Android', role: 'Native Build Targets' }
    ]
  },
  {
    title: 'Data & Storage',
    categoryNumber: '04',
    icon: <Database size={18} className="text-orange" />,
    technologies: [
      { name: 'PostgreSQL', role: 'Relational ACID Core' },
      { name: 'Redis', role: 'In-Memory Cache & Queues' },
      { name: 'MongoDB', role: 'Document Datastores' },
      { name: 'Row-Level Security', role: 'Tenant Data Isolation' },
      { name: 'Prisma / Drizzle', role: 'Type-Safe ORM Layers' }
    ]
  },
  {
    title: 'Infrastructure',
    categoryNumber: '05',
    icon: <Cloud size={18} className="text-orange" />,
    technologies: [
      { name: 'AWS Cloud', role: 'EC2, S3, RDS, Lambda' },
      { name: 'Docker', role: 'Containerized Packaging' },
      { name: 'CI/CD Pipelines', role: 'Automated Deployments' },
      { name: 'Cloudflare', role: 'Global Edge & DNS' },
      { name: 'Monitoring', role: 'Uptime & Error Telemetry' }
    ]
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="section tech-clean-section" id="technology">
      <div className="container">
        {/* Section Header */}
        <div className="tech-header-box">
          <div className="section-label-chip font-mono">
            <span className="chip-dot" />
            <span>TECHNOLOGY CAPABILITIES</span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
          >
            <h2 className="tech-title">
              Technologies we build with.<br />
              <span className="text-orange">Battle-tested tools for production scale.</span>
            </h2>
            <p className="tech-lead-text">
              We select modern, maintainable technologies with mature ecosystems and proven reliability for commercial operations.
            </p>
          </motion.div>
        </div>

        {/* 5-Column Full Width Balanced Capability Matrix */}
        <motion.div 
          className="tech-matrix-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {TECH_PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.title}
              className="tech-matrix-column"
              variants={fadeInUp}
            >
              <div className="pillar-top font-mono">
                <div className="pillar-header-row">
                  {pillar.icon}
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
                <span className="pillar-num text-orange">{pillar.categoryNumber}</span>
              </div>

              <div className="pillar-items-stack">
                {pillar.technologies.map((tech) => (
                  <div key={tech.name} className="tech-entry">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-role font-mono">{tech.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
