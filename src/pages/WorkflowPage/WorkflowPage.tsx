import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Reveal } from '../../components/studio/StudioMotion';
import './WorkflowPage.css';

const STAGES = [
  {
    phase: '01',
    title: 'Discovery',
    outcome: 'Shared understanding',
    detail:
      'We review the business problem, who uses the system, current tools, constraints, and what a useful first release should look like. No build starts until that picture is clear.',
    outputs: ['Problem brief', 'Users & workflows', 'Constraints']
  },
  {
    phase: '02',
    title: 'Scope',
    outcome: 'Agreed plan',
    detail:
      'Features, integrations, milestones, and decision ownership are written down before development expands. If priorities change later, we update scope explicitly—not by silent drift.',
    outputs: ['Scope outline', 'Milestones', 'Ownership']
  },
  {
    phase: '03',
    title: 'Build',
    outcome: 'Working increments',
    detail:
      'Development happens in visible pieces tied to the agreed requirements. You see progress against the plan, not a black box until the end.',
    outputs: ['Incremental releases', 'Technical notes', 'Open decisions']
  },
  {
    phase: '04',
    title: 'Test',
    outcome: 'Validated workflows',
    detail:
      'We check permissions, edge cases, and integrations against real operating scenarios. Gaps found here return to scope or build with a clear update.',
    outputs: ['Scenario checks', 'Issue list', 'Sign-off path']
  },
  {
    phase: '05',
    title: 'Handover',
    outcome: 'Owned release',
    detail:
      'You receive the working system, documentation, and knowledge transfer. Source code and agreed deliverables are yours. Support or a next phase can be discussed after launch.',
    outputs: ['Production release', 'Documentation', 'Source ownership']
  }
] as const;

const AGREEMENTS = [
  {
    title: 'Source code ownership',
    text: 'Project code and agreed deliverables are handed over. Tekmora does not lock the product behind an opaque black box.'
  },
  {
    title: 'Explicit change control',
    text: 'When priorities shift, we revisit scope together so timeline and effort stay honest.'
  },
  {
    title: 'Support after launch',
    text: 'After release we can discuss maintenance, small fixes, documentation follow-up, or further development.'
  },
  {
    title: 'Direct communication',
    text: 'Updates cover what is done, what is blocked, and what needs a decision. Inquiries get a reply within one business day when possible.'
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
        <div className="container workflow-hero-inner">
          <Reveal>
            <p className="studio-kicker">How we work</p>
            <h1>From first conversation to a working release.</h1>
            <p className="studio-lead">
              Five stages. Clear ownership. No invented process theater—just the path Tekmora uses to move from problem to production.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="workflow-process" aria-label="Delivery stages">
        <div className="container">
          <ol className="workflow-timeline">
            {STAGES.map((stage, index) => (
              <li key={stage.phase} className="workflow-stage">
                <div className="workflow-stage-rail" aria-hidden="true">
                  <span className="workflow-stage-dot" />
                  {index < STAGES.length - 1 && <span className="workflow-stage-line" />}
                </div>
                <Reveal className="workflow-stage-body" delay={index * 0.04}>
                  <div className="workflow-stage-meta">
                    <span className="workflow-stage-phase">{stage.phase}</span>
                    <span className="workflow-stage-outcome">{stage.outcome}</span>
                  </div>
                  <h2>{stage.title}</h2>
                  <p>{stage.detail}</p>
                  <ul className="workflow-stage-outputs">
                    {stage.outputs.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="workflow-agreements">
        <div className="container">
          <Reveal className="workflow-agreements-head">
            <p className="studio-kicker">Working agreements</p>
            <h2>What stays true across every engagement</h2>
          </Reveal>
          <dl className="workflow-agreement-list">
            {AGREEMENTS.map(item => (
              <div key={item.title} className="workflow-agreement">
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="workflow-close">
        <div className="container workflow-close-inner">
          <Reveal>
            <h2>Tell us what you’re planning.</h2>
            <p>
              Share the problem, the users, and any systems involved. We’ll review fit and discuss next steps before a proposal.
            </p>
            <div className="workflow-actions">
              <Link to="/contact?type=Not%20sure%20yet&ref=workflow" className="studio-btn">
                Discuss your project <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="studio-btn-ghost">
                View case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default WorkflowPage;
