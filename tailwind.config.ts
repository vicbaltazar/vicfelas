import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fffaf3",
        "pink-petal": "#ffb6c1",
        "sky-powder": "#b0e0e6",
        "lime-glow": "#dde874",
        "ink-plum": "#3d2b3f",
        "mauve-soft": "#a98aa8",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        code: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      boxShadow: {
        window: "4px 4px 0px 0px rgba(61,43,63,0.15)",
        "window-hover": "6px 6px 0px 0px rgba(61,43,63,0.2)",
        dock: "0 8px 24px rgba(61,43,63,0.12)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
