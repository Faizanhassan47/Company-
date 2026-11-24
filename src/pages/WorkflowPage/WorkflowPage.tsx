import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SEOHead } from '../../components/seo/SEOHead';
import { Reveal, MOTION_EASE } from '../../components/studio/StudioMotion';
import './WorkflowPage.css';

const STAGES = [
  {
    id: 'discovery',
    phase: '01',
    title: 'Discovery',
    outcome: 'Shared understanding',
    detail:
      'We review the business problem, who uses the system, current tools, constraints, and what a useful first release should look like. No build starts until that picture is clear.',
    outputs: ['Problem brief', 'Users & workflows', 'Constraints'],
    hoverHint: 'Clarify before you commit'
  },
  {
    id: 'scope',
    phase: '02',
    title: 'Scope',
    outcome: 'Agreed plan',
    detail:
      'Features, integrations, milestones, and decision ownership are written down before development expands. If priorities change later, we update scope explicitly—not by silent drift.',
    outputs: ['Scope outline', 'Milestones', 'Ownership'],
    hoverHint: 'Boundaries stay written down'
  },
  {
    id: 'build',
    phase: '03',
    title: 'Build',
    outcome: 'Working increments',
    detail:
      'Development happens in visible pieces tied to the agreed requirements. You see progress against the plan, not a black box until the end.',
    outputs: ['Incremental releases', 'Technical notes', 'Open decisions'],
    hoverHint: 'Progress you can inspect'
  },
  {
    id: 'test',
    phase: '04',
    title: 'Test',
    outcome: 'Validated workflows',
    detail:
      'We check permissions, edge cases, and integrations against real operating scenarios. Gaps found here return to scope or build with a clear update.',
    outputs: ['Scenario checks', 'Issue list', 'Sign-off path'],
    hoverHint: 'Real scenarios, not checklists only'
  },
  {
    id: 'handover',
    phase: '05',
    title: 'Handover',
    outcome: 'Owned release',
    detail:
      'You receive the working system, documentation, and knowledge transfer. Source code and agreed deliverables are yours. Support or a next phase can be discussed after launch.',
    outputs: ['Production release', 'Documentation', 'Source ownership'],
    hoverHint: 'You leave with the product'
  }
] as const;

type StageId = (typeof STAGES)[number]['id'];
const STAGE_IDS = STAGES.map(stage => stage.id) as StageId[];

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

function useActiveStage(ids: readonly StageId[]) {
  const [active, setActive] = useState<StageId>(ids[0]);

  useEffect(() => {
    const nodes = ids
      .map(id => document.getElementById(`workflow-stage-${id}`))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const ratios = new Map<StageId, number>();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id.replace('workflow-stage-', '') as StageId;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let best: StageId = ids[0];
        let bestRatio = -1;
        ids.forEach(id => {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (bestRatio > 0) setActive(best);
      },
      { threshold: [0.15, 0.35, 0.55, 0.75], rootMargin: '-18% 0px -42% 0px' }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const StageCard: React.FC<{
  stage: (typeof STAGES)[number];
  index: number;
  isLast: boolean;
  isActive: boolean;
}> = ({ stage, index, isLast, isActive }) => {
  return (
    <motion.li
      id={`workflow-stage-${stage.id}`}
      className={`workflow-stage is-${stage.id}${isActive ? ' is-active' : ''}`}
      data-stage={stage.id}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay: index * 0.04, ease: MOTION_EASE }}
    >
      <div className="workflow-stage-rail" aria-hidden="true">
        <motion.span
          className="workflow-stage-dot"
          animate={isActive ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        />
        {!isLast ? <span className="workflow-stage-line" /> : null}
      </div>

      <motion.article
        className="workflow-stage-panel"
        whileHover="hover"
        initial="rest"
        animate={isActive ? 'active' : 'rest'}
      >
        <motion.div
          className="workflow-stage-wash"
          variants={{
            rest: { opacity: 0 },
            active: { opacity: 0.55 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />

        <div className="workflow-stage-meta">
          <span className="workflow-stage-phase">{stage.phase}</span>
          <span className="workflow-stage-outcome">{stage.outcome}</span>
        </div>

        <div className="workflow-stage-title-row">
          <h2>{stage.title}</h2>
          <motion.span
            className="workflow-stage-hint"
            variants={{
              rest: { opacity: 0, x: -8 },
              active: { opacity: 0.7, x: 0 },
              hover: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {stage.hoverHint}
          </motion.span>
        </div>

        <p>{stage.detail}</p>

        <ul className="workflow-stage-outputs">
          {stage.outputs.map((item, outputIndex) => (
            <motion.li
              key={item}
              variants={{
                rest: { y: 0, borderColor: 'rgba(255,255,255,0.1)' },
                active: { y: 0, borderColor: 'rgba(255,77,28,0.28)' },
                hover: {
                  y: -3,
                  borderColor: 'rgba(255,77,28,0.55)',
                  transition: { delay: outputIndex * 0.04 }
                }
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="workflow-stage-accent"
          variants={{
            rest: { scaleX: 0 },
            active: { scaleX: 0.35 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.4, ease: MOTION_EASE }}
          aria-hidden="true"
        />
      </motion.article>
    </motion.li>
  );
};

export const WorkflowPage: React.FC = () => {
  const activeStage = useActiveStage(STAGE_IDS);
  const activeIndex = Math.max(0, STAGES.findIndex(stage => stage.id === activeStage));

  const scrollToStage = useCallback((id: StageId) => {
    const node = document.getElementById(`workflow-stage-${id}`);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

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

          <Reveal delay={0.12} className="workflow-hero-strip">
            {STAGES.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                className={`workflow-hero-chip${activeStage === stage.id ? ' is-active' : ''}`}
                onClick={() => scrollToStage(stage.id)}
              >
                <span>{stage.phase}</span>
                {stage.title}
                {index < STAGES.length - 1 ? <i aria-hidden="true" /> : null}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="workflow-process" aria-label="Delivery stages">
        <div className="container workflow-process-layout">
          <aside className="workflow-nav" aria-label="Stage navigation">
            <p className="workflow-nav-label">Stages</p>
            <div className="workflow-nav-track" aria-hidden="true">
              <motion.span
                className="workflow-nav-progress"
                animate={{ height: `${((activeIndex + 1) / STAGES.length) * 100}%` }}
                transition={{ duration: 0.45, ease: MOTION_EASE }}
              />
            </div>
            <ol className="workflow-nav-list">
              {STAGES.map(stage => (
                <li key={stage.id}>
                  <button
                    type="button"
                    className={`workflow-nav-item${activeStage === stage.id ? ' is-active' : ''}`}
                    onClick={() => scrollToStage(stage.id)}
                    aria-current={activeStage === stage.id ? 'step' : undefined}
                  >
                    <span>{stage.phase}</span>
                    <strong>{stage.title}</strong>
                    <em>{stage.outcome}</em>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <ol className="workflow-timeline">
            {STAGES.map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
                isLast={index === STAGES.length - 1}
                isActive={activeStage === stage.id}
              />
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
          <ul className="workflow-agreement-list">
            {AGREEMENTS.map((item, index) => (
              <motion.li
                key={item.title}
                className="workflow-agreement"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: MOTION_EASE }}
                whileHover={{ y: -4 }}
              >
                <span className="workflow-agreement-index">{String(index + 1).padStart(2, '0')}</span>
                <p className="workflow-agreement-title">{item.title}</p>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="workflow-close">
        <div className="container">
          <Reveal className="workflow-close-panel">
            <p className="studio-kicker">Next step</p>
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
