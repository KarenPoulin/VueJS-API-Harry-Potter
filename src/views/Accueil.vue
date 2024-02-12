<template>
    <main>
        <div :style="{backgroundImage: `url(${heroImage})`}" class="mb-10 bg-center bg-neutral-600 bg-blend-multiply bg-cover w-full">
            <div class="py-48 mx-auto max-w-screen-xl text-center">
                <h1 class="mx-4 font-serif text-lg sm:text-xl md:text-2xl lg:text-4xl font-light tracking-widest text-white uppercase leading-6 md:leading-10">
                    Chroniques des <span class="font-extrabold">Héros Célèbres :</span> Découvrez les <span class="font-extrabold">Secrets</span> 
                    et les <span class="font-extrabold">Légendes des Personnages</span></h1>
            </div>
        </div>

        <formNewsletter />
    </main>
</template>

<script setup>
import formNewsletter from '@/components/formNewsletter.vue';
import heroImage from '../assets/slider-1.jpg'
</script>
