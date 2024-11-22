const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "custom-top": "clamp(5.5rem, 4.7718rem + 3.1068vw, 8.5rem)",
      },
      fontSize: {
        clamp: 'clamp(.9rem, .23vw + .85rem, 1.13rem)',
        clampSub: '(1.13rem, .39vw + 1.03rem, 1.5rem)',
        titletext: "(2.75rem, 2.06vw + 2.26rem, 4.74rem)",
      },
      colors: {
        'custom-pink': '#f1dada',
      },
      backgroundColor: {
        'primary': "#f1dada1a",
        'secondery': "#0e090d"
      },
      gridTemplateColumns: {
        'custom': '2fr, 3fr'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".justify-left": {
          "justify-content": "left",
        },
        '.scale-1': {
          transform: 'scale(1)',
        },
      });
    },
  ],
};
