/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // #000000 - slate-900
        // #3B434E - gray-700
        // #7653FC - blue-700
        // #1DC47E - green-700
        // #A4A4A4 - neutral-400
        // #B3c0d9 - blue-200
        // #C8F8E4 - green-100
        // #DE0000 - red-600
        // #E2E2E2 - gray-200
        // #E5E5E5 - zinc-100
        // #EBEBEB - zinc-200
        // #FC836D - red-400
        // #787D85 - stone-500
        // #F9F8FF - slate-200
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.125rem',
          xl: '1.25rem',
        },
      },

      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        cursive: ['Merienda One', 'cursive'],
      },

      gridTemplateAreas: {
        sm: ['header', 'body', 'footer'],
        md: [
          '. sidebar header .',
          '. sidebar body .',
          'footer footer footer footer',
        ],
      },

      gridTemplateColumns: {
        sm: ['minmax(320px, 1fr)'],
        md: ['auto 282px minmax(320px, 1200px) auto'],
      },

      gridTemplateRows: {
        sm: ['auto 1fr auto'],
        md: ['auto 1fr auto'],
      },
    },
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover'],
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
