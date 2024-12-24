/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
      },
    },
  },
  plugins: [],
};


