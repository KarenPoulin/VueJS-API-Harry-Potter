<template>
    <h1>Recherche</h1>
    <form action="">
        <div>
            <label for="personnage">Rechercher un personnage:</label>
            <input type="text" id="personnage" name="personnage" minlength="1" maxlength="100" v-model="inputCharacter">
        </div>
        <button @click="research">Rechercher</button>
    </form>

    <div v-if="charactersSearchResults.length !== 0">
        <RouterLink v-for="character in charactersSearchResults" :key="character.index" :to="{name:'persosdetails', params:{id: character.index}}">
            <characterCards :character="character"/>
        </RouterLink>
    </div>
    <div v-else>{{ noResult }}</div>
</template>

<script setup>
import characterCards from '@/components/characterCards.vue';
import { ref } from 'vue';
import {useSearchCharacters} from '../composables/callsToAPI';

    const { charactersSearchResults, noResult, searchCharacters} = useSearchCharacters();
    const inputCharacter = ref(null);


    const research = () => {
        event.preventDefault();
        searchCharacters(inputCharacter.value);
    }
</script>

<style>

</style>