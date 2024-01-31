<template>
    <header>
        <nav class="flex justify-center py-5 bg-zinc-900">
            <ul class="flex flex-row max-h-[80px]">
                <li class="mx-4 font-serif tracking-wider text-lg font-normal text-stone-200 hover:text-stone-400 hover:border-b-2 hover:border-stone-400"><RouterLink to="/">Accueil</RouterLink></li>
                <li class="mx-4 font-serif tracking-wider text-lg font-normal text-stone-200 hover:text-stone-400 hover:border-b-2 hover:border-stone-400"><RouterLink to="/personnages">Personnages</RouterLink></li>
                <li class="mx-4 font-serif tracking-wider text-lg font-normal text-stone-200 hover:text-stone-400 hover:border-b-2 hover:border-stone-400"><RouterLink to="/recherche">Recherche</RouterLink></li>
                <li class="mx-4 font-serif tracking-wider text-lg font-normal text-stone-200 hover:text-stone-400 hover:border-b-2 hover:border-stone-400"><RouterLink to="/favoris">Favoris</RouterLink></li>
            </ul>
        </nav>
    </header>
    </template>

<script setup>
import { RouterLink } from 'vue-router';

</script>