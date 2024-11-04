/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroud: "#fcfcfb",
        softPink: "#ffe9e9",
        pink: "#ffb1b1",
        red: "#921a40",
      },
    },
  },
  plugins: [],
};
