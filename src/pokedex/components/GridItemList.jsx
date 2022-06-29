import React, { useState, useEffect } from 'react'
import { useFetch, useFetchImage, usePokedex } from '../hooks';
import { Box } from '@chakra-ui/react';
import Card from './Card';

const GridItemList = ({ data }) => {
    const [currentPokemon, setCurrentPokemon] = useState();
    const { singlePokemon, setSinglePokemon } = usePokedex();
    const { url, name } = data;

    useEffect(() => {
        useFetch(url).then((data) => {
            const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.order - 1}.png`;
            useFetchImage(urlImage).then(image => {
                setCurrentPokemon({
                    ...data,
                    image: image
                })
            })
        }
        )
    }, [])


    return (
        <Box
            maxW={'250px'}
            w={'full'}
            bg={'white'}
            shadow="xl"
            rounded={'md'}
            overflow={'hidden'}
            cursor="pointer"
            onClick={() => { singlePokemon?.name != name && setSinglePokemon(currentPokemon) }}
        >
            <Card currentPokemon={currentPokemon} />
        </Box>
    )
}

export default GridItemList



