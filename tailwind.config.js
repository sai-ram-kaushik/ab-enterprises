/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Poppins",
        bodyContent: "Nunito",
      },

      colors: {
        background: "#000",
        primary: "#fff",
        secondary: "#FFFF00",
        footerBg: "#272727",
      },
    },
  },
  plugins: [],
};
