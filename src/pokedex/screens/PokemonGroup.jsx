import React from 'react';
import GridList from '../components/GridList';
import { usePokedex, useFilter } from '../hooks';
import { Box, Button } from '@chakra-ui/react';

const PokemonGroup = () => {
    const { Pokemones } = usePokedex();
    const { setCount, count } = useFilter();

    // console.log('Pokemones', Pokemones);

    return (
        <Box w="full">
            <Button onClick={() => {
                setCount(count + 1);
            }}>
            </Button>
            <GridList items={Pokemones} />
        </Box>
    )
}

export default PokemonGroup