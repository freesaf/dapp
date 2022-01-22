const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bluedark: "#587be0",
      bluelight: "#799cff",
      purplelight: "#b072ff",
      purpledark: "#885fff",
      greybg: "#F5F5F6",
      black: colors.black,
      white: colors.white,
      orange: colors.orange,
      teal: colors.teal,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      blue: colors.blue,
    },
  },
  plugins: [],
};
