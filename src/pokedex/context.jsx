import { createContext, useState, useEffect, useMemo } from "react";

import { Flex, Spinner, Center, list } from '@chakra-ui/react';
import { useFetch } from "./hooks";

const PokedexContext = createContext({});
const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000';
function PokedexProvider({ children }) {
    const [pokemonGroup, setPokemonGroup] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState();
    const [count, setCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const responseData = JSON.parse(window.localStorage.getItem("pokemon"));
        if (Boolean(responseData?.length)) {
            setPokemonGroup(responseData);
        } else {
            useFetch(URL).then((response) => {
                const pokeData = response.results;
                setPokemonGroup(pokeData);
                window.localStorage.setItem("pokemon", JSON.stringify(pokeData));
            })
        }
    }, [])


    const addPokeList = (pokemon) => {
        const exist = pokeList.filter(({ name }) => name === pokemon?.name);
        if (Boolean(exist.length)) {
            return;
        }
        setPokeList([...pokeList, pokemon])
    }

    const removePokList = () => {
        const newPokeList = pokeList.filter(({ name }) => name !== pokemon?.name);
        setPokeList(newPokeList)
    }


    const value = {
        state: {
            pokemonGroup,
            singlePokemon,
            count,
            currentPage,
            pokeList
        },
        actions: {
            setSinglePokemon,
            setCount,
            setCurrentPage,
            addPokeList,
            removePokList
        }
    }


    if (!Boolean(pokemonGroup?.length)) {
        return (
            <Center h="100vh" w="full">
                <Flex alignItems="center" justifyContent="center" paddingY={12}>
                    <Spinner color='red.500' w={10} h={10} />
                </Flex>
            </Center>
        )
    }

    return (
        <PokedexContext.Provider value={value}>
            {children}
        </PokedexContext.Provider>
    )
}


export {
    PokedexProvider,
    PokedexContext
}