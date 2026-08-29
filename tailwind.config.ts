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
        background: "var(--background)",
        foreground: "var(--foreground)",
        slateSurface: {
          50: "#f8fafc",
          800: "#1e293b",
          900: "#0f172a",
          950: "#090d16",
          card: "#111726",
          hover: "#161e31",
        },
        brandAccent: {
          cyan: "#38bdf8",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          emerald: "#10b981",
        },
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        smooth: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
