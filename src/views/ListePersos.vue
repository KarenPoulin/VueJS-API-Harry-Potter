<template>
    <h1>Liste personnage</h1>
    <template v-for="character in allCharactersResults" :key="character.index">
        <RouterLink :to="{name:'persosdetails', params:{id: character.index}}">
            <characterCards :character="character"/>
        </RouterLink>
        <button @click="favoris.ajouter(character)">ajouter</button>
        <button @click="favoris.supprimer(character)">supprimer</button>
    </template>
</template>

<script setup>
import characterCards from '@/components/characterCards.vue';
import { onMounted } from 'vue';
import {useAllCharacters} from '../composables/callsToAPI';

import { useFavorisStore } from '@/stores/favoris';

const favoris = useFavorisStore();

    const {allCharactersResults, getAllCharacters} = useAllCharacters();

    onMounted(() => {
        getAllCharacters();
    })
</script>

<style>

</style>