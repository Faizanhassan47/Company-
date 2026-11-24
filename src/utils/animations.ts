import type { Variants } from 'motion/react';
import { MOTION_EASE, revealTransition, staggerTransition } from '../components/studio/StudioMotion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: revealTransition
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: staggerTransition
  }
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.45, ease: MOTION_EASE }
};

export const hoverLift = {
  y: -6,
  transition: { duration: 0.45, ease: MOTION_EASE }
};
