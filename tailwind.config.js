/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#e11d48",   // luxury red
        softwhite: "#f8f9fb", // cool white
        darktext: "#111111"
      },

      fontFamily: {
        body: ["Inter", "sans-serif"],
        luxury: ["Playfair Display", "serif"],
      }

    },
  },
  plugins: [],
}