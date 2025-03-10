/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ Make sure this is included
  ],
  darkMode: "class", // ✅ Enables dark mode support
  theme: {
    extend: {},
  },
  plugins: [],
};
