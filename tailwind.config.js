// tailwind.config.js
// export default {
//   darkMode: "class", // enables dark mode via a 'dark' class on <html>
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  darkMode: "class", // dark mode toggled by adding 'dark' class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff", // optional custom light background
        lightText: "#000000",
        darkBg: "#1a1a1a",
        darkText: "#ffffff",
      },
    },
  },
  plugins: [],
};