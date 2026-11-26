import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WifiOff, CheckCircle2, ShieldCheck, Activity, Globe, Server, X, Lock } from 'lucide-react';
import './NetworkStatus.css';

interface EdgeRegion {
  name: string;
  location: string;
  latency: string;
  status: 'optimal' | 'good';
}

export const NetworkStatus: React.FC = () => {
  // Keep the first client render identical to the server render. The actual
  // connection state is synchronized after hydration.
  const [isOnline, setIsOnline] = useState(true);
  const [showReconnected, setShowReconnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reference regions only. Do not present fabricated live latency telemetry.
  const [regions] = useState<EdgeRegion[]>([
    { name: 'US-East', location: 'Candidate region', latency: 'Measured per project', status: 'optimal' },
    { name: 'EU-Central', location: 'Candidate region', latency: 'Measured per project', status: 'optimal' },
    { name: 'AP-South', location: 'Candidate region', latency: 'Measured per project', status: 'optimal' },
    { name: 'AP-Southeast', location: 'Candidate region', latency: 'Measured per project', status: 'optimal' },
    { name: 'US-West', location: 'Candidate region', latency: 'Measured per project', status: 'optimal' },
  ]);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 3000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Top Banner when offline or reconnected */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            key="offline-banner"
            className="network-status-banner network-status-offline"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="status"
            aria-live="polite"
          >
            <WifiOff size={13} />
            <span className="network-indicator-dot" />
            <span>Offline Mode — Cached View</span>
          </motion.div>
        )}

        {isOnline && showReconnected && (
          <motion.div
            key="reconnected-banner"
            className="network-status-banner network-status-online"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 size={13} />
            <span className="network-indicator-dot" />
            <span>Connection Restored</span>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Enterprise SLA & Telemetry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="sla-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="sla-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="sla-modal-title"
            >
              {/* Header */}
              <div className="sla-modal-header">
                <div className="sla-modal-title" id="sla-modal-title">
                  <Activity size={15} className="text-orange" />
                  <span>INFRASTRUCTURE SLA & EDGE TELEMETRY</span>
                </div>
                <button
                  type="button"
                  className="sla-modal-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close telemetry modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="sla-modal-body">
                {/* Global Status Pill */}
                <div className="sla-banner-card">
                  <div className="sla-banner-status">
                    <span className="telemetry-live-dot large" />
                    <div>
                      <div className="sla-status-text">ILLUSTRATIVE OPERATIONS MODEL</div>
                      <div className="sla-status-desc font-mono">Monitoring and release controls are configured per deployment</div>
                    </div>
                  </div>
                  <div className="sla-banner-badge font-mono">CONTRACT-DEFINED TARGETS</div>
                </div>

                {/* Regional Latencies Grid */}
                <div className="sla-section-title font-mono">
                  <Globe size={13} className="text-orange" />
                  <span>REFERENCE REGIONAL DEPLOYMENT OPTIONS</span>
                </div>
                <div className="sla-regions-grid">
                  {regions.map((region) => (
                    <div key={region.name} className="sla-region-card font-mono">
                      <div className="sla-region-info">
                        <div className="sla-region-name">{region.name}</div>
                        <div className="sla-region-loc">{region.location}</div>
                      </div>
                      <div className="sla-region-latency">
                        <span className="latency-val text-green">{region.latency}</span>
                        <span className="latency-dot optimal" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Commitments */}
                <div className="sla-section-title font-mono" style={{ marginTop: 16 }}>
                  <ShieldCheck size={13} className="text-orange" />
                  <span>ENTERPRISE OPERATIONAL CONTROLS</span>
                </div>
                <div className="sla-guarantees-grid font-mono">
                  <div className="sla-guarantee-card">
                    <div className="guarantee-header">
                      <Server size={14} className="text-orange" />
                      <span>HIGH AVAILABILITY</span>
                    </div>
                    <p>Availability targets, failover design, and recovery responsibilities are agreed for the selected hosting architecture.</p>
                  </div>
                  <div className="sla-guarantee-card">
                    <div className="guarantee-header">
                      <Lock size={14} className="text-orange" />
                      <span>ZERO-TRUST SECURITY</span>
                    </div>
                    <p>TLS 1.3 strict transport, role-based access control (RBAC), and sanitization at every layer.</p>
                  </div>
                  <div className="sla-guarantee-card">
                    <div className="guarantee-header">
                      <ShieldCheck size={14} className="text-orange" />
                      <span>CONTROL MAPPING</span>
                    </div>
                    <p>Immutable operational logging, daily automated backup retention, and strict audit trails.</p>
                  </div>
                  <div className="sla-guarantee-card">
                    <div className="guarantee-header">
                      <Activity size={14} className="text-orange" />
                      <span>TRANSACTIONAL ACIDITY</span>
                    </div>
                    <p>Strict database atomicity for accounting, ERP sync, and inventory ledger workflows.</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sla-modal-footer font-mono">
                <span className="sla-footer-note">REFERENCE OPERATIONS VIEW // PROJECT-SPECIFIC CONFIGURATION</span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Telemetry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
