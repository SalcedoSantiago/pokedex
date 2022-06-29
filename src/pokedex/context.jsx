import { createContext, useState, useEffect } from "react";

import { Flex, Spinner, Center } from '@chakra-ui/react';

const PokedexContext = createContext({});

function PokedexProvider({ children }) {
    const [pokemonGroup, setPokemonGroup] = useState();
    const [singlePokemon, setSinglePokemon] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // const responseData = JSON.parse(window.localStorage.getItem("pokemon"));
        // if (Boolean(responseData?.length)) {
        //     setPokemonGroup(responseData);
        // } else {
        fetch(
            "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
            .then((res) => res.json()).then((response) => {
                const pokeData = response.results.slice(1, 20);
                setPokemonGroup(pokeData);
                // window.localStorage.setItem("pokemon", JSON.stringify(pokeData));
            })
        // }
        setTimeout(() => {
            setLoaded(true)
        }, 1500)
    }, [])

    const value = {
        state: {
            pokemonGroup,
            singlePokemon
        },
        actions: {
            setSinglePokemon
        }
    }


    if (!Boolean(pokemonGroup?.length) || !loaded) {
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