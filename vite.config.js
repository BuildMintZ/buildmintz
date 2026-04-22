import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // Use relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true
  }
})