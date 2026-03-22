import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), solid()],
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
      jsxImportSource: 'solid-js',
    },
  },
})
