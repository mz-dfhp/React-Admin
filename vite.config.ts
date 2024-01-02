import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

function reslovePath(pathName) {
  return path.resolve(__dirname, pathName)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': reslovePath('./src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0',
    cors: true,
    // 跨域代理配置
    proxy: {
      '^/api/.*': {
        target: 'https://win-admin-api-dev.binarydance.net',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // * 打包去除 console.log && debugger
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
