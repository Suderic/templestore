'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  className?: string;
  distance?: number;
}

export function AlderAshReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  distance = 28
}: Props) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: -distance };
      case 'right':
        return { opacity: 0, x: distance };
      case 'scale':
        return { opacity: 0, scale: 0.94 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // smooth out-expo luxury curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
