import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 仅在开发环境引入 polyfill 插件
let plugins = [vue(), vueDevTools()]

// 检查是否安装了 vite-plugin-node-stdlib-browser
try {
  const { nodePolyfills } = require('vite-plugin-node-stdlib-browser')
  plugins.push(
      nodePolyfills({
        include: ['path'],
      })
  )
} catch (error) {
  console.warn('vite-plugin-node-stdlib-browser 未安装，跳过 polyfill 配置')
}

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['element-plus'],
  },
  build: {
    rollupOptions: {
      external: ['node:url'],
    },
  },
})