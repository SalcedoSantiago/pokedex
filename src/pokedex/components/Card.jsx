import { Stack, Text, Heading, Image, useColorModeValue, } from '@chakra-ui/react';
import Badget from '../../pokemon/components/badget';

const Card = ({ currentPokemon }) => {

    return (
        <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
        >
            <Image
                src={currentPokemon?.image ? currentPokemon.image : 'https://via.placeholder.com/150'}
            />
            <Text
                fontSize={'sm'}
                fontWeight={500}
                p={2}
                px={3}
                rounded={'full'}>
                N°{currentPokemon?.order}
            </Text>
            <Heading
                fontSize={'x'}
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
