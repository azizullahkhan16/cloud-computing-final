/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ["Inter", "sans-serif"],
        heading: ["FuturaBold", "sans-serif"],
        heading1: ["Roboto", "sans-serif"],
        heading2: ["FuturaBold", "sans-serif"],
      },
      screens: {
        mobile: "576px", // Custom tablet breakpoint
        laptop: "1400px", // Custom laptop breakpoint
        desktop: "1700px", // Custom desktop breakpoint
      },
      colors: {
        textColor: "#2D2E2E",
        headingColor: "#2D2E2E",
        customGreen: "#66FCDB",
        customDarkGreen: "#2DC6B0",
        customOrange: "#FE9A85",
      },
    },
  },
  plugins: [],
};
