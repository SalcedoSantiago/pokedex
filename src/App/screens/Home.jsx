import React from 'react'
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import PokemonGroup from '../../pokedex/screens/PokemonGroup';
import SinglePokemon from '../../pokemon/screens/singlePokemon';


const Home = () => {

    return (
        <Stack>
            <Grid templateColumns='65% 35%' gap={6}>
                <GridItem w='100%'>
                    <PokemonGroup />
                </GridItem>
                <GridItem w='100%' h={'100%'} >
                    <SinglePokemon />
                </GridItem>
            </Grid>
        </Stack>
    )
}

export default Home