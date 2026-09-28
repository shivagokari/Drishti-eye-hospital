import React, { useState } from 'react';
import { 
  Calendar, 
  PhoneCall, 
  MessageCircle, 
  Star, 
  Award, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Maximize2,
  Volume2,
  VolumeX,
  Eye
} from 'lucide-react';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenCallback }) => {
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const whatsappUrl = `https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_CONFIG.whatsappMessage)}`;

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-hero-pattern">
      {/* Decorative Gradient Glows & Iris Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-teal-200/30 via-brand-blue-200/20 to-brand-amber-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal-300/15 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-brand-blue-300/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust Signals & 3 Glossy CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-brand-teal-200 shadow-sm text-xs font-semibold text-brand-blue-900 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal-500 animate-ping" />
              <span className="text-brand-teal-700 font-bold uppercase tracking-wider text-[11px]">Next-Gen Eye Care</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 text-slate-700">
                <Star className="w-3.5 h-3.5 fill-brand-amber-500 text-brand-amber-500" />
                <span>4.9 / 5 Rating from 2,180+ Patients</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Clear Vision. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
                  Trusted Care for Life.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-2">
                Experience world-class eye care backed by <strong>25+ years of excellence</strong>. From blade-free robotic Contoura LASIK to stitchless micro-incision cataract surgeries, our senior fellowship-trained surgeons restore your sight with unmatched precision and warmth.
              </p>
            </div>

            {/* Quick Benefits Bullet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 pt-1 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0" />
                <span className="whitespace-nowrap">100% Blade-Free LASIK</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0" />
                <span className="whitespace-nowrap">Day-Care Cataract</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/70 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0" />
                <span className="whitespace-nowrap">40+ Cashless Insurers</span>
              </div>
            </div>

            {/* 3 Glossy CTAs Cluster: Clean, whitespace-nowrap, single-line buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              
              {/* 1. Primary Glossy Book Appointment */}
              <button
                onClick={onOpenAppointment}
                className="btn-glossy btn-primary-pulse px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-glow-blue group whitespace-nowrap flex items-center justify-center gap-2"
                id="hero-book-cta"
              >
                <Calendar className="w-5 h-5 text-brand-teal-300 transition-transform group-hover:scale-110 shrink-0" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-brand-teal-300 opacity-80 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* 2. Secondary Frosted Request Call Back */}
              <button
                onClick={onOpenCallback}
                className="btn-glossy btn-secondary-frosted px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold group whitespace-nowrap flex items-center justify-center gap-2"
                id="hero-callback-cta"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue-700 group-hover:rotate-12 transition-transform shrink-0" />
                <span>Request a Call Back</span>
              </button>

              {/* 3. Green Glossy WhatsApp Us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glossy btn-whatsapp-glossy px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold group whitespace-nowrap flex items-center justify-center gap-2"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Subtle disclaimer & emergency hint */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>OPD Doctor available right now</span>
              </span>
              <span>•</span>
              <span className="text-slate-600">Zero waiting time with online booking</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame with Small Floating Effects & Live Video/GIF Simulation */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* The Ambient Backing Aura with Gentle Breathing Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue-600/25 via-brand-teal-400/25 to-brand-amber-400/20 rounded-[38px] filter blur-xl opacity-75 transform -rotate-1 animate-pulse" />
            
            {/* Main Rounded Video / Stream Container (28px radius) */}
            <div className="relative w-full max-w-[460px] rounded-4xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-950">
              
              {/* Active Medical Slit-Lamp / Retina Video Simulation */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                
                {/* Visual Media Layer with Ken Burns Motion (Simulates Active Video/GIF Loop) */}
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85" 
                  alt="Live 4K Slit-Lamp Examination Feed" 
                  className="w-full h-full object-cover object-center animate-ken-burns filter contrast-[1.05]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Laser Scanning Beam Sweep (Simulates Active Slit-Lamp Light Beam) */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-teal-400 to-transparent shadow-[0_0_15px_#19C3B1,0_0_25px_#00E5FF] animate-laser-sweep pointer-events-none z-10 opacity-90" />
                
                {/* Secondary Soft Laser Light Follow Sweep */}
                <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-brand-teal-500/10 via-brand-teal-400/15 to-transparent animate-laser-sweep pointer-events-none z-10" />

                {/* Biometric HUD Overlay Reticle targeting the eye */}
                <div className="absolute top-[42%] left-[48%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-15">
                  <div className="relative w-28 h-28 border border-brand-teal-300/40 rounded-full flex items-center justify-center animate-radar-pulse">
                    <div className="w-20 h-20 border border-dashed border-brand-teal-400/60 rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-teal-400 shadow-[0_0_10px_#19C3B1]" />
                    </div>
                    {/* Crosshair ticks */}
                    <div className="absolute top-0 w-0.5 h-3 bg-brand-teal-300" />
                    <div className="absolute bottom-0 w-0.5 h-3 bg-brand-teal-300" />
                    <div className="absolute left-0 w-3 h-0.5 bg-brand-teal-300" />
                    <div className="absolute right-0 w-3 h-0.5 bg-brand-teal-300" />
                  </div>
                </div>

                {/* Live Stream Top HUD Header */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                  <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                      LIVE • 4K SLIT-LAMP STREAM
                    </span>
                  </div>

                  <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 pointer-events-auto">
                    <button
                      onClick={() => setIsAudioMuted(!isAudioMuted)}
                      className="text-slate-300 hover:text-white transition-colors"
                      title={isAudioMuted ? "Audio muted" : "Audio active"}
                    >
                      {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-teal-400" />}
                    </button>
                    <span className="text-[9px] font-mono text-brand-teal-300 font-semibold">60 FPS</span>
                  </div>
                </div>

                {/* Live Biometric Telemetry Overlay Bottom */}
                <div className="absolute bottom-4 inset-x-4 z-20">
                  <div className="bg-slate-950/85 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white space-y-1.5 shadow-xl">
                    <div className="flex items-center justify-between text-[11px] font-mono text-brand-teal-300">
                      <span className="flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 animate-pulse text-brand-teal-400" />
                        <span>ZEISS OCT CORNEAL MAPPING</span>
                      </span>
                      <span className="text-emerald-400 font-bold">LOCKED 99.8%</span>
                    </div>

                    {/* Telemetry metrics row */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10 text-[10px] font-mono text-slate-300">
                      <div>
                        <span className="text-slate-500 block">THICKNESS:</span>
                        <span className="font-bold text-white">538 µm</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">IOP PRESSURE:</span>
                        <span className="font-bold text-emerald-300">14 mmHg</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">STABILITY:</span>
                        <span className="font-bold text-brand-teal-300">OPTIMAL</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Glass Badge 1: 25+ Years Experience (Top Left with Smooth Float Animation A) */}
            <div className="absolute -top-4 -left-3 sm:-left-6 glass-pill p-3 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-a z-30">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-700 to-brand-blue-500 text-white flex items-center justify-center shadow-md shrink-0">
                <Award className="w-5 h-5 text-brand-teal-300" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-base text-brand-blue-950 leading-none">25+ Years</p>
                <p className="text-[11px] font-medium text-slate-500 mt-0.5">Clinical Excellence</p>
              </div>
            </div>

            {/* Floating Glass Badge 2: 50,000+ Happy Patients (Bottom Right with Smooth Float Animation B) */}
            <div className="absolute bottom-10 -right-3 sm:-right-6 glass-pill p-3 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-b z-30">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal-600 to-brand-teal-400 text-white flex items-center justify-center shadow-md shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-base text-brand-blue-950 leading-none">50,000+</p>
                <p className="text-[11px] font-medium text-slate-500 mt-0.5">Successful Surgeries</p>
              </div>
            </div>

            {/* Floating Glass Badge 3: 4.9 Google Rating (Top Right with Smooth Float Animation C) */}
            <div className="absolute top-1/3 -right-4 sm:-right-8 glass-pill py-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-c z-30">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-amber-500">★</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm text-slate-900 leading-none">4.9 / 5</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Google</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">2,180+ Reviews</p>
              </div>
            </div>

          </div>

        </div>

        {/* Trust Strip Below Hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Recognized by Top Healthcare Boards & Trusted by 40+ Insurance Providers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-center">
            {HOSPITAL_CONFIG.accreditations.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/80 hover:bg-white transition-all duration-300 p-3.5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md flex flex-col items-center text-center group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-brand-teal-600" />
                </div>
                <span className="font-heading font-bold text-xs text-brand-blue-950 group-hover:text-brand-blue-700 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
