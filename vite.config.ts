import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": "/src" } },
  base: "/car-rent/",
  build: {
    outDir: 'build',
    rollupOptions: {
      input: './index.html', // Ensure this path is correct
    },
  },

})
