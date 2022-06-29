

export const getColor = (type) => {
    switch (type) {
        case 'fire':
            return 'orange.500'
        case 'water':
            return 'blue.400'
        case 'ground':
            return 'yellow.700'
        case 'fighting':
            return 'red.500'
        case 'steel':
            return 'gray.500'
        case 'flying':
            return 'cyan.400'
        default:
            return 'gray.800'
    }

}