/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      height:{
        carousel: '36rem',
      },
    },
  },
  plugins: [],
}

