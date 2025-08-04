/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wkt3blue: "#1E90FF",
        wkt3orange: "#FF7F50",
        wkt3green: "#32CD32",
        wkt3purple: "#8A2BE2",
        wkt3gray: "#2F4F4F",
      },
    },
  },
  plugins: [],
};
