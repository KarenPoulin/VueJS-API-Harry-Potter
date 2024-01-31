<template>
    <div class="grid grid-cols-12 my-8">
        <div class="m-3 col-start-2 col-end-6 rounded-lg">
            <img :src="NewlettersImage" alt="Daily Prophet newsletter" class="rounded-lg">
        </div>

        <div class="col-start-6 col-end-12 bg-slate-800 m-3 p-8 rounded-lg flex flex-col justify-center">
            <h2 class="text-white mb-2 pb-1 uppercase text-3xl font-bold tracking-wider border-b-2">Plongez dans la Magie!</h2>
            <p class="text-white mb-10 leading-8">Inscrivez-vous à notre infolettre sur Harry Potter pour un accès exclusif à des annonces, des événements 
                et des révélations sur l'univers magique de J.K. Rowling. Recevez régulièrement des actualités dans votre boîte de réception 
                et profitez d'offres spéciales réservées aux abonnés. Rejoignez-nous pour une aventure sorcière unique !</p>
            <div v-if="!isFormValid">
                <form action="">
                    <div class="flex flex-col mb-4">
                        <div class="flex flex-row w-full items-baseline">
                            <label for="name" class="text-white mr-4">Nom</label>
                            <input type="text" id="name" name="name" @change="validateString(infos.name, 'name')" v-model="infos.name" placeholder="John Doe"
                                class="py-2 px-3 w-full rounded-md">
                        </div>
                        <p v-if="validationChamps.name !== ''" class="pt-2 text-xs text-red-500">{{ validationChamps.name }}</p>
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex flex-row w-full items-baseline">
                            <label for="email" class="text-white mr-4">Courriel</label>
                            <input type="email" id="email" name="email" @change="validateEmail(infos.email, 'email')" v-model="infos.email" placeholder="courriel@courriel.com"
                            class="py-2 px-3 w-full rounded-md">
                        </div>
                        <p v-if="validationChamps.email !== ''" class="pt-2 text-xs text-red-500">{{ validationChamps.email }}</p>
                    </div>
                    <button @click="submit" class="mt-2 py-3 px-5 text-black text-center bg-white rounded-md">S'inscrire à l'infolettre</button>
                </form>
            </div>
            <div v-else>
                <p class="text-white font-bold text-lg tracking-wider">Vous êtes inscrits</p>
            </div>
        </div>
    </div>
   
</template>

<script setup>
import { reactive, ref } from 'vue';
import NewlettersImage from '../assets/Daily_prophet_the_boy_who_lies.jpg'


    const infos = reactive({
        name: '',
        email: ''
    });

    const erreurMessage = {
        vide: 'Ce champs ne peut être vide',
        deux: "Ce champs doit contenir deux caractères ou plus.",
        cent: "Ce champs ne doit pas contenir plus de 100 caractères.",
        email: "Ce champs doit contenir un courriel valide"
    }

    const validationChamps = reactive({
        name: '',
        email: ''
    });

    let isFormValid = ref(false);


    const validateString = (input, fieldName) => {
        if (input === "") {
            validationChamps[fieldName] = erreurMessage.vide;
            return;
        }
        if (input.length < 2) {
            validationChamps[fieldName] = erreurMessage.deux;
            return;
        }
        if (input.length > 100) {
            validationChamps[fieldName] = erreurMessage.cent;
            return;
        }
        validationChamps[fieldName] = "";
    };

    const validateEmail = (input, fieldName) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input === "" || input.length < 2 || input.length > 100) {
            validateString(input, fieldName);
        } else {
            if (!emailPattern.test(input)) {
                validationChamps[fieldName] = erreurMessage.email;
            } else {
                validationChamps[fieldName]= "";
            }
        }
    };

    const submit = () => {
        event.preventDefault();
        console.log(isFormValid);
        validateString(infos.name, 'name');
        validateEmail(infos.email, 'email');
        if (validationChamps.name === "" && validationChamps.email === "") {
            isFormValid.value = true;
        } else {
            isFormValid.value = false;
        }
        console.log(isFormValid);
    };



</script>

<style>

</style>