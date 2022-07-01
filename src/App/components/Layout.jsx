import React from 'react';
import { Stack, Box, Container, Image } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme';
import imageLogo from '../../assets/logo.svg'
import { usePokedex } from '../../pokedex/hooks';
import Pokelike from '../../pokelike/screens/Pokelike';

const Layout = ({ children }) => {

    const { currentPage, setCurrentPage } = usePokedex();

    return (
        <ChakraProvider theme={theme}>
            <Stack direction="column" flex={1} height="100vh" spacing={6}>
                <Box w={'full'} paddingY={4} py={4} mt={4}>
                    <Container maxW={"6xl"} shadow="md" rounded={'xl'}  >
                        <Stack direction={'row'} justify="end" align={'center'} py={4} >
                            <Image w="150px" src={imageLogo} cursor="pointer" onClick={() => {
                                currentPage != 0 && setCurrentPage(0)
                            }} />
                            <Stack>
                                <Pokelike />
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
                <Box w="full">
                    <Container maxW={"6xl"}>
                        {children}
                    </Container>
                </Box>
                <Box pt={40} pb={10} textAlign="center" fontWeight={600} >
                    by Santiagosalcedo
                </Box>
            </Stack>
        </ChakraProvider >
    )
}

export default Layout
