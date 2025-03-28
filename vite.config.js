import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This ensures proper network access
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.jpeg"],
});
