import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
        button: '0 0 8px #4f46e5, inset 0 0 40px #4f46e5'
      },
      transitionDuration:{
        'long': '3s' 
      }
    },
  },
  plugins: [],
};
export default config;
