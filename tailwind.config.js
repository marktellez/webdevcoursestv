module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#3C2A1B",
          50: "#CEAE92",
          100: "#C8A484",
          200: "#BB8F68",
          300: "#AD7A4E",
          400: "#906641",
          500: "#745234",
          600: "#583E28",
          700: "#3C2A1B",
          800: "#150F0A",
          900: "#000000",
        },
        green: {
          DEFAULT: "#15EDAD",
          50: "#BFFAE9",
          100: "#ADF9E2",
          200: "#87F6D5",
          300: "#61F3C8",
          400: "#3BF0BA",
          500: "#15EDAD",
          600: "#0EBB88",
          700: "#0A8762",
          800: "#06533D",
          900: "#021F17",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
