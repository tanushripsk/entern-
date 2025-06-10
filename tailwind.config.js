/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
},
  // plugins: [],
  plugins: [require('@tailwindcss/typography')],

}

