export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      // Add more font families as needed
    },
    extend: {
      colors: {
        'primary'  :" #FFFFFF"
      },
      fontFamily : {
        'nunito' : 'Nunito'
      }
    },
  },
  plugins: [],
}