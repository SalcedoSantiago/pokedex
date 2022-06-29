import { useContext } from 'react';
import { PokedexContext } from "./context";


export const usePokedex = () => {

    const {
        state: {
            pokemonGroup,
            Pokemones,
            singlePokemon
        },
        actions: {
            setSinglePokemon
        }
    } = useContext(PokedexContext)


    return {
        pokemonGroup,
        singlePokemon,
        setSinglePokemon,
        Pokemones,
    }
}

export const useFilter = () => {
    const {
        state: {
            count
        },
        actions: {
            setCount
        }
    } = useContext(PokedexContext)

    return {
        count,
        setCount
    }
}



export const useFetch = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export const useFetchImage = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
}