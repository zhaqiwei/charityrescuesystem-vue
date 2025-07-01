import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // 添加 Node.js 标准库的浏览器 polyfill
    nodePolyfills({
      // 只包含需要的模块
      include: ['path'],
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname,'src')
    },
  },
  // 优化依赖
  optimizeDeps: {
    include: ['element-plus'],
  },
  // 构建配置
  build: {
    rollupOptions: {
      external: ['node:url'], // 排除 Node.js 内置模块
    },
  },
})
