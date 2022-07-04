import React from 'react'
import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import GridItemList from './GridItemList';


const GridList = ({ items }) => {


    if (!Boolean(items?.length)) {
        return (
            <Box width={'100%'} h="100%" minH={'500px'}>
                <Flex alignItems={'center'} justifyContent='center' direction={'row'} h="500px">
                    <Text fontWeight={600} color="gray.700">No se encontraron resultados ...</Text>
                </Flex>
            </Box>
        )
    }


    return (
        <Grid minH={'500px'} gap={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" width="100%">
            {items.map((item) =>
                <GridItemList key={item.name} data={item} />
            )}
        </Grid>
    )
}

export default GridList