import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@deepersignals/components": path.resolve(__dirname, "./packages/components/src/index.ts"),
      "@deepersignals/tokens": path.resolve(__dirname, "./packages/tokens/src/index.ts"),
      "@deepersignals/styles": path.resolve(__dirname, "./packages/styles/src/index.css"),
    },
  },
});
