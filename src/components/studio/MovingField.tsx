import React from 'react';
import './MovingField.css';

export const MovingField: React.FC = () => (
  <div className="moving-field" aria-hidden="true">
    <span className="field-grid" />
    <span className="field-orb orb-a" />
    <span className="field-orb orb-b" />
    <span className="field-orb orb-c" />
    <span className="field-beam" />
  </div>
);
