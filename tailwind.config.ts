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
        base: "14px",
        xxs: "0.5vw",
        xs: "0.75vw",
        sm: "0.95vw",
        md: "1.15vw",
        lg: "1.5vw",
        xl: "1.75vw",
        "2xl": "2vw",
        "3xl": "2.5vw",
        "4xl": "3vw",
        "5xl": "3.5vw",
      },
      screens: {
        xs: "0px",
        sm: "600px",
        md: "1024px",
        lg: "1440px",
        xl: "1920px",
        xxl: "2560px",
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
