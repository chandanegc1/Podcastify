/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dprimary: "#121212",
        dsecondary: "#161616",
        dtext: "#F1F2F3",
        lprimary: "#FFFFFF",
        lsecondary: "#ECECEC",
        ltext: "#111111",
        dtertiary: "#15171E",
      },
    },
  },
  plugins: [],
};
