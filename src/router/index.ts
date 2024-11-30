import { createRouter, createWebHistory } from "vue-router"
import { SITE_DATA } from "@/data"
/* Prepend import - DO NOT REMOVE */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /* Prepend route - DO NOT REMOVE */
    ],
})

router.beforeEach(to => {
    const { title } = to.meta
    const defaultTitle = SITE_DATA.NAME
    // @ts-expect-error
    document.title = title || defaultTitle
})

export default router
