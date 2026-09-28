import React, { useState } from 'react';
import { 
  Phone, 
  User, 
  Clock, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import { SUPPORTED_LANGUAGES, CALL_TIME_PREFERENCES, LanguageOption, HOSPITAL_CONFIG } from '../data/hospitalData';

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime: string;
  selectedLanguage: string;
}

interface CallbackFormProps {
  onSuccessClose?: () => void;
  isModal?: boolean;
}

export const CallbackForm: React.FC<CallbackFormProps> = ({
  onSuccessClose,
  isModal = false
}) => {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    preferredTime: 'now',
    selectedLanguage: 'en'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CallbackFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CallbackFormData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = 'Please enter your name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      /**
       * =========================================================================
       * TODO: BACKEND INTEGRATION
       * Connect this form to your CRM, Twilio/Exotel autodialer, or webhook:
       * 
       * Example:
       * await fetch('https://api.yourdomain.com/request-callback', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({
       *     name: formData.name,
       *     phone: formData.phone,
       *     preferredTime: formData.preferredTime,
       *     language: formData.selectedLanguage
       *   })
       * });
       * =========================================================================
       */
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (err) {
      console.error('Callback error:', err);
      alert('Unable to schedule a callback right now. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedLangObj = SUPPORTED_LANGUAGES.find(l => l.code === formData.selectedLanguage) || SUPPORTED_LANGUAGES[0];

  if (isSuccess) {
    return (
      <div className="text-center py-6 px-4 space-y-5 animate-in fade-in duration-200">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-300">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            Request Received
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
            Call Queued Successfully
          </h3>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Our <strong className="text-brand-blue-800">{selectedLangObj.native} ({selectedLangObj.label})</strong> speaking counselor will call you at <strong className="text-slate-900">{formData.phone}</strong> within 10 minutes.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({ name: '', phone: '', preferredTime: 'now', selectedLanguage: 'en' });
              if (onSuccessClose) onSuccessClose();
            }}
            className="btn-glossy btn-primary-pulse px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md"
          >
            {isModal ? 'Close Window' : 'Submit Another Request'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      
      {/* Name Field */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Your Full Name <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="e.g. Ramesh Patel"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
              errors.name ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
            }`}
          />
        </div>
        {errors.name && (
          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" /> {errors.name}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Your Phone Number <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
            }`}
          />
        </div>
        {errors.phone && (
          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Preferred Time to Call */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          When Should We Call You?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CALL_TIME_PREFERENCES.map((pref) => (
            <button
              type="button"
              key={pref.id}
              onClick={() => setFormData({ ...formData, preferredTime: pref.id })}
              className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                formData.preferredTime === pref.id
                  ? 'bg-brand-blue-900 text-white border-brand-blue-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{pref.label}</span>
              {pref.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  formData.preferredTime === pref.id ? 'bg-brand-teal-400 text-brand-blue-950' : 'bg-brand-teal-50 text-brand-teal-700'
                }`}>
                  {pref.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* LANGUAGE SELECTOR CHIPS: "Talk to our agent in your language" */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Talk To Our Agent In Your Language
          </label>
          <span className="text-[10px] text-brand-teal-700 font-bold bg-brand-teal-50 px-2 py-0.5 rounded-full">
            8 Regional Languages
          </span>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => setFormData({ ...formData, selectedLanguage: lang.code })}
              className={`py-2 px-1.5 rounded-xl text-xs font-medium text-center transition-all flex flex-col items-center justify-center border ${
                formData.selectedLanguage === lang.code
                  ? 'bg-brand-blue-800 text-white border-brand-blue-800 shadow-sm font-bold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="text-sm font-semibold">{lang.native}</span>
              <span className={`text-[9px] uppercase tracking-wider ${
                formData.selectedLanguage === lang.code ? 'text-brand-teal-300' : 'text-slate-400'
              }`}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-glossy btn-primary-pulse py-3.5 text-sm sm:text-base font-bold text-white shadow-glow-blue disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-brand-teal-300" />
            <span>Connecting Agent...</span>
          </>
        ) : (
          <>
            <PhoneCall className="w-4 h-4 text-brand-teal-300" />
            <span>Request {selectedLangObj.native} Call Back</span>
          </>
        )}
      </button>

      <div className="text-center text-[11px] text-slate-500">
        100% Free Consultation · No Obligations · Fast 10-Minute Response
      </div>

    </form>
  );
};
