'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Layers, UserPlus, Sparkles, Check } from 'lucide-react';
import { LogoMark } from '@/components/ui/Icons';

export default function SignUpPage() {
  const router = useRouter();
  const { signup, isLoading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!termsAccepted) {
      setError('Please agree to the Terms of Service to continue');
      return;
    }

    const res = await signup(name, email, password);
    if (res.success) {
      router.push('/dashboard');
    } else {
      setError(res.error || 'Failed to create account');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-2xl relative"
      >
        {/* Header */}
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
            Create Developer Account
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sign up to manage your template licenses, invoices, and downloads.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sarah Developer"
            required
          />

          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sarah@company.com"
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-500">
              {error}
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="cursor-pointer">
              I accept the <a href="#" className="text-indigo-500 hover:underline">Terms of Service</a> & <a href="#" className="text-indigo-500 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <Button
            type="submit"
            variant="glow"
            size="lg"
            className="w-full justify-center shadow-indigo-500/25"
            isLoading={isLoading}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Create Account & Access Dashboard
          </Button>
        </form>

        {/* Footer link */}
        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-indigo-500 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
