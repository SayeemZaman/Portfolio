/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#050B17",
        "rich-black-2": "#0E1420",
        veronica: "#9A4EF6",
        "light-veronica": "#b070ff",
        cornsilk: "#FFF7E0",
        "mikado-yellow": "#FBC42A",
        "antiflash-white": "#9ca4b5",
        "antiflash-white-2": "#878e9c",
        "raisin-black": "#1A212B",
        "paynes-gray": "#4C546C",
        saffron: "#F8C430",
        "cool-gray": "#787F9B",
        "black-olive": "#282619",
      },
    },
  },
  plugins: [],
};
