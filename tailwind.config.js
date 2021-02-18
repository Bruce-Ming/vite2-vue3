const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
}
