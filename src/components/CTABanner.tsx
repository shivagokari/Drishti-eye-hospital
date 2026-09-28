import React from 'react';
import { Calendar, PhoneCall, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

interface CTABannerProps {
  onOpenAppointment: () => void;
  onOpenCallback: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenAppointment, onOpenCallback }) => {
  const whatsappUrl = `https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_CONFIG.whatsappMessage)}`;

  return (
    <section className="py-16 md:py-20 bg-brand-ice relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gradient Container (28px rounded corners) */}
        <div className="relative rounded-4xl bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl overflow-hidden border border-brand-blue-800">
          
          {/* Eye / Iris Motif Glow in Center Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-brand-teal-500/20 via-brand-blue-500/20 to-brand-amber-500/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-teal-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-brand-teal-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Outpatient & Laser Consultation</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Vision Can't Wait. <br />
              <span className="bg-gradient-to-r from-brand-teal-300 via-white to-brand-amber-300 bg-clip-text text-transparent">
                Book Your Eye Checkup Today.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Don’t let cloudy vision or strain hold you back. Consult our senior surgeons with 25+ years experience and regain sharp, effortless vision.
            </p>

            {/* 3 Glossy CTAs Cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              {/* 1. Primary Book Appointment */}
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto btn-glossy btn-primary-pulse px-8 py-4 text-base font-bold shadow-glow-blue group"
                id="cta-banner-book"
              >
                <Calendar className="w-5 h-5 text-brand-teal-300" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 2. Secondary Request Call Back */}
              <button
                onClick={onOpenCallback}
                className="w-full sm:w-auto btn-glossy btn-secondary-frosted px-7 py-4 text-base font-semibold group text-brand-blue-900 bg-white hover:bg-slate-100"
                id="cta-banner-callback"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue-800" />
                <span>Request a Call Back</span>
              </button>

              {/* 3. WhatsApp Us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-glossy btn-whatsapp-glossy px-7 py-4 text-base font-semibold group"
                id="cta-banner-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp Us</span>
              </a>

            </div>

            {/* Reassurance Footer */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal-400" />
                <span>Zero Advance Deposit Required</span>
              </span>
              <span>•</span>
              <span>Cashless Mediclaim Approved</span>
              <span>•</span>
              <span>NABH & JCI Accredited Facility</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
