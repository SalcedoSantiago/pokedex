import React, { useState, useEffect } from 'react'
import { useFetch } from '../../pokedex/hooks'

const BASE_URL = "https://pokeapi.co/api/v2/evolution-chain/"

const Evolutions = ({ id }) => {
    const [evo, setEvo] = useState([]);

    useEffect(() => {
        useFetch(BASE_URL + id).then((data) => {
            console.log('data', data);
        })
    }, [id])


    return (
        <div>Evolutions</div>
    )
}

export default Evolutions