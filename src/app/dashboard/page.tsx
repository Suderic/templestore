'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { getAllTemplates } from '@/data/templates';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  FileCode, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  User as UserIcon, 
  Settings, 
  Receipt, 
  Layers, 
  Sparkles,
  Key,
  LogOut,
  AlertCircle,
  Clock,
  Printer
} from 'lucide-react';
import { PurchaseRecord } from '@/types';

export default function DashboardPage() {
  const { user, isAuthenticated, isDevMode, purchases, loginAsSeedUser, logout, hasPurchased } = useAuth();
  const allTemplates = getAllTemplates();

  const [activeTab, setActiveTab] = useState<'templates' | 'history' | 'settings'>('templates');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [selectedReceipt, setSelectedReceipt] = useState<PurchaseRecord | null>(null);

  // Settings form local state
  const [profileName, setProfileName] = useState(user?.name || 'Alex Designer');
  const [profileEmail, setProfileEmail] = useState(user?.email || 'demo@templestore.dev');
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Determine user's purchased templates
  const purchasedTemplates = allTemplates.filter((t) => hasPurchased(t.id));

  const handleCopyLicense = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSimulateDownload = async (templateId: string, templateName: string) => {
    setDownloadingId(templateId);
    await new Promise((r) => setTimeout(r, 1200));
    setDownloadingId(null);
    alert(`[Simulated Download] Downloading full source code archive: ${templateName.toLowerCase().replace(/\s+/g, '-')}-v1.0.0.zip`);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  // If not logged in and not in dev bypass mode
  if (!isAuthenticated && !isDevMode) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mx-auto text-indigo-500">
          <UserIcon className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Sign In Required
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          This dashboard is auth-protected. Sign in with your account or use the local dev testing quick-login below.
        </p>

        <div className="p-4 rounded-2xl glass-card border border-white/40 dark:border-white/10 space-y-2">
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            Quick Dev Test Logins:
          </p>
          <Button
            variant="primary"
            size="sm"
            className="w-full justify-center"
            onClick={() => loginAsSeedUser('usr-001')}
          >
            Sign in as Alex Designer (2 items)
          </Button>
          <Button
            variant="glass"
            size="sm"
            className="w-full justify-center"
            onClick={() => loginAsSeedUser('usr-002')}
          >
            Sign in as Sarah Developer (1 item)
          </Button>
        </div>

        <Link href="/auth/signin" className="inline-block text-xs text-indigo-500 hover:underline">
          Go to Standard Sign In page →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      
      {/* User Header Profile Banner */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces'}
              alt={user?.name || 'User Avatar'}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                {user?.name || 'Developer Seed User'}
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Verified Buyer
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
              {user?.email || 'demo@templestore.dev'} • Member since {user?.joinedDate || 'Aug 2026'}
            </p>
          </div>
        </div>

        {/* Quick Dev Switcher on Header */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => loginAsSeedUser('usr-001')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              user?.id === 'usr-001'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Alex (2 items)
          </button>
          <button
            onClick={() => loginAsSeedUser('usr-002')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              user?.id === 'usr-002'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Sarah (1 item)
          </button>
          <Button variant="ghost" size="sm" onClick={logout} className="text-xs text-rose-500">
            <LogOut className="w-3.5 h-3.5 mr-1" /> Sign Out
          </Button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass-card border border-white/50 dark:border-white/10">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Purchased Templates</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            {purchasedTemplates.length}
          </p>
          <p className="text-[11px] text-indigo-500 mt-1">Instant Source Download</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/50 dark:border-white/10">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Active Licenses</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            {purchases.length}
          </p>
          <p className="text-[11px] text-emerald-500 mt-1">Commercial License (12 Deploys/Yr)</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/50 dark:border-white/10">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Spent</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
            ${purchases.reduce((acc, p) => acc + p.amount, 0)}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">Via QR & Card Checkout</p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-white/50 dark:border-white/10">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Updates Support</p>
          <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            Active
          </p>
          <p className="text-[11px] text-slate-400 mt-1">Lifetime Git Access</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200/60 dark:border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'templates'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>My Templates & Downloads ({purchasedTemplates.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Receipt className="w-4 h-4" />
          <span>Purchase History ({purchases.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Account Settings</span>
        </button>
      </div>

      {/* TAB 1: MY TEMPLATES & DOWNLOADS */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          {purchasedTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {purchasedTemplates.map((template) => {
                const matchPurchase = purchases.find((p) => p.templateId === template.id);
                const licenseKey = matchPurchase?.licenseKey || `${template.name.slice(0, 4).toUpperCase()}-LIC-DEMO-2026`;

                return (
                  <div
                    key={template.id}
                    className="p-6 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-lg flex flex-col justify-between space-y-5"
                  >
                    <div>
                      {/* Image & Title Header */}
                      <div className="flex gap-4 items-start">
                        <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-white/40 dark:border-white/10 bg-slate-900">
                          <img
                            src={template.previewImages[0]?.url}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                            {template.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {template.name}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Version {template.version} • {template.fileSize}
                          </p>
                        </div>
                      </div>

                      {/* License Key box */}
                      <div className="mt-4 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs">
                        <div>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase">Commercial License Key</p>
                          <p className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{licenseKey}</p>
                        </div>
                        <button
                          onClick={() => handleCopyLicense(licenseKey)}
                          className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                          title="Copy license key"
                        >
                          {copiedKey === licenseKey ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 border-t border-slate-200/50 dark:border-white/10 flex flex-col sm:flex-row gap-2.5">
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 justify-center shadow-indigo-500/25"
                        isLoading={downloadingId === template.id}
                        onClick={() => handleSimulateDownload(template.id, template.name)}
                      >
                        <Download className="w-4 h-4 mr-1.5" />
                        <span>Download ZIP ({template.fileSize})</span>
                      </Button>

                      <Link href={`/templates/${template.slug}`} className="flex-1">
                        <Button variant="glass" size="sm" className="w-full justify-center">
                          <span>View Template Page</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center rounded-3xl glass-card border border-white/50 dark:border-white/10 max-w-md mx-auto p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl glass-panel mx-auto flex items-center justify-center text-slate-400">
                <FileCode className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                No templates purchased yet
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You haven't purchased any templates with this user account. Use the Quick QR or Direct Checkout button on any template to instantly test purchasing!
              </p>
              <Link href="/templates">
                <Button variant="primary" size="sm">
                  Browse Template Gallery
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PURCHASE HISTORY */}
      {activeTab === 'history' && (
        <div className="rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Orders & Transactions
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                All QR-code, crypto, and direct checkout payments associated with your profile.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/50 dark:bg-slate-950/40 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-200/50 dark:border-white/5">
                <tr>
                  <th className="py-3 px-6">Order ID</th>
                  <th className="py-3 px-6">Template</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Payment Method</th>
                  <th className="py-3 px-6">Amount</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/40 dark:divide-white/5 text-slate-700 dark:text-slate-200 font-medium">
                {purchases.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-mono text-indigo-500 font-bold">{p.orderNumber}</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">{p.templateName}</td>
                    <td className="py-4 px-6 text-slate-400">{p.date}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-white/5">
                        {p.paymentMethod.includes('QR') ? (
                          <QrCode className="w-3 h-3 text-indigo-500" />
                        ) : (
                          <CreditCard className="w-3 h-3 text-purple-500" />
                        )}
                        <span>{p.paymentMethod}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">${p.amount}.00</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold">
                        <Check className="w-3 h-3" /> Completed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedReceipt(p)}
                        className="text-xs text-indigo-500 hover:text-indigo-400 hover:underline font-semibold cursor-pointer"
                      >
                        View Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: ACCOUNT & SETTINGS */}
      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl glass-card border border-white/60 dark:border-white/10 space-y-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Profile & Preferences
            </h3>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <Input
                label="Full Name"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={profileEmail}
                onChange={(e) => setProfileEmail(e.target.value)}
                required
                helperText="Invoices and software updates will be sent to this email."
              />

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md">
                  {settingsSaved ? 'Saved Successfully ✓' : 'Save Changes'}
                </Button>
              </div>
            </form>

            {/* API Keys Simulator */}
            <div className="pt-6 border-t border-slate-200/50 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    CLI Deployment Access Token
                  </h4>
                  <p className="text-xs text-slate-400">
                    Used to pull private template repositories using our CLI.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert('Generated new test token: ts_sec_99182_live_token')}
                >
                  <Key className="w-3.5 h-3.5 mr-1" />
                  Generate Token
                </Button>
              </div>
              <div className="p-3 rounded-xl font-mono text-xs glass-panel border border-white/40 dark:border-white/10 text-slate-500">
                ts_live_8f93e0b2401827471928014819a
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-6 rounded-3xl glass-panel border border-white/40 dark:border-white/10 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Local Dev Seed Notes
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              This dashboard is pre-populated with realistic mock purchases, licenses, and invoice history so the UI can be comprehensively tested without external services.
            </p>
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400">
              💡 <strong>Pro Tip:</strong> When you purchase a template from the gallery via QR Code or Direct Checkout, it will automatically appear in this dashboard!
            </div>
          </div>
        </div>
      )}

      {/* RECEIPT MODAL */}
      {selectedReceipt && (
        <Modal
          isOpen={!!selectedReceipt}
          onClose={() => setSelectedReceipt(null)}
          title="Official Purchase Receipt"
          description={`Transaction ${selectedReceipt.orderNumber}`}
          maxWidth="md"
        >
          <div className="space-y-4 py-2 text-xs">
            <div className="p-4 rounded-xl glass-panel border border-white/40 dark:border-white/10 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Order Number:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{selectedReceipt.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Item Purchased:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedReceipt.templateName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date:</span>
                <span className="text-slate-800 dark:text-slate-200">{selectedReceipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Payment Gateway:</span>
                <span className="text-slate-800 dark:text-slate-200">{selectedReceipt.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200/50 dark:border-white/10 pt-2 text-sm font-black">
                <span className="text-slate-900 dark:text-white">Total Paid:</span>
                <span className="text-indigo-600 dark:text-indigo-400">${selectedReceipt.amount}.00 USD</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
              >
                <Printer className="w-3.5 h-3.5 mr-1" />
                Print / Save PDF
              </Button>
              <Button variant="primary" size="sm" onClick={() => setSelectedReceipt(null)}>
                Close Receipt
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
