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
        daarkBg: '#050505',
        daarkPurple: '#8A05FF',
        daarkCyan: '#00F2FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Recomendado para ar tecnológico
      }
    },
  },
  plugins: [],
};
export default config;