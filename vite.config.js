import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'game.html'),
        nested: resolve(__dirname, 'script.js'),
        nested: resolve(__dirname, 'main.js'),
      },
    },
  },
})