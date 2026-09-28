import React, { useState } from 'react';
import { 
  Eye, 
  Sparkles, 
  ShieldAlert, 
  Activity, 
  Layers, 
  Smile, 
  UserCheck, 
  Droplets, 
  FileCheck2, 
  Glasses, 
  Flame,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { TREATMENTS, Treatment } from '../data/hospitalData';
import { TreatmentDetailModal } from './TreatmentDetailModal';

interface TreatmentsProps {
  onBookTreatment: (treatmentId: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onBookTreatment }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-teal-600 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Eye': return <Eye {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'FileCheck2': return <FileCheck2 {...props} />;
      case 'Glasses': return <Glasses {...props} />;
      case 'Flame': return <Flame {...props} />;
      default: return <Eye {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'surgical', label: 'Cataract & Lasik' },
    { id: 'retina-glaucoma', label: 'Retina & Glaucoma' },
    { id: 'speciality', label: 'Pediatric & Cornea' },
    { id: 'wellness', label: 'Dry Eye & Optical' },
  ];

  const filteredTreatments = TREATMENTS.filter(t => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'surgical') return ['cataract', 'lasik'].includes(t.id);
    if (activeCategoryFilter === 'retina-glaucoma') return ['glaucoma', 'retina'].includes(t.id);
    if (activeCategoryFilter === 'speciality') return ['cornea', 'pediatric', 'oculoplasty'].includes(t.id);
    if (activeCategoryFilter === 'wellness') return ['dry-eye', 'comprehensive', 'optical', 'emergency'].includes(t.id);
    return true;
  });

  return (
    <section id="treatments" className="py-16 md:py-24 bg-brand-ice relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-xs font-bold text-brand-blue-800 uppercase tracking-wider">
            <span>Specialized Eye Care Disciplines</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Advanced Treatments & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 to-brand-teal-600 bg-clip-text text-transparent">
              Micro-Surgical Precision
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Equipped with 5th generation lasers, digital diagnostic suites, and ultra-sterile laminar theatres, our senior specialists provide painless, same-day recovery eye procedures.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategoryFilter === cat.id
                  ? 'bg-brand-blue-900 text-white shadow-md'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-brand-blue-800 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid (Responsive: 1 col on mobile, 2 col on tablet, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative border border-white/80 overflow-hidden"
            >
              {/* Subtle top background decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-100/40 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />

              <div>
                {/* Top Card Row: Icon and Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue-50 to-brand-teal-50 border border-brand-teal-100 flex items-center justify-center shadow-xs group-hover:bg-brand-teal-500/10 transition-colors">
                    {getIcon(treatment.iconName)}
                  </div>

                  {treatment.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-800 border border-brand-blue-100 group-hover:bg-brand-teal-50 group-hover:text-brand-teal-800 transition-colors">
                      {treatment.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-2.5">
                  {treatment.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {treatment.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 pt-1 border-t border-slate-100">
                  {treatment.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal-600 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions & Metadata */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-4 bg-slate-50/80 px-3 py-2 rounded-xl">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-teal-600" />
                    <span>Duration: {treatment.procedureDuration}</span>
                  </span>
                  <span className="text-brand-blue-800 font-semibold">
                    {treatment.recoveryTime}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="btn-glossy btn-secondary-frosted py-2.5 px-3 text-xs justify-center font-semibold text-slate-700"
                    aria-label={`Learn more about ${treatment.title}`}
                  >
                    <Info className="w-3.5 h-3.5 text-brand-blue-700" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment.id)}
                    className="btn-glossy btn-primary-pulse py-2.5 px-3 text-xs justify-center font-semibold text-white shadow-sm"
                    aria-label={`Book appointment for ${treatment.title}`}
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal-300" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Eye Care Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal-500/10 rounded-full blur-3xl -z-0" />
          
          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-rose-400 animate-pulse" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                Facing a Sudden Eye Injury or Acute Sight Loss?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Our 24/7 Ophthalmic Trauma & Emergency Theatre is immediately ready for chemical burns, foreign bodies, and sudden detachment triage.
              </p>
            </div>
          </div>

          <a
            href="tel:+919876500108"
            className="btn-glossy btn-teal-glossy px-6 py-3.5 text-sm font-bold shrink-0 relative z-10 shadow-glow-teal"
          >
            <span>Emergency Hotline: +91 98765 00108</span>
          </a>
        </div>

      </div>

      {/* Clinical Details Modal Popup */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
};
