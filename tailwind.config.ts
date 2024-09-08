import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
      },
      // TODO: Fix font sizes
      fontSize: {
        xxs: "0.5vw",
        xs: "0.75vw",
        sm: "1vw",
        md: "1.25vw",
        lg: "1.5vw",
        xl: "1.75vw",
        "2xl": "2vw",
        "3xl": "2.25vw",
        "4xl": "2.5vw",
        "5xl": "3vw",
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
