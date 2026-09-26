'use client';

import React, { useState } from 'react';
import { Template } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';
import { Check, Send, MessageSquare } from 'lucide-react';

interface ContactInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: Template;
}

export function ContactInquiryModal({ isOpen, onClose, template }: ContactInquiryModalProps) {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [message, setMessage] = useState(
    `Hi Templestore team, I'd like to ask a few questions regarding licensing and custom extensions for "${template.name}".`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={sent ? 'Inquiry Dispatched!' : `Inquire About ${template.name}`}
      description={
        sent
          ? 'Our engineering team will respond directly to your email within 2-4 hours.'
          : 'Need custom licensing terms, invoicing, or wire transfer support? Send us a quick note.'
      }
      maxWidth="md"
    >
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />

          <Input
            label="Work Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            required
          />

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Inquiry / Custom Request
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-xl glass-input p-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 border border-slate-300/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              isLoading={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Purchase Inquiry
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-4 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
            <Check className="w-7 h-7 stroke-[3]" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">Message Delivered</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              We have attached template reference <strong className="text-slate-800 dark:text-slate-200">{template.id}</strong> to your ticket.
            </p>
          </div>
          <Button variant="glass" size="md" onClick={handleClose} className="w-full justify-center">
            Done
          </Button>
        </div>
      )}
    </Modal>
  );
}
