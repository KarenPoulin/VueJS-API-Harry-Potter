import { reactive, ref } from "vue";

const baseUrl = "https://potterapi-fedeperin.vercel.app/fr/";

/* https://potterapi-fedeperin.vercel.app/fr/characters */
export function useAllCharacters() {
    const allCharactersResults = reactive([]);

    const getAllCharacters = () => {
        fetch(`${baseUrl}characters`)
            .then(response => {
                return response.json();
            })

            .then(data => {
                allCharactersResults.splice(0, allCharactersResults.length);
                allCharactersResults.push(...data);
            })

            .catch(error => {
                console.log(error);
            })
    }

    return {
        allCharactersResults, getAllCharacters
    }
}


/* https://potterapi-fedeperin.vercel.app/fr/characters?search=Hermione */
export function useSearchCharacters() {
    const charactersSearchResults = reactive([]);
    const noResult = ref("");

    const searchCharacters = (input) => {
        charactersSearchResults.splice(0, charactersSearchResults.length);
        fetch(`${baseUrl}characters?search=${input}`)
            .then(response => {
                return response.json();
            })

            .then(data => {
                if (data.length === 0) {
                    noResult.value = "Aucun résultats";
                } else {
                    charactersSearchResults.push(...data);
                }
            })

            .catch(error => {
                console.log(error);
            })
    }

    return {
        charactersSearchResults, noResult, searchCharacters
    }
}


/* https://potterapi-fedeperin.vercel.app/fr/characters?index=4 */
export function useCharacter() {
    const characterResult = ref(null);

    const getCharacter = (index) => {
        fetch(`${baseUrl}characters?index=${index}`)
            .then(response => {
                return response.json();
            })

            .then (data => {
                characterResult.value = data;
            })

            .catch(error => {
                console.log(error);
            })
    }

    return {
        characterResult, getCharacter
    }
}
