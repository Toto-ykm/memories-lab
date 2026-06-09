import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ee",
        linen: "#efe3cf",
        champagne: "#d8bf83",
        antique: "#a77a3f",
        cedar: "#584735",
        sage: "#78806b"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(88, 71, 53, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
