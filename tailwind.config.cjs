/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "metrics-row": "200px minmax(0px, 1fr)",
      },
      colors: {
        black: {
          100: "#F3F3F5",
          150: "#ECECEC",
          200: "#E5E5E5",
          300: "#C0C0C0",
          400: "#A5A5A5",
          500: "#858585",
          600: "#6F6F6F",
          700: "#4A4A4A",
          800: "#333333",
          900: "#252525",
          999: "#1A1919",
        },
        orange: {
          100: "#FFF2E4",
          200: "#FFDDB9",
          300: "#FFC382",
          400: "#FFA849",
          500: "#FF921B",
          600: "#ED810C",
          700: "#D87407",
        },
        green: {
          100: "#EBFAE2",
          200: "#D9F0CA",
          300: "#B3E494",
          400: "#85D355",
          500: "#68C132",
          600: "#57AD23",
          700: "#4F9C20",
        },
        red: {
          100: "#FDF2F2",
          200: "#F8D4D7",
          300: "#F8B0B4",
          400: "#F57F86",
          500: "#EC5962",
          600: "#D45058",
          700: "#C2434B",
        },
        blue: {
          100: "#EEF3FF",
          200: "#D1DEFF",
          300: "#A8C0FF",
          400: "#6993FF",
          500: "#3069FE",
          600: "#1252F7",
          700: "#0846E4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
