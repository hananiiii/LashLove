/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "pink" : "#F4CAD6",
         "brown" : "#B89576",
         "green" : "#9FC2BE",
         "gray"   : "#B3B7C2",
         "dark_brown" : "#473B3B",
              }
    },
  },
  plugins: [],
}

