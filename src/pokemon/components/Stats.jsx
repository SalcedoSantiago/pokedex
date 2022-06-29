import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { getStatType, getStatColor } from '../selectors'

const Stats = ({ info }) => {

    return (
        <Box py={3} px={4}>
            <Text textAlign={'center'} fontWeight={600} mb={3}>Stats</Text>
            <Flex gap={1} justifyContent='space-between'>
                {info.map(({ stat, base_stat }) =>
                    <Box key={stat.name}>
                        <Box
                            rounded="full"
                            bgColor={getStatColor(stat.name)}
                            color={'white'}
                            fontWeight={600}
                            px={2}
                            py={2}
                            fontSize="sm"
                        >
                            {getStatType(stat.name)}
                        </Box>
                        <Text textAlign={'center'}>{base_stat}</Text>
                    </Box>
                )
                }
            </Flex>
        </Box>
    )
}

export default Stats