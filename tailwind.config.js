/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "rgb(96 165 250)",
          primary: "rgb(59 130 246)",
          dark: "rgb(37 99 235)",
        },
        gray: {
          light: "rgb(243 244 246)",
          primary: "rgb(229 231 235)",
          dark: "rgb(209 213 219)",
        },
      },
    },
  },
  plugins: [],
};
