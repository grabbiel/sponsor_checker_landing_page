/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
        'xsmob': '321px',
        'md': '765px', 
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
        'smextra': '1024px'
    },
    zIndex: {
        '100': '100',
        '60': '60',
        '70': '70',
        '80': '80'
    }
  },
  plugins: [
  ],
}
