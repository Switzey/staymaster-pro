import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        app: "#f7faf8",
        ink: "#17211f",
        muted: "#64706d",
        line: "#dfe7e3",
        brand: {
          50: "#eefbf6",
          100: "#d7f4e8",
          500: "#159d74",
          600: "#0d7f5d",
          700: "#0b674e"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 33, 31, 0.08)"
      }
    },
  },
  plugins: [],
};

export default config;
