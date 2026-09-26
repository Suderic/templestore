'use client';

import React, { useState, useMemo } from 'react';
import { 
  X, 
  CalendarDays, 
  Check, 
  Users, 
  User, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  TreePine,
  Coffee,
  Flame,
  Download
} from 'lucide-react';
import { RESORT_ROOMS, RESORT_ADDONS } from './data';
import { BookingState, DeviceMode } from './types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  onToast: (msg: string) => void;
  deviceMode?: DeviceMode;
}

export function AlderAshBookingModal({ isOpen, onClose, preselectedRoomId, onToast, deviceMode = 'desktop' }: Props) {
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';

  const [booking, setBooking] = useState<BookingState>({
    step: 1,
    stayType: 'couple',
    roomId: preselectedRoomId || 'creekside-suite',
    checkIn: '2026-10-15',
    checkOut: '2026-10-18',
    guests: 2,
    selectedAddOns: ['add-tub'],
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const selectedRoom = useMemo(() => {
    return RESORT_ROOMS.find((r) => r.id === booking.roomId) || RESORT_ROOMS[0];
  }, [booking.roomId]);

  const nights = useMemo(() => {
    if (!booking.checkIn || !booking.checkOut) return 1;
    const start = new Date(booking.checkIn);
    const end = new Date(booking.checkOut);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [booking.checkIn, booking.checkOut]);

  const addOnsTotal = useMemo(() => {
    return booking.selectedAddOns.reduce((total, id) => {
      const item = RESORT_ADDONS.find((a) => a.id === id);
      return total + (item ? item.price : 0);
    }, 0);
  }, [booking.selectedAddOns]);

  const subtotal = useMemo(() => {
    return selectedRoom.rate * nights;
  }, [selectedRoom, nights]);

  const grandTotal = useMemo(() => {
    return subtotal + addOnsTotal;
  }, [subtotal, addOnsTotal]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (booking.step === 4) {
      if (!booking.fullName.trim() || !booking.email.trim()) {
        onToast('Please enter your full name and email to confirm your stay.');
        return;
      }
      const randomId = 'ALDER-RES-' + Math.floor(1000 + Math.random() * 9000);
      setBooking((prev) => ({ ...prev, step: 5, confirmationId: randomId }));
      onToast(`Reservation confirmed! Reference: ${randomId}`);
      return;
    }
    setBooking((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const handleBack = () => {
    if (booking.step > 1) {
      setBooking((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const toggleAddOn = (id: string) => {
    setBooking((prev) => {
      const exists = prev.selectedAddOns.includes(id);
      return {
        ...prev,
        selectedAddOns: exists
          ? prev.selectedAddOns.filter((x) => x !== id)
          : [...prev.selectedAddOns, id]
      };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className={`relative w-full ${
          isMobile ? 'max-w-[390px] p-4 sm:p-5' : isTablet ? 'max-w-[640px] p-6' : 'max-w-2xl p-6 sm:p-8'
        } bg-[#0B241C] border border-[#F5EFE3]/20 rounded-3xl shadow-2xl text-[#F5EFE3] my-auto overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#D98F4A]/10 rounded-full blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#3E7A5C]/20 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#F5EFE3]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#D98F4A]/15 border border-[#D98F4A]/30 flex items-center justify-center text-[#D98F4A] shrink-0">
              <TreePine className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-[#F5EFE3]">
                {booking.step === 5 ? 'Reservation Confirmed' : 'Reserve Your Cabin'}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#E8DCC3]/60">
                {booking.step === 5 ? 'Pack your bags for the Cascade forest' : `Step ${booking.step} of 4: Personalized configuration`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8DCC3] hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {booking.step < 5 && (
          <div className="flex items-center gap-2 py-3 sm:py-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  booking.step >= s ? 'bg-[#D98F4A]' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Stay Type */}
        {booking.step === 1 && (
          <div className="py-3 sm:py-4 space-y-4">
            <div className="text-center max-w-md mx-auto mb-4 sm:mb-6">
              <h4 className="font-serif text-lg sm:text-xl text-[#F5EFE3]">Who will be joining you?</h4>
              <p className="text-xs text-[#E8DCC3]/70 mt-1">
                Select your retreat style to filter the most fitting accommodations.
              </p>
            </div>

            <div className={`grid ${isMobile ? 'grid-cols-1 gap-2.5' : isTablet ? 'grid-cols-3 gap-3' : 'grid-cols-1 sm:grid-cols-3 gap-3'}`}>
              <button
                type="button"
                onClick={() => setBooking({ ...booking, stayType: 'individual', roomId: 'solo-cabin', guests: 1 })}
                className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isMobile ? 'flex items-center justify-between text-left' : 'flex flex-col items-center text-center'
                } ${
                  booking.stayType === 'individual'
                    ? 'bg-[#F5EFE3]/10 border-[#D98F4A] shadow-md shadow-[#D98F4A]/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className={isMobile ? 'flex items-center gap-3' : 'flex flex-col items-center'}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center sm:mb-3 text-[#D98F4A] shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-serif text-sm sm:text-base font-medium block">Solo Retreat</span>
                    <span className="text-[11px] sm:text-xs text-[#E8DCC3]/60 block sm:mt-1">1 Guest • Writing desk</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#D98F4A] shrink-0 sm:mt-3">From $210/nt</span>
              </button>

              <button
                type="button"
                onClick={() => setBooking({ ...booking, stayType: 'couple', roomId: 'creekside-suite', guests: 2 })}
                className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isMobile ? 'flex items-center justify-between text-left' : 'flex flex-col items-center text-center'
                } ${
                  booking.stayType === 'couple'
                    ? 'bg-[#F5EFE3]/10 border-[#D98F4A] shadow-md shadow-[#D98F4A]/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className={isMobile ? 'flex items-center gap-3' : 'flex flex-col items-center'}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center sm:mb-3 text-[#D98F4A] shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-serif text-sm sm:text-base font-medium block">Couple / Pair</span>
                    <span className="text-[11px] sm:text-xs text-[#E8DCC3]/60 block sm:mt-1">2 Guests • Soaking tub</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#D98F4A] shrink-0 sm:mt-3">From $395/nt</span>
              </button>

              <button
                type="button"
                onClick={() => setBooking({ ...booking, stayType: 'group', roomId: 'family-cabin', guests: 4 })}
                className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isMobile ? 'flex items-center justify-between text-left' : 'flex flex-col items-center text-center'
                } ${
                  booking.stayType === 'group'
                    ? 'bg-[#F5EFE3]/10 border-[#D98F4A] shadow-md shadow-[#D98F4A]/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className={isMobile ? 'flex items-center gap-3' : 'flex flex-col items-center'}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center sm:mb-3 text-[#D98F4A] shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-serif text-sm sm:text-base font-medium block">Family &amp; Group</span>
                    <span className="text-[11px] sm:text-xs text-[#E8DCC3]/60 block sm:mt-1">4–10 Guests • Lodge</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#D98F4A] shrink-0 sm:mt-3">From $540/nt</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Room Selection & Stay Dates */}
        {booking.step === 2 && (
          <div className="py-3 sm:py-4 space-y-4 sm:space-y-5">
            {/* Dates row */}
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 sm:grid-cols-2 gap-4'}`}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={booking.checkIn}
                  onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={booking.checkOut}
                  onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none"
                />
              </div>
            </div>

            {/* Room selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-2">
                Select Cabin / Suite
              </label>
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-1 sm:grid-cols-2 gap-2.5'} max-h-56 overflow-y-auto pr-1`}>
                {RESORT_ROOMS.map((r) => {
                  const isSelected = r.id === booking.roomId;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setBooking({ ...booking, roomId: r.id })}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F5EFE3]/15 border-[#D98F4A] shadow-sm'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div>
                        <p className="font-serif text-sm font-medium text-[#F5EFE3]">{r.name}</p>
                        <p className="text-[11px] text-[#E8DCC3]/60">{r.capacity} • {r.beds}</p>
                      </div>
                      <span className="font-serif text-sm font-bold text-[#D98F4A]">
                        ${r.rate}<span className="text-[10px] font-sans font-normal text-[#E8DCC3]/60">/nt</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Pricing Summary Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#E8DCC3]/70">{nights} night{nights > 1 ? 's' : ''} in {selectedRoom.name}</span>
                <p className="text-[11px] text-[#E8DCC3]/50">Includes farm breakfast daily</p>
              </div>
              <span className="font-serif text-lg font-bold text-[#F5EFE3]">
                ${subtotal.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* STEP 3: Curated Add-ons */}
        {booking.step === 3 && (
          <div className="py-4 space-y-4">
            <div className="text-center max-w-md mx-auto mb-2">
              <h4 className="font-serif text-lg text-[#F5EFE3]">Enhance Your Forest Retreat</h4>
              <p className="text-xs text-[#E8DCC3]/70 mt-1">
                Select any handcrafted wilderness experiences to include with your stay.
              </p>
            </div>

            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {RESORT_ADDONS.map((add) => {
                const isChecked = booking.selectedAddOns.includes(add.id);
                return (
                  <div
                    key={add.id}
                    onClick={() => toggleAddOn(add.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-[#F5EFE3]/15 border-[#D98F4A]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-[#D98F4A] border-[#D98F4A] text-[#120B04]' : 'border-white/30'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#F5EFE3]">{add.name}</p>
                        <p className="text-[11px] text-[#E8DCC3]/60">{add.description}</p>
                      </div>
                    </div>
                    <span className="font-serif text-xs font-bold text-[#D98F4A] shrink-0 ml-3">
                      +${add.price}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-[#E8DCC3]/70">Add-ons Total</span>
              <span className="font-serif text-sm font-bold text-[#D98F4A]">
                ${addOnsTotal.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* STEP 4: Guest Details */}
        {booking.step === 4 && (
          <div className="py-3 sm:py-4 space-y-3 sm:space-y-4">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 sm:grid-cols-2 gap-3.5'}`}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. David Vance"
                  value={booking.fullName}
                  onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="david@example.com"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none"
                />
              </div>
            </div>

            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-1 sm:grid-cols-2 gap-3.5'}`}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 019-2244"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1">
                  Guest Count
                </label>
                <select
                  value={booking.guests}
                  onChange={(e) => setBooking({ ...booking, guests: parseInt(e.target.value, 10) })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B241C] border border-white/15 text-[#F5EFE3] text-sm focus:border-[#D98F4A] outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1">
                Dietary Preferences or Special Requests
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Vegetarian breakfast, late 7pm check-in, extra wool blankets..."
                value={booking.notes}
                onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-[#F5EFE3] text-xs focus:border-[#D98F4A] outline-none resize-none"
              />
            </div>

            {/* Total breakdown */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-[#E8DCC3]/80">Estimated Total ({nights} nights + add-ons)</span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#D98F4A]">
                ${grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* STEP 5: Instant Confirmation */}
        {booking.step === 5 && (
          <div className="py-4 sm:py-6 text-center space-y-4 sm:space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D98F4A]/15 text-[#D98F4A] border border-[#D98F4A]/30">
                {booking.confirmationId}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#F5EFE3] mt-2">Your Forest Stay is Confirmed</h4>
              <p className="text-xs text-[#E8DCC3]/70 mt-1 max-w-md mx-auto">
                We have sent your confirmation packet and arrival directions to <strong className="text-white">{booking.email || 'your email'}</strong>.
              </p>
            </div>

            <div className="max-w-md mx-auto p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#E8DCC3]/60">Cabin Reserved</span>
                <span className="font-semibold text-white">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#E8DCC3]/60">Dates</span>
                <span className="font-semibold text-white">{booking.checkIn} to {booking.checkOut} ({nights} nights)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#E8DCC3]/60">Guests</span>
                <span className="font-semibold text-white">{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-[#E8DCC3]">Total Balance</span>
                <span className="text-[#D98F4A]">${grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className={`pt-2 flex ${isMobile ? 'flex-col gap-2' : 'flex-col sm:flex-row gap-3'} items-center justify-center`}>
              <button
                onClick={() => {
                  onToast('Calendar file downloaded! See you in the Cascades.');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarDays className="w-4 h-4 text-[#D98F4A]" />
                <span>Add to Calendar</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#120B04] text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer Controls */}
        {booking.step < 5 && (
          <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-2">
            {booking.step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold text-[#E8DCC3] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-[10px] sm:text-[11px] text-[#E8DCC3]/40">Free cancellation up to 7 days</span>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#120B04] text-xs font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>{booking.step === 4 ? (isMobile ? 'Confirm' : 'Confirm Reservation') : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
