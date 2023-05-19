/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "493px",
      md: "705px",
      lg: "1005px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "custom-xs": "10fr 10fr 3fr",
        "custom-sm": "1fr 4fr 2fr",
        "custom-md": "1fr 2fr 3fr 1fr",
      },
      gridColumn: {
        half: "span 2 / span 1",
      },
      colors: {
        "twitter-color": " #1D9BF0",
      },
    },
  },
  plugins: [],
};
