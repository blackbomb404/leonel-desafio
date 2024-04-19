/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#c4c4c4',
        'light-gray': '#eaeaea',
        'blue': '#2b6ab5'
      }
    },
  },
  plugins: [],
}

