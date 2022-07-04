import React, { useMemo, useState } from 'react';
import GridList from '../components/GridList';
import { usePokedex, useFilter } from '../hooks';
import { Box, Flex } from '@chakra-ui/react';
import OrderFilter from '../components/order';
import Paginations from '../components/Paginations';
import Search from '../components/Search';

const PokemonGroup = () => {
    const { pokemonGroup, currentPage, setCurrentPage } = usePokedex();
    const { count } = useFilter();
    const [search, setSearch] = useState('');
    const [order, setOrdering] = useState('DEF');


    const Pokemones = useMemo(() => {
        const init = pokemonGroup.slice(0, count);
        const pokeFilter = pokemonGroup.filter(({ name }) => name.split('-').join(' ').toLowerCase().includes(search.toLowerCase())) || init;
        if (order == 'ASC' || order == 'DES') {
            return [...pokeFilter].sort((a, b) => order == 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
        } else {
            return pokeFilter
        }

    }, [pokemonGroup, count, search, order])
    const PokemonGrid = Pokemones.slice(currentPage * 20, 20 + (20 * currentPage));

    return (
        <Box w="full">
            <Flex spacing={4} gap={4} pt={4} py={3}>
                <Box w={"80%"}>
                    <Search value={{ search, setSearch }} />
                </Box>
                <Box w="auto">
                    <OrderFilter order={order} setOrder={setOrdering} />
                </Box>
            </Flex>
            <Box w="100%" flex={1}>
                <Paginations items={Pokemones} value={{ currentPage, setCurrentPage }} />
            </Box>
            <GridList items={PokemonGrid} />
            <Box w="100%" flex={1} mt="4">
                <Paginations items={Pokemones} value={{ currentPage, setCurrentPage }} />
            </Box>
        </Box >
    )
}

export default PokemonGroup