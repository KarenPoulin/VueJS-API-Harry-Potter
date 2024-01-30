<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
  
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/personnages">Personnages</RouterLink></li>
          <li><RouterLink to="/recherche">Recherche</RouterLink></li>
          <li><RouterLink to="/favoris">Favoris</RouterLink></li>
        </ul>
      </nav>

  </header>




  <RouterView />
</template>

<style scoped>
</style>
