/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ["IBM Plex Mono", "monospace"],
      archivo: ["Archivo", "sans-serif"],
    },
  },
  plugins: [],
}
