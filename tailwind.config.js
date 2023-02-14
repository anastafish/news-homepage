/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Inter:'Inter'
      }
    },
    colors:{
      orange: 'hsl(var(--soft--orange))',
      red: 'hsl(var(--soft--red))',
      white: 'hsl(var(--off--white))',
      gray_blue: 'hsl(var(--grayish--blue))',
      dark_gray: 'hsl(var(--dark--grayish))',
      dark_blue: 'hsl(var(--dark--blue))',
    },
  },
  plugins: [],
}
