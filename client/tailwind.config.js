/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
    },
  },
  plugins: [],
};
