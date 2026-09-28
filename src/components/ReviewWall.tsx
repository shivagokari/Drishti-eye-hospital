import React from 'react';
import { Star, ExternalLink, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { REVIEWS, Review, HOSPITAL_CONFIG } from '../data/hospitalData';

export const ReviewWall: React.FC = () => {
  // Split reviews into 3 columns (6 in each, then duplicated to 12 for seamless infinite marquee)
  const col1 = REVIEWS.slice(0, 6);
  const col2 = REVIEWS.slice(6, 12);
  const col3 = REVIEWS.slice(12, 18);

  // Render individual card (Google review vs Patient testimonial)
  const renderCard = (rev: Review, index: number) => {
    if (rev.type === 'google') {
      return (
        <div
          key={`${rev.id}-${index}`}
          className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-card-soft hover:shadow-glass-hover transition-all duration-300 text-left space-y-3"
        >
          {/* Google Review Card Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={rev.avatarUrl}
                alt={rev.author}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                loading="lazy"
              />
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                  {rev.author}
                </h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-brand-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">· {rev.date}</span>
                </div>
              </div>
            </div>

            {/* Google "G" Logo SVG */}
            <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            "{rev.reviewText}"
          </p>

          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Review
            </span>
          </div>
        </div>
      );
    }

    // Normal Patient Testimonial Card
    return (
      <div
        key={`${rev.id}-${index}`}
        className="bg-gradient-to-br from-brand-blue-50/90 to-white rounded-3xl p-5 sm:p-6 border border-brand-blue-200/80 shadow-card-soft hover:shadow-glass-hover transition-all duration-300 text-left space-y-3 relative overflow-hidden"
      >
        <Quote className="w-12 h-12 text-brand-blue-200/40 absolute -top-1 -right-1 pointer-events-none" />

        {/* Treatment Badge */}
        {rev.treatmentReceived && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-900 text-white text-[10px] font-bold uppercase tracking-wider">
            <span>{rev.treatmentReceived}</span>
          </div>
        )}

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed relative z-10">
          "{rev.reviewText}"
        </p>

        {/* Author Details Footer */}
        <div className="pt-2 border-t border-brand-blue-100/80 flex items-center gap-3">
          <img
            src={rev.avatarUrl}
            alt={rev.author}
            className="w-10 h-10 rounded-full object-cover border-2 border-brand-teal-400"
            loading="lazy"
          />
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-blue-950">
              {rev.author}
            </h4>
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              {rev.doctorName ? (
                <span>Treated by <strong>{rev.doctorName}</strong></span>
              ) : (
                <span>Verified Patient Story</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-brand-ice relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 4.9★ Google Rating and "Write a Review" Button */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-amber-200 shadow-xs text-xs font-bold text-slate-800">
            <span className="flex text-brand-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </span>
            <span className="text-slate-900">{HOSPITAL_CONFIG.googleRating}★ on Google</span>
            <span className="text-slate-300">·</span>
            <span className="text-brand-teal-700">{HOSPITAL_CONFIG.googleReviewCount} Verified Patient Reviews</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Stories & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 via-brand-blue-600 to-brand-teal-600 bg-clip-text text-transparent">
              Real Experiences
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Every day, patients walk into our hospital with hesitation and walk out with restored sight and joyful tears. Here is what they share about their journeys.
          </p>

          {/* Action Row: Write a Review */}
          <div className="pt-2">
            <a
              href={HOSPITAL_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glossy btn-secondary-frosted px-5 py-2.5 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* 3-Column Slow Vertical Auto-Scroll Marquee Wall */}
        <div className="relative h-[680px] overflow-hidden mask-vertical-fade marquee-container">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            
            {/* Column 1: Upward Slow (40s) */}
            <div className="relative overflow-hidden h-full">
              <div className="marquee-track flex flex-col gap-6 animate-marquee-up-fast">
                {col1.map((rev, i) => renderCard(rev, i))}
                {/* Duplicated for seamless infinite loop */}
                {col1.map((rev, i) => renderCard(rev, i + 100))}
              </div>
            </div>

            {/* Column 2: Downward / Reverse Slow (48s) - Hidden on mobile, shown on tablet/desktop */}
            <div className="relative overflow-hidden h-full hidden md:block">
              <div className="marquee-track flex flex-col gap-6 animate-marquee-down-mid">
                {col2.map((rev, i) => renderCard(rev, i))}
                {/* Duplicated for seamless infinite loop */}
                {col2.map((rev, i) => renderCard(rev, i + 100))}
              </div>
            </div>

            {/* Column 3: Upward Slow (55s) - Hidden on mobile/tablet, shown on desktop */}
            <div className="relative overflow-hidden h-full hidden lg:block">
              <div className="marquee-track flex flex-col gap-6 animate-marquee-up-slow">
                {col3.map((rev, i) => renderCard(rev, i))}
                {/* Duplicated for seamless infinite loop */}
                {col3.map((rev, i) => renderCard(rev, i + 100))}
              </div>
            </div>

          </div>

          {/* Pause on hover prompt */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-medium text-slate-400 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-xs pointer-events-none">
            Hover or touch to pause review scrolling
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-slate-400">
          *Reviews represent authentic patient feedback collected via Google Business & hospital discharge feedback forms.
        </div>

      </div>
    </section>
  );
};
