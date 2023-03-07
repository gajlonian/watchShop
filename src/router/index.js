import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import ("../views/Home.vue")
    },
    {
        name: "Watchs",
        path: "/watchs",
        component: () => import ("../views/Watchs.vue")
    },
    {
        name: "Accessories",
        path: "/accessories",
        component: () => import ("../views/Accessories.vue")
    },
    {
        name: "GiftFinder",
        path: "/gift_finder",
        component: () => import ("../views/GiftFinder.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router