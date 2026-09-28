export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  recoveryTime: string;
  procedureDuration: string;
  highlights: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  experienceYears: number;
  photoUrl: string;
  actionPhotoUrl: string;
  actionPhotoAlt: string;
  opdTimings: string;
  languages: string[];
  bio: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  specs: string;
}

export interface Review {
  id: string;
  type: 'google' | 'testimonial';
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  treatmentReceived?: string;
  reviewText: string;
  doctorName?: string;
  verified: boolean;
}

export interface LanguageOption {
  code: string;
  label: string;
  native: string;
  script: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Cataract' | 'LASIK' | 'Insurance' | 'General' | 'Pediatric';
}

export const HOSPITAL_CONFIG = {
  name: "Drishti Super Speciality Eye Hospital",
  shortName: "Drishti Eye Hospital",
  tagline: "Clear Vision. Trusted Care.",
  phone: "+91 98765 43210",
  phoneFormatted: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hi! I would like to book an eye checkup appointment at Drishti Eye Hospital.",
  email: "care@drishtieyehospital.com",
  emergencyPhone: "+91 98765 00108",
  address: "Plot 42, Healthcare Boulevard, Ring Road, Near City Center, Metro City - 560001",
  landmark: "Opposite Metro Pillar 142, Metro City",
  timings: "Mon-Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM",
  emergencyTimings: "Emergency & Trauma Eye Care: 24/7 Available",
  googleRating: 4.9,
  googleReviewCount: "2,180+",
  googleReviewUrl: "https://g.page/r/drishti-eye-hospital/review",
  // Modern Google Maps embed URL
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696430349!2d77.59253457584166!3d12.97159891487229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679c0bd2999%3A0x6b4908f51a442168!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socials: {
    facebook: "https://facebook.com/drishtieyehospital",
    instagram: "https://instagram.com/drishtieyehospital",
    youtube: "https://youtube.com/@drishtieyehospital",
    linkedin: "https://linkedin.com/company/drishtieyehospital"
  },
  stats: {
    yearsExperience: 25,
    surgeriesCompleted: 50000,
    happyPatients: 85000,
    expertDoctors: 18,
    cashlessInsurers: 40
  },
  accreditations: [
    { name: "NABH Accredited", subtitle: "National Accreditation Board for Hospitals" },
    { name: "JCI Gold Standard", subtitle: "International Safety Protocol" },
    { name: "Carl Zeiss Center of Excellence", subtitle: "Next-Gen Optical Diagnostics" },
    { name: "Alcon Refractive Suite", subtitle: "Topography-Guided Precision" },
    { name: "40+ Cashless TPA / Insurers", subtitle: "Instant Claim Processing" }
  ]
};

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', native: 'English', script: 'En' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी', script: 'अ' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', script: 'తె' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்', script: 'த' },
  { code: 'ur', label: 'Urdu', native: 'اردو', script: 'اردو' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ', script: 'ಕ' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം', script: 'മ' },
  { code: 'mr', label: 'Marathi', native: 'मराठी', script: 'म' },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'cataract',
    title: 'Cataract Surgery (Phaco / Premium Lens)',
    shortDesc: 'Blade-free micro-incision phacoemulsification with trifocal, EDOF and Toric lenses for complete spectacles independence.',
    fullDesc: 'State-of-the-art Robotic Femtosecond laser cataract surgery (FLACS) with stitchless 1.8mm micro-incision. Walk in and walk out the same day with crystal-clear vision restored.',
    iconName: 'Eye',
    badge: 'Most Popular',
    recoveryTime: '24-48 Hours',
    procedureDuration: '10-15 Minutes',
    highlights: ['Micro-incision 1.8mm stitchless', 'Alcon & Zeiss Premium Trifocal lenses', 'Zero hospital admission needed', 'Cashless mediclaim approved']
  },
  {
    id: 'lasik',
    title: 'LASIK / SMILE / Refractive Surgery',
    shortDesc: 'Say goodbye to glasses with Contoura Vision, Bladeless Femto-LASIK and flapless SMILE Pro technology.',
    fullDesc: 'Personalized 22,000 elevation-point corneal contour mapping. Corrects myopia, hyperopia, and astigmatism with painless, 10-second laser application.',
    iconName: 'Sparkles',
    badge: 'Same-Day Freedom',
    recoveryTime: '12-24 Hours',
    procedureDuration: '15 Minutes total',
    highlights: ['100% Blade-free robotic laser', 'Contoura Vision topography-guided', 'Painless numbing eye drops only', 'Resume work within 24 hours']
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Treatment & Management',
    shortDesc: 'Early detection and gentle pressure-lowering therapies including Selective Laser Trabeculoplasty (SLT) and valve implants.',
    fullDesc: 'Glaucoma is the silent thief of sight. Our advanced OCT nerve head imaging and automated visual field perimetry detect nerve damage years before vision loss happens.',
    iconName: 'ShieldAlert',
    badge: 'Sight Saver',
    recoveryTime: 'Immediate to 2 Days',
    procedureDuration: '15-30 Minutes',
    highlights: ['Humphrey 3D Visual Field Analyzer', 'SLT & YAG Laser iridotomy', 'Ahmed glaucoma valve implants', 'Routine pressure monitoring']
  },
  {
    id: 'retina',
    title: 'Retina & Diabetic Retinopathy',
    shortDesc: 'Advanced vitreo-retinal laser, anti-VEGF injections and 27-gauge sutureless vitrectomy for complex retinal conditions.',
    fullDesc: 'Comprehensive care for diabetic macular edema, retinal detachment, age-related macular degeneration (AMD), and retinal vein occlusions by fellowship-trained surgeons.',
    iconName: 'Activity',
    badge: 'Critical Care',
    recoveryTime: '3-7 Days',
    procedureDuration: '30-45 Minutes',
    highlights: ['Heidelberg Spectralis OCT & Angiography', 'Anti-VEGF intravitreal injections', '27-gauge sutureless vitrectomy', 'Emergency retinal detachment repair']
  },
  {
    id: 'cornea',
    title: 'Cornea Transplant & Keratoconus',
    shortDesc: 'Corneal cross-linking (C3R), customized Rose K and scleral lenses, plus partial-thickness endothelial transplants (DMEK/DSAEK).',
    fullDesc: 'Pioneering partial-thickness corneal replacements with faster recovery and near-zero graft rejection rates. Specialized clinic for progressive keratoconus.',
    iconName: 'Layers',
    badge: 'Super Speciality',
    recoveryTime: '3-5 Days',
    procedureDuration: '30-60 Minutes',
    highlights: ['C3R Corneal Collagen Cross-Linking', 'DMEK / DSAEK sutureless grafts', 'Custom Scleral & Rose K lenses', 'In-house certified donor tissue bank']
  },
  {
    id: 'pediatric',
    title: 'Pediatric Eye Care & Squint',
    shortDesc: 'Child-friendly eye examinations, amblyopia (lazy eye) therapy, congenital cataract, and non-surgical squint correction.',
    fullDesc: 'Specially trained pediatric ophthalmologists providing gentle, playful examinations for infants, toddlers, and school-age children to ensure healthy visual development.',
    iconName: 'Smile',
    badge: 'Kids Friendly',
    recoveryTime: 'Varies',
    procedureDuration: '20-40 Minutes',
    highlights: ['Gentle vision testing for non-verbal toddlers', 'Amblyopia vision therapy programs', 'Adjustable suture squint correction', 'Screen fatigue & myopia control']
  },
  {
    id: 'oculoplasty',
    title: 'Oculoplasty & Cosmetic Eye Surgery',
    shortDesc: 'Eyelid ptosis correction, aesthetic blepharoplasty, tear duct surgery (DCR), and orbital trauma reconstruction.',
    fullDesc: 'Restoring both optimal function and youthful aesthetics to eyelids, eyebrows, tear drainage systems, and surrounding facial structures.',
    iconName: 'UserCheck',
    badge: 'Aesthetic & Function',
    recoveryTime: '5-7 Days',
    procedureDuration: '45-90 Minutes',
    highlights: ['Drooping eyelid (Ptosis) repair', 'Baggy eyelid blepharoplasty', 'Endoscopic tear duct surgery (DCR)', 'Facial nerve spasm therapy']
  },
  {
    id: 'dry-eye',
    title: 'Advanced Dry Eye Spa & Treatment',
    shortDesc: 'Targeted Intense Pulsed Light (IPL) therapy, LipiFlow thermal pulsation, and meibomian gland restoration.',
    fullDesc: 'Do you feel burning, grittiness, or screen-induced tiredness? Our dedicated Dry Eye Suite precisely diagnoses tear film deficiency and unblocks clogged oil glands.',
    iconName: 'Droplets',
    badge: 'Instant Relief',
    recoveryTime: 'Immediate',
    procedureDuration: '20 Minutes',
    highlights: ['Oculus Keratograph 5M tear imaging', 'LipiFlow thermal pulsation system', 'Punctal plugs for chronic dry eyes', 'Relief from digital screen strain']
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Preventive Eye Checkup',
    shortDesc: 'Thorough 90-minute digital evaluation of your vision, cornea, retina, intraocular pressure, and binocular alignment.',
    fullDesc: 'More than just reading a chart: our multi-step diagnostic protocol screens for hidden asymptomatic conditions before they threaten your eyesight.',
    iconName: 'FileCheck2',
    badge: 'Annual Essential',
    recoveryTime: 'Immediate',
    procedureDuration: '60-90 Minutes',
    highlights: ['Automated digital refraction', 'Dilated retinal fundus evaluation', 'Non-contact eye pressure screening', 'Prescription glasses verification']
  },
  {
    id: 'optical',
    title: 'Contact Lens & Optical Boutique',
    shortDesc: 'High-index ultra-thin lenses, digital blue-light blockers, progressive lenses, and medical contact lens fittings.',
    fullDesc: 'Curated selection of designer frames paired with computer-calibrated precision lenses to match your facial ergonomics and work environment.',
    iconName: 'Glasses',
    badge: 'Precision Fit',
    recoveryTime: 'Immediate',
    procedureDuration: '20-30 Minutes',
    highlights: ['Digital pupillary distance calibration', 'Blue-defense anti-glare coatings', 'Daily disposable & toric contacts', 'Progressive lens adaptation guarantee']
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Eye Care',
    shortDesc: 'Rapid round-the-clock emergency care for chemical splashes, foreign body trauma, corneal abrasions, and acute sight loss.',
    fullDesc: 'Dedicated on-call ophthalmologists and immediate surgical theatre readiness for any ocular emergency when every minute matters.',
    iconName: 'Flame',
    badge: '24/7 Ready',
    recoveryTime: 'Immediate triage',
    procedureDuration: 'Immediate care',
    highlights: ['Round-the-clock triage team', 'Instant foreign particle removal', 'Emergency burn irrigation protocols', 'Direct hotline: +91 98765 00108']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rajeshwari',
    name: 'Dr. Rajeshwari Sundaram',
    qualification: 'MBBS, MS (Ophth), FICO (UK), FAICO (Refractive)',
    specialty: 'Chief Medical Director & Senior Cataract / Refractive Surgeon',
    experienceYears: 24,
    // Professional portrait
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    // Action photo: Examining patient with slit-lamp
    actionPhotoUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Rajeshwari examining a patient using a digital slit lamp',
    opdTimings: 'Mon, Wed, Fri: 9:30 AM – 3:30 PM',
    languages: ['English', 'Hindi', 'Tamil', 'Kannada'],
    bio: 'Pioneer of robotic femtosecond cataract surgery with over 20,000 successful lens implantations. International speaker and advisory board member for Carl Zeiss optics.'
  },
  {
    id: 'dr-menon',
    name: 'Dr. Arvind Menon',
    qualification: 'MBBS, MD (AIIMS New Delhi), FRCS (Glasgow), FASRS',
    specialty: 'Head of Vitreo-Retina & Diabetic Eye Care',
    experienceYears: 19,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    // Action photo: Surgeon operating in modern OT
    actionPhotoUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Arvind performing micro-incision vitrectomy surgery in the operation theatre',
    opdTimings: 'Tue, Thu, Sat: 10:00 AM – 4:00 PM',
    languages: ['English', 'Hindi', 'Malayalam'],
    bio: 'AIIMS gold medalist specializing in 27G sutureless vitrectomy, retinal detachment salvaging, and advanced anti-VEGF protocols for diabetic macular disease.'
  },
  {
    id: 'dr-priya',
    name: 'Dr. Priya Sen',
    qualification: 'MBBS, MS (Ophth), Fellow in Cornea (LVPEI)',
    specialty: 'Cornea, Ocular Surface & Contoura LASIK Specialist',
    experienceYears: 14,
    photoUrl: 'https://images.unsplash.com/photo-1594824813566-70e176ebc54e?auto=format&fit=crop&w=600&q=80',
    // Action photo: LASIK suite inspection
    actionPhotoUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Priya calibrating the Carl Zeiss laser suite for blade-free vision correction',
    opdTimings: 'Mon to Fri: 11:00 AM – 5:00 PM',
    languages: ['English', 'Hindi', 'Telugu', 'Bengali'],
    bio: 'Dedicated to personalized vision correction, partial thickness corneal transplants (DMEK), and advanced C3R cross-linking treatments for progressive keratoconus.'
  },
  {
    id: 'dr-vikramaditya',
    name: 'Dr. Vikramaditya Rathore',
    qualification: 'MBBS, MS, Fellowship in Pediatric Ophthalmology & Strabismus',
    specialty: 'Pediatric Eye Specialist & Adult Squint Surgeon',
    experienceYears: 16,
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    // Action photo: Examining a child
    actionPhotoUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Vikramaditya conducting a playful vision test with a young patient',
    opdTimings: 'Mon, Wed, Sat: 9:00 AM – 2:00 PM',
    languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
    bio: 'Known for his gentle child-first approach. Expert in squint realignment, pediatric cataracts, childhood myopia suppression, and digital screen strain therapy.'
  },
  {
    id: 'dr-ananya',
    name: 'Dr. Ananya Mukherjee',
    qualification: 'MBBS, MS, DNB, Glaucoma Fellow (Moorfields London)',
    specialty: 'Glaucoma Consultant & Neuro-Ophthalmology',
    experienceYears: 13,
    photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    // Action photo: Non-contact eye pressure and optical nerve scan
    actionPhotoUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Ananya analyzing retinal nerve fiber layer scans on a high-resolution display',
    opdTimings: 'Tue, Wed, Fri: 10:00 AM – 4:30 PM',
    languages: ['English', 'Hindi', 'Bengali', 'Kannada'],
    bio: 'UK-trained specialist passionate about preserving visual fields. Expert in Selective Laser Trabeculoplasty (SLT), minimally invasive glaucoma surgeries, and shunt implants.'
  },
  {
    id: 'dr-karthik',
    name: 'Dr. Karthik Swaminathan',
    qualification: 'MBBS, MS, Fellow in Oculoplasty & Ocular Oncology',
    specialty: 'Oculofacial Plastic, Cosmetic Eyelid & Reconstructive Surgery',
    experienceYears: 12,
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    // Action photo: Slit lamp and eyelid evaluation
    actionPhotoUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    actionPhotoAlt: 'Dr. Karthik consulting a patient on aesthetic eyelid contouring',
    opdTimings: 'Mon, Thu, Sat: 1:00 PM – 7:00 PM',
    languages: ['English', 'Tamil', 'Telugu', 'Hindi'],
    bio: 'Blends surgical precision with cosmetic finesse for ptosis repair, blepharoplasty, tear duct blockages (DCR), and reconstruction following trauma.'
  }
];

