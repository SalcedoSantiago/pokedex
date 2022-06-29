import { Box, Heading, Text, Grid } from '@chakra-ui/react';

const Abilities = ({ abilities }) => {

    console.log('abilities', abilities);

    return (
        <Box textAlign={'center'}>
            <Heading>Abilities</Heading>
            <Grid templateColumns={'1fr 1fr'} alignContent="center" alignItems={'center'} gap={3} px={10} py={2}>
                {abilities.map(({ ability: { name } }) =>
                    <Box
                        key={name}
                        py={2}
                        px={3}
                        border={'1px solid red'}
                        borderRadius={'xl'}
                        textAlign='start'
                        fontWeight={700}
                        textTransform="capitalize"
                    >{name.split('-').join(' ')}
                    </Box>
                )
                }
            </Grid>

        </Box>
    )
}

export default Abilities