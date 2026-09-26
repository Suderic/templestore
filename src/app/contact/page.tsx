'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllTemplates } from '@/data/templates';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { 
  Mail, 
  Send, 
  Check, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  FileQuestion
} from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get('template') || '';

  const templates = getAllTemplates();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [templateRef, setTemplateRef] = useState(initialRef);
  const [subject, setSubject] = useState('General Marketplace Inquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please provide a valid email';
    if (!message.trim() || message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/40 dark:border-white/10 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          Direct Developer Support
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Have questions about licensing, custom development, or need help with a template? We usually reply within 2 to 4 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
        
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-xl">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                      required
                    />
                  </div>

                  {/* Template Reference Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Related Template (Optional)
                    </label>
                    <select
                      value={templateRef}
                      onChange={(e) => setTemplateRef(e.target.value)}
                      className="w-full rounded-xl glass-input px-3.5 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                    >
                      <option value="" className="dark:bg-slate-900 text-slate-900 dark:text-white">None / General Question</option>
                      {templates.map((tpl) => (
                        <option key={tpl.id} value={tpl.id} className="dark:bg-slate-900 text-slate-900 dark:text-white">
                          {tpl.name} (${tpl.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Topic / Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl glass-input px-3.5 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                    >
                      <option value="General Marketplace Inquiry" className="dark:bg-slate-900 text-slate-900 dark:text-white">General Marketplace Inquiry</option>
                      <option value="Custom Licensing & Enterprise" className="dark:bg-slate-900 text-slate-900 dark:text-white">Custom Licensing & Enterprise</option>
                      <option value="Technical Support / Setup" className="dark:bg-slate-900 text-slate-900 dark:text-white">Technical Support / Setup</option>
                      <option value="Payment / Invoice Assistance" className="dark:bg-slate-900 text-slate-900 dark:text-white">Payment / Invoice Assistance</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you are building or ask any questions..."
                      required
                      className="w-full rounded-xl glass-input p-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 border border-slate-300/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full justify-center shadow-indigo-500/25"
                      isLoading={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </motion.form>
              ) : (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                      Thank you for contacting Templestore. Our engineering team has received your ticket and will follow up shortly.
                    </p>
                  </div>
                  <Button variant="primary" size="md" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Channels & FAQ Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Info Card */}
          <div className="p-6 rounded-3xl glass-card border border-white/60 dark:border-white/10 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Direct Contact Channels
            </h3>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-white/40 dark:border-white/10">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email Inquiries</p>
                  <p className="text-indigo-500 font-mono">support@templestore.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-white/40 dark:border-white/10">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Response Guarantee</p>
                  <p className="text-slate-400">Under 4 hours (Mon - Sat)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-white/40 dark:border-white/10">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Commercial Rights</p>
                  <p className="text-slate-400">Custom enterprise license agreements available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Mini-Widget */}
          <div className="p-6 rounded-3xl glass-card border border-white/60 dark:border-white/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
              Frequently Asked Questions
            </h4>
            <div className="space-y-2 text-xs">
              <details className="group rounded-xl glass-panel p-3 border border-white/30 dark:border-white/5 cursor-pointer">
                <summary className="font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between items-center">
                  <span>How does QR code payment work?</span>
                  <span className="text-slate-400 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  Scan the generated QR code on the template detail page with any supported Web3 or digital wallet. In this phase 1 prototype, you can also click the simulate payment button to test instant verification.
                </p>
              </details>

              <details className="group rounded-xl glass-panel p-3 border border-white/30 dark:border-white/5 cursor-pointer">
                <summary className="font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between items-center">
                  <span>Can I use the template for multiple clients?</span>
                  <span className="text-slate-400 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="mt-2 text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  Yes, all our templates include an unlimited commercial license permitting client work and SaaS application deployment.
                </p>
              </details>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
