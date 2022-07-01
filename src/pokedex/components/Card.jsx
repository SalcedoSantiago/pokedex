import { useState, useEffect } from 'react';
import { Stack, Text, Heading, Image, useColorModeValue, Skeleton, Spinner, Flex, Box, Center } from '@chakra-ui/react';
import Badget from '../../pokemon/components/badget';

const Card = ({ currentPokemon, bigImage = false }) => {

    if (!Boolean(currentPokemon?.name)) {
        return (
            <Flex alignItems="center" justifyContent="center" paddingY={12} h="full">
                <Spinner color='red.500' w={10} h={10} />
            </Flex>
        )
    }

    const currentImage = currentPokemon?.sprites.other['official-artwork'].front_default ? currentPokemon?.sprites.other['official-artwork'].front_default : currentPokemon.sprites.front_default;


    return (
        <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
        >
            <Stack mb={2}>
                <Skeleton
                    h={bigImage ? '170px' : '100px'}
                    fadeDuration={1}
                    isLoaded={true}
                >
                    <Image
                        h={bigImage ? '170px' : '100px'}
                        src={currentImage ? currentImage : 'https://via.placeholder.com/150'}
                    />
                </Skeleton>
            </Stack>
            <Text
                fontSize={'sm'}
                fontWeight={600}
                py={0}
                px={3}
                mt={0}
                lineHeight={0}
                rounded={'full'}
                color="gray.500"
            >
                N°{currentPokemon?.order}
            </Text>

            <Box py={3}>
                <Skeleton isLoaded={currentPokemon?.name} h={'20px'}>
                    <Heading
                        fontSize={'xl'}
                        color="blue.900"
                        textTransform={'capitalize'}
                    >
                        {currentPokemon?.name ? currentPokemon.name : 'Uname'}
                    </Heading>
                </Skeleton>
            </Box>

            <Stack direction={'row'} align={'center'} justify={'center'}>
                {currentPokemon?.types && currentPokemon?.types.map(({ type: { name } }) =>
                    <Badget key={name} type={name} />
                )}
            </Stack>
        </Stack >
    )
}

export default Card
