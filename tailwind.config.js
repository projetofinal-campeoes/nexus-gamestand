/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      text: '#FFFFFF',
      boxcolor: '#434343',
      placeholder: '#E1E1E1',
      primarycolor: '#AA91F0',
      buttontext: '#FFFFFF',
      backgroundcolor: '#333333',
      inputbackground: '#373737'
    },
    extend: {
        
    },
  },
  plugins: [],
}