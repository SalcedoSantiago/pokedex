import React, { useState, useLayoutEffect, useEffect } from 'react'
import Card from '../../pokedex/components/Card';
import { useFetch, usePokedex } from '../../pokedex/hooks'
import { Box, Text, Heading, Stack, Skeleton, Flex, Stat, Image, Center, Spinner } from '@chakra-ui/react';
import Abilities from '../components/Abilities';
import Stats from '../components/Stats';
import Evolutions from '../components/Evolutions';



const SinglePokemon = () => {
    const { singlePokemon } = usePokedex();
    const [desc, setDesc] = useState('');

    useEffect(() => {
        if (singlePokemon) {
            const URL = `https://pokeapi.co/api/v2/pokemon-species/${singlePokemon?.name}/`;
            useFetch(URL).then(({ flavor_text_entries }) => {
                const data = flavor_text_entries.find(({ language: { name } }) => name == 'en').flavor_text;
                setDesc(data)
            });
        }
    }, [singlePokemon])


    if (!singlePokemon) {
        return (
            <Box position={'sticky'} top={5} py={3} px={5} shadow="md" rounded={"xl"} h="750px" >
                <Stack h="100%" justifyContent={'center'} >
                    <Text fontFamily={"VT323"} fontSize="xl" px={2} mb={5}>
                        Hola a todos, Bienevenido a Pokedex, elije cualquier pokemon que
                        se encuentre y mira su informacion
                    </Text>
                    <Center>
                        <Image h={'250px'} src="https://images.wikidexcdn.net/mwuploads/wikidex/f/f8/latest/20180820010545/Profesor_Oak_LGPE.png" />
                    </Center>
                </Stack>
            </Box>
        )
    }

    return (
        <Box position={'sticky'} top={5} py={3} pb={6} px={5} shadow="md" rounded={"xl"}>
            <Card currentPokemon={singlePokemon} bigImage={true} />
            <Text textAlign={'center'} fontSize="md" fontWeight={500}>
                {desc}
            </Text>
            <Box px={5}>
                <Abilities abilities={singlePokemon?.abilities} />
                <Flex align={'center'} py={2}>
                    <Box textAlign={'center'} w="50%" fontWeight={500} fontSize="md" >
                        <Text fontWeight={600} color={'blue.900'} >Height</Text>
                        <Text>{singlePokemon?.height ? `${singlePokemon?.height}m` : 'undefined'}</Text>
                    </Box>
                    <Box textAlign={'center'} w="50%" fontWeight={500} fontSize="md" >
                        <Text fontWeight={600} color={'blue.900'} >Weight</Text>
                        <Text>{singlePokemon?.weight ? `${singlePokemon?.weight}Kg` : 'undefined'}</Text>
                    </Box>
                </Flex>
                <Box w="full" textAlign={'center'} py={2} fontWeight={500} fontSize="md" >
                    <Text fontWeight={600} color={'blue.900'}>Base exp</Text>
                    <Text>
                        {singlePokemon?.base_experience ? singlePokemon.base_experience : '0'}
                    </Text>
                </Box>
            </Box>
            <Stats info={singlePokemon.stats} />
            {/* <Evolutions id={singlePokemon.id} /> */}
        </Box>
    )
}

export default SinglePokemon;
