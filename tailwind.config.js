const defaultTheme = require('tailwindcss/defaultTheme');
const colorsPalette = require('./src/styles/colorsPalette');

module.exports = {
  important: true,
  darkMode: 'media', // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily
      },
      colors: colorsPalette,
    },
  },
  variants: {
    outline: ['focus'],
    ring: ['focus'],
  },
  plugins: [],
};
