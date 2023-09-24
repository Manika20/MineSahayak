/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '16rem', // Add your custom text size class here
      },
      


    },
  },
  plugins: [require("daisyui")],
}

