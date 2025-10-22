import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AttributeForm from '../components/attributeForm'
import { ATTRIBUTE_OPTIONS } from '../components/attributeOptions'

const EditCreature = () => {
    const { creatureId } = useParams();
    const [creatureDetails, setCreatureDetails] = useState({
        name: "",
        ...Object.fromEntries(Object.keys(ATTRIBUTE_OPTIONS).map((key) => [key, ""]))}
    );

    useEffect(() => {
        const fetchCreatureDetails = async() => {
        const response = await fetch(`/api/creatures/${creatureId}`)
        const data = await response.json()
        console.log(data)
        setCreatureDetails(data)
        }

        fetchCreatureDetails()
    }, [])

    const handleChange = (attribute, value) => {
        setCreatureDetails(prev => ({ ...prev, [attribute]: value }));
    };

    const updateCreature = async (event) => {
        event.preventDefault()

        console.log("Form submitted!");
        console.log("Data being sent:", creatureDetails);

        try {
            const options = { 
              method: 'PATCH', 
              headers: { 'Content-Type': 'application/json' }, 
              body: JSON.stringify(creatureDetails) 
            };
      
            const response = await fetch(`/api/creatures/${creatureId}`, options);

            let data = null;
            if (response.ok) {
              const text = await response.text();
              if (text) data = JSON.parse(text);
            }
        
            console.log("Server response:", data);
        
            window.location.href = `/creatures/${creatureId}`;
            
          } catch (err) {
            console.error(err);
          }
    }

    
    return (
        <div>
            <form onSubmit={updateCreature}>

            <AttributeForm 
            creatureDetails = {creatureDetails}
            handleChange = {handleChange}
            />

            <button type="submit">Update Creature</button>
            </form>

            //debug
            <pre>{JSON.stringify(creatureDetails, null, 2)}</pre>

        </div>
    )
}

export default EditCreature