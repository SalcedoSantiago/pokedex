import React, { useState, useEffect } from 'react'
import { useFetch, useFetchImage, usePokedex } from '../hooks';
import { Box } from '@chakra-ui/react';
import Card from './Card';

const GridItemList = ({ data }) => {
    const [currentPokemon, setCurrentPokemon] = useState();
    const { singlePokemon, setSinglePokemon } = usePokedex();
    const { url, name } = data;

    useEffect(() => {
        useFetch(url).then((data) => setCurrentPokemon(data))
    }, [])

    return (
        <Box
            maxW={'250px'}
            w={'full'}
            bg={'white'}
            shadow="md"
            rounded={'xl'}
            overflow={'hidden'}
            py={3}
            cursor="pointer"
            h="260px"
            maxHeight={'260px'}
            onClick={() => { singlePokemon?.name != name && setSinglePokemon(currentPokemon) }}
        >
            <Card currentPokemon={currentPokemon} />
        </Box>
    )
}

export default GridItemList



