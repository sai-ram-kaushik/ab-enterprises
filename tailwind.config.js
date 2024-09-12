/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Urbanist",
        bodyContent: "lufga",
      },

      colors: {
        background: "#fff",
        primary: "#000",
        secondary: "#FD853A",
        footerBg: "#272727",
      },
    },
  },
  plugins: [],
};
