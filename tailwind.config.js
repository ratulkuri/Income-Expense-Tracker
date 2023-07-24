/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#afea70",
          "secondary": "#d1605e",
          "accent": "#f9b9b6",
          "neutral": "#292e38",
          "base-100": "#ffffff",
          "info": "#a4d5ea",
          "success": "#25ad9a",
          "warning": "#db9e06",
          "error": "#fa384b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

