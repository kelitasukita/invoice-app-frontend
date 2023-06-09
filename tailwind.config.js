/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        phone: "640px",
        desktop: "1008px",
      },
      height: {
        72: "72px",
        0: "0px",
        103: "103px",
        44: "44px",
        48: "48px",
      },
      width: {
        425: "425px",
        72: "72px",
        103: "103px",
        90: "90px",
        150: "150px",
        730: "730px",
      },
      borderRadius: {
        navRadius: "28px",
      },
      fontFamily: {
        spartan: ["League Spartan, sans-serif"],
      },
      letterSpacing: {
        "-1": "-1px",
        "-0.75": "-0.75px",
        "-0.25": "-0.25px",
        "-0.1": "-0.1px",
      },
      lineHeight: {
        5.5: "22px",
        4.5: "18px",
      },
      opacity: {
        4: "0.06",
      },
      boxShadow: {
        "my-shadow": "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
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
      11: "#f8f8fb",
      12: "#141625",
      "nav-bg-light": "#373B53",
      "nav-border-color": "#494e6e",
      13: "#ffffff",
      14: "#ff8f00",
      paid: "#33D69F",
    },
  },
  plugins: [],
};
