/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px'
      // => @media (min-width: 1536px) { ... }
    },
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