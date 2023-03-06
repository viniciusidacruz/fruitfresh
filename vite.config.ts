import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@global": path.resolve(__dirname, "./src/global"),
      "@types": path.resolve(__dirname, "./src/global/types"),
      "@pages": path.resolve(__dirname, "./src/global/pages"),
      "@hooks": path.resolve(__dirname, "./src/global/hooks"),
      "@styles": path.resolve(__dirname, "./src/global/styles"),
      "@configs": path.resolve(__dirname, "./src/global/configs"),
      "@contexts": path.resolve(__dirname, "./src/global/contexts"),
      "@services": path.resolve(__dirname, "./src/global/services"),
      "@components": path.resolve(__dirname, "./src/global/components"),
    },
  },
});
