import { Stack, Text, Heading, Image, useColorModeValue, Skeleton } from '@chakra-ui/react';
import Badget from '../../pokemon/components/badget';

const Card = ({ currentPokemon }) => {

    return (
        <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
        >
            <Stack>
                <Skeleton height='100px' isLoaded={currentPokemon?.sprites?.front_default} fadeDuration={1}>
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
            <Heading
                py={3}
                fontSize={'large'}
                color="blue.900"
                textTransform={'capitalize'}
            >
                {currentPokemon?.name}
            </Heading>
            <Stack direction={'row'} align={'center'} justify={'center'}>
                {currentPokemon?.types && currentPokemon?.types.map(({ type: { name } }) =>
                    <Badget key={name} type={name} />
                )}
            </Stack>
        </Stack>
    )
}

export default Card
