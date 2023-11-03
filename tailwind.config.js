/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'rubik': ['rubik' ,'sans-serif'],
    },
    extend: {
      scale: {
        '175': '1.75',
        '200': '2',
      }
    },
  },
  plugins: [],
}

