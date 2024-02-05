<template>
        <div :style="{backgroundImage: `url(${heroImage})`}" class="bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
            <div class="py-48 mx-auto max-w-screen-xl text-center">
                <h1 class="font-serif text-4xl font-extrabold tracking-widest text-white uppercase">Recherche de personnages</h1>
            </div>
        </div>
        <div class="bg-slate-800 py-10">
            <div class="grid grid-cols-12">
                <div class="col-start-5 col-end-9">
                    <form action="" class="flex flex-col justify-center">
                        <div class="flex flex-row mb-4 w-full justify-between items-center">
                            <label for="personnage" class="text-white mr-4 w-96">Rechercher un personnage:</label>
                            <input type="text" id="personnage" name="personnage" minlength="1" maxlength="100" v-model="inputCharacter"
                                class="py-2 px-3 rounded-md w-full">
                        </div>
                        <button @click="research" class="py-2 px-4 font-medium bg-white text-black rounded-lg">Rechercher</button>
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



<!--     <div v-if="charactersSearchResults.length !== 0">
        <template v-for="character in charactersSearchResults" :key="character.index">
            <characterCards :character="character"/>
        </template>
    </div>
    <div v-else>{{ noResult }}</div> -->
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
