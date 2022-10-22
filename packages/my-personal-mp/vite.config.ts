import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

export default defineConfig({
  plugins: [uni()],
  // @ts-ignore
  optimizeDeps: ['@dcloudio/uni-ui'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
