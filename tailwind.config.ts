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
        ivory: {
          DEFAULT: "#f6f3ec",
          muted: "#ece8df",
          card: "#fdfcf9",
        },
        charcoal: {
          DEFAULT: "#1a1917",
          muted: "#5a574f",
        },
        olive: {
          DEFAULT: "#465738",
          dark: "#38462d",
          accent: "#2f3d2a",
          light: "#7d9469",
        },
        copper: "#7a6348",
        slate: "#3f5363",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-ibm-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
      boxShadow: {
        card: "0 8px 28px rgba(26, 25, 23, 0.07)",
        lift: "0 20px 50px rgba(26, 25, 23, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
