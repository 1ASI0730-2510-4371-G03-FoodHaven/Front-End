import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/shared/presentation/home-view.page.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHashHistory(), // 👈 este cambio es clave
    routes
})

export default router
