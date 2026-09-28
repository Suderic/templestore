'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Package,
  Layers,
  Video,
  Check
} from 'lucide-react';
import { StorePage } from '../types';

interface ShowroomsPageViewProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: StorePage) => void;
}

export function ShowroomsPageView({ onNavigateHome, onNavigatePage }: ShowroomsPageViewProps) {
  // Booking Form State
  const [bookingLocation, setBookingLocation] = useState<'sydney' | 'melbourne' | 'auckland' | 'virtual'>('sydney');
  const [consultType, setConsultType] = useState('full-room');
  const [bookingDate, setBookingDate] = useState('2026-10-06');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Swatch Box State
  const [selectedSwatches, setSelectedSwatches] = useState<string[]>([
    'ivory-boucle',
    'white-oak',
    'brushed-brass'
  ]);
  const [swatchAddress, setSwatchAddress] = useState('');
  const [swatchSubmitted, setSwatchSubmitted] = useState(false);

  const swatchOptions = [
    { id: 'ivory-boucle', name: 'Ivory Wool Bouclé', hex: '#F4EBD9', type: 'Upholstery' },
    { id: 'charcoal-boucle', name: 'Charcoal Bouclé', hex: '#292524', type: 'Upholstery' },
    { id: 'white-oak', name: 'Solid European White Oak', hex: '#D6C7B2', type: 'Hardwood' },
    { id: 'smoked-walnut', name: 'Smoked American Walnut', hex: '#45322E', type: 'Hardwood' },
    { id: 'brushed-brass', name: 'Raw Spun Brushed Brass', hex: '#D4AF37', type: 'Metal' },
    { id: 'french-flax', name: 'Normandy Washed Flax Linen', hex: '#E7DFD5', type: 'Textile' }
  ];

  const handleToggleSwatch = (id: string) => {
    if (selectedSwatches.includes(id)) {
      setSelectedSwatches(selectedSwatches.filter((s) => s !== id));
    } else {
      if (selectedSwatches.length < 4) {
        setSelectedSwatches([...selectedSwatches, id]);
      }
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setBookingSubmitted(true);
  };

  const handleSwatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!swatchAddress) return;
    setSwatchSubmitted(true);
  };

  const showrooms = [
    {
      city: 'Sydney',
      neighborhood: 'Surry Hills Flagship',
      address: '142 Crown Street, Surry Hills NSW 2010',
      hours: 'Tue–Sat: 10am – 6pm • Sun: 11am – 5pm (Closed Mon)',
      phone: '+61 2 9188 4400',
      email: 'sydney@buyo.store',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Complete Furniture & Seating Gallery',
        'Darkroom Architectural Lighting Studio',
        'Full Fabric & Timber Swatch Library',
        'Complimentary Barista Coffee & Valet Parking'
      ]
    },
    {
      city: 'Melbourne',
      neighborhood: 'Fitzroy Atelier',
      address: '88 Gertrude Street, Fitzroy VIC 3065',
      hours: 'Tue–Sat: 10am – 6pm • Sun: 11am – 5pm (Closed Mon)',
      phone: '+61 3 9419 8820',
      email: 'melbourne@buyo.store',
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Acoustic Hi-Fi Listening Study',
        'Large-Format Solid Oak Dining Tables',
        'Trade Consultation Boardroom',
        'Same-Day Swatch Dispatch Service'
      ]
    },
    {
      city: 'Auckland',
      neighborhood: 'Ponsonby Design Studio',
      address: '210 Ponsonby Road, Ponsonby, Auckland 1011',
      hours: 'Wed–Sun: 10am – 5pm (Closed Mon & Tue)',
      phone: '+64 9 360 4422',
      email: 'auckland@buyo.store',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Handmade Ceramics & Tableware Gallery',
        'Custom Credenza Dimension Desk',
        'Linen Bedding Sensory Wall',
        'NZ-Wide White Glove Freight Logistics'
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* 1. BREADCRUMBS */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-white/10 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-amber-500 font-medium transition-colors cursor-pointer"
          >
            Buyo
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-900 dark:text-white">
            Studios &amp; Flagship Showrooms
          </span>
        </div>
      </div>

      {/* 2. HERO */}
      <div className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Sydney • Melbourne • Auckland</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Experience Form, Light &amp; Texture in Person.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Step inside our physical ateliers to test the tactile warmth of kiln-dried white oak, immerse yourself in our acoustic listening lounges, and explore full material libraries under calibrated natural lighting.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SHOWROOM CARDS */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showrooms.map((room, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/90 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.neighborhood}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-white/10">
                    {room.city}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {room.neighborhood}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{room.address}</span>
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-white/5 pt-3">
                    <div className="flex items-start gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{room.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${room.phone}`} className="hover:text-amber-500 transition-colors">
                        {room.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${room.email}`} className="hover:text-amber-500 transition-colors">
                        {room.email}
                      </a>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 dark:border-white/5 pt-3 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Atelier Features:
                    </span>
                    {room.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Check className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="text-[11px]">{h}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setBookingLocation(room.city.toLowerCase() as any);
                    const el = document.getElementById('consultation-booking');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-400 hover:text-slate-950 font-bold text-xs text-slate-900 dark:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit to {room.city}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE CONSULTATION BOOKING ENGINE */}
      <section id="consultation-booking" className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                1-on-1 Interior Design Styling
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Schedule a Private Atelier Appointment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                Reserve 45 minutes with a dedicated interior architect to explore room dimensions, lighting levels, and material harmonies.
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Consultation Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900 dark:text-white">{guestName}</span>. 
                  A calendar invite for {bookingLocation.toUpperCase()} on {bookingDate} at {bookingTime} has been sent to {guestEmail}.
                </p>
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Location Picker */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                    1. Choose Showroom Location
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'sydney', name: 'Sydney (Surry Hills)' },
                      { id: 'melbourne', name: 'Melbourne (Fitzroy)' },
                      { id: 'auckland', name: 'Auckland (Ponsonby)' },
                      { id: 'virtual', name: 'Virtual Video (Zoom)' }
                    ].map((loc) => (
                      <button
                        type="button"
                        key={loc.id}
                        onClick={() => setBookingLocation(loc.id as any)}
                        className={`p-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer text-left ${
                          bookingLocation === loc.id
                            ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400'
                            : 'border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consultation Focus */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                    2. Purpose of Consultation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'full-room', title: 'Complete Living Room Curation', desc: 'Furniture, layout & scale' },
                      { id: 'lighting-plan', title: 'Architectural Lighting Plan', desc: 'Kelvin temp & luminaire count' },
                      { id: 'trade-spec', title: 'Architect & Trade Specs', desc: 'Commercial quantity pricing' }
                    ].map((c) => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setConsultType(c.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          consultType === c.id
                            ? 'bg-amber-500/15 border-amber-500'
                            : 'border-slate-200 dark:border-white/10 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {c.title}
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          {c.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white cursor-pointer"
                    >
                      <option>10:00 AM – 10:45 AM</option>
                      <option>11:00 AM – 11:45 AM</option>
                      <option>01:30 PM – 02:15 PM</option>
                      <option>03:00 PM – 03:45 PM</option>
                      <option>04:30 PM – 05:15 PM</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Your Full Name
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. marcus@atelier.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
                >
                  Confirm Appointment Request
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* 5. COMPLIMENTARY MATERIAL SWATCH BOX ORDER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-950 text-white border border-white/15 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Can't Visit in Person?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Order a Complimentary Material Swatch Kit
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Touch our materials in your own home lighting before ordering. Select up to 4 tactile swatches below; we will dispatch them to your doorstep free of charge within 24 hours.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {swatchOptions.map((s) => {
                const isSelected = selectedSwatches.includes(s.id);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => handleToggleSwatch(s.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-400 bg-amber-500/10 text-white font-bold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full border border-black/30 shrink-0"
                      style={{ backgroundColor: s.hex }}
                    />
                    <div className="truncate">
                      <span className="text-xs block truncate">{s.name}</span>
                      <span className="text-[9px] text-slate-500">{s.type}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-amber-400">
              Selected: {selectedSwatches.length} of 4 swatches included
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {swatchSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Swatch Kit Dispatched!
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Your curated material samples are en route to {swatchAddress}. Dispatched via express courier.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSwatchSubmit} className="space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Package className="w-4 h-4 text-amber-400" />
                  <span>Where should we dispatch your kit?</span>
                </h4>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">
                    Street Address &amp; Postcode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 42 St Georges Rd, Toorak VIC 3142"
                    value={swatchAddress}
                    onChange={(e) => setSwatchAddress(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-slate-900 border border-white/15 text-xs text-white placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={selectedSwatches.length === 0}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Dispatch Free Swatch Box →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
