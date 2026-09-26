'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers, QrCode, Shield, Zap, Heart, Globe, Code } from 'lucide-react';
import { LogoMark, QrLuxury, ShieldLuxury, DatabaseLuxury } from '@/components/ui/Icons';

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/demo')) return null;

  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-white/10 glass-panel mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl glass-panel p-1.5 shadow-md shadow-amber-500/10 border border-amber-500/30 flex items-center justify-center bg-white/70 dark:bg-slate-900/70">
                <LogoMark className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white leading-none">
                  TEMPLE<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">STORE</span>
                </span>
                <span className="text-[8px] font-extrabold tracking-widest text-slate-400 uppercase mt-0.5">
                  Template Marketplace
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Curated, production-grade website & application boilerplates with instant QR-code purchasing, clean TypeScript, and modern glassmorphic aesthetics.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Phase 1 Prototype Active
              </span>
            </div>
          </div>

          {/* Column 2: Marketplace */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/templates" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  All Templates
                </Link>
              </li>
              <li>
                <Link href="/templates?category=saas" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  SaaS Boilerplates
                </Link>
              </li>
              <li>
                <Link href="/templates?category=website" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Websites & Portfolios
                </Link>
              </li>
              <li>
                <Link href="/templates?category=mobile" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Mobile & PWA Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Features & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Features
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <QrLuxury className="w-4 h-4 shrink-0 text-amber-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Instant QR-Code Checkout</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldLuxury className="w-4 h-4 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Commercial License Included</span>
              </li>
              <li className="flex items-center gap-2">
                <DatabaseLuxury className="w-4 h-4 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Zero UI Changes to Add Templates</span>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-indigo-500 inline-flex items-center gap-1 mt-1">
                  Contact Support →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Dev notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Developer Mode
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Equipped with mock credentials, QR code simulators, and seed data. Explore freely without real credit card credentials.
            </p>
            <div className="p-3 rounded-xl glass-card border border-white/40 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Demo Credentials:</p>
              <p>Email: <span className="font-mono text-indigo-500">demo@templestore.dev</span></p>
              <p>Password: <span className="font-mono text-indigo-500">password123</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Templestore. Designed for elite developers & designers.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/contact" className="hover:underline">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
