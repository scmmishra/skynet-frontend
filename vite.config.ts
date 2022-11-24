import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
      google: {
        families: ["Inter"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
