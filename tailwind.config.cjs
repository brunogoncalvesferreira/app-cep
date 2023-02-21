/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Karla, sans-serif"],
    },
    extend: {
      width: {
        "90%": "90%",
      },
    },
  },
}
