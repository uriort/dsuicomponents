import path from "node:path";
import { fileURLToPath } from "node:url";
import { mergeConfig, type UserConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(configDir, "..");
const postcssConfigPath = path.resolve(rootDir, "postcss.config.js");

const config: StorybookConfig = {
  stories: [
    "../packages/tokens/src/**/*.stories.@(ts|tsx)",
    "../packages/components/src/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      css: {
        postcss: postcssConfigPath,
      },
      resolve: {
        alias: {
          "@": path.resolve(rootDir, "src"),
          "@deepersignals/components": path.resolve(rootDir, "packages/components/src/index.ts"),
          "@deepersignals/tokens": path.resolve(rootDir, "packages/tokens/src/index.ts"),
          "@deepersignals/styles": path.resolve(rootDir, "packages/styles/src/index.css"),
        },
      },
      server: {
        fs: {
          allow: [rootDir],
        },
      },
    } satisfies UserConfig);
  },
};

export default config;
