import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Calendar, 
  ChevronUp, 
  PhoneCall 
} from 'lucide-react';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

interface FloatingElementsProps {
  onOpenAppointment: () => void;
  onOpenCallback: () => void;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  onOpenAppointment,
  onOpenCallback
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setShowScrollTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi, I would like to book an appointment')}`;

  return (
    <>
      {/* 1. Thin Scroll Progress Bar at the Very Top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-200/30">
        <div 
          className="h-full bg-gradient-to-r from-brand-teal-400 via-brand-blue-500 to-brand-teal-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating "Request Call Back" Tab on Desktop (Left Edge) */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={onOpenCallback}
          className="group flex items-center gap-2 bg-brand-blue-900/95 hover:bg-brand-blue-800 text-white py-3.5 px-3.5 rounded-r-2xl shadow-xl border-y border-r border-brand-teal-400/30 backdrop-blur-md transition-all duration-300 transform hover:translate-x-1"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          aria-label="Request a Call Back in your language"
        >
          <PhoneCall className="w-4 h-4 text-brand-teal-300 transform -rotate-90 group-hover:scale-110 transition-transform" />
          <span className="font-heading text-xs font-bold tracking-wider uppercase">
            Request Call Back
          </span>
        </button>
      </div>

      {/* 3. Floating Bottom-Right Controls: Scroll-to-Top & WhatsApp Pulse Button (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        
        {/* Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 hover:text-brand-blue-900 border border-slate-200/90 shadow-lg backdrop-blur-md flex items-center justify-center transition-all transform hover:-translate-y-1 active:scale-95 animate-in fade-in duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button with Gentle Pulse (Desktop & Tablet) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full btn-whatsapp-glossy shadow-2xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulsating outer ring */}
          <span className="absolute -inset-1 rounded-full bg-brand-whatsapp/40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 text-white relative z-10 transition-transform group-hover:rotate-12" />

          {/* Hover Tooltip on Desktop */}
          <span className="hidden lg:group-hover:block absolute right-16 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* 4. Mobile Sticky Bottom Bar (Call | Book | WhatsApp) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 safe-pb">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* Call Button */}
          <a
            href={`tel:${HOSPITAL_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors active:scale-95 min-h-[44px]"
            aria-label="Call Hospital"
          >
            <Phone className="w-4 h-4 text-brand-blue-700" />
            <span className="text-[11px] font-bold mt-0.5">Call OPD</span>
          </a>

          {/* Book Appointment (Glossy Center CTA) */}
          <button
            onClick={onOpenAppointment}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl btn-glossy btn-primary-pulse text-white shadow-md active:scale-95 min-h-[44px]"
            aria-label="Book Hospital Appointment"
          >
            <Calendar className="w-4 h-4 text-brand-teal-300" />
            <span className="text-[11px] font-bold mt-0.5">Book Now</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl btn-glossy btn-whatsapp-glossy text-white active:scale-95 min-h-[44px]"
            aria-label="WhatsApp Hospital"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
};
