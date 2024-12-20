/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7065F0",
        secondary: "#CBC7FA",
        secondary2: "#F7F7FD",
        textPrimary: "#4D5461",
      },
    },
  },
  plugins: [],
};
