'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  QrCode, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Star, 
  Download,
  Code2,
  Lock,
  ChevronRight,
  TrendingUp,
  Boxes
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TemplateCard } from '@/components/templates/TemplateCard';
import { getAllTemplates, getFeaturedTemplates } from '@/data/templates';
import { 
  LogoMark, 
  QrLuxury, 
  ShieldLuxury, 
  DownloadLuxury, 
  DiamondSparkle,
  BrowseLuxury,
  DatabaseLuxury,
  PaletteLuxury,
  CodeLuxury
} from '@/components/ui/Icons';

export default function HomePage() {
  const featuredTemplates = getFeaturedTemplates();
  const allTemplates = getAllTemplates();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const steps = [
    {
      number: '01',
      title: 'Browse & Inspect',
      desc: 'Explore meticulously designed, clean-coded Next.js & React templates with responsive previews across all screen sizes.',
      icon: <BrowseLuxury className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'Buy via QR or Checkout',
      desc: 'Instant QR code payment with crypto/UPI or seamless 1-click card checkout. No long forms or waiting.',
      icon: <QrLuxury className="w-5 h-5 text-amber-500" />,
    },
    {
      number: '03',
      title: 'Instant Download & Deploy',
      desc: 'Access your source code, Figma design files, license key, and documentation immediately in your personal dashboard.',
      icon: <DownloadLuxury className="w-5 h-5" />,
    },
  ];

  const testimonials = [
    {
      quote:
        'The natural glassmorphic palette and 8 multi-page layouts saved our resort client over two months of development. The QR payment and live booking preview blew them away.',
      author: 'David Vance',
      role: 'Founder at Cascade Alpine Retreats',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
      template: 'Alder & Ash — Forest Resort',
    },
    {
      quote:
        'Code quality is 10/10. Strict TypeScript, clean Tailwind tokens, zero spaghetti. Drop your content in and ship to Vercel in 10 minutes.',
      author: 'Sophia Lindqvist',
      role: 'Senior Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
      template: 'Aura Studio & Agency',
    },
    {
      quote:
        'Finally a template marketplace that treats developer experience as a first-class citizen. Adding new templates takes seconds.',
      author: 'Marcus Brody',
      role: 'Tech Lead & Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      template: 'Apex Modern E-Commerce',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-amber-500/35 dark:border-amber-500/25 text-xs font-semibold text-slate-800 dark:text-slate-200 mb-6 shadow-sm shadow-amber-500/10"
        >
          <LogoMark className="w-4 h-4" glow={false} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-bold">
            Templestore 1.0 Prototype
          </span>
          <span className="text-slate-400">•</span>
          <span>Next.js 14+ Architecture</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1]"
        >
          Ship your next product with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-500">
            world-class design & speed.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Curated, production-grade website and web application templates. Featuring instant QR-code purchasing, full TypeScript source code, and responsive modern design systems.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="/templates">
            <Button variant="glow" size="lg" className="w-full sm:w-auto font-bold shadow-indigo-500/25">
              <span>Explore All Templates</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="glass" size="lg" className="w-full sm:w-auto font-semibold">
              <Download className="w-4 h-4 mr-2 text-indigo-500" />
              <span>User Dashboard & Seeds</span>
            </Button>
          </Link>
        </motion.div>

        {/* Floating Glass Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-2xl glass-card border border-white/60 dark:border-white/10"
        >
          <div className="p-3 text-center flex flex-col items-center">
            <div className="flex items-center gap-1.5 justify-center mb-0.5">
              <DiamondSparkle className="w-4 h-4" />
              <p className="text-2xl font-black text-slate-900 dark:text-white">4.9/5</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Average Dev Rating</p>
          </div>
          <div className="p-3 text-center border-l border-slate-200/50 dark:border-white/10 flex flex-col items-center">
            <div className="flex items-center gap-1.5 justify-center mb-0.5">
              <QrLuxury className="w-4 h-4 text-amber-500" />
              <p className="text-2xl font-black text-slate-900 dark:text-white">&lt; 30s</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Instant QR Pay</p>
          </div>
          <div className="p-3 text-center border-l border-slate-200/50 dark:border-white/10 flex flex-col items-center">
            <div className="flex items-center gap-1.5 justify-center mb-0.5">
              <CodeLuxury className="w-4 h-4" />
              <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">TypeScript & Clean UI</p>
          </div>
          <div className="p-3 text-center border-l border-slate-200/50 dark:border-white/10 flex flex-col items-center">
            <div className="flex items-center gap-1.5 justify-center mb-0.5">
              <ShieldLuxury className="w-4 h-4" />
              <p className="text-2xl font-black text-slate-900 dark:text-white">Lifetime</p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Updates Included</p>
          </div>
        </motion.div>
      </section>

      {/* FEATURED TEMPLATES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Handpicked Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Templates
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Top-selling frameworks built with high performance, SEO optimization, and glass UI.
            </p>
          </div>

          <Link href="/templates">
            <Button variant="outline" size="sm" className="font-semibold">
              <span>View Gallery ({allTemplates.length})</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTemplates.slice(0, 3).map((template, idx) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <TemplateCard template={template} priority={idx === 0} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/60 dark:border-white/10 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              How Templestore Works
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              From preview to local development in under two minutes with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative flex flex-col p-6 rounded-2xl glass-panel border border-white/40 dark:border-white/10 hover:border-indigo-400/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom QR Callout Banner inside section */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-pink-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl glass-panel bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 border border-amber-400/30">
                <QrLuxury className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Dynamic QR Code Purchasing System
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Scan on your phone via mobile wallet, UPI, or crypto payment. Instant receipt & dashboard sync.
                </p>
              </div>
            </div>
            <Link href="/templates/alder-ash-resort">
              <Button variant="glow" size="sm">
                Try Live QR Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (ARCHITECTURAL ADVANTAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
            Engineered For Scale
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Why Developers Love Templestore
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            No bloated dependencies, no obsolete libraries. Built with modern web standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-3">
            <div className="w-11 h-11 rounded-xl glass-panel bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shadow-xs">
              <DatabaseLuxury className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Single Source Data Layer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Add new templates by dropping an entry into <code className="text-amber-500 font-mono text-[11px]">/src/data/templates.ts</code>. All filters, gallery cards, and dynamic slug pages update automatically.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-3">
            <div className="w-11 h-11 rounded-xl glass-panel bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shadow-xs">
              <PaletteLuxury className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Diverse Themes & Design Systems
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              From clean minimalist SaaS and sleek dark-mode crypto apps to subtle frosted glass interfaces. Seamless dark & light mode tokens out of the box.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-3">
            <div className="w-11 h-11 rounded-xl glass-panel bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shadow-xs">
              <ShieldLuxury className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Local Dev Testing Mode
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Pre-seeded user accounts and simulated purchases allow thorough testing of auth, downloads, and receipts without API keys or live credit cards.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Social Proof
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Trusted by 5,000+ Engineers & Studios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-white/40 dark:border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/60 dark:border-white/10 bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Ready to test your marketplace?
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Browse our dummy templates, trigger QR purchases, switch seed users, and experience the glassmorphic dashboard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/templates">
              <Button variant="glow" size="lg">
                Browse Gallery Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="glass" size="lg">
                Contact Inquiries
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
