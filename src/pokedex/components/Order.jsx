

import { Box, Select } from '@chakra-ui/react';
import React from 'react'

const Order = ({ order, setOrder }) => {

    return (
        <Select defaultValue={order} cursor={'pointer'} onChange={({ target: { value } }) => { setOrder(value); }}>
            <Box as="option" fontWeight={700} color="red.300" value='DEF' >Default</Box>
            <Box as="option" fontWeight={700} color="red.300" value='ASC'>Asending</Box>
            <Box as="option" fontWeight={700} color="red.300" value='DES'>Desending</Box>
        </Select>
    )
}

export default Order