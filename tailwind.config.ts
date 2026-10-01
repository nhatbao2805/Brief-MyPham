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
        matcha: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        oat: {
          DEFAULT: "#FBFBF7",
          50: "#FFFFFD",
          100: "#FBFBF7",
          200: "#F3F2EB",
          300: "#E7E5D9",
        },
        butter: {
          DEFAULT: "#FEF08A",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
        },
        berry: {
          DEFAULT: "#F472B6",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F472B6",
          400: "#EC4899",
        },
        charcoal: {
          DEFAULT: "#121212",
          50: "#2A2A2A",
          100: "#1E1E1E",
          200: "#121212",
        },
      },
      fontFamily: {
        jua: ["'Jua'", "sans-serif"],
        gowun: ["'Gowun Dodum'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        pop: "4px 4px 0px 0px #121212",
        "pop-lg": "6px 6px 0px 0px #121212",
        "pop-sm": "2px 2px 0px 0px #121212",
        "pop-green": "4px 4px 0px 0px #14532D",
        "pop-matcha": "5px 5px 0px 0px #16A34A",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
