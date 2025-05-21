import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base: "/guess-who-fields-of-mistria",
  plugins: [
    react(),
    tailwindcss()],
})
