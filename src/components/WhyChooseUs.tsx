import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CreditCard, 
  HeartHandshake, 
  Microscope, 
  CheckCircle2, 
  Star,
  Activity
} from 'lucide-react';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

export const WhyChooseUs: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter values with animation trigger
  const [yearsCount, setYearsCount] = useState(0);
  const [surgeriesCount, setSurgeriesCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [insurersCount, setInsurersCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Smooth counter animation
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setYearsCount(Math.round(easeOut * HOSPITAL_CONFIG.stats.yearsExperience));
      setSurgeriesCount(Math.round(easeOut * HOSPITAL_CONFIG.stats.surgeriesCompleted));
      setDoctorsCount(Math.round(easeOut * HOSPITAL_CONFIG.stats.expertDoctors));
      setInsurersCount(Math.round(easeOut * HOSPITAL_CONFIG.stats.cashlessInsurers));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const pillars = [
    {
      icon: Microscope,
      title: "100% Stitchless & Robotic Precision",
      description: "Sub-2mm micro-incisions and femtosecond laser pulses ensure stitch-free healing, minimal swelling, and crystal-clear vision restoration within 24 hours.",
    },
    {
      icon: ShieldCheck,
      title: "Class 100 Modular Laminar Theatres",
      description: "Triple-HEPA positive-pressure filtered air systems guarantee hospital infection rates far below international benchmarks (0.01%).",
    },
    {
      icon: Award,
      title: "Fellowship-Trained Senior Surgeons Only",
      description: "Your eyes are treated exclusively by seasoned consultants with 12 to 24+ years of specialized surgical pedigree—never by students or junior residents.",
    },
    {
      icon: CreditCard,
      title: "Direct Cashless Mediclaim & 0% EMI",
      description: "In-house TPA insurance desk coordinates pre-approvals in under 45 minutes for 40+ insurers. Flexible 0% interest monthly EMI installments available.",
    },
    {
      icon: HeartHandshake,
      title: "Ethical & Transparent Pricing",
      description: "Zero hidden charges. Complete clarity on lens options, procedure costs, post-operative eye drop kits, and follow-up visits before you step into surgery.",
    },
    {
      icon: Activity,
      title: "Dedicated Post-Op Recovery Care",
      description: "Personalized care counselors track your recovery milestone progress at 24 hours, 7 days, and 30 days post-procedure with round-the-clock doctor access.",
    },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-50/70 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-teal-50/70 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal-50 border border-brand-teal-200 text-xs font-bold text-brand-teal-800 uppercase tracking-wider">
            <span>The Drishti Distinction</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Discerning Patients <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
              Trust Drishti With Their Eyes
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Sight is humanity’s most cherished sense. For a quarter of a century, our hospital has combined surgical mastery with cutting-edge optical physics to deliver life-changing outcomes.
          </p>
        </div>

        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          
          {/* Stat 1: Years */}
          <div className="p-6 rounded-3xl bg-brand-ice/80 border border-brand-blue-100 shadow-xs hover:shadow-md transition-shadow text-center group">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-800 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-brand-teal-300" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-blue-950 mb-1">
              {yearsCount}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">Years of Clinical Excellence</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Established since 2001</p>
          </div>

          {/* Stat 2: Surgeries */}
          <div className="p-6 rounded-3xl bg-brand-ice/80 border border-brand-blue-100 shadow-xs hover:shadow-md transition-shadow text-center group">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-blue-950 mb-1">
              {surgeriesCount.toLocaleString()}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">Successful Eye Surgeries</p>
            <p className="text-[11px] text-slate-400 mt-0.5">99.6% Clinical Success Rate</p>
          </div>

          {/* Stat 3: Expert Doctors */}
          <div className="p-6 rounded-3xl bg-brand-ice/80 border border-brand-blue-100 shadow-xs hover:shadow-md transition-shadow text-center group">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-700 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-brand-amber-300" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-blue-950 mb-1">
              {doctorsCount}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">Full-Time Eye Specialists</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Fellowship trained in US, UK & AIIMS</p>
          </div>

          {/* Stat 4: Cashless Partners */}
          <div className="p-6 rounded-3xl bg-brand-ice/80 border border-brand-blue-100 shadow-xs hover:shadow-md transition-shadow text-center group">
            <div className="w-12 h-12 rounded-2xl bg-brand-amber-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-blue-950 mb-1">
              {insurersCount}+
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">Cashless Insurance Partners</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Instant cashless pre-approval</p>
          </div>

        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft hover:shadow-glass-hover hover:border-brand-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-800 flex items-center justify-center mb-5 group-hover:bg-brand-teal-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-teal-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>NABH & JCI Standard Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
