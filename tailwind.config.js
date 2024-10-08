/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C0E0E",
        secondary: "#FFB273",
        gray: "#ABB0B1",
        brown: "#453120",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        openSans: "var(--font-open-sans)",
      },
      backgroundImage: {
        "hero-pattern": "url(/assets/pattern.webp)",
        "custom-gradient":
          "linear-gradient(90deg, rgb(69,49,32) 0%, rgb(255,178,115) 100%)",
      },
      screens: {
        xs: "500px",
        desktop: "1100px",
      },
    },
  },
  plugins: [],
};
