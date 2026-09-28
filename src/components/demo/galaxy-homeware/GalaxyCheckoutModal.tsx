'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  CreditCard, 
  Lock, 
  ArrowRight,
  PackageCheck,
  Check
} from 'lucide-react';
import { CartItem } from './types';

interface GalaxyCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export function GalaxyCheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}: GalaxyCheckoutModalProps) {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: 'architect@studio-lumina.com',
    firstName: 'Marcus',
    lastName: 'Vance',
    address: '42 St Georges Road',
    apartment: 'Level 2 Penthouse',
    city: 'Toorak',
    state: 'VIC',
    postcode: '3142',
    deliveryNote: 'Room of choice placement on Level 2.'
  });

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, it) => acc + it.unitPrice * it.quantity, 0);
  const orderNumber = 'LU-' + Math.floor(10000 + Math.random() * 90000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onOrderCompleted();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      
      {/* Translucent Backdrop */}
      <div 
        onClick={step === 'details' ? onClose : undefined}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-white/40 dark:border-white/10 shadow-2xl shadow-black/70 p-5 sm:p-8 z-10 animate-in zoom-in-95 duration-250 overflow-hidden">
        
        {/* Close Button */}
        {step === 'details' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {step === 'details' ? (
          <div>
            {/* Header */}
            <div className="pb-4 border-b border-slate-200/70 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Buyo Express Checkout
                </span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  White-Glove Shipping &amp; Payment
                </h2>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit Encrypted</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-6">
              
              {/* Order Summary Snapshot */}
              <div className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">Ordering ({items.length} items):</span>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 truncate max-w-sm">
                    {items.map(it => `${it.product.name} (x${it.quantity})`).join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-slate-900 dark:text-white">
                    ${rawSubtotal.toFixed(0)} AUD
                  </span>
                  <span className="text-[10px] text-emerald-500 font-bold block">Free In-Room Delivery</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  1. Contact Information
                </h3>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Email address for dispatch &amp; delivery appointment
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Delivery Destination (Room-of-Choice Service)
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Apt / Suite</label>
                    <input
                      type="text"
                      value={formData.apartment}
                      onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">City / Suburb</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Postcode</label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Payment Method
                </h3>
                
                <div className="p-3.5 rounded-2xl border border-amber-500 bg-amber-500/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Credit Card / Debit</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span>VISA</span> • <span>MASTERCARD</span> • <span>AMEX</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    4 interest-free fortnightly payments of ${(rawSubtotal / 4).toFixed(2)} available with zero surcharge.
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-400/25 transition-all cursor-pointer"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Authorizing Order...</span>
                  </div>
                ) : (
                  <>
                    <span>Confirm Order • ${rawSubtotal.toFixed(0)} AUD</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                Payment Authorized
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Thank You for Your Order!
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Your order <span className="font-mono font-bold text-slate-900 dark:text-white">#{orderNumber}</span> has been confirmed. 
                Our white-glove logistics team will coordinate an in-home delivery time with you.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Order ID:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">#{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Delivery Destination:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Handling Service:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">White-Glove Room of Choice</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 dark:border-white/10 pt-2 font-bold">
                <span>Total Paid:</span>
                <span className="text-sm font-black text-slate-900 dark:text-white">${rawSubtotal.toFixed(0)} AUD</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer shadow-md"
            >
              Continue Shopping at Buyo
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
