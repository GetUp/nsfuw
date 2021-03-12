const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#FFFDE8',
          500: '#EDF2BD',
          600: '#E8E3BC',
        },
        secondary: {
          500: '#FF368F',
        },
        gray: colors.coolGray,
      },
      fontFamily: {
        heading: `Degular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
