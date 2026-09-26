'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Template } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';
import { 
  CreditCard, 
  Lock, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Download,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

interface DirectCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: Template;
}

export function DirectCheckoutModal({ isOpen, onClose, template }: DirectCheckoutModalProps) {
  const { user, recordPurchase } = useAuth();
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('921');
  const [email, setEmail] = useState(user?.email || 'demo@templestore.dev');
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 1000));

    const record = recordPurchase(
      template.id,
      template.name,
      template.price,
      'Direct Checkout'
    );

    setLicenseKey(record.licenseKey);
    setIsProcessing(false);
    setPurchaseComplete(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#3b82f6', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setPurchaseComplete(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={purchaseComplete ? 'Order Complete!' : 'Direct Checkout'}
      description={
        purchaseComplete
          ? 'Receipt and license generated. You have lifetime access to updates.'
          : 'Stripe-ready mock checkout simulation. No real money will be charged.'
      }
      maxWidth="md"
    >
      {!purchaseComplete ? (
        <form onSubmit={handleCheckout} className="space-y-4">
          {/* Order Brief */}
          <div className="p-3.5 rounded-xl glass-card border border-white/50 dark:border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Purchasing:</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{template.name}</p>
              <p className="text-[11px] text-slate-500">Commercial Single & Multi-site License</p>
            </div>
            <div className="text-right">
              <p className="text-xs line-through text-slate-400">
                ${template.originalPrice || template.price + 40}.00
              </p>
              <p className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                ${template.price}.00
              </p>
            </div>
          </div>

          {/* Email input */}
          <Input
            label="Delivery Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            helperText="License key and download instructions will be sent here."
          />

          {/* Card Mockup Input */}
          <div className="space-y-3">
            <Input
              label="Card Details (Test Sandbox)"
              leftIcon={<CreditCard className="w-4 h-4" />}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4242 4242 4242 4242"
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Expires"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                required
              />
              <Input
                label="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-900/60 p-2.5 rounded-xl">
            <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>256-bit encrypted checkout simulator. Ready for production Stripe Elements.</span>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              isLoading={isProcessing}
            >
              Pay ${template.price}.00 (Instant Test Order)
            </Button>
          </div>
        </form>
      ) : (
        /* Order Confirmed View */
        <div className="space-y-5 text-center py-2">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Order Confirmed!
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Your test order for {template.name} succeeded.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-emerald-500/20 text-left space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">License Key:</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {licenseKey}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Payment Method:</span>
              <span className="font-medium text-slate-900 dark:text-white">Credit Card (Stripe Test)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Delivery:</span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Activated in Dashboard
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <Link href="/dashboard" className="flex-1" onClick={handleReset}>
              <Button variant="primary" size="md" className="w-full justify-center">
                <Download className="w-4 h-4 mr-1.5" />
                Go to Dashboard & Download
              </Button>
            </Link>
            <Button variant="glass" size="md" onClick={handleReset}>
              Close
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
