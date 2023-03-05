import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
//unocss
import Unocss from 'unocss/vite'
//path
import path from 'path'

const reslovePath = (pathName) => path.resolve(__dirname, pathName)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: true
    }),
    Unocss()
  ],
  resolve: {
    alias: {
      '@': reslovePath('./src')
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  server: {
    open: true,
    port: 8081,
    host: '0.0.0.0',
    cors: true,
    // 跨域代理配置
    proxy: {
      '/api': {
        target: 'https://www.baidu.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // * 打包去除 console.log && debugger
  esbuild: {
    pure: ['console.log', 'debugger']
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
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
