/** @type {import('tailwindcss').Config} */
//import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["rounded"],
      colors: {
        saffron: "#FF9933",
        green: "#138808",
        navy: "#002868",
        // Adding the darker colors for the animated divider
        darkSaffron: "#D17D0F",
        lightWhite: "#F8F8F8",
        darkGreen: "#0A5C0A",
      },
      animation: {
        flagWave: "flagWave 8s ease-in-out infinite",
      },
      keyframes: {
        flagWave: {
          "0%, 100%": {
            "background-position": "0% 50%",
            "background-size": "200% 100%",
          },
          "50%": {
            "background-position": "100% 50%",
            "background-size": "200% 100%",
          },
        },
      },
      backgroundSize: {
        "200-auto": "200% auto",
      },
    },
  },
  // plugins: [
  //   tailwindScrollbarHide,
  // ],
};
