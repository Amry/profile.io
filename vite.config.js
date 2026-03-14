import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        work: resolve(__dirname, 'src/work.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },
})
