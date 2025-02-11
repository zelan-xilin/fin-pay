/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Regular: ["Regular"],
        Medium: ["Medium"],
        SemiBold: ["SemiBold"],
      },
      colors: {
        primary: {
          100: "#281C9D",
          200: "#5655B9",
          300: "#A8A3D7",
          400: "#F2F1F9",
        },
        neutral: {
          100: "#343434",
          200: "#898989",
          300: "#989898",
          400: "#CACACA",
          500: "#E0E0E0",
          600: "#FFFFFF",
        },
        semantic: {
          100: "#FF4267",
          200: "#0890FE",
          300: "#FFAF2A",
          400: "#52D5BA",
          500: "#FB6B18",
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".heading-primary": {
          "@apply font-SemiBold text-2xl": {},
        },
        ".heading-secondary": {
          "@apply font-SemiBold text-xl": {},
        },
        ".heading-tertiary": {
          "@apply font-SemiBold text-base": {},
        },

        ".body-primary": {
          "@apply font-Medium text-base": {},
        },
        ".body-secondary": {
          "@apply font-Regular text-base": {},
        },
        ".body-tertiary": {
          "@apply font-Medium text-sm": {},
        },

        ".caption-primary": {
          "@apply font-SemiBold text-xs": {},
        },
        ".caption-secondary": {
          "@apply font-Medium text-sm": {},
        },

        ".card-effect": {
          "@apply shadow-[0px_4px_30px_rgba(54,41,183,0.07)]": {},
        },
        ".card-effect-sm": {
          "@apply shadow-[0px_-5px_30px_rgba(54,41,183,0.07)]": {},
        },
      });
    },
  ],
};
