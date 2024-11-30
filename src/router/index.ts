import { createRouter, createWebHistory } from "vue-router"
import { SITE_DATA } from "@/data"
import { PATHS } from "./paths"
import HomepageView from "@/views/HomepageView.vue"
import PokemonListView from "@/views/PokemonListView.vue"
/* Prepend import - DO NOT REMOVE */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: PATHS.ROOT,
            name: "Homepage",
            component: HomepageView,
            meta: { title: SITE_DATA.PAGE_TITLE("Homepage") },
        },
        {
            path: PATHS.POKEMON_LIST,
            name: "PokemonList",
            component: PokemonListView,
            meta: { title: SITE_DATA.PAGE_TITLE("PokemonList") },
        },
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
