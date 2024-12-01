/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        light: {
          '50': '#F0F3FA',
          '100': '#D5DEEF',
          '200': '#B1C9EF',
          '300': '#8AAEE0',
          '400': '#628ECB',
          '500': '#395886',
        },
        dark: {
          '50': '#006DA4',
          '100': '#006494',
          '200': '#004d74',
          '300': '#003554',
          '400': '#022b42',
          '500': '#032030',
        },
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
