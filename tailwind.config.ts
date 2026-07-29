import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // Cor principal do briefing: "Coral Blaze".
        // Usada SÓ em destaques: botões, links, ícones, hover, CTAs.
        coral: {
          DEFAULT: "#EA4E2C",
          soft: "#F3714F",
          dark: "#C93E20",
        },
        // Cor secundária: creme, base do layout claro.
        cream: {
          DEFAULT: "#F7F3EE",
          light: "#FCFAF7",
        },
        ink: {
          // Cinza escuro para textos principais.
          DEFAULT: "#3C3C3C",
        },
        mist: {
          // Cinza claro para bordas e divisores discretos.
          DEFAULT: "#D9D9D9",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        // Títulos: sofisticação editorial.
        display: ["var(--font-display)", "serif"],
        // Textos: máxima legibilidade.
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        // Bordas arredondadas de 16px pedidas no briefing.
        brand: "16px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(60, 60, 60, 0.15)",
        lift: "0 20px 40px -18px rgba(60, 60, 60, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
