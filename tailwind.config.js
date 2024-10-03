/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-clip': 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Existing custom clip path utility
        '.clip-custom': {
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
        },
        // New mask gradient utility
        '.mask-gradient-left': {
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
        },
        '.mask-gradient-bottom': {
          maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)',
        },
        '.mask-gradient-top': {
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
