import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
        port: 5173,
        proxy: {
          "^/api": "http://localhost:5211"
        }
    },
  plugins: [react(), mkcert()],
})
