import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), /* tsconfig 설정 플러그인 */ tsconfigPaths()],
    base: './',
    server: {
        hmr: {
            overlay: false,
        },
    },
})
