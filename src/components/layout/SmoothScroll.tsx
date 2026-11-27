import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Desktop smooth scrolling via Lenis — tuned slow enough to feel.
 * Touch devices keep native momentum scrolling.
 */
export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (('ontouchstart' in window) ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024);

    // Keep native momentum on phones; Lenis on desktop for feelable glide
    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      syncTouch: false
    });

    lenisRef.current = lenis;
    lenis.on('scroll', () => {
      ScrollTrigger.update();
      document.dispatchEvent(new CustomEvent('lenis-scroll'));
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    // Keep default lag smoothing — disabling it (0) makes GSAP timelines
    // jump ahead after any delayed frame (breaks OpeningAnimation, etc.).
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return <>{children}</>;
};
