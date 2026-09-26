'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, disabled, children, ...props }, ref) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const variantStyles = {
      primary:
        'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30 focus:ring-indigo-500',
      secondary:
        'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md focus:ring-slate-900',
      glass:
        'glass-panel text-slate-800 dark:text-slate-100 hover:bg-white/80 dark:hover:bg-slate-800/80 shadow-sm border border-white/40 dark:border-white/10 focus:ring-indigo-500/40',
      outline:
        'border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-200 focus:ring-slate-400',
      ghost:
        'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white',
      glow:
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 border border-white/20 focus:ring-purple-500',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        disabled={disabled || isLoading}
        className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
