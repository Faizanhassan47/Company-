import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CHARS = '<>-_\\/[]{}—=+*^?#_';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let frame: number;
    let iteration = 0;
    
    // Convert string to array to handle emojis/multibyte if needed, but standard characters are fine.
    const originalChars = text.split('');
    
    const scramble = () => {
      setDisplayText(
        originalChars
          .map((char, index) => {
            if (index < iteration) {
              return char;
            }
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= originalChars.length) {
        cancelAnimationFrame(frame);
        return;
      }
      
      iteration += 1 / 3; // speed of decoding
      frame = requestAnimationFrame(scramble);
    };

    const startTimeout = setTimeout(() => {
      frame = requestAnimationFrame(scramble);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frame);
    };
  }, [text, delay]);

  return (
    <motion.span 
      className={`scramble-text ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      {displayText}
    </motion.span>
  );
};
