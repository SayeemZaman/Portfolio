/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#050B17",
        veronica: "#9A4EF6",
        "light-veronica": "#b070ff",
        cornsilk: "#FFF7E0",
        "mikado-yellow": "#FBC42A",
        "antiflash-white": "#9ca4b5",
        "antiflash-white-2": "#878e9c",
      },
    },
  },
  plugins: [],
};
