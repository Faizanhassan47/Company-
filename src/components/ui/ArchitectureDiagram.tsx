import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, ShieldCheck, Box, Activity } from 'lucide-react';
import './ArchitectureDiagram.css';

interface NodeProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  delay: number;
}

const ArchNode: React.FC<NodeProps> = ({ icon, label, sublabel, delay }) => (
  <motion.div 
    className="arch-node"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <div className="arch-node-icon-wrapper">
      {icon}
      <motion.div 
        className="arch-node-pulse"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay }}
      />
    </div>
    <div className="arch-node-info font-mono">
      <span className="arch-node-label">{label}</span>
      <span className="arch-node-sublabel">{sublabel}</span>
    </div>
  </motion.div>
);

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="architecture-diagram-wrapper">
      
      {/* Top Background SVG Grid for context */}
      <div className="arch-diagram-bg" />

      <div className="arch-diagram-content">
        
        {/* Layer 1: Client Edge */}
        <div className="arch-layer">
          <div className="arch-layer-label font-mono">01 // CLIENT EDGE</div>
          <div className="arch-nodes-row">
            <ArchNode 
              id="web" 
              icon={<Globe size={20} className="text-orange" />} 
              label="Web Platform" 
              sublabel="React 19 / Vite" 
              delay={0.1} 
            />
            <ArchNode 
              id="mobile" 
              icon={<Activity size={20} className="text-orange" />} 
              label="Mobile App" 
              sublabel="React Native / Expo" 
              delay={0.2} 
            />
          </div>
        </div>

        {/* Data Paths (SVG) */}
        <div className="arch-connector-vertical">
          <motion.div className="arch-data-packet" animate={{ y: [0, 45] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
          <motion.div className="arch-data-packet" animate={{ y: [0, 45] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }} />
        </div>

        {/* Layer 2: API Gateway */}
        <div className="arch-layer">
          <div className="arch-layer-label font-mono">02 // GATEWAY & SECURITY</div>
          <div className="arch-nodes-row single-node">
            <ArchNode 
              id="gateway" 
              icon={<ShieldCheck size={24} className="text-orange" />} 
              label="API Gateway" 
              sublabel="Cloudflare / WAF / Auth" 
              delay={0.4} 
            />
          </div>
        </div>

        <div className="arch-connector-vertical">
          <motion.div className="arch-data-packet" animate={{ y: [0, 45] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
        </div>

        {/* Layer 3: Microservices */}
        <div className="arch-layer">
          <div className="arch-layer-label font-mono">03 // COMPUTE & LOGIC</div>
          <div className="arch-nodes-row">
            <ArchNode 
              id="auth" 
              icon={<Box size={20} className="text-orange" />} 
              label="Auth Service" 
              sublabel="Node.js / JWT" 
              delay={0.6} 
            />
            <ArchNode 
              id="core" 
              icon={<Server size={20} className="text-orange" />} 
              label="Core Engine" 
              sublabel="Python FastAPI" 
              delay={0.7} 
            />
             <ArchNode 
              id="sync" 
              icon={<Activity size={20} className="text-orange" />} 
              label="ERP Sync" 
              sublabel="SAP Service Layer" 
              delay={0.8} 
            />
          </div>
        </div>

        <div className="arch-connector-vertical">
          <motion.div className="arch-data-packet" animate={{ y: [0, 45] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
        </div>

        {/* Layer 4: Persistence */}
        <div className="arch-layer">
          <div className="arch-layer-label font-mono">04 // PERSISTENCE</div>
          <div className="arch-nodes-row single-node">
            <ArchNode 
              id="db" 
              icon={<Database size={24} className="text-orange" />} 
              label="Primary Database" 
              sublabel="PostgreSQL (ACID)" 
              delay={1.0} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};
