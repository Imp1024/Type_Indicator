import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Type_Indicator/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})
