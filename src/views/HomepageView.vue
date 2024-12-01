<script setup lang="ts">
import { RouterLink } from "vue-router"
import { PATHS } from "@/router/paths"
import { OVERLAYS } from "@/data/tokens"
</script>

<template>
    <div class="cover">
        <img src="/background-pokemon.jpg" alt="" />

        <div class="content">
            <h1>Pokedex</h1>

            <div class="flex">
                <RouterLink :to="PATHS.POKEMON_LIST">All Pokémon</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
