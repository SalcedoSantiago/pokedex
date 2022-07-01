import React from 'react';
import { Stack, Box, Flex, Container, Heading, Center, Image } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme';
import imageLogo from '../../assets/logo.png'


const Layout = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <Stack direction="column" flex={1} height="100vh" spacing={6}>
                <Box w={'full'} shadow="md" paddingY={4}>
                    <Container maxW={"6xl"}>
                        <Stack direction={'row'} justify="space-between" align={'center'}>
                            <Image w="150px" src={imageLogo} />
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
                <Box pt={40} pb={10} textAlign="center" fontWeight={600} >
                    by Santiagosalcedo
                </Box>
            </Stack>
        </ChakraProvider >
    )
}

export default Layout
