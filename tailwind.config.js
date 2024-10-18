/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ef09d",
        neutral: {
          darker: "#1a1a1a",
          dark: "#333333",
          normal: "#B2B2B2",
          light: "#F2F2F2",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
