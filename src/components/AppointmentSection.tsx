import React from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Phone, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

export const AppointmentSection: React.FC = () => {
  return (
    <section id="book-appointment" className="py-16 md:py-24 bg-brand-ice relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Reassurance & Patient Visit Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-xs font-bold text-brand-blue-800 uppercase tracking-wider">
              <span>Section 7 · Easy Digital OPD Booking</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Book Your Priority <br />
              <span className="bg-gradient-to-r from-brand-blue-800 to-brand-teal-600 bg-clip-text text-transparent">
                Eye Consultation Today
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Don’t postpone blurry vision, screen fatigue, or family history of eye pressure. Our streamlined OPD guarantees minimal waiting, thorough 1-on-1 specialist counsel, and upfront clarity.
            </p>

            {/* Checklist Box: What to Bring */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft space-y-4">
              <h3 className="font-heading font-bold text-base text-brand-blue-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-teal-600" />
                <span>What To Bring For Your Visit</span>
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
                  <span>Current eyeglasses, contact lens boxes, or past prescriptions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
                  <span>Government photo ID & Health Insurance card for instant cashless desk triage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
                  <span>List of any systemic medications (diabetes, blood pressure, blood thinners).</span>
                </li>
              </ul>
            </div>

            {/* Dilating Drops Notice */}
            <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong>Helpful Tip:</strong> Comprehensive retina evaluation requires mild pupil dilation drops that blur near vision for 2-3 hours. We advise bringing sunglasses and preferably an accompanying driver.
              </div>
            </div>

            {/* Need Direct Assistance Box */}
            <div className="p-5 rounded-2xl bg-brand-blue-900 text-white flex items-center justify-between">
              <div>
                <p className="text-xs text-brand-teal-300 font-semibold uppercase">Prefer to Book over the Phone?</p>
                <p className="font-heading font-bold text-base text-white mt-0.5">{HOSPITAL_CONFIG.phone}</p>
              </div>
              <a
                href={`tel:${HOSPITAL_CONFIG.phone}`}
                className="btn-glossy btn-teal-glossy px-4 py-2 text-xs font-bold shrink-0"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200/80 relative">
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Outpatient Checkup Registration
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select your preferred date, doctor and time slot below.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Slots Open</span>
                </div>
              </div>

              <AppointmentForm />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
