<template>
    <div class="m-4 mb-6 bg-slate-800 w-96 flex flex-col rounded-lg">
        <div class="relative top-0 left-0">
            <h2 class="p-3 text-white text-center text-xl font-extrabold font-serif uppercase tracking-wider absolute inset-x-0 -bottom-7">{{ character.fullName }}</h2>
            <img :src="character.image" :alt="`Photo de ${character.fullName}`" class="rounded-t-lg w-full h-96 object-cover">

            <div class="absolute top-0 right-0 pt-3 pr-3">
                <div v-if="isInFavorite(character)">
                    <button @click="favoris.supprimer(character)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill text-red-600" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                    </button>   
                </div>
                <div v-else>
                    <button @click="favoris.ajouter(character)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart text-red-600" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 
                            6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center py-4 px-8 mt-6 text-white">
            <p class="text-base font-light mb-1">Date de naissance: <span class="font-bold">{{ character.birthdate }}</span></p>
            <p class="text-base font-light mb-1">Maison: <span class="font-bold">{{ character.hogwartsHouse }}</span></p>
            <RouterLink :to="{name:'persosdetails', params:{id: character.index}}" class="my-3 py-2 px-4 font-medium bg-white text-black rounded-lg">
                Fiche complète
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useFavorisStore } from '@/stores/favoris';

    const isInFavorite = (character) => {
        return favoris.listeFavoris.some(element => element.index === character.index);
    }

    const props = defineProps({
        character: Object
    })


    const favoris = useFavorisStore();

</script>

<style>

</style>