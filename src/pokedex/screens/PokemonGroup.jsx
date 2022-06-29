import React, { useMemo, useState } from 'react';
import GridList from '../components/GridList';
import { usePokedex, useFilter } from '../hooks';
import { Box, Button, Input, InputGroup, InputRightAddon, Stack } from '@chakra-ui/react';

const PokemonGroup = () => {
    const { pokemonGroup } = usePokedex();
    const { count } = useFilter();
    const [search, setSearch] = useState('');
    const Pokemones = useMemo(() => {
        const init = pokemonGroup.slice(0, count);
        return (pokemonGroup.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) || init).slice(0, count);
    }, [pokemonGroup, count, search])


    // console.log('Pokemones', Pokemones);

    return (
        <Box w="full">
            <Stack spacing={4}>
                <InputGroup size='sm'>
                    <Input placeholder='mysite' onInput={({ target: { value } }) => { setSearch(value) }} />
                    <InputRightAddon children='.com' />
                </InputGroup>
            </Stack>

            <GridList items={Pokemones} />
        </Box>
    )
}

export default PokemonGroup