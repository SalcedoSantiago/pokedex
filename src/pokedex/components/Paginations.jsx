import { Box, Button, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { usePokedex } from '../hooks';

const Paginations = ({ value: { currentPage, setCurrentPage }, items }) => {
    // const { pokemonGroup } = usePokedex();
    const cantPages = Math.round((Boolean(items?.length) ? items.length : 0) / 20);
    const cantPagesArray = Array.from(Array(!!cantPages ? cantPages : 0).keys()); // array with 57 numbers 1 to 57 (maybe)
    const pages = cantPagesArray.slice(Math.max(0, currentPage - 3), currentPage + 3);

    useEffect(() => {
        if (currentPage > cantPages) {
            setCurrentPage(0)
        }
    }, [items])

    return (
        <Stack spacing={3} direction="row" alignItems={'center'} w="full" py={4}>
            <Stack spacing={4} direction='row' align='center' py={5} w="100%" flex={1} justifyContent="space-between">
                <Button
                    colorScheme='blue'
                    size='md'
                    paddingX={7}
                    onClick={() => { currentPage - 1 >= 0 && setCurrentPage(currentPage - 1) }}
                    disabled={!(currentPage - 1 >= 0)}
                >
                    prev
                </Button>
                {cantPages != 1 &&
                    (
                        <Stack direction="row" >
                            {currentPage > 4 &&
                                <Box
                                    bg={'white'}
                                    color={'black'}
                                    px={4}
                                    textAlign={'center'}
                                    py={1}
                                    rounded="sm"
                                    onClick={(() => { setCurrentPage(0) })}
                                    _hover={{ bg: 'blue.600', color: 'white' }}
                                    cursor="pointer"
                                >
                                    0
                                </Box>
                            }
                            {currentPage > 4 &&
                                <Box>
                                    ...
                                </Box>
                            }
                            {pages.map((x) =>
                                <Box
                                    key={x}
                                    bg={currentPage === x ? `blue.600` : 'white'}
                                    color={currentPage === x ? `white` : 'black'}
                                    px={4}
                                    textAlign={'center'}
                                    py={1}
                                    rounded="sm"
                                    onClick={(() => { setCurrentPage(x) })}
                                    _hover={{ bg: 'blue.600', color: 'white' }}
                                    cursor="pointer"
                                >
                                    {x}
                                </Box>
                            )
                            }
                            {currentPage < pages[pages.length - 1] &&
                                <Box>
                                    ...
                                </Box>
                            }
                            {currentPage < cantPages - 4 &&
                                <Box
                                    bg={'white'}
                                    color={'black'}
                                    px={4}
                                    textAlign={'center'}
                                    py={1}
                                    rounded="sm"
                                    onClick={(() => { setCurrentPage(cantPages - 1) })}
                                    _hover={{ bg: 'blue.600', color: 'white' }}
                                    cursor="pointer"
                                >
                                    {cantPages - 1}
                                </Box>
                            }
                        </Stack>
                    )
                }



                <Button
                    colorScheme='blue'
                    paddingX={7}
                    size='md'
                    onClick={() => { currentPage + 1 <= cantPages && setCurrentPage(currentPage + 1) }}
                    disabled={!(currentPage <= cantPages - 2)}
                >
                    next
                </Button>

            </Stack>
        </Stack>
    )
}


export default Paginations