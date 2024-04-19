import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    imagetools(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/images/*', dest: 'assets/images' }
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets'
  }
})