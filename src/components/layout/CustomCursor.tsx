import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [magneticRect, setMagneticRect] = useState<DOMRect | null>(null);

  // Framer Motion values for smooth trailing
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Dimensions
  const size = useMotionValue(24);
  const borderRadius = useMotionValue(12);

  // Apply spring physics for ultra-premium feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothSize = useSpring(size, springConfig);
  const smoothRadius = useSpring(borderRadius, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Base mouse position
      const clientX = e.clientX;
      const clientY = e.clientY;
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      // Spotlight effect logic
      const spotlightCard = target.closest('.spotlight-card, [data-spotlight]') as HTMLElement | null;
      if (spotlightCard) {
        const rect = spotlightCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightCard.style.setProperty('--mouse-x', `${x}px`);
        spotlightCard.style.setProperty('--mouse-y', `${y}px`);
      }

      // Cursor state logic
      const projectCard = target.closest('[data-cursor="view"]');
      const interactiveEl = target.closest('a, button, input, textarea, select, .clickable') as HTMLElement | null;

      if (projectCard) {
        setCursorState('view');
        setMagneticRect(null);
        mouseX.set(clientX);
        mouseY.set(clientY);
        size.set(80);
        borderRadius.set(40);
      } else if (interactiveEl) {
        setCursorState('pointer');
        const rect = interactiveEl.getBoundingClientRect();
        
        // Only apply magnetic effect for prominent buttons (not raw links)
        if (interactiveEl.classList.contains('btn') || interactiveEl.classList.contains('nav-pill-item') || interactiveEl.classList.contains('scope-chip')) {
          setMagneticRect(rect);
          // Snap cursor to center of button
          mouseX.set(rect.left + rect.width / 2);
          mouseY.set(rect.top + rect.height / 2);
          size.set(rect.width + 10); // slightly larger than button
          borderRadius.set(8); // Match button radius roughly
        } else {
          setMagneticRect(null);
          mouseX.set(clientX);
          mouseY.set(clientY);
          size.set(40);
          borderRadius.set(20);
        }
      } else {
        setCursorState('default');
        setMagneticRect(null);
        mouseX.set(clientX);
        mouseY.set(clientY);
        size.set(24);
        borderRadius.set(12);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`custom-cursor-follower cursor-${cursorState} ${magneticRect ? 'magnetic-active' : ''}`}
      style={{
        x: smoothX,
        y: smoothY,
        width: smoothSize,
        height: magneticRect ? smoothSize : smoothSize, // When magnetic, we'll let css handle height via aspect-ratio if not explicit, but for accurate snapping we need explicit height. Wait, size is width. Let's make size a height too.
      }}
    >
      <motion.div 
        className="cursor-inner-shape"
        style={{
          width: '100%',
          height: magneticRect ? magneticRect.height + 10 : smoothSize,
          borderRadius: smoothRadius
        }}
      >
        {cursorState === 'view' && <span className="cursor-label font-mono">VIEW</span>}
      </motion.div>
    </motion.div>
  );
};

