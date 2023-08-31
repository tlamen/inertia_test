import { defineConfig } from 'vite'
import ViteRails from 'vite-plugin-rails'

export default defineConfig({
  plugins: [
    ViteRails(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './app/frontend/tests/setup.js',
  },
})
