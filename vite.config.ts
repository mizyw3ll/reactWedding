import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Важно для Docker: слушаем все интерфейсы
    port: 5173, // Порт, который будет использоваться в Docker
    proxy: {
      '/api': {
        // В Docker используем имя сервиса backend из docker-compose
        target: process.env.VITE_API_URL || 'http://backend:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})