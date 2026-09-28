import React from 'react';
import { 
  PhoneCall, 
  Globe, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { CallbackForm } from './CallbackForm';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

export const CallbackSection: React.FC = () => {
  return (
    <section id="callback" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-teal-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Language Accessibility Emphasis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal-50 border border-brand-teal-200 text-xs font-bold text-brand-teal-800 uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Section 8 · Multilingual Medical Assistance</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Talk to Our Counselors <br />
              <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
                In Your Mother Tongue
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Medical decisions feel easiest when explained in the language of your heart. Whether you or your elderly parents prefer discussing cataract lens choices in <strong>Hindi, Telugu, Tamil, Kannada, Marathi, Urdu or Malayalam</strong>, our dedicated language desk connects you with an expert counselor in minutes.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-brand-ice p-3.5 rounded-2xl border border-brand-blue-100">
                <Clock className="w-5 h-5 text-brand-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    Guaranteed 10-Minute Response
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our autodialer routes your request to an active consultant speaking your selected dialect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-brand-ice p-3.5 rounded-2xl border border-brand-blue-100">
                <MessageSquare className="w-5 h-5 text-brand-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    Cost Estimates & Insurance Clarifications
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Get clear breakdown of package rates, mediclaim eligibility, and recovery timelines upfront.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Dial Badge */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available Mon-Sat 9 AM to 8 PM across all 8 languages</span>
            </div>

          </div>

          {/* Right Column: Embedded Callback Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border border-slate-200/90 relative">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Request a Free Callback
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pick your language below and our counselor will dial your number.
                </p>
              </div>

              <CallbackForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
