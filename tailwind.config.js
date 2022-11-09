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
      defaulttextdark: "#FFFFFF",
      boxcolordark: "#131A39",
      placeholder: "##E1E1E1",
      primarycolor: "#E6911A",
      secondcolor: "#E39830",
      thirdcolor: "#E1B06B",
      fourthcolor: "#E8A548",
      buttontext: "#FFFFFF",
      hoverbutton1: "#D0800F",
      hoverbutton2: "#ECAB50",
      inputbackgroundlight: "#7281C1",
      boxcolorlight: "#B7C2FA",
      backgroundcolorlight: "#D6DDFF",
      placeholderlight: "#373737",
      defaulttextlight: "#373737",
      buttontextlight: "#373737",
      backgroundcolor: "#0F1324",
      inputbackgrounddark: "#00061F",
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
