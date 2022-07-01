import { Image, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React from 'react'

const Search = ({ value: { search, setSearch } }) => {

    return (
        <InputGroup size='md' w={'full'}>
            <Input placeholder='Search pokemon...' fontSize={'md'} padding={3} py={4} value={search} onInput={({ target: { value } }) => { setSearch(value) }} />
            <InputRightAddon children={
                <Image w={19} bgColor={'white'} src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png" />
            } />
        </InputGroup>
    )
}

export default Search