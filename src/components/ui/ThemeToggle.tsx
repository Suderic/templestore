'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunLuxury, MoonLuxury } from '@/components/ui/Icons';

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export function ThemeToggle({ className = '', showLabels = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const toggleTheme = (targetTheme?: 'light' | 'dark') => {
    const nextTheme = targetTheme || (isDark ? 'light' : 'dark');
    setTheme(nextTheme);

    // Direct DOM manipulation fallback to ensure instantaneous zero-flicker transition
    if (typeof document !== 'undefined') {
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
        try { localStorage.setItem('theme', 'dark'); } catch {}
      } else {
        document.documentElement.classList.remove('dark');
        try { localStorage.setItem('theme', 'light'); } catch {}
      }
    }
  };

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl glass-panel border border-white/40 dark:border-white/10 shadow-sm transition-all bg-white/60 dark:bg-slate-900/60 backdrop-blur-md ${className}`}
      role="group"
      aria-label="Theme selection"
    >
      {/* Light Mode Button */}
      <button
        type="button"
        onClick={() => toggleTheme('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
          !isDark
            ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/35 shadow-xs scale-102'
            : 'text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        title="Switch to Light Mode"
        aria-label="Light mode"
      >
        <SunLuxury className="w-4 h-4 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
        {showLabels && <span>Light</span>}
      </button>

      {/* Dark Mode Button */}
      <button
        type="button"
        onClick={() => toggleTheme('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
          isDark
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs border border-indigo-400/40 scale-102'
            : 'text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        title="Switch to Dark Mode"
        aria-label="Dark mode"
      >
        <MoonLuxury className="w-4 h-4 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
        {showLabels && <span>Dark</span>}
      </button>
    </div>
  );
}
