import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="view"]');
      const interactiveEl = target.closest('a, button, input, textarea, select, .clickable');

      if (projectCard) {
        setCursorState('view');
      } else if (interactiveEl) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor-follower cursor-${cursorState}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      {cursorState === 'view' && <span className="cursor-label font-mono">VIEW</span>}
    </div>
  );
};
