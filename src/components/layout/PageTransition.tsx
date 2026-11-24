import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Keep route swaps lightweight. Scroll reveals are handled by StudioMotion.
 * (A Motion wrapper here was sticking at opacity 0 under reduced-motion / AnimatePresence.)
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <div className="page-transition-root">{children}</div>;
};
