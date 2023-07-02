/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : "#B799FF",
        'secondary' :"#ACBCFF",
        'accent' :"#AEE2FF",
      },
      fontFamily:{
        'dsans':"'DM Sans', sans-serif"
      },
      backgroundImage:{
        'pattern':"url('/src/assets/pipes.webp')"
      }
    },
  },
  plugins: [],
}

