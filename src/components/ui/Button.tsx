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
      'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-sm hover:shadow-md';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const variantStyles = {
      primary:
        'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-500/35 border border-indigo-400/30 focus:ring-indigo-500 hover:brightness-105',
      secondary:
        'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md shadow-black/15 dark:shadow-black/50 hover:shadow-lg hover:shadow-black/25 dark:hover:shadow-black/70 border border-slate-700/50 dark:border-white/20 focus:ring-slate-900',
      glass:
        'glass-panel text-slate-800 dark:text-slate-100 hover:bg-white/90 dark:hover:bg-slate-800/90 shadow-sm shadow-black/5 dark:shadow-black/30 hover:shadow-md hover:shadow-black/10 dark:hover:shadow-black/50 border border-white/40 dark:border-white/10 focus:ring-indigo-500/40 hover:brightness-105',
      outline:
        'border border-slate-300/80 dark:border-slate-700/80 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 shadow-xs hover:shadow-sm shadow-black/5 dark:shadow-black/20 focus:ring-slate-400',
      ghost:
        'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white shadow-none hover:shadow-xs',
      glow:
        'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:via-violet-500 hover:to-purple-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110 border border-indigo-400/30 hover:border-indigo-300/60 focus:ring-indigo-500',
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
