import React from 'react';
import { Stack, Box, Flex, Container, Heading, Center } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme';


const Layout = ({ children }) => {


    return (
        <ChakraProvider theme={theme}>
            <Stack direction="column" flex={1} height="100vh" spacing={6}>
                <Box w={'full'} borderBottom={'1px solid #ddd'} paddingY={4}>
                    <Container maxW={"6xl"}>
                        <Stack direction={'row'} justify="space-between" align={'center'}>
                            <Box>
                                <Heading>Pokedex</Heading>
                            </Box>
                            <Stack as="nav" direction={'row'}>
                                <Box>Star</Box>
                                <Box>Stats</Box>
                                <Box>Search</Box>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
                <Box w="full">
                    <Container maxW={"6xl"}>
                        {children}
                    </Container>
                </Box>

            </Stack>
        </ChakraProvider >
    )
}

export default Layout
