import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/css-gallery/',
  build: {
    outDir: 'docs',
  },
})
