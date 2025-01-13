/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
// cherry-pie color was created based on my photo background. You can create yours from here https://uicolors.app/create

const tailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "2rem",
      },
    },
    extend: {
      screens: {
        xs: "520px",
        ...defaultTheme.screens,
      },
      colors: {
        theme: "var(--theme)",
        accent: "var(--accent)",
        body: "var(--body)",
        color1: "var(--color1)",
        color2: "var(--color2)",
        color3: "var(--color3)",
        color4: "var(--color4)",
        color5: "var(--color5)",
        "cherry-pie": {
          50: "#faf4ff",
          100: "#f2e7ff",
          200: "#e7d2ff",
          300: "#d5afff",
          400: "#bc7dff",
          500: "#a24bff",
          600: "#8d28f5",
          700: "#7918d8",
          800: "#6719b0",
          900: "#55158e",
          950: "#2a014f",
        },
      },
      spacing: {
        template: "var(--template-gap)",
      },
      fontSize: {
        xxs: "0.6875rem",
        xxxs: "0.625rem",
      },
    },
  },
  plugins: [],
}

export default tailwindConfig