// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  prefix: "tw-",
  darkMode: "media",
  theme: {
    screens: {
      xs: "480",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1480px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'tahiti': {
        base: '#67e8f9',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    borderRadius: {
      none: "0",
      xs: ".125rem",
      sm: ".375rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      xl: "1rem",
      full: "9999px",
    },
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5625rem", // 25px
      "2xl": "1.75rem", // 28px
      "3xl": "2rem", // 32px
      "4xl": "2.375rem", // 38px
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};