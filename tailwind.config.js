/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#F0F6FF',
            100: '#E0EDFE',
            200: '#C2DCFD',
            300: '#94C3FC',
            400: '#5EA1F8',
            500: '#387FF3',
            600: '#1E5CD1',
            700: '#1047A9',
            800: '#0B3D91', // primary deep medical blue
            900: '#07265E',
            950: '#04173B',
          },
          teal: {
            50: '#EDFCFA',
            100: '#CFF8F3',
            200: '#A4F1E8',
            300: '#6AE5D7',
            400: '#34D4C3',
            500: '#19C3B1', // primary teal/aqua accent
            600: '#139D8E',
            700: '#137C72',
            800: '#14635C',
            900: '#15524C',
          },
          ice: '#F5F9FF',
          amber: {
            400: '#FFC043',
            500: '#FFB020', // primary warm accent
            600: '#E5950C',
          },
          whatsapp: '#25D366',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '32px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 61, 145, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(11, 61, 145, 0.16)',
        'glow-blue': '0 0 24px rgba(11, 61, 145, 0.35)',
        'glow-teal': '0 0 24px rgba(25, 195, 177, 0.45)',
        'glow-amber': '0 0 24px rgba(255, 176, 32, 0.4)',
        'inner-gloss': 'inset 0 1px 1px rgba(255, 255, 255, 0.4)',
        'card-soft': '0 10px 30px -10px rgba(11, 61, 145, 0.08), 0 4px 6px -2px rgba(11, 61, 145, 0.02)',
      },
      animation: {
        'sheen': 'sheen 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'marquee-up-fast': 'marqueeUp 40s linear infinite',
        'marquee-up-mid': 'marqueeUp 48s linear infinite',
        'marquee-up-slow': 'marqueeUp 55s linear infinite',
        'marquee-down-mid': 'marqueeDown 48s linear infinite',
      },
      keyframes: {
        sheen: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '35%, 100%': { transform: 'translateX(250%) rotate(25deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(25, 195, 177, 0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(25, 195, 177, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marqueeUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        marqueeDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
