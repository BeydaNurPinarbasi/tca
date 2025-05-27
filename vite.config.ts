import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // İstersen 'brotliCompress' da yazabilirsin
      ext: '.gz',        // .gz dosyası üretir
      threshold: 10240,  // 10KB üstü dosyalara uygular
    })
  ],
})
