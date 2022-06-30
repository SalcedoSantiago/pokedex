import React from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react';
import GridItemList from './GridItemList';


const GridList = ({ items }) => {


    if (!Boolean(items?.length)) {
        return (
            <Box width={'100%'} h="100%">
                <Heading>No se encontraron resultados</Heading>
            </Box>
        )
    }


    return (
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" width="100%">
            {items.map((item) =>
                <GridItemList key={item.name} data={item} />
            )}
        </Grid>
    )
}

export default GridList