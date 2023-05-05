/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#305955',
          accent: '#9ec2b6'
        },
        secondary: {
          light: "#258786",
          dark: "#2a416a",
          accent: "#ca7558"
        }
      }
    },
  },
  plugins: [],
}
