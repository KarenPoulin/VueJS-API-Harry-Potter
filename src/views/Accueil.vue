<template>
    <main>

        <img :src="Image" alt="" class="object-cover w-screen max-h-[600px]">

<!--         <heroCarousel/> -->
        <formNewsletter />
    </main>
</template>

<script setup>
import formNewsletter from '@/components/formNewsletter.vue';
import heroCarousel from '@/components/heroCarousel.vue';
import Image from '../assets/slider-1.jpg'
</script>
