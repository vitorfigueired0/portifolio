/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMain: '#0D0D0D',
        darkRed: '#400101',
        middleRed: '#730710',
        lightRed: '#BF0A0A',
        lightMain: '#BFA5A3'
      },
      fontFamily: {
        custom: ['phonk', 'sans-serif']
      }
    },
  },
  plugins: [],
}