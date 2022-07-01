import React from 'react';
import { Text } from '@chakra-ui/react';
import { getColor, getBgColor } from '../selectors';


const Badget = ({ type }) => {
    return (
        <Text
            fontSize={12}
            fontWeight={500}
            bg={getBgColor(type)}
            p={1}
            px={3}
            color={getColor(type)}
            rounded={5}
        >
            {type.toUpperCase()}
        </Text>
    )
}

export default Badget