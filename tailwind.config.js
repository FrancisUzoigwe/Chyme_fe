/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'linear-gradient': 'linear-gradient(275deg, #E770C1 11.27%, #9F70FD 88.73%)'
      },
      backgroundImage: {
        'statsImage': "url('../Chyme_fe/src/assets/funfact_shape_bg.png')",
      }
    },
  },
  plugins: [],
}

