import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Layers, Cpu, Globe, BookOpen, ArrowRight, CornerDownLeft, Sun, Mail, Calculator, Check } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import { INSIGHTS_DATA } from '../../data/insights';
import './CommandPalette.css';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleToggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('tekmora-theme', nextTheme);
    showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@tekmorasolution.com');
      showToast('Copied contact@tekmorasolution.com to clipboard');
    } catch {
      // fallback
    }
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        projects: PROJECTS.slice(0, 4),
        services: SERVICES_DATA.slice(0, 3),
        industries: INDUSTRIES_DATA.slice(0, 2),
        insights: INSIGHTS_DATA.slice(0, 3)
      };
    }

    return {
      projects: PROJECTS.filter(
        p => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.technologies.some(t => t.toLowerCase().includes(q))
      ),
      services: SERVICES_DATA.filter(
        s => s.title.toLowerCase().includes(q) || s.overview.toLowerCase().includes(q)
      ),
      industries: INDUSTRIES_DATA.filter(
        i => i.title.toLowerCase().includes(q) || i.overview.toLowerCase().includes(q)
      ),
      insights: INSIGHTS_DATA.filter(
        a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
      )
    };
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };


  const totalResults =
    searchResults.projects.length +
    searchResults.services.length +
    searchResults.industries.length +
    searchResults.insights.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cmd-overlay"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {toastMessage && (
            <div className="feedback-toast font-mono">
              <Check size={16} className="text-green" />
              <span>{toastMessage}</span>
            </div>
          )}

          <motion.div
            className="cmd-modal spotlight-card"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
          >
            {/* Search Input Bar */}
            <div className="cmd-input-bar">
              <Search size={18} className="cmd-search-icon text-orange" />
              <input
                type="text"
                className="cmd-input font-mono"
                placeholder="Search projects, services, industries, tech notes..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoFocus
              />
              {query && (
                <button className="cmd-clear-btn" onClick={() => setQuery('')} aria-label="Clear query">
                  <X size={16} />
                </button>
              )}
              <div className="cmd-esc-badge font-mono">ESC</div>
            </div>

            {/* Quick Action Command Chips (When no query or for instant triggers) */}
            <div className="cmd-quick-actions font-mono">
              <button type="button" className="quick-action-chip" onClick={handleToggleTheme}>
                <Sun size={12} className="text-orange" />
                <span>TOGGLE THEME</span>
              </button>
              <button type="button" className="quick-action-chip" onClick={() => handleSelect('/contact')}>
                <Calculator size={12} className="text-orange" />
                <span>ESTIMATE SCOPE</span>
              </button>
              <button type="button" className="quick-action-chip" onClick={handleCopyEmail}>
                <Mail size={12} className="text-orange" />
                <span>COPY EMAIL</span>
              </button>
            </div>

            {/* Results Body */}
            <div className="cmd-body">
              {totalResults === 0 ? (
                <div className="cmd-empty-state font-mono">
                  <p>NO RESULTS MATCHING "{query.toUpperCase()}"</p>
                  <span>Try searching for 'SAP', 'React Native', 'ERP', or 'Warehouse'.</span>
                </div>
              ) : (
                <div className="cmd-results-list">
                  {/* Projects */}
                  {searchResults.projects.length > 0 && (
                    <div className="cmd-group">
                      <div className="cmd-group-title font-mono">
                        <Layers size={12} className="text-orange" />
                        <span>PROJECTS & SYSTEMS ({searchResults.projects.length})</span>
                      </div>
                      {searchResults.projects.map(p => (
                        <div
                          key={p.slug}
                          className="cmd-item"
                          onClick={() => handleSelect(`/work/${p.slug}`)}
                        >
                          <div className="cmd-item-main">
                            <span className="cmd-item-tag font-mono text-orange">SYS {p.number}</span>
                            <span className="cmd-item-title font-display">{p.title}</span>
                            <span className="cmd-item-sub">{p.tagline}</span>
                          </div>
                          <ArrowRight size={14} className="cmd-item-arrow" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Services */}
                  {searchResults.services.length > 0 && (
                    <div className="cmd-group">
                      <div className="cmd-group-title font-mono">
                        <Cpu size={12} className="text-orange" />
                        <span>CORE SERVICES ({searchResults.services.length})</span>
                      </div>
                      {searchResults.services.map(s => (
                        <div
                          key={s.slug}
                          className="cmd-item"
                          onClick={() => handleSelect(`/services/${s.slug}`)}
                        >
                          <div className="cmd-item-main">
                            <span className="cmd-item-tag font-mono">SRV {s.number}</span>
                            <span className="cmd-item-title font-display">{s.title}</span>
                            <span className="cmd-item-sub">{s.shortDesc}</span>
                          </div>
                          <ArrowRight size={14} className="cmd-item-arrow" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Industries */}
                  {searchResults.industries.length > 0 && (
                    <div className="cmd-group">
                      <div className="cmd-group-title font-mono">
                        <Globe size={12} className="text-orange" />
                        <span>INDUSTRIES ({searchResults.industries.length})</span>
                      </div>
                      {searchResults.industries.map(i => (
                        <div
                          key={i.slug}
                          className="cmd-item"
                          onClick={() => handleSelect(`/industries/${i.slug}`)}
                        >
                          <div className="cmd-item-main">
                            <span className="cmd-item-tag font-mono">IND {i.number}</span>
                            <span className="cmd-item-title font-display">{i.title}</span>
                            <span className="cmd-item-sub">{i.tagline}</span>
                          </div>
                          <ArrowRight size={14} className="cmd-item-arrow" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Insights */}
                  {searchResults.insights.length > 0 && (
                    <div className="cmd-group">
                      <div className="cmd-group-title font-mono">
                        <BookOpen size={12} className="text-orange" />
                        <span>TECHNICAL NOTES & ARTICLES ({searchResults.insights.length})</span>
                      </div>
                      {searchResults.insights.map(a => (
                        <div
                          key={a.slug}
                          className="cmd-item"
                          onClick={() => handleSelect(`/insights/${a.slug}`)}
                        >
                          <div className="cmd-item-main">
                            <span className="cmd-item-tag font-mono">NOTE {a.number}</span>
                            <span className="cmd-item-title font-display">{a.title}</span>
                            <span className="cmd-item-sub">{a.category} • {a.readingTime}</span>
                          </div>
                          <ArrowRight size={14} className="cmd-item-arrow" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Shortcut Bar */}
            <div className="cmd-footer font-mono">
              <div className="cmd-footer-shortcuts">
                <span><CornerDownLeft size={11} /> SELECT</span>
                <span>ESC TO CLOSE</span>
              </div>
              <span className="text-orange">TEKMORA DIRECTORY SEARCH</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
