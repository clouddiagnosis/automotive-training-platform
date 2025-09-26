/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        automotive: {
          primary: '#1a365d',
          secondary: '#2c5282',
          accent: '#3182ce',
          warning: '#ed8936',
          success: '#48bb78',
          danger: '#e53e3e',
        }
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}