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
      animation: {
        float: 'float 3s ease-in-out infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      spacing: {
        "custom-top": "clamp(5.5rem, 4.7718rem + 3.1068vw, 8.5rem)",
      },
      fontSize: {
        clamp: '25px',
        clampSub: '(1.13rem, .39vw + 1.03rem, 1.5rem)',
        titletext: "(2.75rem, 2.06vw + 2.26rem, 4.74rem)",
        titleproject: "212px",
        titlemobile: "100px",
        titledesktop: "100px",
        paradesktop: "56px",
        paramobile: "30px",
        veloanim : "clamp(5rem, 3.7864rem + 5.178vw, 10rem)"
      },
      colors: {
        'custom-pink': '#f1dada',
      },
      backgroundColor: {
        'primary': "#f1dada1a",
        'secondery': "#0e090d",
        'layout': "#0e090d"
      },
      gridTemplateColumns: {
        'custom': '2fr, 3fr'
      },
      padding: {
        'custom': 'clamp(1rem, -0.699rem + 7.249vw, 8rem)'
      },
      maxWidth: {
        "custom": '120rem'
      },
     
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