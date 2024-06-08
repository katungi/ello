/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          turquoise: '#5ACCCC',
          white: '#FFFFFF',
          steelBlue: '#335C6E',
          yellow: '#FABD33',
        },
        secondary: {
          turquoiseLight: '#CFFAFA',
          orangeRed: '#F76434',
          teal: '#4AAA88',
          yellowDark: '#FAAD00',
          turquoiseDark1: '#53C2C2',
          turquoiseDark2: '#28B8B8',
          orangePastel: '#FFE6DC',
        },
      },
    },
  },
  plugins: [],
}

