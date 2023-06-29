/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors: {
        'sky-green': 'rgba(67, 223, 155, 1)',
        'color1': 'rgba(61, 186, 181, 1)',
        'color2': 'rgba(61, 186, 181, 0)',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

