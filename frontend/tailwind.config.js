/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF0000',
          black: '#000000',
          green: '#2D8C3C',
          yellow: '#FFB800',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
