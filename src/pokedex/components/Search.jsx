import { Image, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { debounce } from 'lodash'


const Search = ({ value: { setSearch } }) => {

    const handleChange = ({ target: { value } }) => {
        setSearch(value)
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 300);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });


    return (
        <InputGroup size='md' w={'full'}>
            <Input placeholder='Search pokemon...' fontSize={'md'} padding={3} py={4} onInput={debouncedResults} />
            <InputRightAddon py={3} children={
                <Image w={19} bgColor={'white'} src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png" />
            } />
        </InputGroup>
    )
}

export default Search