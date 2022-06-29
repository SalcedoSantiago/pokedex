import React from 'react';
import GridList from '../components/GridList';
import { usePokedex } from '../hooks';
import { Box } from '@chakra-ui/react';

const PokemonGroup = () => {
    const { pokemonGroup } = usePokedex();

    return (
        <Box w="full">
            <GridList items={pokemonGroup} />
        </Box>
    )
}

export default PokemonGroup