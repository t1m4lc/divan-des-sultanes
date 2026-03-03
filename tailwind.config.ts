import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#f0faf6",
          100: "#d1f0e3",
          200: "#a7e4c9",
          300: "#6ed4a8",
          400: "#34c48a",
          500: "#0fa96f",
          600: "#058c58",
          700: "#047048",
          800: "#065a3d",
          900: "#064a33",
          950: "#022c1e",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d5",
          200: "#f4dfaa",
          300: "#ecc974",
          400: "#e2ae42",
          500: "#d4982e",
          600: "#c08425",
          700: "#9e6520",
          800: "#815021",
          900: "#6b431e",
          950: "#3d220d",
        },
        warm: {
          50: "#fdfbf7",
          100: "#f9f5ed",
          200: "#f3ecde",
          300: "#ebe0cc",
        },
      },
      boxShadow: {
        "warm-sm": "0 1px 2px 0 rgba(180, 140, 80, 0.05)",
        warm: "0 1px 3px 0 rgba(180, 140, 80, 0.08), 0 1px 2px -1px rgba(180, 140, 80, 0.08)",
        "warm-md":
          "0 4px 6px -1px rgba(180, 140, 80, 0.08), 0 2px 4px -2px rgba(180, 140, 80, 0.06)",
        "warm-lg":
          "0 10px 15px -3px rgba(180, 140, 80, 0.08), 0 4px 6px -4px rgba(180, 140, 80, 0.06)",
        "warm-xl":
          "0 20px 25px -5px rgba(180, 140, 80, 0.08), 0 8px 10px -6px rgba(180, 140, 80, 0.06)",
        "gold-glow":
          "0 0 20px rgba(212, 152, 46, 0.15), 0 0 40px rgba(212, 152, 46, 0.05)",
        "emerald-glow":
          "0 0 20px rgba(5, 140, 88, 0.12), 0 0 40px rgba(5, 140, 88, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
