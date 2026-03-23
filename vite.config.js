import { defineConfig } from 'vite'

export default defineConfig({
  // Remove the base path or set to '/' for root
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true
  }
})
