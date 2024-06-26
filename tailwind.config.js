/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: 'Noto Sans',
        titleFont:"Noto Sans"
      }
    },
  },
  plugins: [],
}

