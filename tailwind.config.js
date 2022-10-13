// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#E9EBEC",
        primary: "#FBD144",
        secondary: "#3A3A3A",
        tertiary: "#575757",
        darkBackground: "#0C151D",
        darkPrimary: "#FFE071",
        darkSecondary: "#171F26",
        darkTertiary: "#A3ABB2",
        custom: "#3D3D3D",
        custom2: "#19191B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
