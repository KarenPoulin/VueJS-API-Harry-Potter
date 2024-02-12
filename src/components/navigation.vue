<template>
    <header>
        <nav :class="{ 'flex justify-center py-5 bg-zinc-900': !isMobile, 'flex justify-end py-5 bg-zinc-900': isMobile }">
            <div v-if="isMobile" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list mr-6" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <ul :class="{ 'hidden': !showLinks && isMobile, 'flex flex-col py-4 px-2 absolute top-[80px] bg-zinc-900': showLinks && isMobile, 'flex sm:flex-row sm:max-h-[80px]': !isMobile }">
                <li :class="{ 'mx-4 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': !isMobile, 
                        'px-6 py-2 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': isMobile}"
                    ><RouterLink to="/">Accueil</RouterLink></li>
                <li :class="{ 'mx-4 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': !isMobile, 
                        'px-6 py-2 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': isMobile}"
                    ><RouterLink to="/personnages">Personnages</RouterLink></li>
                <li :class="{ 'mx-4 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': !isMobile,
                        'px-6 py-2 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': isMobile }"
                    ><RouterLink to="/recherche">Recherche</RouterLink></li>
                <li :class="{ 'mx-4 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': !isMobile,
                        'px-6 py-2 font-serif tracking-wider text-base md:text-lg sm:font-normal text-stone-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400': isMobile }"
                    ><RouterLink to="/favoris">Favoris</RouterLink></li>
            </ul>
        </nav>
    </header>
    </template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

    const showLinks = ref(false);
    const isMobile = ref(window.innerWidth < 640);


    const handleResize = () => {
      isMobile.value = window.innerWidth < 640;
      if (!isMobile.value) {
        showLinks.value = false;
      }
    };

    const toggleMenu = () => {
        showLinks.value = !showLinks.value;
        console.log(showLinks.value);
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });


</script>