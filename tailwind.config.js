/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          'rich-black': '#050B17',
          'veronica': '#9A4EF6',
          'cornsilk': '#FFF7E0',
          'white': '#FFFFFF',
          'mikado-yellow': '#FBC42A',
          'black': '#000000',
          'antiflash-white': '#E8EBF1',
          'antiflash-white-2': '#EFF0F4',
        }
      }
    },
  },
  plugins: []