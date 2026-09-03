import React from 'react';
import './TrustMarquee.css';

const TECHNOLOGIES = [
  'React', 'Node.js', 'TypeScript', 'AWS', 'Python', 'SAP Business One',
  'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'Next.js', 'Three.js'
];

export const TrustMarquee: React.FC = () => {
  return (
    <div className="trust-marquee-container">
      <div className="trust-marquee-track">
        {/* We double the content to create the infinite loop effect */}
        {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
          <div key={index} className="trust-marquee-item font-mono">
            {tech}
            <span className="marquee-separator">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
