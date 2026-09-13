import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollTextReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  children,
  className = '',
  as: Component = 'p',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const words = containerRef.current.querySelectorAll('.reveal-word');
      if (!words.length) return;

      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'bottom 55%',
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const words = children.split(' ');

  return (
    <Component
      ref={containerRef as any}
      className={`scroll-text-reveal ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="reveal-word">
          {word}&nbsp;
        </span>
      ))}
    </Component>
  );
};
