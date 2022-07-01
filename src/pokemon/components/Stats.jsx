import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { getStatType, getStatColor } from '../selectors'

const Stats = ({ info }) => {

    return (
        <Box py={3} px={5}>
            <Text fontSize={'xl'} textTransform='uppercase' textAlign={'center'} fontWeight={900} mb={3}>Stats</Text>
            <Flex justifyContent='space-between'>
                {info.map(({ stat, base_stat }) =>
                    <Box key={stat.name}>
                        <Box
                            rounded="md "
                            bgColor={getStatColor(stat.name)}
                            color={'white'}
                            fontWeight={400}
                            px={2}
                            py={1   }
                            fontSize="sm"
                        >
                            {getStatType(stat.name)}
                        </Box>
                        <Text
                            fontWeight={600}
                            textAlign={'center'}
                            fontSize="sm"
                            py={2}
                        >{base_stat}</Text>
                    </Box>
                )
                }
            </Flex>
        </Box>
    )
}

export default Stats