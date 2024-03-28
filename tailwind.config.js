/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      potta: "potta",
      popins: "'Poppins', sans-serif",
      daughter: "'Architects Daughter', cursive",
      inter:"inter",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "rgba(224, 33, 138, 1)",
      secondary: "rgba(255, 188, 217, 1)",
      "sky-blue": "#95E3FD",
    },
    extend: {},
  },
  plugins: [],
};
