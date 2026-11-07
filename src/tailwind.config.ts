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
        obsidian: "#080B12",
        navy: {
          deep: "#0D1422",
          surface: "#121A2A",
          card: "#152033",
          border: "#1E2C44",
        },
        electric: {
          blue: "#57C8FF",
          cyan: "#79DDFF",
          glow: "rgba(87, 200, 255, 0.35)",
        },
        accent: {
          purple: "#8B77FF",
        },
        canvas: {
          white: "#F4F7FF",
          muted: "#9BAAC3",
          subtle: "#62728C",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "'Space Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 45s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
