import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // GitHub Pages 部署配置
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/，则设置 base 为 '/<REPO>/'
  // 如果部署到自定义域名或 https://<USERNAME>.github.io/，则设置为 '/'
  base: process.env.GITHUB_ACTIONS ? '/3d-website/' : '/',
})

