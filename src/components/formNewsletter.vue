<template>
    <h1>Newsletter</h1>

    <div v-if="!isFormValid">
        <form action="">
            <div>
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" @change="validateString(infos.name, 'name')" v-model="infos.name" placeholder="John Doe">
                <p>{{ validationChamps.name }}</p>
            </div>
            <div>
                <label for="">email</label>
                <input type="email" id="email" name="email" @change="validateEmail(infos.email, 'email')" v-model="infos.email" placeholder="courriel@courriel.com">
                <p>{{ validationChamps.email }}</p>
            </div>
            <button @click="submit">S'inscrire à l'infolettre</button>
        </form>
    </div>
    <div v-else>
        <p>Vous êtes inscrits</p>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';


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