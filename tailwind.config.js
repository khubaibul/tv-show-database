/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#0090C8",
      secondary: "#032541",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      red: "#ff0000",
      indigo: "#4b0082",
      yellow: "#ffc82c",
      black: "#000000",
      white: "#FFFFFF",
      "gray-dark": "#273444",
      gray: "#fafafa",
      "gray-light": "#d3dce6",
      green: "#00ff00",
    },
    fontFamily: {
      playFair: ["Playfair Display", "serif"],
      stylish: ["Stylish", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
