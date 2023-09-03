/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

console.log(defaultTheme)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
