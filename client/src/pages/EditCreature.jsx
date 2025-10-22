import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AttributeForm from '../components/attributeForm'

const EditCreature = () => {
    const { creatureId } = useParams();
    const [creatureDetails, setCreatureDetails] = useState([]);

    useEffect(() => {
        const fetchCreatureDetails = async() => {
        const response = await fetch(`/api/creatures/${creatureId}`)
        const data = await response.json()
        console.log(data)
        setCreatureDetails(data)
        }

        fetchCreatureDetails()
    }, [])
    
    return (
        <div>
            <p>I am the edit page.</p>
            

            <h2>{creatureDetails.name}</h2>
            <p>Body: {creatureDetails.body}</p>
            <p>Drink: {creatureDetails.drink}</p>

            <AttributeForm />

        </div>
    )
}

export default EditCreature