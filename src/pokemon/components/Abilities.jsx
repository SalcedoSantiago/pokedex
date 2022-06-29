import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Abilities = ({ abilities }) => {

    console.log('abilities', abilities);

    return (
        <Box textAlign={'center'} pt={2}>
            <Heading fontSize="large" textTransform={'uppercase'}>Abilities</Heading>
            <Flex justifyContent="center" alignItems={'center'} gap={3} py={2} flexWrap='wrap'>
                {abilities.map(({ ability: { name } }) =>
                    <Box
                        width={'auto'}
                        key={name}
                        px={2}
                        py={1}
                        borderWidth="2px"
                        borderColor={'purple.800'}
                        borderRadius={'xl'}
                        textAlign='start'
                        fontWeight={700}
                        fontSize="small"
                        textTransform="capitalize"
                    >{name.split('-').join(' ')}
                    </Box>
                )
                }
            </Flex>
        </Box>
    )
}

export default Abilities