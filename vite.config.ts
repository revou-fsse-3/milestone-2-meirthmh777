import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@context": fileURLToPath(new URL("./src/context", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@common": fileURLToPath(new URL("./src/common", import.meta.url)),
      // "@container": fileURLToPath(new URL("./src/container", import.meta.url)),
      "@libs": fileURLToPath(new URL("./src/libs", import.meta.url)),
    },
  },
});
