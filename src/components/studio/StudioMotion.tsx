import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';

/** Feelable studio easing — slow enough to read on scroll. */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const revealTransition = {
  duration: 1.2,
  ease: MOTION_EASE
};

export const staggerTransition = {
  staggerChildren: 0.16,
  delayChildren: 0.1
};

function isElementInView(node: Element) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  return rect.top < vh * 0.92 && rect.bottom > vh * 0.06;
}

function useScrollInView(initialInView = false) {
  const [node, setNode] = useState<Element | null>(null);
  const [inView, setInView] = useState(initialInView);
  const ref = useCallback((el: Element | null) => setNode(el), []);

  useEffect(() => {
    if (!node || inView) return;

    let frame = 0;
    const check = () => {
      if (isElementInView(node)) {
        setInView(true);
        return true;
      }
      return false;
    };

    if (check()) return;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (check()) cleanup();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          cleanup();
        }
      },
      { threshold: [0, 0.1, 0.2], rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(node);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    document.addEventListener('lenis-scroll', onScroll as EventListener);

    const cleanup = () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('lenis-scroll', onScroll as EventListener);
      cancelAnimationFrame(frame);
    };

    // Catch-up tick — covers Lenis frames that skip native scroll events
    const interval = window.setInterval(() => {
      if (check()) {
        window.clearInterval(interval);
        cleanup();
      }
    }, 200);

    return () => {
      window.clearInterval(interval);
      cleanup();
    };
  }, [node, inView]);

  return { ref, inView };
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'header';
  aboveFold?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, aboveFold = false }) => {
  const { ref, inView } = useScrollInView(aboveFold);

  return (
    <div ref={ref as never} className={className} data-reveal={inView ? 'in' : 'out'}>
      <motion.div
        initial={aboveFold ? { opacity: 1, y: 20 } : { opacity: 0, y: 56 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
        transition={{ duration: 1.15, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol' | 'section';
}

export const Stagger: React.FC<StaggerProps> = ({ children, className, as = 'div' }) => {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
  delay?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className,
  as = 'div',
  delay = 0
}) => {
  const { ref, inView } = useScrollInView();
  const Tag = as;

  return (
    <Tag className={className} data-reveal={inView ? 'in' : 'out'}>
      <div ref={ref as never}>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 1.1, delay, ease: MOTION_EASE }}
          style={{ height: '100%' }}
        >
          {children}
        </motion.div>
      </div>
    </Tag>
  );
};
