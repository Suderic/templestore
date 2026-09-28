'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  MapPin, 
  Sparkles, 
  Clock,
  CheckCircle2
} from 'lucide-react';

interface GalaxyNeedHelpWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function GalaxyNeedHelpWidget({
  isOpen,
  onToggle,
  onClose
}: GalaxyNeedHelpWidgetProps) {
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Hello and welcome to Lumina Atelier Concierge. Are you seeking styling advice, fabric swatch kits, or custom dimension orders for your home?',
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'Now' }
    ]);

    setTimeout(() => {
      let reply = 'Thank you for contacting our design atelier. Every piece comes with our 10-year craftsmanship guarantee and 30-day in-home comfort trial.';
      const low = userText.toLowerCase();
      if (low.includes('swatch') || low.includes('fabric') || low.includes('sample')) {
        reply = 'We would be delighted to send you a complimentary swatch kit with our oatmeal bouclé, French flax linen, and solid oak samples! Simply provide your mailing address.';
      } else if (low.includes('custom') || low.includes('size') || low.includes('dimension')) {
        reply = 'Yes! For dining tables and credenzas, we offer custom dimension fabrication with 4-6 week lead times. Our design team can draft 3D technical drawings.';
      } else if (low.includes('ship') || low.includes('delivery')) {
        reply = 'We provide complimentary White-Glove in-home room-of-choice setup and packaging removal on all orders over $150 across Australia & New Zealand.';
      } else if (low.includes('trade') || low.includes('architect')) {
        reply = 'Our Architectural Trade Program offers 20% trade discounts, dedicated project managers, and reserved stock allocations for licensed designers.';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: reply, time: 'Just now' }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onToggle}
          className="relative px-4 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2.5 shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer group border-2 border-white/40"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute top-2 left-2" />
          <MessageSquare className="w-4 h-4 text-slate-950" />
          <span>Design Concierge</span>
        </button>
      </div>

      {/* Translucent Concierge Dialog */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[580px] rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-slate-950/95 border border-slate-200/80 dark:border-white/15 shadow-2xl shadow-black/60 flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-4 duration-250">
          
          {/* Header */}
          <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xs">
                B
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Buyo Concierge</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-[10px] text-slate-400">Design Stylist • Available Now</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick FAQ Shortcuts */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/60 dark:border-white/5 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Quick Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Free swatch sample kit',
                'Custom table dimensions',
                'White-glove delivery'
              ].map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInputVal(q)}
                  className="px-2 py-0.5 rounded-md text-[10px] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Message Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[300px] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-400 text-slate-950 font-medium rounded-br-xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-white/5 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Direct Studio Contact Bar */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-900/80 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
              <Phone className="w-3 h-3" />
              <span>+61 2 9188 4400</span>
            </span>
            <span className="text-[10px] text-slate-400">Design Studios ANZ</span>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200/70 dark:border-white/10 flex items-center gap-2 bg-white dark:bg-slate-950">
            <input
              type="text"
              placeholder="Ask an interior stylist or request swatches..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 h-9 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500 border border-slate-200/80 dark:border-white/5"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
