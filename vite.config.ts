import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      },
    },
  },
  base: "./",
  build: {
    outDir: "../AI-English-Backend/templates",
    assetsDir: "static",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "static/js/[name].[hash].js",
        chunkFileNames: "static/js/[name].[hash].js",
        assetFileNames: "static/[ext]/[name].[hash].[ext]",
      },
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif'],
});
