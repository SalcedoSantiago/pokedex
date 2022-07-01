import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Modal from '../components/Modal'

const Pokelike = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Pokelike;

