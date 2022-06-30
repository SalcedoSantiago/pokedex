import React, { useMemo, useState } from 'react';
import GridList from '../components/GridList';
import { usePokedex, useFilter } from '../hooks';
import { Box, Button, Input, InputGroup, InputRightAddon, Select, Stack, Text } from '@chakra-ui/react';

const PokemonGroup = () => {
    const { pokemonGroup } = usePokedex();
    const { count } = useFilter();
    const [page, setPage] = useState(20);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [search, setSearch] = useState('');
    const [order, setOrdering] = useState('DEF');

    const Pokemones = useMemo(() => {
        const init = pokemonGroup.slice(0, count);
        const pokeFilter = pokemonGroup.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) || init;
        switch (order) {
            case 'DEF':
                return pokeFilter
            case 'ASC':
                return [...pokeFilter].sort((a, b) => a.name.localeCompare(b.name))
            case 'DES':
                return [...pokeFilter].sort((a, b) => b.name.localeCompare(a.name))

            default:
                return pokeFilter
        }
    }, [pokemonGroup, count, search, order, min, max])
    const PokemonGrid = !search && Pokemones.slice(page - 20, page) || Pokemones.slice(0, 20);

    const handleOrder = ({ target: { value } }) => {
        setOrdering(value)
    }

    return (
        <Box w="full">
            <Stack spacing={4}>
                <InputGroup size='sm'>
                    <Input placeholder='mysite' onInput={({ target: { value } }) => { setSearch(value) }} />
                    <InputRightAddon children='.com' />
                </InputGroup>
            </Stack>

            <Stack direction={'row'} justifyContent="space-between" py={6}>
                <Box fontWeight={600}>
                    <Select defaultValue={order} cursor={'pointer'} onChange={(e) => { handleOrder(e); }}>
                        <option value='DEF' >Default</option>
                        <option value='ASC'>Asending</option>
                        <option value='DES'>Desending</option>
                    </Select>
                </Box>
                <Stack spacing={3} direction="row" alignItems={'center'}>
                    <Stack spacing={4} direction='row' align='center' py={5}>
                        <Button colorScheme='teal' size='sm' onClick={() => { setPage(page - 20) }}>
                            prev
                        </Button>
                        <Button colorScheme='teal' size='sm' onClick={() => { setPage(page + 20) }}>
                            next
                        </Button>
                    </Stack>
                </Stack>
            </Stack >
            <GridList items={PokemonGrid} />
        </Box >
    )
}

export default PokemonGroup