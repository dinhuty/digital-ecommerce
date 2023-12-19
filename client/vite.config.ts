import * as path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@composables": path.resolve(__dirname, "./src/composables"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@plugins": path.resolve(__dirname, "./src/plugins"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts({
      defaultLayout: 'default'
    })
    
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_mixins.scss";`,
      },
    },
  },
})
