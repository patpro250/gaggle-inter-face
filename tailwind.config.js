// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // IMPORTANT: use 'class' for next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
    "./pages/**/*.{js,ts,jsx,tsx}", // Optional, for hybrid apps
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
