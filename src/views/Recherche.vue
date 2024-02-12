<template>
        <div :style="{backgroundImage: `url(${heroImage})`}" class="bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
            <div class="py-48 mx-auto max-w-screen-xl text-center">
                <h1 class="mx-4 font-serif text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-widest text-white uppercase">Recherche de personnages</h1>
            </div>
        </div>
        <div class="bg-slate-800 py-10">
            <div class="grid grid-cols-6 sm:grid-cols-12">
                <div class="col-start-1 col-end-7 mx-8 sm:mx-0 sm:col-start-3 sm:col-end-11">
                    <p class="mb-8 text-white text-sm sm:text-base text-center font-light">Découvrez le monde magique à travers notre outil de recherche de personnages. Explorez des héros, des méchants, des professeurs et des élèves. 
                        Que vous recherchiez vos favoris ou découvriez de nouveaux visages, notre base de données complète vous fournit toutes les informations nécessaires. 
                        Plongez dans l'aventure et explorez les mystères de chaque personnage de cet univers enchanteur.</p>
                    <form action="" class="flex flex-col justify-center">
                        <div class="flex flex-col items-center lg:flex-row mb-4 w-full lg:justify-between lg:items-center">
                            <label for="personnage" class="text-white text-center mr-4 w-96 mb-3 lg:mb-0">Rechercher un personnage:</label>
                            <input type="text" id="personnage" name="personnage" minlength="1" maxlength="100" placeholder="Harry" v-model="inputCharacter"
                                class="py-2 px-3 rounded-md w-full">
                        </div>
                        <button @click="research" class="py-2 px-4 font-medium bg-white text-black rounded-lg w-full">Rechercher</button>
                    </form>
                    <div v-show="noResult" :class="noResultClass">
                        <p>{{ noResult }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-12">
            <div class="col-start-2 col-end-12">
                <div v-if="charactersSearchResults.length !== 0" class="my-10 flex flex-row flex-wrap justify-center">
                    <template v-for="character in charactersSearchResults" :key="character.index">
                        <characterCards :character="character"/>
                    </template>
                </div>
            </div>
        </div>

</template>

<script setup>
import characterCards from '@/components/characterCards.vue';
import { computed, ref } from 'vue';
import {useSearchCharacters} from '../composables/callsToAPI';
import heroImage from '../assets/slider-2.jpg'

    const { charactersSearchResults, noResult, searchCharacters} = useSearchCharacters();
    const inputCharacter = ref(null);


    const research = () => {
        event.preventDefault();
        searchCharacters(inputCharacter.value);
    }

    const noResultClass = computed(() => {
        if (charactersSearchResults.length !== 0) {
            return 'hidden';
        } else {
            return 'mt-8 text-white text-center font-bold text-xl tracking-wider rounded-lg';
        }
    })
</script>
