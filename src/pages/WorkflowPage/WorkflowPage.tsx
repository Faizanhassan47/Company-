import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Reveal } from '../../components/studio/StudioMotion';
import { WorkflowFlowchart } from './WorkflowFlowchart';
import './WorkflowPage.css';

const STEPS = [
  {
    title: 'Discovery',
    text: 'Review the business problem, users, current tools, constraints, and what “done” should mean for the first release.'
  },
  {
    title: 'Scope',
    text: 'Agree features, integrations, milestones, and ownership of decisions before build work expands.'
  },
  {
    title: 'Build',
    text: 'Develop in visible increments, share progress, and keep technical decisions tied to the agreed requirements.'
  },
  {
    title: 'Test',
    text: 'Validate workflows, permissions, edge cases, and integrations against real operating scenarios.'
  },
  {
    title: 'Handover and support',
    text: 'Deliver the working system with documentation, knowledge transfer, and a clear path for fixes or next-phase work.'
  }
] as const;

const GUARANTEES = [
  {
    title: 'You own the source code',
    text: 'Project code and agreed deliverables are handed over for your ownership. Tekmora does not lock the product behind an opaque black box.'
  },
  {
    title: 'Changing requirements stay explicit',
    text: 'When priorities shift, we revisit scope together so timeline and effort stay honest instead of drifting silently.'
  },
  {
    title: 'Support after launch',
    text: 'After release we can discuss maintenance, small fixes, documentation follow-up, or a next development phase.'
  },
  {
    title: 'Clear communication',
    text: 'Expect structured updates on what is done, what is blocked, and what needs a decision. Inquiries get a reply within one business day when possible.'
  }
] as const;

export const WorkflowPage: React.FC = () => {
  return (
    <main className="workflow-page" id="main-content">
      <SEOHead
        title="Workflow — How Tekmora Works"
        description="How Tekmora Solutions runs software projects: discovery, scope, build, test, handover, source-code ownership, and support after launch."
        canonical="https://www.tekmorasolution.com/workflow"
      />

      <section className="workflow-hero">
        <div className="container">
          <Reveal>
            <p className="studio-kicker">Workflow</p>
            <h1>A deliberate path from discovery to handover.</h1>
            <p className="studio-lead">
              Clear steps reduce delivery risk. This is how Tekmora moves from the first conversation to a working release—without hiding ownership or next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="workflow-flowchart-section">
        <div className="container">
          <Reveal className="workflow-section-head">
            <p className="studio-kicker">Delivery flowchart</p>
            <h2>From first thought to final handover</h2>
            <p className="workflow-section-lead">
              An animated view of the full process—from the initial idea through discovery, build, test, launch, and ownership transfer.
            </p>
          </Reveal>
          <WorkflowFlowchart />
        </div>
      </section>

      <section className="workflow-steps">
        <div className="container">
          <Reveal className="workflow-section-head">
            <p className="studio-kicker">Engagement detail</p>
            <h2>What happens in each stage</h2>
          </Reveal>
          <ol className="workflow-step-list">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="workflow-guarantees">
        <div className="container">
          <Reveal className="workflow-section-head">
            <p className="studio-kicker">Working agreements</p>
            <h2>Ownership, changes, and support</h2>
          </Reveal>
          <div className="workflow-card-grid">
            {GUARANTEES.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-close">
        <div className="container workflow-close-panel">
          <Reveal>
            <p className="studio-kicker">Next step</p>
            <h2>Tell us what you’re planning.</h2>
            <p>
              Share the problem, the users, and any systems involved. We’ll review fit and discuss next steps before a proposal.
            </p>
            <div className="workflow-actions">
              <Link to="/contact?type=Not%20sure%20yet&ref=workflow" className="studio-btn">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="studio-btn-ghost">
                View Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default WorkflowPage;
