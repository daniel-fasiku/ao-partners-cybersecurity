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
        '.clip-custom': {
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
