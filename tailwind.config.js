/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': ['Nunito'],
        'Lora': ['Lora'],
        'Fugaz': ['Fugaz'],
        'Indie': ['Indie'],
      }
    },
  },
  plugins: [],
}