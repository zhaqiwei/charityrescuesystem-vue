import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    nodePolyfills({
      // 仅 polyfill 需要的 Node.js 模块
      include: ['path'],
      // 启用 Node.js 全局变量
      globals: {
        Buffer: true, // 启用 Buffer 全局变量
        global: true, // 启用 global 全局变量
        process: true, // 启用 process 全局变量
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': path.resolve(__dirname,'src')
    },
  },
  // 优化依赖
  optimizeDeps: {
    include: ['element-plus'],
    esbuildOptions: {
      plugins: [
      ],
    },
  },
  // 构建配置
  build: {
    rollupOptions: {
      external: ['node:url'], // 排除 Node.js 内置模块
    },
  },
});