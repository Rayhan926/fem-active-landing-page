/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream-white": "#FFFAF2",
        pink: "#E8CCC8",
        "dark-blue": "#2E4E65",
        "dark-green": "#748463",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
