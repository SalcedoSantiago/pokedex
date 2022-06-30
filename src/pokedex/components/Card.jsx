import { useState, useEffect } from 'react';
import { Stack, Text, Heading, Image, useColorModeValue, Skeleton, Spinner, Flex, Box, Center } from '@chakra-ui/react';
import Badget from '../../pokemon/components/badget';

const Card = ({ currentPokemon }) => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000)
    }, [])


    if (!Boolean(currentPokemon?.sprites?.front_default)) {
        return (
            <Flex alignItems="center" justifyContent="center" paddingY={12} h="full">
                <Spinner color='red.500' w={10} h={10} />
            </Flex>
        )
    }

    return (
        <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
        >
            <Stack mb={2}>
                <Skeleton height='100px' isLoaded={loaded} fadeDuration={1} m>
                    <Image
                        h={'100px'}
                        src={currentPokemon?.sprites?.front_default ? currentPokemon.sprites.front_default : 'https://via.placeholder.com/150'}
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
