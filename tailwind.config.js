/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        buttonPrimary: "#4840bb",
        lightOrange: "#f4b896",
        textColor: "#230b59",
      },
    },
  },
  plugins: [],
};
