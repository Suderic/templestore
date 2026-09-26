import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'purple' | 'glass';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full border transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 leading-none',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    primary: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    glass: 'glass-panel text-slate-800 dark:text-slate-200 border-white/40 dark:border-white/10 shadow-sm',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))} {...props}>
      {children}
    </span>
  );
}
