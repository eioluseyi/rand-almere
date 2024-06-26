import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import {
  customShadow,
  fadeBottom,
  fadeLeft,
  fadeRight,
  fadeTop,
  fadeX,
  fadeY,
} from "./tailwind.util";

const config = {
  theme: {
    extend: {
      colors: {
        primary: "#F43855",
        primaryHover: "#F43855CC",
        primaryDisabled: "#F4385566",

        text: "#120207",
        textLight: "#616161",
        textGrey: "#849BA5",
        textWhite: "#FFFFFF",

        mainGreen: "#0B3142",
        mainBlue: "#2D4875",

        error: "#F04438",
        success: "#19D16E",
        warning: "#FFC526",

        bgWhite: "#FFF",
        bgGrey: "#F2F2F2",
        bgLightBlue: "#F2F8FA",
        bgPink: "#FAE1E9",
        bgBlue: "#E1EDFA",
        bgLightGreen: "#E6F3F3",

        darkerGrey: "#1C1D22",
        darkGray: "#2B2C34",

        greyBorder: "#D8D8D8",
      },
      borderRadius: {
        default: "10px",
      },
      maxWidth: {
        default: "1240px",
        half: "620px",
      },
      spacing: {
        section: "100px",
      },
      gridTemplateColumns: {
        "1fr_1.5fr": "1fr 1.5fr",
      },
      screens: {
        xxs: "350px",
        xxsmax: { max: "349px" },
        xs: "420px",
        xsmax: { max: "419px" },
        smmax: { max: "639px" },
        mdmax: { max: "767px" }, // max of md: size
        lgmax: { max: "1023px" }, // max of lg: size
        "3xl": "1600px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-forward": {
          "0%, 100%": {
            transform: "translateX(-5px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(5px)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "slide-right": {
          from: { transform: "translateX(-100px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-left": {
          from: { transform: "translateX(600px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-left-away": {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(-600px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-forward": "bounce-forward 0.9s infinite",
        "slide-right": "slide-right 0.3s ease forwards",
        "slide-left": "slide-left 1.6s ease forwards",
        "slide-left-away": "slide-left-away 0.8s ease forwards",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          shade: (color: any) => customShadow(color, 2),
          "shade-sm": (color: any) => customShadow(color, 4),
          "shade-md": (color: any) => customShadow(color, 6),
          "shade-lg": (color: any) => customShadow(color, 8),
          "shade-xl": (color: any) => customShadow(color, 10),
          "shade-none": (color: any) => customShadow(color, 0),
        },
        {
          values: theme("colors"),
        }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "fade-x": fadeX,
          "fade-y": fadeY,
          "fade-t": fadeTop,
          "fade-b": fadeBottom,
          "fade-l": fadeLeft,
          "fade-r": fadeRight,
        },
        {
          values: theme("spacing"),
        }
      );
    }),
  ],
} satisfies Config;

export default config;
