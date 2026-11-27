import React, { lazy, Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { initAnalytics, trackPageView } from './utils/analytics';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { PageTransition } from './components/layout/PageTransition';
import { Navbar } from './components/layout/Navbar';
import { MovingField } from './components/studio/MovingField';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { CookieBanner } from './components/ui/CookieBanner';
import { LiveChat } from './components/layout/LiveChat';
import { TerminalEasterEgg } from './components/ui/TerminalEasterEgg';
import { BackToTop } from './components/ui/BackToTop';
import { NetworkStatus } from './components/ui/NetworkStatus';
import { KeyboardShortcutsModal } from './components/ui/KeyboardShortcutsModal';
import { useSecretCode } from './hooks/useSecretCode';
import { useSpotlight } from './utils/useSpotlight';
import { OpeningAnimation } from './components/opening';
import { HomePage } from '@/pages/HomePage';
const WorkPage = lazy(() => import('@/pages/WorkPage').then(module => ({ default: module.WorkPage })));
const CaseStudyPage = lazy(() => import('@/pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage').then(module => ({ default: module.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage').then(module => ({ default: module.IndustriesPage })));
const IndustryDetailPage = lazy(() => import('@/pages/IndustryDetailPage').then(module => ({ default: module.IndustryDetailPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const InsightsPage = lazy(() => import('@/pages/InsightsPage').then(module => ({ default: module.InsightsPage })));
const InsightDetailPage = lazy(() => import('@/pages/InsightDetailPage').then(module => ({ default: module.InsightDetailPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const AgencyPartnersPage = lazy(() => import('@/pages/AgencyPartnersPage').then(module => ({ default: module.AgencyPartnersPage })));
const WorkflowPage = lazy(() => import('@/pages/WorkflowPage').then(module => ({ default: module.WorkflowPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then(module => ({ default: module.TermsPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
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
        <Route path="/workflow" element={<PageTransition><WorkflowPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetailPage /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/industries/:slug" element={<PageTransition><IndustryDetailPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><InsightsPage /></PageTransition>} />
        <Route path="/insights/:slug" element={<PageTransition><InsightDetailPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/agency-partners" element={<PageTransition><AgencyPartnersPage /></PageTransition>} />
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

const focusMainContent = () => {
  const main = document.getElementById('main-content');
  if (!main) return;
  if (!main.hasAttribute('tabindex')) main.tabIndex = -1;
  main.focus({ preventScroll: true });
};

const AppShell: React.FC<{ prerendered?: boolean }> = ({ prerendered = false }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Replay on every full page load of the homepage (no session skip).
  // OpeningAnimation itself handles prefers-reduced-motion with a short static hold.
  const isPrerendered = prerendered || (typeof document !== 'undefined' && document.getElementById('root')?.dataset.prerendered === 'true');
  const [openingDone, setOpeningDone] = useState(() => !isHome || isPrerendered);
  const [preloaderDone, setPreloaderDone] = useState(() => isHome || isPrerendered);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  useSpotlight();

  const tekmoraCode = useSecretCode('tekmora');
  const rootCode = useSecretCode('root');
  const terminalOpen = tekmoraCode.success || rootCode.success;

  const closeTerminal = () => {
    tekmoraCode.setSuccess(false);
    rootCode.setSuccess(false);
  };

  const showOpening = isHome && !openingDone;

  useLayoutEffect(() => {
    // Prerendered pages must match the server markup for the first hydration
    // pass. Before the browser paints the hydrated app, start the intro.
    if (isHome && isPrerendered) {
      setOpeningDone(false);
    }
  }, [isHome, isPrerendered]);

  useEffect(() => {
    initAnalytics();

    const handleOpenHUD = () => setShortcutsOpen(prev => !prev);
    window.addEventListener('open-shortcuts-hud', handleOpenHUD);
    return () => window.removeEventListener('open-shortcuts-hud', handleOpenHUD);
  }, []);

  return (
    <SmoothScroll>
      <ScrollToTop />

      {searchOpen && (
        <Suspense fallback={null}>
          <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </Suspense>
      )}

      <NetworkStatus />

      <KeyboardShortcutsModal
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
        onOpenSearch={() => {
          setShortcutsOpen(false);
          setSearchOpen(true);
        }}
      />

      <AnimatePresence>
        {terminalOpen && <TerminalEasterEgg onClose={closeTerminal} />}
      </AnimatePresence>

      <CookieBanner />
      <LiveChat />

      {/* Cinematic intro — homepage only, every refresh */}
      {showOpening && (
        <OpeningAnimation
          onComplete={() => {
            setOpeningDone(true);
            setPreloaderDone(true);
            // Focus main content — not the skip link — so the orange
            // "Skip to content" chip does not stay stuck on screen.
            window.requestAnimationFrame(focusMainContent);
          }}
        />
      )}

      {/* Short preloader only when the cinematic intro is not playing */}
      {!showOpening && !preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <div className="site-wrapper" aria-hidden={showOpening || undefined} inert={showOpening || undefined}>
          <MovingField />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar onOpenSearch={() => setSearchOpen(true)} />
          <AnimatedRoutes />
          <BackToTop />
          <Footer />
      </div>
    </SmoothScroll>
  );
};

export const App: React.FC = () => {
  const prerendered = typeof document !== 'undefined' && document.getElementById('root')?.dataset.prerendered === 'true';
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      <BrowserRouter>
        <AppShell prerendered={prerendered} />
      </BrowserRouter>
    </MotionConfig>
  );
};

export const ServerApp: React.FC<{ url: string }> = ({ url }) => (
  <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
    <StaticRouter location={url}>
      <AppShell prerendered />
    </StaticRouter>
  </MotionConfig>
);

export default App;
