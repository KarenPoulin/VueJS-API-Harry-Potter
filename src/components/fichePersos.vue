<template>
    <div class="py-8 md:py-12 px-4 col-start-3 col-end-11 bg-slate-800 flex flex-col items-center text-white rounded-lg">
        <div class="flex flex-col lg:flex-row">
            <img :src="characterResult.image" :alt="`Photo de ${characterResult.fullName}`" class="my-0 md:my-2 lg:w-80 2xl:w-96 rounded-lg">
            <div class="lg:ml-6 2xl:ml-8">
                <h2 class="mt-6 lg:mt-10 text-white text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold font-serif uppercase tracking-wider">{{ characterResult.fullName }}</h2>
                <div class="my-4 lg:ml-4 2xl:ml-6">
                    <p class="text-xs sm:text-sm 2xl:text-lg font-light mb-2">Surnom: <span class="font-bold">{{ characterResult.nickname }}</span></p>
                    <p class="text-xs sm:text-sm 2xl:text-lg font-light mb-2">Date de naissance: <span class="font-bold">{{ characterResult.birthdate }}</span></p>
                    <div v-if="characterResult.children.length !== 0" class="flex flex-col">
                        <p class="2xl:text-lg font-light">Ses enfants:</p>
                        <template v-for="child in characterResult.children" :key="child">
                            <p class="font-bold">{{ child }}</p>
                        </template>
                    </div>
                    <p class="text-xs sm:text-sm 2xl:text-lg font-light my-2">Maison: <span class="font-bold">{{ characterResult.hogwartsHouse }}</span></p>
                    <p class="text-xs sm:text-sm 2xl:text-lg font-light mb-2">Interprété par: <span class="font-bold">{{ characterResult.interpretedBy }}</span></p>
                </div>
            </div>
        </div>
        <RouterLink to="/personnages" class="mt-6 py-2 px-4 text-xs sm:text-base font-medium bg-white text-black rounded-lg hover:bg-yellow-400">Retour à la liste de personnages</RouterLink>
    </div>
</template>

<script setup>
    const props = defineProps({
        characterResult: Object
    })
</script>