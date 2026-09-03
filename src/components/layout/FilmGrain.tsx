import React from 'react';
import './FilmGrain.css';

export const FilmGrain: React.FC = () => {
  return (
    <div className="film-grain-container" aria-hidden="true">
      <div className="film-grain-noise"></div>
    </div>
  );
};
