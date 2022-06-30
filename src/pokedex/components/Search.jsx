import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React from 'react'

const Search = ({ search, setSearch }) => {

    return (
        <InputGroup size='md' w={'full'}>
            <Input placeholder='mysite' value={search} onInput={({ target: { value } }) => { setSearch(value) }} />
            <InputRightAddon children='.com' />
        </InputGroup>
    )
}

export default Search