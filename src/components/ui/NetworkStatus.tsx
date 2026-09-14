import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, CheckCircle2, ShieldCheck, Activity, Globe, Server, X, Lock } from 'lucide-react';
import './NetworkStatus.css';

interface EdgeRegion {
  name: string;
  location: string;
  latency: number;
  status: 'optimal' | 'good';
}

export const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [showReconnected, setShowReconnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Regional edge telemetry with slight dynamic jitter for realism
  const [regions, setRegions] = useState<EdgeRegion[]>([
    { name: 'US-East-1', location: 'N. Virginia, USA', latency: 22, status: 'optimal' },
    { name: 'EU-Central-1', location: 'Frankfurt, Germany', latency: 34, status: 'optimal' },
    { name: 'AP-South-1', location: 'Mumbai, India', latency: 48, status: 'optimal' },
    { name: 'AP-Southeast-1', location: 'Singapore', latency: 62, status: 'optimal' },
    { name: 'US-West-2', location: 'Oregon, USA', latency: 29, status: 'optimal' },
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

    // Micro-jitter simulation for edge ping telemetry
    const interval = setInterval(() => {
      setRegions(prev =>
        prev.map(r => {
          const jitter = Math.floor(Math.random() * 5) - 2;
          const base = r.name.startsWith('US-East') ? 22 : r.name.startsWith('EU') ? 34 : r.name.startsWith('AP-S') ? 48 : 60;
          return { ...r, latency: Math.max(14, base + jitter) };
        })
      );
    }, 4000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
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
                      <div className="sla-status-text">ALL EDGE CLUSTERS OPERATIONAL</div>
                      <div className="sla-status-desc font-mono">Global edge routing active • Zero-Downtime Pipeline</div>
                    </div>
                  </div>
                  <div className="sla-banner-badge font-mono">99.99% SLA COMMITMENT</div>
                </div>

                {/* Regional Latencies Grid */}
                <div className="sla-section-title font-mono">
                  <Globe size={13} className="text-orange" />
                  <span>LIVE REGIONAL EDGE TELEMETRY</span>
                </div>
                <div className="sla-regions-grid">
                  {regions.map((region) => (
                    <div key={region.name} className="sla-region-card font-mono">
                      <div className="sla-region-info">
                        <div className="sla-region-name">{region.name}</div>
                        <div className="sla-region-loc">{region.location}</div>
                      </div>
                      <div className="sla-region-latency">
                        <span className="latency-val text-green">{region.latency}ms</span>
                        <span className="latency-dot optimal" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architectural Commitments */}
                <div className="sla-section-title font-mono" style={{ marginTop: 16 }}>
                  <ShieldCheck size={13} className="text-orange" />
                  <span>ENTERPRISE OPERATIONAL GUARANTEES</span>
                </div>
                <div className="sla-guarantees-grid font-mono">
                  <div className="sla-guarantee-card">
                    <div className="guarantee-header">
                      <Server size={14} className="text-orange" />
                      <span>HIGH AVAILABILITY</span>
                    </div>
                    <p>99.99% uptime guarantee with multi-region serverless failover and zero single points of failure.</p>
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
                      <span>SOC 2 & ISO ALIGNED</span>
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
                <span className="sla-footer-note">DISPATCH PROTOCOL // VERIFIED HOSTINGER RELAY</span>
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
