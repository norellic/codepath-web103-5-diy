import React from 'react'
import '../App.css'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CreatureDetails = () => {

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
    }, [creatureId])

    const deleteCreature = async (event) => {
        event.preventDefault()

        console.log("Form submitted!");
        console.log("Data being sent:", creatureDetails);

        try {
            const options = { 
              method: 'DELETE'
            };
      
            const response = await fetch(`/api/creatures/${creatureId}`, options);

            let data = null;
            if (response.ok) {
              const text = await response.text();
              if (text) data = JSON.parse(text);
            }
        
            console.log("Server response:", data);
        
            window.location.href = `/creatures`;
            
          } catch (err) {
            console.error(err);
          }
    }

    return (
        <div>
            <h2>{creatureDetails.name}</h2>
            <p>Body: {creatureDetails.body}</p>
            <p>Drink: {creatureDetails.drink}</p>
            <p>Mood: {creatureDetails.mood}</p>
            <p>Accessory: {creatureDetails.accessory}</p>
            <p>Color: {creatureDetails.color}</p>
            <p>Stress Level: {creatureDetails.stress_level}</p>

            < Link to={`/edit/${creatureId}`}>
                <button>Edit Creature</button>
            </Link>

            <button onClick={deleteCreature}>Delete</button>

        </div>
    )
}

export default CreatureDetails