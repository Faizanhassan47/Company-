import React from 'react';
import './SwissGrid.css';

export const SwissGrid: React.FC = () => {
  return (
    <div className="swiss-grid-overlay" aria-hidden="true">
      <div className="swiss-grid-container">
        {/* We use an array of 12 for the 12-column grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="swiss-grid-column" />
        ))}
      </div>
    </div>
  );
};
