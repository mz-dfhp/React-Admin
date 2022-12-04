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
    port: 8081
  }
})
