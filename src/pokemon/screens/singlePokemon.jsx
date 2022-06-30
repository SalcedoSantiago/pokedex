import React, { useState, useLayoutEffect, useEffect } from 'react'
import Card from '../../pokedex/components/Card';
import { useFetch, usePokedex } from '../../pokedex/hooks'
import { Box, Text, Heading, Stack, Skeleton, Flex, Stat } from '@chakra-ui/react';
import Abilities from '../components/Abilities';
import Stats from '../components/Stats';
import Evolutions from '../components/Evolutions';



const SinglePokemon = () => {
    const { singlePokemon } = usePokedex();
    const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        if (singlePokemon) {
            const URL = `https://pokeapi.co/api/v2/pokemon-species/${singlePokemon?.name}/`;
            useFetch(URL).then((data) => setPokemon(data));
        }
    }, [singlePokemon])


    if (!singlePokemon) {
        return (
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        )
    }

    return (
        <Box position={'sticky'} top={0} px={5}>
            <Card currentPokemon={singlePokemon} />
            <Text textAlign={'center'} fontSize="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </Text>
            <Box px={5}>
                <Abilities abilities={singlePokemon?.abilities} />
                <Flex align={'center'} py={2}>
                    <Box textAlign={'center'} w="50%" fontWeight={500} fontSize="md" >
                        <Text fontWeight={600}>Height</Text>
                        <Text>{singlePokemon?.height ? `${singlePokemon?.height}m` : 'undefined'}</Text>
                    </Box>
                    <Box textAlign={'center'} w="50%" fontWeight={500} fontSize="md" >
                        <Text fontWeight={600}>Weight</Text>
                        <Text>{singlePokemon?.weight ? `${singlePokemon?.weight}Kg` : 'undefined'}</Text>
                    </Box>
                </Flex>
                <Box w="full" textAlign={'center'} py={2} fontWeight={500} fontSize="md" >
                    <Text fontWeight={600}>Base exp</Text>
                    <Text>{singlePokemon?.base_experience ? singlePokemon.base_experience : '0'}</Text>
                </Box>
            </Box>
            <Stats info={singlePokemon.stats} />
            {/* <Evolutions id={singlePokemon.id} /> */}
        </Box>
    )
}

export default SinglePokemon;
