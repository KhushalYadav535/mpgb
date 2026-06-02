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
        // Deep midnight navy — the core "trust" tone of premium banking
        ink: {
          50: "#f4f6fb",
          100: "#e6ebf5",
          200: "#c4d0e8",
          300: "#94a8d2",
          400: "#5d77b0",
          500: "#3a5290",
          600: "#2a3c74",
          700: "#1e2c57",
          800: "#141d3c",
          900: "#0b1226",
          950: "#060a18",
        },
        // Champagne gold — the luxury accent
        gold: {
          50: "#fdf9ed",
          100: "#faf0cf",
          200: "#f3df9c",
          300: "#ecc862",
          400: "#e6b23a",
          500: "#d99821",
          600: "#bf7818",
          700: "#9f5917",
          800: "#82461a",
          900: "#6c3a18",
        },
        // Burgundy / maroon — premium Indian-bank signature (Axis-inspired)
        burgundy: {
          50: "#fcf3f6",
          100: "#f9e6ee",
          200: "#f0c2d6",
          300: "#e293b4",
          400: "#d05a8b",
          500: "#b23167",
          600: "#97144d",
          700: "#7d1142",
          800: "#5f0e33",
          900: "#420a24",
          950: "#2a0517",
        },
        emerald: {
          DEFAULT: "#0f7a5a",
          soft: "#1aa37a",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(11, 18, 38, 0.08)",
        card: "0 12px 40px -12px rgba(11, 18, 38, 0.18)",
        lift: "0 24px 60px -20px rgba(11, 18, 38, 0.35)",
        gold: "0 10px 30px -8px rgba(217, 152, 33, 0.45)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(110deg, #bf7818 0%, #e6b23a 35%, #faf0cf 50%, #e6b23a 65%, #bf7818 100%)",
        "ink-radial":
          "radial-gradient(1200px 600px at 80% -10%, rgba(58,82,144,0.35), transparent), radial-gradient(900px 500px at -10% 20%, rgba(217,152,33,0.12), transparent)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%,-6%) scale(1.1)" },
          "66%": { transform: "translate(-4%,4%) scale(0.95)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
        "aurora-slow": {
          "0%": { transform: "translate(0,0) scale(1.05)" },
          "50%": { transform: "translate(-6%,5%) scale(1.15)" },
          "100%": { transform: "translate(0,0) scale(1.05)" },
        },
        "ticker-blink": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "count-bar": {
          "0%": { transform: "scaleY(0.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-slow": "aurora-slow 24s ease-in-out infinite",
        "ticker-blink": "ticker-blink 2s ease-in-out infinite",
        "draw-line": "draw-line 2.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
