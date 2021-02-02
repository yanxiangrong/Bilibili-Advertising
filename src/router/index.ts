import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/indihome',
        name: 'IndiHome',
        component: () => import('../components/IndiHome.vue')
    },
    {
        path: '/',
        redirect: '/indihome'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router