import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Search',
        component: () => import('../pages/search/SearchItemList.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
