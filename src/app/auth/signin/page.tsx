'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Layers, LogIn, Sparkles, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { LogoMark } from '@/components/ui/Icons';

export default function SignInPage() {
  const router = useRouter();
  const { login, loginAsSeedUser, isLoading } = useAuth();

  const [email, setEmail] = useState('demo@templestore.dev');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await login(email, password);
    if (res.success) {
      router.push('/dashboard');
    } else {
      setError(res.error || 'Authentication failed');
    }
  };

  const handleQuickSeed = (userId: 'usr-001' | 'usr-002') => {
    loginAsSeedUser(userId);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-2xl relative"
      >
        {/* Brand header */}
        <div className="text-center space-y-2 mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-3 group">
            <div className="w-10 h-10 rounded-2xl glass-panel p-1.5 shadow-md shadow-amber-500/15 border border-amber-500/30 flex items-center justify-center bg-white/70 dark:bg-slate-900/70 group-hover:scale-105 transition-all">
              <LogoMark className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">
                TEMPLE<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">STORE</span>
              </span>
              <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-0.5">
                Marketplace
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Welcome back
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sign in to access your purchased templates and licenses.
          </p>
        </div>

        {/* Quick Dev Login Buttons */}
        <div className="mb-6 p-4 rounded-2xl glass-panel border border-indigo-500/20 bg-indigo-500/5 space-y-2.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 1-Click Local Dev Testing
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickSeed('usr-001')}
              className="px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-[11px] font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-xs text-center cursor-pointer transition-all"
            >
              Alex (2 items)
            </button>
            <button
              type="button"
              onClick={() => handleQuickSeed('usr-002')}
              className="px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-[11px] font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-xs text-center cursor-pointer transition-all"
            >
              Sarah (1 item)
            </button>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@templestore.dev"
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
            required
          />

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-500">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-slate-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-indigo-500/25"
            isLoading={isLoading}
          >
            <LogIn className="w-4 h-4 mr-2" />
            Sign In to Account
          </Button>
        </form>

        {/* Footer link */}
        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Don't have an account yet?{' '}
          <Link href="/auth/signup" className="text-indigo-500 font-bold hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
