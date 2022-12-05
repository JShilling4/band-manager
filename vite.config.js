import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": process.env,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/main.scss";`,
      },
    },
  },
});
