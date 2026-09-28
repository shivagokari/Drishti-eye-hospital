import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Treatment } from '../data/hospitalData';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="treatment-title"
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-teal-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {treatment.badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-400 text-brand-blue-950 mb-3">
              {treatment.badge}
            </span>
          )}

          <h3 id="treatment-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            {treatment.title}
          </h3>
          <p className="text-slate-200 text-sm mt-2 leading-relaxed">
            {treatment.shortDesc}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-blue-50/80 p-4 rounded-2xl border border-brand-blue-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-800 text-white flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-teal-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Procedure Duration</p>
                <p className="text-sm font-bold text-brand-blue-950">{treatment.procedureDuration}</p>
              </div>
            </div>

            <div className="bg-brand-teal-50/80 p-4 rounded-2xl border border-brand-teal-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-teal-600 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">Typical Recovery</p>
                <p className="text-sm font-bold text-brand-blue-950">{treatment.recoveryTime}</p>
              </div>
            </div>
          </div>

          {/* Full Clinical Overview */}
          <div>
            <h4 className="font-heading text-base font-bold text-slate-900 mb-2">
              Clinical Overview & Advanced Technique
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Treatment Highlights */}
          <div>
            <h4 className="font-heading text-base font-bold text-slate-900 mb-3">
              Key Patient Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-amber-600 shrink-0" />
            <p className="text-xs text-amber-900 font-medium">
              Eligible for 0% Interest EMI & 100% Cashless Mediclaim with 40+ recognized health insurers.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close Window
          </button>

          <button
            onClick={() => {
              onClose();
              onBookTreatment(treatment.id);
            }}
            className="w-full sm:w-auto btn-glossy btn-primary-pulse px-6 py-3 text-sm font-bold shadow-glow-blue"
          >
            <Calendar className="w-4 h-4 text-brand-teal-300" />
            <span>Book Consultation for this Treatment</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
