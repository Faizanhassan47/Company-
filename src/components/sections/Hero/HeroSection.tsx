import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Copy, Check, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleText } from '../../ui/ScrambleText';
import { TrustMarquee } from '../../ui/TrustMarquee';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../../utils/animations';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const TECHNICAL_CONTRACTS: Record<string, string> = {
  warehouse: `// Warehouse Inventory & Dispatch Contract
export interface WarehouseTransaction {
  id: string;
  stationId: 'DOCK-04' | 'PACK-02' | 'STORAGE-A';
  operatorId: string;
  grnNumber: string;
  items: Array<{
    sku: string;
    barcode: string;
    scannedQuantity: number;
    targetBin: string;
    verifiedAt: string;
  }>;
  syncState: 'LOCAL_SQLITE_COMMITTED' | 'SAP_B1_SYNCED';
  checksum: string;
}`,
  sapSync: `// SAP Business One Service Layer Safe Handshake
export async function syncGRNToSAP(tx: WarehouseTransaction): Promise<SyncResult> {
  const session = await sapClient.getAuthenticatedSession();
  const payload = {
    DocType: 'dDocument_Items',
    CardCode: tx.supplierCode,
    DocDate: new Date().toISOString(),
    DocumentLines: tx.items.map(item => ({
      ItemCode: item.sku,
      Quantity: item.scannedQuantity,
      WarehouseCode: tx.targetWarehouse
    }))
  };

  return await sapClient.post('/PurchaseDeliveryNotes', payload, {
    headers: { 'X-Idempotency-Key': tx.checksum }
  });
}`,
  fieldMobile: `// Offline-First Mobile Local Queue Schema
export const MobileSyncQueueSchema = {
  name: 'sync_queue',
  primaryKey: 'id',
  properties: {
    id: 'string',
    endpoint: 'string',
    payload: 'string', // Encrypted JSON
    retryCount: { type: 'int', default: 0 },
    createdAt: 'date',
    status: 'string' // 'PENDING' | 'IN_FLIGHT' | 'COMMITTED'
  }
};`
};

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'warehouse' | 'sapSync' | 'fieldMobile'>('warehouse');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TECHNICAL_CONTRACTS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(() => {
    // Parallax the technical blueprint box so it moves up slightly faster
    gsap.to('.technical-blueprint-box', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
      y: -100,
      ease: 'none',
    });
  }, []);

  return (
    <section className="hero-section" id="hero" style={{ position: 'relative' }}>
      <motion.div 
        className="container hero-container"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Top Status Bar */}
        <motion.div className="hero-status-row font-mono" variants={fadeInUp}>
          <div className="hero-status-tag">
            <span className="status-indicator-dot" />
            <span>{t('hero.status')}</span>
          </div>
          <div className="hero-status-reach">{t('hero.reach')}</div>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="hero-grid">
          {/* Left: Editorial Positioning */}
          <motion.div className="hero-editorial-col" variants={fadeInLeft}>
            <h1 className="hero-main-title font-display">
              <ScrambleText text={t('hero.title_1') || ''} delay={0.2} /><br />
              <ScrambleText text={t('hero.title_2') || ''} delay={0.4} /><br />
              <span className="hero-title-italic italic-accent">
                <ScrambleText text={t('hero.title_3') || ''} delay={0.6} />
              </span>
            </h1>

            <p className="hero-lead-text">
              {t('hero.lead')}
            </p>

            {/* Core Tenets Bullets */}
            <div className="hero-tenets-list font-mono">
              <div className="hero-tenet-item">
                <span className="tenet-num">01</span>
                <span>{t('hero.tenet_1')}</span>
              </div>
              <div className="hero-tenet-item">
                <span className="tenet-num">02</span>
                <span>{t('hero.tenet_2')}</span>
              </div>
              <div className="hero-tenet-item">
                <span className="tenet-num">03</span>
                <span>{t('hero.tenet_3')}</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="hero-cta-row font-mono">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="btn btn-primary hero-action-btn">
                  <span>{t('hero.cta_primary')}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="#services" className="hero-link-secondary">
                  <span>{t('hero.cta_secondary')}</span>
                  <ArrowDownRight size={15} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Technical Blueprint & Contract Inspector */}
          <motion.div className="hero-code-col" variants={fadeInRight}>
            <div className="technical-blueprint-box">
              <div className="blueprint-titlebar font-mono">
                <div className="blueprint-tabs">
                  <button
                    type="button"
                    className={`blueprint-tab ${activeTab === 'warehouse' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('warehouse')}
                  >
                    <Database size={12} />
                    <span>WarehouseContract.ts</span>
                  </button>
                  <button
                    type="button"
                    className={`blueprint-tab ${activeTab === 'sapSync' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('sapSync')}
                  >
                    <Server size={12} />
                    <span>SAPServiceLayer.ts</span>
                  </button>
                  <button
                    type="button"
                    className={`blueprint-tab ${activeTab === 'fieldMobile' ? 'is-active' : ''}`}
                    onClick={() => setActiveTab('fieldMobile')}
                  >
                    <Code2 size={12} />
                    <span>OfflineQueue.ts</span>
                  </button>
                </div>

                <button
                  type="button"
                  className="blueprint-copy-btn font-mono"
                  onClick={handleCopy}
                  title={t('hero.copy')}
                  aria-label={t('hero.copy')}
                >
                  {copied ? <Check size={12} className="text-green" /> : <Copy size={12} />}
                  <span>{copied ? t('hero.copied') : t('hero.copy')}</span>
                </button>
              </div>

              <div className="blueprint-content font-mono">
                <pre>
                  <code>{TECHNICAL_CONTRACTS[activeTab]}</code>
                </pre>
              </div>

              <div className="blueprint-footer font-mono">
                <div className="footer-spec-item">
                  <span className="footer-spec-label">CONTRACT:</span>
                  <span className="text-primary">STRICT TYPESCRIPT 5.x</span>
                </div>
                <div className="footer-spec-item">
                  <span className="footer-spec-label">VALIDATION:</span>
                  <span className="text-green">● TYPE CHECKED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enterprise Trust Marquee at the bottom of the hero */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 10 }}>
        <TrustMarquee />
      </div>
    </section>
  );
};
