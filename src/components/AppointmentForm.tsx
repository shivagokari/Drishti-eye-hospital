import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TREATMENTS, DOCTORS, TIME_SLOTS, HOSPITAL_CONFIG } from '../data/hospitalData';

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  treatmentId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  message: string;
}

interface AppointmentFormProps {
  initialTreatmentId?: string;
  initialDoctorId?: string;
  onSuccessClose?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatmentId = '',
  initialDoctorId = '',
  onSuccessClose,
  isModal = false
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    treatmentId: initialTreatmentId,
    doctorId: initialDoctorId,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    timeSlot: TIME_SLOTS[1], // default 10-11 AM
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Validate form fields inline
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name (at least 3 characters)';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.treatmentId) {
      newErrors.treatmentId = 'Please select a treatment or general eye checkup';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a preferred date';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please choose a time slot';
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
       * Replace this simulated API call with your production endpoint:
       * 
       * Example with fetch / Axios:
       * const response = await fetch('https://api.yourdomain.com/appointments', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData)
       * });
       * 
       * Or with Formspree:
       * const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       *   method: 'POST',
       *   headers: { 'Accept': 'application/json' },
       *   body: JSON.stringify(formData)
       * });
       * =========================================================================
       */
      await new Promise(resolve => setTimeout(resolve, 1200));

      const generatedId = `DRS-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedId);
      setIsSuccess(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback safely
      }

    } catch (error) {
      console.error('Failed to submit appointment:', error);
      alert('Unable to schedule right now. Please call our direct helpline at ' + HOSPITAL_CONFIG.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatmentId: '',
      doctorId: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      timeSlot: TIME_SLOTS[1],
      message: ''
    });
    setErrors({});
    if (onSuccessClose) {
      onSuccessClose();
    }
  };

  if (isSuccess) {
    const selectedTreatmentObj = TREATMENTS.find(t => t.id === formData.treatmentId);
    const selectedDoctorObj = DOCTORS.find(d => d.id === formData.doctorId);

    return (
      <div className="text-center py-8 px-4 sm:px-8 space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg border-2 border-emerald-200">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            Booking Confirmed
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            We Look Forward To Welcoming You!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your appointment request has been scheduled with priority slot allocation. An SMS and WhatsApp confirmation will be sent shortly.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-md mx-auto">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-semibold">Appointment Reference ID:</span>
            <span className="font-mono font-bold text-brand-blue-800 text-sm">{bookingRef}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-semibold">Patient Name:</span>
            <span className="font-bold text-slate-900">{formData.fullName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-semibold">Contact Mobile:</span>
            <span className="font-bold text-slate-900">{formData.phone}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-semibold">Treatment / Scan:</span>
            <span className="font-bold text-slate-900">{selectedTreatmentObj?.title || 'Comprehensive Checkup'}</span>
          </div>
          {selectedDoctorObj && (
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-semibold">Attending Doctor:</span>
              <span className="font-bold text-slate-900">{selectedDoctorObj.name}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-semibold">Date & Preferred Slot:</span>
            <span className="font-bold text-brand-teal-700">{formData.date} ({formData.timeSlot})</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto btn-glossy btn-primary-pulse px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md"
          >
            {isModal ? 'Done / Close Window' : 'Book Another Checkup'}
          </button>
          <a
            href={`https://wa.me/${HOSPITAL_CONFIG.whatsappNumber}?text=Hi,%20I%20just%20booked%20appointment%20${bookingRef}%20for%20${encodeURIComponent(formData.fullName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-glossy btn-whatsapp-glossy px-5 py-3 text-xs sm:text-sm font-semibold"
          >
            WhatsApp Support Desk
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      
      {/* Row 1: Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Aditi Sharma"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
                errors.fullName ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              name="phone"
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
      </div>

      {/* Row 2: Email (Optional) & Treatment Dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              placeholder="aditi@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 ${
                errors.email ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Select Treatment / Service <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.treatmentId}
              onChange={(e) => {
                setFormData({ ...formData, treatmentId: e.target.value });
                if (errors.treatmentId) setErrors({ ...errors, treatmentId: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.treatmentId ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
              }`}
            >
              <option value="">-- Choose Eye Service --</option>
              {TREATMENTS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>
          {errors.treatmentId && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.treatmentId}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Preferred Doctor (Optional) & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Preferred Doctor <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <select
            value={formData.doctorId}
            onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
          >
            <option value="">Any Available Senior Consultant</option>
            {DOCTORS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.specialty.split('&')[0]})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Preferred Date <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.date}
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
                if (errors.date) setErrors({ ...errors, date: undefined });
              }}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.date ? 'border-rose-400 focus:ring-rose-300' : 'border-slate-200 focus:ring-brand-blue-500'
              }`}
            />
          </div>
          {errors.date && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.date}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Preferred Time Slot */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Preferred OPD Time Slot <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50/50">
          {TIME_SLOTS.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => {
                setFormData({ ...formData, timeSlot: slot });
                if (errors.timeSlot) setErrors({ ...errors, timeSlot: undefined });
              }}
              className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                formData.timeSlot === slot
                  ? 'bg-brand-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        {errors.timeSlot && (
          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" /> {errors.timeSlot}
          </p>
        )}
      </div>

      {/* Row 5: Notes / Symptoms (Optional) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Symptoms or Specific Requirements <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          rows={2}
          placeholder="e.g. Experiencing blurry distance vision, interested in Contoura LASIK assessment, or previous cataract surgery records..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
        />
      </div>

      {/* Trust & Guarantee note */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
        <ShieldCheck className="w-4 h-4 text-brand-teal-600 shrink-0" />
        <span>Your health data is strictly confidential under HIPAA/NABH guidelines. Zero spam guaranteed.</span>
      </div>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-glossy btn-primary-pulse py-4 text-base font-bold text-white shadow-glow-blue disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-brand-teal-300" />
            <span>Scheduling Priority Slot...</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5 text-brand-teal-300" />
            <span>Confirm & Book Eye Appointment</span>
            <ArrowRight className="w-4 h-4 text-brand-teal-300" />
          </>
        )}
      </button>

    </form>
  );
};
