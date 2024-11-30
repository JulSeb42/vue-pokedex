import { createRouter, createWebHistory } from "vue-router"
import { SITE_DATA } from "@/data"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Homepage",
            component: HomeView,
            meta: { title: SITE_DATA.PAGE_TITLE("Homepage") },
        },
        {
            path: "/about",
            name: "About",
            component: () => import("../views/AboutView.vue"),
            meta: { title: SITE_DATA.PAGE_TITLE("Prout") },
        },
        /* Prepend here - DO NOT REMOVE */
    ],
})

router.beforeEach(to => {
    const { title } = to.meta
    const defaultTitle = SITE_DATA.NAME
    // @ts-expect-error
    document.title = title || defaultTitle
})

export default router
