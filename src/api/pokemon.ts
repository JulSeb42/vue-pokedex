/*=============================================== Pokemon ===============================================*/

import { http } from "./http-common"
import { SERVER_PATHS } from "@/router/paths"
import type { ApiResponse } from "@/types"

class PkmnService {
    allPokemon = (): ApiResponse<any> => {
        return http.get(SERVER_PATHS.ALL_POKEMON)
    }
    pokemonById = (id: string, region?: string): ApiResponse<any> => {
        return http.get(SERVER_PATHS.POKEMON_BY_ID(id, region))
    }
    allGeneration = (): ApiResponse<any> => {
        return http.get(SERVER_PATHS.ALL_GENERATION)
    }
    generationByGen = (gen: number): ApiResponse<any> => {
        return http.get(SERVER_PATHS.GENERATION_BY_GEN(gen))
    }
    allTypes = (): ApiResponse<any> => {
        return http.get(SERVER_PATHS.ALL_TYPES)
    }
    typeByName = (type: string, secondType?: string): ApiResponse<any> => {
        return http.get(SERVER_PATHS.TYPE_BY_NAME(type, secondType))
    }
}

export const pkmnService = new PkmnService()
