import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, X } from 'lucide-react';
import './KeyboardShortcutsModal.css';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const navigate = useNavigate();
  const lastKeyRef = useRef<string | null>(null);
  const keyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Global keydown listeners for shortcuts and opening the HUD
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      const isInput = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.getAttribute('contenteditable') === 'true';

      if (isInput) return;

      // Close modal on Escape
      if (e.key === 'Escape' && isOpen) {
        onClose();
        return;
      }

      // Open HUD on '?' (Shift + /)
      if (e.key === '?' && !isOpen) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-shortcuts-hud'));
        return;
      }

      // Multi-key sequences: 'g' then 'h', 'g' then 'w', 'g' then 'c'
      if (e.key.toLowerCase() === 'g' && !e.metaKey && !e.ctrlKey) {
        lastKeyRef.current = 'g';
        if (keyTimerRef.current) clearTimeout(keyTimerRef.current);
        keyTimerRef.current = setTimeout(() => {
          lastKeyRef.current = null;
        }, 1200);
        return;
      }

      if (lastKeyRef.current === 'g') {
        const nextKey = e.key.toLowerCase();
        lastKeyRef.current = null;
        if (nextKey === 'h') {
          e.preventDefault();
          if (isOpen) onClose();
          navigate('/');
        } else if (nextKey === 'w') {
          e.preventDefault();
          if (isOpen) onClose();
          navigate('/work');
        } else if (nextKey === 'c') {
          e.preventDefault();
          if (isOpen) onClose();
          navigate('/contact');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (keyTimerRef.current) clearTimeout(keyTimerRef.current);
    };
  }, [isOpen, navigate, onClose]);

  const shortcuts = [
    { desc: 'Open Command Palette / Search', keys: ['⌘ / Ctrl', 'K'], action: onOpenSearch },
    { desc: 'Go to Home', keys: ['G', 'H'], action: () => { onClose(); navigate('/'); } },
    { desc: 'Go to Work / Portfolio', keys: ['G', 'W'], action: () => { onClose(); navigate('/work'); } },
    { desc: 'Go to Contact', keys: ['G', 'C'], action: () => { onClose(); navigate('/contact'); } },
    { desc: 'Open Shortcuts HUD', keys: ['?'] },
    { desc: 'Dismiss active view / modal', keys: ['ESC'], action: onClose },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="shortcuts-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="shortcuts-modal"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-modal-title"
          >
            <div className="shortcuts-header">
              <div className="shortcuts-title" id="shortcuts-modal-title">
                <Command size={14} className="text-orange" />
                <span>KEYBOARD SHORTCUTS</span>
              </div>
              <button
                type="button"
                className="shortcuts-close-btn"
                onClick={onClose}
                aria-label="Close keyboard shortcuts"
              >
                <X size={16} />
              </button>
            </div>

            <div className="shortcuts-list">
              {shortcuts.map((sc, i) => (
                <div key={i} className="shortcut-row">
                  <span className="shortcut-desc">{sc.desc}</span>
                  <div className="shortcut-keys">
                    {sc.keys.map((k, ki) => (
                      <React.Fragment key={ki}>
                        <kbd className="shortcut-key">{k}</kbd>
                        {ki < sc.keys.length - 1 && sc.keys.length > 1 && sc.desc.includes('then') ? (
                          <span style={{ opacity: 0.4, margin: '0 2px' }}>+</span>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="shortcuts-footer">
              PRESS <kbd className="shortcut-key">ESC</kbd> TO CLOSE OR <kbd className="shortcut-key">?</kbd> ANYTIME TO TOGGLE
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
