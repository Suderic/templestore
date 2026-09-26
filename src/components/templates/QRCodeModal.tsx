'use client';

import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { Template } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { 
  Check, 
  Copy, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  QrCode as QrIcon,
  Download
} from 'lucide-react';
import Link from 'next/link';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: Template;
}

export function QRCodeModal({ isOpen, onClose, template }: QRCodeModalProps) {
  const { recordPurchase } = useAuth();
  const [copied, setCopied] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [generatedLicense, setGeneratedLicense] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState<'USDT' | 'USDC' | 'ETH'>('USDT');

  // Realistic mock crypto payment address
  const mockWalletAddress = '0x9482aF1e96740B7e9Bf7F139C24A409A675f921D';
  // Payment payload encoded in the QR code
  const qrPayload = `ethereum:${mockWalletAddress}?value=${template.price}&token=${selectedCurrency}&orderRef=${template.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mockWalletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePayment = async () => {
    setIsVerifying(true);
    await new Promise((r) => setTimeout(r, 1200));

    const record = recordPurchase(
      template.id,
      template.name,
      template.price,
      'QR Code (USDT/Crypto)'
    );

    setGeneratedLicense(record.licenseKey);
    setIsVerifying(false);
    setPurchaseComplete(true);

    // Trigger celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
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
      title={purchaseComplete ? 'Payment Confirmed!' : `Purchase via QR Code`}
      description={
        purchaseComplete
          ? 'Your license has been activated and your template is ready to download.'
          : `Scan with any Web3 wallet or payment app to complete purchase for ${template.name}.`
      }
      maxWidth="md"
    >
      {!purchaseComplete ? (
        <div className="space-y-5">
          {/* Currency Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl glass-panel border border-white/40 dark:border-white/10 text-xs">
            <span className="font-semibold text-slate-600 dark:text-slate-300">Payment Network:</span>
            <div className="flex gap-1">
              {(['USDT', 'USDC', 'ETH'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    selectedCurrency === curr
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* QR Code Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card border border-white/50 dark:border-white/10 bg-gradient-to-b from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-950/60 shadow-lg">
            <div className="p-3.5 bg-white rounded-2xl shadow-md border border-slate-100">
              <QRCodeSVG
                value={qrPayload}
                size={190}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: '/logo-mark.png',
                  x: undefined,
                  y: undefined,
                  height: 32,
                  width: 32,
                  excavate: true,
                }}
              />
            </div>

            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>QR valid for next 14:59 mins</span>
              </div>
              <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                ${template.price}.00{' '}
                <span className="text-xs font-semibold text-indigo-500 tracking-normal">
                  ({template.price} {selectedCurrency})
                </span>
              </p>
            </div>
          </div>

          {/* Wallet address & copy */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold">Deposit Address ({selectedCurrency} / ERC-20):</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>
            <div className="p-2.5 rounded-xl font-mono text-[11px] bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 break-all select-all flex items-center justify-between">
              <span>{mockWalletAddress}</span>
            </div>
          </div>

          {/* Simulation CTA */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 space-y-2">
            <Button
              variant="glow"
              size="lg"
              className="w-full justify-center shadow-indigo-500/30"
              isLoading={isVerifying}
              onClick={handleSimulatePayment}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Simulate Instant QR Payment & Verify
            </Button>
            <p className="text-[11px] text-center text-slate-400">
              Testing locally? Click above to simulate real blockchain transaction verification instantly.
            </p>
          </div>
        </div>
      ) : (
        /* Purchase Success State */
        <div className="space-y-5 text-center py-2">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Thank you for purchasing {template.name}!
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Your license is registered and source code access has been unlocked on your dashboard.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-emerald-500/20 text-left space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">License Key:</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {generatedLicense}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Amount Paid:</span>
              <span className="font-bold text-slate-900 dark:text-white">${template.price}.00 USD</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Instant Delivery Unlocked
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
