/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb,rb}",
    "./frontend/javascript/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        heading: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
