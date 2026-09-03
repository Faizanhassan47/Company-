import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { CaseStudy } from '../../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {(isOpen && project) && (
        <motion.div
          className="project-modal-backdrop"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="project-modal-window spotlight-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
          >
            {/* Top Header Bar */}
            <div className="project-modal-header font-mono">
              <div className="modal-header-left">
                <span className="project-modal-num text-orange">{project.number}</span>
                <span className="modal-sep">/</span>
                <span className="project-modal-cat">{project.category}</span>
                <span className="modal-sep">/</span>
                <span className="project-modal-yr">{project.year}</span>
              </div>

              <div className="modal-header-actions">
                {onPrev && (
                  <button
                    type="button"
                    className="modal-nav-btn"
                    onClick={onPrev}
                    aria-label="Previous project"
                    title="Previous (Left Arrow)"
                  >
                    <ChevronLeft size={16} />
                  </button>
                )}
                {onNext && (
                  <button
                    type="button"
                    className="modal-nav-btn"
                    onClick={onNext}
                    aria-label="Next project"
                    title="Next (Right Arrow)"
                  >
                    <ChevronRight size={16} />
                  </button>
                )}
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={onClose}
                  aria-label="Close project preview"
                  title="Close (ESC)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Main Body: 2-Column Split */}
            <div className="project-modal-body">
              {/* Left / Top: High-Res Project Screenshot */}
              <div className="modal-visual-pane">
                {project.imageUrl ? (
                  <div className="modal-image-wrapper">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} Interface Screenshot`}
                      className="modal-project-img"
                      loading="eager"
                    />
                    <div className="modal-img-glass-bar font-mono">
                      <span className="modal-img-tag">
                        <ShieldCheck size={12} className="text-orange" />
                        <span>PRODUCTION SYSTEM PREVIEW</span>
                      </span>
                      <span>{project.role}</span>
                    </div>
                  </div>
                ) : (
                  <div className="modal-fallback-visual font-mono">
                    <div className="fallback-badge">SYSTEM ARCHITECTURE // {project.slug.toUpperCase()}</div>
                    <div className="fallback-name font-display">{project.title}</div>
                    <div className="fallback-tech">{project.technologies.join(' • ')}</div>
                  </div>
                )}
              </div>

              {/* Right / Bottom: Project Intel & Architectural Breakdown */}
              <div className="modal-info-pane">
                <h2 className="modal-project-title font-display">{project.title}</h2>
                <p className="modal-project-tagline">{project.tagline}</p>

                {/* Problem & Approach */}
                <div className="modal-context-block">
                  <div className="context-label font-mono">OPERATIONAL PROBLEM & SCOPE:</div>
                  <p className="context-text">{project.clientProblem}</p>
                </div>

                {/* Key Capabilities */}
                <div className="modal-features-list">
                  <div className="context-label font-mono">DELIVERED ARCHITECTURE FEATURES:</div>
                  <div className="modal-feats-grid">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="modal-feat-row">
                        <CheckCircle2 size={14} className="text-orange feat-check" />
                        <div>
                          <strong className="feat-heading">{feat.title}</strong>
                          <p className="feat-sub">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="modal-tech-stack font-mono">
                  <div className="context-label">PRODUCTION TECH STACK:</div>
                  <div className="modal-chips-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="modal-tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="modal-footer-actions font-mono">
                  <Link
                    to={`/work/${project.slug}`}
                    className="btn btn-primary modal-action-btn"
                    onClick={onClose}
                  >
                    <span>Read Full Technical Case Study</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
