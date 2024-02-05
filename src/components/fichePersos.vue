<template>
    <div class="py-12 col-start-3 col-end-11 bg-slate-800 flex flex-col items-center text-white">
        <div class="flex flex-row">
            <img :src="characterResult.image" :alt="`Photo de ${characterResult.fullName}`" class="my-2 w-96">
            <div class="ml-8">
                <h2 class="mt-10 text-white text-3xl font-extrabold font-serif uppercase tracking-wider">{{ characterResult.fullName }}</h2>
                <div class="my-4 ml-6">
                    <p class="text-lg font-light mb-2">Surnom: <span class="font-bold">{{ characterResult.nickname }}</span></p>
                    <p class="text-lg font-light mb-2">Date de naissance: <span class="font-bold">{{ characterResult.birthdate }}</span></p>
                    <div v-if="characterResult.children.length !== 0" class="flex flex-col">
                        <p class="text-lg font-light">Ses enfants:</p>
                        <template v-for="child in characterResult.children" :key="child">
                            <p class="font-bold">{{ child }}</p>
                        </template>
                    </div>
                    <p class="text-lg font-light my-2">Maison: <span class="font-bold">{{ characterResult.hogwartsHouse }}</span></p>
                    <p class="text-lg font-light mb-2">Interprété par: <span class="font-bold">{{ characterResult.interpretedBy }}</span></p>
                </div>
            </div>
        </div>
        <RouterLink to="/personnages" class="mt-6 py-2 px-4 font-medium bg-white text-black rounded-lg">Retour à la liste de personnages</RouterLink>
    </div>
</template>

<script setup>
    const props = defineProps({
        characterResult: Object
    })
</script>