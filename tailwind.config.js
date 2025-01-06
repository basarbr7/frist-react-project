/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'serif'],
      },
      boxShadow: {
        'customShadow': '41px -18px 37px 5px rgba(214,23,100,0.23)',
      },
    },
  },
  plugins: [],
}