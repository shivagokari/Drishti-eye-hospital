import React from 'react';
import { X, Calendar, ShieldCheck } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { HOSPITAL_CONFIG } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
  initialDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentId = '',
  initialDoctorId = ''
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-teal-900 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-brand-teal-300 uppercase tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Priority Outpatient Booking</span>
          </div>

          <h3 id="appointment-modal-title" className="font-heading text-xl sm:text-2xl font-extrabold text-white">
            Schedule Your Hospital Consultation
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1">
            Zero queue waiting. Immediate SMS confirmation with senior specialist allocation.
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          <AppointmentForm
            initialTreatmentId={initialTreatmentId}
            initialDoctorId={initialDoctorId}
            onSuccessClose={onClose}
            isModal={true}
          />
        </div>

      </div>
    </div>
  );
};
