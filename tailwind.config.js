/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 40px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fadeIn: {
          // '0%': { transform: 'translateX(-2000px)' },
          // '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'scale(0,0)' },
          '100%': { transform: 'scale(100%,100%)' },
        },
      },
      animation: {
        fade: 'fadeIn 1s linear',
      },
    },
  },
  plugins: [],
};
