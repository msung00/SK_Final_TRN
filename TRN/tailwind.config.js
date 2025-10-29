/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        govblue: '#1E40AF',
        govsky: '#60A5FA',
      },
    },
  },
  plugins: [],
}
