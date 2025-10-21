import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CreatureDetails = () => {

    const { creatureId } = useParams();
    const [creatureDetails, setCreatureDetails] = useState([]);

    useEffect(() => {
        const fetchCreatureDeatils = async() => {
        const response = await fetch(`/api/creatures/${creatureId}`)
        const data = await response.json()
        console.log(data)
        setCreatureDetails(data)
        }

        fetchCreatureDeatils()
    }, [creatureId])

    return (
        <div>
                <h2>{creatureDetails.name}</h2>
                {creatureDetails.body}
                {creatureDetails.drink}
                {creatureDetails.mood}
                {creatureDetails.accessory}
                {creatureDetails.color}
                {creatureDetails.stress_level}
        </div>
    )
}

export default CreatureDetails