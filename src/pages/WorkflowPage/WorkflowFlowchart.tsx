import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MessageSquare,
  Search,
  ClipboardList,
  Code2,
  FlaskConical,
  Rocket,
  Handshake,
  RefreshCw
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOW = [
  {
    id: 'thought',
    label: '01',
    title: 'Thought',
    text: 'You share the problem, users, and constraints.',
    icon: MessageSquare
  },
  {
    id: 'discovery',
    label: '02',
    title: 'Discovery',
    text: 'We map workflows, systems, and what “done” means.',
    icon: Search
  },
  {
    id: 'scope',
    label: '03',
    title: 'Scope',
    text: 'Features, milestones, and ownership are agreed.',
    icon: ClipboardList
  },
  {
    id: 'build',
    label: '04',
    title: 'Build',
    text: 'Visible increments tied to the agreed requirements.',
    icon: Code2
  },
  {
    id: 'test',
    label: '05',
    title: 'Test',
    text: 'Real scenarios, permissions, and integrations checked.',
    icon: FlaskConical
  },
  {
    id: 'launch',
    label: '06',
    title: 'Launch',
    text: 'Release the first useful system into production.',
    icon: Rocket
  },
  {
    id: 'handover',
    label: '07',
    title: 'Handover',
    text: 'Code ownership, docs, and optional ongoing support.',
    icon: Handshake
  }
] as const;

export const WorkflowFlowchart: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div className="wf-chart" aria-label="Tekmora delivery workflow from first thought to handover">
      <div className="wf-chart-track">
        {FLOW.map((step, index) => {
          const Icon = step.icon;
          const delay = reduce ? 0 : index * 0.12;

          return (
            <React.Fragment key={step.id}>
              <motion.article
                className={`wf-node wf-node--${step.id}`}
                initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay, ease: EASE }}
              >
                <div className="wf-node-icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <span className="wf-node-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {!reduce && <span className="wf-node-pulse" aria-hidden="true" />}
              </motion.article>

              {index < FLOW.length - 1 && (
                <motion.div
                  className="wf-connector"
                  aria-hidden="true"
                  initial={reduce ? false : { opacity: 0, scaleY: 0.35 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: delay + 0.08, ease: EASE }}
                >
                  <span className="wf-connector-line" />
                  {!reduce && <span className="wf-connector-flow" />}
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <motion.div
        className="wf-loop"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: reduce ? 0 : 0.85, ease: EASE }}
      >
        <div className="wf-loop-badge">
          <RefreshCw size={16} aria-hidden="true" />
          <strong>Feedback loop</strong>
        </div>
        <p>
          If requirements change or tests reveal gaps, work returns to Scope or Build with an explicit update—no silent scope drift.
        </p>
        <div className="wf-loop-path" aria-hidden="true">
          <span>Test</span>
          <span className="wf-loop-arrow" />
          <span>Scope / Build</span>
          <span className="wf-loop-arrow" />
          <span>Test again</span>
        </div>
      </motion.div>
    </div>
  );
};
