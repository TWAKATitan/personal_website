// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal_website/', // 👈 very important
  plugins: [react()],
})
