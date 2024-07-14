import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
