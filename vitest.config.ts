import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      css: false,
      globals: true,
      environment: "jsdom",
      deps: {
        fallbackCJS: true,
      },
    },
  })
);
