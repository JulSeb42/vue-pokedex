/*=============================================== All paths ===============================================*/

export const PATHS = {
    ROOT: "/",
    POKEMON_LIST: "/pokemon-list",
    /* Prepend path - DO NOT REMOVE */
}

export const API_URL = "https://tyradex.vercel.app/api/v1"

export const SERVER_PATHS = {
    ALL_POKEMON: "/pokemon",
    POKEMON_BY_ID: (id: string, region?: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/${id}${region && `?region=${region}`}`,
    ALL_GENERATION: "/gen",
    GENERATION_BY_GEN: (gen: number) => `${SERVER_PATHS.ALL_GENERATION}/${gen}`,
    ALL_TYPES: "/types",
    TYPE_BY_NAME: (type: string, secondType?: string) =>
        `${SERVER_PATHS.ALL_TYPES}/${type}${secondType && `/${secondType}`}`,
}
