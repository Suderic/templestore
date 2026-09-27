'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  LayoutDashboard, 
  Menu, 
  X, 
  Layers, 
  ShieldCheck, 
  LogIn, 
  LogOut,
  ChevronDown,
  User as UserIcon,
  Compass
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { LogoMark } from '@/components/ui/Icons';

export function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout, isDevMode, loginAsSeedUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Templates', href: '/templates' },
    { label: 'How it Works', href: '/#how-it-works' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  if (pathname?.startsWith('/demo')) return null;

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b ${
        isScrolled
          ? 'border-slate-200/90 dark:border-white/10 shadow-sm shadow-slate-900/5 dark:shadow-black/40'
          : 'border-slate-200/60 dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl glass-panel p-1.5 shadow-md shadow-amber-500/15 border border-amber-500/30 dark:border-amber-500/20 group-hover:scale-105 group-hover:border-amber-500/50 transition-all flex items-center justify-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
            <LogoMark className="w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">
              TEMPLE<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">STORE</span>
            </span>
            <span className="text-[9px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5">
              Marketplace
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 -z-10 border border-indigo-200/50 dark:border-indigo-800/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Auth */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* User Account / Sign In */}
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl glass-panel border border-white/40 dark:border-white/10 hover:border-indigo-400/50 transition-all cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-inner">
                  {user.name.charAt(0)}
                </div>
                <span className="hidden sm:inline-block text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <AnimatePresence>
                {userDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xl p-2 z-50"
                  >
                    <div className="px-3 py-2 border-b border-slate-200/60 dark:border-white/10 mb-1">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      Dashboard & Downloads
                    </Link>

                    <Link
                      href="/templates"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      Explore Templates
                    </Link>

                    {isDevMode && (
                      <div className="my-1.5 pt-1.5 border-t border-slate-200/60 dark:border-white/10">
                        <span className="block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Dev Switch User
                        </span>
                        <button
                          onClick={() => {
                            loginAsSeedUser('usr-001');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          👤 Switch to Alex (2 items)
                        </button>
                        <button
                          onClick={() => {
                            loginAsSeedUser('usr-002');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          👤 Switch to Sarah (1 item)
                        </button>
                      </div>
                    )}

                    <div className="pt-1 border-t border-slate-200/60 dark:border-white/10">
                      <button
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                  <LogIn className="w-3.5 h-3.5" />
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="glow" size="sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Dashboard
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-300"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 dark:bg-[#090d16]/98 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/10 px-4 py-4 space-y-2 overflow-hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive(link.href)
                    ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Theme Row */}
            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Appearance Theme:</span>
              <ThemeToggle showLabels />
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full justify-center">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Go to Dashboard
                </Button>
              </Link>
              {!isAuthenticated && (
                <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="md" className="w-full justify-center">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
