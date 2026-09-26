'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, Terminal, ChevronDown, Check, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DevBanner() {
  const pathname = usePathname();
  const { isDevMode, toggleDevMode, user, loginAsSeedUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed || pathname?.startsWith('/demo')) return null;

  return (
    <div className="w-full bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-900/90 text-white text-xs border-b border-indigo-500/30 backdrop-blur-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
        
        {/* Left message */}
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-300">
            <Terminal className="w-3 h-3" />
          </span>
          <span className="font-semibold text-indigo-200">Local Dev Testing Suite:</span>
          <span className="hidden sm:inline text-slate-300">
            {user ? (
              <>Signed in as <strong className="text-white">{user.name}</strong> ({user.email})</>
            ) : (
              'Guest mode active'
            )}
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-slate-200 hover:text-white cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-indigo-300" />
              <span>Switch Seed Account</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-1.5 w-64 glass-card rounded-xl border border-white/30 dark:border-white/15 shadow-2xl p-2 z-50 bg-slate-900 text-white"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                    Preloaded Test Accounts
                  </p>
                  
                  <button
                    onClick={() => {
                      loginAsSeedUser('usr-001');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-indigo-600/20 text-left transition-colors cursor-pointer text-xs"
                  >
                    <div>
                      <p className="font-semibold text-white">Alex Designer</p>
                      <p className="text-[10px] text-slate-400">demo@templestore.dev • 2 purchases</p>
                    </div>
                    {user?.id === 'usr-001' && <Check className="w-4 h-4 text-emerald-400" />}
                  </button>

                  <button
                    onClick={() => {
                      loginAsSeedUser('usr-002');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-indigo-600/20 text-left transition-colors cursor-pointer text-xs"
                  >
                    <div>
                      <p className="font-semibold text-white">Sarah Developer</p>
                      <p className="text-[10px] text-slate-400">sarah@templestore.dev • 1 purchase</p>
                    </div>
                    {user?.id === 'usr-002' && <Check className="w-4 h-4 text-emerald-400" />}
                  </button>

                  <div className="border-t border-white/10 my-1 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-rose-300 hover:bg-rose-500/20 text-xs transition-colors"
                    >
                      Clear Session (Test Guest Mode)
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center gap-1 text-indigo-300 hover:text-white underline font-medium"
          >
            Open Dashboard →
          </Link>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-slate-400 hover:text-white cursor-pointer"
            title="Dismiss dev bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
