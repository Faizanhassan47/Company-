import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { 
  Box, User, Server, Share2, 
  BrainCircuit, Shield, BarChart3, Rocket, Activity 
} from 'lucide-react';
import './ProcessApproachSection.css';

const nodes = [
  { id: 'business', icon: Box, title: 'BUSINESS WORKFLOW', subtitle: 'ALIGN PEOPLE, PROCESSES, GOALS', col: 1 },
  { id: 'ux', icon: User, title: 'USER EXPERIENCE', subtitle: 'INTUITIVE. PURPOSEFUL. HUMAN.', col: 2 },
  { id: 'backend', icon: Server, title: 'BACK-END', subtitle: 'SCALABLE, SECURE, RELIABLE', col: 1 },
  { id: 'integration', icon: Share2, title: 'INTEGRATION ARCHITECTURE', subtitle: 'CONNECTED SYSTEMS, HIGHER VALUE', col: 2 },
  { id: 'ai', icon: BrainCircuit, title: 'AI WORKFLOWS', subtitle: 'AUTOMATE. AUGMENT. ACCELERATE.', col: 1 },
  { id: 'security', icon: Shield, title: 'SECURITY', subtitle: 'PROTECT WHAT MATTERS', col: 2 },
  { id: 'reporting', icon: BarChart3, title: 'REPORTING', subtitle: 'REAL INSIGHTS. REAL PROGRESS.', col: 1 },
  { id: 'deployment', icon: Rocket, title: 'DEPLOYMENT', subtitle: 'FROM STAGING TO REAL-WORLD', col: 2 },
];

export const ProcessApproachSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.pa-node', 
      { opacity: 0, scale: 0.9, y: 20 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo('.pa-line',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="process-approach-section" ref={sectionRef}>
      <div className="pa-container">
        
        {/* Left Column: Text Content */}
        <div className="pa-content-side">
          <div className="section-meta" style={{ marginBottom: '2rem' }}>
            <span className="section-number">06</span>
            <span>// SYSTEM THINKING</span>
            <span className="meta-sep font-mono">OUR APPROACH</span>
          </div>

          <h2 className="pa-headline font-display">
            WE DON'T JUST<br/>
            <span className="pa-headline-italic">BUILD SCREENS.</span>
          </h2>

          <p className="pa-description">
            We approach software as an operational system, not a collection of web pages. Every pattern is considered sequentially across its entire operational footprint.
          </p>

          <div className="pa-steps">
            <div className="pa-step">
              <div className="pa-step-num">01</div>
              <div className="pa-step-text">STRATEGY<br/>TO SCALE</div>
            </div>
            <div className="pa-step">
              <div className="pa-step-num">02</div>
              <div className="pa-step-text">IDEAS TO<br/>INFRASTRUCTURE</div>
            </div>
            <div className="pa-step">
              <div className="pa-step-num">03</div>
              <div className="pa-step-text">BUILT FOR<br/>REAL IMPACT</div>
            </div>
          </div>
        </div>

        {/* Right Column: Node Diagram */}
        <div className="pa-diagram-side">
          {/* Background grid lines for the connection effect */}
          <div className="pa-diagram-bg">
             <div className="pa-line pa-line-v pa-line-v1"></div>
             <div className="pa-line pa-line-v pa-line-v2"></div>
             <div className="pa-line pa-line-v pa-line-v3"></div>
             
             <div className="pa-line pa-line-h pa-line-h1"></div>
             <div className="pa-line pa-line-h pa-line-h2"></div>
             <div className="pa-line pa-line-h pa-line-h3"></div>
             <div className="pa-line pa-line-h pa-line-h4"></div>
             
             {/* Path to bottom node */}
             <div className="pa-line pa-line-path-bottom-l"></div>
             <div className="pa-line pa-line-path-bottom-r"></div>
          </div>

          <div className="pa-nodes-grid">
            {nodes.map((node) => (
              <div key={node.id} className="pa-node">
                <div className="pa-node-icon">
                  <node.icon size={24} />
                </div>
                <div className="pa-node-text">
                  <h3>{node.title}</h3>
                  <p>{node.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pa-bottom-node-container">
             <div className="pa-node pa-node-large">
                <div className="pa-node-icon">
                  <Activity size={28} />
                </div>
                <div className="pa-node-text">
                  <h3>REAL-TIME SYSTEMS</h3>
                  <p>BUILT FOR A FASTER TOMORROW</p>
                </div>
              </div>
          </div>
        </div>

      </div>
      
      {/* Footer / Systems for what's next */}
      <div className="pa-footer">
        <div className="pa-footer-left">
          <span className="pa-footer-slash">///</span>
          <span className="pa-footer-text italic-accent">Systems for what's next.</span>
        </div>
        <div className="pa-footer-line"></div>
        <div className="pa-footer-right">
          <span>IDEAS</span> <span className="slash">/</span>
          <span>SYSTEMS</span> <span className="slash">/</span>
          <span>IMPACT</span> <span className="slash">/</span>
        </div>
      </div>
    </section>
  );
};
