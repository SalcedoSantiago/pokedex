import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Abilities = ({ abilities }) => {


    return (
        <Box textAlign={'center'} pt={5}>
            {/* <Heading fontSize="large" textTransform={'uppercase'}></Heading> */}
            <Text fontSize={'xl'} textTransform='uppercase' textAlign={'center'} fontWeight={900}>Abilities</Text>
            <Flex justifyContent="center" alignItems={'center'} gap={1} py={2} flexWrap='wrap'>
                {abilities.map(({ ability: { name } }) =>
                    <Box
                        width={'auto'}
                        key={name}
                        px={3}
                        py={1}
                        borderWidth="2px"
                        bgColor={'blue.700'}
                        color={'white'}
                        borderRadius={'xl'}
                        textAlign='start'
                        fontWeight={400}
                        fontSize={16}
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