/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
      'dancingScript': ['Dancing Script'],
      'sourceCodePro': ['Source Code Pro']
    },
    extend: {},
  },
  plugins: [],
}