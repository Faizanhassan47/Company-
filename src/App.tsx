import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from './utils/analytics';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/layout/PageTransition';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { CustomCursor } from './components/layout/CustomCursor';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { FilmGrain } from './components/layout/FilmGrain';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { CommandPalette } from './components/layout/CommandPalette';
import { CookieBanner } from './components/ui/CookieBanner';
import { LiveChat } from './components/layout/LiveChat';
import { TerminalEasterEgg } from './components/ui/TerminalEasterEgg';
import { SwissGrid } from './components/layout/SwissGrid';
import { useSecretCode } from './hooks/useSecretCode';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/work/:slug" element={<PageTransition><CaseStudyPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetailPage /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/industries/:slug" element={<PageTransition><IndustryDetailPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><InsightsPage /></PageTransition>} />
        <Route path="/insights/:slug" element={<PageTransition><InsightDetailPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsPage /></PageTransition>} />

        {/* Legacy Aliases & Redirects */}
        <Route path="/case-study" element={<Navigate to="/work" replace />} />
        <Route path="/case-studies" element={<Navigate to="/work" replace />} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Easter Eggs
  const tekmoraCode = useSecretCode('tekmora');
  const rootCode = useSecretCode('root');
  const terminalOpen = tekmoraCode.success || rootCode.success;

  const closeTerminal = () => {
    tekmoraCode.setSuccess(false);
    rootCode.setSuccess(false);
  };

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <BrowserRouter>
      <SmoothScroll>
        {/* Architectural Background Grid */}
        <SwissGrid />

        {/* Auto Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* Global Cinematic Noise */}
        <FilmGrain />

        {/* Precision Cursor */}
        <CustomCursor />

        {/* Quick Search Command Palette (Cmd+K) */}
        <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* God Mode Terminal */}
        <AnimatePresence>
          {terminalOpen && <TerminalEasterEgg onClose={closeTerminal} />}
        </AnimatePresence>

        {/* GDPR Cookie Consent */}
        <CookieBanner />

        {/* Live Sales Chat */}
        <LiveChat />

        {/* Preloader */}
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}

        {/* Site Layout */}
        <div className="site-wrapper">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          <AnimatedRoutes />

          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
