/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gary-bg': '#F7F7F7',
        'gray-txt': '#939393',
      },
    },
  },
  plugins: [],
}

