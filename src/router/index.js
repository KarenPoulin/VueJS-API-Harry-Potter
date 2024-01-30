import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import ListePersos from '../views/ListePersos.vue'
import Recherche from '../views/Recherche.vue'
import PersoDetails from '../views/PersoDetails.vue'
import Favoris from '../views/Favoris.vue'
import Erreur from "../views/Erreur.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/personnages',
      name: 'personnages',
      component: ListePersos
    },
    {
      path: '/persosdetails/:id',
      name: 'persosdetails',
      component: PersoDetails
    },
    {
      path: '/recherche',
      name: 'recherche',
      component: Recherche
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: Favoris
    },
    {
      path: '/:pathMatch(.*)*',
      component: Erreur
    }
  ]
})

export default router
