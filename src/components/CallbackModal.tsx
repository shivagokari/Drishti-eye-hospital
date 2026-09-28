import React from 'react';
import { X, PhoneCall, Globe } from 'lucide-react';
import { CallbackForm } from './CallbackForm';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-modal-title"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-teal-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-brand-teal-300 uppercase tracking-wider mb-1">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Fast Call Back Service</span>
          </div>

          <h3 id="callback-modal-title" className="font-heading text-xl sm:text-2xl font-extrabold text-white">
            Request an Expert Call Back
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1">
            Speak to a medical counselor in your own mother tongue.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7">
          <CallbackForm onSuccessClose={onClose} isModal={true} />
        </div>
      </div>
    </div>
  );
};
