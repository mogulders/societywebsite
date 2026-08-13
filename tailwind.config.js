/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        society: {
          red:   '#BE1823',
          gold:  '#D78D05',
          black: '#171717',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Barlow Condensed"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
