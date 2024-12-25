/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#181D27',
        nav: '#414651',
        secondary: '#081735',
        button: '#1570EF',
        auth: '#171717',
        myblue:{
          100: '#EFF8FF',
          200: '#B2DDFF',
          300: '#175CD3',
          400: '#0049C6'
        }
      }
    },
  },
  plugins: [],
}