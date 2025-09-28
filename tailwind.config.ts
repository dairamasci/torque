import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.05)' },
        },
        floatMedium: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-25px,20px) scale(0.98)' },
        },
        floatFast: {
          '0%,100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(15px,-10px) rotate(2deg)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 14s ease-in-out infinite',
        floatMedium: 'floatMedium 18s ease-in-out infinite',
        floatFast: 'floatFast 22s ease-in-out infinite',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
