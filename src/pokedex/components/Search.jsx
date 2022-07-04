import { Image, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useEffect, useMemo, useRef } from 'react'
import { debounce } from 'lodash'
import { CloseButton } from '@chakra-ui/react'

const Search = ({ value: { setSearch } }) => {


    const ref = useRef();

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
            <Input ref={ref} placeholder='Search pokemon...' fontSize={'md'} padding={3} py={4} onInput={debouncedResults} />
            <InputRightAddon py={3} children={
                <>
                    <CloseButton onClick={() => {
                        setSearch('');
                        ref.current.value = '';

                    }} />
                </>
            } />
        </InputGroup>
    )
}

export default Search