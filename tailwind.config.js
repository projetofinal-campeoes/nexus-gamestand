/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      text: "#FFFFFF",
      boxcolor: "#1e212a",
      placeholder: "#E1E1E1",
      primarycolor: "#E5901A",
      primaryhover: "#805BE8",
      buttontext: "#FFFFFF",
      backgroundcolor: "#333333",
      inputbackground: "#2a2f3c",
      deletecolor: "#DD4B4B",
      hovercard: "#000000",
      linkpage: "#7a7d86",
      backgroundlanding: "rgba(0, 0, 0, 0.72)",
    },
    fontFamily: {
      inter: ["Inter", "ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "ui-monospace", "SFMono-Regular"]
    },
    fontSize: {
      title1: "2.5rem",
      title2: "1.5rem",
      headline: "1rem",
      headline2: "1rem",
      headline3: "0.875rem",
      placeholder: "1rem",
    },
    fontWeight: {
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    extend: {},
  },
  plugins: [],
};
