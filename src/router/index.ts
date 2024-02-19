import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/main/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