export const TECHNOLOGY_GALLERY: TechnologyItem[] = [
  {
    id: 'zeiss-lumera',
    title: 'Carl Zeiss OPMI Lumera 700 Surgical Microscope',
    category: 'Operation Theatre',
    description: 'Ultra-high-definition stereo coaxial illumination with integrated intraoperative OCT for unprecedented depth perception during delicate cataract and retinal procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    specs: 'Intraoperative OCT · SCI Illumination · Integrated 4K Video Recording'
  },
  {
    id: 'alcon-wavelight',
    title: 'Alcon WaveLight EX500 Excimer Laser',
    category: 'Refractive Suite',
    description: 'The world fastest 500 Hz excimer laser delivering ultra-precise Contoura Vision corrections in as little as 1.4 seconds per diopter with multi-spatial tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    specs: '500 Hz Repetition · 1050 Hz 6D Active Eye Tracker · PerfectPulse Tech'
  },
  {
    id: 'laminar-ot',
    title: 'Class 100 Modular Laminar Airflow Operation Theatres',
    category: 'Facility & Safety',
    description: 'Three dedicated ophthalmic operation suites equipped with HEPA filtration, seamless anti-microbial wall cladding, and positive air pressure to eliminate infection risks.',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    specs: 'Class 100 HEPA Filtration · Positive Air Pressure · Anti-Static Flooring'
  },
  {
    id: 'heidelberg-oct',
    title: 'Heidelberg Spectralis Multimodal Retinal Imaging',
    category: 'Diagnostics',
    description: 'High-resolution cross-sectional retinal, choroidal, and optic nerve imaging capable of detecting cellular-level pathologies long before symptoms appear.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    specs: 'Spectral-Domain OCT · BluePeak Autofluorescence · TruTrack Active Tracking'
  },
  {
    id: 'oculus-keratograph',
    title: 'Oculus Keratograph 5M Advanced Dry Eye Suite',
    category: 'Diagnostics',
    description: 'Non-invasive tear film break-up time measurement, meibography imaging, and lipid layer assessment for scientific diagnosis and targeted treatment of dry eyes.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    specs: 'Infrared Meibography · Non-invasive Tear Film Dynamic Analysis · R-Scan'
  },
  {
    id: 'optical-lounge',
    title: 'Digital Refraction & Premium Optical Boutique',
    category: 'Diagnostics & Optical',
    description: 'Automated digital phoropters paired with 3D corneal topography provide customized prescriptions for both high-index glasses and medical contact lenses.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    specs: 'Digital Wavefront Refraction · 3D Centration Measurement · Scleral Fitting'
  }
];

