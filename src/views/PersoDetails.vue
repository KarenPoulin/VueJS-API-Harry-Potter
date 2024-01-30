<template>
    <h1>Perso Détails</h1>
    <div v-if="characterResult !== null">
        <p>{{ characterResult.fullName }}</p>
        <img :src="characterResult.image" :alt="`Photo de ${characterResult.fullName}`">
        <p>Surnom: {{ characterResult.nickname }}</p>
        <p>Date de naissance: {{ characterResult.birthdate }}</p>
        <div v-if="characterResult.children.length !== 0">
            <p>Ses enfants:</p>
            <template v-for="child in characterResult.children" :key="child">
                <p>{{ child }}</p>
            </template>
        </div>
        <p>Maison: {{ characterResult.hogwartsHouse }}</p>
        <p>Interprété par: {{ characterResult.interpretedBy }}</p>
    </div>
    
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { ref } from "vue";
    import {useCharacter} from '../composables/callsToAPI';

    const {characterResult, getCharacter} = useCharacter();
    const route = useRoute();
    let indexCharacter = ref(null);
    onMounted(() => {
        indexCharacter = route.params.id;
        getCharacter(indexCharacter);
    })


</script>

<style>

</style>
