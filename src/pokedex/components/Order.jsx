

import { Select } from '@chakra-ui/react';
import React from 'react'

const Order = ({ order, setOrder }) => {


    return (
        <Select defaultValue={order} cursor={'pointer'} onChange={(e) => { handleOrder(e); }}>
            <option value='DEF' >Default</option>
            <option value='ASC'>Asending</option>
            <option value='DES'>Desending</option>
        </Select>
    )
}

export default Order