export const REVIEWS: Review[] = [
  // Column 1 Reviews (mix of Google and Testimonials)
  {
    id: 'rev-1',
    type: 'google',
    author: 'Sunita Sharma',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 weeks ago',
    reviewText: 'My mother got both eyes operated for Cataract with Dr. Rajeshwari. The entire surgery took less than 15 minutes and she was reading the newspaper without glasses the very next morning! Completely cashless through Star Health.',
    verified: true
  },
  {
    id: 'rev-2',
    type: 'testimonial',
    author: 'Rohan Deshmukh, 28',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    treatmentReceived: 'Contoura Vision LASIK',
    doctorName: 'Dr. Priya Sen',
    reviewText: 'I wore high power glasses (-5.5 D) since 8th grade. Dr. Priya performed Contoura Vision on a Friday afternoon and I was back at my software engineering job by Monday morning with 6/5 vision. Truly life changing!',
    verified: true
  },
  {
    id: 'rev-3',
    type: 'google',
    author: 'Mohammed Irfan',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '3 weeks ago',
    reviewText: 'Exceptional hospital! Very clean, no chaotic waiting lines like government or crowded clinics. The nurses explained each eye drop step by step in Hindi and Telugu so my elderly parents were completely at ease.',
    verified: true
  },
  {
    id: 'rev-4',
    type: 'testimonial',
    author: 'Anjali Nair',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 months ago',
    treatmentReceived: 'Pediatric Squint Correction',
    doctorName: 'Dr. Vikramaditya Rathore',
    reviewText: 'Dr. Vikramaditya handled my 6-year-old daughter with such patience and warmth. Her eye misalignment was completely corrected with a simple day-care procedure. She has gained so much confidence at school.',
    verified: true
  },
  {
    id: 'rev-5',
    type: 'google',
    author: 'K. S. Narayanan',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    reviewText: 'Dr. Arvind Menon is a godsend for diabetic eye patients. His prompt laser and anti-VEGF injection saved my central retinal vision when I had sudden bleeding. Forever indebted to the retina team here.',
    verified: true
  },
  {
    id: 'rev-6',
    type: 'testimonial',
    author: 'Deepika Iyer, 34',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '3 weeks ago',
    treatmentReceived: 'LipiFlow Dry Eye Therapy',
    doctorName: 'Dry Eye Suite',
    reviewText: 'Working 10 hours in front of screens left my eyes red, gritty, and painful every evening. After two LipiFlow sessions and warm compression guidance, my eyes feel moist, calm and comfortable all day long.',
    verified: true
  },

  // Column 2 Reviews
  {
    id: 'rev-7',
    type: 'google',
    author: 'Amitabh Verma',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Just recently',
    reviewText: 'Outstanding experience from reception to discharge! The hospital looks like a 5-star hotel and the equipment is imported from Germany. Dr. Rajeshwari is compassionate, clear, and reassuring.',
    verified: true
  },
  {
    id: 'rev-8',
    type: 'testimonial',
    author: 'Venkatesh Rao, 62',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 months ago',
    treatmentReceived: 'Premium Trifocal Cataract',
    doctorName: 'Dr. Rajeshwari Sundaram',
    reviewText: 'I opted for the Zeiss PanOptix trifocal IOL. Now I can read my WhatsApp messages, work on my laptop, and drive at night with zero glare and zero spectacles. Highly recommend this team!',
    verified: true
  },
  {
    id: 'rev-9',
    type: 'google',
    author: 'Sneha Kulkarni',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    reviewText: 'Requested a callback via their website and got a call from an agent speaking Marathi within 5 minutes! Scheduled an emergency checkup for corneal scratch and got attended immediately. 5 stars!',
    verified: true
  },
  {
    id: 'rev-10',
    type: 'testimonial',
    author: 'Tanvi Agarwal, 24',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '3 weeks ago',
    treatmentReceived: 'Blade-free SMILE Laser',
    doctorName: 'Dr. Priya Sen',
    reviewText: 'No blade, no flaps, no pain. The laser took exactly 23 seconds per eye! I walked out smiling and threw my contact lenses away for good. The team made me feel safe throughout.',
    verified: true
  },
  {
    id: 'rev-11',
    type: 'google',
    author: 'Dr. Ramesh Chandra (Pediatrician)',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 months ago',
    reviewText: 'As a medical doctor myself, I am very critical of sterile protocols. Drishti Hospital maintains genuine Class 100 laminar operation rooms and ethical medical counsel. I refer all my patients here with confidence.',
    verified: true
  },
  {
    id: 'rev-12',
    type: 'testimonial',
    author: 'Pradeep Joshi, 55',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    treatmentReceived: 'Glaucoma SLT Laser',
    doctorName: 'Dr. Ananya Mukherjee',
    reviewText: 'My intraocular pressure was persistently high despite 3 different eye drops. Dr. Ananya performed SLT laser which took just 10 minutes in the OPD. My pressure dropped from 26 to 15 mmHg safely.',
    verified: true
  },

  // Column 3 Reviews
  {
    id: 'rev-13',
    type: 'google',
    author: 'Kavitha Balasubramanian',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 weeks ago',
    reviewText: 'Best eye hospital in the state! The cashless insurance team handled my HDFC Ergo approval in under 30 minutes without asking for unnecessary paperwork. Honest pricing and zero hidden fees.',
    verified: true
  },
  {
    id: 'rev-14',
    type: 'testimonial',
    author: 'Farhan Sheikh, 32',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '3 weeks ago',
    treatmentReceived: 'Ptosis Eyelid Correction',
    doctorName: 'Dr. Karthik Swaminathan',
    reviewText: 'Had a droopy eyelid since an old motorcycle accident that impaired my upper vision field. Dr. Karthik reconstructed it with microscopic precision. The scar is virtually invisible!',
    verified: true
  },
  {
    id: 'rev-15',
    type: 'google',
    author: 'Harpreet Singh',
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    reviewText: 'Very well organized hospital with spacious waiting lobbies, wheelchair accessibility, and warm hospitality. Both my parents had their routine checkups completed comfortably within an hour.',
    verified: true
  },
  {
    id: 'rev-16',
    type: 'testimonial',
    author: 'Sumantha Banerjee, 41',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 months ago',
    treatmentReceived: 'Keratoconus C3R Cross-linking',
    doctorName: 'Dr. Priya Sen',
    reviewText: 'Was terrified when told my cornea was thinning rapidly. Dr. Priya performed accelerated C3R cross-linking to arrest the progression and fitted me with customized scleral lenses. My vision is stable and sharp!',
    verified: true
  },
  {
    id: 'rev-17',
    type: 'google',
    author: 'Meenakshi Sundaram',
    avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '4 weeks ago',
    reviewText: 'Their optical store has the latest digital measuring gear. The optometrist spent 30 minutes testing my computer vision fatigue and provided the best anti-glare lenses I have ever worn.',
    verified: true
  },
  {
    id: 'rev-18',
    type: 'testimonial',
    author: 'Vikram Malhotra, 45',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    treatmentReceived: 'Comprehensive Annual Eye Scan',
    doctorName: 'General Ophthalmology',
    reviewText: 'During a routine checkup, they detected elevated eye pressure that had zero symptoms. Because of early detection, I avoided irreversible nerve damage. Do not skip your annual eye checkup!',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Cataract',
    question: 'How quickly can I resume normal activities after cataract surgery?',
    answer: 'Most patients resume light daily activities like reading, watching television, and walking within 24 to 48 hours. Our micro-incision (1.8mm) stitchless technique requires no bandages or hospital stay. We recommend avoiding splashing tap water directly into the eye or vigorous exercise for about 2 weeks.'
  },
  {
    category: 'LASIK',
    question: 'Am I eligible for Contoura Vision LASIK or SMILE?',
    answer: 'General eligibility includes being 18 years or older, having a stable glasses prescription for at least 12 months, and having healthy corneas without severe dry eye or keratoconus. During your 90-minute pre-LASIK assessment, we conduct a 22,000-point corneal topography and corneal thickness scan to confirm whether LASIK, Contoura Vision, SMILE, or ICL (Implantable Contact Lens) is optimal for your eyes.'
  },
  {
    category: 'LASIK',
    question: 'Is laser eye surgery painful? What if I blink during the procedure?',
    answer: 'Laser eye surgery is completely painless. Prior to the procedure, anesthetic numbing eye drops are administered so you feel only mild pressure for 10-15 seconds. Furthermore, our excimer laser features a 1050 Hz multi-spatial active eye tracker: if you move or blink, the laser automatically pauses and repositions instantaneously.'
  },
  {
    category: 'Insurance',
    question: 'Do you offer Cashless Mediclaim and Insurance assistance?',
    answer: 'Yes! We are empaneled with over 40 major health insurance providers and TPAs including Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, Vidal Health, Paramount, and more. Our in-house Cashless Mediclaim desk handles pre-authorization and claims with 0% hassle for you.'
  },
  {
    category: 'General',
    question: 'How often should adults and children get their eyes checked?',
    answer: 'Healthy adults under 40 with good vision should get evaluated every 2 years. Adults over 40, diabetics, hypertensives, or those with family histories of glaucoma should undergo comprehensive eye scans annually. Children should have their first checkup before starting preschool (age 3-4), followed by annual checkups.'
  },
  {
    category: 'General',
    question: 'What are the consultation fees and treatment payment options?',
    answer: 'Our comprehensive consultation with senior specialists starts at affordable standard rates. For elective laser corrections and premium cataract lenses, we offer 0% interest EMI options through major banks and healthcare finance partners, making world-class eye care accessible to every family.'
  },
  {
    category: 'Cataract',
    question: 'What is the difference between Monofocal and Premium Trifocal lenses?',
    answer: 'Monofocal lenses provide clear vision at one distance (usually far distance), requiring you to still wear reading glasses for books, phones, and computers. Premium Trifocal and EDOF (Extended Depth of Focus) lenses provide sharp focus across all three distances (near, intermediate, and far), giving over 90% of patients total freedom from spectacles.'
  },
  {
    category: 'Pediatric',
    question: 'Can squint (strabismus) in children or adults be corrected?',
    answer: 'Yes! Squint can be successfully treated at any age. In children, early treatment prevents amblyopia (lazy eye). Treatments range from corrective eyeglasses and vision therapy exercises to precise microsurgical realignment of the eye muscles performed as a day-care procedure.'
  }
];

export const TIME_SLOTS = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM'
];

export const CALL_TIME_PREFERENCES = [
  { id: 'now', label: 'Call me immediately (within 10 mins)', badge: 'Fastest' },
  { id: 'morning', label: 'Morning (09:00 AM - 12:00 PM)' },
  { id: 'afternoon', label: 'Afternoon (12:00 PM - 04:00 PM)' },
  { id: 'evening', label: 'Evening (04:00 PM - 08:00 PM)' },
];
