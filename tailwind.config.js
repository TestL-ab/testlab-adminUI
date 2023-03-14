/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      testLabBlue: "#8CC3DF", // buttons - was indigo-600
      testLabBeige: "#C8D1C5" // button hover - was indigo-500
    },
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
}
