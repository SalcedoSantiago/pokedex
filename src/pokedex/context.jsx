import { createContext, useState, useEffect } from "react";
import pokeball_gray from '../assets/pokeball_gray.png'
import { Flex, Spinner, Center, Image, Box } from '@chakra-ui/react';
import { useFetch } from "./hooks";

const PokedexContext = createContext({});
const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=950';
function PokedexProvider({ children }) {
    const [pokemonGroup, setPokemonGroup] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState();
    const [count, setCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);
    const [loaded, setLoaded] = useState(false);

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

        setTimeout(() => {
            setLoaded(true)
        }, 1000)

    }, [])

    const value = {
        state: {
            pokemonGroup,
            singlePokemon,
            count,
            currentPage,
        },
        actions: {
            setSinglePokemon,
            setCount,
            setCurrentPage,
        }
    }

    if (!loaded || !Boolean(pokemonGroup?.length)) {
        return (
            <Center h="100vh" w="full">
                <Flex alignItems="center" justifyContent="center" paddingY={12}>
                    <Box backgroundImage={`url(${pokeball_gray})`} w={'100px'} h="100px" className="rotating" />
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