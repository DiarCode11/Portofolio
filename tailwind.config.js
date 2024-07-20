/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'phone': {'min': '240px', 'max': '479px'},
        'tablet': {'min': '440px', 'max': '1023px'},
        'desktop': {'min': '1024px', 'max': '1280px'},
      },
    },
  },
  plugins: [],
}

