import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Treatments } from './components/Treatments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { TechnologyGallery } from './components/TechnologyGallery';
import { AppointmentSection } from './components/AppointmentSection';
import { CallbackSection } from './components/CallbackSection';
import { ReviewWall } from './components/ReviewWall';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { AppointmentModal } from './components/AppointmentModal';
import { CallbackModal } from './components/CallbackModal';
import { SUPPORTED_LANGUAGES, LanguageOption } from './data/hospitalData';

export function App() {
  // Modal states
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState('');
  const [preselectedDoctorId, setPreselectedDoctorId] = useState('');

  // Selected language state (default: English)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(SUPPORTED_LANGUAGES[0]);

  // Handlers for modal opening with optional pre-selection
  const handleOpenAppointment = (treatmentId = '', doctorId = '') => {
    setPreselectedTreatmentId(treatmentId);
    setPreselectedDoctorId(doctorId);
    setAppointmentModalOpen(true);
  };

  const handleOpenCallback = () => {
    setCallbackModalOpen(true);
  };

  const handleBookTreatment = (treatmentId: string) => {
    handleOpenAppointment(treatmentId, '');
  };

  const handleBookWithDoctor = (doctorId: string) => {
    handleOpenAppointment('', doctorId);
  };

  return (
    <div className="min-h-screen bg-brand-ice text-slate-800 font-sans selection:bg-brand-teal-500 selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCallback={handleOpenCallback}
      />

      {/* Main Content Area */}
      <main>
        {/* 2. HERO SECTION */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenCallback={handleOpenCallback}
        />

        {/* 3. TREATMENTS & SERVICES */}
        <Treatments
          onBookTreatment={handleBookTreatment}
        />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 5. MEET OUR DOCTORS */}
        <Doctors
          onBookWithDoctor={handleBookWithDoctor}
        />

        {/* 6. TECHNOLOGY & FACILITY GALLERY */}
        <TechnologyGallery />

        {/* 7. BOOK APPOINTMENT FORM (SECTION) */}
        <AppointmentSection />

        {/* 8. REQUEST A CALL BACK (SECTION) */}
        <CallbackSection />

        {/* 9. REVIEWS & TESTIMONIALS (SLOW VERTICAL AUTO-SCROLL WALL) */}
        <ReviewWall />

        {/* 10. FAQ ACCORDION */}
        <FAQ
          onOpenCallback={handleOpenCallback}
        />

        {/* 11. FINAL CTA BANNER */}
        <CTABanner
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenCallback={handleOpenCallback}
        />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* FLOATING ELEMENTS (WhatsApp, Mobile Sticky Bar, Scroll-to-Top, Desktop Callback Tab, Top Progress Bar) */}
      <FloatingElements
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenCallback={handleOpenCallback}
      />

      {/* APPOINTMENT MODAL POPUP */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialTreatmentId={preselectedTreatmentId}
        initialDoctorId={preselectedDoctorId}
      />

      {/* CALLBACK MODAL POPUP */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

    </div>
  );
}

export default App;
