/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "425px",
    },
    height: {
      "nav-phone": "72px",
    },
    width: {
      "nav-phone": "425px",
    },
    extend: {
      fontFamily: {
        spartan: ["League Spartan, sans-serif"],
      },
    },

    colors: {
      "01": "#7c5dfa",
      "02": "#9277ff",
      "03": "#1e2139",
      "04": "#252945",
      "05": "#dfe3fa",
      "06": "#888eb0",
      "07": "#7e88c3",
      "08": "#0c0e16",
      "09": "#ec5757",
      10: "#ff9797",
      11: "#f2f2f2",
      12: "#141625",
      "nav-bg-light": "#373B53",
    },
  },
  plugins: [],
};
