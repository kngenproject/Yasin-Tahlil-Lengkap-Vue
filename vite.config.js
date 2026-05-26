import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Yasin-Tahlil-Lengkap-Vue/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Yasin & Tahlil Lengkap',
        short_name: 'Yasin Tahlil',
        description: "Hadhroh, Yasin, Tahlil, dan Do'a Lengkap",
        theme_color: '#0F2E1B',
        background_color: '#0F2E1B',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/Yasin-Tahlil-Lengkap-Vue/',
        start_url: '/Yasin-Tahlil-Lengkap-Vue/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}']
      }
    })
  ]
})
