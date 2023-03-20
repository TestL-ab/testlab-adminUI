/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
  extend: {
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      titleFont: ['Lato', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      testLabBlue: "#8CC3DF", // buttons - was indigo-600
      testLabBeige: "#C8D1C5", // button hover - was indigo-500
      testLabBackground: "#f1f8fa", // background on forms/lists
      testLabBlueGrey: "#eff2f4",
      testLabDarkBlue: "#0f3654" // title text for all pages
    },
    fontSize: {
      descr: '0.8rem'
    }
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
}
