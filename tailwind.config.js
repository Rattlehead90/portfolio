/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        washover: {
          '0%': {
            borderColor: 'dodgerblue'
          },
          '50%': {
            borderColor: 'lime'
          },
          '100%': {
            borderColor: 'dodgerblue'
          }
        }
      },
      animation: {
        'washover': "washover 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
