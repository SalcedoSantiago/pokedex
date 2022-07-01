

export const getBgColor = (type) => {
    switch (type) {
        case 'fire':
            return 'orange.400'
        case 'dark':
            return 'black'
        case 'ice':
            return 'blue.400'
        case 'rock':
            return 'yellow.800'
        case 'psychic':
            return 'black'
        case 'ghost':
            return 'black'
        case 'electric':
            return 'yellow.300'
        case 'dragon':
            return 'yellow.400'
        case 'fairy':
            return 'pink.800'
        case 'bug':
            return 'yellow.800'
        case 'grass':
            return 'green.300'
        case 'poison':
            return 'purple.400'
        case 'water':
            return 'blue.200'
        case 'ground':
            return 'yellow.500'
        case 'fighting':
            return 'red.300'
        case 'steel':
            return 'gray.500'
        case 'flying':
            return 'blue.200'
        default:
            return 'gray.300'
    }

}

export const getColor = (type) => {
    switch (type) {
        case 'fire':
            return 'orange.900'
        case 'dark':
            return 'gray.50'
        case 'ice':
            return 'blue.800'
        case 'rock':
            return 'yellow.300'
        case 'psychic':
            return 'yellow.300'
        case 'ghost':
            return 'purple.400'
        case 'electric':
            return 'yellow.900'
        case 'dragon':
            return 'yellow.900'
        case 'fairy':
            return 'pink.100'
        case 'bug':
            return 'yellow.400'
        case 'grass':
            return 'green.700'
        case 'poison':
            return 'purple.800'
        case 'water':
            return 'blue.700'
        case 'ground':
            return 'yellow.900'
        case 'fighting':
            return 'red.900'
        case 'steel':
            return 'gray.800'
        case 'flying':
            return 'blue.500'
        default:
            return 'gray.900'
    }

}


export const getStatType = (stat) => {
    if (stat == 'hp' || stat == 'attack' || stat == 'defense' || stat == 'speed') {
        return stat.slice(0, 3).toUpperCase();
    } else {
        return (stat?.split('-').map((word, index) => index == 0 ? word.slice(0, 2) : word.slice(0, 1)).join('')).toUpperCase() || 'hp';
    }
}


export const getStatColor = (stat) => {
    const type = getStatType(stat);
    switch (type) {
        case 'HP':
            return 'red.500'
        case 'ATT':
            return 'orange.500'
        case 'DEF':
            return 'yellow.700'
        case 'SPA':
            return 'blue.400'
        case 'SPD':
            return 'green.300'
        default:
            return 'gray.800'
    }
}


