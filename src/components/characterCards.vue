<template>
    <div class="border-2 border-slate-800 m-2 p-2">
        <h2>{{ character.fullName }}</h2>
        <img :src="character.image" :alt="`Photo de ${character.fullName}`">
        <p>Date de naissance: {{ character.birthdate }}</p>
        <p>Maison: {{ character.hogwartsHouse }}</p>
<!--         <button @click="favoris.ajouter(character)">ajouter</button>
        <button @click="favoris.supprimer(character)">supprimer</button> -->
    </div>
</template>

<script setup>
/* import { useFavorisStore } from '@/stores/favoris';

const favoris = useFavorisStore(); */

    const props = defineProps({
        character: Object
    })
</script>

<style>

</style>