/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#F3AC46",
      salmon: "#FF727D",
      green: "#C0FAC7",
      grey: "#828282",
      black: "#090526",
      purple: "#7D73C1",
      white: "#ffffff",
    },
  },
  plugins: [],
};
