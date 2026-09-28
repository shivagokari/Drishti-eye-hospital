import React from 'react';

interface HospitalLogoProps {
  className?: string;
  size?: number;
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({ 
  className = "w-10 h-10", 
  size 
}) => {
  return (
    <svg 
      viewBox="0 0 520 280" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: (size * 280) / 520 } : undefined}
      aria-label="Drishti Eye Hospital Logo"
    >
      <defs>
        {/* Vibrant cyan / teal gradient matching user logo */}
        <linearGradient id="wingCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="60%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0096C7" />
        </linearGradient>

        <linearGradient id="pupilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Group centered */}
      <g transform="translate(10, 5)">
        
        {/* 1. UPPER WING (Black outline + Cyan wing curving right) */}
        {/* Dark under-arch of top wing */}
        <path
          d="M 180 50 C 230 20 300 25 350 65 C 380 90 410 115 500 135 C 440 135 390 115 350 95 C 310 75 250 60 190 70 Z"
          fill="#262626"
        />
        {/* Vibrant Cyan Top Wing */}
        <path
          d="M 180 48 C 240 10 320 20 370 65 C 410 100 450 120 500 135 C 430 130 380 100 340 75 C 300 50 235 40 180 48 Z"
          fill="url(#wingCyanGradient)"
        />

        {/* 2. LOWER WING (Black outline + Cyan wing curving left) */}
        {/* Dark under-arch of bottom wing */}
        <path
          d="M 320 220 C 270 250 200 245 150 205 C 120 180 90 155 0 135 C 60 135 110 155 150 175 C 190 195 250 210 310 200 Z"
          fill="#262626"
        />
        {/* Vibrant Cyan Bottom Wing */}
        <path
          d="M 320 222 C 260 260 180 250 130 205 C 90 170 50 150 0 135 C 70 140 120 170 160 195 C 200 220 265 230 320 222 Z"
          fill="url(#wingCyanGradient)"
        />

        {/* 3. CENTRAL EYEBALL BODY */}
        {/* Dark outer ring / contour */}
        <ellipse cx="250" cy="135" rx="88" ry="88" fill="#2B2B2B" />

        {/* White Sclera Ring */}
        <ellipse cx="250" cy="135" rx="76" ry="76" fill="#FFFFFF" />

        {/* Inner Dark Circular Pupil / Iris */}
        <circle cx="250" cy="135" r="50" fill="url(#pupilGradient)" />

        {/* Crisp White Reflection Dot (offset top-right as in user's logo) */}
        <circle cx="272" cy="115" r="14" fill="#FFFFFF" />
      </g>
    </svg>
  );
};
