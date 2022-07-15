

import { Box, Select } from '@chakra-ui/react';
import React from 'react'

const Order = ({ order, setOrder }) => {

    return (
        <Select fontWeight={500} defaultValue={order} cursor={'pointer'} onChange={({ target: { value } }) => { setOrder(value); }} bgColor="white">
            <Box as="option" py={6} value='DEF' >Default</Box>
            <Box as="option" py={6} value='ASC'>Asending (A-Z)</Box>
            <Box as="option" py={6} value='DES'>Desending (Z-A)</Box>
        </Select>
    )
}

export default Order