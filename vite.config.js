import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // relative paths work under any Pages URL
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: ['index.html', 'music/index.html', 'shows/index.html', 'biography/index.html', 'contact/index.html'],
    },
  },
})
