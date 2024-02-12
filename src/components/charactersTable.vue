<template>
    <div class="grid grid-cols-12">
        <div class="col-start-2 col-end-12">
            <table class="bg-white p-6 w-full rounded-lg border border-separate border-spacing-y-1">
                <thead>
                    <tr class="mx-2 sm:mx-4 px-2 md:px-4">
                        <th class="mx-2 uppercase text-[12px] sm:text-xs lg:text-base">Nom du personnage</th>
                        <th class="mx-2 uppercase text-[12px] sm:text-xs lg:text-base">Date de naissance</th>
                        <th class="mx-2 uppercase text-[12px] sm:text-xs lg:text-base">Maison</th>
                        <th class="mx-2 uppercase text-[12px] sm:text-xs lg:text-base">Interprété par</th>
                        <th class="mx-2 uppercase text-[12px] sm:text-xs lg:text-base"></th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="character in favoris.listeFavoris" :key="character.index">
                        <tr class="my-10 text-center text-[12px] sm:text-xs lg:text-base">
                            <td class="">{{ character.fullName }}</td>
                            <td class="">{{ character.birthdate }}</td>
                            <td class="">{{ character.hogwartsHouse }}</td>
                            <td class="">{{ character.interpretedBy }}</td>
                            <td>
                                <button @click="favoris.supprimer(character)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill text-red-600" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                    </svg>
                                </button>   
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useFavorisStore } from '@/stores/favoris';

    const favoris = useFavorisStore();
</script>