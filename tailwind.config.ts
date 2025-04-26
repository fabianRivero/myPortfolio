import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/astro/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A192F",
        sideMenu: "#112240",
        text: "#CCD6F6",
        generalText: "#FFFFFF",
        primary: "#FF6F00",
        primaryHover: "#FF3D00",
        accent: "#FF6B6B",
      },
      boxShadow:{
       'main-inset': "inset -4px 4px 5px -3px rgba(0,0,0,1)"
      },
    },
  },
  plugins: [],
};

export default config;
