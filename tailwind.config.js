/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#050B17",
        veronica: "#9A4EF6",
        cornsilk: "#FFF7E0",
        "mikado-yellow": "#FBC42A",
        "antiflash-white": "#E8EBF1",
        "antiflash-white-2": "#EFF0F4",
      },
    },
  },
  plugins: [],
};
