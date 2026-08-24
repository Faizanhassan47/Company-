import React from 'react';

export const QuranAyatGraphic: React.FC = () => {
  return (
    <div className="system-graphic quran-ayat-graphic">
      <div className="quran-mobile-frame">
        {/* Device Header */}
        <div className="quran-status-bar font-mono">
          <span>04:45 AM</span>
          <span>FAJR PRAYER // 04:52</span>
          <span>100% ⚡</span>
        </div>

        {/* Surah Header Bar */}
        <div className="quran-screen-header">
          <div className="surah-badge font-mono">SURAH AL-MULK // 67</div>
          <div className="surah-ayah-num font-mono text-orange">AYAH 01 OF 30</div>
        </div>

        {/* Calm Reader Interface */}
        <div className="quran-reading-area">
          <div className="ayah-translation">
            “Blessed is He in whose hand is dominion, and He is over all things competent.”
          </div>

          <div className="quran-meta-chips font-mono">
            <span className="chip">MECCAN SURAH</span>
            <span className="chip">PAGE 562</span>
            <span className="chip text-orange">JUZ 29</span>
          </div>
        </div>

        {/* Audio Player Bar */}
        <div className="quran-player-bar">
          <div className="player-track">
            <span className="reciter font-mono">RECITER: MISHARY RASHID AL-AFASY</span>
            <div className="player-wave">
              <span className="bar" style={{ height: '60%' }}></span>
              <span className="bar" style={{ height: '90%' }}></span>
              <span className="bar" style={{ height: '40%' }}></span>
              <span className="bar" style={{ height: '100%' }}></span>
              <span className="bar" style={{ height: '70%' }}></span>
              <span className="bar" style={{ height: '85%' }}></span>
              <span className="bar" style={{ height: '50%' }}></span>
            </div>
          </div>
          <div className="player-time font-mono">00:14 / 00:28</div>
        </div>
      </div>
    </div>
  );
};
