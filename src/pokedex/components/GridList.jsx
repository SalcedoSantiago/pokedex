import React from 'react'
import { Grid } from '@chakra-ui/react';
import GridItemList from './GridItemList';


const GridList = ({ items }) => {
    return (
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" width="100%">
            {items.map((item, index) =>
                <GridItemList key={index} data={item} />
            )}
        </Grid>
    )
}

export default GridList