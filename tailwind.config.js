/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      centered: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        sm: "480px",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: "var(--theme)",
        accent: "var(--accent)",
        body: "var(--body)",
      },
      spacing: {
        template: "var(--template-gap)",
      },
    },
  },
  plugins: [],
}
