import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { CustomCursor } from './components/layout/CustomCursor';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      {/* Precision Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Site Layout */}
      <div className="site-wrapper">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />

        <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study" element={<CaseStudiesPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
