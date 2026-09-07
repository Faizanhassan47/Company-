import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from './utils/analytics';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/layout/PageTransition';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { FilmGrain } from './components/layout/FilmGrain';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { CookieBanner } from './components/ui/CookieBanner';
import { LiveChat } from './components/layout/LiveChat';
import { TerminalEasterEgg } from './components/ui/TerminalEasterEgg';
import { SwissGrid } from './components/layout/SwissGrid';
import { useSecretCode } from './hooks/useSecretCode';
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then(module => ({ default: module.WorkPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(module => ({ default: module.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(module => ({ default: module.IndustriesPage })));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage').then(module => ({ default: module.IndustryDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(module => ({ default: module.InsightsPage })));
const InsightDetailPage = lazy(() => import('./pages/InsightDetailPage').then(module => ({ default: module.InsightDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const CommandPalette = lazy(() => import('./components/layout/CommandPalette').then(module => ({ default: module.CommandPalette })));

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <Suspense fallback={<div className="route-loading font-mono" role="status" aria-live="polite">Loading page…</div>}>
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
    </Suspense>
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

        {/* Quick Search Command Palette (Cmd+K) */}
        {searchOpen && (
          <Suspense fallback={null}>
            <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
          </Suspense>
        )}

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
