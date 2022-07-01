import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box, Stack, Image, Text, Skeleton, Heading } from '@chakra-ui/react'
import React from 'react'
import { usePokedex } from '../../pokedex/hooks'
import Badget from '../../pokemon/components/badget';

const ModalCmp = ({ isOpen, onClose }) => {

    const { pokeList } = usePokedex();

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={'center'}>Pokedex Like</ModalHeader>
                <ModalCloseButton />
                <ModalBody minH={'500px'}>


                    {Boolean(pokeList.length) ?
                        <Box w="100%">
                            {pokeList.map((poke) => {
                                const currentImage = poke?.sprites.other['official-artwork'].front_default ? poke?.sprites.other['official-artwork'].front_default : poke.sprites.front_default;
                                return (
                                    <Box w="100%">
                                        <Stack direction="row" alignItems={'center'} >
                                            <Box w={'auto'}>
                                                <Image h={'200px'} w="200px" src={currentImage ? currentImage : 'https://via.placeholder.com/150'} />
                                            </Box>
                                            <Box w={'auto'}>
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
                                                    N°{poke?.order}
                                                </Text>
                                                <Box py={3}>
                                                    <Skeleton isLoaded={poke?.name} h={'20px'}>
                                                        <Heading
                                                            fontSize={'xl'}
                                                            color="blue.900"
                                                            textTransform={'capitalize'}
                                                        >
                                                            {poke?.name ? poke.name : 'Uname'}
                                                        </Heading>
                                                    </Skeleton>
                                                </Box>
                                                <Stack direction={'row'} align={'center'} justify={'center'}>
                                                    {poke?.types && poke?.types.map(({ type: { name } }) =>
                                                        <Badget key={name} type={name} />
                                                    )}
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                )
                            }
                            )}
                        </Box>
                        :
                        <Box>
                            no hay pokemones
                        </Box>
                    }



                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalCmp