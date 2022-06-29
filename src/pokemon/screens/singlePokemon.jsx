import React, { useState, useLayoutEffect, useEffect } from 'react'
import Card from '../../pokedex/components/Card';
import { useFetch, usePokedex } from '../../pokedex/hooks'
import { Box, Text, Heading } from '@chakra-ui/react';
import Abilities from '../components/Abilities';



const SinglePokemon = () => {
    const { singlePokemon } = usePokedex();
    const [description, setDescription] = useState('');
    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (Boolean(singlePokemon)) {
            const URL = `https://pokeapi.co/api/v2/pokemon-species/${singlePokemon?.name}/`;
            useFetch(URL).then((data) => setDescription(data.flavor_text_entries[2].flavor_text));
        }
    }, [singlePokemon])

    if (!Boolean(singlePokemon)) {
        return (
            <Box>Placeholder</Box>
        )
    }

    return (
        <Box position={'sticky'} top={2} pt={10}>
            <Card currentPokemon={singlePokemon} />
            <Text textAlign={'center'}>
                {description || ''}
            </Text>
            <Abilities abilities={singlePokemon?.abilities} />
        </Box>
    )
}

export default SinglePokemon;
