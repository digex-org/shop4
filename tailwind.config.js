/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
      },
      colors: {
        'custom-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};


