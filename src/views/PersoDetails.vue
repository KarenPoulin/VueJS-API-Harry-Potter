<template>
    <div :style="{backgroundImage: `url(${heroImage})`}" class="mb-10 bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
        <div class="py-48 mx-auto max-w-screen-xl text-center">
            <h1 class="font-serif text-4xl font-extrabold tracking-widest text-white uppercase">Fiche détaillée</h1>
        </div>
    </div>
    <div v-if="characterResult !== null" class="grid grid-cols-12">
        <fichePersos :characterResult="characterResult" />
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { ref } from "vue";
    import {useCharacter} from '../composables/callsToAPI';
    import fichePersos from '@/components/fichePersos.vue';
    import heroImage from '../assets/slider-2.jpg'

    const {characterResult, getCharacter} = useCharacter();
    const route = useRoute();
    let indexCharacter = ref(null);
    onMounted(() => {
        indexCharacter = route.params.id;
        getCharacter(indexCharacter);
    })


</script>
