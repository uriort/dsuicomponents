import { tailwindThemeExtension } from "./packages/tokens/tailwind-preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./packages/components/src/**/*.{ts,tsx}",
    "./packages/styles/src/**/*.css",
  ],
  theme: {
    extend: tailwindThemeExtension,
  },
  plugins: [],
};
