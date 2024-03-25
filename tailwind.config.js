/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'linear-gradient':'linear-gradient(275deg, #E770C1 11.27%, #9F70FD 88.73%)'
      },
      screens: {
        laptopSmall: { max: '1024px' },
        tablet: { max: '768px' },
        premobile: { max: '650px' },
        premobile1: { max: '550px' },
        mobile: { max: '425px' },
        phone: { max: '375px' },
        radio: { max: '320px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      backgroundImage:{
        'statsImage':"url('../Chyme_fe/src/assets/funfact_shape_bg.png')",
      }
    },
  },
  plugins: [],
}

