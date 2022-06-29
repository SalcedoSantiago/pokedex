import React from 'react';
import { Text } from '@chakra-ui/react';
import { getColor } from '../selectors';


const Badget = ({ type }) => {
    return (
        <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={getColor(type)}
            p={1}
            px={3}
            color={'white'}
            rounded={5}>
            {type}
        </Text>
    )
}

export default Badget