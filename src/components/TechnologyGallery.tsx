import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { TECHNOLOGY_GALLERY, TechnologyItem } from '../data/hospitalData';

export const TechnologyGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<TechnologyItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Operation Theatre', 'Refractive Suite', 'Diagnostics', 'Facility & Safety'];

  const filteredItems = filterCategory === 'All' 
    ? TECHNOLOGY_GALLERY 
    : TECHNOLOGY_GALLERY.filter(item => item.category === filterCategory || (filterCategory === 'Facility & Safety' && item.category.includes('Facility')));

  return (
    <section id="technology" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal-50 border border-brand-teal-200 text-xs font-bold text-brand-teal-800 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-brand-teal-600" />
            <span>Infrastructure & Ophthalmic Physics</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            World-Class Diagnostic & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
              Laser Surgical Suites
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Precision in ophthalmology is measured in single microns. Explore our Carl Zeiss, Alcon, and Heidelberg engineering infrastructure designed for zero margin of error.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-brand-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-card-soft hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category Pill Over Image */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                  {item.category}
                </div>

                {/* Enlarge Hover Overlay */}
                <div className="absolute inset-0 bg-brand-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md text-brand-blue-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5 text-brand-blue-900" />
                  </div>
                </div>
              </div>

              {/* Text Card Details */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-blue-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-brand-teal-700">
                  <span className="truncate pr-2">{item.specs}</span>
                  <span className="shrink-0 text-slate-400 group-hover:text-brand-teal-600 transition-colors">Inspect ↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors backdrop-blur-md"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Half */}
            <div className="md:w-3/5 relative bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-white">
                {activeItem.category}
              </div>
            </div>

            {/* Lightbox Specs Half */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal-700">
                    Precision Equipment
                  </span>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mt-1">
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="p-4 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100">
                  <p className="text-xs font-bold text-brand-blue-900 uppercase tracking-wider mb-1">
                    Core Specifications
                  </p>
                  <p className="text-xs text-brand-blue-800 font-medium">
                    {activeItem.specs}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full btn-glossy btn-secondary-frosted py-2.5 text-xs font-bold justify-center"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
