import { useEffect } from 'react';

/**
 * Lightweight 2D mouse-follow spotlight hook.
 * Calculates cursor position relative to any .spotlight-card container
 * and assigns --mouse-x and --mouse-y CSS properties for pure GPU-accelerated glow borders.
 */
export function useSpotlight() {
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const cards = document.querySelectorAll<HTMLElement>('.spotlight-card');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          // Only update if cursor is within reasonably close proximity (100px threshold)
          if (
            e.clientX >= rect.left - 100 &&
            e.clientX <= rect.right + 100 &&
            e.clientY >= rect.top - 100 &&
            e.clientY <= rect.bottom + 100
          ) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          }
        });
        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}
