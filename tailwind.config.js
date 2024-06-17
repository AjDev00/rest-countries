/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontSize: {
        smallest: ["10px"],
        smaller: ["12px"],
        medium: ["15px"],
        average: ["17px"],
        small: ["20px"],
        big: ["25px"],
      },
    },
  },
  plugins: [],
};
