import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_CONFIG } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';

interface NavbarProps {
  onOpenAppointment: (treatmentId?: string, doctorId?: string) => void;
  onOpenCallback: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointment,
  onOpenCallback,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified, clean navigation links (no clutter)
  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white text-xs py-2 px-4 border-b border-brand-blue-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-brand-teal-400 shrink-0" />
              <span>{HOSPITAL_CONFIG.timings}</span>
            </span>
            <span className="flex items-center gap-1.5 text-brand-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Emergency 24/7 Hotline: </span>
              <a href={`tel:${HOSPITAL_CONFIG.emergencyPhone}`} className="underline hover:text-white transition-colors">
                {HOSPITAL_CONFIG.emergencyPhone}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-200 text-xs">
            <button 
              onClick={onOpenCallback}
              className="text-brand-teal-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Request Call Back</span>
            </button>
            <span className="text-slate-500">|</span>
            <a 
              href={`tel:${HOSPITAL_CONFIG.phone}`} 
              className="font-semibold text-white hover:text-brand-teal-300 transition-colors flex items-center gap-1"
            >
              <span>OPD: {HOSPITAL_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-glass border-b border-slate-200/70 py-2.5 sm:py-3' 
            : 'bg-white/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo with Given Eye Logo Graphic & Brand Name (Super Speciality Badge Removed) */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-xl p-1 shrink-0"
            aria-label="Drishti Eye Hospital Home"
          >
            {/* The Given Eye Logo */}
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <HospitalLogo className="w-11 h-7 sm:w-14 sm:h-9 object-contain" />
            </div>

            {/* Brand Title without 'Super Speciality' pill */}
            <div className="flex flex-col justify-center">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-brand-blue-950 leading-none group-hover:text-brand-blue-800 transition-colors">
                DRISHTI
              </span>
              <p className="text-[11px] font-medium text-slate-500 tracking-normal mt-0.5 whitespace-nowrap">
                {HOSPITAL_CONFIG.tagline}
              </p>
            </div>
          </a>

          {/* Clean Desktop Navigation Links (Simplified to 5 essential items) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-brand-blue-900 hover:bg-brand-blue-50/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: Perfectly Aligned, Single-Line Glossy CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAppointment()}
              className="btn-glossy btn-primary-pulse px-6 py-2.5 text-sm font-bold shadow-glow-blue whitespace-nowrap flex items-center gap-2"
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4 text-brand-teal-300 shrink-0" />
              <span className="whitespace-nowrap leading-none">Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Cluster */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => onOpenAppointment()}
              className="sm:hidden btn-glossy btn-primary-pulse px-3.5 py-2 text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
              aria-label="Book Appointment"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-teal-300 shrink-0" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer with full opaque backdrop */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white z-50 border-b border-slate-200 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              <nav className="flex flex-col divide-y divide-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 text-base font-bold text-slate-800 hover:text-brand-blue-800 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-400 font-normal">→</span>
                  </a>
                ))}
              </nav>

              {/* Large CTA inside Mobile Drawer */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full btn-glossy btn-primary-pulse py-3.5 text-sm font-bold whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-brand-teal-300 shrink-0" />
                  <span>Book Hospital Appointment</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCallback();
                  }}
                  className="w-full btn-glossy btn-secondary-frosted py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-blue-700 shrink-0" />
                  <span>Request a Free Call Back</span>
                </button>
              </div>

              {/* Contact info snippet */}
              <div className="pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
                <p>Emergency Hotline: <span className="font-bold text-brand-blue-800">{HOSPITAL_CONFIG.emergencyPhone}</span></p>
                <p className="mt-0.5">{HOSPITAL_CONFIG.timings}</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
