<template>
    <div :style="{backgroundImage: `url(${heroImage})`}" class="mb-10 bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
        <div class="py-48 mx-auto max-w-screen-xl text-center">
            <h1 class="font-serif text-4xl font-extrabold tracking-widest text-white uppercase">Liste de personnages</h1>
        </div>
    </div>

    <div class="grid grid-cols-12">
        <div class="col-start-2 col-end-12">
            <div class="flex flex-row flex-wrap justify-center">
                <template v-for="character in allCharactersResults" :key="character.index">
                       <characterCards :character="character"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import characterCards from '@/components/characterCards.vue';
import { onMounted } from 'vue';
import {useAllCharacters} from '../composables/callsToAPI';
import heroImage from '../assets/slider-2.jpg'


    const {allCharactersResults, getAllCharacters} = useAllCharacters();

    onMounted(() => {
        getAllCharacters();
    })
</script>
