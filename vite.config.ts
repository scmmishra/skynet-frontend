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
        preconnect: true,
        families: [
          {
            name: "Inter",
            styles: "wght@400;500;600;700",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
