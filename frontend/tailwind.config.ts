import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heroBlue: "#83A2B5",
        deepNavy: "#0B2B5E",
        medicalCyan: "#E8F0F4",
        surfaceWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;