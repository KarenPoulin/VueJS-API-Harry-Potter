<template>
    <div :style="{backgroundImage: `url(${heroImage})`}" class="mb-10 bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
        <div class="py-48 mx-auto max-w-screen-xl text-center">
            <h1 class="font-serif text-4xl font-extrabold tracking-widest text-white uppercase">Liste de favoris</h1>
        </div>
    </div>
    <charactersTable />
</template>
<script setup>
import charactersTable from '@/components/charactersTable.vue';
import heroImage from '../assets/slider-3.jpg'

</script>
