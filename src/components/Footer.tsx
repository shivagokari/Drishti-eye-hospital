import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_CONFIG, TREATMENTS } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-brand-blue-950 via-slate-950 to-black text-white relative pt-16 pb-24 md:pb-12 border-t border-brand-blue-900 overflow-hidden">
      
      {/* Subtle Glows in Footer */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Bar: "Eye Care Tips & Vision Health" */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-xs font-bold text-brand-teal-400 uppercase tracking-wider">
              Stay Informed
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Subscribe for Monthly Eye Health & Screen Care Tips
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Guidance from senior ophthalmologists on digital eye strain, glaucoma prevention, and nutrition.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-5 py-3 rounded-2xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You have subscribed to monthly eye health tips.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal-400 flex-1"
                />
                <button
                  type="submit"
                  className="btn-glossy btn-teal-glossy px-5 py-3 text-xs sm:text-sm font-bold shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Main Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Hospital Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-blue-800 to-brand-teal-500 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-brand-blue-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <svg className="w-5 h-5 text-brand-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" fill="#19C3B1" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-none block">
                  DRISHTI
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal-400">
                  Super Speciality Eye Hospital
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              State-of-the-art super speciality tertiary ophthalmic center. Delivering robotic Contoura LASIK, micro-incision cataract surgeries, vitreo-retinal lasers, and cornea grafts with NABH and JCI accredited safety protocols.
            </p>

            {/* Social Icons (Pure SVG) */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Connect With Us</p>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a href={HOSPITAL_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href={HOSPITAL_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* YouTube */}
                <a href={HOSPITAL_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-white transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href={HOSPITAL_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Accreditations badge */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-brand-teal-400 shrink-0" />
              <span>NABH Accredited & ISO 9001:2015 Certified Center</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Treatments (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-brand-teal-300 transition-colors flex items-center gap-1.5">
                    <span className="text-brand-teal-500">›</span>
                    <span className="truncate">{t.title.split('(')[0]}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#treatments" className="text-brand-teal-400 font-semibold hover:underline inline-flex items-center gap-1">
                  <span>View all 11 disciplines</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Timings & Emergency Hotline (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              OPD Timings
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <p className="font-bold text-white">Monday - Saturday:</p>
                <p className="text-slate-400">09:00 AM – 08:00 PM</p>
              </div>
              <div>
                <p className="font-bold text-white">Sunday OPD:</p>
                <p className="text-slate-400">10:00 AM – 02:00 PM</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <span className="inline-block px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase mb-1">
                  24/7 Available
                </span>
                <p className="font-bold text-white">Emergency Trauma:</p>
                <a href={`tel:${HOSPITAL_CONFIG.emergencyPhone}`} className="text-brand-amber-400 font-bold hover:underline block mt-0.5">
                  {HOSPITAL_CONFIG.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Google Map Embed (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Hospital Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal-400 shrink-0" />
                <a href={`tel:${HOSPITAL_CONFIG.phone}`} className="hover:text-white font-semibold">
                  {HOSPITAL_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-teal-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_CONFIG.email}`} className="hover:text-white">
                  {HOSPITAL_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-32 rounded-2xl overflow-hidden border border-white/15 relative shadow-md">
              <iframe
                title="Drishti Hospital Location Map"
                src={HOSPITAL_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Developer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} {HOSPITAL_CONFIG.name}. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">Patient Rights Charter</a>
          </div>

          <div className="text-slate-400">
            Crafted for clinical excellence & high patient trust.
          </div>
        </div>

      </div>
    </footer>
  );
};
