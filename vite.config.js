import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/yasin-tahlil-vue/',  // ← huruf kecil semua, sesuai URL
})