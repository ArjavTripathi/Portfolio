/** @type {import('tailwindcss').Config} */ 
module.exports = {
  theme: {
    extend: {
      colors: {
        purpleStart: "#7C3AED", // violet-600
        purpleEnd: "#4F46E5",   // indigo-600
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}