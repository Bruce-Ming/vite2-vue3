import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    ViteComponents({// 自动导入components
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
    }),
  ],
  server: {
    proxy: {
      // string shorthand
      //'/rest': 'https://pan.baidu.com/rest',
      // with options
      '/rest': {
        target: 'https://pan.baidu.com/rest',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest/, ''),
        headers:{ 'User-Agent': 'pan.baidu.com',}
      }
      // with RegEx
      
    },
    cors:true
  }
})
