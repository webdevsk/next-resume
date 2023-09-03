/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

console.log(defaultTheme)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      centered: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: "var(--theme)",
        accent: "var(--accent)",
        body: "var(--body)",
      },
    },
  },
  plugins: [],
}
