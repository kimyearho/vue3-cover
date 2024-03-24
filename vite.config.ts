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
        proxy: {
            '/api': {
                target: 'https://youtube.googleapis.com/youtube/v3', // 사용할 요청 도메인을 설정한다.
                changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경한다. 이를 통해 클라이언트의 요청을 target에 설정된 도메인에서 온 것 처럼 변경할 수 있다.
                rewrite: path => path.replace(/^\/api/, ''), // 프록시 요청의 경로를 재작성하는 함수를 설정한다.
            }
        }
    },
})
