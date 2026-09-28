import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { FAQS, FAQItem, HOSPITAL_CONFIG } from '../data/hospitalData';

interface FAQProps {
  onOpenCallback: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenCallback }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cataract', 'LASIK', 'Insurance', 'General'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-xs font-bold text-brand-blue-800 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-blue-700" />
            <span>Patient Knowledge Base</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-blue-800 to-brand-teal-600 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Everything you need to know about recovery times, surgical safety, laser eligibility, and cashless mediclaim approvals.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-blue-50/60 border-brand-blue-200 shadow-sm'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-brand-blue-800 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blue-100/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout for Custom Questions */}
        <div className="mt-12 p-6 rounded-3xl bg-brand-ice border border-brand-blue-100 text-center space-y-3">
          <h3 className="font-heading font-bold text-base text-slate-900">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Our medical counselors are happy to clarify any diagnosis, report, or doctor recommendation at no cost.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenCallback}
              className="btn-glossy btn-secondary-frosted px-5 py-2.5 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-blue-700" />
              <span>Ask Our Counselors</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
