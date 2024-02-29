/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "#151822":"#151822",
        "#1D9A6D":"#1D9A6D",
        "#1A204A":'#1A204A',
        "#1a1f2f":"#1a1f2f",
        "#627FE3":"#627FE3",
        "#8886FF":"#8886FF",
        "#00FFA3":"#00FFA3",
        "#279D88":"#279D88"
      }
    },
  },
  plugins: [],
}