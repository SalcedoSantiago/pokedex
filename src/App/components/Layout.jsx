import React from 'react';
import { Stack, Box, Container, Image } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme';
import imageLogo from '../../assets/logo.svg'
import { usePokedex } from '../../pokedex/hooks';

const Layout = ({ children }) => {

    const { currentPage, setCurrentPage } = usePokedex();

    return (
        <ChakraProvider theme={theme}>
            <Stack direction="column" flex={1} height="100vh" spacing={6}>
                <Box w={'full'} mt={4}>
                    <Container maxW={"6xl"} rounded={'xl'}  >
                        <Stack direction={'row'} justify="center" align={'center'} py={4} >
                            <Image w="150px" src={imageLogo} cursor={currentPage != 0 && 'pointer'} onClick={() => {
                                currentPage != 0 && setCurrentPage(0)
                            }}
                                transition={'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'}
                                _hover={{ transform: currentPage != 0 && 'translateY(0) scale(1.2)' }}
                            />
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
