/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}",
              "./src/**/*.{html,js}",
              "./dist/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'typescript': '#3178c6',
          'javascript': '#f0db4f',
          'csharp': '#68217A'
        },
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      }
    },
    plugins: [],
  }