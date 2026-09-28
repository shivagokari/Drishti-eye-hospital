import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  Clock, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Camera, 
  User, 
  Activity 
} from 'lucide-react';
import { DOCTORS, Doctor } from '../data/hospitalData';

interface DoctorsProps {
  onBookWithDoctor: (doctorId: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onBookWithDoctor }) => {
  // Track which view is active per doctor (profile portrait vs in-clinic action photo)
  const [activePhotoView, setActivePhotoView] = useState<Record<string, 'profile' | 'action'>>({
    'dr-rajeshwari': 'profile',
    'dr-menon': 'profile',
    'dr-priya': 'profile',
    'dr-vikramaditya': 'profile',
    'dr-ananya': 'profile',
    'dr-karthik': 'profile',
  });

  const togglePhotoView = (doctorId: string, view: 'profile' | 'action') => {
    setActivePhotoView(prev => ({ ...prev, [doctorId]: view }));
  };

  return (
    <section id="doctors" className="py-16 md:py-24 bg-brand-ice relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-xs font-bold text-brand-blue-800 uppercase tracking-wider">
            <span>Leadership & Surgical Faculty</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Senior <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
              Ophthalmic Surgeons
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Trained at world-renowned institutions like AIIMS, Moorfields London, and LVPEI, our full-time faculty combines empathetic patient listening with international surgical precision.
          </p>
        </div>

        {/* Doctors Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOCTORS.map((doctor) => {
            const currentView = activePhotoView[doctor.id] || 'profile';
            return (
              <div
                key={doctor.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/90 shadow-card-soft hover:shadow-glass-hover flex flex-col justify-between group transition-all duration-300"
              >
                {/* Doctor Visual Header with Photo Toggle */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  
                  {/* Photo Image (Swap with actual doctor photos) */}
                  <img
                    src={currentView === 'profile' ? doctor.photoUrl : doctor.actionPhotoUrl}
                    alt={currentView === 'profile' ? doctor.name : doctor.actionPhotoAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient shadow for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Experience Badge Top Left */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-brand-blue-900/90 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-teal-300" />
                    <span>{doctor.experienceYears}+ Years Exp</span>
                  </div>

                  {/* Toggle between Portrait and In-Action Clinic Photo Top Right */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200/80 flex items-center gap-1">
                    <button
                      onClick={() => togglePhotoView(doctor.id, 'profile')}
                      className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-all flex items-center gap-1 ${
                        currentView === 'profile' 
                          ? 'bg-brand-blue-800 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                      title="View portrait photo"
                    >
                      <User className="w-3 h-3" />
                      <span>Profile</span>
                    </button>
                    <button
                      onClick={() => togglePhotoView(doctor.id, 'action')}
                      className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-all flex items-center gap-1 ${
                        currentView === 'action' 
                          ? 'bg-brand-teal-600 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                      title="View doctor examining patient / performing surgery"
                    >
                      <Activity className="w-3 h-3" />
                      <span>In-Clinic</span>
                    </button>
                  </div>

                  {/* Name & Specialty Overlaid at bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] font-semibold text-brand-teal-300 uppercase tracking-wider mb-0.5">
                      {doctor.qualification}
                    </p>
                    <h3 className="font-heading font-extrabold text-xl text-white leading-tight">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    {/* Specialty Title */}
                    <div>
                      <span className="text-xs font-bold text-brand-blue-800 block">
                        {doctor.specialty}
                      </span>
                    </div>

                    {/* Bio Snippet */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {doctor.bio}
                    </p>

                    {/* OPD Timings & Languages */}
                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
                        <span className="font-medium">OPD: {doctor.opdTimings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
                        <span>Languages: {doctor.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* "Book with this doctor" Action Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onBookWithDoctor(doctor.id)}
                      className="w-full btn-glossy btn-primary-pulse py-3 text-xs sm:text-sm justify-center font-bold text-white shadow-md group"
                      id={`book-doc-${doctor.id}`}
                    >
                      <Calendar className="w-4 h-4 text-brand-teal-300" />
                      <span>Book with {doctor.name.split(' ')[1]}</span>
                      <ArrowRight className="w-4 h-4 text-brand-teal-300 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Second Opinion & Panel Note */}
        <div className="mt-12 text-center text-xs text-slate-500 bg-white/70 p-4 rounded-2xl border border-slate-200/60 max-w-2xl mx-auto shadow-xs">
          <span>Looking for a confidential surgical second opinion? </span>
          <button 
            onClick={() => onBookWithDoctor('dr-rajeshwari')} 
            className="text-brand-blue-800 font-bold underline hover:text-brand-teal-600 transition-colors"
          >
            Consult our Medical Director
          </button>
        </div>

      </div>
    </section>
  );
};
