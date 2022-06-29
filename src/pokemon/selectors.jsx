

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


