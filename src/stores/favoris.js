import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFavorisStore = defineStore('favoris', () => {
    const listeFavoris = reactive([]);

    const ajouter = (character) => {
        if (listeFavoris.some(element => element.index === character.index)) {
            return;
        } else {
            listeFavoris.push(character);
        }
        console.log(listeFavoris);
    };

    const supprimer = (character) => {

        listeFavoris.forEach((element, index)=> {
            if(element.index === character.index) {
                listeFavoris.splice(index, 1)
            }
        });
        console.log(listeFavoris);
    };

    return {listeFavoris, ajouter, supprimer}
})

/* const indexASupprimer = listeFavoris.findIndex(element => element.index === character.index);
if (indexASupprimer !== -1) {
    listeFavoris.splice(indexASupprimer, 1);
} */


/* if (listeFavoris.some(element => element.index === character.index)) {
    listeFavoris.splice(element.index, 1);
}
 */