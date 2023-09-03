/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:  ["./index.html", "./resume.html", "./contact.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        raleway: "'Raleway', serif",
      },
    },
  },
  plugins: [],
}

